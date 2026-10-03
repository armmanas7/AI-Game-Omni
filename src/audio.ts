import type { BiomeId } from "./types";

/** Original procedural soundscape. Starts only following a player gesture. */
export class Soundscape {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private wind: BiquadFilterNode | null = null;
  private drone: OscillatorNode | null = null;
  private volume = 0.65;
  private lastStep = 0;
  private noise: AudioBuffer | null = null;
  private lastBiome: BiomeId = "forest";
  start() {
    if (!this.context) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AC) return;
      this.context = new AC();
      const ctx = this.context;
      this.master = ctx.createGain();
      this.master.gain.value = this.volume * 0.38;
      this.master.connect(ctx.destination);
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let brown = 0;
      for (let i = 0; i < data.length; i++) {
        brown = (brown + (Math.random() * 2 - 1) * 0.018) / 1.018;
        data[i] = brown * 3;
      }
      this.noise = buffer;
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      this.wind = ctx.createBiquadFilter();
      this.wind.type = "lowpass";
      this.wind.frequency.value = 470;
      const windGain = ctx.createGain();
      windGain.gain.value = 0.21;
      noise.connect(this.wind);
      this.wind.connect(windGain);
      windGain.connect(this.master);
      noise.start();
      this.drone = ctx.createOscillator();
      this.drone.type = "sine";
      this.drone.frequency.value = 73.416;
      const droneGain = ctx.createGain();
      droneGain.gain.value = 0.034;
      this.drone.connect(droneGain);
      droneGain.connect(this.master);
      this.drone.start();
      const harmonic = ctx.createOscillator();
      harmonic.type = "sine";
      harmonic.frequency.value = 110;
      const gain = ctx.createGain();
      gain.gain.value = 0.011;
      harmonic.connect(gain);
      gain.connect(this.master);
      harmonic.start();
    }
    if (this.context.state === "suspended")
      void this.context.resume().catch(() => {});
  }
  setVolume(volume: number) {
    this.volume = volume;
    if (this.context && this.master)
      this.master.gain.setTargetAtTime(
        volume * 0.38,
        this.context.currentTime,
        0.12,
      );
  }
  setBiome(biome: BiomeId) {
    if (this.lastBiome === biome) return;
    this.lastBiome = biome;
    if (this.context && this.wind && this.drone) {
      this.wind.frequency.setTargetAtTime(
        biome === "forest" ? 470 : biome === "desert" ? 260 : 800,
        this.context.currentTime,
        3,
      );
      this.drone.frequency.setTargetAtTime(
        biome === "forest" ? 73.416 : biome === "desert" ? 55 : 82.406,
        this.context.currentTime,
        3,
      );
    }
  }
  tone(frequency: number, duration = 0.2, delay = 0, strength = 0.22) {
    if (!this.context || !this.master) return;
    const ctx = this.context,
      time = ctx.currentTime + delay;
    const osc = ctx.createOscillator(),
      gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(strength, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(time);
    osc.stop(time + duration + 0.02);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }
  pulse() {
    this.tone(330, 0.55, 0, 0.12);
    this.tone(659, 0.5, 0.12, 0.08);
  }
  scan() {
    this.tone(440, 0.2, 0, 0.13);
    this.tone(587, 0.25, 0.12, 0.16);
    this.tone(880, 0.45, 0.26, 0.12);
  }
  discovery() {
    [293.66, 440, 587.33, 880].forEach((f, i) =>
      this.tone(f, 0.7, i * 0.12, 0.13),
    );
  }
  activate() {
    [146.83, 220, 293.66, 440, 587.33].forEach((f, i) =>
      this.tone(f, 1.4, i * 0.19, 0.16),
    );
  }
  tick() {
    this.tone(570, 0.06, 0, 0.08);
  }
  step(time: number, running: boolean, wet = false) {
    if (time < this.lastStep) this.lastStep = 0;
    if (
      !this.context ||
      !this.master ||
      !this.noise ||
      time - this.lastStep < (running ? 0.31 : 0.46)
    )
      return;
    this.lastStep = time;
    const ctx = this.context;
    const source = ctx.createBufferSource();
    source.buffer = this.noise;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = wet
      ? 1650
      : this.lastBiome === "caves"
        ? 1100
        : 680;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(wet ? 0.11 : 0.14, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + (wet ? 0.22 : 0.11),
    );
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    source.start();
    source.stop(ctx.currentTime + (wet ? 0.23 : 0.12));
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }
}
