const SOURCE_ZH: Record<string, string> = {
  "Sensor still recharging": "传感器仍在充能",
  "Wait until the survey sensor says Pulse ready, or use a crafted pulse cell from your backpack.":
    "等待传感器显示“脉冲就绪”，或在背包中使用已制作的脉冲电池。",
  "Specimen outside scanner range": "标本超出扫描范围",
  "Move closer until the target card says Hold E. Your current scanner range is shown beside the survey sensor.":
    "请靠近标本，直到提示变为“按住 E”。当前扫描范围显示在勘测传感器旁。",
  "Move closer · outside scanner range": "请靠近 · 已超出扫描范围",
  "Clear view required": "需要清晰视线",
  "Move around the ridge or foliage blocking the specimen. Keep it centred in the crosshair.":
    "请绕开遮挡标本的山脊或植物，让标本保持在准星中央。",
  "Move around the obstacle · clear view needed": "请绕开障碍物 · 需要清晰视线",
  "This observation is already recorded": "这个标本已经记录过了",
  "This individual specimen is already in your atlas. Explore for another specimen or use Q to highlight unrecorded discoveries.":
    "这个具体标本已经收录在图鉴中。请寻找其他标本，或按 Q 标出尚未记录的发现。",
  "Recorded · seek another specimen": "已记录 · 请寻找其他标本",
  "Three clues unlock this landmark": "先记录三条线索，再调查遗迹",
  "Hold E to record each of the three distinct clues around this site, then return and hold E on the landmark. Q helps locate unrecorded clues.":
    "先按住 E，分别记录遗迹周围的三条不同线索，再返回并按住 E 调查遗迹。按 Q 可帮助寻找尚未记录的线索。",
  "Record all 3 surrounding clues first": "请先记录周围的全部 3 条线索",
  "Hold the scanner until the bar fills": "请持续扫描，直到进度条填满",
  "Keep the specimen centred and hold E for about one second. Landmarks take a little longer.":
    "让标本保持在准星中央，持续按住 E 约一秒。调查遗迹需要稍长一点时间。",
  "Hold E · reveal finding": "按住 E · 揭开遗迹的秘密",
  "Hold E · record observation": "按住 E · 记录观察",
  "Field supplies use a different action": "收集补给和扫描标本的操作不同",
  "Move within 5 metres, face the supply or probe, and press F. Hold E records catalogue specimens and investigation clues.":
    "靠近补给或探针至 5 米以内，面向它并按 F。按住 E 用于扫描图鉴标本和调查线索。",
  "Move within 5 metres, face the supply or probe, and tap Use. Scan records catalogue specimens and investigation clues.":
    "靠近补给或探针至 5 米以内，面向它并点击“使用”。“扫描”用于记录图鉴标本和调查线索。",
  "No catalogue specimen selected": "尚未瞄准可扫描的标本",
  "Aim at a specimen and hold E until the bar fills. Q marks unrecorded specimens; some trees, rocks and plants are scenery.":
    "瞄准标本并持续按住 E，直到进度条填满。按 Q 可标出未记录的标本；部分树木、岩石和植物仅是环境布景。",
  "Aim at a specimen and hold Scan until the bar fills. Pulse marks unrecorded specimens; some trees, rocks and plants are scenery.":
    "瞄准标本并长按“扫描”，直到进度条填满。点击“脉冲”可标出未记录的标本；部分树木、岩石和植物仅是环境布景。",
  "Move within 5 m · collect / repair": "请靠近至 5 米以内 · 收集或修复",
  "Needs 2 alloy + 1 crystal · collect supplies first":
    "需要 2 个合金和 1 个晶体 · 请先收集补给",
  "Backpack full · craft, use or discard supplies":
    "背包已满 · 请制作、使用或丢弃物品",
  "Move closer to the field supply": "请靠近补给",
  "Move within 5 metres of a field supply or damaged probe and face it. Hold E scans specimens; F collects supplies and repairs probes.":
    "靠近补给或受损探针至 5 米以内，并面向它。按住 E 扫描标本；按 F 收集补给或修复探针。",
  "Follow the path north. Hold E to record each of the three clues around the grove, then scan its central landmark.":
    "沿小路向北，按住 E 分别记录林地周围的三条线索，再扫描中央遗迹。",
  "Repair with 2 alloy + 1 crystal. Earn 55 research XP and locate a supply cache.":
    "消耗 2 个合金和 1 个晶体进行修复，获得 55 点研究经验，并定位一处补给箱。",
};

export const SCAN_ZH: Record<string, string> = { ...SOURCE_ZH };
for (const [english, chinese] of Object.entries(SOURCE_ZH)) {
  const touchEnglish = english
    .replace(/\bhold E\b/gi, (value) =>
      value[0] === "H" ? "Hold Scan" : "hold Scan",
    )
    .replace(/\bQ\b/g, "Pulse");
  if (touchEnglish !== english) {
    SCAN_ZH[touchEnglish] = chinese
      .replace(/按住 E/g, "长按“扫描”")
      .replace(/按 Q/g, "点击“脉冲”");
  }
}
