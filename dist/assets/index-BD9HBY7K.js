(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,O=1031,ne=1033,k=33776,re=33777,A=33778,ie=33779,j=35840,ae=35841,oe=35842,se=35843,ce=36196,le=37492,ue=37496,de=37488,M=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,N=2301,Ie=2302,Le=2303,Re=2400,P=2401,ze=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,F(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=1234567,st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pt(e,t,n){return e===t?0:(n-e)/(t-e)}function mt(e,t,n){return(1-n)*e+n*t}function ht(e,t,n,r){return mt(e,t,1-Math.exp(-n*r))}function gt(e,t=1){return t-Math.abs(dt(e,t*2)-t)}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function yt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bt(e,t){return e+Math.random()*(t-e)}function xt(e){return e*(.5-Math.random())}function St(e){e!==void 0&&(ot=e);let t=ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ct(e){return e*st}function wt(e){return e*ct}function Tt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Et(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Dt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ot(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:F(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var jt={DEG2RAD:st,RAD2DEG:ct,generateUUID:lt,clamp:ut,euclideanModulo:dt,mapLinear:ft,inverseLerp:pt,lerp:mt,damp:ht,pingpong:gt,smoothstep:_t,smootherstep:vt,randInt:yt,randFloat:bt,randFloatSpread:xt,seededRandom:St,degToRad:Ct,radToDeg:wt,isPowerOfTwo:Tt,ceilPowerOfTwo:Et,floorPowerOfTwo:Dt,setQuaternionFromProperEuler:Ot,normalize:At,denormalize:kt},L=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new R,Pt=new Mt,z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new z,It=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Xe(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new R,Yt=class r extends it{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=lt(),this.name=``,this.source=new Gt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],k=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*te+c*re,i[4]=a*S+o*E+s*O+c*A,i[8]=a*C+o*D+s*ne+c*ie,i[12]=a*w+o*ee+s*k+c*j,i[1]=l*x+u*T+d*te+f*re,i[5]=l*S+u*E+d*O+f*A,i[9]=l*C+u*D+d*ne+f*ie,i[13]=l*w+u*ee+d*k+f*j,i[2]=p*x+m*T+h*te+g*re,i[6]=p*S+m*E+h*O+g*A,i[10]=p*C+m*D+h*ne+g*ie,i[14]=p*w+m*ee+h*k+g*j,i[3]=_*x+v*T+y*te+b*re,i[7]=_*S+v*E+y*O+b*A,i[11]=_*C+v*D+y*ne+b*ie,i[15]=_*w+v*ee+y*k+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new R,rn=new tn,an=new R(0,0,0),on=new R(1,1,1),sn=new R,cn=new R,ln=new R,un=new tn,dn=new Mt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},mn=0,hn=new R,gn=new Mt,_n=new tn,vn=new R,yn=new R,bn=new R,xn=new Mt,Sn=new R(1,0,0),Cn=new R(0,1,0),wn=new R(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new fn,r=new Mt,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new z}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};kn.DEFAULT_UP=new R(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=dt(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Nn[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return zt.workingToColorSpace(Ln.copy(this),e),Math.round(ut(Ln.r*255,0,255))*65536+Math.round(ut(Ln.g*255,0,255))*256+Math.round(ut(Ln.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ve){zt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=mt(Pn.h,Fn.h,t),r=mt(Pn.s,Fn.s,t),i=mt(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new B;B.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new R,Vn=new R,Hn=new R,Un=new R,Wn=new R,Gn=new R,Kn=new R,qn=new R,Jn=new R,Yn=new R,Xn=new Xt,Zn=new Xt,Qn=new Xt,$n=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new R,new R,new R,new R,new R,new R,new R,new R],nr=new R,rr=new er,ir=new R,ar=new R,or=new R,sr=new R,cr=new R,lr=new R,ur=new R,dr=new R,fr=new R,pr=new R;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new R,gr=new L,_r=0,vr=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},V=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},xr=new er,Sr=new R,Cr=new R,wr=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?xr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Sr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Cr)),this.expandByPoint(Sr.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tr=0,Er=new tn,Dr=new kn,Or=new R,kr=new er,Ar=new er,jr=new R,Mr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Je(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,n){return Er.makeTranslation(e,t,n),this.applyMatrix4(Er),this}scale(e,t,n){return Er.makeScale(e,t,n),this.applyMatrix4(Er),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new V(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(this.boundingBox.min,kr.min),this.boundingBox.expandByPoint(jr),jr.addVectors(this.boundingBox.max,kr.max),this.boundingBox.expandByPoint(jr)):(this.boundingBox.expandByPoint(kr.min),this.boundingBox.expandByPoint(kr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(kr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(kr.min,Ar.min),kr.expandByPoint(jr),jr.addVectors(kr.max,Ar.max),kr.expandByPoint(jr)):(kr.expandByPoint(Ar.min),kr.expandByPoint(Ar.max))}kr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jr.fromBufferAttribute(a,t),o&&(Or.fromBufferAttribute(e,t),jr.add(Or)),r=Math.max(r,n.distanceToSquared(jr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new L,f=new L,p=new L,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jr.fromBufferAttribute(e,t),jr.normalize(),e.setXYZ(t,jr.x,jr.y,jr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nr=new R,Pr=new R,Fr=new z,Ir=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nr.subVectors(n,t).cross(Pr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fr.getNormalMatrix(e),r=this.coplanarPoint(Nr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lr=0,Rr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lr++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ir().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new L().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new L().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zr=new R,Br=new R,Vr=new R,Hr=new R,Ur=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Br.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(Br);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Hr.dot(this.direction),s=-Hr.dot(Vr),c=Hr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Br).addScaledVector(Vr,d),f}intersectSphere(e,t){if(e.radius<0)return null;zr.subVectors(e.center,this.origin);let n=zr.dot(this.direction),r=zr.dot(zr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,te,O,ne,k,re;if(y>=b&&y>=x?(w=s,D=u,O=p,re=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,te=h,ne=_,k=v):(S=l,C=c,T=f,E=d,ee=h,te=m,ne=v,k=_)):b>=x?(w=c,D=d,O=m,re=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,te=p,ne=v,k=g):(S=s,C=l,T=u,E=f,ee=p,te=h,ne=g,k=v)):(w=l,D=f,O=h,re=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,te=m,ne=g,k=_):(S=c,C=s,T=d,E=u,ee=m,te=p,ne=_,k=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=ee-A*O,ce=te-ie*O,le=ne-A*re,ue=k-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*O+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gr=new tn,Kr=new Ur,qr=new wr,Jr=new R,Yr=new R,Xr=new R,Zr=new R,Qr=new R,$r=new R,ei=new R,ti=new R,ni=class extends kn{constructor(e=new Mr,t=new Wr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$r.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qr.fromBufferAttribute(s,e),a?$r.addScaledVector(Qr,r):$r.addScaledVector(Qr.sub(t),r))}t.add($r)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),Kr.copy(e.ray).recast(e.near),!(qr.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(qr,Jr)===null||Kr.origin.distanceToSquared(Jr)>(e.far-e.near)**2))&&(Gr.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Gr),(n.boundingBox===null||Kr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ti.copy(s),ti.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ti);return l<n.near||l>n.far?null:{distance:l,point:ti.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yr),e.getVertexPosition(c,Xr),e.getVertexPosition(l,Zr);let u=ri(e,t,n,r,Yr,Xr,Zr,ei);if(u){let e=new R;$n.getBarycoord(ei,Yr,Xr,Zr,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};$n.getNormal(Yr,Xr,Zr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Yt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new tn,ci=new tn,li=[],ui=new er,di=new tn,fi=new ni,pi=new wr,mi=class extends ni{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new wr,gi=new L(.5,.5),_i=new R,vi=class{constructor(e=new Ir,t=new Ir,n=new Ir,r=new Ir,i=new Ir,a=new Ir){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476+gi.distanceTo(e.center),hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_i.x=r.normal.x>0?e.max.x:e.min.x,_i.y=r.normal.y>0?e.max.y:e.min.y,_i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_i)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yi=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bi=class extends Yt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xi=class extends bi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Si=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ci=class e extends Mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new V(c,3)),this.setAttribute(`normal`,new V(l,3)),this.setAttribute(`uv`,new V(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class e extends Mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new V(u,3)),this.setAttribute(`normal`,new V(d,3)),this.setAttribute(`uv`,new V(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class e extends wi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class e extends Mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new V(i,3)),this.setAttribute(`normal`,new V(i.slice(),3)),this.setAttribute(`uv`,new V(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Di=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){F(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new R);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,r=[],i=[],a=[],o=new R,s=new tn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new R)}i[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ut(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ut(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oi=class extends Di{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new L){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ki=class extends Oi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ai(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ji=new R,Mi=new R,Ni=new Ai,Pi=new Ai,Fi=new Ai,Ii=class extends Di{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Mi.subVectors(r[0],r[1]).add(r[0]),c=Mi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ji.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ji),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ni.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Pi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Fi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ni.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Pi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Fi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ni.calc(s),Pi.calc(s),Fi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Li(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ri(e,t){let n=1-e;return n*n*t}function zi(e,t){return 2*(1-e)*e*t}function Bi(e,t){return e*e*t}function Vi(e,t,n,r){return Ri(e,t)+zi(e,n)+Bi(e,r)}function Hi(e,t){let n=1-e;return n*n*n*t}function Ui(e,t){let n=1-e;return 3*n*n*e*t}function Wi(e,t){return 3*(1-e)*e*e*t}function Gi(e,t){return e*e*e*t}function Ki(e,t,n,r,i){return Hi(e,t)+Ui(e,n)+Wi(e,r)+Gi(e,i)}var qi=class extends Di{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,i.x,a.x,o.x),Ki(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends Di{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,i.x,a.x,o.x),Ki(e,r.y,i.y,a.y,o.y),Ki(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yi=class extends Di{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Di{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Di{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Di{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y),Vi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$i=Object.freeze({__proto__:null,ArcCurve:ki,CatmullRomCurve3:Ii,CubicBezierCurve:qi,CubicBezierCurve3:Ji,EllipseCurve:Oi,LineCurve:Yi,LineCurve3:Xi,QuadraticBezierCurve:Zi,QuadraticBezierCurve3:Qi,SplineCurve:class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Li(o,s.x,c.x,l.x,u.x),Li(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}}}),ea=class e extends Ei{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ta=class e extends Mr{constructor(e=[new L(0,-.5),new L(.5,0),new L(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ut(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new R,d=new L,f=new R,p=new R,m=new R,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new V(a,3)),this.setAttribute(`uv`,new V(o,2)),this.setAttribute(`normal`,new V(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},na=class e extends Ei{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ra=class e extends Mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new V(p,3)),this.setAttribute(`normal`,new V(m,3)),this.setAttribute(`uv`,new V(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ia=class e extends Mr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new L;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new V(s,3)),this.setAttribute(`normal`,new V(c,3)),this.setAttribute(`uv`,new V(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},aa=class e extends Mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new V(p,3)),this.setAttribute(`normal`,new V(m,3)),this.setAttribute(`uv`,new V(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oa=class e extends Mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new V(c,3)),this.setAttribute(`normal`,new V(l,3)),this.setAttribute(`uv`,new V(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},sa=class e extends Mr{constructor(e=new Qi(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,s=new R,c=new L,l=new R,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new V(u,3)),this.setAttribute(`normal`,new V(d,3)),this.setAttribute(`uv`,new V(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new $i[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ca(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ua(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ua(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function la(e){let t={};for(let n=0;n<e.length;n++){let r=ca(e[n]);for(let e in r)t[e]=r[e]}return t}function ua(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function da(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var pa={clone:ca,merge:la},ma=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ha=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ga=class extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ma,this.fragmentShader=ha,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=da(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_a=class extends ga{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},va=class extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ya=class extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Sa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ca=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},wa=class extends Ca{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case P:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case P:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ta=class extends Ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ea=class extends Ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Da=class extends Ca{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Aa(n,t,g,y,r);i[p]=Oa(x,o,_,b,m)}return i}};function Oa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ka(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Aa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Oa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ka(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ja=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Sa(e.settings)&&(n.settings={inTangents:xa(e.settings.inTangents,Array),outTangents:xa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case N:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return N;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Sa(this.settings)&&(Ma(this.settings.inTangents,e),Ma(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Sa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ma(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ja.prototype.ValueTypeName=``,ja.prototype.TimeBufferType=Float32Array,ja.prototype.ValueBufferType=Float32Array,ja.prototype.DefaultInterpolation=N;var Na=class extends ja{constructor(e,t,n){super(e,t,n)}};Na.prototype.ValueTypeName=`bool`,Na.prototype.ValueBufferType=Array,Na.prototype.DefaultInterpolation=Fe,Na.prototype.InterpolantFactoryMethodLinear=void 0,Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends ja{constructor(e,t,n,r){super(e,t,n,r)}};Pa.prototype.ValueTypeName=`color`;var Fa=class extends ja{constructor(e,t,n,r){super(e,t,n,r)}};Fa.prototype.ValueTypeName=`number`;var Ia=class extends Ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},La=class extends ja{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}};La.prototype.ValueTypeName=`quaternion`,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends ja{constructor(e,t,n){super(e,t,n)}};Ra.prototype.ValueTypeName=`string`,Ra.prototype.ValueBufferType=Array,Ra.prototype.DefaultInterpolation=Fe,Ra.prototype.InterpolantFactoryMethodLinear=void 0,Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends ja{constructor(e,t,n,r){super(e,t,n,r)}};za.prototype.ValueTypeName=`vector`;var Ba=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Va=class extends Ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ha=new tn,Ua=new R,Wa=new R,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ua.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ua),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ha,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ka=new R,qa=new Mt,Ja=new R,Ya=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,qa,Ja),Ja.x===1&&Ja.y===1&&Ja.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,qa,Ja.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ka,qa,Ja),Ja.x===1&&Ja.y===1&&Ja.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,qa,Ja.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xa=new R,Za=new L,Qa=new L,$a=class extends Ya{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,t){return this.getViewBounds(e,Za,Qa),t.subVectors(Qa,Za)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eo=class extends Ga{constructor(){super(new $a(90,1,.5,500)),this.isPointLightShadow=!0}},to=class extends Ba{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new eo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},no=class extends Ya{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ro=class extends Ga{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new ro}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ao=-90,oo=1,so=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $a(ao,oo,e,t);r.layers=this.layers,this.add(r);let i=new $a(ao,oo,e,t);i.layers=this.layers,this.add(i);let a=new $a(ao,oo,e,t);a.layers=this.layers,this.add(a);let o=new $a(ao,oo,e,t);o.layers=this.layers,this.add(o);let s=new $a(ao,oo,e,t);s.layers=this.layers,this.add(s);let c=new $a(ao,oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},co=class extends $a{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},lo=`\\[\\]\\.:\\/`,uo=RegExp(`[\\[\\]\\.:\\/]`,`g`),fo=`[^\\[\\]\\.:\\/]`,po=`[^`+lo.replace(`\\.`,``)+`]`,mo=`((?:WC+[\\/:])*)`.replace(`WC`,fo),ho=`(WCOD+)?`.replace(`WCOD`,po),go=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,fo),_o=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,fo),vo=RegExp(`^`+mo+ho+go+_o+`$`),yo=[`material`,`materials`,`bones`,`map`],bo=class{constructor(e,t,n){let r=n||xo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(uo,``)}static parseTrackName(e){let t=vo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);yo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xo.Composite=bo,xo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xo.prototype.GetterByBindingType=[xo.prototype._getValue_direct,xo.prototype._getValue_array,xo.prototype._getValue_arrayElement,xo.prototype._getValue_toArray],xo.prototype.SetterByBindingTypeAndVersioning=[[xo.prototype._setValue_direct,xo.prototype._setValue_direct_setNeedsUpdate,xo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xo.prototype._setValue_array,xo.prototype._setValue_array_setNeedsUpdate,xo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xo.prototype._setValue_arrayElement,xo.prototype._setValue_arrayElement_setNeedsUpdate,xo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xo.prototype._setValue_fromArray,xo.prototype._setValue_fromArray_setNeedsUpdate,xo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var So=new tn,Co=class{constructor(e,t,n=0,r=1/0){this.ray=new Ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):I(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return So.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(So),this}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(wo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)To(e[r],this,n,t);return n.sort(wo),n}};function wo(e,t){return e.distance-t.distance}function To(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)To(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Eo(e,t,n,r){let i=Do(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case k:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case A:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case se:return Math.max(e,16)*Math.max(t,8)/4;case j:case oe:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Do(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Oo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ko(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ao={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},H={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},jo={basic:{uniforms:la([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:Ao.meshbasic_vert,fragmentShader:Ao.meshbasic_frag},lambert:{uniforms:la([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:Ao.meshlambert_vert,fragmentShader:Ao.meshlambert_frag},phong:{uniforms:la([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ao.meshphong_vert,fragmentShader:Ao.meshphong_frag},standard:{uniforms:la([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ao.meshphysical_vert,fragmentShader:Ao.meshphysical_frag},toon:{uniforms:la([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new B(0)}}]),vertexShader:Ao.meshtoon_vert,fragmentShader:Ao.meshtoon_frag},matcap:{uniforms:la([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:Ao.meshmatcap_vert,fragmentShader:Ao.meshmatcap_frag},points:{uniforms:la([H.points,H.fog]),vertexShader:Ao.points_vert,fragmentShader:Ao.points_frag},dashed:{uniforms:la([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ao.linedashed_vert,fragmentShader:Ao.linedashed_frag},depth:{uniforms:la([H.common,H.displacementmap]),vertexShader:Ao.depth_vert,fragmentShader:Ao.depth_frag},normal:{uniforms:la([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:Ao.meshnormal_vert,fragmentShader:Ao.meshnormal_frag},sprite:{uniforms:la([H.sprite,H.fog]),vertexShader:Ao.sprite_vert,fragmentShader:Ao.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ao.background_vert,fragmentShader:Ao.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:Ao.backgroundCube_vert,fragmentShader:Ao.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ao.cube_vert,fragmentShader:Ao.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ao.equirect_vert,fragmentShader:Ao.equirect_frag},distance:{uniforms:la([H.common,H.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ao.distance_vert,fragmentShader:Ao.distance_frag},shadow:{uniforms:la([H.lights,H.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:Ao.shadow_vert,fragmentShader:Ao.shadow_frag}};jo.physical={uniforms:la([jo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:Ao.meshphysical_vert,fragmentShader:Ao.meshphysical_frag};var Mo={r:0,b:0,g:0},No=new tn,Po=new z;Po.set(-1,0,0,0,1,0,0,0,1);function Fo(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ni(new Ci(1,1,1),new ga({name:`BackgroundCubeMaterial`,uniforms:ca(jo.backgroundCube.uniforms),vertexShader:jo.backgroundCube.vertexShader,fragmentShader:jo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(No.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Po),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ni(new ra(2,2),new ga({name:`BackgroundMaterial`,uniforms:ca(jo.background.uniforms),vertexShader:jo.background.vertexShader,fragmentShader:jo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Mo,fa(e)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Io(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Lo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ro(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function zo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ir,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Bo=4,Vo=6,Ho=20,Uo=256,Wo=new no,Go=new B,Ko=null,qo=0,Jo=0,Yo=!1,Xo=new R,Zo=new R,Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Xo}=i;Ko=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=as(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,qo,Jo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:He,depthBuffer:!1},r=es(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=es(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$o(r)),this._blurMaterial=rs(r,e,t),this._ggxMaterial=ns(r,e,t)}return r}_compileMaterial(e){let t=new ni(new Mr,e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,r,i){let a=new $a(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Go),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new Ci,new Wr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Go),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ts(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=as()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=is());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ts(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Wo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Bo?n-d+Bo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ts(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Wo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ts(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Wo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ts(t,3*l*(r>this._lodMax-Bo?r-this._lodMax+Bo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Wo)}};function $o(e){let t=[],n=[],r=e,i=e-Bo+1+Vo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Zo.set(1,r,n):e===1?Zo.set(-n,1,-r):e===2?Zo.set(-n,r,1):e===3?Zo.set(-1,r,-n):e===4?Zo.set(-n,-1,r):Zo.set(n,r,-1),Zo.toArray(l,(e*6+t)*3)}}let u=new Mr;u.setAttribute(`position`,new vr(c,3)),u.setAttribute(`outputDirection`,new vr(l,3)),n.push(new ni(u,null)),r>Bo&&r--}return{lodMeshes:n,sizeLods:t}}function es(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ts(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ns(e,t,n){return new ga({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Uo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rs(e,t,n){return new ga({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function is(){return new ga({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function as(){return new ga({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function os(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ss=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),i=new ga({name:`CubemapFromEquirect`,uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ni(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new so(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function cs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ss(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Qo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Qo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ls(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function us(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ds(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function fs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ps(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new $t(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new L(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ms(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var hs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function gs(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Mr;l.setAttribute(`position`,new V([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new V([0,2,0,0,2,0],2));let u=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ni(l,u),f=new no(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},zt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=hs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var _s=new Yt,vs=new bi(1,1),ys=new $t,bs=new en,xs=new yi,Ss=[],Cs=[],ws=new Float32Array(16),Ts=new Float32Array(9),Es=new Float32Array(4);function Ds(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ss[i];if(a===void 0&&(a=new Float32Array(i),Ss[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Os(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ks(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function As(e,t){let n=Cs[t];n===void 0&&(n=new Int32Array(t),Cs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Os(n,t))return;e.uniform2fv(this.addr,t),ks(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Os(n,t))return;e.uniform3fv(this.addr,t),ks(n,t)}}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Os(n,t))return;e.uniform4fv(this.addr,t),ks(n,t)}}function Fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Os(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ks(n,t)}else{if(Os(n,r))return;Es.set(r),e.uniformMatrix2fv(this.addr,!1,Es),ks(n,r)}}function Is(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Os(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ks(n,t)}else{if(Os(n,r))return;Ts.set(r),e.uniformMatrix3fv(this.addr,!1,Ts),ks(n,r)}}function Ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Os(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ks(n,t)}else{if(Os(n,r))return;ws.set(r),e.uniformMatrix4fv(this.addr,!1,ws),ks(n,r)}}function Rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Os(n,t))return;e.uniform2iv(this.addr,t),ks(n,t)}}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Os(n,t))return;e.uniform3iv(this.addr,t),ks(n,t)}}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Os(n,t))return;e.uniform4iv(this.addr,t),ks(n,t)}}function Hs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Os(n,t))return;e.uniform2uiv(this.addr,t),ks(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Os(n,t))return;e.uniform3uiv(this.addr,t),ks(n,t)}}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Os(n,t))return;e.uniform4uiv(this.addr,t),ks(n,t)}}function Ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(vs.compareFunction=n.isReversedDepthBuffer()?518:515,a=vs):a=_s,n.setTexture2D(t||a,i)}function qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||bs,i)}function Js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||xs,i)}function Ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ys,i)}function Xs(e){switch(e){case 5126:return js;case 35664:return Ms;case 35665:return Ns;case 35666:return Ps;case 35674:return Fs;case 35675:return Is;case 35676:return Ls;case 5124:case 35670:return Rs;case 35667:case 35671:return zs;case 35668:case 35672:return Bs;case 35669:case 35673:return Vs;case 5125:return Hs;case 36294:return Us;case 36295:return Ws;case 36296:return Gs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ks;case 35679:case 36299:case 36307:return qs;case 35680:case 36300:case 36308:case 36293:return Js;case 36289:case 36303:case 36311:case 36292:return Ys}}function Zs(e,t){e.uniform1fv(this.addr,t)}function Qs(e,t){let n=Ds(t,this.size,2);e.uniform2fv(this.addr,n)}function $s(e,t){let n=Ds(t,this.size,3);e.uniform3fv(this.addr,n)}function ec(e,t){let n=Ds(t,this.size,4);e.uniform4fv(this.addr,n)}function tc(e,t){let n=Ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nc(e,t){let n=Ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rc(e,t){let n=Ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ic(e,t){e.uniform1iv(this.addr,t)}function ac(e,t){e.uniform2iv(this.addr,t)}function oc(e,t){e.uniform3iv(this.addr,t)}function sc(e,t){e.uniform4iv(this.addr,t)}function cc(e,t){e.uniform1uiv(this.addr,t)}function lc(e,t){e.uniform2uiv(this.addr,t)}function uc(e,t){e.uniform3uiv(this.addr,t)}function dc(e,t){e.uniform4uiv(this.addr,t)}function fc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?vs:_s;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function pc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||bs,a[e])}function mc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||xs,a[e])}function hc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ys,a[e])}function gc(e){switch(e){case 5126:return Zs;case 35664:return Qs;case 35665:return $s;case 35666:return ec;case 35674:return tc;case 35675:return nc;case 35676:return rc;case 5124:case 35670:return ic;case 35667:case 35671:return ac;case 35668:case 35672:return oc;case 35669:case 35673:return sc;case 5125:return cc;case 36294:return lc;case 36295:return uc;case 36296:return dc;case 35678:case 36198:case 36298:case 36306:case 35682:return fc;case 35679:case 36299:case 36307:return pc;case 35680:case 36300:case 36308:case 36293:return mc;case 36289:case 36303:case 36311:case 36292:return hc}}var _c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xs(t.type)}},vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gc(t.type)}},yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function xc(e,t){e.seq.push(t),e.map[t.id]=t}function Sc(e,t,n){let r=e.name,i=r.length;for(bc.lastIndex=0;;){let a=bc.exec(r),o=bc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xc(n,l===void 0?new _c(s,e,t):new vc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new yc(s),xc(n,e)),n=e}}}var Cc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Sc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function wc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Tc=37297,Ec=0;function Dc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Oc=new z;function kc(e){zt._getMatrix(Oc,zt.workingColorSpace,e);let t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ac(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Dc(e.getShaderSource(t),r)}return i}function jc(e,t){let n=kc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Mc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Nc(e,t){let n=Mc[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pc=new R;function Fc(){return zt.getLuminanceCoefficients(Pc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pc.x.toFixed(4)}, ${Pc.y.toFixed(4)}, ${Pc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ic(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zc).join(`
`)}function Lc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zc(e){return e!==``}function Bc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(e){return e.replace(Hc,Gc)}var Wc=new Map;function Gc(e,t){let n=Ao[t];if(n===void 0){let e=Wc.get(t);if(e!==void 0)n=Ao[e],F(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Uc(n)}var Kc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(e){return e.replace(Kc,Jc)}function Jc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Yc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Xc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Zc(e){return Xc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Qc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function $c(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Qc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var el={302:`ENVMAP_MODE_REFRACTION`};function tl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:el[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var nl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function rl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:nl[e.combine]||`ENVMAP_BLENDING_NONE`}function il(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function al(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Zc(n),l=$c(n),u=tl(n),d=rl(n),f=il(n),p=Ic(n),m=Lc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zc).join(`
`),_.length>0&&(_+=`
`)):(g=[Yc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zc).join(`
`),_=[Yc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ao.tonemapping_pars_fragment,n.toneMapping===0?``:Nc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ao.colorspace_pars_fragment,jc(`linearToOutputTexel`,n.outputColorSpace),Fc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zc).join(`
`)),o=Uc(o),o=Bc(o,n),o=Vc(o,n),s=Uc(s),s=Bc(s,n),s=Vc(s,n),o=qc(o),s=qc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=wc(i,i.VERTEX_SHADER,y),S=wc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ac(i,x,`vertex`),n=Ac(i,S,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Cc(i,h),T=Rc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Tc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ec++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ol=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cl(e),t.set(e,n)),n}},cl=class{constructor(e){this.id=ol++,this.code=e,this.usedTimes=0}};function ll(e){return e===1030||e===37490||e===36285}function ul(e,t,n,r,i,a){let o=new pn,s=new sl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=jo[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),k=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&ll(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:k,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=jo[t];n=pa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new al(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function dl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function fl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ml(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||fl),r.length>1&&r.sort(t||pl),i.length>1&&i.sort(t||pl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function hl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ml,e.set(t,[i])):n>=r.length?(i=new ml,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function gl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new B};break;case`SpotLight`:n={position:new R,direction:new R,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function _l(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var vl=0;function yl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function bl(e){let t=new gl,n=_l(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new tn,o=new tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(yl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=H.LTC_FLOAT_1,r.rectAreaLTC2=H.LTC_FLOAT_2):(r.rectAreaLTC1=H.LTC_HALF_1,r.rectAreaLTC2=H.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=vl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function xl(e){let t=new bl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Sl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new xl(e),t.set(n,[a])):r>=i.length?(a=new xl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tl=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],El=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Dl=new tn,Ol=new R,kl=new R;function Al(e,t,n){let i=new vi,a=new L,s=new L,c=new Xt,l=new ya,u=new ba,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:Cl,fragmentShader:wl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Mr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ni(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){F(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new bi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new ss(a.x),p.map.depthTexture=new xi(a.x,m)):(p.map=new Qt(a.x,a.y),p.map.depthTexture=new bi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ol.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ol),kl.copy(e.position),kl.add(Tl[t]),e.up.copy(El[t]),e.lookAt(kl),e.updateMatrixWorld(),n.makeTranslation(-Ol.x,-Ol.y,-Ol.z),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Qt(a.x,a.y,{format:te,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function jl(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Xt().fromArray(oe),le=new Xt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==te&&(re&&e.lineWidth(t),te=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:He}}function Ml(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new L,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function O(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ue:zt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function k(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ae(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&F(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(e,t){let n=f.get(e);if(e.isVideoTexture&&N(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){Se(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){Se(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){Ce(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let he={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ge={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},_e={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ve(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,he[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,he[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,he[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ge[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ge[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,_e[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ye(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&j(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=be(r.start,t.width,4),c=be(n.start,t.width,4);r.start<=o+1&&s===c&&be(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Se(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ye(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=zt.getPrimaries(zt.workingColorSpace),n=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=O(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ve(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=k(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&xe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Eo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Eo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Le(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Le(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n){if(t.image.length!==6)return;let r=ye(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=zt.getPrimaries(zt.workingColorSpace),o=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=k(t,h);ve(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.normalized,i.colorSpace);Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ee(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,re)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else M(t.depthTexture,0);let a=i.__webglTexture,o=Pe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ee(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ee(t.__webglFramebuffer[0],e,0):Ee(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Te(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Te(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){let r=f.get(e);t!==void 0&&we(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&De(e)}function ke(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,A);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Fe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Te(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)we(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ve(o,r),we(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ve(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else we(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&De(e)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(e){if(e.samples>0){if(Fe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(je.push(a),Me.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Me)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Nl(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Pl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Si(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ga({vertexShader:Pl,fragmentShader:Fl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Il,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new L,te=null,O=null,ne=new $a;ne.viewport=new Xt;let k=new $a;k.viewport=new Xt;let re=[ne,k],A=new co,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function ae(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new bi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new R,le=new R;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=k.near=ne.near=t,A.far=k.far=ne.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,ne.layers.mask=A.layers.mask&-5,k.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,ne,k):A.projectionMatrix.copy(ne.projectionMatrix),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new $a,o.layers.enable(n),o.viewport=new Xt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Si,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let me=new Oo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},Rl=new tn,zl=new z;zl.set(-1,0,0,0,1,0,0,0,1);function Bl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,fa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Rl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(zl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Vl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Hl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ul=null;function Wl(){return Ul===null&&(Ul=new ai(Hl,16,16,te,g),Ul.name=`DFG_LUT`,Ul.minFilter=o,Ul.magFilter=o,Ul.wrapS=t,Ul.wrapT=t,Ul.generateMipmaps=!1,Ul.needsUpdate=!0),Ul}var Gl=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ne,O,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new R,te=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Xt,he=new Xt,ge=null,_e=new B(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Xt(0,0,ye,be),Te=new Xt(0,0,ye,be),Ee=!1,De=new vi,Oe=!1,ke=!1,Ae=new tn,je=new R,Me=new Xt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,Be,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt,it,at,ot,st,ct,lt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ut()}catch(e){throw t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),I(`WebGLRenderer: `+e.message),e}function ut(){Le=new ls(N),Le.init(),st=new Nl(N,Le),Re=new Ro(N,Le,e,st),P=new jl(N,Le),Re.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new fs(N),Be=new dl,He=new Ml(N,Le,P,Be,Re,st,ze),Ue=new cs(j),We=new ko(N),ct=new Io(N,We),Ge=new us(N,We,ze,ct),Ke=new ms(N,Ge,We,ct,ze),it=new ps(N,Re,He),et=new zo(Be),Je=new ul(j,Ue,Le,Re,ct,et),Ye=new Bl(j,Be),Xe=new hl,Qe=new Sl(Le),rt=new Fo(j,Ue,P,Ke,x,s),tt=new Al(j,Ke,Re),lt=new Vl(N,ze,Re,P),at=new Lo(N,Le,ze),ot=new ds(N,Le,ze),ze.programs=Je.programs,j.capabilities=Re,j.extensions=Le,j.properties=Be,j.renderLists=Xe,j.shadowMap=tt,j.state=P,j.info=ze}S!==1009&&(ie=new gs(S,t.width,t.height,o,r,i));let dt=new Ll(j,N);this.xr=dt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(dt.isPresenting){F(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),rt.dispose(),Xe.dispose(),Qe.dispose(),Be.dispose(),Ue.dispose(),Ke.dispose(),ct.dispose(),lt.dispose(),Je.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,xt),dt.removeEventListener(`sessionend`,St),Ct.stop()};function ft(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),ae=!0}function pt(){$e(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=tt.enabled,n=tt.autoUpdate,r=tt.needsUpdate,i=tt.type;ut(),ze.autoReset=e,tt.enabled=t,tt.autoUpdate=n,tt.needsUpdate=r,tt.type=i}function mt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){_t(e),Be.remove(e)}function _t(e){let t=Be.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=We.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=Be.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&et.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Qe.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=et.init(this.clippingPlanes,ke),Oe===!0&&et.setGlobalState(this.clippingPlanes,t),oe!==null&&tt.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Be.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Oo;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,dt.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},dt.addEventListener(`sessionstart`,xt),dt.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Qe.get(e,A.length),k.init(t),k.state.textureUnits=He.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,qe,t.reversedDepth),ke=this.localClippingEnabled,Oe=et.init(this.clippingPlanes,ke),te=Xe.get(e,re.length),te.init(),re.push(te),dt.enabled===!0&&dt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,j.sortObjects)}wt(e,t,0,j.sortObjects),te.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&te.sort(Se,Ce),Pe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Pe&&rt.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&et.beginShadows();let i=k.state.shadowsArray;if(tt.render(i,e,t),Oe===!0&&et.endShadows(),(r&&ie.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Pe&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(te,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Pe&&rt.render(e),Tt(te,e,t)}M!==null&&de===0&&(He.updateMultisampleRenderTarget(M),He.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ct.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],He.setTextureUnits(k.state.textureUnits),Oe===!0&&et.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),te=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ke.update(e),a=e.material;a.visible&&te.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&te.push(e,i,c,n,Me.z,s,t)}}else a.visible&&te.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&et.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),u=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&rt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&et.setGlobalState(j.clippingPlanes,r),Dt(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}j.setRenderTarget(s,u,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function kt(e,t,n){t.isScene!==!0&&(t=Ne);let r=Be.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Je.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=et.uniform),jt(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=Be.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function L(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Be.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;et.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==et.numPlanes||v.numIntersection!==et.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=kt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=L(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,He),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,He),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,He));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&it.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Wl()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Nt(E,w),a&&r.fog===!0&&Ye.refreshFogUniforms(E,a),Ye.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Cc.upload(N,At(v),E,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cc.upload(N,At(v),E,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,x),lt.bind(n,x)}}return x}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=Be.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Be.get(e.texture).__webglTexture=t,Be.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Be.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=Be.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,Be.get(e.texture).__webglTexture,Be.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Be.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Be.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?Be.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=Be.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Be.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Be.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function z(e){let t=Be.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=z(o);if(u.__formatReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=M===null?null:Be.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=z(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,st.convert(l),st.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:Be.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await nt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Be.get(e),r=Be.get(t),h=Be.get(n.__renderTarget),g=Be.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Be.has(e)){let n=Be.get(e),r=Be.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){Be.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}},Kl={"wildflower-meadow":{id:`wildflower-meadow`,name:`Starpetal Meadows`,biome:`forest`,ground:`#8ea179`,accent:`#e4bca5`,description:`Open grass and layered flower beds draw pollinators into the light.`},fernwood:{id:`fernwood`,name:`The Fernwood`,biome:`forest`,ground:`#55765e`,accent:`#86af8c`,description:`Tall spires, tree ferns and fallen timber shelter a dense understory.`},"willow-grove":{id:`willow-grove`,name:`Veilwillow Grove`,biome:`forest`,ground:`#6b8b80`,accent:`#b6d3ce`,description:`Trailing silver-green branches shade quiet lily and bellflower beds.`},"spore-wetland":{id:`spore-wetland`,name:`Sporelight Wetlands`,biome:`forest`,ground:`#507c74`,accent:`#bca7d6`,description:`Reeds, broad leaves and soft fungi follow shallow moisture channels.`},"sun-oasis":{id:`sun-oasis`,name:`Sunwell Oasis`,biome:`desert`,ground:`#ad956c`,accent:`#a9b986`,description:`Palms, cycads and bright flowers gather where the sand holds moisture.`},"cactus-garden":{id:`cactus-garden`,name:`The Cactus Garden`,biome:`desert`,ground:`#c89b78`,accent:`#a1bd91`,description:`Branching glass flora and rounded reservoirs form a patient desert garden.`},"stone-badlands":{id:`stone-badlands`,name:`Ochre Badlands`,biome:`desert`,ground:`#af8064`,accent:`#d9b39a`,description:`Weathered stacks and occasional arches frame sparse pockets of life.`},"crystal-garden":{id:`crystal-garden`,name:`Prism Gardens`,biome:`caves`,ground:`#3b5661`,accent:`#8ecad6`,description:`Dense blue prisms support coral growth and tiny mineral grazers.`},"fungal-hollow":{id:`fungal-hollow`,name:`The Fungal Hollow`,biome:`caves`,ground:`#3d464f`,accent:`#c8a1d3`,description:`Glowing caps, shelf colonies and round puffballs occupy the damp dark.`},"echo-vault":{id:`echo-vault`,name:`Echo Vaults`,biome:`caves`,ground:`#32444f`,accent:`#a6bbd3`,description:`Tall mineral columns leave open passages for drifting cavern rays.`}},ql=[{id:`pearl-lantern`,name:`Pearl Lantern`,subtitle:`A flower that stores the dusk`,biome:`forest`,category:`flora`,rarity:`common`,model:`lantern-bloom`,color:`#efca9d`,xp:18,description:`A translucent bloom cupped around a warm, pearl-like centre. Its stem bends towards reflected light beneath the canopy.`,insight:`The bloom appears to hold daylight in a waxy membrane, offering nearby insects a steady guide after sunset.`},{id:`crownspore`,name:`Crownspore`,subtitle:`A suspended seed chamber`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`spore-crown`,color:`#c5a5dc`,xp:28,description:`A ring of soft pods floats above a narrow stalk. Tiny particles drift between the pods without reaching the ground.`,insight:`Its spores use the sheltered air beneath taller trees. A small change in wind may carry an entire new colony.`},{id:`prism-frond`,name:`Prism Frond`,subtitle:`Light divided into living colour`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`prism-fern`,color:`#83d6bf`,xp:28,description:`Angular leaflets split stray beams into green and blue. Their edges are firm, while the central ribs move freely.`,insight:`The frond redirects light towards its shaded lower leaves, sharing energy between different layers of the plant.`},{id:`whisper-reed`,name:`Whisper Reed`,subtitle:`A listener along the forest floor`,biome:`forest`,category:`flora`,rarity:`common`,model:`reed`,color:`#98c79c`,xp:18,description:`Slender hollow stems gather in small groups. Each carries a thin ribbon that turns with the slightest breeze.`,insight:`Its hollow stems disperse moisture along the root bed. The familiar rustle is evidence of this hidden exchange.`},{id:`copperfan`,name:`Copperfan`,subtitle:`A folded rain collector`,biome:`forest`,category:`flora`,rarity:`common`,model:`fan-fern`,color:`#c6ba80`,xp:18,description:`Wide leaves unfold from a compact spiral, their copper-coloured tips catching drops falling from above.`,insight:`The grooves return captured water to the central root. This little reservoir supports the surrounding moss.`},{id:`lumen-moth`,name:`Lumen Moth`,subtitle:`A traveller between lanterns`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`moth`,color:`#f1d8af`,xp:28,description:`A delicate glider with four pearl-coloured wings. It settles briefly near luminous flowers before rising again.`,insight:`Dust on its wings matches several forest plants. Its short journeys connect blooms that never receive direct sunlight.`},{id:`heartwood-archive`,name:`Heartwood Archive`,subtitle:`The forest remembers its seasons`,biome:`forest`,category:`relic`,rarity:`rare`,model:`heartwood`,color:`#f6dba3`,xp:85,description:`Living wood encloses a suspended golden seed. Three root channels converge beneath its weathered outer shell.`,insight:`Nearby specimens reveal a shared water cycle. The archive preserves that exchange: a record of a forest surviving together.`},{id:`glass-cactus`,name:`Glass Cactus`,subtitle:`A reservoir behind translucent ribs`,biome:`desert`,category:`flora`,rarity:`common`,model:`glass-cactus`,color:`#95cbbf`,xp:18,description:`Transparent ribs protect a narrow green core. Sand settles against the lowest branches but never buries their tips.`,insight:`The ribs scatter intense sunlight while the shaded core retains water. Growth is slow but remarkably resilient.`},{id:`sun-stone`,name:`Sun Stone`,subtitle:`A mineral warmed from within`,biome:`desert`,category:`mineral`,rarity:`common`,model:`sun-stone`,color:`#f2bd79`,xp:18,description:`A rounded amber mineral with a bright seam. The seam follows the surface like the outline of an older crystal.`,insight:`Different layers absorb and release heat at different rates. Their slow expansion creates the stone’s distinctive seam.`},{id:`sand-rose`,name:`Sand Rose`,subtitle:`Petals shaped by the wind`,biome:`desert`,category:`flora`,rarity:`uncommon`,model:`sand-rose`,color:`#dfa28d`,xp:28,description:`A low rosette of thick, terracotta petals shelters a tiny pale centre. Fine grains collect along the outer folds.`,insight:`The outer petals sacrifice themselves to abrasive winds. Protected inner growth can survive between the rare rains.`},{id:`dune-memory`,name:`Dune Memory`,subtitle:`A fragment of an older route`,biome:`desert`,category:`relic`,rarity:`uncommon`,model:`memory-shard`,color:`#dab88a`,xp:28,description:`A slender shard carries parallel markings beneath its surface. One edge is polished smooth by moving sand.`,insight:`The markings follow the spacing of local ridges. Someone once mapped these dunes before the wind rearranged them.`},{id:`wind-needle`,name:`Wind Needle`,subtitle:`Stone sculpted into a slender sail`,biome:`desert`,category:`mineral`,rarity:`common`,model:`desert-spire`,color:`#ce9671`,xp:18,description:`A narrow upright formation rises from a broad base. Its curved face looks almost soft, despite the dense material.`,insight:`Repeated gusts remove softer layers. The remaining spine records the direction of generations of prevailing winds.`},{id:`ochre-geode`,name:`Ochre Geode`,subtitle:`A quiet chamber beneath the dust`,biome:`desert`,category:`mineral`,rarity:`uncommon`,model:`dune-rock`,color:`#c8a276`,xp:28,description:`A cracked outer shell conceals tiny sparkling faces. The surrounding sand is finer than that found on open dunes.`,insight:`The protected chamber forms during brief wet periods. Its growth is a mineral diary of the desert’s rare storms.`},{id:`heliograph-dial`,name:`Heliograph Dial`,subtitle:`An instrument for a changing horizon`,biome:`desert`,category:`relic`,rarity:`rare`,model:`sun-dial`,color:`#f2cc83`,xp:85,description:`A stone instrument frames a suspended disc. Three channels lead towards worn markers around its base.`,insight:`Wind, heat and old markings agree on a seasonal rhythm. The dial once measured that rhythm, helping travellers find water.`},{id:`echo-crystal`,name:`Echo Crystal`,subtitle:`A lattice that carries a soft pulse`,biome:`caves`,category:`mineral`,rarity:`common`,model:`echo-crystal`,color:`#9bd5ed`,xp:18,description:`A tall blue crystal bears a pale internal line. Nearby pieces align themselves along the same direction.`,insight:`Vibrations travel along its inner lattice. A small movement can be carried far beyond the visible crystal cluster.`},{id:`cave-coral`,name:`Cave Coral`,subtitle:`A garden beyond the sun`,biome:`caves`,category:`flora`,rarity:`common`,model:`cave-coral`,color:`#b5a3df`,xp:18,description:`Branching violet growths cling to cool ground. Their rounded tips brighten where moisture gathers.`,insight:`This colony feeds on dissolved minerals. It grows along the same water routes that supply the surrounding crystals.`},{id:`ice-bouquet`,name:`Ice Bouquet`,subtitle:`Many faces, one hidden root`,biome:`caves`,category:`mineral`,rarity:`common`,model:`crystal-cluster`,color:`#b6d9eb`,xp:18,description:`Several short prisms rise from a shared base. Their faces appear almost colourless until viewed from the side.`,insight:`The prisms grow from one solution pocket. Changes in their angles reveal how water once circulated through this hollow.`},{id:`tide-column`,name:`Tide Column`,subtitle:`A layered history of flowing water`,biome:`caves`,category:`mineral`,rarity:`uncommon`,model:`cave-column`,color:`#9dabc7`,xp:28,description:`A smooth pillar narrows between a broad foot and a rounded crown. Pale bands circle its sides.`,insight:`Each band marks a period of mineral deposition. The long column was built by countless small drops rather than one great event.`},{id:`hollow-memory`,name:`Hollow Memory`,subtitle:`An etched fragment in the blue dark`,biome:`caves`,category:`relic`,rarity:`uncommon`,model:`memory-shard`,color:`#b8bfeb`,xp:28,description:`A cool shard displays a repeating sequence of arcs. The pattern resembles the nearby branching mineral channels.`,insight:`The arcs may describe resonance rather than words. Their intervals mirror the pulses carried by local crystal lattices.`},{id:`glimmer-moth`,name:`Glimmer Moth`,subtitle:`A small keeper of the hollows`,biome:`caves`,category:`fauna`,rarity:`uncommon`,model:`moth`,color:`#aad9e8`,xp:28,description:`Broad blue wings carry a row of luminous points. The glider pauses beside mineral-fed colonies.`,insight:`Its wing dust transports nutrients between isolated colonies, joining the cavern’s living and mineral networks.`},{id:`harmonic-heart`,name:`Harmonic Heart`,subtitle:`The hollow answers as one`,biome:`caves`,category:`relic`,rarity:`rare`,model:`harmonic-core`,color:`#b7e5f0`,xp:85,description:`A bright core rests within a ring of dark mineral supports. Three surrounding channels converge beneath it.`,insight:`Crystal, water and living colonies share a rhythm. The heart reveals a cavern connected by resonance as well as by its unseen streams.`}],Jl=[{id:`spirepine`,name:`Spirepine`,subtitle:`A canopy of overlapping needles`,biome:`forest`,category:`flora`,rarity:`common`,model:`spire-pine`,color:`#73998a`,xp:18,habitats:[`fernwood`],description:`A slender trunk carries tiered crowns of dense blue-green needles. Older lower branches make wide shelves above the understory.`,insight:`Its layered silhouette catches drifting mist at several heights, returning droplets to the sheltered roots below.`},{id:`silver-birch`,name:`Silver Birch`,subtitle:`Pale trunks in the meadow light`,biome:`forest`,category:`flora`,rarity:`common`,model:`silver-birch`,color:`#d5d8ba`,xp:18,habitats:[`wildflower-meadow`,`willow-grove`],description:`Pale branching trunks lift small clusters of soft leaves. Warm bands mark the bark where old branches have fallen.`,insight:`Its thin leaves thrive in openings between larger crowns. The bright bark reflects some of the light that would otherwise warm the trunk.`},{id:`veilwillow`,name:`Veilwillow`,subtitle:`A curtain of living rain`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`veil-willow`,color:`#a3c7b6`,xp:28,habitats:[`willow-grove`,`spore-wetland`],description:`Long leafy streamers hang from arched branches. The soft curtain parts above damp patches of ground.`,insight:`Water follows each hanging strand before reaching the soil. These small shaded reservoirs give neighbouring lilies a place to grow.`},{id:`coralwood`,name:`Coralwood`,subtitle:`Branches shaped like a reef`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`coral-tree`,color:`#d99d91`,xp:28,habitats:[`wildflower-meadow`,`fernwood`],description:`A warm rose-coloured crown branches into a network of rounded fingers. Tiny buds nestle between the forks.`,insight:`Open gaps admit light to plants underneath. Its unusual crown offers landing places to the meadow’s smaller gliders.`},{id:`cistern-baobab`,name:`Cistern Baobab`,subtitle:`A living store beneath a broad crown`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`baobab-tree`,color:`#aa9978`,xp:28,habitats:[`wildflower-meadow`,`spore-wetland`],description:`A heavy rounded trunk supports several low spreading branches. Its bark folds around a swollen central chamber.`,insight:`The trunk appears to hold water through the dry season. Moss gathers around the shallow grooves where stored moisture slowly returns.`},{id:`spiralwood`,name:`Spiralwood`,subtitle:`A tree that follows the turning light`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`spiral-tree`,color:`#b7b982`,xp:28,habitats:[`wildflower-meadow`,`willow-grove`],description:`A twisting trunk rises into offset fans of leaves. Successive branches face different directions around the central spiral.`,insight:`The arrangement spreads the canopy across several angles of sunlight. Smaller leaves occupy the openings left by older growth.`},{id:`crown-fern`,name:`Crown Fern`,subtitle:`An understory that became a canopy`,biome:`forest`,category:`flora`,rarity:`common`,model:`tree-fern`,color:`#83aa75`,xp:18,habitats:[`fernwood`,`spore-wetland`],description:`A narrow textured stem lifts a wide umbrella of divided fronds. Tightly rolled young leaves sit at the crown.`,insight:`Elevating its fronds helps this fern reach the damp air above groundcover while keeping its new growth shaded.`},{id:`sunfan-palm`,name:`Sunfan Palm`,subtitle:`A green compass above the sand`,biome:`desert`,category:`flora`,rarity:`common`,model:`fan-palm`,color:`#a6b58b`,xp:18,habitats:[`sun-oasis`],description:`A ringed trunk ends in a circle of stiff fan-shaped leaves. Loose older fronds hang below the freshest crown.`,insight:`Leaf grooves funnel brief rainfall towards the trunk. The standing fans break the hot wind before it reaches the soil below.`},{id:`starpetal`,name:`Starpetal`,subtitle:`Colour scattered across the meadow`,biome:`forest`,category:`flora`,rarity:`common`,model:`starflower`,color:`#e5b3cc`,xp:18,habitats:[`wildflower-meadow`],description:`Five broad petals surround a bright central disc. Small colonies make overlapping stars along the grass.`,insight:`The open flowers welcome both low grazers and passing pollinators. Their small root mats stabilise exposed soil between taller plants.`},{id:`dew-bells`,name:`Dew Bells`,subtitle:`A chime-shaped shelter for pollen`,biome:`forest`,category:`flora`,rarity:`common`,model:`bellflower`,color:`#b5b8e0`,xp:18,habitats:[`willow-grove`,`wildflower-meadow`],description:`Drooping lavender bells hang along a curved stalk. Their shaded interiors remain cool after the meadow warms.`,insight:`The downward openings protect pollen from falling droplets. Small hoppers pause under the bells during the brightest part of the day.`},{id:`ribbon-orchid`,name:`Ribbon Orchid`,subtitle:`A small flourish in the shade`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`orchid`,color:`#e7b5a7`,xp:28,habitats:[`fernwood`,`willow-grove`],description:`Wide paired petals frame a folded centre above glossy narrow leaves. The stalk leans towards a gap in the canopy.`,insight:`A narrow trail of scent seems to attract specific forest gliders. The orchid’s position matters as much as its colour.`},{id:`sunburst`,name:`Sunburst`,subtitle:`The oasis wears a warmer colour`,biome:`desert`,category:`flora`,rarity:`common`,model:`sunburst-flower`,color:`#efc27b`,xp:18,habitats:[`sun-oasis`,`cactus-garden`],description:`Numerous slender golden petals radiate from a dark centre. Tough leaves remain close to the cooler ground.`,insight:`The outer petals shade the reproductive centre during midday. Short roots rapidly absorb the moisture from brief showers.`},{id:`moon-lotus`,name:`Moon Lotus`,subtitle:`A pale bloom above the roots`,biome:`forest`,category:`flora`,rarity:`uncommon`,model:`lotus`,color:`#ddd2df`,xp:28,habitats:[`willow-grove`,`spore-wetland`],description:`Layered pale petals open from a broad low rosette. Its smooth leaves overlap to form a sheltered inner bowl.`,insight:`The bowl traps moisture and organic dust. In this invented ecosystem, the plant thrives in damp soil without needing a deep pool.`},{id:`foxglove-spire`,name:`Foxglove Spire`,subtitle:`Many little rooms on one stem`,biome:`forest`,category:`flora`,rarity:`common`,model:`foxglove`,color:`#d3a4cb`,xp:18,habitats:[`wildflower-meadow`,`fernwood`],description:`Rows of small hanging cups climb a tall stem. Lower flowers open first, leaving younger buds at the top.`,insight:`Staggered flowering keeps food available to pollinators over several days. The plant acts as a reliable waypoint in a shifting meadow.`},{id:`amberberry`,name:`Amberberry`,subtitle:`A bright harvest inside a thicket`,biome:`forest`,category:`flora`,rarity:`common`,model:`berry-bush`,color:`#d7a774`,xp:18,habitats:[`fernwood`,`wildflower-meadow`],description:`Dense rounded leaves enclose clusters of amber fruit. The outer branches bend gently under the ripening berries.`,insight:`Grazer tracks often gather around mature bushes. Carried seeds may explain the new colonies appearing at the edges of nearby clearings.`},{id:`oasis-cycad`,name:`Oasis Cycad`,subtitle:`A low crown built for patient growth`,biome:`desert`,category:`flora`,rarity:`common`,model:`cycad`,color:`#91aa79`,xp:18,habitats:[`sun-oasis`],description:`Stiff divided fronds rise from a short thick base. Older leaves form a protective skirt near the soil.`,insight:`The compact crown reduces exposure to dry wind. Its shaded base shelters seedlings that could not survive on the open sand.`},{id:`silver-aloe`,name:`Silver Aloe`,subtitle:`A rosette sealed against the heat`,biome:`desert`,category:`flora`,rarity:`common`,model:`aloe`,color:`#a4c1b4`,xp:18,habitats:[`sun-oasis`,`cactus-garden`,`stone-badlands`],description:`Thick pointed leaves spiral around a closed centre. Their pale surface is marked by shallow longitudinal grooves.`,insight:`The fleshy leaves serve as reservoirs. Their reflective skin and tight arrangement slow the loss of the water collected during rare rain.`},{id:`barrel-cactus`,name:`Copper Barrel`,subtitle:`A rounded reservoir in the dunes`,biome:`desert`,category:`flora`,rarity:`common`,model:`barrel-cactus`,color:`#b0bb84`,xp:18,habitats:[`cactus-garden`],description:`A squat ribbed globe holds a small warm flower at its crown. Short pale spines follow the curved ribs.`,insight:`The ribs can widen after rainfall, providing room for stored water. Its rounded body exposes relatively little surface to dry air.`},{id:`prickly-sail`,name:`Prickly Sail`,subtitle:`Flat green paddles above the sand`,biome:`desert`,category:`flora`,rarity:`uncommon`,model:`prickly-pear`,color:`#96b59a`,xp:28,habitats:[`cactus-garden`,`sun-oasis`],description:`Oval green pads branch from a compact central stem. Tiny warm buds appear along the edges of older pads.`,insight:`Each pad stores water and captures light. Fallen pieces sometimes establish a new plant, leaving small colonies around the parent.`},{id:`velvet-puffball`,name:`Velvet Puffball`,subtitle:`A round chamber in the cool dark`,biome:`caves`,category:`flora`,rarity:`common`,model:`puffball`,color:`#cebad4`,xp:18,habitats:[`fungal-hollow`],description:`Soft round chambers gather around a low stem. Fine darker flecks mark the surface of the largest bulb.`,insight:`A gentle touch releases a dust of spores. Air moved by cavern rays may carry them into new sheltered mineral beds.`},{id:`shelf-colony`,name:`Shelf Colony`,subtitle:`A staircase for the cavern’s recyclers`,biome:`caves`,category:`flora`,rarity:`common`,model:`shelf-fungus`,color:`#c695ab`,xp:18,habitats:[`fungal-hollow`,`crystal-garden`],description:`Broad semicircular shelves grow in overlapping tiers. Each rim has a lighter band of fresh growth.`,insight:`The shelves increase the colony’s feeding surface along damp stone. Small beetles shelter between their dry upper faces.`},{id:`violet-glowcap`,name:`Violet Glowcap`,subtitle:`A lantern for the underground garden`,biome:`caves`,category:`flora`,rarity:`uncommon`,model:`glowcap`,color:`#b59ce0`,xp:28,habitats:[`fungal-hollow`],description:`A broad violet cap lifts above a fine pale stalk. Its underside glows softly through a row of thin gills.`,insight:`The light gathers tiny mineral grazers near the colony. Their passing bodies carry spores between isolated patches.`},{id:`mirrorleaf`,name:`Mirrorleaf`,subtitle:`A floating-looking carpet at ground level`,biome:`forest`,category:`flora`,rarity:`common`,model:`lily-pad`,color:`#9bbd9c`,xp:18,habitats:[`willow-grove`,`spore-wetland`],description:`Broad circular leaves rest close to the damp soil. A narrow notch guides collected droplets towards the stem.`,insight:`Overlapping leaves create a cool surface beneath larger willows. Their raised rims retain water after the surrounding ground begins to dry.`},{id:`balanced-stone`,name:`Balanced Stone`,subtitle:`A sculpture assembled by patient erosion`,biome:`desert`,category:`mineral`,rarity:`uncommon`,model:`boulder-stack`,color:`#c9a589`,xp:28,habitats:[`stone-badlands`],description:`Rounded stones sit in a narrow leaning stack. Different bands of warm colour cross each weathered face.`,insight:`Softer surrounding layers have eroded first. The surviving stack reveals how unevenly this terrain responds to the wind.`},{id:`moss-grazer`,name:`Moss Grazer`,subtitle:`A slow gardener beneath the canopy`,biome:`forest`,category:`fauna`,rarity:`common`,model:`moss-grazer`,color:`#9cb38b`,xp:18,habitats:[`wildflower-meadow`,`fernwood`,`spore-wetland`],description:`A rounded four-legged animal carries a soft ridged back and a broad low muzzle. It wanders between grass and berry beds.`,insight:`Its patient grazing keeps meadow openings from closing completely. Seeds cling to the textured coat as it moves between patches.`},{id:`fern-hopper`,name:`Fern Hopper`,subtitle:`A small leap between the leaves`,biome:`forest`,category:`fauna`,rarity:`common`,model:`fern-hopper`,color:`#b4c49d`,xp:18,habitats:[`fernwood`,`wildflower-meadow`,`willow-grove`],description:`Long rear legs and upright ears give this small creature an alert silhouette. It pauses before short playful bounds.`,insight:`Its quick changes of direction keep it among the sheltering fronds. Dust carried on its feet connects nearby flower colonies.`},{id:`pearl-shellback`,name:`Pearl Shellback`,subtitle:`A travelling shelter on little feet`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`shellback`,color:`#b1c5bc`,xp:28,habitats:[`willow-grove`,`spore-wetland`],description:`A low animal carries a broad pale segmented shell. Its tiny head emerges beneath the raised front rim.`,insight:`The shell gathers dew during quiet nights. Slow journeys along moist ground distribute small fungal spores and leaf fragments.`},{id:`glass-stag`,name:`Glass Stag`,subtitle:`A quiet silhouette in the silver grove`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`glass-stag`,color:`#bed3cf`,xp:28,habitats:[`willow-grove`,`fernwood`],description:`A slender four-legged browser carries a branching translucent crest. Its narrow head turns towards movement in the understory.`,insight:`The crest may help it display in dim light. Its longer reach lets it browse foliage that smaller meadow animals leave untouched.`},{id:`dune-runner`,name:`Dune Runner`,subtitle:`A light step across the warm ridges`,biome:`desert`,category:`fauna`,rarity:`common`,model:`dune-runner`,color:`#cfae86`,xp:18,habitats:[`sun-oasis`,`stone-badlands`,`cactus-garden`],description:`Long legs support a narrow warm-coloured body and an extended tail. Its small head rises above the desert shrubs.`,insight:`Raised feet reduce time spent on the hot surface. It follows the scattered shade of palms and rock formations between feeding stops.`},{id:`sand-beetle`,name:`Sand Beetle`,subtitle:`A polished shell close to the ground`,biome:`desert`,category:`fauna`,rarity:`common`,model:`sand-beetle`,color:`#c1ad89`,xp:18,habitats:[`cactus-garden`,`stone-badlands`,`sun-oasis`],description:`Six short legs surround a smooth oval carapace. A faint seam divides the back into two glossy plates.`,insight:`The shell sheds abrasive sand. Tracks converge around succulent plants, suggesting a diet built around the desert’s small pockets of life.`},{id:`crystal-beetle`,name:`Crystal Beetle`,subtitle:`A jewel moving between the prisms`,biome:`caves`,category:`fauna`,rarity:`common`,model:`crystal-beetle`,color:`#94c1d4`,xp:18,habitats:[`crystal-garden`,`fungal-hollow`],description:`A faceted blue shell rests on six fine legs. Small pale ridges mirror the neighbouring crystal formations.`,insight:`Its mouthparts scrape thin mineral films from damp stone. The beetle’s journeys keep traces of the cavern’s chemistry in circulation.`},{id:`cavern-ray`,name:`Cavern Ray`,subtitle:`A quiet wing in the blue dark`,biome:`caves`,category:`fauna`,rarity:`uncommon`,model:`cave-ray`,color:`#9eb4d2`,xp:28,habitats:[`echo-vault`,`crystal-garden`,`fungal-hollow`],description:`Broad soft wings spread from a flattened body and a tapering tail. The creature drifts above the mineral floor.`,insight:`Its slow wingbeats stir air through sheltered galleries. That movement carries spores between colonies that otherwise remain isolated.`},{id:`meadow-ray`,name:`Meadow Ray`,subtitle:`A little sail above the flowers`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`sky-ray`,color:`#d6b7cb`,xp:28,habitats:[`wildflower-meadow`,`willow-grove`],description:`A rosy broad-winged creature glides low over the flower beds. Its long tail follows each gentle banking turn.`,insight:`Low flight brings its underside close to exposed blooms. It appears to follow the same flowering routes from one habitat patch to another.`}],Yl=[{id:`canopy-swift`,name:`Canopy Swift`,subtitle:`A forked silhouette above the treetops`,biome:`forest`,category:`fauna`,rarity:`common`,model:`canopy-swift`,color:`#9baebe`,xp:24,habitats:[`fernwood`,`willow-grove`],description:`Swept wings and a deeply forked tail carry this small bird between the upper branches. Its light belly flashes when it banks.`,insight:`Watch the open spaces between trees. Swifts follow those corridors instead of flying through the dense crown.`},{id:`suncrest-bird`,name:`Suncrest Bird`,subtitle:`A bright visitor to flowering groves`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`suncrest-bird`,color:`#e3b26f`,xp:28,habitats:[`wildflower-meadow`,`willow-grove`],description:`A warm crest, short curved beak and colored tail distinguish this small flier from the swift. It circles low over flowering plants.`,insight:`The brightest flowers make useful places to watch its low, repeating flight routes.`},{id:`reed-heron`,name:`Reed Heron`,subtitle:`Long wings over still water`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`reed-heron`,color:`#b7d2d1`,xp:30,habitats:[`willow-grove`,`spore-wetland`],description:`A slender waterbird has a long beak, folded neck and trailing legs. Broad feathered wings sweep above the banks.`,insight:`Its flights follow the shoreline. The lake edge offers an easier view than the trees inland.`},{id:`ribbon-fish`,name:`Ribbon Fish`,subtitle:`A silver ribbon beneath the ripples`,biome:`forest`,category:`fauna`,rarity:`common`,model:`ribbon-fish`,color:`#80bfc7`,xp:24,description:`A slender silver body and delicate fins move in small turns under the surface. Its bright flank catches light through the water.`,insight:`Look down from a shallow bank. Clear water and a close view reveal details that are hidden from the far shore.`},{id:`glass-koi`,name:`Glass Koi`,subtitle:`Warm patches in a cool pool`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`glass-koi`,color:`#e7c295`,xp:30,description:`A broad-bodied fish carries warm patches along its pearl flank. Its rounded tail and paired fins turn slowly in sheltered water.`,insight:`Deeper pockets give the koi room to turn; the calmer parts of a lake are a useful place to begin a survey.`},{id:`lantern-eel`,name:`Lantern Eel`,subtitle:`A moving thread of pale light`,biome:`forest`,category:`fauna`,rarity:`uncommon`,model:`lantern-eel`,color:`#a5d8c4`,xp:32,description:`A long tapering body curves through the darker water, with a thin fin ridge and small luminous nodes along its side.`,insight:`Follow the light below the surface. The eel stays submerged and turns back before reaching dry banks.`}],Xl=[...ql,...Jl,...Yl],Zl=Object.fromEntries(Xl.map(e=>[e.id,e])),Ql=1e7,$l=160,eu=[`forest`,`desert`,`caves`],tu={forest:`heartwood-archive`,desert:`heliograph-dial`,caves:`harmonic-heart`},nu={forest:[[`Pearl`,`Sage`,`Dew`,`Ribbon`,`Quiet`,`Moss`],[`Canopy`,`Grove`,`Garden`,`Reach`,`Thicket`,`Vale`]],desert:[[`Amber`,`Glass`,`Ochre`,`Copper`,`Still`,`Saffron`],[`Dunes`,`Basin`,`Expanse`,`Ridge`,`Horizon`,`Wastes`]],caves:[[`Blue`,`Echo`,`Opal`,`Lunar`,`Silver`,`Deep`],[`Hollow`,`Vault`,`Gallery`,`Sanctum`,`Chamber`,`Passage`]]};function ru(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function iu(e,t,n,r=0){let i=(e^Math.imul(t,374761393)^Math.imul(n,668265263)^Math.imul(r,1274126177))>>>0;return i=Math.imul(i^i>>>16,2246822507),i=Math.imul(i^i>>>13,3266489909),(i^i>>>16)>>>0}function au(e){let t=e||2654435769;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function ou(e,t,n){let r=t===0&&n===0||t===1&&n===0||t===0&&n===1,i=t===0&&n===0?`forest`:t===1&&n===0?`desert`:t===0&&n===1?`caves`:eu[iu(e,t,n,13)%3];return{x:t*$l+(r?0:(iu(e,t,n,19)/4294967296-.5)*54),z:n*$l+(r?0:(iu(e,t,n,23)/4294967296-.5)*54),biome:i,rx:t,rz:n}}function su(e,t,n){let r=ru(e),i=Math.round(t/$l),a=Math.round(n/$l),o=ou(r,i,a),s=1/0;for(let e=-1;e<=1;e++)for(let c=-1;c<=1;c++){let l=ou(r,i+e,a+c),u=(l.x-t)**2+(l.z-n)**2;u<s&&(o=l,s=u)}return o}function cu(e,t,n){return su(e,t,n).biome}function lu(e,t,n){let r=su(e,t,n);if(r.rx===0&&r.rz===0)return`Firstlight Grove`;let i=nu[r.biome],a=iu(ru(e),r.rx,r.rz,47);return`${i[0][a%i[0].length]} ${i[1][Math.floor(a/7)%i[1].length]}`}var uu=e=>e*e*e*(e*(e*6-15)+10),du=(e,t,n)=>e+(t-e)*n;function fu(e,t,n,r){let i=Math.floor(t),a=Math.floor(n),o=uu(t-i),s=uu(n-a),c=(t,n)=>iu(e,i+t,a+n,r)/2147483648-1;return du(du(c(0,0),c(1,0),o),du(c(0,1),c(1,1),o),s)}function pu(e,t,n){let r=Math.hypot(t,n);if(r<=18)return 0;let i=ru(e);return(fu(i,t/145,n/145,3)*3.2+fu(i,t/54,n/54,5)*1.4+fu(i,t/19,n/19,7)*.23)*uu(Math.min(1,(r-18)/34))}function mu(e,t,n,r){return Math.floor(e/64)===n&&Math.floor(t/64)===r}var hu=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function gu(e,t,n,r,i,a,o){let s=`site:${ru(e).toString(16)}:${t}:${n}`,c=ql.filter(e=>e.biome===i&&e.rarity!==`rare`),l=[0,1,2].map(e=>`${s}:clue:${e}`),u=(a?[`whisper-reed`,`prism-frond`,`crownspore`]:[0,1,2].map(e=>c[(o+e*2)%c.length].id)).map((e,t)=>{let n=a?-Math.PI/3+t*Math.PI/3:o/4294967296*Math.PI*2+t*Math.PI*2/3,i=a?9:7+iu(o,t,0,53)%4;return{id:l[t],speciesId:e,x:r.x+Math.cos(n)*i,z:r.z+Math.sin(n)*i,seed:iu(o,t,0,59),rotation:n,scale:1,role:`clue`,siteId:s,clueIndex:t}}),d={forest:`Root Confluence`,desert:`Horizon Observatory`,caves:`Resonance Well`},f={forest:`Scan the three root-linked specimens, then investigate the Heartwood Archive.`,desert:`Scan the three wind-worn specimens, then investigate the Heliograph Dial.`,caves:`Scan the three resonant specimens, then investigate the Harmonic Heart.`},p=`${s}:landmark`;return u.push({...r,id:p,speciesId:tu[i],seed:o,scale:1.1,rotation:o/4294967296*Math.PI*2,role:`landmark`,siteId:s}),{site:{...r,id:s,biome:i,clueIds:l,landmarkId:p,rareSpeciesId:tu[i],name:a?`Firstlight Root Confluence`:`${lu(e,r.x,r.z)} · ${d[i]}`,hint:f[i]},entities:u}}function _u(e,t,n){if(!Number.isSafeInteger(t)||!Number.isSafeInteger(n)||Math.abs(t)>1e7||Math.abs(n)>1e7)throw Error(`Invalid chunk coordinates.`);let r=ru(e),i=iu(r,t,n,61),a=au(i),o={key:`${t},${n}`,cx:t,cz:n,props:[],entities:[],sites:[]},s=t*64,c=n*64,l=t===0&&n===-1;if(l){let a=gu(e,t,n,{x:0,z:-35},`forest`,!0,i);o.sites.push(a.site),o.entities.push(...a.entities),o.entities.push({id:`specimen:${r.toString(16)}:firstlight`,speciesId:`pearl-lantern`,x:0,z:-7,seed:iu(r,0,0,67),scale:1.15,rotation:0,role:`specimen`})}else if(i%4==0)for(let r=0;r<8;r++){let r={x:s+14+a()*36,z:c+14+a()*36};if(Math.hypot(r.x,r.z)<56)continue;let l=cu(e,r.x,r.z),u=gu(e,t,n,r,l,!1,i);if(u.entities.every(r=>mu(r.x,r.z,t,n)&&cu(e,r.x,r.z)===l)){o.sites.push(u.site),o.entities.push(...u.entities);break}}let u=l?i%3:1+iu(r,t,n,71)%3,d=0;for(let l=0;d<u&&l<60;l++){let l={x:s+4+a()*56,z:c+4+a()*56};if(Math.hypot(l.x,l.z)<14||o.entities.some(e=>hu(e,l)<5))continue;let u=ql.filter(t=>t.biome===cu(e,l.x,l.z)&&t.rarity!==`rare`),f=u[Math.floor(a()*u.length)];o.entities.push({...l,id:`specimen:${r.toString(16)}:${t}:${n}:${d}`,speciesId:f.id,seed:iu(i,d,0,73),scale:.88+a()*.34,rotation:a()*Math.PI*2,role:`specimen`}),d++}return o}var vu=Object.freeze({x:45,z:38}),yu=8,bu=208,xu=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),Su=e=>{let t=xu(e);return t*t*(3-2*t)},Cu=new Map,wu=new Map,Tu=new Map,Eu=new Map,Du=new Map,Ou=new Map,ku=e=>{let t=Cu.get(e);return t===void 0&&(t=ru(e),Cu.set(e,t),Cu.size>24&&Cu.delete(Cu.keys().next().value)),t};function Au(e,t,n,r){e.set(t,n),e.size>r&&e.delete(e.keys().next().value)}function ju(e,t,n,r=1){let i=Math.floor(t/64),a=Math.floor(n/64),o=`${e}\0${i},${a},${r}`,s=Du.get(o);if(s)return s;let c=[];for(let t=-r;t<=r;t++)for(let n=-r;n<=r;n++){let r=i+t,o=a+n,s=`${e}\0${r},${o}`;if(Math.abs(r)>1e7||Math.abs(o)>1e7)continue;let l=Tu.get(s);l||(l=_u(e,r,o).sites.map(e=>({x:e.x,z:e.z})),Au(Tu,s,l,1024)),c.push(...l)}return Au(Du,o,c,1024),c}function Mu(e){let t=wu.get(e);if(t)return t;let n=[vu,{x:61,z:27},{x:52,z:61},{x:65,z:12},{x:-45,z:38}],r=ju(e,30,25,2),i=e=>r.reduce((t,n)=>Math.min(t,Math.hypot(e.x-n.x,e.z-n.z)),1/0),a=n.find(e=>i(e)>=34)??n.reduce((e,t)=>i(e)>i(t)?e:t),o=ku(e),s=iu(o,0,0,191)/4294967296;return t={...a,id:`water:${o.toString(16)}:firstlight`,name:`Firstlight Lake`,kind:`lake`,level:pu(e,a.x,a.z)-.45,radius:21,radiusX:22+s*2,radiusZ:17+s,maximumDepth:2.55,phase:s*Math.PI*2},Au(wu,e,t,24),t}function Nu(e,t){let n=e-t.x;return t.z+n*.24+(Math.sin(n/35+t.phase)-Math.sin(t.phase))*8+Math.sin(n/79)*4}function Pu(e){let t=Ou.get(e);if(t)return t;let n=Mu(e),r=[];for(let t=Math.floor((n.x-40)/64);t<=Math.ceil((n.x+470)/64);t++)for(let i=Math.floor((n.z-240)/64);i<=Math.ceil((n.z+320)/64);i++){let n=`${e}\0${t},${i}`,a=Tu.get(n);a||(a=_u(e,t,i).sites.map(e=>({x:e.x,z:e.z})),Au(Tu,n,a,1024)),r.push(...a)}let i=[{offset:7,low:-100,rows:83,moves:2,clearance:34},{offset:0,low:-140,rows:105,moves:3,clearance:33},{offset:-14,low:-160,rows:115,moves:4,clearance:32},{offset:-18,low:-200,rows:135,moves:5,clearance:30}],a=null;for(let t of i){let i=n.x+t.offset,o=n.z+t.low,s=t.rows,c=Math.ceil((n.x+435-i)/4)+1,l=new Int16Array(s*c).fill(-1),u=new Float64Array(s).fill(1/0),d=(e,n)=>Math.hypot(e,n)<34||Math.abs(e)<26&&n>-68&&n<12||r.some(r=>Math.hypot(e-r.x,n-r.z)<t.clearance);for(let e=0;e<c;e++){let r=i+e*4,a=Nu(r,n),c=new Float64Array(s).fill(1/0);for(let i=0;i<s;i++){let f=o+i*4;if(d(r,f))continue;let p=(f-a)**2*.004;if(e===0){Math.abs(f-n.z)<n.radiusZ-2&&(zu(n,r,f)?.mask??-1)>1&&(c[i]=p+(f-n.z)**2*.15);continue}for(let n=Math.max(0,i-t.moves);n<=Math.min(s-1,i+t.moves);n++){let t=u[n]+p+((i-n)*4)**2*.1;t<c[i]&&(c[i]=t,l[e*s+i]=n)}}u=c}let f=0;for(let e=1;e<s;e++)u[e]<u[f]&&(f=e);if(!Number.isFinite(u[f]))continue;let p=Array(c);for(let e=c-1;e>=0;e--)p[e]=o+f*4,f=l[e*s+f];let m={start:i,step:4,values:p},h=!0;for(let t=i;t<n.x+430;t+=.5)if(Bu(e,t,Fu(m,t),4)<=1){h=!1;break}if(h){a=m;break}}return a??={start:n.x+7,step:4,values:[n.z],disabled:!0},Au(Ou,e,a,24),a}function Fu(e,t){let n=(t-e.start)/e.step,r=Math.floor(n),i=xu(n-r),a=t=>e.values[Math.max(0,Math.min(e.values.length-1,t))],o=a(r-1),s=a(r),c=a(r+1),l=a(r+2);return .5*(2*s+(-o+c)*i+(2*o-5*s+4*c-l)*i*i+(-o+3*s-3*c+l)*i*i*i)}function Iu(e,t){let n=Mu(e);return{x:t,z:Fu(Pu(e),t),width:5.4+Math.sin((t-n.x)/41+n.phase)*.85,level:n.level-Su((t-n.x)/420)*.4}}function Lu(e,t,n){let r=Mu(e);if(t<r.x-18-yu||t>r.x+430+yu)return null;let i=Pu(e);if(i.disabled||t<i.start-yu)return null;let a=Iu(e,t);if(Math.abs(n-a.z)>a.width+yu)return null;let o=Math.min(a.width-Math.abs(n-a.z),t-i.start,r.x+430-t);if(o<=-8)return null;let s=(Iu(e,t+.2).z-a.z)/.2,c=Math.hypot(1,s);return{id:`water:${ku(e).toString(16)}:firstlight-river`,name:`The Willowrun`,kind:`river`,level:a.level,depth:1.5*Su(o/Math.max(3.6,a.width)),flow:{x:1/c,z:s/c},mask:o}}function Ru(e,t,n){let r=`${e}\0${t},${n}`;if(Eu.has(r))return Eu.get(r);let i=ku(e),a=iu(i,t,n,199);if(a%5==0)return Au(Eu,r,null,256),null;let o={x:t*bu+(iu(i,t,n,211)/4294967296-.5)*92,z:n*bu+(iu(i,t,n,223)/4294967296-.5)*92};if(Math.hypot(o.x,o.z)<145)return Au(Eu,r,null,256),null;let s=Mu(e);if(o.x>s.x-15&&o.x<s.x+455&&!Pu(e).disabled&&Math.abs(o.z-Iu(e,o.x).z)<75||ju(e,o.x,o.z).some(e=>Math.hypot(e.x-o.x,e.z-o.z)<36))return Au(Eu,r,null,256),null;let c=cu(e,o.x,o.z),l=c===`desert`?10+a%5:14+a%9,u={...o,id:`water:${i.toString(16)}:pool:${t},${n}`,name:c===`desert`?`Saffron Oasis`:c===`caves`?`Opal Pool`:`Willow Basin`,kind:`lake`,level:pu(e,o.x,o.z)-.35,radius:l,radiusX:l*1.12,radiusZ:l*.84,maximumDepth:1.45+a%9*.1,phase:a/4294967296*Math.PI*2};return Au(Eu,r,u,256),u}function zu(e,t,n){let r=t-e.x,i=n-e.z;if(Math.abs(r)>e.radiusX+yu+2||Math.abs(i)>e.radiusZ+yu+2)return null;let a=Math.hypot(r/e.radiusX,i/e.radiusZ),o=Math.atan2(i,r),s=(Math.sin(o*3+e.phase)+Math.sin(o*5-e.phase)*.4)*.6*Math.min(1,a),c=(1-a)*Math.min(e.radiusX,e.radiusZ)+s;return c<=-8?null:{id:e.id,name:e.name,kind:`lake`,level:e.level,depth:e.maximumDepth*Su(c/9),flow:{x:0,z:0},mask:c}}function Bu(e,t,n,r){r=Math.min(r,Math.hypot(t,n)-26);let i=Math.max(Math.abs(t)-14,n,-55-n);r=Math.min(r,i-yu);for(let i of ju(e,t,n))r=Math.min(r,Math.hypot(t-i.x,n-i.z)-23);return r}function Vu(e,t,n){if(!Number.isFinite(t)||!Number.isFinite(n))return null;let r=Lu(e,t,n),i=zu(Mu(e),t,n);i&&(!r||i.mask>r.mask)&&(r=i);let a=Ru(e,Math.round(t/bu),Math.round(n/bu)),o=a?zu(a,t,n):null;if(o&&(!r||o.mask>r.mask)&&(r=o),!r)return null;let s=Bu(e,t,n,r.mask);if(s<=-8)return null;let c=r.depth*(r.mask>0?Su(s/Math.min(6,r.mask)):1);return{...r,mask:s,depth:c}}function Hu(e,t){if(!t)return e;if(t.mask>0)return t.level-t.depth;let n=Su(1+t.mask/yu);return e+(t.level-t.mask*.18-e)*n}function Uu(e,t,n){return Hu(pu(e,t,n),Vu(e,t,n))}function Wu(e,t,n){let r=Vu(e,t,n);return!r||r.mask<=0||r.depth<=1e-6?null:{id:r.id,name:r.name,kind:r.kind,level:r.level,depth:r.level-Hu(pu(e,t,n),r),flow:r.flow}}function Gu(e,t,n){let r=(t,n)=>{let r=Vu(e,t,n);if(r&&r.mask>-2)return!1;let i=Uu(e,t,n);for(let[r,a]of[[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]])if(Wu(e,t+r,n+a)||Math.abs(Uu(e,t+r,n+a)-i)>.85)return!1;return!0};if(r(t,n))return{x:t,z:n};for(let e=2;e<=48;e+=1.5)for(let i=0;i<32;i++){let a=i*Math.PI*2/32,o=t+Math.cos(a)*e,s=n+Math.sin(a)*e;if(r(o,s))return{x:o,z:s}}return null}var Ku=(e,t,n)=>Uu(e,t,n),qu={"wildflower-meadow":{canopy:[[`silver-birch`,4],[`coral-tree`,3],[`spiral-tree`,2],[`baobab-tree`,1],[`canopy-tree`,1],[`fan-palm`,1]],shrubs:[[`berry-bush`,4],[`foxglove`,2],[`starflower`,3],[`bellflower`,2]],ground:[[`flower-carpet`,6],[`starflower`,3],[`grass-tuft`,4],[`bellflower`,2],[`sunburst-flower`,1]],rocks:[[`dune-rock`,1],[`fallen-log`,1]],canopyCount:7,shrubCount:20,groundCount:60},fernwood:{canopy:[[`spire-pine`,4],[`tree-fern`,4],[`ribbon-tree`,2],[`canopy-tree`,1],[`coral-tree`,1]],shrubs:[[`fan-fern`,4],[`berry-bush`,3],[`orchid`,2],[`cycad`,2],[`shelf-fungus`,1]],ground:[[`grass-tuft`,4],[`fan-fern`,3],[`orchid`,2],[`puffball`,2],[`foxglove`,1]],rocks:[[`fallen-log`,4],[`dune-rock`,1]],canopyCount:12,shrubCount:25,groundCount:48},"willow-grove":{canopy:[[`veil-willow`,5],[`silver-birch`,3],[`spiral-tree`,2],[`baobab-tree`,1],[`canopy-tree`,1],[`fan-palm`,1]],shrubs:[[`lotus`,4],[`bellflower`,3],[`reed`,2],[`berry-bush`,1],[`orchid`,2]],ground:[[`lily-pad`,4],[`grass-tuft`,3],[`bellflower`,3],[`flower-carpet`,2]],rocks:[[`fallen-log`,2],[`dune-rock`,1]],canopyCount:9,shrubCount:22,groundCount:48},"spore-wetland":{canopy:[[`veil-willow`,3],[`ribbon-tree`,3],[`tree-fern`,3],[`baobab-tree`,2],[`coral-tree`,1]],shrubs:[[`reed`,4],[`lotus`,3],[`fan-fern`,2],[`spore-crown`,2],[`puffball`,2]],ground:[[`lily-pad`,4],[`grass-tuft`,3],[`puffball`,3],[`glowcap`,1],[`reed`,2]],rocks:[[`fallen-log`,3],[`dune-rock`,1]],canopyCount:8,shrubCount:25,groundCount:52},"sun-oasis":{canopy:[[`fan-palm`,7],[`baobab-tree`,1],[`desert-spire`,1]],shrubs:[[`cycad`,4],[`aloe`,3],[`sunburst-flower`,4],[`glass-cactus`,1],[`prickly-pear`,2]],ground:[[`grass-tuft`,3],[`sunburst-flower`,4],[`aloe`,2],[`sand-rose`,2]],rocks:[[`dune-rock`,3],[`boulder-stack`,1]],canopyCount:8,shrubCount:21,groundCount:34},"cactus-garden":{canopy:[[`glass-cactus`,5],[`prickly-pear`,4],[`desert-spire`,1],[`barrel-cactus`,4]],shrubs:[[`barrel-cactus`,4],[`prickly-pear`,3],[`aloe`,3],[`sand-rose`,2]],ground:[[`aloe`,4],[`sand-rose`,3],[`sunburst-flower`,1],[`grass-tuft`,1]],rocks:[[`dune-rock`,5],[`boulder-stack`,2],[`desert-spire`,1]],canopyCount:8,shrubCount:18,groundCount:26},"stone-badlands":{canopy:[[`desert-spire`,3],[`boulder-stack`,4],[`dune-rock`,6],[`arch-rock`,1]],shrubs:[[`aloe`,3],[`barrel-cactus`,2],[`prickly-pear`,1],[`sand-rose`,2]],ground:[[`sand-rose`,4],[`aloe`,3],[`grass-tuft`,1]],rocks:[[`dune-rock`,5],[`boulder-stack`,4]],canopyCount:7,shrubCount:9,groundCount:17},"crystal-garden":{canopy:[[`crystal-cluster`,5],[`echo-crystal`,3],[`cave-column`,1],[`boulder-stack`,1]],shrubs:[[`cave-coral`,4],[`shelf-fungus`,3],[`glowcap`,2],[`crystal-cluster`,2]],ground:[[`cave-coral`,3],[`glowcap`,2],[`puffball`,2],[`crystal-cluster`,3]],rocks:[[`boulder-stack`,3],[`dune-rock`,1]],canopyCount:9,shrubCount:20,groundCount:40},"fungal-hollow":{canopy:[[`glowcap`,5],[`shelf-fungus`,3],[`cave-column`,1],[`puffball`,2]],shrubs:[[`puffball`,5],[`shelf-fungus`,4],[`glowcap`,3],[`cave-coral`,2]],ground:[[`puffball`,5],[`glowcap`,4],[`shelf-fungus`,2],[`cave-coral`,1]],rocks:[[`boulder-stack`,3],[`dune-rock`,1]],canopyCount:8,shrubCount:24,groundCount:44},"echo-vault":{canopy:[[`cave-column`,5],[`echo-crystal`,3],[`boulder-stack`,3],[`crystal-cluster`,2]],shrubs:[[`crystal-cluster`,4],[`cave-coral`,2],[`glowcap`,1]],ground:[[`crystal-cluster`,3],[`cave-coral`,2],[`glowcap`,1]],rocks:[[`boulder-stack`,4],[`dune-rock`,1]],canopyCount:8,shrubCount:10,groundCount:24}},Ju=new Set([`canopy-tree`,`ribbon-tree`,`spire-pine`,`silver-birch`,`veil-willow`,`coral-tree`,`baobab-tree`,`spiral-tree`,`tree-fern`,`fan-palm`]);function Yu(e,t){let n=t()*e.reduce((e,[,t])=>e+t,0);for(let[t,r]of e)if(n-=r,n<0)return t;return e[e.length-1][0]}var Xu={forest:[`wildflower-meadow`,`fernwood`,`willow-grove`,`spore-wetland`],desert:[`sun-oasis`,`cactus-garden`,`stone-badlands`],caves:[`crystal-garden`,`fungal-hollow`,`echo-vault`]},Zu=[{x:0,z:15,habitat:`wildflower-meadow`},{x:-48,z:-12,habitat:`fernwood`},{x:48,z:-12,habitat:`willow-grove`},{x:0,z:-65,habitat:`spore-wetland`}];function Qu(e,t,n){let r=cu(e,t,n);if(r===`forest`&&Math.hypot(t,n)<102){let e=Zu[0],r=1/0;for(let i of Zu){let a=(t-i.x)**2+(n-i.z)**2;a<r&&(e=i,r=a)}return e.habitat}let i=ru(e),a=Math.round(t/64),o=Math.round(n/64),s=a,c=o,l=1/0;for(let e=-1;e<=1;e++)for(let r=-1;r<=1;r++){let u=a+e,d=o+r,f=u*64+(iu(i,u,d,101)/4294967296-.5)*22,p=d*64+(iu(i,u,d,103)/4294967296-.5)*22,m=(t-f)**2+(n-p)**2;m<l&&(s=u,c=d,l=m)}let u=Xu[r];return u[iu(i,s,c,107)%u.length]}function $u(e,t,n){let r=_u(e,t,n),i=ru(e),a=iu(i,t,n,61);return nd(r,e,i,a),ad(r,e,i,a),rd(r,e,a),id(r,e,a),r}function ed(e,t,n,r){return Math.floor(e/64)===n&&Math.floor(t/64)===r}var td=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function nd(e,t,n,r){let i=au(iu(r,e.cx,e.cz,113)),a=e.cx*64,o=e.cz*64,s=(t,a,o,s)=>{e.entities.push({...a,speciesId:t,id:`biodiversity:${n.toString(16)}:${e.cx}:${e.cz}:${o}`,seed:iu(r,o,0,127),scale:s,rotation:i()*Math.PI*2,role:`specimen`})},c=e.cx===0&&e.cz===-1;c&&s(`moss-grazer`,{x:8,z:-16},0,1);let l=e.cx===-1&&e.cz===-1;l&&s(`starpetal`,{x:-7,z:-15},1,1.2);let u=3+ +(r%4==0);for(let n=+!!c;n<u;n++)if(!(l&&n===1))for(let r=0;r<48;r++){let r={x:a+5+i()*54,z:o+5+i()*54};if(Math.hypot(r.x,r.z)<11||Wu(t,r.x,r.z)||e.entities.some(e=>td(e,r)<(e.role===`landmark`?7:4.5)))continue;let c=Qu(t,r.x,r.z),l=n===0||n===3,u=Jl.filter(e=>e.biome===cu(t,r.x,r.z)&&e.category===`fauna`===l&&e.habitats?.includes(c));if(!u.length)continue;let d=u[Math.floor(i()*u.length)];s(d.id,r,n,.87+i()*.28);break}}function rd(e,t,n){let r=au(iu(n,e.cx,e.cz,131)),i=e.cx*64,a=e.cz*64,o=()=>({x:i+2+r()*60,z:a+2+r()*60}),s=qu[Qu(t,i+32,a+32)],c=(n,r)=>{let i=Ju.has(r)||[`cave-column`,`arch-rock`,`desert-spire`,`boulder-stack`].includes(r);return!(Wu(t,n.x,n.z)&&r!==`lily-pad`||i&&Vu(t,n.x,n.z)||Math.hypot(n.x,n.z)<(i?14:8)||i&&Math.abs(n.x)<4&&n.z>-48&&n.z<4||e.entities.some(e=>td(e,n)<(e.role===`landmark`?i?8:3.5:i?4:1.8))||i&&e.props.some(e=>Ju.has(e.kind)&&td(e,n)<5.6))},l=(t,i,a,o)=>!ed(t.x,t.z,e.cx,e.cz)||!c(t,i)?!1:(e.props.push({...t,kind:i,scale:a,rotation:r()*Math.PI*2,seed:iu(n,o,0,137)}),!0),u=0;for(let[t,n,i]of[[`spire-pine`,-28,-10],[`tree-fern`,-34,-23],[`ribbon-tree`,-42,-8],[`canopy-tree`,-19,-24],[`silver-birch`,24,-9],[`veil-willow`,37,-15],[`spiral-tree`,29,-30],[`coral-tree`,-27,13],[`baobab-tree`,-14,25],[`fan-palm`,-34,28]])if(ed(n,i,e.cx,e.cz))for(let e=0;e<12&&!l(e===0?{x:n,z:i}:{x:n+(r()-.5)*8,z:i+(r()-.5)*8},t,.82+r()*.24,u++);e++);for(let e of[`canopy`,`shrubs`,`rocks`]){let n=e===`canopy`?Math.round(s.canopyCount*1.08):e===`shrubs`?Math.round(s.shrubCount*1.15):4,i=0;for(let a=0;i<n&&a<n*8;a++){let n=o(),a=qu[Qu(t,n.x,n.z)],s=Yu(a[e],r);l(n,s,e===`canopy`?Ju.has(s)?.72+r()*.7:.85+r()*.7:e===`shrubs`?.75+r()*.65:.5+r()*.45,u++)&&i++}}let d=Math.round(s.groundCount*1.15),f=Math.ceil(d/7),p=0;for(let e=0;e<f;e++){let n=o(),i=qu[Qu(t,n.x,n.z)],a=Yu(i.ground,r),s=Yu(i.ground,r);for(let t=0;t<18&&p<d;t++){let i=r()*Math.PI*2,o=Math.sqrt(r())*7.5;if(l({x:n.x+Math.cos(i)*o,z:n.z+Math.sin(i)*o},r()<.72?a:s,.6+r()*.65,u++)&&p++,t>=6+e%3)break}}}function id(e,t,n){let r=au(iu(n,e.cx,e.cz,239)),i=e.cx*64,a=e.cz*64,o=0;for(let s=0;s<70&&o<10;s++){let s={x:i+2+r()*60,z:a+2+r()*60},c=Vu(t,s.x,s.z);if(!c||c.mask<-5||c.mask>1.3||Math.hypot(s.x,s.z)<18||Math.abs(s.x)<14&&s.z>=-55&&s.z<=0||e.entities.some(e=>td(e,s)<(e.role===`landmark`?5:2)))continue;let l=c.mask>0?`lily-pad`:r()<.45?`reed`:r()<.55?`fan-fern`:`grass-tuft`;e.props.push({...s,kind:l,scale:.7+r()*.35,rotation:r()*Math.PI*2,seed:iu(n,o++,0,241)})}}function ad(e,t,n,r){let i=au(iu(r,e.cx,e.cz,251)),a=(t,r,a,o,s=1)=>{ed(r.x,r.z,e.cx,e.cz)&&e.entities.push({...r,speciesId:t,id:`waterlife:${n.toString(16)}:${a}`,seed:iu(n,o,0,257),scale:s,rotation:i()*Math.PI*2,role:`specimen`})},o=Mu(t),s=[`ribbon-fish`,`glass-koi`,`lantern-eel`],c=e=>{let n=Wu(t,e.x,e.z);return!n||n.depth<1.05?!1:[[.9,0],[-.9,0],[0,.9],[0,-.9]].every(([r,i])=>{let a=Wu(t,e.x+r,e.z+i);return a&&a.id===n.id&&a.depth>.75})},l=[{x:-7,z:-2},{x:-4,z:3},{x:2,z:-4},{x:4,z:1},{x:-1,z:5},{x:5,z:6}];for(let e=0;e<l.length;e++){let t={x:o.x+l[e].x,z:o.z+l[e].z};c(t)||(t={x:o.x+Math.cos(e*1.9)*3,z:o.z+Math.sin(e*1.9)*3}),c(t)&&a(s[Math.floor(e/2)],t,`home:${s[Math.floor(e/2)]}:${e%2}`,e,.9+e%2*.12)}[[`canopy-swift`,{x:o.x-14,z:o.z-9}],[`suncrest-bird`,{x:o.x+11,z:o.z-20}],[`reed-heron`,{x:o.x-o.radiusX-3,z:o.z+3}]].forEach(([e,t],n)=>a(e,t,`home:${e}`,30+n));let u=0;for(let n=0;n<32&&u<2;n++){let n={x:e.cx*64+5+i()*54,z:e.cz*64+5+i()*54};!Wu(t,n.x,n.z)||!c(n)||Math.hypot(n.x-o.x,n.z-o.z)<o.radiusX+10||e.entities.some(e=>td(e,n)<3)||(a(s[iu(r,u,0,263)%s.length],n,`${e.cx}:${e.cz}:fish:${u}`,40+u,.9+i()*.18),u++)}if(r%3==0)for(let n=0;n<18;n++){let n={x:e.cx*64+7+i()*50,z:e.cz*64+7+i()*50};if(Math.hypot(n.x,n.z)<18||cu(t,n.x,n.z)!==`forest`||e.entities.some(e=>td(e,n)<5))continue;let r=Qu(t,n.x,n.z),o=Yl.filter(e=>e.habitats?.includes(r));if(!o.length)continue;let s=o[Math.floor(i()*o.length)];a(s.id,n,`${e.cx}:${e.cz}:bird:0`,50,.88+i()*.22);break}}var od=25e3,sd=[`alloy`,`lumen-resin`,`crystal`,`pulse-cell`,`survey-beacon`],cd={alloy:{id:`alloy`,name:`Salvaged alloy`,description:`Recovered from supply caches. Use it to repair survey probes or build a beacon.`,icon:`cube`,color:`#c5d0ca`,usable:!1},"lumen-resin":{id:`lumen-resin`,name:`Lumen resin`,description:`A renewable-looking amber deposit. Binds pulse cells and survey beacons together.`,icon:`drop`,color:`#edbb71`,usable:!1},crystal:{id:`crystal`,name:`Conductive crystal`,description:`Small charged fragments. Used in probe repairs, pulse cells and beacons.`,icon:`diamond`,color:`#86d7dd`,usable:!1},"pulse-cell":{id:`pulse-cell`,name:`Pulse cell`,description:`Consume to recharge your survey pulse immediately and reveal nearby specimens. Field supplies are shown on your map.`,icon:`lightning`,color:`#bce6a9`,usable:!0},"survey-beacon":{id:`survey-beacon`,name:`Survey beacon`,description:`Deploy on clear dry ground. Return to this field camp from your backpack; one beacon can be active at a time.`,icon:`broadcast`,color:`#8dcfd3`,usable:!0}},ld={"pulse-cell":{id:`pulse-cell`,name:`Pulse cell`,description:`An extra survey pulse for when you want to search again without waiting.`,cost:{crystal:2,"lumen-resin":1},output:`pulse-cell`},"survey-beacon":{id:`survey-beacon`,name:`Survey beacon`,description:`A reusable return point for longer expeditions.`,cost:{alloy:2,crystal:1,"lumen-resin":1},output:`survey-beacon`}},ud={alloy:2,crystal:1},dd={cache:`Supply cache`,resin:`Lumen resin deposit`,crystal:`Conductive crystal deposit`,probe:`Survey probe`},fd=e=>({ok:!1,reason:e}),pd=()=>({ok:!0});function md(){return{inventory:{alloy:0,"lumen-resin":0,crystal:0,"pulse-cell":0,"survey-beacon":0},collected:[],repaired:[],beacon:null}}function hd(e){return sd.reduce((t,n)=>t+e.inventory[n],0)}function gd(e){return sd.every(t=>Number.isSafeInteger(e.inventory[t])&&e.inventory[t]>=0&&e.inventory[t]<=60)&&hd(e)<=60}function _d(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=n)}function vd(e,t){for(let[n,r]of Object.entries(t))e.inventory[n]-=r}function yd(e,t){return Object.hasOwn(ld,t)&&gd(e)&&_d(e,ld[t].cost)}function bd(e,t){if(t.kind===`probe`)return fd(`Repair the survey probe instead of collecting it.`);if(e.collected.includes(t.id))return fd(`Already collected.`);if(e.collected.length>=25e3)return fd(`This expedition has reached its field record limit.`);let n=Object.entries(t.rewards);if(!gd(e)||n.length===0||n.some(([e,t])=>!sd.includes(e)||!Number.isSafeInteger(t)||t<1||t>60))return fd(`This deposit has no valid supplies.`);let r=n.reduce((e,[,t])=>e+t,0);if(hd(e)+r>60)return fd(`Backpack full. Craft or use supplies to make room.`);for(let[t,r]of n)e.inventory[t]+=r;return e.collected.push(t.id),pd()}function xd(e,t){if(!Object.hasOwn(ld,t))return fd(`Unknown recipe.`);if(!gd(e))return fd(`Backpack supplies are invalid.`);let n=ld[t];if(!_d(e,n.cost))return fd(`Gather the required supplies first.`);let r=Object.values(n.cost).reduce((e,t)=>e+t,0);return hd(e)-r+1>60?fd(`Backpack full.`):(vd(e,n.cost),e.inventory[n.output]++,pd())}function Sd(e,t){return!sd.includes(t)||!gd(e)?fd(`Unknown or invalid supply.`):e.inventory[t]<1?fd(`There are none in your backpack.`):(e.inventory[t]--,pd())}function Cd(e,t){return t.kind===`probe`?e.repaired.includes(t.id)?fd(`This probe is already repaired.`):e.repaired.length>=25e3?fd(`This expedition has reached its field record limit.`):!gd(e)||!_d(e,ud)?fd(`Repair needs 2 salvaged alloy and 1 conductive crystal.`):(vd(e,ud),e.repaired.push(t.id),pd()):fd(`This object is not a survey probe.`)}function wd(e,t){if(e.beacon)return fd(`A beacon is already active. Return to it from your backpack.`);if(!Number.isFinite(t.x)||!Number.isFinite(t.z)||Math.abs(t.x)>1e7||Math.abs(t.z)>1e7)return fd(`Choose a valid place for the beacon.`);let n=Sd(e,`survey-beacon`);return n.ok?(e.beacon={x:t.x,z:t.z},pd()):n}function Td(e){return e.beacon?!gd(e)||hd(e)>=60?fd(`Backpack full. Make room before packing the beacon.`):(e.inventory[`survey-beacon`]++,e.beacon=null,pd()):fd(`No beacon is deployed.`)}var Ed={language:`en`,volume:.55,sensitivity:1,quality:`balanced`,invertY:!1,reducedMotion:!1,controlScheme:`auto`,movementMode:`keyboard`,mouseLook:`pointer-lock`,touchSensitivity:1,touchScale:1,joystickSide:`left`,showMinimap:!0,minimapRotate:!1},Dd=[0,60,160,320,550,850,1250,1800],Od=`vesper-expedition-v1`,kd=Math.min(1e7,(Ql-5)*64),Ad=`${Od}-backup`,jd=25e3,Md=8e6,Nd=[`forest`,`desert`,`caves`];function Pd(e){throw Error(`Invalid expedition save: ${e}`)}function Fd(e,t){return!e||typeof e!=`object`||Array.isArray(e)?Pd(`${t} must be an object.`):e}function Id(e,t,n,r,i=!1){return typeof e!=`number`||!Number.isFinite(e)||e<n||e>r||i&&!Number.isSafeInteger(e)?Pd(`${t} is outside its allowed range.`):e}function Ld(e,t){return typeof e!=`string`||!/^[a-zA-Z0-9_:.,-]{1,140}$/.test(e)||[`__proto__`,`prototype`,`constructor`].includes(e)?Pd(`${t} is not a valid identifier.`):e}function Rd(e){return typeof e!=`string`||e.length<1||e.length>96||e.trim().length<1||/[\u0000-\u001f<>]/.test(e)?Pd(`seed must contain 1–96 printable characters.`):e}function zd(e,t){let n=Fd(e,t);return{x:Id(n.x,`${t}.x`,-kd,kd),z:Id(n.z,`${t}.z`,-kd,kd)}}function Bd(e,t,n){if(!Array.isArray(e)||e.length>n)return Pd(`${t} is too large or not an array.`);let r=e.map(e=>Ld(e,t));return new Set(r).size===r.length?r:Pd(`${t} contains duplicates.`)}function Vd(e){let t=Fd(e,`settings`);if(![`low`,`balanced`,`high`].includes(t.quality))return Pd(`unknown quality setting.`);if(typeof t.invertY!=`boolean`||typeof t.reducedMotion!=`boolean`)return Pd(`settings switches must be boolean.`);let n=(e,n,r)=>{let i=t[e];return i===void 0?r:typeof i!=`string`||!n.includes(i)?Pd(`unknown ${e} setting.`):i},r=(e,n)=>t[e]===void 0?n:typeof t[e]==`boolean`?t[e]:Pd(`${e} must be boolean.`);return{language:n(`language`,[`en`,`zh-CN`],Ed.language),volume:Id(t.volume,`volume`,0,1),sensitivity:Id(t.sensitivity,`sensitivity`,.05,5),quality:t.quality,invertY:t.invertY,reducedMotion:t.reducedMotion,controlScheme:n(`controlScheme`,[`auto`,`desktop`,`touch`],Ed.controlScheme),movementMode:n(`movementMode`,[`keyboard`,`mouse`],Ed.movementMode),mouseLook:n(`mouseLook`,[`pointer-lock`,`drag`,`arrows`],Ed.mouseLook),touchSensitivity:t.touchSensitivity===void 0?Ed.touchSensitivity:Id(t.touchSensitivity,`touch sensitivity`,.25,3),touchScale:t.touchScale===void 0?Ed.touchScale:Id(t.touchScale,`touch scale`,.8,1.4),joystickSide:n(`joystickSide`,[`left`,`right`],Ed.joystickSide),showMinimap:r(`showMinimap`,Ed.showMinimap),minimapRotate:r(`minimapRotate`,Ed.minimapRotate)}}function Hd(e){if(e===void 0)return md();let t=Fd(e,`field kit`),n=Fd(t.inventory,`inventory`);if(Object.keys(n).some(e=>!sd.includes(e)))return Pd(`unknown backpack item.`);let r=md();for(let e of sd)r.inventory[e]=Id(n[e],`inventory.${e}`,0,60,!0);if(hd(r)>60)return Pd(`backpack exceeds its capacity.`);r.collected=Bd(t.collected,`collected field supplies`,od),r.repaired=Bd(t.repaired,`repaired probes`,od);let i=new Set(r.collected);return r.repaired.some(e=>i.has(e))?Pd(`a field object cannot be both collected and repaired.`):(r.beacon=t.beacon===null?null:zd(t.beacon,`beacon position`),r)}function Ud(e){if(typeof e!=`string`||e.length>Md)return Pd(`file is too large.`);let t;try{t=JSON.parse(e)}catch{return Pd(`file is not valid JSON.`)}let n=Fd(t,`save`);if(n.version!==1)return Pd(`unsupported save version.`);let r=Id(n.time,`time`,0,31536e4),i=Fd(n.scanned,`scanned`),a=Fd(n.discoveries,`discoveries`);if(Object.keys(i).length>jd||Object.keys(a).length>Object.keys(Zl).length)return Pd(`too many records.`);let o=Object.create(null),s=Object.create(null);for(let[e,t]of Object.entries(i)){Ld(e,`scan key`);let n=Fd(t,`scan`),i=Ld(n.speciesId,`scan species`);if(!Object.hasOwn(Zl,i))return Pd(`unknown scan species.`);if(Ld(n.id,`scan id`)!==e)return Pd(`scan key does not match its id.`);let a={...zd(n,`scan position`),id:e,speciesId:i,time:Id(n.time,`scan time`,0,r)};n.siteId!==void 0&&(a.siteId=Ld(n.siteId,`scan site`)),o[e]=a,s[i]=(s[i]??0)+1}let c=Object.create(null);for(let[e,t]of Object.entries(a)){if(!Object.hasOwn(Zl,e))return Pd(`unknown discovery species.`);let n=Fd(t,`discovery`);if(Ld(n.speciesId,`discovery species`)!==e)return Pd(`discovery key does not match its species.`);let i=Id(n.count,`discovery count`,1,jd,!0);if(s[e]!==i)return Pd(`discovery count does not match distinct scans.`);let a=zd(n.firstFound,`first discovery position`),l=Id(n.firstTime,`first discovery time`,0,r);if(!Object.values(o).find(t=>t.speciesId===e&&t.time===l&&t.x===a.x&&t.z===a.z))return Pd(`first discovery does not match a scan.`);c[e]={speciesId:e,firstFound:a,firstTime:l,count:i}}if(Object.keys(s).some(e=>!Object.hasOwn(c,e)))return Pd(`scan has no discovery record.`);let l=Bd(n.completedSites,`completed sites`,8e3);for(let e of l)if(![0,1,2].every(t=>o[`${e}:clue:${t}`]?.siteId===e))return Pd(`completed site is missing its three clue scans.`);let u=Bd(n.visitedChunks,`visited chunks`,jd);if(u.some(e=>!/^-?\d{1,8},-?\d{1,8}$/.test(e)))return Pd(`invalid visited chunk coordinates.`);let d=Bd(n.visitedBiomes,`visited biomes`,3);return d.some(e=>!Nd.includes(e))?Pd(`unknown visited biome.`):{version:1,seed:Rd(n.seed),position:zd(n.position,`position`),heading:Id(n.heading,`heading`,-1e6,1e6),pitch:Id(n.pitch,`pitch`,-Math.PI/2,Math.PI/2),time:r,xp:Id(n.xp,`xp`,0,1e8,!0),scanned:o,discoveries:c,completedSites:l,visitedChunks:u,visitedBiomes:d,settings:Vd(n.settings),fieldKit:Hd(n.fieldKit)}}function Wd(){try{return typeof localStorage<`u`?localStorage:null}catch{return null}}var Gd=class{data;constructor(e,t){this.data=t?Ud(JSON.stringify(t)):{version:1,seed:Rd(e),position:{x:0,z:0},heading:0,pitch:0,time:0,xp:0,scanned:Object.create(null),discoveries:Object.create(null),completedSites:[],visitedChunks:[],visitedBiomes:[],settings:{...Ed},fieldKit:md()}}static load(){let e=Wd();if(!e)return null;for(let t of[Od,Ad])try{let n=e.getItem(t);if(n)return Ud(n)}catch{}return null}recordScan(e,t){let n=Zl[e.speciesId];if(!n)throw Error(`Cannot scan an unknown specimen.`);if(e.role===`landmark`&&(!e.siteId||!this.data.completedSites.includes(e.siteId)))throw Error(`Investigate the three clues before activating this landmark.`);let r=this.data.scanned[e.id];if(r)return{isNew:!1,newSpecies:!1,xp:0,record:this.data.discoveries[r.speciesId]};let i=Id(t,`game time`,0,31536e4);this.data.time=Math.max(this.data.time,i);let a=!this.data.discoveries[n.id],o=this.data.discoveries[n.id]??{speciesId:n.id,firstFound:{x:e.x,z:e.z},firstTime:i,count:0};o.count++,this.data.discoveries[n.id]=o;let s={id:e.id,speciesId:n.id,x:e.x,z:e.z,time:i};e.siteId&&(s.siteId=e.siteId),this.data.scanned[e.id]=s;let c=n.xp+(a?12:0);return this.data.xp+=c,{isNew:!0,newSpecies:a,xp:c,record:o}}getSiteProgress(e){return e.clueIds.filter(t=>this.data.scanned[t]?.siteId===e.id).length}completeSite(e){return this.data.completedSites.includes(e.id)||e.clueIds.length!==3||new Set(e.clueIds).size!==3||this.getSiteProgress(e)!==3?!1:(this.data.completedSites.push(e.id),this.data.xp+=60,!0)}getLevel(){let e=1;for(let t=1;t<Dd.length;t++)this.data.xp>=Dd[t]&&(e=t+1);return e}save(){let e=Wd();if(!e)return!1;try{let t=this.export();Ud(t);try{let t=e.getItem(Od);t&&(Ud(t),e.setItem(Ad,t))}catch{}return e.setItem(Od,t),!0}catch{return!1}}export(){return JSON.stringify(this.data,null,2)}},Kd={"Expedition instruments":`探索仪表`,"Vesper · expedition 01":`Vesper · 行星探索 01`,"The verdant reach":`苍翠原野`,"the verdant reach":`苍翠原野`,"The amber expanse":`琥珀荒漠`,"the amber expanse":`琥珀荒漠`,"The luminous deep":`流光洞穴`,"the luminous deep":`流光洞穴`,Compass:`指南针`,"Field tools":`野外工具`,"Open backpack (B)":`打开背包（B）`,"Open backpack":`打开背包`,"Open field atlas (J)":`打开野外图鉴（J）`,"Open survey map (M)":`打开勘测地图（M）`,"Pause expedition":`暂停探索`,Bag:`背包`,Atlas:`图鉴`,Map:`地图`,Pause:`暂停`,"Open survey map. Mini map shows nearby terrain, water, supplies, probes and your waypoint.":`打开勘测地图。小地图显示附近的地形、水域、物资、勘测探针和路标。`,"Local survey":`周边地图`,"North up":`北方朝上`,"Heading up":`前方朝上`,"160 m view":`视野 160 米`,"Map ↗":`地图 ↗`,"Field supplies":`野外物资`,"Collect supplies":`收集物资`,"Collect supplies · craft tools · restore survey probes":`收集物资 · 制作工具 · 修复勘测探针`,"Current research":`当前研究`,"A first impression":`初见新世界`,"Approach the specimen near the landing pod.":`靠近着陆舱附近的标本。`,"Field specimen":`野外标本`,"Hold to scan":`按住扫描`,"Field atlas":`野外图鉴`,"Field Atlas":`野外图鉴`,specimens:`种标本`,"Survey sensor":`探索传感器`,"Pulse ready":`脉冲已就绪`,"Click the world to look around":`点击场景，开始环顾四周`,Move:`移动`,Scan:`扫描`,Use:`使用`,"Independent planetary survey":`独立行星探索计划`,"Outer atlas / 001":`域外图鉴 / 001`,"Uncharted. Inhabited. Interconnected.":`未知的星球，鲜活的生命，彼此相连的世界。`,"AN ATLAS OF ELSEWHERE":`异世界野外图鉴`,"Explore an alien world, catalogue its living specimens, and uncover the story connecting them.":`踏上一颗陌生的星球，记录独特的生命与景物，发现它们之间的联系。`,"Continue expedition":`继续探索`,"Continue expedition ↗":`继续探索 ↗`,"Begin expedition":`开始探索`,"Begin expedition ↗":`开始探索 ↗`,"Begin a new expedition ↗":`开启新的探索 ↗`,"Field instructions":`探索指南`,"World seed":`世界种子`,"Optional — the same seed returns to the same world":`选填 · 使用相同的种子，即可重回同一个世界`,"Let the atlas choose":`让图鉴为你选择`,"Generate a world seed":`随机生成世界种子`,"Your expedition is saved on this device.":`你的探索进度已保存在此设备上。`,"Take your time. There is no combat, and no timer.":`尽情探索。这里没有战斗，也没有时间限制。`,"Headphones recommended":`建议佩戴耳机`,"Keyboard + mouse":`键盘与鼠标`,"Touch controls ready":`触屏操作已就绪`,"Vesper / field instruments":`Vesper / 探索工具`,"Expedition paused":`探索已暂停`,"Return to expedition":`返回探索`,Return:`返回`,"A moment in the field":`稍作休息`,Specimens:`已记录标本`,"Sites resolved":`已完成调查点`,"Research level":`研究等级`,"Local save ready":`本地存档已就绪`,"Resume expedition":`继续探索`,"Specimens & research":`标本与研究记录`,"Survey map":`勘测地图`,"Regions & waypoints":`区域与路标`,Backpack:`背包`,"Supplies, crafting & field tools":`物资、制作与野外工具`,Instruments:`设置`,"Audio, controls & map":`声音、操作与地图`,"Field guide":`探索指南`,"How to explore":`了解探索方法`,"Enter photo mode":`进入拍照模式`,"Recall to landing pod":`返回着陆舱`,"Export expedition":`导出存档`,"Import a save":`导入存档`,"Begin a new expedition":`开启新的探索`,"Your catalogue begins with curiosity.":`好奇心，是图鉴的起点。`,"Filter specimens":`筛选标本`,"All records":`全部记录`,all:`全部`,flora:`植物`,mineral:`矿物`,relic:`遗迹`,fauna:`动物`,forest:`森林`,desert:`沙漠`,caves:`洞穴`,common:`普通`,uncommon:`少见`,rare:`稀有`,"Specimen records":`标本记录`,"Selected specimen":`当前标本`,"Research progression":`研究进度`,"Click the survey to place a waypoint.":`点击地图，设置路标。`,"Mark nearby lake ↗":`标记附近湖泊 ↗`,"Zoom map in":`放大地图`,"Zoom map out":`缩小地图`,"Survey map showing forest, desert and cavern regions, explored areas, landing pod, your position and waypoint. Use arrow keys to move your waypoint; Home marks your current position.":`勘测地图显示森林、沙漠与洞穴区域、已探索范围、着陆舱、当前位置和路标。聚焦地图后，可用方向键移动路标，Home 键标记当前位置。`,Forest:`森林`,Desert:`沙漠`,Caverns:`洞穴`,Water:`水域`,"Current position":`当前位置`,Waypoint:`路标`,"None set":`尚未设置`,"Clear waypoint":`清除路标`,Supplies:`物资`,Resin:`树脂`,Crystal:`晶体`,"Survey probe":`勘测探针`,"Return beacon":`返回信标`,"Bright sectors have been visited. The surrounding terrain is predicted by the atlas. Color variations mark different habitats; blue channels and pools mark water. The circle marks your landing pod. Field resources are shown within 80 m; your return beacon remains marked. With the map focused, arrow keys move your waypoint; Home marks your position.":`明亮的区域表示你已到访；周边地形由图鉴预测生成。不同颜色对应不同栖息地，蓝色表示河流与湖泊，圆圈标记着陆舱。地图显示 80 米内的野外物资，并持续标记你的返回信标。聚焦地图后，可用方向键移动路标，Home 键标记当前位置。`,"Your field kit":`你的野外装备`,"Take something useful.":`带上探索所需。`,"Gather supplies, build survey tools, and bring silent research probes back online.":`收集物资，制作探索工具，让沉寂的勘测探针重新运转。`,"items carried":`件随身物品`,"Backpack contents":`背包物品`,"Materials & ready tools":`材料与工具`,"Field crafting":`野外制作`,"No workbench needed":`无需工作台`,"Continue the expedition":`继续你的探索`,"Look for supply caches, amber resin deposits and blue crystal outcrops. Repair damaged survey probes with 2 alloy and 1 conductive crystal. Nearby field resources appear on your mini map. Discard surplus items from your bag to make room for new supplies.":`寻找补给箱、琥珀色树脂和蓝色晶体矿。修复损坏的勘测探针需要 2 份合金和 1 份导电晶体。小地图会显示附近的物资；背包满时，可丢弃多余物品，为新材料腾出空间。`,"Backpack & field crafting":`背包与制作`,"Set your instruments for a comfortable expedition. Changes save automatically.":`调整设置，让探索更舒适。所有更改都会自动保存。`,"Your instruments":`探索设置`,Controls:`操作`,"Keyboard movement and mouse look.":`用键盘移动，用鼠标环顾四周。`,"Control layout":`操作布局`,"Auto adapts to your device; override at any time":`自动适配设备，也可随时手动选择`,Automatic:`自动适配`,"Desktop controls":`电脑操作`,"Touch controls":`触屏操作`,"Desktop movement":`电脑移动方式`,"Click a clear piece of ground to walk there":`点击空旷地面，即可走向那里`,Keyboard:`键盘移动`,"Click to walk":`点击移动`,"Desktop look":`电脑视角操作`,"Click to walk supports right-drag or arrow-key look":`点击移动时，可用鼠标右键拖动或方向键调整视角`,"Mouse capture":`锁定鼠标`,"Right-button drag":`右键拖动`,"Arrow keys":`方向键`,"Look sensitivity":`鼠标视角灵敏度`,"Mouse movement speed":`调整鼠标转动视角的速度`,"Touch look sensitivity":`触屏视角灵敏度`,"Swipe speed for looking around":`调整滑动转动视角的速度`,"Touch control size":`触屏按钮大小`,"Resize the joystick and action buttons":`调整摇杆和操作按钮的大小`,"Movement joystick":`移动摇杆`,"Swipe the opposite side of the world to look":`在屏幕另一侧滑动，即可转动视角`,"Left side":`左侧`,"Right side":`右侧`,"Map & comfort":`地图与体验`,"Show mini map":`显示小地图`,"Nearby terrain, water and field resources":`显示附近地形、水域与野外物资`,"Rotate mini map":`旋转小地图`,"Keep your facing direction at the top":`让面朝的方向始终位于地图上方`,"Master volume":`总音量`,"Ambient sound & survey instruments":`环境音与探索工具的音效`,"Render quality":`画面质量`,"Lower quality improves performance":`降低画质可让运行更流畅`,Low:`低`,Balanced:`均衡`,High:`高`,"Invert vertical look":`反转垂直视角`,"Move the mouse down to look up":`向下移动鼠标时，视角向上转动`,"Reduced motion":`减少动态效果`,"Quieter camera & interface movement":`减轻镜头与界面的动态效果`,"Local & private":`本地保存`,"Your settings and expedition stay in this browser. Export a save to carry your discoveries to another device.":`设置与探索进度保存在当前浏览器中。导出存档，即可将你的发现带到另一台设备。`,"The purpose of the expedition":`探索的意义`,"Look closer.":`再靠近一点。`,"Everything is connected.":`万物皆有联系。`,"Explore ten habitats across three regions, from flower meadows and willow groves to desert oases and fungal caverns. Watch wandering grazers, hoppers, birds and gliding rays. Follow the river to clear pools, look beneath the surface for fish, and wade or swim across water. The map can mark the nearby lake. Catalogue ordinary specimens to build your atlas. At investigation sites, scan three nearby clues, then examine the landmark to uncover a rare finding.":`探索三大区域中的十种栖息地：从繁花草甸与柳树林，到沙漠绿洲与菌类洞穴。观察漫步的食草动物、跳跃的小生灵、飞鸟和滑翔鳐；沿河寻找清澈的水潭，在水下发现鱼群，也可以涉水或游泳前行。地图可为你标记附近的湖泊。扫描普通标本，逐步完善图鉴；在调查点，先扫描附近的三条线索，再调查地标，解锁稀有发现。`,Movement:`移动`,Walk:`行走`,"Look around":`环顾四周`,"Mouse / arrows":`鼠标 / 方向键`,Sprint:`奔跑`,Jump:`跳跃`,"Pause / release cursor":`暂停 / 释放鼠标`,"Field instruments":`探索工具`,"Hold to scan / examine":`按住扫描 / 调查`,"Collect / repair":`收集 / 修复`,"Backpack & crafting":`背包与制作`,"Sensor pulse":`探索脉冲`,"Photo mode / save image":`拍照模式 / 保存照片`,"Choose your way to explore":`选择适合你的探索方式`,"Desktop.":`电脑操作。`,"Walk with WASD and look with the mouse. Choose click-to-walk in Settings to move by clicking the ground, then hold the right mouse button and drag to look around. Arrow-key look is also available.":`用 WASD 移动，用鼠标转动视角。也可以在设置中选择「点击移动」，点击地面前往目标位置，并按住鼠标右键拖动来环顾四周。还可选择用方向键调整视角。`,"Phone or tablet.":`手机与平板。`,"Touch controls appear automatically: move with the joystick, swipe the other side to look, and use the action buttons to scan, collect, jump or open your bag. You can change joystick side, size and swipe sensitivity in Settings.":`触屏操作会自动显示：使用摇杆移动，在屏幕另一侧滑动来转动视角，通过按钮扫描、收集、跳跃或打开背包。可在设置中调整摇杆位置、按钮大小和滑动灵敏度。`,"Build a field kit.":`准备野外装备。`,"Gather alloy, lumen resin and conductive crystals. Open your backpack to craft pulse cells or a survey beacon. Use a cell to recharge the sensor; place a beacon to create a personal return point. Repair damaged probes using supplies from your bag. Discard surplus items if you need room for different materials.":`收集合金、荧光树脂和导电晶体，在背包中制作脉冲电池或勘测信标。使用电池可立即释放探索脉冲；放置信标可设置自己的返回点。背包中的物资也能用于修复损坏的勘测探针。需要收集其他材料时，可丢弃多余物品腾出空间。`,"Scan with intention.":`专注扫描。`,"Bring a specimen into range, centre it in the crosshair, and hold E until the scan is complete.":`靠近标本，把它置于准星中央，然后持续按住 E，直到扫描完成。`,"Follow the pulse.":`跟随脉冲。`,"Q reveals nearby discoveries. The sensor needs a short time to recharge.":`按 Q 可显示附近的发现。释放后，传感器需要短暂充能。`,"Leave a marker.":`标记路标。`,"Open the map with M, then click to set a waypoint. R safely returns you to your landing pod.":`按 M 打开地图，点击设置路标。按 R 可安全返回着陆舱。`,"Your expedition saves locally. The catalogue is finite; the planet continues beyond the horizon.":`探索进度保存在本地。图鉴中的标本数量有限，星球的探索却可以一直延伸。`,"New expedition":`新的探索`,"Leave this atlas behind?":`开启新的探索吗？`,"A new expedition replaces the save on this device. Export your expedition first to keep a copy of your discoveries.":`开启新的探索会替换此设备上的存档。如需保留已有发现，请先导出当前存档。`,"Begin new expedition":`开始新的探索`,"Keep exploring":`继续当前探索`,"Export current expedition ↗":`导出当前存档 ↗`,"Photo mode · your view of Vesper":`拍照模式 · 记录你眼中的 Vesper`,"Save photograph":`保存照片`,"Dismiss discovery":`关闭发现提示`,"Added to your field atlas":`已收录至野外图鉴`,"Open record":`查看记录`,Arrival:`初来乍到`,"Field observer":`野外观察员`,Pathfinder:`开拓者`,Naturalist:`博物学家`,Surveyor:`勘探员`,Researcher:`研究员`,Archivist:`记录者`,"Atlas keeper":`图鉴守护者`,Swimming:`游泳中`,Wading:`涉水中`,"Survey infrastructure":`探索设施`,"Catalogued specimen":`已收录标本`,"Expedition saved on this device":`探索进度已保存在此设备上`,"Could not save on this device — export a backup":`无法在此设备上保存，请导出存档备份`,"Expedition not started":`尚未开始探索`,"Saved on this device":`已保存在此设备上`,"Left joystick to move; swipe the other side to look.":`用左侧摇杆移动，在另一侧滑动来转动视角。`,"Right joystick to move; swipe the other side to look.":`用右侧摇杆移动，在另一侧滑动来转动视角。`,"Click the ground to walk; use the arrow keys to look around.":`点击地面移动，使用方向键环顾四周。`,"Click the ground to walk; hold the right mouse button and drag to look.":`点击地面移动，按住鼠标右键拖动来转动视角。`,"WASD movement with arrow-key look.":`用 WASD 移动，用方向键转动视角。`,"WASD movement; hold the right mouse button and drag to look.":`用 WASD 移动，按住鼠标右键拖动来转动视角。`,"WASD movement; click the world to capture the mouse and look around.":`用 WASD 移动，点击场景锁定鼠标后，即可环顾四周。`,"Click clear ground to walk · arrow keys to look":`点击空旷地面移动 · 用方向键转动视角`,"Click clear ground to walk · right-drag to look":`点击空旷地面移动 · 用右键拖动转动视角`,"Hold the right mouse button and drag to look":`按住鼠标右键拖动来转动视角`,"Use arrow keys to look around":`用方向键环顾四周`,"Recharge sensor":`释放探索脉冲`,"Deploy beacon":`放置信标`,"in bag":`件在背包中`,"Field tool":`野外工具`,"Crafting material":`制作材料`,"Used in crafting & repairs":`用于制作与修复`,"Discard 1":`丢弃 1 件`,"No room in your backpack":`背包空间不足`,"Materials ready":`材料已备齐`,"Creates 1 field tool":`制作 1 件野外工具`,Craft:`制作`,"Return beacon active":`返回信标已启用`,"Return here from anywhere on the planet.":`无论身处星球何处，都可以返回这里。`,"Return to beacon":`返回信标`,"Pack beacon":`收回信标`,"Pack your beacon to reuse it elsewhere.":`收回信标后，可在其他地方再次使用。`,"Your backpack needs one free slot to pack the beacon.":`背包需要空出 1 个位置，才能收回信标。`,"Return within 5 m to pack your beacon.":`靠近信标至 5 米以内，才能收回它。`,"Uncatalogued specimen":`尚未收录的标本`,Rare:`稀有`,Filed:`已收录`,"No records in this category.":`此类别暂无记录。`,"Field record":`探索记录`,"Unresolved record":`待发现记录`,"Awaiting observation":`等待观察`,"A world still unfolding":`等待你发现的世界`,"This specimen has not yet entered your atlas.":`这份标本尚未收录进你的图鉴。`,"Ecological insight":`生态观察`,"First observed":`首次发现位置`,Observations:`观察次数`,"A note for the field":`探索提示`,"Rare findings are revealed by completing investigation sites. Scan their three clues before examining the landmark.":`完成调查点可解锁稀有发现。先扫描周围的三条线索，再调查地标。`,"Research milestone":`研究里程碑`,"LANDING POD":`着陆舱`,"Dismiss notification":`关闭通知`,"Why a scan may not start":`扫描没有开始？看看这些提示`,"Hold, rather than tap.":`请持续按住。`,"Keep E held for about one second, or hold Scan on a touch screen. Keep the target centred until the meter fills.":`持续按住 E 约一秒；触屏设备则按住「扫描」。保持目标位于准星中央，直到进度条填满。`,"Check the target card.":`查看目标提示。`,"Move closer if it says you are out of range. If something blocks the scan, step around it. Recorded specimens are already in your atlas.":`提示超出范围时，请再靠近一些；提示被遮挡时，请绕过障碍。已收录的标本已经在图鉴中，无需再次解锁。`,"Scenery and supplies are different.":`景物与物资有区别。`,"Some trees, flowers and rocks are scenery. Q highlights nearby unrecorded catalogue specimens. Collect supplies and repair probes with F (Use on touch), within 5 m.":`部分树木、花朵和岩石属于环境景物，无法扫描。按 Q 可突出显示附近尚未收录的标本。收集物资或修复勘测探针时，请靠近至 5 米以内，按 F；触屏设备点击「使用」。`,"Investigate in order.":`按顺序完成调查。`,"A landmark stays locked until you scan its three distinct nearby clues. Follow the target card’s clue count, then hold E on the landmark.":`先扫描地标附近的三条不同线索，才能解锁地标调查。目标提示会显示线索进度；集齐后，再对准地标并按住 E。`,Language:`语言`,"Choose your language":`选择语言`,"Interface language":`界面语言`,"Switch at any time; your expedition stays unchanged":`随时切换语言，探索进度不受影响`,English:`English`,简体中文:`简体中文`},qd={"pearl-lantern":[`珍珠灯花`,`将暮光藏进花心`,`半透明的花瓣托着一枚温润如珍珠的花心。林冠下，花茎向反射光照来的方向轻轻弯曲。`,`花朵似乎用蜡质薄膜储存日光，日落后仍为附近的昆虫提供稳定的微光指引。`],crownspore:[`冠孢菇`,`悬浮的种子舱`,`一圈柔软的囊体悬在细长的茎上方。细小颗粒在囊体之间飘动，却始终没有落到地面。`,`孢子借助高大树木下较为平稳的气流传播。一阵轻风，就可能把整个新菌落带向远方。`],"prism-frond":[`棱光蕨`,`让光化作生命的色彩`,`棱角分明的小叶将漏下的光束折成蓝绿色。叶缘坚挺，中央的叶脉却能灵活摆动。`,`叶片将光线引向下方受遮蔽的叶层，让植株不同高度的叶子共享能量。`],"whisper-reed":[`低语芦`,`聆听林地的细语`,`纤细的中空茎秆三五成丛。每根茎上都带着一条薄薄的叶带，微风拂过便随之转动。`,`中空的茎秆沿根床输送水分。熟悉的沙沙声，正是这场隐秘交换留下的动静。`],copperfan:[`铜扇蕨`,`一把收集雨水的折扇`,`宽阔的叶片从紧密的螺旋中展开。铜色的叶尖承接着从林冠落下的水滴。`,`叶上的沟槽把雨水送回中央根部。这座小小的蓄水池，也滋养着周围的苔藓。`],"lumen-moth":[`荧光蛾`,`往返于花灯之间`,`四片珍珠色翅膀托起一只轻盈的小蛾。它会在发光花朵旁稍作停留，然后再次升起。`,`翅膀上的粉尘与多种林地植物相吻合。一次次短途飞行，连接起那些见不到直射阳光的花朵。`],"heartwood-archive":[`心木档案`,`森林记得每一个季节`,`活木环抱着一枚悬浮的金色种子。斑驳的外壳下，三条根系通道汇聚到一起。`,`周围的样本揭示了共同的水分循环。心木保存着这些交换，也记录着整片森林如何相互扶持、延续生命。`],"glass-cactus":[`琉璃仙人掌`,`透明棱肋里的蓄水仓`,`透明的棱肋护着细长的绿色核心。沙粒在低处的分枝旁堆积，却始终没有埋住枝尖。`,`棱肋散射强烈的阳光，让阴影中的核心留住水分。它生长缓慢，却有着惊人的韧性。`],"sun-stone":[`日光石`,`从内部缓缓升温`,`圆润的琥珀色矿石上有一道明亮的缝隙。缝隙绕着表面延伸，仿佛勾出了更早一层晶体的轮廓。`,`不同矿层吸收和释放热量的速度各异。缓慢的膨胀，让石头留下了这道独特的缝隙。`],"sand-rose":[`沙漠玫瑰`,`风塑成的花瓣`,`厚实的陶土色花瓣贴地展开，护着一枚浅色的小小花心。细沙积在外层花瓣的褶皱里。`,`外层花瓣承受着风沙磨蚀，为内层的新生部分挡住侵袭。即使两场雨相隔很久，内层仍能存活。`],"dune-memory":[`沙丘记忆`,`旧日路线留下的碎片`,`细长的碎片内部刻着平行纹路。流动的沙粒将其中一侧磨得光滑。`,`纹路的间距与当地沙脊相呼应。在风重新排列这些沙丘之前，曾有人绘下过它们的形状。`],"wind-needle":[`风蚀石针`,`被风雕成的石帆`,`一根细长的直立石体从宽阔的底座升起。弯曲的表面看起来几乎柔软，材质却十分致密。`,`反复吹来的阵风剥去了较软的岩层。留下的石脊，记录着漫长岁月中盛行风的方向。`],"ochre-geode":[`赭色晶洞`,`尘土下的静谧内室`,`开裂的外壳里藏着细小闪亮的晶面。周围的沙粒比开阔沙丘上的更加细腻。`,`受保护的内室在短暂的湿润时期形成。晶体的生长，像一本记下沙漠罕见暴雨的矿物日记。`],"heliograph-dial":[`日照仪`,`测量不断变化的地平线`,`石制框架围着一枚悬浮圆盘。底座上的三条通道，分别通向磨损的标记。`,`风、热量与旧刻痕共同指向一种季节节律。日照仪曾用来测量这种节律，帮助旅人寻找水源。`],"echo-crystal":[`回声晶`,`传递轻微脉动的晶格`,`高大的蓝色晶体内部有一条浅色纹线。附近的小晶体也沿着同一方向排列。`,`振动会沿内部晶格传播。一点微小的扰动，便能传到肉眼所见晶簇之外的远处。`],"cave-coral":[`洞穴珊瑚`,`阳光之外的花园`,`紫色的分枝状生物附着在凉爽的地面上。水分汇聚的地方，圆润的枝尖会变得更明亮。`,`菌落依靠水中溶解的矿物生长。它们循着地下水路延伸，与周围的晶体共享水源。`],"ice-bouquet":[`冰晶簇`,`众多晶面，共同的根`,`几根短棱柱从同一个基座升起。正面看几乎无色，换到侧面才显出光泽。`,`这些棱柱生长于同一处溶液囊穴。晶体角度的变化，透露出水流曾如何穿过这片凹地。`],"tide-column":[`潮纹石柱`,`流水留下的层层往事`,`光滑的石柱连接着宽大的柱脚与圆润的柱冠，中段渐渐收窄。浅色条带环绕柱身。`,`每道条带都对应一段矿物沉积时期。漫长石柱由无数细小水滴慢慢堆成，并非一场巨变的产物。`],"hollow-memory":[`洞窟记忆`,`蓝色暗处的刻纹碎片`,`冰凉的碎片上刻着重复的弧线。图案与附近分枝状的矿物通道十分相似。`,`弧线描述的或许是共振，而非文字。它们的间隔，与当地晶格传递的脉动相互呼应。`],"glimmer-moth":[`微光蛾`,`洞窟里的小小守望者`,`宽大的蓝色翅膀上排列着一串光点。它常在依靠矿物生长的菌落旁停歇。`,`翅粉把养分带到彼此隔离的菌落间，连接起洞窟中的生命与矿物网络。`],"harmonic-heart":[`共鸣之心`,`整座洞窟一同回应`,`明亮的核心悬在一圈深色矿物支架中。四周的三条通道在它下方汇合。`,`晶体、流水与菌落共享着同一种节律。核心揭示的，是一个由共振与暗流共同连接的地下世界。`],spirepine:[`尖塔松`,`层层针叶织成树冠`,`细长的树干上生着层叠的蓝绿色针叶冠。较老的下层枝条在林下铺成宽大的台阶。`,`层叠的轮廓能在不同高度截住飘来的雾气，让凝成的水滴回到下方受遮蔽的根系。`],"silver-birch":[`银桦`,`草甸光影中的浅色树干`,`浅色的分枝托起一簇簇柔软叶片。旧枝脱落的地方，在树皮上留下暖色环纹。`,`薄叶在大型树冠之间的空隙中舒展。明亮的树皮反射部分光线，减少树干吸收的热量。`],veilwillow:[`帘柳`,`垂下的一帘活雨`,`长长的带叶枝条从弯曲的树枝上垂落。柔软的叶帘下，地面总有几片湿润的空隙。`,`水沿着每条垂枝缓缓落入土壤。小片阴凉的蓄水地，让附近的莲叶有了生长的空间。`],coralwood:[`珊瑚树`,`宛如珊瑚礁的枝丫`,`暖玫瑰色的树冠伸出许多圆润的指状枝条。分叉之间藏着小小的芽。`,`枝间空隙让阳光照到下方的植物。这副独特树冠，也给草甸中的小型飞行生物提供了落脚处。`],"cistern-baobab":[`蓄水猴面包树`,`宽阔树冠下的活水库`,`粗壮圆鼓的树干托着几根低矮、舒展的枝条。树皮包覆着膨大的中央腔室，形成层层褶皱。`,`树干似乎能在旱季储存水分。浅槽中缓慢渗出的湿气，吸引苔藓沿着树身生长。`],spiralwood:[`螺旋木`,`追随光线转动的树`,`扭转的树干向上伸展，托起错落的扇状叶丛。新旧枝条围着中央螺旋，朝向不同方位。`,`这样的排列让树冠能够承接不同角度的日光。较小的新叶，恰好填进老叶留下的空隙。`],"crown-fern":[`冠蕨`,`从林下长成一把高伞`,`纤细而有纹理的茎，托起一把宽阔的羽状叶伞。紧卷的幼叶藏在冠顶。`,`抬高叶冠后，它能接触地被植物上方的湿润空气，同时让新叶留在阴影的保护中。`],"sunfan-palm":[`日扇棕`,`沙地上方的绿色罗盘`,`带着环纹的树干顶端，围着一圈坚挺的扇形叶。松垂的老叶悬在新叶冠下方。`,`叶上的沟槽把短暂的雨水引向树干。直立的叶扇挡住热风，保护下方的土壤。`],starpetal:[`星瓣花`,`洒在草甸上的点点色彩`,`五片宽阔花瓣围着明亮的花心。小片花丛在草间铺开，像互相叠在一起的星星。`,`敞开的花朵吸引低矮的食草动物和途经的传粉者。小小的根垫也稳住高大植物之间裸露的土壤。`],"dew-bells":[`露铃花`,`为花粉撑起一串小铃`,`淡紫色的铃形花沿着弯曲花茎低垂。草甸升温之后，花内的阴影仍保持清凉。`,`朝下的花口让花粉免遭水滴冲刷。一天中光线最强的时候，小型跳兽常躲在花铃下休息。`],"ribbon-orchid":[`缎带兰`,`阴影里的一抹轻盈`,`宽阔的成对花瓣围着折叠的花心，下方是光滑狭长的叶片。花茎朝林冠的一处空隙倾斜。`,`一缕若有若无的香气，似乎能引来特定的林间飞行生物。对它而言，生长的位置与花色同样重要。`],sunburst:[`金芒花`,`给绿洲添上一抹暖色`,`细长的金色花瓣从深色花心向四周辐射。坚韧的叶片贴近较为凉爽的地面。`,`外层花瓣在正午为花心遮阳。短根则能迅速吸收阵雨留下的水分。`],"moon-lotus":[`月莲`,`根丛上方的一朵浅色花`,`层叠的浅色花瓣从宽大而低矮的叶丛中展开。光滑的叶片相互交叠，围成一只受遮蔽的内碗。`,`叶碗留住水分与有机尘埃。在这个虚构生态中，月莲只需湿润土壤便能生长，无须深水池。`],"foxglove-spire":[`塔状毛地黄`,`一根花茎上的许多小房间`,`一列列垂挂的小杯状花攀满高茎。下方的花先开，顶端还留着年轻的花苞。`,`依次开花让传粉者连续数日都能获得食物。变化的草甸中，它成为一处可靠的停靠点。`],amberberry:[`琥珀莓`,`密叶间的明亮果实`,`密集的圆叶围着一簇簇琥珀色果实。浆果渐熟，外层枝条也被轻轻压弯。`,`成熟的灌丛附近常有食草动物的足迹。被带走的种子，或许解释了附近空地边缘新生的植株。`],"oasis-cycad":[`绿洲苏铁`,`一顶缓慢生长的低冠`,`坚挺的羽状叶从短粗的基部伸出。较老的叶子在近地处形成一圈保护裙。`,`紧凑的叶冠减少了干风的侵袭。阴凉的基部为幼苗提供庇护，让它们免于暴露在开阔沙地中。`],"silver-aloe":[`银叶芦荟`,`将热量挡在叶丛之外`,`厚实尖叶绕着紧闭的中心螺旋排列。浅色叶面上刻着几道纵向浅槽。`,`肉质叶是储水的容器。反光表皮与紧密排列的叶片，减缓了罕见雨水的流失。`],"barrel-cactus":[`铜球仙人掌`,`沙丘中的圆形蓄水仓`,`矮胖的带肋球体顶着一朵暖色小花。短而浅色的刺沿弯曲棱肋排列。`,`雨后棱肋能够展开，容纳更多储存的水。圆润的形体也减少了与干燥空气接触的表面积。`],"prickly-sail":[`刺帆仙人掌`,`沙地上竖起绿色叶桨`,`椭圆的绿色茎片从紧凑的主茎分出。老茎片边缘长着小小的暖色花苞。`,`每片扁茎都能储水并吸收光线。掉落的碎片有时会长成新株，在母株周围形成小片群落。`],"velvet-puffball":[`绒面马勃`,`凉暗处的圆形孢子室`,`柔软的圆囊簇拥在低矮菌柄周围。最大的囊体表面散布着细小的深色斑点。`,`轻轻触碰便能释放一阵孢子粉尘。洞窟飞鳐掀起的气流，或许会把它们送往新的矿物床。`],"shelf-colony":[`层架菌群`,`洞窟分解者的层层阶梯`,`宽阔的半圆菌盖层层交叠。每层边缘都有一道颜色较浅的新生带。`,`层架增大了菌落在湿润岩面上的取食面积。小甲虫则躲在相对干燥的上层菌盖之间。`],"violet-glowcap":[`紫光伞菇`,`地下花园的一盏灯`,`宽大的紫色菌盖立在纤细浅色的菌柄上。菌盖下方，一排排薄菌褶透出柔和微光。`,`光线把细小的矿物食者吸引到菌落附近。它们经过时，会把孢子带向彼此隔离的生长地。`],mirrorleaf:[`镜叶`,`像漂浮在地面的叶毯`,`宽大的圆叶贴着湿土铺开。窄小的缺口将收集的水滴引向叶茎。`,`交叠的叶片在高大帘柳下铺出凉爽的表层。周围土地开始干燥时，翘起的叶缘仍能留住水分。`],"balanced-stone":[`平衡石`,`漫长侵蚀堆出的雕塑`,`圆石叠成一座狭窄而倾斜的石塔。不同的暖色纹带横穿每一块风化石面。`,`周围较软的岩层先被侵蚀。幸存的石塔，显露出这片地形面对风时各不相同的变化。`],"moss-grazer":[`苔背兽`,`林冠下慢悠悠的园丁`,`圆滚滚的四足动物背上有柔软的脊纹，宽宽的口鼻贴近地面。它在草丛和莓果灌丛间缓缓行走。`,`慢慢啃食的习惯让草甸空地不至于完全被植被占据。行走时，种子会黏在有纹理的皮毛上。`],"fern-hopper":[`蕨间跳兽`,`在叶片之间轻轻一跃`,`修长的后腿与直立耳朵勾出警觉的轮廓。它会停顿片刻，再俏皮地向前跳上一小段。`,`灵活转向让它始终待在蕨叶的庇护中。脚上的尘土也把附近的花群连接起来。`],"pearl-shellback":[`珍珠甲兽`,`长着小脚的移动庇护所`,`低矮的身体背着一副宽大浅色的分节甲壳。小小的脑袋从翘起的前缘下探出。`,`安静的夜里，甲壳会收集露水。沿湿地缓慢行走时，它也传播着细小孢子与叶片碎屑。`],"glass-stag":[`琉璃鹿`,`银色林地中的安静身影`,`纤细的四足动物顶着分枝状的半透明冠角。狭长的头朝林下的动静轻轻转去。`,`冠角或许帮助它在昏暗处展示自己。较高的身形，让它能够取食小型草甸动物够不到的枝叶。`],"dune-runner":[`沙丘疾行兽`,`轻步穿过温热的沙脊`,`长腿支撑着狭窄的暖色身体，后面拖着长尾。小小的头高出沙漠灌木一截。`,`抬起的脚减少了接触热地面的时间。两次觅食之间，它循着棕榈和岩石投下的零散阴影前进。`],"sand-beetle":[`沙甲虫`,`贴近地面的光滑甲壳`,`六条短腿围着一副光滑椭圆的甲壳。浅浅的缝隙将背部分成两片亮泽的壳板。`,`甲壳能滑落磨蚀性的沙粒。足迹聚集在多肉植物周围，说明它依靠沙漠中那些小小的生命聚点觅食。`],"crystal-beetle":[`晶甲虫`,`棱柱之间移动的宝石`,`六条细腿托起一副多面蓝色甲壳。浅色的小脊纹，与邻近晶体的形态相互呼应。`,`口器会从湿润岩面刮取薄薄的矿物膜。来回行走的甲虫，让洞窟中的微量矿物不断流转。`],"cavern-ray":[`洞窟飞鳐`,`蓝暗处的一片静翼`,`宽阔柔软的双翼从扁平身体两侧展开，尾巴逐渐收细。它漂游在矿物地面上方。`,`缓慢拍翼推动气流穿过隐蔽洞廊，让原本孤立的菌落能够借风交换孢子。`],"meadow-ray":[`草甸飞鳐`,`花朵上方的一张小帆`,`玫瑰色的宽翼生物低低滑过花丛。每次轻缓转弯，长尾都会随着身体划出弧线。`,`低空飞行让腹部贴近开放的花朵。它似乎沿着相同的开花路线，在不同栖息地之间往返。`],"canopy-swift":[`树冠雨燕`,`树梢上掠过的叉尾剪影`,`后掠的双翼与深叉尾，让这只小鸟轻快穿梭于上层枝条间。转弯时，浅色腹部会闪过一道亮光。`,`留意树木之间的空隙。雨燕沿这些通道飞行，不会穿过浓密的树冠。`],"suncrest-bird":[`日冠鸟`,`花林中的鲜亮访客`,`暖色头冠、短弯喙与彩色尾羽，让它和雨燕很容易区分。它常在开花植物上方低低盘旋。`,`最明亮的花丛，是观察它反复低飞路线的好地方。`],"reed-heron":[`芦鹭`,`静水上方舒展的长翼`,`纤细的水鸟长着长喙，收起的颈部下方拖着修长双腿。宽大的羽翼掠过岸边。`,`它沿着岸线飞行。站在湖边，比在内陆树林中更容易看清它。`],"ribbon-fish":[`银带鱼`,`涟漪下的一缕银色`,`细长的银色身体带着精巧的鱼鳍，在水面下轻轻转动。明亮的体侧捕捉着穿透水面的光线。`,`从浅岸向下观察。清澈水面与较近距离，能显露远处岸边看不到的细节。`],"glass-koi":[`琉璃锦鲤`,`凉水里的暖色斑纹`,`宽厚的鱼身两侧，有暖色斑块覆在珍珠般的底色上。圆尾与成对鱼鳍在平静水域中缓缓转动。`,`较深的水洼为锦鲤转身留出空间。开始勘测时，不妨先找湖中较为平静的区域。`],"lantern-eel":[`灯鳗`,`流动的一线微光`,`修长渐细的身体在暗水中弯曲游动。细薄的鳍脊旁，沿体侧排列着小小的发光结点。`,`跟着水面下的光点寻找。灯鳗始终潜在水中，靠近干燥河岸前便会转身游回。`]},Jd={"Canopy Forest":`树冠森林`,"A living network beneath the leaves":`叶幕下生生相连的世界`,"Pearl blooms and swaying fronds shelter beneath the canopy.":`珍珠般的花朵与摇曳蕨叶，生长在林冠的庇护下。`,"Glass Desert":`琉璃沙漠`,"Wind, mineral and patient light":`风、矿石与缓慢流转的光`,"Look for glass flora among the warm stone ridges.":`在暖色石脊之间，寻找琉璃般的植物。`,"Resonant Caverns":`共鸣洞窟`,"A luminous world of slow echoes":`微光与回声交织的地下世界`,"Pale crystals and coral-like growths mark the quieter hollows.":`浅色晶体与珊瑚状生物，指引你找到较为幽静的洞穴。`,"Starpetal Meadows":`星瓣草甸`,"Open grass and layered flower beds draw pollinators into the light.":`开阔草地与层层花丛，吸引传粉者来到阳光下。`,"The Fernwood":`蕨木林`,"Tall spires, tree ferns and fallen timber shelter a dense understory.":`高耸的树冠、树蕨与倒木，为繁密的林下植物提供庇护。`,"Veilwillow Grove":`帘柳林`,"Trailing silver-green branches shade quiet lily and bellflower beds.":`银绿色的垂枝，为安静的莲叶与铃花丛遮住阳光。`,"Sporelight Wetlands":`孢光湿地`,"Reeds, broad leaves and soft fungi follow shallow moisture channels.":`芦苇、宽叶与柔软菌菇，沿着浅浅的湿润水路生长。`,"Sunwell Oasis":`日泉绿洲`,"Palms, cycads and bright flowers gather where the sand holds moisture.":`沙地留得住水分的地方，聚集着棕榈、苏铁与鲜亮花朵。`,"The Cactus Garden":`仙人掌花园`,"Branching glass flora and rounded reservoirs form a patient desert garden.":`分枝的琉璃植物与圆润的储水植株，组成一座缓慢生长的沙漠花园。`,"Ochre Badlands":`赭色荒原`,"Weathered stacks and occasional arches frame sparse pockets of life.":`风化石塔与零散石拱之间，藏着稀疏而顽强的生命。`,"Prism Gardens":`棱晶花园`,"Dense blue prisms support coral growth and tiny mineral grazers.":`密集的蓝色棱晶，滋养着珊瑚状生物与细小的矿物食者。`,"The Fungal Hollow":`菌菇幽谷`,"Glowing caps, shelf colonies and round puffballs occupy the damp dark.":`发光菌盖、层架菌群与圆形马勃，在湿润暗处悄悄生长。`,"Echo Vaults":`回声洞厅`,"Tall mineral columns leave open passages for drifting cavern rays.":`高大矿柱之间留出宽敞通道，让洞窟飞鳐悠悠穿行。`,"Firstlight Grove":`初光林地`,"Firstlight Root Confluence":`初光根系交汇地`,"Root Confluence":`根系交汇地`,"Horizon Observatory":`地平线观测台`,"Resonance Well":`共鸣井`,"Scan the three root-linked specimens, then investigate the Heartwood Archive.":`扫描三份由根系相连的样本，再调查心木档案。`,"Scan the three wind-worn specimens, then investigate the Heliograph Dial.":`扫描三份受风侵蚀的样本，再调查日照仪。`,"Scan the three resonant specimens, then investigate the Harmonic Heart.":`扫描三份产生共鸣的样本，再调查共鸣之心。`,"Firstlight Lake":`初光湖`,"The Willowrun":`柳影河`,"Saffron Oasis":`金砂绿洲`,"Opal Pool":`欧泊水潭`,"Willow Basin":`柳影湖盆`,Resting:`休息中`,"Holding in the current":`在水流中停驻`,Swimming:`游动中`,"Hovering nearby":`在附近悬停`,Gliding:`滑翔中`,"Watching you":`正在观察你`,Foraging:`觅食中`,Wandering:`漫步中`,"Outside suitable water":`离开了适宜水域`,Arrival:`初来者`,"Field observer":`野外观察员`,Pathfinder:`寻路者`,Naturalist:`博物学者`,Surveyor:`勘测员`,Researcher:`研究员`,Archivist:`档案编录员`,"Atlas keeper":`图鉴守护者`,"Research milestone":`研究里程碑`,"Salvaged alloy":`回收合金`,"salvaged alloy":`回收合金`,"Recovered from supply caches. Use it to repair survey probes or build a beacon.":`从补给箱回收的合金，可用于修复勘测探针或制作信标。`,"Lumen resin":`荧光树脂`,"lumen resin":`荧光树脂`,"A renewable-looking amber deposit. Binds pulse cells and survey beacons together.":`一种琥珀色沉积物，看起来具有再生的潜力。可用于组装脉冲电池和勘测信标。`,"Conductive crystal":`导电晶体`,"conductive crystal":`导电晶体`,"Small charged fragments. Used in probe repairs, pulse cells and beacons.":`带有电荷的小块晶体，可用于修复探针、制作脉冲电池和信标。`,"Pulse cell":`脉冲电池`,"pulse cell":`脉冲电池`,"Consume to recharge your survey pulse immediately and reveal nearby specimens. Field supplies are shown on your map.":`使用后立即为勘测脉冲充能，标记附近的样本。野外补给会显示在地图上。`,"An extra survey pulse for when you want to search again without waiting.":`额外储存一次勘测脉冲，无须等待冷却即可再次搜索。`,"Survey beacon":`勘测信标`,"survey beacon":`勘测信标`,"Deploy on clear dry ground. Return to this field camp from your backpack; one beacon can be active at a time.":`在干燥、开阔的地面部署信标，即可从背包返回这处野外营地。同时只能部署一枚信标。`,"A reusable return point for longer expeditions.":`为远行设置一处可重复使用的返回点。`,"Supply cache":`补给箱`,"Lumen resin deposit":`荧光树脂沉积点`,"Conductive crystal deposit":`导电晶体矿点`,"Survey probe":`勘测探针`,"Survey probe restored":`勘测探针已修复`,"Investigation clue":`调查线索`,"repair probe":`修复探针`,"Needs 2 alloy + 1 crystal":`需要 2 份合金和 1 份晶体`,"Backpack full":`背包已满`,"craft or use supplies":`制作或使用物品，腾出空间`,"Repair the survey probe instead of collecting it.":`这是一枚勘测探针，需要修复，无法收集。`,"Already collected.":`已经收集过了。`,"This expedition has reached its field record limit.":`本次远征的野外记录已达到上限。`,"This deposit has no valid supplies.":`此处没有可收集的有效补给。`,"Backpack full. Craft or use supplies to make room.":`背包已满。制作、使用或丢弃物品，腾出空间后再收集。`,"Unknown recipe.":`无法识别此配方。`,"Backpack supplies are invalid.":`背包物品数据无效。`,"Gather the required supplies first.":`请先收集配方所需的材料。`,"Backpack full.":`背包已满。`,"Unknown or invalid supply.":`无法识别此物品，或物品数据无效。`,"There are none in your backpack.":`背包里没有这个物品。`,"This object is not a survey probe.":`此物件不是勘测探针。`,"This probe is already repaired.":`这枚探针已经修复。`,"Repair needs 2 salvaged alloy and 1 conductive crystal.":`修复需要 2 份回收合金和 1 份导电晶体。`,"A beacon is already active. Return to it from your backpack.":`已有一枚信标在使用中。可打开背包返回信标处。`,"Choose a valid place for the beacon.":`请为信标选择有效的部署位置。`,"No beacon is deployed.":`尚未部署信标。`,"Backpack full. Make room before packing the beacon.":`背包已满。请先腾出空间，再收起信标。`,"Touch exploration controls":`触屏探索操作`,"Movement joystick":`移动摇杆`,MOVE:`移动`,Scan:`扫描`,hold:`按住`,"Hold to scan":`按住以扫描`,"Use nearby item":`收集或使用附近物品`,Use:`交互`,Jump:`跳跃`,Pulse:`脉冲`,Run:`奔跑`,Bag:`背包`,Map:`地图`,Pause:`暂停`,"Swipe the world to look":`滑动场景以转动视角`,"Path obstructed":`前方有障碍`,"Choose a closer spot around the obstacle, or move manually.":`请绕过障碍，选择较近的位置，或切换为手动移动。`,"Choose a closer destination":`请选择较近的目的地`,"Click visible ground within 80 metres.":`请点击 80 米内看得见的地面。`,"Destination reached":`已到达目的地`,"Click another patch of ground to keep exploring.":`点击另一处地面，继续探索。`,"Choose visible ground":`请选择可见的地面`,"Click the terrain to walk. Right-drag to look around.":`点击地面即可移动，按住鼠标右键拖动可转动视角。`},Yd={...Jd};for(let e of Xl){let t=qd[e.id];if(!t)continue;let n=[`name`,`subtitle`,`description`,`insight`];for(let r=0;r<n.length;r++)Yd[e[n[r]]]=t[r]}var Xd=[[{Pearl:`珍珠`,Sage:`鼠尾草`,Dew:`露水`,Ribbon:`缎带`,Quiet:`静谧`,Moss:`苔藓`},{Canopy:`林冠`,Grove:`林地`,Garden:`花园`,Reach:`林域`,Thicket:`灌丛`,Vale:`山谷`}],[{Amber:`琥珀`,Glass:`琉璃`,Ochre:`赭色`,Copper:`铜色`,Still:`寂静`,Saffron:`金砂`},{Dunes:`沙丘`,Basin:`盆地`,Expanse:`旷野`,Ridge:`沙脊`,Horizon:`地平线`,Wastes:`荒地`}],[{Blue:`湛蓝`,Echo:`回声`,Opal:`欧泊`,Lunar:`月色`,Silver:`银光`,Deep:`深邃`},{Hollow:`幽谷`,Vault:`洞厅`,Gallery:`洞廊`,Sanctum:`秘境`,Chamber:`洞室`,Passage:`通道`}]],Zd=[`Root Confluence`,`Horizon Observatory`,`Resonance Well`];for(let[e,t]of Xd)for(let[n,r]of Object.entries(e))for(let[e,i]of Object.entries(t)){let t=`${n} ${e}`,a=`${r}${i}`;Yd[t]=a;for(let e of Zd)Yd[`${t} · ${e}`]=`${a} · ${Jd[e]}`}for(let e of Zd)Yd[`Firstlight Grove · ${e}`]=`初光林地 · ${Jd[e]}`;var Qd={"Sensor still recharging":`传感器仍在充能`,"Wait until the survey sensor says Pulse ready, or use a crafted pulse cell from your backpack.":`等待传感器显示“脉冲就绪”，或在背包中使用已制作的脉冲电池。`,"Specimen outside scanner range":`标本超出扫描范围`,"Move closer until the target card says Hold E. Your current scanner range is shown beside the survey sensor.":`请靠近标本，直到提示变为“按住 E”。当前扫描范围显示在勘测传感器旁。`,"Move closer · outside scanner range":`请靠近 · 已超出扫描范围`,"Clear view required":`需要清晰视线`,"Move around the ridge or foliage blocking the specimen. Keep it centred in the crosshair.":`请绕开遮挡标本的山脊或植物，让标本保持在准星中央。`,"Move around the obstacle · clear view needed":`请绕开障碍物 · 需要清晰视线`,"This observation is already recorded":`这个标本已经记录过了`,"This individual specimen is already in your atlas. Explore for another specimen or use Q to highlight unrecorded discoveries.":`这个具体标本已经收录在图鉴中。请寻找其他标本，或按 Q 标出尚未记录的发现。`,"Recorded · seek another specimen":`已记录 · 请寻找其他标本`,"Three clues unlock this landmark":`先记录三条线索，再调查遗迹`,"Hold E to record each of the three distinct clues around this site, then return and hold E on the landmark. Q helps locate unrecorded clues.":`先按住 E，分别记录遗迹周围的三条不同线索，再返回并按住 E 调查遗迹。按 Q 可帮助寻找尚未记录的线索。`,"Record all 3 surrounding clues first":`请先记录周围的全部 3 条线索`,"Hold the scanner until the bar fills":`请持续扫描，直到进度条填满`,"Keep the specimen centred and hold E for about one second. Landmarks take a little longer.":`让标本保持在准星中央，持续按住 E 约一秒。调查遗迹需要稍长一点时间。`,"Hold E · reveal finding":`按住 E · 揭开遗迹的秘密`,"Hold E · record observation":`按住 E · 记录观察`,"Field supplies use a different action":`收集补给和扫描标本的操作不同`,"Move within 5 metres, face the supply or probe, and press F. Hold E records catalogue specimens and investigation clues.":`靠近补给或探针至 5 米以内，面向它并按 F。按住 E 用于扫描图鉴标本和调查线索。`,"Move within 5 metres, face the supply or probe, and tap Use. Scan records catalogue specimens and investigation clues.":`靠近补给或探针至 5 米以内，面向它并点击“使用”。“扫描”用于记录图鉴标本和调查线索。`,"No catalogue specimen selected":`尚未瞄准可扫描的标本`,"Aim at a specimen and hold E until the bar fills. Q marks unrecorded specimens; some trees, rocks and plants are scenery.":`瞄准标本并持续按住 E，直到进度条填满。按 Q 可标出未记录的标本；部分树木、岩石和植物仅是环境布景。`,"Aim at a specimen and hold Scan until the bar fills. Pulse marks unrecorded specimens; some trees, rocks and plants are scenery.":`瞄准标本并长按“扫描”，直到进度条填满。点击“脉冲”可标出未记录的标本；部分树木、岩石和植物仅是环境布景。`,"Move within 5 m · collect / repair":`请靠近至 5 米以内 · 收集或修复`,"Needs 2 alloy + 1 crystal · collect supplies first":`需要 2 个合金和 1 个晶体 · 请先收集补给`,"Backpack full · craft, use or discard supplies":`背包已满 · 请制作、使用或丢弃物品`,"Move closer to the field supply":`请靠近补给`,"Move within 5 metres of a field supply or damaged probe and face it. Hold E scans specimens; F collects supplies and repairs probes.":`靠近补给或受损探针至 5 米以内，并面向它。按住 E 扫描标本；按 F 收集补给或修复探针。`,"Follow the path north. Hold E to record each of the three clues around the grove, then scan its central landmark.":`沿小路向北，按住 E 分别记录林地周围的三条线索，再扫描中央遗迹。`,"Repair with 2 alloy + 1 crystal. Earn 55 research XP and locate a supply cache.":`消耗 2 个合金和 1 个晶体进行修复，获得 55 点研究经验，并定位一处补给箱。`},$d={...Qd};for(let[e,t]of Object.entries(Qd)){let n=e.replace(/\bhold E\b/gi,e=>e[0]===`H`?`Hold Scan`:`hold Scan`).replace(/\bQ\b/g,`Pulse`);n!==e&&($d[n]=t.replace(/按住 E/g,`长按“扫描”`).replace(/按 Q/g,`点击“脉冲”`))}var ef=`vesper-language`,tf=`vesper-languagechange`;function nf(){try{let e=globalThis.localStorage?.getItem(ef);return e===`en`||e===`zh-CN`?e:null}catch{return null}}var rf=nf()??`en`;function af(){return rf}function of(e){if(e!==`en`&&e!==`zh-CN`)return;let t=e!==rf;rf=e,uf.clear();try{globalThis.localStorage?.setItem(ef,e)}catch{}typeof document<`u`&&(document.documentElement.lang=e,document.title=e===`zh-CN`?`Vesper — 异星探索图鉴`:`Vesper — An Atlas of Elsewhere`,document.querySelector(`#world`)?.setAttribute(`aria-label`,e===`zh-CN`?`Vesper 三维异星世界`:`Vesper, a three-dimensional alien landscape`),t&&document.dispatchEvent(new Event(tf)))}var sf={"Your expedition could not be saved":`探索进度未能保存`,"Browser storage is unavailable or full. Export your expedition from the pause menu to keep a backup.":`浏览器存储不可用或空间已满。请在暂停菜单中导出存档，保留探索进度。`,"Expedition active":`继续探索`,"Your field atlas is ready. Continue where you left off.":`图鉴已载入，可以从上次的位置继续探索。`,"Follow the green signal ahead. Aim and hold Scan to make your first observation.":`沿着前方绿色标记，瞄准标本并长按“扫描”，完成第一次观察。`,"Follow the green signal ahead. Hold E to make your first observation.":`沿着前方绿色标记，瞄准标本并按住 E，完成第一次观察。`,"Field photograph saved":`照片已保存`,"A clean image of the current landscape.":`已保存当前景色的无界面照片。`,"No item to discard":`没有可丢弃的物品`,"Your bag is empty.":`背包里没有物品。`,"One item discarded":`已丢弃一件物品`,"Waypoint placed":`已设置路标`,"Your compass will guide you there.":`跟随罗盘指引前往目标位置。`,"Atlas exported":`存档已导出`,"Keep this file as a backup or import it on another browser.":`请保留文件作为备份，也可以在其他浏览器中导入。`,"Save file is too large.":`存档文件过大，请选择有效的 Vesper 导出存档。`,"Expedition restored":`存档已载入`,"Could not restore this atlas":`无法载入存档`,"Please choose a valid Vesper save file.":`请选择有效的 Vesper 导出存档。`,"Returned to the landing site":`已返回着陆点`,"Your discoveries and research are preserved.":`图鉴和研究进度已保留。`,"Your research is preserved.":`研究进度已保留。`,"Choose open ground":`请选择空地`,"That spot is occupied by scenery. Try nearby ground.":`这个位置有障碍物，请选择附近的空地。`,"Survey pulse":`勘测脉冲`,"Nearby specimens are marked. Check the map for field supplies and damaged probes.":`已标出附近的标本。补给和受损探针的位置可在地图上查看。`,"Field action unavailable":`暂时无法操作`,"Try again.":`请调整位置后重试。`,"Nothing in reach":`附近没有可操作的物品`,"Move within 5 metres of a field supply or damaged probe and face it.":`靠近补给或受损探针至 5 米以内，并面向它。`,"Move around the obstacle":`请绕开障碍物`,"You need a clear view of this field supply or probe.":`需要看到补给或探针，中间不能有障碍物。`,"A supply cache has been marked on your map.":`已在地图上标出一处补给箱。`,"Keep exploring for new field supplies.":`继续探索，寻找更多补给。`,"Supplies added to backpack":`补给已放入背包`,"Cannot craft yet":`暂时无法制作`,"Gather supplies.":`请先收集所需材料。`,"Available in your backpack.":`可以在背包中查看和使用。`,"No pulse cell available":`没有可用的脉冲电池`,"Craft one first.":`请先在背包中制作。`,"Find clear dry ground":`请寻找干燥的空地`,"Face an open patch of land before deploying your beacon.":`面向一片干燥、没有障碍物的空地，再部署信标。`,"Beacon unavailable":`暂时无法部署信标`,"Return beacon deployed":`勘测信标已部署`,"It is marked on the map. Return to it from your backpack.":`信标已标在地图上，可以从背包返回该位置。`,"Returned to your survey beacon":`已返回勘测信标`,"Your field camp is ready for another expedition.":`从这里继续探索吧。`,"Move closer to your beacon":`请靠近信标`,"Return to it before packing it into your backpack.":`先返回信标附近，再将它收回背包。`,"Cannot pack beacon":`暂时无法收回信标`,"Beacon packed":`信标已收回`,"You can deploy it again in another location.":`可以在其他位置重新部署。`,"A first observation":`第一次观察`,"Find the luminous specimen ahead. Aim at it and hold E.":`找到前方发光的标本，瞄准它并按住 E。`,"The listening grove":`倾听林地`,"Return to the central landmark. Hold E to reveal its finding.":`返回中央遗迹，按住 E 揭开它的秘密。`,"Follow the path north. Record three clues around the grove, then activate its landmark.":`沿小路向北，扫描林地周围的三条线索，再调查中央遗迹。`,"Beyond the canopy":`走出森林`,"Desert lies east; luminous caverns lie south. Use M to place a waypoint.":`沙漠在东，发光洞窟在南。按 M 打开地图并设置路标。`,"Three ecological signatures":`三处生态印记`,"Investigate one landmark in each biome. Their findings are related.":`分别调查三个生态区域的遗迹，发现它们之间的联系。`,"An atlas of elsewhere":`异星探索图鉴`,"Seek new habitats and complete the planet’s field catalogue.":`寻找新的栖息地，完善这颗星球的图鉴。`,"The horizon remains open":`地平线之外`,"Your catalogue is complete. Keep exploring new regions and recording observations.":`图鉴已经收集完成。仍然可以探索新区域，记录更多观察。`,"Follow the surrounding clues":`先调查周围的线索`,"Observation recorded":`观察已记录`,"Observation unavailable":`暂时无法扫描`,"A new ecological region":`发现新的生态区域`,"A clear place to continue":`已移至安全位置`,"Your saved position was inside scenery. You have been moved to nearby open ground.":`存档位置被障碍物占据，已将你移到附近的空地。`,"Vesper needs a 3D-capable browser.":`Vesper 需要支持三维图形的浏览器。`,"Enable hardware acceleration and open this page in a current desktop browser.":`请开启硬件加速，并使用较新版本的浏览器打开游戏。`,"Your expedition save will stay on this device.":`你的探索存档仍保留在本设备上。`,...Yd,...Kd,...$d},cf=e=>e.trim().replace(/\s+/g,` `),lf=new Map(Object.entries(sf).map(([e,t])=>[cf(e).toLowerCase(),t])),uf=new Map;function df(e){let t=sf[e]??lf.get(cf(e).toLowerCase());if(t)return t;let n,r=e=>df(e.trim());return(n=e.match(/^([+-]\d+) research XP$/))?`${n[1]} 研究经验`:(n=e.match(/^(-?\d+) E$/))?`东 ${n[1]}`:(n=e.match(/^(-?\d+) N$/))?`北 ${n[1]}`:(n=e.match(/^(\d+) of (\d+) specimens catalogued · (\d+) research sites resolved$/))?`已收录 ${n[1]} / ${n[2]} 种标本 · 已完成 ${n[3]} 处调查`:(n=e.match(/^\/?\s*(\d+) specimens$/))?`${e.startsWith(`/`)?`/ `:``}${n[1]} 种标本`:(n=e.match(/^(\d+) survey probes? restored(.*)$/))?`已修复 ${n[1]} 个勘测探针${n[2]?` · 继续探索，寻找更多补给`:``}`:(n=e.match(/^(\d+) probes? restored$/))?`已修复 ${n[1]} 个探针`:(n=e.match(/^Backpack · (\d+) \/ (\d+)$/))?`背包 · ${n[1]} / ${n[2]}`:(n=e.match(/^World seed · (.+)$/))?`世界种子 · ${n[1]}`:(n=e.match(/^Level (\d+) · (.+)$/))?`等级 ${n[1]} · ${r(n[2])}`:(n=e.match(/^Research level (\d+)$/))?`研究等级 ${n[1]}`:(n=e.match(/^Scanner reach increased to ([\d.]+) metres\.$/))?`扫描范围已提升至 ${n[1]} 米。`:(n=e.match(/^(\d+) findings restored to your field atlas\.$/))?`已载入 ${n[1]} 项图鉴发现。`:(n=e.match(/^Waypoint · ([\d.]+) m$/))?`路标 · ${n[1]} 米`:(n=e.match(/^Scan range · ([\d.]+) m$/))?`扫描范围 · ${n[1]} 米`:(n=e.match(/^Recharging · ([\d.]+)s$/))?`充能中 · ${n[1]} 秒`:(n=e.match(/^([\d.]+) m span$/))?`${n[1]} 米范围`:(n=e.match(/^([\d.]+) m view$/))?`${n[1]} 米视野`:(n=e.match(/^([\d.]+) m away$/))?`距离 ${n[1]} 米`:(n=e.match(/^([\d.]+) m$/))?`${n[1]} 米`:(n=e.match(/^(.+) · (\d+) carried$/))?`${r(n[1])} · 持有 ${n[2]} 件`:(n=e.match(/^(\d+) items?$/))?`${n[1]} 件物品`:(n=e.match(/^Discard 1 (.+)$/))?`丢弃 1 件${r(n[1])}`:(n=e.match(/^(\d+) carried · (\d+) required$/))?`持有 ${n[1]} · 需要 ${n[2]}`:(n=e.match(/^Need (.+)$/))?`还需要 ${n[1].split(/ and /).map(r).join(`、`)}`:(n=e.match(/^(\d+) (salvaged alloy|lumen resin|conductive crystal)$/i))?`${n[1]} 个${r(n[2])}`:(n=e.match(/^(\d+) × (.+)$/))?`${n[1]} × ${r(n[2])}`:(n=e.match(/^(.+) crafted$/))?`已制作${r(n[1])}`:(n=e.match(/^(.+) · backpack space freed\.$/))?`已丢弃${r(n[1])}，腾出背包空间。`:(n=e.match(/^(.+) · another habitat added to your atlas\.$/))?`已记录${r(n[1])}在另一处栖息地的观察。`:(n=e.match(/^(.+) — rendered field specimen$/))?`${r(n[1])} — 标本模型图像`:(n=e.match(/^(.+) \/ (.+) · (\d+) observations?$/))?`${r(n[1])} / ${r(n[2])} · ${n[3]} 次观察`:(n=e.match(/^Explore (.+) and follow the survey pulse to find new specimens\.$/))?`探索${r(n[1])}，跟随勘测脉冲寻找新的标本。`:(n=e.match(/^([\d-]+) E · ([\d-]+) N$/))?`东 ${n[1]} · 北 ${n[2]}`:(n=e.match(/^(\d{2}) · (.+)$/))?`${n[1]} · ${r(n[2])}`:e.startsWith(`Invalid expedition save:`)||e.startsWith(`Unexpected`)||e.includes(`is not valid JSON`)||e.startsWith(`Expected property name`)?`存档格式不正确或内容不完整。请选择有效的 Vesper 导出存档。`:e.includes(` · `)?e.split(` · `).map(r).join(` · `):e.includes(` / `)?e.split(` / `).map(r).join(` / `):e}function ff(e){if(rf===`en`||!e.trim())return e;let t=uf.get(e);if(t!==void 0)return t;let n=df(cf(e)),r=e.replace(e.trim(),n);return uf.size>3e3&&uf.clear(),uf.set(e,r),r}var pf=new WeakMap,mf=new WeakMap,hf=[`aria-label`,`title`,`placeholder`,`alt`];function gf(e,t){if(!e)return;let n=String(t),r=ff(n);e.textContent!==r&&(e.textContent=r);let i=e.firstChild;i?.nodeType===3&&pf.set(i,{source:n,rendered:r})}function _f(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(;t.nextNode();){let e=t.currentNode;if(e.parentElement?.closest(`script,style,code,[data-no-translate]`)||e.parentElement?.closest(`kbd`)&&!e.parentElement.closest(`[data-translatable]`))continue;let n=pf.get(e),r=n&&e.data===n.rendered?n.source:e.data,i=ff(r);e.data!==i&&(e.data=i),pf.set(e,{source:r,rendered:i})}for(let t of[e,...e.querySelectorAll(`[aria-label],[title],[placeholder],[alt]`)]){let e=mf.get(t);e||(e=new Map,mf.set(t,e));for(let n of hf){let r=t.getAttribute(n);if(r===null)continue;let i=e.get(n),a=i&&r===i.rendered?i.source:r,o=ff(a);r!==o&&t.setAttribute(n,o),e.set(n,{source:a,rendered:o})}}}function vf(e,t){e.innerHTML=t,_f(e)}var yf={cache:`#ecd09d`,resin:`#acd896`,crystal:`#b1cfee`,probe:`#f2b391`,beacon:`#f0efda`};function bf(e,t,n,r,i=4){e.save(),e.translate(n,r),e.fillStyle=yf[t],e.strokeStyle=yf[t],e.lineWidth=1.5,t===`beacon`?(e.beginPath(),e.arc(0,0,i+2,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(0,-i),e.lineTo(0,i),e.moveTo(-i,0),e.lineTo(i,0),e.stroke()):t===`probe`||t===`crystal`?(e.rotate(Math.PI/4),t===`probe`?e.strokeRect(-i,-i,i*2,i*2):e.fillRect(-i*.7,-i*.7,i*1.4,i*1.4)):t===`cache`?e.fillRect(-i,-i,i*2,i*2):(e.beginPath(),e.arc(0,0,i,0,Math.PI*2),e.fill()),e.restore()}function xf(e){let t=e.getContext(`2d`),n=document.createElement(`canvas`);n.width=n.height=288;let r=n.getContext(`2d`),i={x:1/0,z:1/0},a=``,o=``,s=-1/0;function c(e,t){if(!r)return;let c=Math.hypot(e.position.x-i.x,e.position.z-i.z),l=e.visitedChunks.join(`;`);if(!(e.seed!==a||l!==o||c>=8)||t-s<1e3&&c<60&&e.seed===a)return;s=t,a=e.seed,o=l,i={x:Math.round(e.position.x/8)*8,z:Math.round(e.position.z/8)*8};let u=new Set(e.visitedChunks),d=n.width/36;for(let t=0;t<36;t++)for(let n=0;n<36;n++){let a=i.x+((n+.5)/36-.5)*256,o=i.z+((t+.5)/36-.5)*256,s=Math.floor(a/64),c=Math.floor(o/64),l=u.has(`${s},${c}`)||u.has(`${s}:${c}`);r.fillStyle=Wu(e.seed,a,o)?`#7ba7b5`:Kl[Qu(e.seed,a,o)].ground,r.globalAlpha=1,r.fillRect(n*d,t*d,d+1,d+1),r.fillStyle=`#112c29`,r.globalAlpha=l?.18:.66,r.fillRect(n*d,t*d,d+1,d+1)}r.globalAlpha=1}return{draw(a,o=performance.now()){if(!t||!r)return;c(a,o);let s=e.width,l=e.height,u=s/160,d=a.settings.minimapRotate?a.heading:0;t.clearRect(0,0,s,l),t.fillStyle=`#142b28`,t.fillRect(0,0,s,l),t.save(),t.translate(s/2,l/2),t.rotate(d);let f=(i.x-a.position.x-128)*u,p=(i.z-a.position.z-128)*u;t.imageSmoothingEnabled=!1,t.drawImage(n,f,p,256*u,256*u),t.strokeStyle=`rgba(235,238,218,.12)`,t.lineWidth=1;let m=64*u,h=(-a.position.x*u%m+m)%m,g=(-a.position.z*u%m+m)%m;t.beginPath();for(let e=h-m*4;e<s;e+=m)t.moveTo(e,-l),t.lineTo(e,l);for(let e=g-m*4;e<l;e+=m)t.moveTo(-s,e),t.lineTo(s,e);t.stroke();let _=e=>({x:(e.x-a.position.x)*u,y:(e.z-a.position.z)*u}),v=_({x:0,z:0});t.strokeStyle=`#f2efda`,t.lineWidth=1.5,t.beginPath(),t.arc(v.x,v.y,4,0,Math.PI*2),t.stroke();for(let e of a.fieldMarkers){if(Math.hypot(e.x-a.position.x,e.z-a.position.z)>80&&e.kind!==`beacon`)continue;let n=_(e);bf(t,e.kind,n.x,n.y,2.5)}if(a.waypoint){let e=_(a.waypoint);t.strokeStyle=`#f2ce99`,t.setLineDash([3,5]),t.beginPath(),t.moveTo(0,0),t.lineTo(e.x,e.y),t.stroke(),t.setLineDash([]),t.save(),t.translate(e.x,e.y),t.rotate(Math.PI/4),t.strokeRect(-4,-4,8,8),t.restore()}if(a.mouseDestination){let e=_(a.mouseDestination);t.strokeStyle=`#e5eee0`,t.beginPath(),t.arc(e.x,e.y,3,0,Math.PI*2),t.stroke()}t.restore(),t.save(),t.translate(s/2,l/2),t.fillStyle=`rgba(8,26,23,.45)`,t.beginPath(),t.arc(0,0,10,0,Math.PI*2),t.fill(),t.rotate(d-a.heading),t.fillStyle=`#fbf7df`,t.beginPath(),t.moveTo(0,-8),t.lineTo(5,6),t.lineTo(0,3),t.lineTo(-5,6),t.closePath(),t.fill(),t.restore(),t.font=`bold 10px "Space Grotesk", "PingFang SC", "Microsoft YaHei", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillStyle=`#f7f0db`,t.strokeStyle=`#13302b`,t.lineWidth=3;let y=s/2+Math.sin(d)*(s/2-12),b=l/2-Math.cos(d)*(l/2-12);t.strokeText(ff(`N`),y,b),t.fillText(ff(`N`),y,b)}}}var Sf={forest:`The verdant reach`,desert:`The amber expanse`,caves:`The luminous deep`},Cf=[`all`,`flora`,`mineral`,`relic`,`fauna`],wf=[`Arrival`,`Field observer`,`Pathfinder`,`Naturalist`,`Surveyor`,`Researcher`,`Archivist`,`Atlas keeper`];function Tf(e){return String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function Ef(e){return`${Math.round(e.x)} E · ${Math.round(-e.z)} N`}function U(e,t){e&&gf(e,String(t))}function Df(e){let t=Math.floor(Math.max(0,e)/60);return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}function Of(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{alloy:`<path d="m12 3 8 5v8l-8 5-8-5V8Zm-8 5 8 5 8-5M12 13v8"/>`,"lumen-resin":`<path d="M12 3C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-12Z"/><path d="M8 15a4 4 0 0 0 4 4"/>`,crystal:`<path d="m12 2 7 8-7 12-7-12Zm-7 8h14M12 2v20"/>`,"pulse-cell":`<path d="m13 2-9 12h7l-1 8 10-13h-7Z"/>`,"survey-beacon":`<path d="M12 11v10m-4 0h8M8 7a6 6 0 0 0 0 8m8-8a6 6 0 0 1 0 8M5 4a10 10 0 0 0 0 14M19 4a10 10 0 0 1 0 14"/><circle cx="12" cy="11" r="1"/>`}[e]}</svg>`}function kf(e,t){e.className=`vesper-ui`,e.innerHTML=`
    <div class="world-vignette" aria-hidden="true"></div>
    <section class="game-hud" aria-label="Expedition instruments" hidden>
      <div class="hud-top">
        <div class="location-instrument"><span class="eyebrow">Vesper · expedition 01</span><strong id="hud-region">The verdant reach</strong><span class="habitat-label" id="hud-habitat">Starpetal Meadows</span><div class="instrument-meta"><span id="hud-coordinates">0 E · 0 N</span><i></i><span id="hud-time">00:00</span></div></div>
        <div class="compass" aria-label="Compass"><span class="compass-direction" id="compass-west">NW</span><div class="compass-center"><span id="compass-bearing">000°</span><div class="compass-ticks" aria-hidden="true"></div><b id="compass-heading">N</b></div><span class="compass-direction" id="compass-east">NE</span></div>
        <nav class="hud-nav" aria-label="Field tools"><button data-open="backpack" aria-label="Open backpack (B)"><kbd>B</kbd><span>Bag</span><span class="hud-bag-count" id="hud-bag-count">0</span></button><button data-open="journal" aria-label="Open field atlas (J)"><kbd>J</kbd><span>Atlas</span></button><button data-open="map" aria-label="Open survey map (M)"><kbd>M</kbd><span>Map</span></button><button data-open="pause" aria-label="Pause expedition"><kbd>Esc</kbd><span>Pause</span></button></nav>
      </div>
      <button class="minimap-instrument" data-open="map" aria-label="Open survey map. Mini map shows nearby terrain, water, supplies, probes and your waypoint."><span class="minimap-heading"><span>Local survey</span><span id="minimap-orientation">North up</span></span><canvas id="minimap-canvas" width="216" height="216" aria-hidden="true"></canvas><span class="minimap-footer"><span id="minimap-distance">160 m view</span><span>Map ↗</span></span></button>
      <div class="field-instrument" hidden><div><span class="eyebrow" id="field-type">Field supplies</span><span id="field-distance"></span></div><h2 id="field-title"></h2><p id="field-detail"></p><button class="field-action" data-action="interact"><kbd>F</kbd><span id="field-prompt">Collect supplies</span><span aria-hidden="true">↗</span></button></div>
      <div class="bag-instrument"><button data-open="backpack" aria-label="Open backpack"><span class="bag-glyph" aria-hidden="true">▣</span><span id="bag-status">Backpack · 0 / 60</span><kbd>B</kbd></button><span id="field-goal">Collect supplies · craft tools · restore survey probes</span></div>
      <div class="objective-instrument"><span class="eyebrow">Current research</span><h2 id="objective-title">A first impression</h2><p id="objective-detail">Approach the specimen near the landing pod.</p><div class="objective-foot"><div class="meter"><i id="objective-meter"></i></div><span id="objective-count">0 / 1</span></div></div>
      <div class="waypoint-instrument" hidden><span class="waypoint-arrow" aria-hidden="true">↑</span><span id="waypoint-distance">Waypoint · 0 m</span></div>
      <div class="crosshair" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>
      <div class="target-instrument" hidden><div class="target-topline"><span class="eyebrow" id="target-type">Field specimen</span><span id="target-distance">0 m</span></div><h2 id="target-title"></h2><p id="target-detail"></p><div class="scan-meter"><i id="scan-meter"></i></div><div class="target-prompt"><kbd>E</kbd><span id="target-prompt">Hold to scan</span><span id="scan-percent"></span></div></div>
      <div class="hud-bottom"><div class="research-instrument"><span class="eyebrow">Field atlas</span><strong><span id="hud-discovered">0</span><small> / ${Xl.length} specimens</small></strong><div class="rank-line"><span id="hud-rank">01 · Arrival</span><span id="hud-xp">0 XP</span></div><div class="meter"><i id="xp-meter"></i></div></div><div class="sensor-instrument"><div class="sensor-symbol" aria-hidden="true"><i></i><i></i><b></b></div><div><span class="eyebrow">Survey sensor</span><div class="sensor-status"><kbd>Q</kbd><span id="pulse-status">Pulse ready</span></div><span class="instrument-meta" id="scanner-range">Scan range · 8 m</span></div></div></div>
      <div class="pointer-hint" hidden><span>Click the world to look around</span><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> Move <kbd>E</kbd> Scan</span></div>
    </section>
    <main class="title-screen" data-screen="title">
      <div class="title-topline"><span class="eyebrow">Independent planetary survey</span><div class="title-tools"><span class="title-coordinate">Outer atlas / 001</span><div class="language-picker" role="group" aria-label="Choose your language"><button type="button" data-language="en" aria-pressed="true" lang="en">English</button><button type="button" data-language="zh-CN" aria-pressed="false" lang="zh-CN">简体中文</button></div></div></div>
      <div class="title-composition"><div class="planet-designation"><i></i><span>Uncharted. Inhabited. Interconnected.</span></div><h1>VESPER<span>AN ATLAS OF ELSEWHERE</span></h1><p class="title-description">Explore an alien world, catalogue its living specimens, and uncover the story connecting them.</p><div class="title-actions"><button class="button button-primary title-continue" data-action="continue" hidden>Continue expedition <span>↗</span></button><button class="button button-primary title-start" data-action="start">Begin expedition <span>↗</span></button><button class="button button-text" data-action="title-help">Field instructions <span>?</span></button></div><div class="seed-field"><label for="expedition-seed">World seed <span>Optional — the same seed returns to the same world</span></label><div><input id="expedition-seed" type="text" maxlength="80" placeholder="Let the atlas choose" autocomplete="off" spellcheck="false"><button class="seed-random" data-action="random-seed" aria-label="Generate a world seed">↻</button></div></div><div class="title-save-note" hidden><i></i><span>Your expedition is saved on this device.</span></div></div>
      <div class="title-bottomline"><span>Take your time. There is no combat, and no timer.</span><span>Headphones recommended <i></i> <span id="title-control-label">Keyboard + mouse</span></span></div>
    </main>
    <div class="overlay-shell" hidden>
      <section class="overlay-panel" role="dialog" aria-modal="true" aria-labelledby="overlay-heading">
        <header class="overlay-header"><div><span class="eyebrow">Vesper / field instruments</span><h1 id="overlay-heading">Expedition paused</h1></div><button class="close-overlay" data-action="close" aria-label="Return to expedition"><span>Return</span><kbd>Esc</kbd></button></header>
        <div class="overlay-body">
          <section data-screen="pause" class="pause-screen" hidden><div class="pause-summary"><div class="pause-emblem" aria-hidden="true"><i></i><i></i><i></i></div><span class="eyebrow">A moment in the field</span><h2 id="pause-region">The verdant reach</h2><p id="pause-position">0 E · 0 N</p><div class="pause-stats"><div><strong id="pause-discoveries">0</strong><span>Specimens</span></div><div><strong id="pause-sites">0</strong><span>Sites resolved</span></div><div><strong id="pause-level">1</strong><span>Research level</span></div></div><p class="save-status"><i></i><span id="save-status">Local save ready</span></p></div><div class="pause-actions"><button class="button button-primary" data-action="resume">Resume expedition <span>↗</span></button><div class="menu-row"><button data-open="journal"><span><b>Field atlas</b><small>Specimens & research</small></span><kbd>J</kbd></button><button data-open="map"><span><b>Survey map</b><small>Regions & waypoints</small></span><kbd>M</kbd></button></div><div class="menu-row"><button data-open="backpack"><span><b>Backpack</b><small>Supplies, crafting & field tools</small></span><kbd>B</kbd></button><button data-open="settings"><span><b>Instruments</b><small>Audio, controls & map</small></span><span>↗</span></button></div><div class="menu-row"><button data-open="help"><span><b>Field guide</b><small>How to explore</small></span><span>?</span></button></div><button class="menu-line" data-action="photo"><span>Enter photo mode</span><kbd>P</kbd></button><button class="menu-line" data-action="recall"><span>Recall to landing pod</span><kbd>R</kbd></button><div class="save-actions"><button data-action="export">Export expedition</button><button data-action="import">Import a save</button></div><button class="button button-text new-expedition" data-action="new">Begin a new expedition <span>↗</span></button></div></section>
          <section data-screen="journal" class="journal-screen" hidden><div class="journal-toolbar"><p id="atlas-count">Your catalogue begins with curiosity.</p><div class="category-filters" role="group" aria-label="Filter specimens">${Cf.map(e=>`<button data-filter="${e}" aria-pressed="${e===`all`}">${e===`all`?`All records`:e}</button>`).join(``)}</div></div><div class="journal-layout"><div class="species-list" aria-label="Specimen records"></div><article class="species-detail" aria-label="Selected specimen"></article></div><div class="research-milestones"><div><span class="eyebrow">Research progression</span><p id="research-summary">Level 1 · Arrival</p></div><div class="milestone-list"></div></div></section>
          <section data-screen="map" class="map-screen" hidden><div class="map-toolbar"><p>Click the survey to place a waypoint.</p><button class="button button-small" data-action="lake-waypoint">Mark nearby lake ↗</button><div class="map-scale-controls"><button data-action="map-in" aria-label="Zoom map in">+</button><span id="map-scale">256 m span</span><button data-action="map-out" aria-label="Zoom map out">−</button></div></div><div class="survey-map"><canvas id="survey-canvas" width="1000" height="640" tabindex="0" role="img" aria-label="Survey map showing forest, desert and cavern regions, explored areas, landing pod, your position and waypoint. Use arrow keys to move your waypoint; Home marks your current position." aria-describedby="map-instructions"></canvas><span class="map-north">N<i></i></span><div class="map-key"><span><i style="background:#547e73"></i>Forest</span><span><i style="background:#b98966"></i>Desert</span><span><i style="background:#536a88"></i>Caverns</span><span><i style="background:#72a9b5"></i>Water</span></div></div><div class="map-footer"><div><span class="eyebrow">Current position</span><strong id="map-position">0 E · 0 N</strong></div><div><span class="eyebrow">Waypoint</span><strong id="waypoint-position">None set</strong></div><button class="button button-small" data-action="clear-waypoint">Clear waypoint</button></div><div class="field-map-key"><span><i class="marker-cache"></i>Supplies</span><span><i class="marker-resin"></i>Resin</span><span><i class="marker-crystal"></i>Crystal</span><span><i class="marker-probe"></i>Survey probe</span><span><i class="marker-beacon"></i>Return beacon</span></div><p class="fine-print" id="map-instructions">Bright sectors have been visited. The surrounding terrain is predicted by the atlas. Color variations mark different habitats; blue channels and pools mark water. The circle marks your landing pod. Field resources are shown within 80 m; your return beacon remains marked. With the map focused, arrow keys move your waypoint; Home marks your position.</p></section>
          <section data-screen="backpack" class="backpack-screen" hidden><div class="backpack-overview"><div><span class="eyebrow">Your field kit</span><h2>Take something useful.</h2><p>Gather supplies, build survey tools, and bring silent research probes back online.</p></div><div class="bag-capacity"><strong id="bag-capacity-count">0 <small>/ 60</small></strong><span>items carried</span><div class="meter"><i id="bag-capacity-meter"></i></div></div></div><div class="backpack-layout"><div><div class="kit-section-title"><span class="eyebrow">Backpack contents</span><span>Materials & ready tools</span></div><div class="item-grid"></div><div class="beacon-status" hidden></div></div><div class="crafting-column"><div class="kit-section-title"><span class="eyebrow">Field crafting</span><span>No workbench needed</span></div><div class="recipe-list"></div><div class="field-kit-note"><span class="eyebrow">Continue the expedition</span><p>Look for supply caches, amber resin deposits and blue crystal outcrops. Repair damaged survey probes with 2 alloy and 1 conductive crystal. Nearby field resources appear on your mini map. Discard surplus items from your bag to make room for new supplies.</p><strong id="probe-progress">0 survey probes restored</strong></div></div></div></section>
          <section data-screen="settings" class="settings-screen" hidden><p class="screen-intro">Set your instruments for a comfortable expedition. Changes save automatically.</p><div class="settings-list"><label class="setting"><span><b>Interface language</b><small>Switch at any time; your expedition stays unchanged</small></span><select id="language"><option value="en" lang="en">English</option><option value="zh-CN" lang="zh-CN">简体中文</option></select></label><div class="settings-group-label"><span class="eyebrow">Controls</span><p id="control-summary">Keyboard movement and mouse look.</p></div><label class="setting"><span><b>Control layout</b><small>Auto adapts to your device; override at any time</small></span><select id="controlScheme"><option value="auto">Automatic</option><option value="desktop">Desktop controls</option><option value="touch">Touch controls</option></select></label><label class="setting"><span><b>Desktop movement</b><small>Click a clear piece of ground to walk there</small></span><select id="movementMode"><option value="keyboard">Keyboard</option><option value="mouse">Click to walk</option></select></label><label class="setting"><span><b>Desktop look</b><small>Click to walk supports right-drag or arrow-key look</small></span><select id="mouseLook"><option value="pointer-lock">Mouse capture</option><option value="drag">Right-button drag</option><option value="arrows">Arrow keys</option></select></label><label class="setting"><span><b>Look sensitivity</b><small>Mouse movement speed</small></span><div class="slider-field"><input type="range" min="0.2" max="2.5" step="0.05" id="sensitivity" aria-label="Look sensitivity"><output id="sensitivity-value">1.00×</output></div></label><label class="setting"><span><b>Touch look sensitivity</b><small>Swipe speed for looking around</small></span><div class="slider-field"><input type="range" min="0.25" max="3" step="0.05" id="touchSensitivity" aria-label="Touch look sensitivity"><output id="touchSensitivity-value">1.00×</output></div></label><label class="setting"><span><b>Touch control size</b><small>Resize the joystick and action buttons</small></span><div class="slider-field"><input type="range" min="0.8" max="1.4" step="0.05" id="touchScale" aria-label="Touch control size"><output id="touchScale-value">100%</output></div></label><label class="setting"><span><b>Movement joystick</b><small>Swipe the opposite side of the world to look</small></span><select id="joystickSide"><option value="left">Left side</option><option value="right">Right side</option></select></label><div class="settings-group-label"><span class="eyebrow">Map & comfort</span></div><label class="setting"><span><b>Show mini map</b><small>Nearby terrain, water and field resources</small></span><input class="switch" type="checkbox" id="showMinimap"></label><label class="setting"><span><b>Rotate mini map</b><small>Keep your facing direction at the top</small></span><input class="switch" type="checkbox" id="minimapRotate"></label><label class="setting"><span><b>Master volume</b><small>Ambient sound & survey instruments</small></span><div class="slider-field"><input type="range" min="0" max="1" step="0.01" id="volume" aria-label="Master volume"><output id="volume-value">60%</output></div></label><label class="setting"><span><b>Render quality</b><small>Lower quality improves performance</small></span><select id="quality"><option value="low">Low</option><option value="balanced">Balanced</option><option value="high">High</option></select></label><label class="setting"><span><b>Invert vertical look</b><small>Move the mouse down to look up</small></span><input class="switch" type="checkbox" id="invertY"></label><label class="setting"><span><b>Reduced motion</b><small>Quieter camera & interface movement</small></span><input class="switch" type="checkbox" id="reducedMotion"></label></div><div class="settings-footnote"><span class="eyebrow">Local & private</span><p>Your settings and expedition stay in this browser. Export a save to carry your discoveries to another device.</p></div></section>
          <section data-screen="help" class="help-screen" hidden><div class="help-introduction"><div><span class="eyebrow">The purpose of the expedition</span><h2>Look closer.<br>Everything is connected.</h2></div><p>Explore ten habitats across three regions, from flower meadows and willow groves to desert oases and fungal caverns. Watch wandering grazers, hoppers, birds and gliding rays. Follow the river to clear pools, look beneath the surface for fish, and wade or swim across water. The map can mark the nearby lake. Catalogue ordinary specimens to build your atlas. At investigation sites, scan three nearby clues, then examine the landmark to uncover a rare finding.</p></div><div class="help-columns"><div><span class="eyebrow">Movement</span><div class="key-row"><span>Walk</span><div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div></div><div class="key-row"><span>Look around</span><kbd data-translatable="true">Mouse / arrows</kbd></div><div class="key-row"><span>Sprint</span><kbd>Shift</kbd></div><div class="key-row"><span>Jump</span><kbd>Space</kbd></div><div class="key-row"><span>Pause / release cursor</span><kbd>Esc</kbd></div></div><div><span class="eyebrow">Field instruments</span><div class="key-row"><span>Hold to scan / examine</span><kbd>E</kbd></div><div class="key-row"><span>Collect / repair</span><kbd>F</kbd></div><div class="key-row"><span>Backpack & crafting</span><kbd>B</kbd></div><div class="key-row"><span>Sensor pulse</span><kbd>Q</kbd></div><div class="key-row"><span>Field atlas</span><kbd>J</kbd></div><div class="key-row"><span>Survey map</span><kbd>M</kbd></div><div class="key-row"><span>Photo mode / save image</span><kbd>P / O</kbd></div><div class="key-row"><span>Recall to landing pod</span><kbd>R</kbd></div></div></div><div class="control-guide"><span class="eyebrow">Choose your way to explore</span><p><b>Desktop.</b> Walk with WASD and look with the mouse. Choose click-to-walk in Settings to move by clicking the ground, then hold the right mouse button and drag to look around. Arrow-key look is also available.</p><p><b>Phone or tablet.</b> Touch controls appear automatically: move with the joystick, swipe the other side to look, and use the action buttons to scan, collect, jump or open your bag. You can change joystick side, size and swipe sensitivity in Settings.</p><p><b>Build a field kit.</b> Gather alloy, lumen resin and conductive crystals. Open your backpack to craft pulse cells or a survey beacon. Use a cell to recharge the sensor; place a beacon to create a personal return point. Repair damaged probes using supplies from your bag. Discard surplus items if you need room for different materials.</p></div><div class="scan-guide"><span class="eyebrow">Why a scan may not start</span><ul><li><b>Hold, rather than tap.</b> Keep E held for about one second, or hold Scan on a touch screen. Keep the target centred until the meter fills.</li><li><b>Check the target card.</b> Move closer if it says you are out of range. If something blocks the scan, step around it. Recorded specimens are already in your atlas.</li><li><b>Scenery and supplies are different.</b> Some trees, flowers and rocks are scenery. Q highlights nearby unrecorded catalogue specimens. Collect supplies and repair probes with F (Use on touch), within 5 m.</li><li><b>Investigate in order.</b> A landmark stays locked until you scan its three distinct nearby clues. Follow the target card’s clue count, then hold E on the landmark.</li></ul></div><div class="guide-notes"><p><b>Scan with intention.</b> Bring a specimen into range, centre it in the crosshair, and hold E until the scan is complete.</p><p><b>Follow the pulse.</b> Q reveals nearby discoveries. The sensor needs a short time to recharge.</p><p><b>Leave a marker.</b> Open the map with M, then click to set a waypoint. R safely returns you to your landing pod.</p></div><p class="fine-print">Your expedition saves locally. The catalogue is finite; the planet continues beyond the horizon.</p></section>
        </div>
        <footer class="overlay-footer"><span id="overlay-seed">World seed · Vesper</span><span id="overlay-save">Saved on this device</span></footer>
      </section>
    </div>
    <div class="confirmation-shell" hidden><section class="confirmation" role="alertdialog" aria-modal="true" aria-labelledby="confirmation-heading"><span class="eyebrow">New expedition</span><h2 id="confirmation-heading">Leave this atlas behind?</h2><p>A new expedition replaces the save on this device. Export your expedition first to keep a copy of your discoveries.</p><div><button class="button button-primary" data-action="confirm-new">Begin new expedition</button><button class="button" data-action="cancel-new">Keep exploring</button></div><button class="button button-text" data-action="export">Export current expedition ↗</button></section></div>
    <div class="photo-instrument" hidden><span class="eyebrow">Photo mode · your view of Vesper</span><div><button data-action="capture">Save photograph <kbd>O</kbd></button><button data-action="photo-return">Return to expedition <kbd>P / Esc</kbd></button></div></div>
    <div class="toast-stack" aria-live="polite" aria-atomic="false"></div>
    <aside class="discovery-card" hidden aria-live="polite"><button class="discovery-close" data-action="dismiss-discovery" aria-label="Dismiss discovery">×</button><span class="eyebrow">Added to your field atlas</span><div class="discovery-title"><div class="discovery-glyph" aria-hidden="true"></div><div><h2></h2><p></p></div></div><div class="discovery-footer"><span class="discovery-category"></span><button data-action="discovery-journal">Open record <kbd>J</kbd></button></div></aside>
    <input class="import-file" type="file" accept=".json,application/json" tabindex="-1" aria-hidden="true">
  `,_f(e);let n=t=>e.querySelector(t),r=n(`.game-hud`),i=n(`.title-screen`),a=n(`.overlay-shell`),o=n(`.overlay-panel`),s=n(`.confirmation-shell`),c=n(`.photo-instrument`),l=n(`.target-instrument`),u=n(`.discovery-card`),d=n(`.import-file`),f=n(`#expedition-seed`),p=n(`#survey-canvas`),m=xf(n(`#minimap-canvas`)),h=n(`.minimap-instrument`),g=n(`.field-instrument`),_=`title`,v=null,y=`all`,b=null,x=``,S=``,C=0,w=0,T=256,E,D=null,ee=`playing`,te={title:``,playing:``,pause:`Expedition paused`,journal:`Field atlas`,map:`Survey map`,settings:`Your instruments`,help:`Field guide`,backpack:`Backpack & field crafting`,photo:``};function O(e){_===`title`?ee=`title`:(_===`playing`||_===`photo`)&&(ee=`playing`),t.pause(),re(e)}function ne(){if(ee===`title`){re(`title`);return}t.resume(),re(`playing`)}function k(){requestAnimationFrame(()=>{(s.hidden?_===`title`?i:o:s).querySelector(`button:not([hidden]):not([disabled]), input, select`)?.focus({preventScroll:!0})})}function re(t){(t===`playing`||t===`photo`)&&(ee=`playing`),t===`title`&&(ee=`title`),_=t,e.dataset.screen=t;let o=t!==`title`&&t!==`playing`&&t!==`photo`;i.hidden=t!==`title`,a.hidden=!o,r.hidden=t!==`playing`,c.hidden=t!==`photo`,u.classList.toggle(`temporarily-hidden`,t!==`playing`),e.querySelectorAll(`.overlay-body > [data-screen]`).forEach(e=>{e.hidden=e.dataset.screen!==t}),U(n(`#overlay-heading`),te[t]),t===`journal`&&(x=``,se()),t===`map`&&(w=0,ce()),t===`backpack`&&(S=``,oe()),(o||t===`title`)&&k(),v&&ae(v)}function A(e){D=e,s.hidden=!1,k()}function ie(){let e=f.value.trim()||void 0,n=()=>{t.start(e,!0),re(`playing`)};v?.hasSave?A(n):n()}e.addEventListener(`click`,n=>{let r=n.target.closest(`button`);if(r&&e.contains(r)){if(r.dataset.language){t.setSettings({language:r.dataset.language});return}if(r.dataset.open){O(r.dataset.open);return}if(r.dataset.filter){y=r.dataset.filter,e.querySelectorAll(`[data-filter]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e.dataset.filter===y))}),x=``,se();return}if(r.dataset.species){b=r.dataset.species,x=``,se(),e.querySelectorAll(`[data-species]`).forEach(e=>{e.dataset.species===b&&e.focus({preventScroll:!0})});return}if(r.dataset.recipe){t.craft(r.dataset.recipe);return}if(r.dataset.item){t.useItem(r.dataset.item);return}if(r.dataset.discard){t.discardItem(r.dataset.discard);return}switch(r.dataset.action){case`start`:ie();break;case`continue`:t.start(void 0,!1),re(`playing`);break;case`random-seed`:f.value=`VESPER-${Math.random().toString(36).slice(2,8).toUpperCase()}`;break;case`title-help`:O(`help`);break;case`close`:case`resume`:ne();break;case`export`:t.exportSave();break;case`import`:d.click();break;case`new`:A(()=>{t.reset(),re(`playing`)});break;case`cancel-new`:s.hidden=!0,D=null,k();break;case`confirm-new`:{let e=D;s.hidden=!0,D=null,e?.();break}case`recall`:t.recall(),t.resume(),re(`playing`);break;case`interact`:t.interact();break;case`beacon-recall`:t.recallBeacon();break;case`beacon-pack`:t.packBeacon();break;case`lake-waypoint`:v&&t.setWaypoint(Mu(v.seed));break;case`photo`:t.photo(),re(`photo`);break;case`photo-return`:t.resume(),re(`playing`);break;case`capture`:t.capture();break;case`map-in`:T=Math.max(128,T/2),ce();break;case`map-out`:T=Math.min(2048,T*2),ce();break;case`clear-waypoint`:j(null);break;case`dismiss-discovery`:u.hidden=!0;break;case`discovery-journal`:b=u.dataset.species??null,O(`journal`)}}}),d.addEventListener(`change`,()=>{let e=d.files?.[0];e&&t.importSave(e),d.value=``}),e.addEventListener(`input`,e=>{let r=e.target;if([`sensitivity`,`volume`,`touchSensitivity`,`touchScale`].includes(r.id)){let e=Number(r.value);t.setSettings({[r.id]:e}),U(n(`#${r.id}-value`),r.id===`sensitivity`||r.id===`touchSensitivity`?`${e.toFixed(2)}×`:`${Math.round(e*100)}%`)}}),e.addEventListener(`change`,e=>{let n=e.target;[`language`,`quality`,`controlScheme`,`movementMode`,`mouseLook`,`joystickSide`].includes(n.id)&&t.setSettings({[n.id]:n.value}),[`invertY`,`reducedMotion`,`showMinimap`,`minimapRotate`].includes(n.id)&&t.setSettings({[n.id]:n.checked})}),document.addEventListener(`keydown`,e=>{if(!s.hidden&&e.key!==`Escape`&&e.key!==`Tab`){e.stopImmediatePropagation();return}if(_===`playing`||_===`photo`)return;if(e.key===`Escape`){e.preventDefault(),e.stopImmediatePropagation(),s.hidden?_!==`title`&&ne():(s.hidden=!0,D=null,k());return}if(e.key!==`Tab`)return;let t=[...(s.hidden?_===`title`?i:o:s).querySelectorAll(`button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]`)].filter(e=>e.getClientRects().length>0),n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())},!0);function j(e){t.setWaypoint(e),v&&={...v,waypoint:e},ce(),v&&U(n(`#waypoint-position`),e?Ef(e):`None set`)}p.addEventListener(`click`,e=>{if(!v)return;let t=p.getBoundingClientRect();j({x:v.position.x+((e.clientX-t.left)/t.width-.5)*T,z:v.position.z+((e.clientY-t.top)/t.height-.5)*T*(p.height/p.width)})}),p.addEventListener(`keydown`,e=>{if(!v||![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`].includes(e.key))return;e.preventDefault(),e.stopPropagation();let t={...v.waypoint??v.position},n=T/16;e.key===`ArrowUp`&&(t.z-=n),e.key===`ArrowDown`&&(t.z+=n),e.key===`ArrowLeft`&&(t.x-=n),e.key===`ArrowRight`&&(t.x+=n),j(e.key===`Home`?{...v.position}:t)});function ae(t){e.dataset.language=af(),e.querySelectorAll(`[data-language]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e.dataset.language===af()))}),e.dataset.touch=String(t.touchControls),e.dataset.mobile=String(t.mobileDevice),e.style.setProperty(`--touch-scale`,String(t.settings.touchScale));let r=Object.keys(t.discoveries).length,i=(-t.heading*180/Math.PI%360+360)%360,a=[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`],o=Math.round(i/45)%8;if(U(n(`#hud-region`),t.region||Sf[t.biome]),U(n(`#hud-habitat`),t.waterName?`${t.waterName} · ${t.swimming?`Swimming`:`Wading`}`:Kl[t.habitat].name),U(n(`#hud-coordinates`),Ef(t.position)),U(n(`#hud-time`),Df(t.time)),U(n(`#compass-bearing`),`${String(Math.round(i)).padStart(3,`0`)}°`),U(n(`#compass-heading`),a[o]),U(n(`#compass-west`),a[(o+7)%8]),U(n(`#compass-east`),a[(o+1)%8]),n(`.waypoint-instrument`).hidden=!t.waypoint,t.waypoint){let e=t.waypoint.x-t.position.x,r=t.waypoint.z-t.position.z,a=(Math.atan2(e,-r)*180/Math.PI-i+540)%360-180;U(n(`#waypoint-distance`),`Waypoint · ${Math.round(Math.hypot(e,r))} m`),n(`.waypoint-arrow`).style.transform=`rotate(${a}deg)`}let s=hd(t.fieldKit);if(U(n(`#hud-bag-count`),s),U(n(`#bag-status`),`Backpack · ${s} / 60`),U(n(`#field-goal`),t.fieldKit.repaired.length?`${t.fieldKit.repaired.length} survey probe${t.fieldKit.repaired.length===1?``:`s`} restored · explore for more supplies`:`Collect supplies · craft tools · restore survey probes`),h.hidden=!t.settings.showMinimap,_===`playing`&&t.settings.showMinimap&&m.draw(t),U(n(`#minimap-orientation`),t.settings.minimapRotate?`Heading up`:`North up`),U(n(`#minimap-distance`),t.waypoint?`Waypoint · ${Math.round(Math.hypot(t.waypoint.x-t.position.x,t.waypoint.z-t.position.z))} m`:`160 m view`),g.hidden=!t.fieldTarget,e.classList.toggle(`has-field-target`,!!t.fieldTarget),t.fieldTarget){let e=t.fieldTarget;U(n(`#field-type`),e.kind===`probe`?`Survey infrastructure`:`Field supplies`),U(n(`#field-distance`),`${e.distance.toFixed(1)} m`),U(n(`#field-title`),e.title),U(n(`#field-detail`),e.detail),U(n(`#field-prompt`),e.prompt.replace(/^(?:F|Use)\s*·\s*/i,``).replace(/^\w/,e=>e.toUpperCase())),n(`.field-action`).disabled=!e.available,g.classList.toggle(`is-unavailable`,!e.available)}U(n(`#hud-discovered`),r),U(n(`#hud-rank`),`${String(t.level).padStart(2,`0`)} · ${wf[Math.min(t.level-1,wf.length-1)]??`Researcher`}`),U(n(`#hud-xp`),`${t.xp} XP`);let c=Dd[t.level-1]??0,u=Dd[t.level],d=u?Math.max(0,Math.min(1,(t.xp-c)/(u-c))):1;if(n(`#xp-meter`).style.transform=`scaleX(${d})`,U(n(`#objective-title`),t.objective.title),U(n(`#objective-detail`),t.touchControls?t.objective.detail.replace(/hold E/gi,`hold Scan`):t.objective.detail),U(n(`#objective-count`),`${t.objective.progress} / ${t.objective.total}`),n(`#objective-meter`).style.transform=`scaleX(${Math.min(1,t.objective.progress/Math.max(1,t.objective.total))})`,U(n(`#pulse-status`),t.pulseCooldown>0?`Recharging · ${Math.ceil(t.pulseCooldown)}s`:`Pulse ready`),e.classList.toggle(`pulse-ready`,t.pulseCooldown<=0),U(n(`#scanner-range`),`Scan range · ${t.scannerRange.toFixed(0)} m`),l.hidden=!t.target,e.classList.toggle(`has-target`,!!t.target),e.classList.toggle(`target-locked`,!!t.target?.locked),t.target){let e=t.target;l.dataset.scanStatus=e.scanStatus??(e.locked?`locked`:e.scanned?`recorded`:`ready`);let r=Math.max(0,Math.min(1,e.progress));U(n(`#target-type`),e.scanned?`Catalogued specimen`:e.subtitle),U(n(`#target-distance`),`${e.distance.toFixed(1)} m`),U(n(`#target-title`),e.title),U(n(`#target-detail`),e.detail),U(n(`#target-prompt`),t.touchControls?e.prompt.replace(/hold E/gi,`Hold Scan`):e.prompt),U(n(`#scan-percent`),r>0?`${Math.round(r*100)}%`:``),n(`#scan-meter`).style.transform=`scaleX(${r})`,l.style.setProperty(`--specimen-color`,e.color),l.classList.toggle(`is-scanning`,r>0&&r<1),l.classList.toggle(`is-scanned`,e.scanned)}n(`.title-continue`).hidden=!t.hasSave,n(`.title-save-note`).hidden=!t.hasSave,n(`.title-start`).classList.toggle(`button-primary`,!t.hasSave),U(n(`.title-start`),t.hasSave?`Begin a new expedition ↗`:`Begin expedition ↗`),U(n(`#pause-region`),t.region||Sf[t.biome]),U(n(`#pause-position`),Ef(t.position)),U(n(`#pause-discoveries`),r),U(n(`#pause-sites`),t.sitesCompleted),U(n(`#pause-level`),t.level);let f=_!==`title`&&ee!==`title`,p=t.saved?`Expedition saved on this device`:f?`Could not save on this device — export a backup`:`Expedition not started`;U(n(`#save-status`),p),U(n(`#overlay-seed`),`World seed · ${t.seed}`),U(n(`#overlay-save`),t.saved?`Saved on this device`:p),U(n(`#map-position`),Ef(t.position)),U(n(`#waypoint-position`),t.waypoint?Ef(t.waypoint):`None set`),U(n(`#title-control-label`),t.touchControls?`Touch controls ready`:`Keyboard + mouse`),U(n(`#control-summary`),t.touchControls?`${t.settings.joystickSide===`left`?`Left`:`Right`} joystick to move; swipe the other side to look.`:t.settings.movementMode===`mouse`?t.settings.mouseLook===`arrows`?`Click the ground to walk; use the arrow keys to look around.`:`Click the ground to walk; hold the right mouse button and drag to look.`:t.settings.mouseLook===`arrows`?`WASD movement with arrow-key look.`:t.settings.mouseLook===`drag`?`WASD movement; hold the right mouse button and drag to look.`:`WASD movement; click the world to capture the mouse and look around.`),U(n(`.pointer-hint`).querySelectorAll(`span`)[0],t.settings.movementMode===`mouse`?t.settings.mouseLook===`arrows`?`Click clear ground to walk · arrow keys to look`:`Click clear ground to walk · right-drag to look`:t.settings.mouseLook===`drag`?`Hold the right mouse button and drag to look`:t.settings.mouseLook===`arrows`?`Use arrow keys to look around`:`Click the world to look around`);for(let e of[`language`,`sensitivity`,`volume`,`quality`,`invertY`,`reducedMotion`,`controlScheme`,`movementMode`,`mouseLook`,`touchSensitivity`,`touchScale`,`joystickSide`,`showMinimap`,`minimapRotate`]){let r=n(`#${e}`);document.activeElement!==r&&(r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=t.settings[e]:r.value=String(t.settings[e]))}U(n(`#sensitivity-value`),`${t.settings.sensitivity.toFixed(2)}×`),U(n(`#volume-value`),`${Math.round(t.settings.volume*100)}%`),U(n(`#touchSensitivity-value`),`${t.settings.touchSensitivity.toFixed(2)}×`),U(n(`#touchScale-value`),`${Math.round(t.settings.touchScale*100)}%`),e.classList.toggle(`reduced-motion`,t.settings.reducedMotion),_===`journal`&&se(),_===`backpack`&&oe(),_===`map`&&performance.now()-w>750&&ce()}function oe(){if(!v)return;let t=v.fieldKit,r=t.beacon?Math.hypot(t.beacon.x-v.position.x,t.beacon.z-v.position.z):1/0,i=JSON.stringify([af(),t.inventory,t.beacon,t.repaired.length,Math.round(r)]);if(i===S)return;S=i;let a=document.activeElement,o=a?.dataset.item,s=a?.dataset.recipe,c=a?.dataset.discard,l=hd(t);vf(n(`#bag-capacity-count`),`${l} <small>/ 60</small>`),n(`#bag-capacity-meter`).style.transform=`scaleX(${l/60})`,vf(n(`.item-grid`),sd.map(e=>{let n=cd[e],r=t.inventory[e],i=e===`pulse-cell`?`Recharge sensor`:`Deploy beacon`;return`<article class="item-card ${r?``:`item-empty`}" data-inventory-item="${e}" tabindex="-1" aria-label="${Tf(n.name)} · ${r} carried" style="--item-color:${Tf(n.color)}"><div class="item-card-top"><span class="item-symbol">${Of(e)}</span><span class="item-quantity" aria-label="${r} items">${r}<small>in bag</small></span></div><span class="item-category">${n.usable?`Field tool`:`Crafting material`}</span><h3>${Tf(n.name)}</h3><p>${Tf(n.description)}</p>${n.usable?`<button class="button button-small item-use" data-item="${e}" ${r?``:`disabled`}>${i}<span>↗</span></button>`:`<span class="item-material-note">Used in crafting & repairs</span>`}${r?`<button class="item-discard" data-discard="${e}" aria-label="Discard 1 ${Tf(n.name)}">Discard 1<span aria-hidden="true">−</span></button>`:``}</article>`}).join(``)),vf(n(`.recipe-list`),Object.values(ld).map(e=>{let n=yd(t,e.id),r=Object.entries(e.cost).filter(([e,n])=>t.inventory[e]<n),i=r.length?`Need ${r.map(([e,n])=>`${n-t.inventory[e]} ${cd[e].name.toLowerCase()}`).join(` and `)}`:!n&&l>=60?`No room in your backpack`:`Materials ready`,a=Object.entries(e.cost).map(([e,n])=>{let r=cd[e],i=t.inventory[e];return`<span class="recipe-cost ${i>=n?`cost-ready`:`cost-missing`}" title="${i} carried · ${n} required"><span>${Tf(r.name)}</span><b>${Math.min(i,n)} / ${n}</b></span>`}).join(``);return`<article class="recipe-card"><div class="recipe-heading"><span class="item-symbol" style="--item-color:${Tf(cd[e.output].color)}">${Of(e.output)}</span><div><h3>${Tf(e.name)}</h3><span>Creates 1 field tool</span></div></div><p>${Tf(e.description)}</p><div class="recipe-costs">${a}</div><div class="recipe-action"><span class="recipe-feedback ${n?`is-ready`:``}">${Tf(i)}</span><button class="button button-small" data-recipe="${e.id}" ${n?``:`disabled`}>Craft<span>+</span></button></div></article>`}).join(``));let u=n(`.beacon-status`);if(u.hidden=!t.beacon,t.beacon){let e=r<=5&&l<60;vf(u,`<span class="item-symbol">${Of(`survey-beacon`)}</span><div><span class="eyebrow">Return beacon active</span><strong>${Tf(Ef(t.beacon))} · ${Math.round(r)} m away</strong><p>Return here from anywhere on the planet.</p></div><div class="beacon-actions"><button class="button button-small" data-action="beacon-recall">Return to beacon<span>↗</span></button><button class="button button-small" data-action="beacon-pack" ${e?``:`disabled`}>Pack beacon<span>↓</span></button></div><p class="beacon-pack-note">${e?`Pack your beacon to reuse it elsewhere.`:l>=60?`Your backpack needs one free slot to pack the beacon.`:`Return within 5 m to pack your beacon.`}</p>`)}U(n(`#probe-progress`),`${t.repaired.length} survey probe${t.repaired.length===1?``:`s`} restored`),c?(e.querySelector(`[data-discard="${c}"]`)??e.querySelector(`[data-inventory-item="${c}"]`))?.focus({preventScroll:!0}):(o||s)&&e.querySelector(o?`[data-item="${o}"]`:`[data-recipe="${s}"]`)?.focus({preventScroll:!0})}function se(){if(!v)return;let e=v.discoveries,t=`${af()}:${y}:${b}:${Object.entries(e).map(([e,t])=>`${e}-${t.count}`).join(`,`)}:${v.level}`;if(x===t)return;x=t;let r=Xl.filter(e=>y===`all`||e.category===y);(!b||!r.some(e=>e.id===b))&&(b=r.find(t=>!!e[t.id])?.id??r[0]?.id??null);let i=Object.keys(e).length;U(n(`#atlas-count`),`${i} of ${Xl.length} specimens catalogued · ${v.sitesCompleted} research sites resolved`),vf(n(`.species-list`),r.map((t,n)=>{let r=!!e[t.id];return`<button class="species-row ${r?`is-discovered`:`is-unknown`} ${t.id===b?`is-selected`:``}" data-species="${Tf(t.id)}" aria-pressed="${t.id===b}"><span class="record-number">${String(n+1).padStart(2,`0`)}</span><span class="species-mark ${t.category}" style="--specimen-color:${Tf(t.color)}" aria-hidden="true"></span><span class="record-name"><b>${Tf(r?t.name:`Uncatalogued specimen`)}</b><small>${Tf(t.biome)} / ${Tf(t.category)}</small></span><span class="record-state">${r?t.rarity===`rare`?`Rare`:`Filed`:`—`}</span></button>`}).join(``));let a=b?Zl[b]:null,o=n(`.species-detail`);if(!a){vf(o,`<p>No records in this category.</p>`);return}let s=e[a.id];vf(o,`<div class="specimen-plate ${s?``:`plate-unknown`}" style="--specimen-color:${Tf(a.color)}"><span class="plate-label">${s?`Field record`:`Unresolved record`}</span>${s?`<img class="specimen-portrait" src="./specimens/${Tf(a.id)}.png" alt="${Tf(a.name)} — rendered field specimen" width="384" height="384">`:`<div class="specimen-diagram ${a.category}" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>`}<span class="plate-number">${s?Tf(a.rarity):`Awaiting observation`}</span></div><div class="record-copy"><span class="eyebrow">${Tf(a.biome)} / ${Tf(a.category)}</span><h2>${Tf(s?a.name:`A world still unfolding`)}</h2><p class="record-subtitle">${Tf(s?a.subtitle:`This specimen has not yet entered your atlas.`)}</p><p>${Tf(s?a.description:`Explore ${Sf[a.biome].toLowerCase()} and follow the survey pulse to find new specimens.`)}</p>${s?`<div class="field-insight"><span class="eyebrow">Ecological insight</span><p>${Tf(a.insight)}</p></div><dl class="record-meta"><div><dt>First observed</dt><dd>${Tf(Ef(s.firstFound))}</dd></div><div><dt>Observations</dt><dd>${s.count}</dd></div></dl>`:`<div class="field-insight"><span class="eyebrow">A note for the field</span><p>Rare findings are revealed by completing investigation sites. Scan their three clues before examining the landmark.</p></div>`}</div>`),U(n(`#research-summary`),`Level ${v.level} · ${wf[Math.min(v.level-1,wf.length-1)]??`Researcher`}`),vf(n(`.milestone-list`),Dd.map((e,t)=>`<div class="milestone ${v.xp>=e?`is-achieved`:``}" title="${Tf(wf[t]??`Research milestone`)} · ${e} XP"><span>${String(t+1).padStart(2,`0`)}</span><i></i><small>${e} XP</small></div>`).join(``))}function ce(){if(!v)return;let e=p.getContext(`2d`);if(!e)return;w=performance.now();let t=p.width,r=p.height,i=T/t,a=v.position.x-T/2,o=v.position.z-r*i/2,s=new Set(v.visitedChunks);e.fillStyle=`#1a272b`,e.fillRect(0,0,t,r);for(let n=0;n<r;n+=16)for(let r=0;r<t;r+=16){let t=a+(r+8)*i,c=o+(n+8)*i,l=Qu(v.seed,t,c),u=`${Math.floor(t/64)},${Math.floor(c/64)}`,d=`${Math.floor(t/64)}:${Math.floor(c/64)}`;e.globalAlpha=s.has(u)||s.has(d)?.84:.24,e.fillStyle=Wu(v.seed,t,c)?`#72a9b5`:Kl[l].ground,e.fillRect(r,n,17,17)}e.globalAlpha=1,e.strokeStyle=`rgba(235,234,219,.1)`,e.lineWidth=1;let c=64/i,l=(-a/i%c+c)%c,u=(-o/i%c+c)%c;e.beginPath();for(let n=l;n<t;n+=c)e.moveTo(n,0),e.lineTo(n,r);for(let n=u;n<r;n+=c)e.moveTo(0,n),e.lineTo(t,n);e.stroke();let d=e=>({x:(e.x-a)/i,y:(e.z-o)/i}),f=d({x:0,z:0});e.strokeStyle=`#f0eedd`,e.lineWidth=2,e.beginPath(),e.arc(f.x,f.y,8,0,Math.PI*2),e.stroke(),e.font=`15px "Space Grotesk", "PingFang SC", "Microsoft YaHei", sans-serif`,e.fillStyle=`#f0eedd`,e.fillText(ff(`LANDING POD`),f.x+16,f.y+5);for(let t of Object.values(v.discoveries)){let n=d(t.firstFound);e.fillStyle=`rgba(240,238,221,.55)`,e.beginPath(),e.arc(n.x,n.y,3,0,Math.PI*2),e.fill()}for(let n of v.fieldMarkers){if(Math.hypot(n.x-v.position.x,n.z-v.position.z)>80&&n.kind!==`beacon`)continue;let i=d(n);i.x<0||i.y<0||i.x>t||i.y>r||bf(e,n.kind,i.x,i.y,n.kind===`beacon`?6:4)}if(v.waypoint){let n=d(v.waypoint);e.strokeStyle=`#efc493`,e.setLineDash([4,7]),e.beginPath(),e.moveTo(t/2,r/2),e.lineTo(n.x,n.y),e.stroke(),e.setLineDash([]),e.save(),e.translate(n.x,n.y),e.rotate(Math.PI/4),e.strokeRect(-7,-7,14,14),e.restore()}e.save(),e.translate(t/2,r/2),e.rotate(-v.heading),e.fillStyle=`#f6f2de`,e.beginPath(),e.moveTo(0,-13),e.lineTo(9,10),e.lineTo(0,6),e.lineTo(-9,10),e.closePath(),e.fill(),e.restore(),U(n(`#map-scale`),`${T} m span`)}function le(e,t=``,r=`info`){let i=document.createElement(`div`);i.className=`toast toast-${r}`;let a=document.createElement(`span`);a.className=`toast-mark`,a.textContent=r===`error`?`!`:r===`success`?`+`:`·`,a.setAttribute(`aria-hidden`,`true`);let o=document.createElement(`div`),s=document.createElement(`strong`);if(U(s,e),o.append(s),t){let e=document.createElement(`p`);U(e,t),o.append(e)}let c=document.createElement(`button`);c.textContent=`×`,c.setAttribute(`aria-label`,`Dismiss notification`),_f(c),c.addEventListener(`click`,()=>i.remove()),i.append(a,o,c);let l=n(`.toast-stack`);for(l.append(i);l.children.length>4;)l.firstElementChild?.remove();setTimeout(()=>{i.classList.add(`toast-leaving`),setTimeout(()=>i.remove(),220)},r===`error`?12e3:8e3)}function ue(e,t){E&&clearTimeout(E),u.hidden=!1,u.dataset.species=e.id,u.style.setProperty(`--specimen-color`,e.color),U(u.querySelector(`h2`),e.name),U(u.querySelector(`.discovery-title p`),e.subtitle),U(u.querySelector(`.discovery-category`),`${e.category} / ${e.rarity} · ${t.count} observation${t.count===1?``:`s`}`);let n=u.querySelector(`.discovery-glyph`);n.className=`discovery-glyph ${e.category}`,E=setTimeout(()=>{u.hidden=!0},11e3)}return document.addEventListener(`vesper-languagechange`,()=>{e.dataset.language=af(),_f(e),x=``,S=``,v&&ae(v),_===`map`&&ce()}),re(`title`),{update(e){v=e,!(performance.now()-C<90)&&(C=performance.now(),ae(e))},setScreen:re,notify:le,showDiscovery:ue,isOverlayOpen:()=>_!==`playing`&&_!==`photo`,getScreen:()=>_}}function Af(e){return e?e.maxTouchPoints>0||e.coarsePointer:typeof window>`u`?!1:navigator.maxTouchPoints>0||window.matchMedia(`(pointer: coarse)`).matches}function jf(e,t=Af()){return e.controlScheme===`touch`||e.controlScheme===`auto`&&t}function Mf(e){return e.movementMode===`mouse`&&e.mouseLook===`pointer-lock`?`drag`:e.mouseLook}function Nf(e,t,n){if(![e,t,n].every(Number.isFinite)||n<=0)return{x:0,z:0};let r=Math.hypot(e,t),i=Math.min(1,r/n);if(i<=.1)return{x:0,z:0};let a=(i-.1)/.9;return{x:e/r*a,z:-t/r*a}}var Pf=class{roles=new Map;claim(e,t){return this.roles.has(e)||[...this.roles.values()].includes(t)?!1:(this.roles.set(e,t),!0)}owns(e,t){return this.roles.get(e)===t}release(e){for(let[t,n]of this.roles)if(n===e)return this.roles.delete(t),t;return null}clear(){this.roles.clear()}},Ff=class{releases=new Map;prune(e){for(let[t,n]of this.releases)e-n.time>750&&this.releases.delete(t)}start(e,t){this.prune(t),this.releases.delete(e);for(let e of this.releases.values())e.legacy=!1}handled(e,t,n,r){this.prune(r),this.releases.set(e,{x:t,y:n,time:r,legacy:!0})}consume(e,t){if(this.prune(t),e.pointerType===`touch`&&e.pointerId!==void 0)return this.releases.delete(e.pointerId);if(e.detail===0)return!1;for(let[t,n]of this.releases)if(n.legacy&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<=12)return this.releases.delete(t),!0;return!1}};function If(e,t,n){let r=new AbortController,i={signal:r.signal},a=new Pf,o=new Ff,s=new Set,c=new Map,l=new WeakMap,u=jf(n.getSettings()),d=!1,f=``,p=``,m=!1,h={x:0,y:0},g=null,_={x:0,y:0,radius:50},v=e.style.touchAction;e.style.touchAction=`none`;let y=document.createElement(`div`);y.id=`touch-controls`,y.hidden=!0,y.setAttribute(`aria-label`,`Touch exploration controls`),y.innerHTML=`
    <div class="touch-joystick" role="group" aria-label="Movement joystick">
      <span class="touch-stick-ring"></span><span class="touch-stick-knob"></span>
      <span class="touch-stick-label">MOVE</span>
    </div>
    <div class="touch-actions">
      <button type="button" class="touch-action touch-scan" aria-label="Hold to scan" data-touch-action="scan">Scan<span>hold</span></button>
      <button type="button" class="touch-action" aria-label="Use nearby item" data-touch-action="interact">Use</button>
      <button type="button" class="touch-action" data-touch-action="jump">Jump</button>
      <button type="button" class="touch-action" data-touch-action="pulse">Pulse</button>
      <button type="button" class="touch-action" aria-pressed="false" data-touch-action="sprint">Run</button>
      <button type="button" class="touch-action" data-touch-action="backpack">Bag</button>
      <button type="button" class="touch-action" data-touch-action="map">Map</button>
      <button type="button" class="touch-action" data-touch-action="pause">Pause</button>
    </div>
    <div class="touch-look-hint" aria-hidden="true">Swipe the world to look</div>`,document.body.append(y);let b=y.querySelector(`.touch-joystick`),x=y.querySelector(`.touch-stick-knob`),S=y.querySelector(`[data-touch-action="sprint"]`),C=y.querySelector(`[data-touch-action="scan"]`),w=()=>d&&n.canPlay(),T={scan:[`Scan`,`Hold to scan`],interact:[`Use`,`Use nearby item`],jump:[`Jump`,`Jump`],pulse:[`Pulse`,`Pulse`],sprint:[`Run`,`Run`],backpack:[`Bag`,`Bag`],map:[`Map`,`Map`],pause:[`Pause`,`Pause`]};function E(){let e=af();if(e!==p){p=e,y.dataset.language=e,y.setAttribute(`aria-label`,ff(`Touch exploration controls`)),b.setAttribute(`aria-label`,ff(`Movement joystick`)),y.querySelector(`.touch-stick-label`).textContent=ff(`MOVE`),y.querySelector(`.touch-look-hint`).textContent=ff(`Swipe the world to look`);for(let e of y.querySelectorAll(`[data-touch-action]`)){let[t,n]=T[e.dataset.touchAction];e.firstChild.textContent=ff(t),e.setAttribute(`aria-label`,ff(n));let r=e.querySelector(`span`);r&&(r.textContent=ff(`hold`))}}}E();function D(){a.clear(),g=null,s.clear();for(let e of c.values())e.classList.remove(`is-held`),l.set(e,performance.now());c.clear(),n.actions.scanHeld(!1),t.clearKeys(),m=!1,S.setAttribute(`aria-pressed`,`false`),C.classList.remove(`is-held`),x.style.transform=`translate(-50%, -50%)`,b.classList.remove(`is-held`)}async function ee(){if(w()&&!u&&Mf(n.getSettings())===`pointer-lock`)try{document.pointerLockElement!==e&&await e.requestPointerLock()}catch{}}function te(r,i){E();let a=jf(r),o=[a,r.movementMode,r.mouseLook,r.joystickSide,r.touchScale].join(`/`);(o!==f||d&&!i)&&D(),f=o,d=i,u=a,y.hidden=!u||!d,y.dataset.side=r.joystickSide,y.style.setProperty(`--touch-scale`,String(Math.max(.8,Math.min(1.4,r.touchScale)))),document.body.classList.toggle(`vesper-touch-input`,u),e.classList.toggle(`mouse-travel`,!u&&r.movementMode===`mouse`),(!d||u||Mf(r)!==`pointer-lock`)&&document.pointerLockElement===e&&document.exitPointerLock();let s=t.consumeTravelNotice();s===`blocked`?n.onNotice?.(`Path obstructed`,`Choose a closer spot around the obstacle, or move manually.`):s===`too-far`?n.onNotice?.(`Choose a closer destination`,`Click visible ground within 80 metres.`):s===`arrived`&&n.onNotice?.(`Destination reached`,`Click another patch of ground to keep exploring.`)}function O(e,t){try{e.setPointerCapture(t)}catch{}}function ne(e){let n=e.clientX-_.x,r=e.clientY-_.y,i=Nf(n,r,_.radius);t.setMoveInput(i.x,i.z);let a=Math.hypot(n,r),o=a>0?Math.min(1,_.radius/a):0;x.style.transform=`translate(calc(-50% + ${n*o}px), calc(-50% + ${r*o}px))`}b.addEventListener(`pointerdown`,e=>{if(!w()||!u||!a.claim(`move`,e.pointerId))return;e.preventDefault();let t=b.getBoundingClientRect();_={x:t.left+t.width/2,y:t.top+t.height/2,radius:t.width*.32},O(b,e.pointerId),b.classList.add(`is-held`),ne(e),n.onActivity?.()},i),e.addEventListener(`pointerdown`,t=>{if(!w())return;n.onActivity?.();let r=n.getSettings();if(u&&t.pointerType===`touch`){a.claim(`look`,t.pointerId)&&(h={x:t.clientX,y:t.clientY},O(e,t.pointerId),t.preventDefault());return}if(r.movementMode===`mouse`&&t.button===0){g={id:t.pointerId,x:t.clientX,y:t.clientY};return}let i=Mf(r);i!==`arrows`&&(r.movementMode===`mouse`&&t.button!==2||r.movementMode!==`mouse`&&t.button!==0&&(i!==`drag`||t.button!==2)||a.claim(`look`,t.pointerId)&&(h={x:t.clientX,y:t.clientY},Mf(r)!==`pointer-lock`&&O(e,t.pointerId),ee(),t.preventDefault()))},i),e.addEventListener(`contextmenu`,e=>{w()&&(n.getSettings().movementMode===`mouse`||Mf(n.getSettings())===`drag`||u)&&e.preventDefault()},i),window.addEventListener(`pointermove`,r=>{if(!w())return;if(a.owns(`move`,r.pointerId)){ne(r),r.preventDefault();return}let i=n.getSettings();if((document.pointerLockElement!==e||u||Mf(i)!==`pointer-lock`)&&a.owns(`look`,r.pointerId)){let e=r.clientX-h.x,n=r.clientY-h.y,a=u&&r.pointerType===`touch`?{...i,sensitivity:i.touchSensitivity}:i;t.look(e,n,a),h={x:r.clientX,y:r.clientY},r.preventDefault()}},{...i,passive:!1}),window.addEventListener(`mousemove`,r=>{let i=n.getSettings();w()&&!u&&document.pointerLockElement===e&&Mf(i)===`pointer-lock`&&t.look(r.movementX,r.movementY,i)},i);function k(e,r=!1){let i=c.get(e.pointerId);if(i){c.delete(e.pointerId),i.classList.remove(`is-held`),l.set(i,performance.now());let t=i.getBoundingClientRect();!r&&w()&&e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom&&(o.handled(e.pointerId,e.clientX,e.clientY,performance.now()),re(i))}if(g?.id===e.pointerId){if(!r&&w()&&Math.hypot(e.clientX-g.x,e.clientY-g.y)<=8){let r=n.pickGround(e.clientX,e.clientY);r?t.setDestination(r):n.onNotice?.(`Choose visible ground`,`Click the terrain to walk. Right-drag to look around.`)}g=null}a.release(e.pointerId)===`move`&&(t.setMoveInput(0,0),x.style.transform=`translate(-50%, -50%)`,b.classList.remove(`is-held`)),s.delete(e.pointerId)&&(n.actions.scanHeld(s.size>0),C.classList.toggle(`is-held`,s.size>0)),r&&D()}window.addEventListener(`pointerup`,e=>k(e),i),window.addEventListener(`pointercancel`,e=>k(e,!0),i),b.addEventListener(`lostpointercapture`,e=>{a.owns(`move`,e.pointerId)&&D()},i),e.addEventListener(`lostpointercapture`,e=>{a.owns(`look`,e.pointerId)&&k(e,!0)},i),C.addEventListener(`pointerdown`,e=>{w()&&(e.preventDefault(),s.add(e.pointerId),O(C,e.pointerId),C.classList.add(`is-held`),n.actions.scanHeld(!0),n.onActivity?.())},i),y.addEventListener(`pointerdown`,e=>{if(e.pointerType!==`touch`||!w())return;let t=e.target.closest(`[data-touch-action]`);t&&t!==C&&(e.preventDefault(),![...c.values()].includes(t)&&(c.set(e.pointerId,t),t.classList.add(`is-held`),l.set(t,performance.now()),O(t,e.pointerId),n.onActivity?.()))},i),y.addEventListener(`lostpointercapture`,e=>{c.has(e.pointerId)&&D()},i),C.addEventListener(`lostpointercapture`,e=>{s.has(e.pointerId)&&D()},i),y.addEventListener(`keydown`,e=>{e.stopPropagation(),e.target===C&&[`Space`,`Enter`].includes(e.code)&&(e.preventDefault(),w()&&(n.actions.scanHeld(!0),C.classList.add(`is-held`)))},i),y.addEventListener(`keyup`,e=>{e.stopPropagation(),e.target===C&&[`Space`,`Enter`].includes(e.code)&&(e.preventDefault(),n.actions.scanHeld(!1),C.classList.remove(`is-held`))},i);function re(e){if(!w())return;n.onActivity?.();let r=e.dataset.touchAction;r===`jump`?t.queueJump():r===`sprint`?(m=!m,t.setSprint(m),S.setAttribute(`aria-pressed`,String(m))):r&&r!==`scan`&&r in n.actions&&n.actions[r]()}return y.addEventListener(`click`,e=>{let t=e.target.closest(`[data-touch-action]`);if(!t||!w())return;let n=e.pointerType;n===`touch`||!n&&e.detail>0&&performance.now()-(l.get(t)??-1/0)<750||re(t)},i),document.addEventListener(`pointerdown`,e=>{o.start(e.pointerId,performance.now())},{...i,capture:!0}),document.addEventListener(`click`,e=>{o.consume(e,performance.now())&&(e.preventDefault(),e.stopImmediatePropagation())},{...i,capture:!0}),window.addEventListener(`blur`,D,i),document.addEventListener(`visibilitychange`,()=>{document.hidden&&D()},i),{sync:te,requestPointer:ee,reset:D,get touchActive(){return u},destroy(){D(),r.abort(),y.remove(),e.style.touchAction=v,e.classList.remove(`mouse-travel`),document.body.classList.remove(`vesper-touch-input`)}}}var Lf=new Map,Rf=new Map,zf=new R(0,1,0),Bf=Math.PI*2;function Vf(e,t){let n=Lf.get(e);return n||(n=t(),n.computeBoundingBox(),n.computeBoundingSphere(),Lf.set(e,n)),n}function W(e,t=.72,n=.04,r,i=0){let a=`${e}:${t}:${n}:${r}:${i}`,o=Rf.get(a);return o||(o=new va({color:e,roughness:t,metalness:n,emissive:r??`#000000`,emissiveIntensity:i}),o.name=`Vesper / ${e}`,Rf.set(a,o)),o}var G={bark:W(`#4b7166`,.93),barkDark:W(`#344d47`,.95),root:W(`#69785d`,.94),canopy:W(`#779b7c`,.84),canopyLight:W(`#a5b79a`,.85),leaf:W(`#538c7a`,.75),leafLight:W(`#84b79e`,.7),reed:W(`#92b899`,.8),pearl:W(`#eee2bd`,.45,.12),bloom:W(`#efc48e`,.45,.08,`#ffc16c`,.12),heart:W(`#d7a564`,.35,.14,`#f1ac55`,.27),sandstone:W(`#b9825c`,.96),sandLight:W(`#d0a780`,.93),sandDark:W(`#805b49`,.94),amber:W(`#cf9858`,.24,.24,`#b17226`,.11),amberLight:W(`#ead4a1`,.3,.12),rose:W(`#e2b8a0`,.68),roseDark:W(`#ba7c69`,.77),cave:W(`#3f6571`,.91),caveDark:W(`#263f4c`,.97),frost:W(`#9dbbc5`,.65),crystal:W(`#71c5d0`,.25,.2,`#259dab`,.18),crystalLight:W(`#c9e9df`,.3,.1,`#77e8df`,.17),cyan:W(`#71d8d4`,.28,.22,`#3fe0cd`,.47),ceramic:W(`#dbd8bc`,.71,.12),ceramicDark:W(`#828e82`,.81,.08),metal:W(`#354b4e`,.44,.58),metalLight:W(`#a1b1aa`,.35,.66),black:W(`#1b3033`,.34,.15),glass:W(`#304f59`,.18,.62),wing:W(`#d2c3a0`,.72,.1),wingDark:W(`#819889`,.71)},K=()=>Vf(`sphere-12`,()=>new aa(1,12,8)),Hf=()=>Vf(`icosahedron`,()=>new ea(1,0)),Uf=()=>Vf(`box`,()=>new Ci(1,1,1)),Wf=(e=12)=>Vf(`cylinder-${e}`,()=>new wi(1,1,1,e)),Gf=()=>Vf(`taper`,()=>new wi(.45,1,1,10,2)),Kf=()=>Vf(`cone`,()=>new Ti(1,1,7)),qf=()=>Vf(`ring`,()=>new oa(1,.075,6,32));function Jf(e,t){return Vf(e,()=>{let e=[],n=[],r=[];for(let i of t){let t=i.geometry.clone(),a=new tn().compose(new R(...i.position??[0,0,0]),new Mt().setFromEuler(new fn(...i.rotation??[0,0,0],i.rotationOrder??`XYZ`)),new R(...i.scale??[1,1,1]));t.applyMatrix4(a);let o=t.index?t.toNonIndexed():t,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=o.getAttribute(`uv`);for(let t=0;t<s.count;t++)e.push(s.getX(t),s.getY(t),s.getZ(t)),n.push(c.getX(t),c.getY(t),c.getZ(t)),r.push(l?l.getX(t):0,l?l.getY(t):0);o!==t&&o.dispose(),t.dispose()}let i=new Mr;return i.setAttribute(`position`,new V(e,3)),i.setAttribute(`normal`,new V(n,3)),i.setAttribute(`uv`,new V(r,2)),i})}function q(e,t,n,r=[0,0,0],i=[1,1,1],a=[0,0,0]){let o=new ni(t,n);return o.position.set(...r),o.scale.set(...i),o.rotation.set(...a),o.castShadow=!0,o.receiveShadow=!0,e.add(o),o}function Yf(e,t,n,r=7){return Vf(e,()=>new sa(new Ii(t.map(e=>new R(...e))),18,n,r,!1))}function J(e,t,n,r=Wf(8)){let i=new R(...e),a=new R(...t),o=a.clone().sub(i),s=new Mt().setFromUnitVectors(zf,o.clone().normalize()),c=new fn().setFromQuaternion(s);return{geometry:r,position:i.add(a).multiplyScalar(.5).toArray(),scale:[n,o.length(),n],rotation:[c.x,c.y,c.z]}}function Xf(){return Vf(`lenticular-leaf`,()=>{let e=[],t=[];for(let t=0;t<=12;t++){let n=t/12,r=Math.max(.002,Math.sin(Math.PI*n)**.78);for(let t=0;t<8;t++){let i=Bf*t/8;e.push(Math.cos(i)*.33*r,n,.22*n*n+Math.sin(i)*.035*r)}}for(let e=0;e<12;e++)for(let n=0;n<8;n++){let r=e*8+n,i=e*8+(n+1)%8,a=r+8,o=i+8;t.push(r,a,i,i,a,o)}for(let e=1;e<7;e++)t.push(0,e,e+1,96,96+e+1,96+e);let n=new Mr;return n.setAttribute(`position`,new V(e,3)),n.setIndex(t),n.computeVertexNormals(),n})}function Zf(e,t,n,r,i,a=0){let o=[];for(let e=0;e<t;e++){let s=Bf*e/t+a;o.push({geometry:Xf(),position:[0,i,0],scale:[r,n,r],rotation:[.82,s,0],rotationOrder:`YXZ`})}return Jf(e,o)}function Qf(){return Vf(`quartz-prism`,()=>{let e=[],t=[];for(let t of[{y:0,r:.76},{y:.78,r:1},{y:1,r:.015}])for(let n=0;n<6;n++)e.push(Math.cos(n*Bf/6)*t.r,t.y,Math.sin(n*Bf/6)*t.r);for(let e=0;e<2;e++)for(let n=0;n<6;n++){let r=e*6+n,i=e*6+(n+1)%6;t.push(r,r+6,i,i,r+6,i+6)}for(let e=1;e<5;e++)t.push(0,e,e+1,12,12+e+1,12+e);let n=new Mr;n.setAttribute(`position`,new V(e,3)),n.setIndex(t);let r=n.toNonIndexed();return r.computeVertexNormals(),n.dispose(),r})}function $f(){return Vf(`umbrella-canopy`,()=>new ta([new L(0,.12),new L(1.9,0),new L(3.7,.16),new L(4.15,.42),new L(3.7,.77),new L(2.5,1.2),new L(1.1,1.47),new L(0,1.54)],18))}function ep(){let e=[];for(let t=0;t<5;t++){let n=Bf*t/5;e.push(J([0,.7,0],[Math.cos(n)*1.3,.13,Math.sin(n)*1.3],.17,Gf()))}return Jf(`buttress-roots`,e)}function tp(e){let t=e>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function np(e,t){e.name=`Vesper / ${t}`,e.updateMatrixWorld(!0);let n=new er().setFromObject(e);if(Number.isFinite(n.min.y))for(let t of e.children)t.position.y-=n.min.y;return e.updateMatrixWorld(!0),e.userData.modelKind=t,e.userData.sharedResources=!0,e}var rp={"field-cache":{radius:.85,height:1},"field-resin":{radius:.7,height:1.8},"field-crystal":{radius:.8,height:1.3},"field-probe":{radius:.85,height:2.2},"field-beacon":{radius:.85,height:2.4}},ip=W(`#374e51`,.5,.45),ap=W(`#ddd9c0`,.73,.14),op=W(`#e7b16b`,.3,.12,`#f7b86e`,.22),sp=W(`#705947`,.95),cp=W(`#e6a85b`,.23,.16,`#efa958`,.2),lp=W(`#8acfd9`,.3,.24,`#7dc2d6`,.2),up=W(`#a9e5cf`,.28,.1,`#7adbbb`,.62),dp=W(`#596970`,.93);function fp(e,t=0){let n=new An;switch(e){case`field-cache`:{q(n,Uf(),ip,[0,.34,0],[1.25,.63,.9]),q(n,Jf(`field-cache-shell`,[{geometry:Uf(),position:[0,.75,0],scale:[1.29,.15,.94]},{geometry:Uf(),position:[-.51,.4,0],scale:[.09,.65,.94]},{geometry:Uf(),position:[.51,.4,0],scale:[.09,.65,.94]}]),ap),q(n,Jf(`field-cache-hardware`,[{geometry:Uf(),position:[0,.66,-.48],scale:[.27,.24,.055]},{geometry:qf(),position:[0,.88,0],scale:[.17,.085,.085]}]),ip);let e=q(n,Uf(),op,[0,.34,-.48],[.65,.06,.035]);e.name=`indicator`;break}case`field-resin`:q(n,Jf(`field-resin-stems`,[J([0,.1,0],[.07,1.3,.03],.13),J([.02,.62,0],[-.3,1.02,.13],.09),J([.04,.8,0],[.35,1.5,-.12],.08)]),sp),q(n,Jf(`field-resin-nodules`,[{geometry:K(),position:[-.24,.94,.14],scale:[.23,.32,.22]},{geometry:K(),position:[.13,.6,-.07],scale:[.23,.28,.19]},{geometry:K(),position:[.34,1.42,-.1],scale:[.2,.26,.2]}]),cp),q(n,Hf(),dp,[0,.05,0],[.49,.13,.37]);break;case`field-crystal`:q(n,Hf(),dp,[0,.12,0],[.67,.24,.5]),q(n,Jf(`field-conductive-cluster`,[{geometry:Qf(),position:[-.25,.13,.05],scale:[.2,.8,.2],rotation:[0,0,.2]},{geometry:Qf(),position:[.11,.11,0],scale:[.26,1.02,.26]},{geometry:Qf(),position:[.32,.1,.07],scale:[.15,.52,.15],rotation:[0,0,-.27]}]),lp),q(n,qf(),ip,[.11,.48,0],[.28,.28,.28],[Math.PI/2,0,0]);break;case`field-probe`:{let e=[];for(let t=0;t<3;t++){let n=t*Math.PI*2/3;e.push(J([0,.83,0],[Math.cos(n)*.66,.07,Math.sin(n)*.66],.06))}e.push(J([0,.65,0],[0,1.38,0],.08)),q(n,Jf(`field-probe-tripod`,e),ip),q(n,Uf(),ap,[0,1.47,0],[.74,.63,.4],[.12,0,-.13]),q(n,Jf(`field-probe-antenna`,[J([.13,1.7,0],[.13,2.02,0],.035),{geometry:K(),position:[.13,2.06,0],scale:[.07,.07,.07]}]),ip);let t=q(n,Wf(12),op,[0,1.49,-.235],[.21,.065,.21],[Math.PI/2,0,0]);t.name=`indicator`;break}case`field-beacon`:{let e=[J([0,.1,0],[0,1.8,0],.075)];for(let t=0;t<3;t++){let n=t*Math.PI*2/3;e.push(J([0,.57,0],[Math.cos(n)*.65,.06,Math.sin(n)*.65],.05))}q(n,Jf(`field-beacon-supports`,e),ip),q(n,Jf(`field-beacon-casing`,[{geometry:Wf(10),position:[0,1.04,0],scale:[.23,.44,.23]},{geometry:Kf(),position:[0,1.72,0],scale:[.29,.36,.29]}]),ap),q(n,Jf(`field-beacon-signal`,[{geometry:K(),position:[0,2.03,0],scale:[.2,.2,.2]},{geometry:qf(),position:[0,2.03,0],scale:[.43,.43,.43],rotation:[Math.PI/2,0,0]}]),up);break}}return np(n,e)}var pp={cache:`field-cache`,resin:`field-resin`,crystal:`field-crystal`,probe:`field-probe`},mp=[{kind:`cache`,x:-10,z:6},{kind:`resin`,x:12,z:7},{kind:`crystal`,x:-17,z:-8},{kind:`probe`,x:21,z:-18}],hp=new Map,gp={"canopy-tree":.65,"ribbon-tree":.48,"desert-spire":.72,"dune-rock":.95,"crystal-cluster":.5,"cave-column":.95,"ruin-ring":.6,"spire-pine":.42,"silver-birch":.45,"veil-willow":.55,"coral-tree":.55,"baobab-tree":1.15,"spiral-tree":.5,"tree-fern":.4,"fan-palm":.4,"boulder-stack":.85,"fallen-log":.55,"barrel-cactus":.4},_p=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z),vp=(e,t,n)=>Math.floor(e.x/64)===t&&Math.floor(e.z/64)===n;function yp(e,t,n,r){if(Math.hypot(t.x,t.z)<7||Math.abs(t.x)<14&&t.z<0&&t.z>-55||n.sites.some(e=>_p(e,t)<14)||r.some(e=>_p(e,t)<7)||n.entities.some(e=>_p(e,t)<(Zl[e.speciesId].category===`fauna`?4:3.5))||n.props.some(e=>_p(e,t)<(gp[e.kind]??0)*e.scale+1.7))return!1;for(let n of[-1.4,0,1.4])for(let r of[-1.4,0,1.4])if(Wu(e,t.x+n,t.z+r))return!1;let i=Ku(e,t.x,t.z);return[[-1.2,0],[1.2,0],[0,-1.2],[0,1.2]].every(([n,r])=>Math.abs(Ku(e,t.x+n,t.z+r)-i)<.65)}function bp(e,t,n,r){let i=ru(e);return{...n,kind:t,id:`field:${i.toString(16)}:${r}:${t}`,seed:iu(i,Math.round(n.x*100),Math.round(n.z*100),503),rewards:t===`cache`?{alloy:3}:t===`resin`?{"lumen-resin":3}:t===`crystal`?{crystal:3}:{}}}function xp(e,t,n){let r=`${e}\0${t},${n}`,i=hp.get(r);if(i)return i;let a=$u(e,t,n),o=[];for(let r of mp){if(!vp(r,t,n))continue;let i=null;for(let s=0;s<96;s++){let c=s*2.399963229728653,l=s===0?0:.6*Math.sqrt(s),u={x:r.x+Math.cos(c)*l,z:r.z+Math.sin(c)*l};if(vp(u,t,n)&&yp(e,u,a,o)){i=u;break}}for(let r=0;!i&&r<100;r++){let s=au(iu(ru(e),t,n,509+r)),c={x:t*64+3+s()*58,z:n*64+3+s()*58};yp(e,c,a,o)&&(i=c)}i&&o.push(bp(e,r.kind,i,`starter`))}let s=ru(e),c=au(iu(s,t,n,521)),l=[`cache`,`resin`,`crystal`].filter(e=>!o.some(t=>t.kind===e));!o.some(e=>e.kind===`probe`)&&iu(s,t,n,523)%6==0&&l.push(`probe`);for(let r=0;r<l.length;r++){let i=l[r];for(let s=0;s<64;s++){let s={x:t*64+3+c()*58,z:n*64+3+c()*58};if(yp(e,s,a,o)){o.push(bp(e,i,s,`${t}:${n}:${r}`));break}}}return hp.set(r,o),hp.size>256&&hp.delete(hp.keys().next().value),o}var Sp=class{seed;group=new An;chunks=new Map;pending=[];kit=md();centre=``;allNodes=[];beacon=null;beaconKey=``;direction=new R;delta=new R;collectedIds=new Set;repairedIds=new Set;collectedRef=null;repairedRef=null;collectedLength=-1;repairedLength=-1;constructor(e){this.seed=e,this.group.name=`Vesper / field supplies`;for(let[e,t]of[[-1,-1],[-1,0],[0,-1],[0,0]])this.addChunk(e,t)}addChunk(e,t){this.chunks.set(`${e},${t}`,{nodes:xp(this.seed,e,t),objects:new Map}),this.allNodes=[...this.chunks.values()].flatMap(e=>e.nodes)}refreshHistory(){(this.collectedRef!==this.kit.collected||this.collectedLength!==this.kit.collected.length)&&(this.collectedIds=new Set(this.kit.collected),this.collectedRef=this.kit.collected,this.collectedLength=this.kit.collected.length),(this.repairedRef!==this.kit.repaired||this.repairedLength!==this.kit.repaired.length)&&(this.repairedIds=new Set(this.kit.repaired),this.repairedRef=this.kit.repaired,this.repairedLength=this.kit.repaired.length)}update(e,t,n,r){this.kit=t;let i=Math.floor(e.x/64),a=Math.floor(e.z/64),o=r.quality===`low`?2:r.quality===`high`?4:3,s=`${i},${a}:${o}`;if(s!==this.centre){this.centre=s;let e=new Set,t=[];for(let n=-o;n<=o;n++)for(let r=-o;r<=o;r++){let o=i+n,s=a+r,c=`${o},${s}`;e.add(c),this.chunks.has(c)||t.push([o,s])}for(let[t,n]of this.chunks)if(!e.has(t)){for(let e of n.objects.values())this.group.remove(e);this.chunks.delete(t)}t.sort((e,t)=>Math.hypot(e[0]-i,e[1]-a)-Math.hypot(t[0]-i,t[1]-a)),this.pending=t,this.allNodes=[...this.chunks.values()].flatMap(e=>e.nodes)}let c=this.pending.shift();c&&this.addChunk(...c),this.refreshHistory();for(let t of this.chunks.values())for(let i of t.nodes){let a=!this.collectedIds.has(i.id)&&_p(i,e)<45,o=t.objects.get(i.id);if(!a){o&&(this.group.remove(o),t.objects.delete(i.id));continue}if(o||(o=fp(pp[i.kind],i.seed),o.position.set(i.x,Ku(this.seed,i.x,i.z),i.z),o.rotation.y=i.seed%628/100,o.userData.fieldId=i.id,t.objects.set(i.id,o),this.group.add(o)),i.kind===`probe`){let e=o.getObjectByName(`indicator`),t=this.repairedIds.has(i.id);t&&(e.material=up),e.userData.baseScale||(e.userData.baseScale=e.scale.clone()),e.scale.copy(e.userData.baseScale).multiplyScalar(t&&!r.reducedMotion?1+Math.sin(n*1.4)*.04:1)}}let l=t.beacon?`${t.beacon.x},${t.beacon.z}`:``;l!==this.beaconKey&&(this.beacon&&this.group.remove(this.beacon),this.beacon=t.beacon?fp(`field-beacon`):null,this.beaconKey=l,this.beacon&&t.beacon&&(this.beacon.position.set(t.beacon.x,Ku(this.seed,t.beacon.x,t.beacon.z),t.beacon.z),this.group.add(this.beacon))),this.beacon&&(this.beacon.visible=!!t.beacon&&_p(t.beacon,e)<80)}getNodes(){return this.allNodes}getPosition(e){return new R(e.x,Ku(this.seed,e.x,e.z)+rp[pp[e.kind]].height*.55,e.z)}nearestTarget(e,t,n=5){this.refreshHistory(),e.getWorldDirection(this.direction);let r=null,i=-1/0;for(let a of this.allNodes){if(this.collectedIds.has(a.id)||this.repairedIds.has(a.id))continue;let o=_p(a,t);if(o>n)continue;this.delta.copy(this.getPosition(a)).sub(e.position);let s=this.delta.normalize().dot(this.direction);if(s<(o<2.2?-.1:.42))continue;let c=s*3-o*.35;c>i&&(i=c,r=a)}return r}getMarkers(e,t=80){this.refreshHistory();let n=this.allNodes.filter(n=>!this.collectedIds.has(n.id)&&!this.repairedIds.has(n.id)&&_p(n,e)<=t).map(({id:e,kind:t,x:n,z:r})=>({id:e,kind:t,x:n,z:r}));return this.kit.beacon&&n.push({...this.kit.beacon,id:`field:active-beacon`,kind:`beacon`}),n}dispose(){this.group.clear(),this.chunks.clear(),this.allNodes=[],this.pending=[],this.beacon=null}},Cp=class{camera;position=new R(0,2,0);velocity=new R;yaw=0;pitch=0;grounded=!0;moving=!1;sprinting=!1;swimming=!1;jumpQueued=!1;keys=new Set;verticalSpeed=0;travel=0;moveInput=new L;sprintHeld=!1;destinationPoint=null;routeBlockedTime=0;travelNotice=null;constructor(e){this.camera=e,e.rotation.order=`YXZ`}setKey(e,t){t?this.keys.add(e):this.keys.delete(e),t&&e===`Space`&&(this.jumpQueued=!0),t&&[`KeyW`,`KeyA`,`KeyS`,`KeyD`].includes(e)&&this.cancelDestination()}setMoveInput(e,t){this.moveInput.set(Number.isFinite(e)?e:0,Number.isFinite(t)?t:0),this.moveInput.lengthSq()>1&&this.moveInput.normalize(),this.moveInput.lengthSq()>.001&&this.cancelDestination()}setSprint(e){this.sprintHeld=e}queueJump(){this.jumpQueued=!0}get destination(){return this.destinationPoint?{...this.destinationPoint}:null}setDestination(e){return!Number.isFinite(e.x)||!Number.isFinite(e.z)?!1:Math.hypot(e.x-this.position.x,e.z-this.position.z)>80?(this.travelNotice=`too-far`,!1):(this.destinationPoint={...e},this.routeBlockedTime=0,this.travelNotice=null,!0)}cancelDestination(){this.destinationPoint=null,this.routeBlockedTime=0}consumeTravelNotice(){let e=this.travelNotice;return this.travelNotice=null,e}clearKeys(){this.keys.clear(),this.jumpQueued=!1,this.velocity.set(0,0,0),this.moveInput.set(0,0),this.sprintHeld=!1,this.moving=!1,this.sprinting=!1,this.cancelDestination()}look(e,t,n){this.yaw-=e*.002*n.sensitivity,this.pitch-=t*.002*n.sensitivity*(n.invertY?-1:1),this.pitch=jt.clamp(this.pitch,-1.32,1.32)}teleport(e,t,n,r){this.clearKeys(),this.position.set(e.x,t(e.x,e.z)+1.8,e.z),this.verticalSpeed=0,this.grounded=!0,n!==void 0&&(this.yaw=n),r!==void 0&&(this.pitch=r),this.camera.position.copy(this.position),this.camera.rotation.set(this.pitch,this.yaw,0)}update(e,t,n,r,i=()=>null){let a=Number(this.keys.has(`KeyW`))-Number(this.keys.has(`KeyS`)),o=Number(this.keys.has(`KeyD`))-Number(this.keys.has(`KeyA`)),s=a!==0||o!==0;(s||this.moveInput.lengthSq()>.001)&&this.cancelDestination();let c=s?a:this.moveInput.y,l=s?o:this.moveInput.x,u=i(this.position.x,this.position.z);this.swimming=!!u&&u.depth>1.1,this.sprinting=!u&&(this.sprintHeld||this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`));let d=this.swimming?3.4:u?4.5:this.sprinting?11:6,f=new L(l,-c);f.lengthSq()>1&&f.normalize();let p=(f.x*Math.cos(this.yaw)+f.y*Math.sin(this.yaw))*d,m=(-f.x*Math.sin(this.yaw)+f.y*Math.cos(this.yaw))*d;if(this.destinationPoint){let t=this.destinationPoint.x-this.position.x,n=this.destinationPoint.z-this.position.z,r=Math.hypot(t,n);if(r<=.45)this.cancelDestination(),this.velocity.x=this.velocity.z=0,this.travelNotice=`arrived`,p=m=0;else{let i=Math.atan2(-t,-n),a=Math.atan2(Math.sin(i-this.yaw),Math.cos(i-this.yaw));this.yaw+=a*(1-Math.exp(-e*6));let o=Math.min(d,r*4);p=t/r*o,m=n/r*o}}let h=1-Math.exp(-e*13);this.velocity.x=jt.lerp(this.velocity.x,p,h),this.velocity.z=jt.lerp(this.velocity.z,m,h);let g=Math.max(1,Math.ceil(Math.hypot(this.velocity.x,this.velocity.z)*e/.3)),_=!1;for(let t=0;t<g;t++){let t=this.position.x+this.velocity.x*e/g,r=this.position.z+this.velocity.z*e/g;n(t,this.position.z)?(this.velocity.x=0,_=!0):this.position.x=t,n(this.position.x,r)?(this.velocity.z=0,_=!0):this.position.z=r}this.destinationPoint&&(this.routeBlockedTime=_?this.routeBlockedTime+e:0,this.routeBlockedTime>=.4&&(this.cancelDestination(),this.velocity.x=this.velocity.z=0,this.travelNotice=`blocked`));let v=i(this.position.x,this.position.z);this.swimming=!!v&&v.depth>1.1;let y=Math.max(t(this.position.x,this.position.z)+1.8,v?v.level+.85:-1/0);this.jumpQueued&&this.grounded&&!this.swimming&&(this.verticalSpeed=7.1,this.grounded=!1),this.jumpQueued=!1,this.verticalSpeed-=19*e,this.position.y+=this.verticalSpeed*e,this.position.y<=y&&(this.position.y=y,this.verticalSpeed=0,this.grounded=!0),this.moving=Math.hypot(this.velocity.x,this.velocity.z)>.5,this.moving&&this.grounded&&(this.travel+=d*e);let b=r.reducedMotion||!this.moving||!this.grounded?0:Math.sin(this.travel*1.4)*.022;this.keys.has(`ArrowLeft`)&&(this.yaw+=e*1.1),this.keys.has(`ArrowRight`)&&(this.yaw-=e*1.1),this.keys.has(`ArrowUp`)&&(this.pitch=Math.min(1.32,this.pitch+e*.8)),this.keys.has(`ArrowDown`)&&(this.pitch=Math.max(-1.32,this.pitch-e*.8)),this.camera.position.copy(this.position),this.camera.position.y+=b,this.camera.rotation.set(this.pitch,this.yaw,0),this.camera.fov=jt.lerp(this.camera.fov,this.sprinting&&this.moving&&!r.reducedMotion?74:68,1-Math.exp(-e*5)),this.camera.updateProjectionMatrix()}},wp={"spire-pine":{radius:3.5,height:12},"silver-birch":{radius:5.8,height:11.5},"veil-willow":{radius:6.2,height:10},"coral-tree":{radius:4.8,height:9.2},"baobab-tree":{radius:6,height:11},"spiral-tree":{radius:3.5,height:11.5},"tree-fern":{radius:4.2,height:7.4},"fan-palm":{radius:4.2,height:10.4},starflower:{radius:1.1,height:1.8},bellflower:{radius:1.2,height:2.4},orchid:{radius:1.1,height:2.1},"sunburst-flower":{radius:1.3,height:2.6},lotus:{radius:1.4,height:1.35},foxglove:{radius:1.05,height:2.8},"berry-bush":{radius:1.9,height:2.4},cycad:{radius:2.2,height:2.5},aloe:{radius:1.6,height:2.2},"barrel-cactus":{radius:1.45,height:2.5},"prickly-pear":{radius:1.7,height:3},puffball:{radius:1.2,height:1.3},"shelf-fungus":{radius:1.7,height:2.6},glowcap:{radius:1.6,height:2.8},"grass-tuft":{radius:1,height:1.15},"flower-carpet":{radius:2.2,height:.8},"fallen-log":{radius:3.3,height:1.9},"lily-pad":{radius:1.5,height:.65},"boulder-stack":{radius:2.5,height:4.8}},Y={timber:W(`#755644`,.96),timberDark:W(`#514738`,.97),birch:W(`#d5d0b6`,.94),scars:W(`#544e49`,.94),pine:W(`#416d59`,.91),pineLight:W(`#709479`,.88),green:W(`#5d936d`,.88),lime:W(`#a5bb7e`,.86),fern:W(`#48866b`,.87),fernLight:W(`#87b894`,.82),willow:W(`#86988e`,.83),willowTip:W(`#cab7cd`,.75),coral:W(`#a36955`,.9),blush:W(`#e5a39e`,.7),teal:W(`#64a695`,.83),sage:W(`#93ad88`,.9),pink:W(`#e6a1b2`,.74),violet:W(`#a088c8`,.7),blue:W(`#90b9d2`,.74),white:W(`#efe3ce`,.8),gold:W(`#e0b45e`,.82),saffron:W(`#c98446`,.84),center:W(`#805d43`,.9),berry:W(`#987797`,.64),berryLight:W(`#c489a0`,.59),cactus:W(`#719b83`,.85),cactusLight:W(`#a4b799`,.81),cap:W(`#ae837c`,.85),capDark:W(`#866579`,.9),gills:W(`#d2baa2`,.9),glow:W(`#81c7b6`,.68,.04,`#46b69c`,.33),glowWhite:W(`#bddbd0`,.76,.02,`#7fbda9`,.15),moss:W(`#8a9c73`,.97),rock:W(`#8f9286`,.98),rockLight:W(`#b2afa0`,.96)};function Tp(){return Vf(`flora / blade`,()=>{let e=[],t=[];for(let t=0;t<=6;t++){let n=t/6,r=Math.max(.002,Math.sin(n*Math.PI)*.32);for(let t=0;t<4;t++){let i=t*Bf/4;e.push(Math.cos(i)*r,n,n*n*.18+Math.sin(i)*r*.12)}}for(let e=0;e<6;e++)for(let n=0;n<4;n++){let r=e*4+n,i=e*4+(n+1)%4;t.push(r,r+4,i,i,r+4,i+4)}for(let e=1;e<3;e++)t.push(0,e,e+1,24,24+e+1,24+e);let n=new Mr;return n.setAttribute(`position`,new V(e,3)),n.setIndex(t),n.computeVertexNormals(),n})}function Ep(){return Vf(`flora / eight-triangle leaf`,()=>{let e=new Mr;return e.setAttribute(`position`,new V([0,0,0,0,1,.18,-.28,.48,.045,.28,.48,.045,0,.48,.08,0,.48,.015],3)),e.setIndex([0,4,2,2,4,1,1,4,3,3,4,0,0,2,5,2,1,5,1,3,5,3,0,5]),e.computeVertexNormals(),e})}function Dp(){return Vf(`flora / flower bell`,()=>new ta([new L(0,0),new L(.055,.035),new L(.1,.15),new L(.18,.3),new L(.25,.43),new L(.22,.46),new L(.16,.39),new L(.105,.25),new L(.045,.15),new L(0,.11)],8))}function Op(){return Vf(`flora / convex fungus cap`,()=>new ta([new L(0,.08),new L(.45,0),new L(.95,.08),new L(1,.17),new L(.83,.43),new L(.46,.64),new L(0,.73)],12))}function kp(e,t,n,r,i,a=0,o=1.18,s=Tp()){for(let c=0;c<n;c++)e.push({geometry:s,position:t,scale:[i,r,i],rotation:[o,a+c*Bf/n,0],rotationOrder:`YXZ`})}function Ap(e,t,n,r=0){e.push({geometry:Hf(),position:t,scale:n,rotation:[.06,r,.12]})}function jp(e,t,n=5){for(let r=0;r<n;r++){let i=r*Bf/n;e.push(J([0,t*.65,0],[Math.cos(i)*t*2.2,.04,Math.sin(i)*t*2.2],t*.2,Gf()))}}function Mp(e,t,n,r,i,a,o=0){for(let s=0;s<t;s++)e.push({geometry:Tp(),position:[0,i,0],scale:[r,n,r],rotation:[a,o+s*Bf/t,0],rotationOrder:`YXZ`})}function Np(e,t){if(!wp[e])return null;let n=new An,r=(Math.floor(Number.isFinite(t)?t:0)%3+3)%3,i=tp(r*7141+931),a=[.94,1,1.06][r],o=`flora / ${e} / ${r}`,s=(e,t,r)=>{t.length&&q(n,Jf(`${o} / ${e}`,t),r)},c=[],l=[],u=[],d=[],f=[];switch(e){case`spire-pine`:{let e=9.5*a;c.push({geometry:Gf(),position:[0,e*.45,0],scale:[.36,e*.9,.36]}),jp(c,.5);for(let e=0;e<7;e++){let t=2.8+e*1.06*a,n=2.55-e*.31;(e%2?u:l).push({geometry:Kf(),position:[0,t,0],scale:[n,2.9-e*.16,n],rotation:[.015,e*.43,.02]});for(let r=0;r<4;r++){let i=r*Bf/4+e*.55;c.push(J([0,t-.75,0],[Math.cos(i)*n*.82,t-.56,Math.sin(i)*n*.82],.035))}}s(`wood`,c,Y.timberDark),s(`needles`,l,Y.pine),s(`new growth`,u,Y.pineLight);break}case`silver-birch`:{let e=8.7*a;c.push({geometry:Yf(`${o} / pale trunk`,[[0,0,0],[.1,2.2,.14],[-.2,5.2,0],[.1,e,.08]],.23,7)}),jp(c,.34);for(let e=0;e<8;e++){let t=e*2.399,n=3.5+e*.46*a,r=2.8-Math.abs(e-3.5)*.17,i=Math.cos(t)*r,o=Math.sin(t)*r,s=[i*.55,n+.8,o*.55],d=[i,n+1.4,o];c.push(J([0,n,0],s,.09),J(s,d,.055)),Ap(e%2?u:l,d,[1.45,.86,1.4],t),Ap(l,[i*.78,n+1.14,o*.78],[1.23,.9,1.15],t+.3)}Ap(u,[.1,e+.15,0],[1.25,.92,1.25]);for(let e=0;e<12;e++){let t=e*2.1,n=.5+e*.48;f.push({geometry:Uf(),position:[Math.cos(t)*.218,n,Math.sin(t)*.218],scale:[.22+i()*.09,.044,.018],rotation:[0,-t+Math.PI/2,.08]})}s(`pale bark`,c,Y.birch),s(`bark eyes`,f,Y.scars),s(`leaves`,l,Y.green),s(`new leaves`,u,Y.lime);break}case`veil-willow`:c.push({geometry:Yf(`${o} / leaning trunk`,[[0,0,0],[-.35,2.5,.15],[.1,5.2,.2],[0,6.8*a,0]],.37,8)}),jp(c,.6);for(let e=0;e<7;e++){let t=e*Bf/7+r*.2,n=3.1+i()*.5,a=Math.cos(t)*n,s=Math.sin(t)*n;c.push({geometry:Yf(`${o} / bough ${e}`,[[0,4.5,0],[a*.42,6.8,s*.42],[a*.85,6.6,s*.85],[a,5.6,s]],.09,5)}),Ap(l,[a*.78,6.15,s*.78],[1.45,.65,1.25],t);for(let e=0;e<3;e++){let r=t+(e-1)*.27,a=Math.cos(r)*(n+.4),o=Math.sin(r)*(n+.4),s=1.9+i()*.7;f.push(J([a,5.9,o],[a+.16,s,o+.15],.015,Wf(5)));for(let e=0;e<6;e++){let t=5.85-e*(5.8-s)/6;(e>3?u:l).push({geometry:Ep(),position:[a+e*.02,t,o],scale:[.75,.9,.9],rotation:[2.6,r+e*.7,.2],rotationOrder:`YXZ`})}}}s(`boughs`,c,Y.timber),s(`curtain stems`,f,Y.willow),s(`silver leaves`,l,Y.willow),s(`lavender tips`,u,Y.willowTip);break;case`coral-tree`:jp(c,.5),c.push({geometry:Gf(),position:[0,2.1,0],scale:[.4,4.2,.35]});for(let e=0;e<6;e++){let t=e*Bf/6+.25,n=2.2+i()*.5,r=[Math.cos(t)*n*.5,4.1+e%2*.5,Math.sin(t)*n*.5],a=[Math.cos(t)*n,6.1+e%3*.25,Math.sin(t)*n];c.push(J([0,2.5,0],r,.2,Gf()),J(r,a,.13,Gf()));for(let e=0;e<2;e++){let r=t+(e?.3:-.3),i=[Math.cos(r)*(n+.4),a[1]+.5,Math.sin(r)*(n+.4)];c.push(J(a,i,.075)),kp(d,i,5,.79,1.42,r,1,Ep()),d.push({geometry:Hf(),position:i,scale:[.35,.25,.35]}),u.push({geometry:Hf(),position:[i[0],i[1]+.14,i[2]],scale:[.14,.19,.14]})}}s(`coral wood`,c,Y.coral),s(`blossoms`,d,Y.blush),s(`pollen`,u,Y.gold);break;case`baobab-tree`:jp(c,1.25,7),c.push({geometry:K(),position:[0,2.5,0],scale:[1.5,2.7,1.24],rotation:[0,.2,.03]}),c.push({geometry:Gf(),position:[.15,4.9,0],scale:[1,4.2,.89]});for(let e=0;e<5;e++){let t=e*Bf/5+.15,n=3+i()*.4,r=[Math.cos(t)*n,7.6+e%2*.6,Math.sin(t)*n];c.push(J([0,4.5,0],[r[0]*.64,r[1]-1.1,r[2]*.64],.38,Gf())),c.push(J([r[0]*.64,r[1]-1.1,r[2]*.64],r,.2,Gf())),Ap(e%2?l:u,r,[2.1,.78,1.9],t),f.push({geometry:K(),position:[r[0]*.88,r[1]-.95,r[2]*.88],scale:[.17,.38,.17]})}Ap(l,[0,8.4,0],[2.2,.83,2.1]),s(`swollen trunk`,c,Y.timber),s(`canopy`,l,Y.green),s(`pale canopy`,u,Y.sage),s(`hanging fruit`,f,Y.saffron);break;case`spiral-tree`:jp(c,.52);for(let e=0;e<2;e++){let t=[];for(let n=0;n<=19;n++){let r=n/19,i=r*Bf*1.5+e*Math.PI;t.push([Math.cos(i)*(.42+r*.09),r*8.1*a,Math.sin(i)*(.42+r*.09)])}c.push({geometry:Yf(`${o} / helix ${e}`,t,.18,6)})}for(let e=0;e<3;e++){let t=4.3+e*1.7;for(let n=0;n<7;n++){let r=n*Bf/7+e*.41;(e%2?u:l).push({geometry:Tp(),position:[Math.cos(r)*.5,t,Math.sin(r)*.5],scale:[2.4,2.5-e*.34,2],rotation:[.95,r,0],rotationOrder:`YXZ`})}}for(let e=0;e<4;e++)d.push({geometry:K(),position:[Math.cos(e*2.4)*.44,7+e*.53,Math.sin(e*2.4)*.44],scale:[.17,.26,.17]});s(`braided trunk`,c,Y.timberDark),s(`spiral leaves`,l,Y.teal),s(`upper leaves`,u,Y.sage),s(`blue seedpods`,d,Y.blue);break;case`tree-fern`:{let e=4.3*a;c.push({geometry:Gf(),position:[0,e*.5,0],scale:[.28,e,.27]}),jp(c,.38);for(let t=0;t<10;t++)f.push({geometry:Wf(7),position:[0,.4+t*e*.085,0],scale:[.285-t*.01,.11,.275-t*.01],rotation:[0,t*.4,0]});for(let t=0;t<8;t++){let n=t*Bf/8,r=[Math.cos(n)*3.1,e+.35,Math.sin(n)*3.1];c.push({geometry:Yf(`${o} / frond ${t}`,[[0,e,0],[r[0]*.4,e+1.2,r[2]*.4],[r[0]*.75,e+1,r[2]*.75],r],.035,4)});for(let r=1;r<=7;r++)for(let i of[-1,1]){let a=r/8,o=a*3.1,s=e+Math.sin(a*Math.PI)*.95+a*.35;(t%2?u:l).push({geometry:Ep(),position:[Math.cos(n)*o,s,Math.sin(n)*o],scale:[.86,.9-a*.43,.8],rotation:[1.58,Math.PI/2-n+i*1.1,i*.05],rotationOrder:`YXZ`})}}s(`frond stems`,c,Y.timberDark),s(`trunk scales`,f,Y.timber),s(`fern leaflets`,l,Y.fern),s(`young leaflets`,u,Y.fernLight);break}case`fan-palm`:{let e=7.4*a;c.push({geometry:Yf(`${o} / bent palm trunk`,[[0,0,0],[.2,2.2,0],[.6,4.5,.12],[.75,e,.12]],.25,8)});for(let t=0;t<12;t++)f.push({geometry:Wf(8),position:[Math.min(.75,t*.075),.45+t*e/13,.1],scale:[.27,.045,.27]});for(let t=0;t<6;t++){let n=t*Bf/6,r=.75+Math.cos(n)*1.15,i=.12+Math.sin(n)*1.15;c.push(J([.75,e,.12],[r,e+.68,i],.055));for(let a=0;a<7;a++){let o=(a-3)*.24;(t%2?u:l).push({geometry:Tp(),position:[r,e+.68,i],scale:[1.1,2.02,1.3],rotation:[1.08+Math.abs(o)*.16,Math.PI/2-n+o,0],rotationOrder:`YXZ`})}d.push({geometry:K(),position:[.75+Math.cos(n)*.35,e-.2,.12+Math.sin(n)*.35],scale:[.21,.28,.21]})}s(`palm wood and bark rings`,[...c,...f],Y.timber),s(`fans`,l,Y.sage),s(`light fans`,u,Y.lime),s(`fruit`,d,Y.saffron);break}case`starflower`:{Mp(l,5,.56,.83,.08,1.13);let e=1.08+r*.08;c.push(J([0,0,0],[.1,e,0],.035,Wf(5))),kp(d,[.1,e,0],6,.65,1.06,r*.14,1.12),u.push({geometry:K(),position:[.1,e+.09,0],scale:[.13,.13,.13]}),s(`stalk`,c,Y.fern),s(`leaves`,l,Y.green),s(`star petals`,d,[Y.pink,Y.blue,Y.white][r]),s(`pollen`,u,Y.gold);break}case`bellflower`:{Mp(l,4,.82,.75,.05,.96);let e=1.8*a;c.push({geometry:Yf(`${o} / bell stalk`,[[0,0,0],[.05,.8,0],[-.12,e-.2,0],[.2,e,0]],.04,5)});for(let t=0;t<3;t++){let n=t*2.5,r=Math.cos(n)*.47,i=Math.sin(n)*.47,a=e-t*.35;c.push(J([0,a-.13,0],[r,a+.03,i],.02,Wf(5))),d.push({geometry:Dp(),position:[r,a+.04,i],scale:[1.2,1.2,1.2],rotation:[Math.PI,n,.14]}),u.push({geometry:K(),position:[r,a-.37,i],scale:[.04,.12,.04]})}s(`stems`,c,Y.fern),s(`leaves`,l,Y.green),s(`bells`,d,[Y.blue,Y.violet,Y.white][r]),s(`stamens`,u,Y.gold);break}case`orchid`:Mp(l,3,.93,1.3,.05,.72),c.push({geometry:Yf(`${o} / orchid stem`,[[0,0,0],[-.05,.65,0],[.15,1.25,0],[.4,1.55,.12]],.045,5)});for(let e=0;e<2;e++){let t=[e?.4:-.19,e?1.55:1.23,e?.12:.18];for(let e=0;e<5;e++){let n=e*Bf/5;d.push({geometry:Tp(),position:t,scale:[1.25,e===2?.59:.45,1.25],rotation:[Math.cos(n)*1.15,0,Math.sin(n)*1.15],rotationOrder:`YXZ`})}u.push({geometry:K(),position:[t[0],t[1],t[2]+.15],scale:[.12,.15,.18]}),f.push({geometry:Tp(),position:[t[0],t[1]-.07,t[2]+.15],scale:[1.3,.32,1.3],rotation:[1.9,0,0]})}s(`stem and broad leaves`,[...c,...l],Y.teal),s(`orchid petals`,d,[Y.pink,Y.violet,Y.white][r]),s(`throat`,u,Y.gold),s(`lip`,f,Y.berry);break;case`sunburst-flower`:{let e=1.8*a;c.push(J([0,0,0],[.05,e,0],.05,Wf(6)));for(let e=0;e<3;e++)l.push({geometry:Tp(),position:[0,.18+e*.4,0],scale:[1.3,.78,1.4],rotation:[.84,e*2.7,0],rotationOrder:`YXZ`});kp(d,[.05,e,0],11,.78,.64,0,1.35),kp(u,[.05,e+.05,0],11,.49,.66,.16,1.25),f.push({geometry:K(),position:[.05,e+.05,0],scale:[.31,.17,.31]}),s(`stalk and leaves`,[...c,...l],Y.green),s(`rays`,d,Y.gold),s(`inner rays`,u,Y.saffron),s(`seed head`,f,Y.center);break}case`lotus`:l.push({geometry:K(),position:[0,.11,0],scale:[1,.1,.9]}),kp(d,[0,.24,0],8,.86,1.8,0,1.2),kp(u,[0,.28,0],6,.68,1.52,.3,.82),kp(f,[0,.38,0],4,.52,1.2,.1,.48),c.push({geometry:K(),position:[0,.67,0],scale:[.18,.17,.18]}),s(`pad`,l,Y.teal),s(`outer petals`,d,Y.pink),s(`inner and heart petals`,[...u,...f],Y.white),s(`pollen`,c,Y.gold);break;case`foxglove`:{for(let e=0;e<6;e++)l.push({geometry:Ep(),position:[0,.02,0],scale:[.9,.85,.9],rotation:[.92,e*Bf/6,0],rotationOrder:`YXZ`});let e=2.35*a;c.push(J([0,0,0],[.1,e,0],.055,Wf(6)));for(let e=0;e<8;e++){let t=e*2.38,n=.95+e*.17,r=.15+(7-e)*.02;d.push({geometry:Dp(),position:[Math.cos(t)*r,n,Math.sin(t)*r],scale:[1-e*.046,.91-e*.027,1-e*.046],rotation:[Math.PI*.74,t,0],rotationOrder:`YXZ`}),u.push({geometry:Hf(),position:[Math.cos(t)*(r+.18),n-.12,Math.sin(t)*(r+.18)],scale:[.025,.035,.025]})}d.push({geometry:K(),position:[.1,e,0],scale:[.08,.14,.08]}),s(`stem`,c,Y.fern),s(`basal leaves`,l,Y.green),s(`flower spike`,d,[Y.violet,Y.pink,Y.white][r]),s(`freckles`,u,Y.berry);break}case`berry-bush`:for(let e=0;e<8;e++){let t=e*2.399,n=.45+i()*.55,r=.85+i()*.65;c.push(J([0,0,0],[Math.cos(t)*n,r,Math.sin(t)*n],.055,Gf())),Ap(e%2?l:u,[Math.cos(t)*n,r,Math.sin(t)*n],[.64,.47,.62],t);for(let e=0;e<3;e++)d.push({geometry:Hf(),position:[Math.cos(t)*(n+.25)+e*.08,r+.12-e*.06,Math.sin(t)*(n+.25)],scale:[.09,.105,.09]})}s(`twig network`,c,Y.timber),s(`foliage`,l,Y.green),s(`light foliage`,u,Y.sage),s(`berries`,d,r===1?Y.berryLight:Y.berry);break;case`cycad`:c.push({geometry:Hf(),position:[0,.48,0],scale:[.43,.58,.41]});for(let e=0;e<8;e++){let t=e*Bf/8;for(let n=1;n<=5;n++)for(let r of[-1,1]){let i=n/6,a=i*1.6,o=.72+Math.sin(i*Math.PI)*.83;(e%2?u:l).push({geometry:Ep(),position:[Math.cos(t)*a,o,Math.sin(t)*a],scale:[.65,.46-i*.12,.8],rotation:[1.6,Math.PI/2-t+r*1.12,0],rotationOrder:`YXZ`})}f.push({geometry:Yf(`${o} / cycad frond ${e}`,[[0,.6,0],[Math.cos(t)*.75,1.55,Math.sin(t)*.75],[Math.cos(t)*1.7,.92,Math.sin(t)*1.7]],.025,3)})}d.push({geometry:Kf(),position:[0,1.18,0],scale:[.2,.79,.2]}),s(`scaly bulb`,c,Y.timber),s(`frond stems and leaves`,[...f,...l],Y.fern),s(`bright leaves`,u,Y.fernLight),s(`cone`,d,Y.saffron);break;case`aloe`:if(Mp(l,8,1.58,1.08,.03,.73,r*.2),Mp(u,5,1.28,.85,.08,.34,.33),r!==1){c.push(J([0,0,0],[.14,1.92,0],.027,Wf(5)));for(let e=0;e<5;e++)d.push({geometry:Dp(),position:[.14+Math.cos(e*2.4)*.12,1.56+e*.07,Math.sin(e*2.4)*.12],scale:[.4,.65,.4],rotation:[.65,e*2.4,0]})}s(`thick leaves`,l,Y.cactus),s(`young leaves`,u,Y.cactusLight),s(`stalk`,c,Y.fern),s(`orange bells`,d,Y.saffron);break;case`barrel-cactus`:{let e=1.68*a;l.push({geometry:K(),position:[0,e*.5,0],scale:[.76,e*.59,.76]});for(let t=0;t<10;t++){let n=t*Bf/10,r=[[Math.cos(n)*.15,e*.97,Math.sin(n)*.15],[Math.cos(n)*.69,e*.79,Math.sin(n)*.69],[Math.cos(n)*.79,e*.45,Math.sin(n)*.79],[Math.cos(n)*.58,e*.13,Math.sin(n)*.58]];u.push({geometry:Vf(`${o} / rib ${t}`,()=>new sa(new Ii(r.map(e=>new R(...e))),8,.035,4,!1))});for(let e=0;e<4;e++){let t=.34+e*.32,r=.72;f.push(J([Math.cos(n)*r,t,Math.sin(n)*r],[Math.cos(n)*.86,t+.055,Math.sin(n)*.86],.008,Vf(`flora / fine spine`,()=>new Ti(1,1,4))))}}kp(d,[0,e*1.05,0],7,.33,.88,0,1.02),s(`barrel`,l,Y.cactus),s(`ribs`,u,Y.cactusLight),s(`fine spines`,f,Y.white),s(`crown flower`,d,Y.pink);break}case`prickly-pear`:{let e=[[0,.56,0,0],[-.43,1.34,.04,.38],[.48,1.4,0,-.3],[.72,2.11,.08,-.13],[-.8,1.96,.05,.5]];for(let t=0;t<e.length;t++){let[n,r,i,a]=e[t];(t%2?u:l).push({geometry:K(),position:[n,r,i],scale:[.43,.62,.15],rotation:[0,.12,a]});for(let e=0;e<5;e++)f.push({geometry:Kf(),position:[n-.17+e%3*.16,r-.29+Math.floor(e/3)*.33,i+.145],scale:[.015,.085,.015],rotation:[Math.PI/2,0,a]})}d.push({geometry:K(),position:[.74,2.72,.08],scale:[.13,.18,.13]},{geometry:K(),position:[-.91,2.53,.05],scale:[.12,.17,.12]}),s(`flat pads`,l,Y.cactus),s(`light pads`,u,Y.cactusLight),s(`spines`,f,Y.white),s(`red fruit`,d,Y.berryLight);break}case`puffball`:for(let e=0;e<4;e++){let t=e*2.39,n=e?.55:0,r=e?.25+i()*.12:.48;c.push({geometry:Wf(6),position:[Math.cos(t)*n,.16,Math.sin(t)*n],scale:[r*.5,.3,r*.5]}),d.push({geometry:K(),position:[Math.cos(t)*n,.2+r*.7,Math.sin(t)*n],scale:[r,r*.88,r]}),f.push({geometry:K(),position:[Math.cos(t)*n,.25+r*1.54,Math.sin(t)*n],scale:[r*.1,r*.055,r*.1]})}s(`stems`,c,Y.gills),s(`pearly balls`,d,Y.white),s(`spore pores`,f,Y.capDark);break;case`shelf-fungus`:c.push({geometry:Gf(),position:[0,.89,0],scale:[.27,1.78,.3]});for(let e=0;e<5;e++){let t=e*2.1,n=.35+e*.34,r=.66-e*.035;d.push({geometry:Op(),position:[Math.cos(t)*.38,n,Math.sin(t)*.38],scale:[r,.19,r],rotation:[.1,t,.08]}),u.push({geometry:Wf(12),position:[Math.cos(t)*.38,n+.025,Math.sin(t)*.38],scale:[r*.96,.025,r*.96],rotation:[.1,t,.08]})}s(`old wood`,c,Y.timberDark),s(`rust shelves`,d,Y.cap),s(`cream rims`,u,Y.gills);break;case`glowcap`:for(let e=0;e<3;e++){let t=e*2.5,n=e?Math.cos(t)*.61:0,r=e?Math.sin(t)*.61:0,i=e?.8+e*.13:1.7,a=e?.45:.76;c.push({geometry:Gf(),position:[n,i*.5,r],scale:[.13,i,.12]}),d.push({geometry:Op(),position:[n,i-.11,r],scale:[a,a*.78,a]}),u.push({geometry:Wf(12),position:[n,i-.11,r],scale:[a*.87,.035,a*.87]});for(let t=0;t<5;t++){let o=t*Bf/5+e;f.push({geometry:Hf(),position:[n+Math.cos(o)*a*.46,i+a*.36,r+Math.sin(o)*a*.46],scale:[.065,.025,.065]})}}s(`stems`,c,Y.gills),s(`glowing caps`,d,Y.glow),s(`gills`,u,Y.glowWhite),s(`cap freckles`,f,Y.glowWhite);break;case`grass-tuft`:for(let e=0;e<11;e++){let t=e*2.4,n=i()*.35;(e%3?l:u).push({geometry:Ep(),position:[Math.cos(t)*n,0,Math.sin(t)*n],scale:[.15,.45+i()*.56,.22],rotation:[.22+i()*.33,t,0],rotationOrder:`YXZ`})}s(`grass blades`,l,Y.fern),s(`sunlit blades`,u,Y.lime);break;case`flower-carpet`:for(let e=0;e<9;e++){let t=e*2.399,n=Math.sqrt(e/9)*1.4,r=Math.cos(t)*n,a=Math.sin(t)*n,o=.23+i()*.2;c.push(J([r,0,a],[r,o,a],.016,Wf(4))),c.push({geometry:Ep(),position:[r,.04,a],scale:[.52,.43,.52],rotation:[1.18,t,0],rotationOrder:`YXZ`}),kp(e%3?d:u,[r,o,a],5,.18+i()*.08,.75,t,1.36,Ep())}s(`groundcover`,c,Y.fern),s(`many petals`,d,[Y.pink,Y.white,Y.blue][r]),s(`accent flowers`,u,Y.gold);break;case`fallen-log`:c.push({geometry:Wf(9),position:[0,.59,0],scale:[.54,4.8,.59],rotation:[0,0,Math.PI/2]}),f.push({geometry:Wf(9),position:[-2.41,.59,0],scale:[.48,.024,.48],rotation:[0,0,Math.PI/2]}),f.push({geometry:Wf(9),position:[2.41,.59,0],scale:[.48,.024,.48],rotation:[0,0,Math.PI/2]}),c.push(J([-.58,.62,0],[-.87,1.25,.63],.17,Gf()));for(let e=0;e<5;e++)Ap(l,[-1.5+e*.65,1.03,-.13+i()*.22],[.5,.11,.33],e*.7);for(let e=0;e<3;e++)c.push({geometry:Wf(5),position:[.7+e*.24,1.18,.15],scale:[.035,.29+e*.05,.035]}),d.push({geometry:Op(),position:[.7+e*.24,1.29+e*.05,.15],scale:[.16,.12,.16]});s(`fallen timber`,c,Y.timberDark),s(`cut grain`,f,Y.timber),s(`moss`,l,Y.moss),s(`small fungi`,d,Y.cap);break;case`lily-pad`:{let e=Vf(`flora / notched lily`,()=>{let e=new wi(1,1,.075,18,1,!1,.18,Bf-.36),t=[{geometry:e}];for(let e of[.18,Bf-.18])t.push({geometry:Uf(),position:[Math.sin(e)*.5,0,Math.cos(e)*.5],scale:[.008,.075,1],rotation:[0,e,0]});let n=Jf(`flora / closed lily`,t);return e.dispose(),n.clone()});l.push({geometry:e,position:[0,.05,0],scale:[1.12,1,.96],rotation:[0,.27*r,0]});for(let e=0;e<7;e++){let t=.45+e*(Bf-.9)/7;u.push(J([0,.09,0],[Math.sin(t)*.86,.09,Math.cos(t)*.78],.009,Wf(4)))}kp(d,[-.2,.16,-.14],6,.32,1.1,0,.99),f.push({geometry:K(),position:[-.2,.3,-.14],scale:[.075,.09,.075]}),s(`pad`,l,Y.teal),s(`veins`,u,Y.fernLight),s(`flower`,d,Y.white),s(`pollen`,f,Y.gold);break}case`boulder-stack`:for(let e=0;e<4;e++){let t=1.45-e*.24,n=.69+e*.6;(e%2?u:c).push({geometry:Hf(),position:[Math.sin(e*1.7)*.28,n,Math.cos(e*1.7)*.22],scale:[t,.62-e*.05,t*.8],rotation:[.05,e*1.9+r*.16,.1]})}for(let e=0;e<3;e++)Ap(l,[-.5+e*.5,.42+e*.09,.83],[.3,.12,.2],e);s(`stone`,c,Y.rock),s(`pale strata`,u,Y.rockLight),s(`lichen`,l,Y.moss)}return np(n,e)}var Pp={"moss-grazer":{radius:1.35,height:1.85},"fern-hopper":{radius:1.05,height:1.6},shellback:{radius:1.45,height:1.15},"glass-stag":{radius:1.6,height:3.65},"dune-runner":{radius:1.9,height:2.25},"sand-beetle":{radius:1.15,height:.7},"crystal-beetle":{radius:1.15,height:.8},"cave-ray":{radius:2.65,height:.8},"sky-ray":{radius:3.8,height:1.15}},Fp=W(`#142b2c`,.12,.22),Ip=W(`#3b4942`,.8),Lp=W(`#e9dfbd`,.78),Rp=W(`#839982`,.87),zp=W(`#4e7761`,.94),Bp=W(`#eac0a1`,.64),Vp=W(`#bd8857`,.85),Hp=W(`#5b93a3`,.5,.22),Up=W(`#c4e5da`,.32,.17,`#70bec5`,.12),Wp=W(`#658271`,.75,.1),Gp=W(`#b5b898`,.85),Kp=W(`#395346`,.82),qp=W(`#d7ba83`,.87),Jp=W(`#b67652`,.77),Yp=W(`#bc9b53`,.35,.55),Xp=W(`#936749`,.42,.55),Zp=W(`#50919c`,.3,.58,`#3a9c9a`,.12),Qp=W(`#b7e0d0`,.36,.45),$p=W(`#47677d`,.66,.16),em=W(`#729fab`,.61,.14),tm=W(`#d4b59f`,.72,.08),nm=W(`#e1d6b5`,.71,.06),rm=W(`#badac9`,.35,.15,`#7adcc2`,.45);function X(e,t,n=[0,0,0]){return{geometry:K(),position:e,scale:t,rotation:n}}function im(e,t,n,r,i){let a=q(e,Jf(`fauna:${t}`,n),r);return i&&(a.name=i),a}function am(e,t,n,r,i,a){let o=q(e,Jf(`fauna:${t}`,n),r,i);return o.name=a,o}function om(e,t,n,r=.043){im(e,`${t}:eyes`,n.map(e=>X(e,[r,r*1.12,r])),Fp,`eyes`)}function sm(e,t,n){np(e,t),e.userData.animation=n;for(let t of e.children)t.userData.restPosition=t.position.toArray(),t.userData.restRotation=[t.rotation.x,t.rotation.y,t.rotation.z];return e}function cm(e){let t=new An,n=e%3==0?Rp:e%3==1?Lp:W(`#adb59a`,.86);im(t,`grazer:body`,[X([0,.98,.06],[.36,.39,.69]),X([0,1.2,-.4],[.22,.49,.25],[-.25,0,0]),X([0,.99,.71],[.09,.13,.29],[-.45,0,0])],n,`body`),am(t,`grazer:head`,[X([0,0,-.04],[.2,.19,.31]),X([0,-.06,-.25],[.13,.095,.18]),{geometry:Xf(),position:[-.14,.06,-.02],scale:[.42,.3,.8],rotation:[.18,.1,.8]},{geometry:Xf(),position:[.14,.06,-.02],scale:[.42,.3,.8],rotation:[.18,-.1,-.8]}],n,[0,1.52,-.58],`head`);let r=[];for(let e=0;e<10;e++){let t=e/10*Math.PI*2;r.push({geometry:Xf(),position:[Math.cos(t)*.22,1.22,-.38+Math.sin(t)*.19],scale:[.65,.48,1],rotation:[.8,t,0],rotationOrder:`YXZ`})}im(t,`grazer:foliage-ruff`,r,zp,`ruff`),im(t,`grazer:spots`,[X([-.345,1.1,.12],[.014,.065,.08]),X([.345,1.1,.12],[.014,.065,.08]),X([-.29,1.21,.36],[.018,.05,.06]),X([.29,1.21,.36],[.018,.05,.06])],Lp,`markings`);for(let e=0;e<6;e++){let n=e%2==0?-1:1,r=Math.floor(e/2);am(t,`grazer:leg`,[J([0,0,0],[0,-.36,.04],.068),J([0,-.36,.04],[0,-.73,-.04],.041),X([0,-.73,-.06],[.073,.04,.11])],Ip,[n*.25,.75,-.34+r*.35],`leg-${e}`)}return om(t,`grazer`,[[-.176,1.56,-.72],[.176,1.56,-.72]],.035),sm(t,`moss-grazer`,{type:`walk`,speed:.62,radius:6,hoverHeight:0,amplitude:.17})}function lm(e){let t=new An,n=e%2?W(`#adae8c`,.93):W(`#c4c4a6`,.93);im(t,`hopper:body`,[X([0,.47,.13],[.28,.32,.46]),X([0,.53,.53],[.16,.16,.17])],n,`body`),am(t,`hopper:head`,[X([0,0,-.035],[.225,.235,.28]),X([0,-.06,-.26],[.14,.095,.14]),X([-.12,.43,.02],[.08,.43,.085],[.12,0,.18]),X([.12,.43,.02],[.08,.43,.085],[.12,0,-.18])],n,[0,.72,-.24],`head`),im(t,`hopper:ear-inside`,[X([-.16,1.14,-.306],[.041,.29,.016],[.12,0,.18]),X([.16,1.14,-.306],[.041,.29,.016],[.12,0,-.18]),X([0,.64,-.594],[.046,.037,.016])],Bp,`ear-markings`);for(let e=0;e<4;e++){let r=e%2==0?-1:1,i=e>=2;am(t,i?`hopper:hindleg`:`hopper:foreleg`,i?[X([0,-.03,.03],[.16,.22,.24]),J([0,-.08,.04],[0,-.24,-.13],.08),X([0,-.27,-.19],[.1,.07,.25])]:[J([0,0,0],[0,-.22,0],.04),X([0,-.24,-.05],[.058,.048,.13])],n,[r*(i?.23:.16),i?.34:.29,i?.35:-.2],`leg-${e}`)}return im(t,`hopper:shoulder-leaves`,[-1,1].map(e=>({geometry:Xf(),position:[e*.23,.67,.1],scale:[.4,.28,1],rotation:[.9,e*.6,-e*.7]})),zp,`ruff`),om(t,`hopper`,[[-.192,.77,-.37],[.192,.77,-.37]],.045),sm(t,`fern-hopper`,{type:`hop`,speed:.95,radius:7,hoverHeight:0,amplitude:.14})}function um(e){let t=new An,n=e%2?Wp:W(`#858c69`,.78,.09);im(t,`shellback:carapace`,[X([0,.49,.1],[.65,.43,.83])],n,`body`),im(t,`shellback:rim`,[X([0,.26,.1],[.69,.14,.87])],Gp,`shell-rim`);let r=[];for(let[e,t,n]of[[0,.9,.1],[-.39,.77,-.17],[.39,.77,-.17],[-.39,.77,.36],[.39,.77,.36],[0,.76,-.48],[0,.76,.68]])r.push(X([e,t,n],[.24,.052,.23]));im(t,`shellback:plates`,r,Kp,`shell-plates`),am(t,`shellback:head`,[X([0,0,-.2],[.18,.15,.29]),X([0,-.055,-.36],[.14,.085,.14])],Gp,[0,.32,-.73],`head`);for(let e=0;e<4;e++){let n=e%2==0?-1:1;am(t,`shellback:leg`,[X([0,-.08,0],[.18,.15,.2]),X([0,-.19,-.05],[.13,.05,.18])],Gp,[n*.53,.23,e<2?-.35:.61],`leg-${e}`)}return im(t,`shellback:tail`,[X([0,.22,1],[.075,.063,.18])],Gp,`tail`),om(t,`shellback`,[[-.151,.38,-1.02],[.151,.38,-1.02]],.033),sm(t,`shellback`,{type:`crawl`,speed:.19,radius:4.5,hoverHeight:0,amplitude:.11})}function dm(e){let t=new An,n=e%2?Hp:W(`#81a5a4`,.64,.12);im(t,`stag:body`,[X([0,1.58,.13],[.35,.46,.73]),X([0,1.95,-.46],[.22,.57,.25],[-.32,0,0]),X([0,1.65,.9],[.08,.09,.28],[-.38,0,0])],n,`body`),am(t,`stag:head`,[X([0,0,-.03],[.21,.22,.31]),X([0,-.07,-.32],[.13,.095,.2]),X([-.23,.14,.01],[.21,.07,.11],[0,0,.35]),X([.23,.14,.01],[.21,.07,.11],[0,0,-.35])],n,[0,2.39,-.76],`head`);let r=[];for(let e of[-1,1]){let t=(t,n,r)=>[t*e,n,r];r.push(J(t(.11,2.54,-.66),t(.23,2.82,-.54),.056),J(t(.23,2.82,-.54),t(.51,3.1,-.51),.045),J(t(.51,3.1,-.51),t(.77,3.35,-.31),.03),J(t(.3,2.9,-.53),t(.35,3.2,-.86),.035),J(t(.51,3.1,-.51),t(.62,3.43,-.6),.027),J(t(.68,3.25,-.4),t(.98,3.34,-.52),.022))}im(t,`stag:antlers`,r,Up,`antlers`),im(t,`stag:breast`,[X([0,1.75,-.65],[.14,.45,.07],[-.22,0,0]),X([0,1.22,.08],[.28,.13,.52])],Lp,`markings`);for(let e=0;e<4;e++){let n=e%2==0?-1:1,r=e>=2;am(t,r?`stag:hindleg`:`stag:foreleg`,[J([0,0,0],[0,-.62,r?.14:.03],.068),J([0,-.62,r?.14:.03],[0,-1.13,-.045],.037),X([0,-1.14,-.08],[.074,.06,.115])],Ip,[n*.27,1.2,r?.58:-.4],`leg-${e}`)}return om(t,`stag`,[[-.18,2.43,-.9],[.18,2.43,-.9]],.038),sm(t,`glass-stag`,{type:`walk`,speed:.73,radius:8,hoverHeight:0,amplitude:.2})}function fm(e){let t=new An,n=e%2?qp:W(`#c8c4a5`,.85);im(t,`runner:body`,[X([0,1.12,.08],[.32,.37,.53]),X([0,1.42,-.34],[.135,.49,.15],[-.28,0,0])],n,`body`),am(t,`runner:head`,[X([0,0,-.04],[.16,.18,.23]),X([0,-.02,-.28],[.075,.052,.2])],n,[0,1.9,-.55],`head`);let r=[];for(let e=0;e<3;e++)r.push({geometry:Xf(),position:[0,1.99,-.46+e*.05],scale:[.22,.3-e*.05,1],rotation:[.35,0,0]});im(t,`runner:crest`,r,Jp,`crest`);let i=am(t,`runner:tail`,[{geometry:Xf(),position:[0,0,0],scale:[.65,1.1,1],rotation:[1.4,0,0]},{geometry:Xf(),position:[-.09,0,0],scale:[.55,.98,1],rotation:[1.45,-.18,0],rotationOrder:`YXZ`},{geometry:Xf(),position:[.09,0,0],scale:[.55,.98,1],rotation:[1.45,.18,0],rotationOrder:`YXZ`}],Jp,[0,1.18,.46],`tail`);i.rotation.x=-.15;for(let e of[-1,1])am(t,`runner:wing`,[X([0,0,.05],[.07,.16,.33],[-.4,0,0])],Vp,[e*.31,1.15,.02],e<0?`wing-left`:`wing-right`);for(let e=0;e<2;e++){let n=[J([0,0,0],[0,-.43,.15],.045),J([0,-.43,.15],[0,-.9,-.04],.029)];for(let e=-1;e<=1;e++)n.push(J([0,-.89,-.03],[e*.08,-.93,-.21],.022));am(t,`runner:leg`,n,Jp,[e===0?-.15:.15,.96,.08],`leg-${e}`)}return om(t,`runner`,[[-.14,1.93,-.69],[.14,1.93,-.69]],.036),sm(t,`dune-runner`,{type:`walk`,speed:1.2,radius:9,hoverHeight:0,amplitude:.3})}function pm(e,t){let n=new An,r=e===`crystal-beetle`,i=r?Zp:t%2?Yp:Xp,a=r?Qp:Jp;im(n,`${e}:abdomen`,[X([0,.33,.12],[.34,.23,.49]),X([0,.3,-.35],[.27,.16,.2])],i,`body`);let o=[];for(let e of[-1,1])o.push(X([e*.155,.48,.13],[.14,.075,.4]));if(r)for(let e=-1;e<=1;e++)o.push(X([e*.16,.57,.16],[.055,.1+(e===0?.065:0),.055]));im(n,`${e}:back-plates`,o,a,`back-plates`),am(n,`${e}:head`,[X([0,0,-.06],[.205,.12,.2])],i,[0,.32,-.52],`head`);let s=[];for(let e of[-1,1])s.push(J([e*.12,.34,-.66],[e*.21,.45,-.83],.015),J([e*.21,.45,-.83],[e*.27,.45,-.98],.012)),s.push(J([e*.12,.22,-.68],[e*.16,.18,-.84],.03),J([e*.16,.18,-.84],[e*.08,.17,-.88],.023));im(n,`${e}:antennae-mandibles`,s,a,`antennae`);for(let t=0;t<6;t++){let r=t%2==0?-1:1,i=Math.floor(t/2);am(n,`${e}:leg:${r}`,[J([0,0,0],[r*.23,-.04,.04],.033),J([r*.23,-.04,.04],[r*.42,-.26,-.03],.022),X([r*.42,-.26,-.06],[.034,.026,.065])],a,[r*.24,.29,-.33+i*.33],`leg-${t}`)}return om(n,e,[[-.18,.35,-.58],[.18,.35,-.58]],.036),sm(n,e,{type:`crawl`,speed:r?.38:.5,radius:5,hoverHeight:0,amplitude:.2})}function mm(e,t,n,r){return Vf(`fauna:${e}`,()=>{let e=[],i=[];for(let i=0;i<2;i++)for(let a=0;a<=12;a++){let o=a/12,s=Math.max(.025,(1-o)**.6*(.82+Math.sin(o*Math.PI)*.7)),c=-n*.5+o*n*.82;for(let a=0;a<=6;a++){let l=a/6;e.push(r*t*o,.14*Math.sin(o*Math.PI)+.13*Math.sin(l*Math.PI)*(1-o)+(i?-.024:.024)*(1-o*.8),c+l*n*s)}}for(let e=0;e<2;e++)for(let t=0;t<12;t++)for(let n=0;n<6;n++){let a=e*91+t*7+n,o=a+1,s=a+7,c=s+1;e===0==r>0?i.push(a,o,s,o,c,s):i.push(a,s,o,o,s,c)}let a=(e,t)=>i.push(e,e+91,t,t,e+91,t+91);for(let e=0;e<12;e++)a(e*7,(e+1)*7),a(e*7+6,(e+1)*7+6);for(let e=0;e<6;e++)a(e,e+1),a(84+e,84+e+1);let o=new Mr;return o.setAttribute(`position`,new V(e,3)),o.setIndex(i),o.computeVertexNormals(),o})}function hm(e,t,n,r){return Vf(`fauna:${e}:patterned`,()=>{let i=mm(e,t,n,r),a=[];for(let e=0;e<5;e++){let i=.22+e*.145,o=.38,s=(1-i)**.6*(.82+Math.sin(i*Math.PI)*.7),c=-n*.5+i*n*.82,l=.14*Math.sin(i*Math.PI)+.13*Math.sin(o*Math.PI)*(1-i)+.024*(1-i*.8);a.push(X([r*t*i,l+.005,c+o*n*s],[.038,.014,n*.11*(1-i)]))}let o=Jf(`fauna:${e}:dorsal-pattern`,a),s=i.getAttribute(`position`).count,c=new Float32Array([...i.getAttribute(`position`).array,...o.getAttribute(`position`).array]),l=new Float32Array([...i.getAttribute(`normal`).array,...o.getAttribute(`normal`).array]),u=[...i.getIndex().array],d=u.concat(Array.from({length:o.getAttribute(`position`).count},(e,t)=>s+t)),f=new Mr;return f.setAttribute(`position`,new vr(c,3)),f.setAttribute(`normal`,new vr(l,3)),f.setIndex(d),f.addGroup(0,u.length,0),f.addGroup(u.length,d.length-u.length,1),f})}function gm(e,t){let n=new An,r=e===`sky-ray`,i=r?3.15:2.05,a=r?2:1.35,o=r?t%2?nm:tm:t%2?$p:em,s=r?Jp:rm;im(n,`${e}:body`,[X([0,.17,0],[r?.4:.29,r?.19:.15,r?1:.67]),X([0,.12,r?-.77:-.5],[r?.32:.23,.11,.34])],o,`body`);for(let t of[-1,1]){let r=new ni(hm(`${e}:wing:${t}`,i,a,t),[o,s]);r.position.set(t*.13,.2,0),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r.name=t<0?`wing-left`:`wing-right`}let c=r?2.65:1.8,l=q(n,Yf(`fauna:${e}:tail`,[[0,0,0],[0,.03,c*.3],[.12,.14,c*.68],[.25,.28,c]],r?.033:.023,6),s,[0,.16,r?.68:.4]);l.name=`tail`;let u=[];for(let t of[-1,1]){u.push({geometry:Yf(`fauna:${e}:lobe:${t}`,[[t*.2,.13,r?-.7:-.48],[t*.32,.23,r?-1:-.79],[t*.22,.33,r?-1.25:-.95]],r?.045:.032,6)});for(let e=0;e<4;e++)u.push(X([t*(.36+e*.12),.28,(r?.33:.16)-e*.035],[.021,.019,r?.17:.1],[0,t*.3,0]))}return im(n,`${e}:gills-lobes`,u,s,`markings`),im(n,`${e}:belly`,[X([0,.046,0],[r?.28:.21,.055,r?.8:.53])],Lp,`belly`),om(n,e,[[r?-.275:-.205,.24,r?-.68:-.46],[r?.275:.205,.24,r?-.68:-.46]],r?.052:.037),sm(n,e,{type:`fly`,speed:r?.65:.42,radius:r?10:6,hoverHeight:r?5.5:2.8,amplitude:r?.12:.18})}function _m(e,t){switch(e){case`moss-grazer`:return cm(t);case`fern-hopper`:return lm(t);case`shellback`:return um(t);case`glass-stag`:return dm(t);case`dune-runner`:return fm(t);case`sand-beetle`:case`crystal-beetle`:return pm(e,t);case`cave-ray`:case`sky-ray`:return gm(e,t);default:return null}}var vm={"canopy-swift":{radius:1.05,height:.65},"suncrest-bird":{radius:.9,height:.85},"reed-heron":{radius:1.7,height:1.85},"ribbon-fish":{radius:.65,height:.5},"glass-koi":{radius:.9,height:.7},"lantern-eel":{radius:.85,height:.5}},ym=W(`#102c30`,.15,.2),bm=W(`#eee4c8`,.79),xm=W(`#355f67`,.74),Sm=W(`#477f99`,.66),Cm=W(`#d69858`,.76),wm=W(`#c77d60`,.76),Tm=W(`#c0dfd0`,.5,.11),Em=W(`#a9bdad`,.85),Dm=W(`#978a68`,.8),Om=W(`#88dbce`,.37,.15,`#52c6c3`,.12),km=W(`#e2bea9`,.49,.12),Am=W(`#62a9ae`,.36,.32),jm=W(`#bdd6c6`,.31,.25),Mm=W(`#e5e5c4`,.47,.22),Nm=W(`#d59a60`,.5,.16),Pm=W(`#457a79`,.6,.13),Fm=W(`#b9e3bf`,.38,.08,`#8bdca2`,.6);function Im(e,t,n=[0,0,0]){return{geometry:K(),position:e,scale:t,rotation:n}}function Lm(e,t,n,r,i,a=[0,0,0]){let o=q(e,Jf(`avian-aquatic:${t}`,n),r,a);return o.name=i,o}function Rm(e,t,n,r){Lm(e,`${t}:eyes`,n.map(e=>Im(e,[r,r,r])),ym,`eyes`)}function zm(e,t,n){np(e,t);let r=e.getObjectByName(`body`);e.userData.animation={...n,...n.type===`swim`?{bodyCenterY:new er().setFromObject(r).getCenter(new R).y}:{}};for(let t of e.children)t.userData.restPosition=t.position.toArray(),t.userData.restRotation=[t.rotation.x,t.rotation.y,t.rotation.z];return e}function Bm(e,t,n,r,i=!1){let a=[Im([t*n*.23,0,0],[n*.31,.06,r*.3]),J([0,0,-.025],[t*n*.7,.025,r*.1],.025)];for(let e=0;e<10;e++){let o=e/9;a.push({geometry:Xf(),position:[t*n*(.08+o*.83),.01+Math.sin(o*Math.PI)*.025,-r*.1+r*o*.3],scale:[i?.21:.33,r*(.7+o*.42),.65],rotation:[Math.PI/2,t*(i?.28+o*.35:.03+o*.42),0],rotationOrder:`YXZ`})}return Jf(`avian-aquatic:${e}`,a)}function Vm(e,t,n,r,i,a,o=!1){for(let s of[-1,1]){let c=q(e,Bm(`${t}:wing:${s}`,s,n,r,o),i,[s*.08,a,0]);c.name=s<0?`wing-left`:`wing-right`}}function Hm(e){let t=new An,n=e%3==0?xm:e%3==1?Sm:W(`#526d75`,.77);return Lm(t,`swift:body`,[Im([0,.25,.04],[.13,.145,.33])],n,`body`),Lm(t,`swift:head`,[Im([0,0,-.055],[.11,.105,.15])],n,`head`,[0,.31,-.28]),Lm(t,`swift:throat`,[Im([0,.23,-.325],[.088,.08,.055]),Im([0,.15,-.03],[.092,.047,.22])],bm,`throat`),Lm(t,`swift:beak`,[Im([0,.29,-.475],[.028,.026,.065])],ym,`beak`),Vm(t,`swift`,.67,.36,n,.28,!0),Lm(t,`swift:forked-tail`,[-1,1].map(e=>({geometry:Xf(),position:[e*.025,0,0],scale:[.2,.36,.7],rotation:[Math.PI/2,e*.32,0],rotationOrder:`YXZ`})),n,`tail`,[0,.25,.28]),Rm(t,`swift`,[[-.092,.34,-.365],[.092,.34,-.365]],.023),zm(t,`canopy-swift`,{type:`bird`,speed:1.5,radius:11,hoverHeight:6.4,amplitude:.42})}function Um(e){let t=new An,n=e%2?Sm:W(`#68998b`,.74);Lm(t,`suncrest:body`,[Im([0,.27,.015],[.18,.19,.24])],n,`body`),Lm(t,`suncrest:head`,[Im([0,0,-.025],[.14,.14,.16])],n,`head`,[0,.45,-.19]),Lm(t,`suncrest:breast`,[Im([0,.26,-.168],[.132,.14,.085])],Cm,`breast`);let r=[];for(let e=0;e<4;e++)r.push({geometry:Xf(),position:[0,.52,-.18+e*.035],scale:[.18,.24-e*.025,.65],rotation:[.4,0,0]});Lm(t,`suncrest:crest`,r,wm,`crest`),Lm(t,`suncrest:beak`,[Im([0,.43,-.36],[.037,.039,.065])],Cm,`beak`),Vm(t,`suncrest`,.48,.38,n,.33);let i=[];for(let e=-2;e<=2;e++)i.push({geometry:Xf(),position:[e*.025,0,0],scale:[.2,.27,.65],rotation:[1.35,e*.13,0],rotationOrder:`YXZ`});Lm(t,`suncrest:tail`,i,Cm,`tail`,[0,.29,.19]);for(let e=0;e<2;e++)Lm(t,`suncrest:leg`,[J([0,0,0],[0,-.06,.045],.019),J([0,-.06,.045],[0,-.1,-.015],.014),Im([0,-.1,-.034],[.027,.018,.044])],Dm,`leg-${e}`,[e?.075:-.075,.17,.07]);return Rm(t,`suncrest`,[[-.117,.47,-.255],[.117,.47,-.255]],.027),zm(t,`suncrest-bird`,{type:`bird`,speed:.95,radius:7,hoverHeight:3.4,amplitude:.56})}function Wm(e){let t=new An,n=e%2?Em:Tm;Lm(t,`heron:body`,[Im([0,.6,.09],[.23,.24,.46])],n,`body`);let r=q(t,Yf(`avian-aquatic:heron:neck`,[[0,.65,-.2],[0,.83,-.39],[0,1.02,-.26],[0,1.23,-.4]],.073,9),n);r.name=`neck`,Lm(t,`heron:head`,[Im([0,0,-.025],[.108,.12,.18])],n,`head`,[0,1.26,-.45]),Lm(t,`heron:beak`,[Im([0,1.23,-.725],[.037,.039,.195])],Cm,`beak`),Vm(t,`heron`,1.1,.65,n,.67),Lm(t,`heron:tail`,[-1,0,1].map(e=>({geometry:Xf(),position:[e*.034,0,0],scale:[.26,.34,.75],rotation:[1.35,e*.16,0],rotationOrder:`YXZ`})),xm,`tail`,[0,.63,.48]);for(let e=0;e<2;e++){let n=[J([0,0,0],[0,-.31,.25],.025),J([0,-.31,.25],[0,-.38,.58],.019)];for(let e=-1;e<=1;e++)n.push(J([0,-.38,.58],[e*.036,-.4,.68],.012));Lm(t,`heron:leg`,n,Dm,`leg-${e}`,[e?.09:-.09,.42,.2])}return Lm(t,`heron:face-stripe`,[Im([-.094,1.28,-.48],[.013,.022,.13]),Im([.094,1.28,-.48],[.013,.022,.13])],xm,`face-stripe`),Rm(t,`heron`,[[-.104,1.29,-.52],[.104,1.29,-.52]],.02),zm(t,`reed-heron`,{type:`bird`,speed:.85,radius:12,hoverHeight:2.6,amplitude:.22})}function Gm(e,t,n){return Jf(`avian-aquatic:${e}`,[-1,1].map(e=>({geometry:Xf(),position:[0,0,0],scale:[.18,t,.7],rotation:[Math.PI/2+e*n,0,0]})))}function Km(e,t){let n=new An,r=e===`glass-koi`,i=r?Mm:t%2?Am:jm,a=r?.26:.18,o=r?.39:.29,s=r?.145:.077,c=r?.21:.105;Lm(n,`${e}:body`,[Im([0,a,0],[s,c,o])],i,`body`),Lm(n,`${e}:head`,[Im([0,0,-.018],[s*.83,c*.78,o*.35])],i,`head`,[0,a,-o*.8]);let l=q(n,Gm(`${e}:tail`,r?.3:.24,r?.73:.58),r?km:Om,[0,a,o*.82]);l.name=`tail`;for(let t of[-1,1])Lm(n,`${e}:pectoral-fin:${t}`,[{geometry:Xf(),position:[0,0,0],scale:[.26,r?.24:.17,.75],rotation:[.4,t*.35,-t*1.3],rotationOrder:`YXZ`}],r?km:Om,t<0?`fin-left`:`fin-right`,[t*s*.7,a*.83,-o*.22]);if(Lm(n,`${e}:dorsal-fin`,[{geometry:Xf(),position:[0,a+c*.63,-o*.02],scale:[.15,r?.22:.17,1.3],rotation:[.5,Math.PI/2,0],rotationOrder:`YXZ`}],r?Nm:Om,`dorsal-fin`),Lm(n,`${e}:ventral-fin`,[{geometry:Xf(),position:[0,a-c*.5,o*.28],scale:[.17,r?.19:.12,.8],rotation:[Math.PI-.45,Math.PI/2,0],rotationOrder:`YXZ`}],r?km:Om,`ventral-fin`),r){let e=[];for(let t of[-1,1])e.push(Im([t*.131,a+.016,-.08],[.018,.095,.12])),e.push(Im([t*.09,a+.045,.23],[.022,.067,.067]));e.push(Im([0,a+.185,.03],[.075,.027,.092])),Lm(n,`koi:color-patches`,e,t%2?Nm:wm,`markings`),Lm(n,`koi:barbels`,[-1,1].map(e=>J([e*.04,a-.045,-.465],[e*.065,a-.08,-.52],.006)),bm,`barbels`)}else Lm(n,`ribbon:stripe`,[-1,1].map(e=>Im([e*.074,a,0],[.01,.017,.225])),bm,`markings`);return Rm(n,e,[[-s*.79,a+c*.28,-o*.9],[s*.79,a+c*.28,-o*.9]],r?.028:.021),zm(n,e,{type:`swim`,speed:r?.42:.82,radius:r?5:4,hoverHeight:0,amplitude:r?.19:.32,swimDepth:r?.42:.35})}var qm=new Ii([new R(0,.16,-.47),new R(.06,.17,-.15),new R(-.035,.16,.2),new R(.05,.16,.57)]);function Jm(){return Vf(`avian-aquatic:eel:body`,()=>{let e=qm,t=e.computeFrenetFrames(28,!1),n=[],r=[];for(let r=0;r<=28;r++){let i=r/28,a=e.getPointAt(i),o=.1*(1-i*.76);for(let e=0;e<10;e++){let i=Math.PI*2*e/10,s=a.clone().addScaledVector(t.normals[r],Math.cos(i)*o).addScaledVector(t.binormals[r],Math.sin(i)*o);n.push(s.x,s.y,s.z)}}for(let e=0;e<28;e++)for(let t=0;t<10;t++){let n=e*10+t,i=e*10+(t+1)%10,a=n+10,o=i+10;r.push(n,i,a,i,o,a)}for(let e=1;e<9;e++)r.push(0,e+1,e,280,280+e,280+e+1);let i=new Mr;return i.setAttribute(`position`,new V(n,3)),i.setIndex(r),i.computeVertexNormals(),i})}function Ym(e){let t=new An,n=e%2?Pm:W(`#628d83`,.58,.13),r=q(t,Jm(),n);r.name=`body`,Lm(t,`eel:head`,[Im([0,0,-.025],[.096,.091,.145])],n,`head`,[0,.16,-.46]);let i=[];for(let e=0;e<8;e++){let t=.14+e*.11,n=qm.getPointAt(t),r=.1*(1-t*.76);i.push({geometry:Xf(),position:[n.x,n.y+r*.82,n.z],scale:[.1,.09-e*.004,.18],rotation:[.4,Math.PI/2,0],rotationOrder:`YXZ`})}Lm(t,`eel:crest`,i,Om,`dorsal-fin`);let a=q(t,Gm(`eel:tail`,.16,.4),Om,[.05,.16,.54]);a.name=`tail`;let o=[];for(let e=0;e<7;e++){let t=.12+e*.11,n=qm.getPointAt(t),r=.1*(1-t*.76);for(let e of[-1,1])o.push(Im([n.x+e*r*.98,n.y+.014,n.z],[.013,.016,.017]))}return Lm(t,`eel:lantern-nodes`,o,Fm,`lantern-nodes`),Rm(t,`eel`,[[-.076,.187,-.5],[.076,.187,-.5]],.018),zm(t,`lantern-eel`,{type:`swim`,speed:.46,radius:5.5,hoverHeight:0,amplitude:.28,swimDepth:.55})}function Xm(e,t=0){switch(e){case`canopy-swift`:return Hm(t);case`suncrest-bird`:return Um(t);case`reed-heron`:return Wm(t);case`ribbon-fish`:case`glass-koi`:return Km(e,t);case`lantern-eel`:return Ym(t);default:return null}}var Zm={"canopy-tree":{radius:4.9,height:13.2},"ribbon-tree":{radius:4.3,height:13.4},"fan-fern":{radius:1.7,height:2.4},reed:{radius:1,height:3.4},"desert-spire":{radius:1.5,height:8.8},"arch-rock":{radius:3.9,height:5.2},"dune-rock":{radius:2.4,height:2.2},"crystal-cluster":{radius:1.8,height:4.4},"cave-column":{radius:1.6,height:10.1},"ruin-arch":{radius:2.3,height:3.9},"ruin-ring":{radius:2.2,height:4.2},"lantern-bloom":{radius:1.1,height:2.7},"spore-crown":{radius:1.2,height:2.8},"prism-fern":{radius:1.2,height:2.6},"glass-cactus":{radius:1.1,height:3},"sun-stone":{radius:1,height:2},"sand-rose":{radius:1.3,height:1.5},"echo-crystal":{radius:1,height:2.9},"cave-coral":{radius:1.2,height:2.7},"memory-shard":{radius:.8,height:2.9},moth:{radius:.9,height:1.4},"survey-monolith":{radius:1.2,height:3.4},heartwood:{radius:1.4,height:3.1},"sun-dial":{radius:1.6,height:2.9},"harmonic-core":{radius:1.5,height:3.2},...wp,...Pp,...vm};function Qm(e,t=0){let n=Np(e,t)??_m(e,t)??Xm(e,t);if(n)return n;let r=new An,i=.94+tp(t)()*.12;switch(e){case`canopy-tree`:{let e=9.4*i;q(r,ep(),G.root),q(r,Yf(`canopy-trunk`,[[0,0,0],[.12,3,.08],[-.15,6,.2],[.35,9.2,0]],.36),G.bark,[0,.2,0],[1,i,1]),q(r,$f(),G.canopy,[.3,e,0],[i,1,i]),q(r,$f(),G.canopyLight,[-1.35,e*.71,.48],[.48,.65,.48]),q(r,Jf(`canopy-branches`,[J([0,5.5,0],[-1.3,7.2,.5],.2),J([0,7,0],[1.5,9.6,0],.17)]),G.bark),q(r,qf(),G.bloom,[.22,e+.34,0],[.85,.85,.85],[Math.PI/2,0,0]);break}case`ribbon-tree`:{q(r,ep(),G.barkDark,[0,0,0],[.7,.8,.7]),q(r,Yf(`ribbon-tree-spine`,[[0,0,0],[-.45,2,.2],[.2,5.6,-.1],[-.4,8,.1],[0,10.1,0]],.28),G.barkDark,[0,0,0],[1,i,1]);let e=[];for(let t=0;t<5;t++)e.push({geometry:Xf(),position:[0,8.3+t*.16,0],scale:[1.5,3.8,2.2],rotation:[.66,Bf*t/5,0],rotationOrder:`YXZ`});q(r,Jf(`ribbon-tree-crown`,e),G.leafLight,[0,0,0],[1,i,1]),q(r,Yf(`ribbon-branch-left`,[[0,5.5,0],[-1.8,7.2,0],[-2.2,7.7,.15]],.11),G.bark),q(r,Xf(),G.leaf,[-2.1,7.6,.1],[1.3,2.9,1.6],[.5,-1.1,1.35]),q(r,K(),G.pearl,[0,9.9*i,0],[.2,.25,.2]);break}case`fan-fern`:q(r,K(),G.root,[0,.2,0],[.25,.3,.25]),q(r,Zf(`fern-blades`,7,2,1,.2),G.leaf),q(r,Zf(`fern-young-blades`,4,1.2,.65,.38,.3),G.leafLight),q(r,Qf(),G.bloom,[0,.4,0],[.13,1.2,.13]);break;case`reed`:{let e=[],t=[],n=[];for(let r=0;r<5;r++){let i=r*2.4,a=Math.cos(i)*.22,o=Math.sin(i)*.22,s=1.8+r*.19;e.push(J([a,0,o],[a+.16,s,o],.045)),t.push({geometry:K(),position:[a+.16,s,o],scale:[.085,.32,.085]}),n.push({geometry:Xf(),position:[a,.3,o],scale:[.36,1.6,.6],rotation:[.38,i,0]})}q(r,Jf(`reed-stems`,e),G.reed),q(r,Jf(`reed-pods`,t),G.bloom),q(r,Jf(`reed-blades`,n),G.leafLight);break}case`desert-spire`:q(r,Hf(),G.sandDark,[0,.38,0],[1.05,.55,.85]),q(r,Yf(`wind-spire`,[[0,.5,0],[.3,2,0],[-.4,4.4,.12],[-.1,6.5,0],[.35,7.3,-.1]],.55,6),G.sandstone,[0,0,0],[1,i,.8]),q(r,Qf(),G.amber,[.35,6.5,-.1],[.37,1.55,.3],[0,0,-.18]),q(r,Qf(),G.amberLight,[-.3,4.5,.05],[.24,1.2,.23],[0,0,.4]);break;case`arch-rock`:q(r,Yf(`wind-carved-arch`,[[-2.55,.75,0],[-2.45,2.1,.2],[-1.3,3.8,.1],[.3,4.15,0],[1.9,3.2,-.2],[2.8,.85,0]],.62,8),G.sandstone),q(r,Jf(`arch-feet`,[{geometry:Hf(),position:[-2.55,.35,0],scale:[.9,.6,1]},{geometry:Hf(),position:[2.8,.4,0],scale:[.8,.65,.9]}]),G.sandDark),q(r,Yf(`arch-strata`,[[-2.9,.8,.2],[-2.8,2.3,.3],[-1.5,4,.2],[.2,4.52,.05],[1.9,3.7,-.15]],.1,5),G.sandLight);break;case`dune-rock`:q(r,Hf(),G.sandstone,[0,.65,0],[1.7,.8,1.1],[.15,.3,.1]),q(r,Hf(),G.sandLight,[-1,.3,.65],[.65,.4,.65]),q(r,Hf(),G.sandDark,[.95,.27,-.35],[.64,.32,.55]);break;case`crystal-cluster`:q(r,Hf(),G.cave,[0,.22,0],[1.12,.38,.9]),q(r,Qf(),G.crystal,[0,.14,0],[.47,3.8,.47],[.04,.2,-.12]),q(r,Jf(`cluster-side-crystals`,[{geometry:Qf(),position:[-.7,.13,.3],scale:[.32,2.5,.34],rotation:[.12,.4,.28]},{geometry:Qf(),position:[.6,.09,-.35],scale:[.35,2,.35],rotation:[-.25,0,-.35]}]),G.crystalLight),q(r,Qf(),G.cyan,[.3,.08,.55],[.18,1.05,.19],[.15,0,-.45]);break;case`cave-column`:q(r,Hf(),G.caveDark,[0,.55,0],[1.25,.8,1.1]),q(r,Yf(`cave-column-body`,[[0,.4,0],[.2,2,0],[-.15,4.5,.1],[.12,6.5,.05],[0,8.4,0]],.57,7),G.cave,[0,0,0],[1,i,1]),q(r,Kf(),G.cave,[0,8*i,0],[.75,1.8,.73]),q(r,Yf(`column-luminous-vein`,[[-.37,1,.44],[-.43,2.7,.42],[.15,4.2,.53],[.33,5.5,.45],[-.1,6.8,.5]],.045,5),G.crystal),q(r,Qf(),G.crystalLight,[.58,2.6,0],[.23,1.4,.3],[0,0,-.52]);break;case`ruin-arch`:q(r,Jf(`relic-arch-legs`,[{geometry:Gf(),position:[-1.5,1.4,0],scale:[.28,2.8,.48]},{geometry:Gf(),position:[1.5,1.4,0],scale:[.28,2.8,.48]}]),G.ceramicDark),q(r,Yf(`relic-arch-crown`,[[-1.5,2.6,0],[-1,3.1,0],[0,3.35,0],[1,3.1,0],[1.5,2.6,0]],.29,6),G.ceramic),q(r,Yf(`relic-arch-inlay`,[[-1.37,1.7,.38],[-1.36,2.55,.26],[-.7,3.05,.26],[.6,3.12,.26],[1.3,2.6,.26]],.035,5),G.cyan),q(r,Jf(`ruin-bases`,[{geometry:Hf(),position:[-1.5,.14,0],scale:[.57,.2,.7]},{geometry:Hf(),position:[1.5,.16,0],scale:[.57,.21,.7]}]),G.cave);break;case`ruin-ring`:q(r,Wf(),G.caveDark,[0,.19,0],[1.05,.38,.7]),q(r,Vf(`broken-ring-a`,()=>new oa(1.35,.23,6,28,4.55)),G.ceramic,[0,2,0],[1,1,.85],[.06,.1,.2]),q(r,Vf(`broken-ring-b`,()=>new oa(1.35,.23,6,9,1)),G.ceramicDark,[0,2,0],[1,1,.85],[.06,.1,5]),q(r,qf(),G.cyan,[0,2,.08],[1.08,1.08,.7],[.06,.1,.2]),q(r,Gf(),G.metal,[0,.55,0],[.18,1.1,.17]);break;case`lantern-bloom`:q(r,Zf(`lantern-root-leaves`,4,.8,.8,.1),G.leaf),q(r,Yf(`lantern-stem`,[[0,0,0],[.15,.8,0],[-.13,1.5,0],[0,1.75,0]],.065),G.bark),q(r,Zf(`lantern-petals`,5,.83,1.6,1.7,.2),G.pearl),q(r,K(),G.bloom,[0,2.03,0],[.27,.4,.27]),q(r,qf(),G.heart,[0,1.91,0],[.41,.41,.41],[Math.PI/2,0,0]);break;case`spore-crown`:{q(r,Gf(),G.root,[0,.9,0],[.18,1.8,.18]),q(r,$f(),G.bloom,[0,1.68,0],[.21,.4,.21]),q(r,qf(),G.pearl,[0,1.72,0],[.76,.76,.76],[Math.PI/2,0,0]);let e=[];for(let t=0;t<7;t++)e.push({geometry:K(),position:[Math.cos(t*Bf/7)*.52,1.53,Math.sin(t*Bf/7)*.52],scale:[.045,.24,.045]});q(r,Jf(`spore-fringe`,e),G.pearl),q(r,Hf(),G.barkDark,[0,.1,0],[.3,.2,.3]);break}case`prism-fern`:{q(r,Hf(),G.cave,[0,.12,0],[.4,.23,.4]);let e=[];for(let t=0;t<6;t++)e.push({geometry:Qf(),position:[0,.12,0],scale:[.12,1.75+t%2*.35,.19],rotation:[.38,t*Bf/6,0],rotationOrder:`YXZ`});q(r,Jf(`prism-fern-blades`,e),G.crystalLight),q(r,Qf(),G.cyan,[0,.18,0],[.15,2.15,.15]),q(r,qf(),G.frost,[0,.45,0],[.34,.34,.34],[Math.PI/2,0,0]);break}case`glass-cactus`:q(r,Gf(),G.amber,[0,1.2,0],[.22,2.4,.24]),q(r,Jf(`cactus-arms`,[J([0,.95,0],[-.6,1.3,0],.12),J([-.6,1.3,0],[-.6,1.95,0],.13),J([0,1.25,0],[.57,1.6,0],.1),J([.57,1.6,0],[.57,2.2,0],.1)]),G.amber),q(r,Jf(`cactus-caps`,[{geometry:K(),position:[0,2.4,0],scale:[.12,.2,.12]},{geometry:K(),position:[-.6,2,0],scale:[.13,.18,.13]},{geometry:K(),position:[.57,2.22,0],scale:[.11,.15,.11]}]),G.amberLight),q(r,Jf(`cactus-bands`,[.6,1.15,1.7,2.1].map(e=>({geometry:qf(),position:[0,e,0],scale:[.2,.2,.2],rotation:[Math.PI/2,0,0]}))),G.sandDark),q(r,Hf(),G.sandstone,[0,.08,0],[.4,.17,.38]);break;case`sun-stone`:q(r,Hf(),G.sandDark,[0,.18,0],[.65,.25,.62]),q(r,Hf(),G.amber,[0,.83,0],[.62,.72,.6],[.05,.42,0]),q(r,qf(),G.amberLight,[0,.87,0],[.62,.62,.62],[.25,0,-.5]),q(r,Qf(),G.bloom,[.13,1.2,.12],[.12,.35,.12],[0,0,-.15]);break;case`sand-rose`:q(r,Wf(),G.sandDark,[0,.07,0],[.36,.14,.36]),q(r,Zf(`sand-rose-outer`,9,1.1,1.25,.13),G.roseDark,[0,0,0],[1,.65,1]),q(r,Zf(`sand-rose-inner`,7,.85,1.15,.24,.35),G.rose),q(r,Zf(`sand-rose-heart`,5,.48,.65,.45),G.amberLight),q(r,K(),G.heart,[0,.78,0],[.13,.14,.13]);break;case`echo-crystal`:q(r,Hf(),G.caveDark,[0,.13,0],[.55,.25,.5]),q(r,Qf(),G.crystal,[0,.13,0],[.3,2.4,.3],[.06,.15,-.04]),q(r,qf(),G.frost,[0,1.28,0],[.5,.5,.5],[Math.PI/2,.1,.2]),q(r,qf(),G.cyan,[0,1.58,0],[.38,.38,.38],[Math.PI/2,-.1,.2]),q(r,Qf(),G.crystalLight,[-.32,.15,.1],[.15,.9,.16],[0,0,.32]);break;case`cave-coral`:{let e=[],t=[];for(let n=0;n<5;n++){let r=n*Bf/5,i=Math.cos(r)*.7,a=Math.sin(r)*.7,o=1.3+n%3*.28;e.push(J([0,.15,0],[i*.65,.9,a*.65],.07),J([i*.65,.9,a*.65],[i,o,a],.055)),t.push({geometry:K(),position:[i,o,a],scale:[.19,.28,.19]})}q(r,Jf(`coral-branches`,e),G.crystal),q(r,Jf(`coral-polyp-tips`,t),G.cyan),q(r,K(),G.cave,[0,.15,0],[.42,.24,.42]),q(r,Xf(),G.crystalLight,[0,.3,0],[.6,1.9,.9],[.1,.6,0]);break}case`memory-shard`:q(r,Wf(6),G.cave,[0,.15,0],[.48,.3,.48]),q(r,Qf(),G.ceramic,[0,.38,0],[.22,2.25,.1],[0,.26,-.12]),q(r,Uf(),G.cyan,[0,1.38,.15],[.028,1.3,.022],[0,.26,-.12]),q(r,qf(),G.metalLight,[0,.43,0],[.35,.35,.35],[Math.PI/2,0,0]);break;case`moth`:{q(r,K(),G.barkDark,[0,.7,0],[.055,.21,.08]);let e=q(r,Xf(),G.wing,[-.05,.72,0],[1.6,.78,2.2],[.23,.18,-1.2]),t=q(r,Xf(),G.wing,[.05,.72,0],[1.6,.78,2.2],[.23,-.18,1.2]);e.name=`wing-left`,t.name=`wing-right`,q(r,Jf(`moth-ocelli`,[{geometry:K(),position:[-.48,.94,.13],scale:[.1,.025,.07],rotation:[0,0,.25]},{geometry:K(),position:[.48,.94,.13],scale:[.1,.025,.07],rotation:[0,0,-.25]}]),G.bloom),q(r,Jf(`moth-antennae`,[J([-.03,.9,0],[-.13,1.05,.06],.009),J([.03,.9,0],[.13,1.05,.06],.009)]),G.wingDark),r.userData.animation={type:`moth`,hover:.15,frequency:1.7};break}case`survey-monolith`:q(r,Wf(6),G.caveDark,[0,.18,0],[.78,.36,.7]),q(r,Gf(),G.ceramicDark,[0,1.6,0],[.39,2.8,.3]),q(r,Uf(),G.ceramic,[0,1.55,.28],[.4,2.25,.07]),q(r,Uf(),G.cyan,[0,1.7,.33],[.035,1.25,.02]),q(r,qf(),G.metalLight,[0,2.88,0],[.38,.38,.38]),q(r,K(),G.cyan,[0,2.9,0],[.1,.1,.1]);break;case`heartwood`:{q(r,ep(),G.barkDark,[0,0,0],[.68,.6,.68]);let e=[],t=Yf(`heartwood-rib`,[[.1,.1,0],[.75,.65,0],[.85,1.6,0],[.48,2.3,0],[0,2.65,0]],.095);for(let n=0;n<6;n++)e.push({geometry:t,rotation:[0,n*Bf/6,0]});q(r,Jf(`heartwood-cage`,e),G.bark),q(r,K(),G.heart,[0,1.45,0],[.45,.65,.45]),q(r,Zf(`heartwood-crown`,5,.45,.7,2.45),G.pearl),q(r,qf(),G.bloom,[0,1.45,0],[.54,.54,.54],[Math.PI/2,0,0]);break}case`sun-dial`:{q(r,Wf(12),G.sandstone,[0,.15,0],[1.18,.3,1.18]),q(r,Wf(12),G.amberLight,[0,.36,0],[1.1,.12,1.1]),q(r,Qf(),G.amber,[0,.42,0],[.24,2.12,.24],[0,.2,-.22]),q(r,qf(),G.heart,[0,1.35,0],[.72,.72,.72],[.2,0,.3]);let e=[];for(let t=0;t<12;t++)e.push({geometry:Uf(),position:[Math.cos(t*Bf/12)*.92,.44,Math.sin(t*Bf/12)*.92],scale:[.055,.035,.12],rotation:[0,-t*Bf/12,0]});q(r,Jf(`sun-dial-hour-marks`,e),G.sandDark);break}case`harmonic-core`:q(r,Wf(6),G.caveDark,[0,.18,0],[.82,.36,.82]),q(r,Gf(),G.ceramic,[0,.52,0],[.3,.7,.3]),q(r,Vf(`harmonic-octahedron`,()=>new na(.58)),G.cyan,[0,1.65,0],[1,1.45,1],[0,.3,0]),q(r,qf(),G.crystalLight,[0,1.65,0],[1,1,1],[.22,.05,0]),q(r,qf(),G.metalLight,[0,1.65,0],[1.18,1.18,1.18],[Math.PI/2,.35,0]),q(r,qf(),G.crystal,[0,1.65,0],[.8,.8,.8],[.6,Math.PI/2,.5]),r.userData.animation={type:`resonance`,frequency:.4,amplitude:.04};break;default:throw Error(`Unknown model kind: ${String(e)}`)}return np(r,e)}function $m(){let e=new An;e.name=`Vesper / Lumen field scanner`,q(e,Uf(),G.metal,[0,0,0],[.14,.095,.23]),q(e,Uf(),G.ceramic,[0,.038,.014],[.142,.027,.19]),q(e,Wf(16),G.metalLight,[0,0,-.14],[.055,.053,.055],[Math.PI/2,0,0]),q(e,Wf(16),G.black,[0,0,-.169],[.042,.006,.042],[Math.PI/2,0,0]);let t=q(e,qf(),G.cyan,[0,0,-.176],[.035,.035,.035]);return t.name=`sensor-aperture`,q(e,K(),G.glass,[0,0,-.173],[.023,.023,.008]),q(e,Uf(),G.black,[0,.056,.03],[.085,.005,.085],[.14,0,0]),q(e,Uf(),G.cyan,[0,.06,.016],[.047,.003,.007],[.14,0,0]),q(e,Uf(),G.barkDark,[.01,-.072,.065],[.067,.14,.06],[-.18,0,0]),q(e,Jf(`scanner-ribs`,[-.05,-.027,-.004,.019].map(e=>({geometry:Uf(),position:[.073,.005,e],scale:[.004,.044,.007]}))),G.black),q(e,K(),G.bloom,[.05,.053,.067],[.008,.004,.008]),e.rotation.set(-.07,-.16,-.06),e.userData.sharedResources=!0,e.userData.aperture=`sensor-aperture`,e}function eh(){let e=new An;q(e,Wf(20),G.ceramic,[0,1.95,0],[1.22,2.1,1.22]),q(e,K(),G.ceramic,[0,2.96,0],[1.22,.74,1.22]),q(e,Wf(20),G.metal,[0,.92,0],[1.22,.23,1.22]),q(e,Wf(20),G.metalLight,[0,3.08,0],[1.13,.055,1.13]),q(e,Uf(),G.metal,[0,1.8,1.18],[.75,1.75,.12]),q(e,Uf(),G.ceramicDark,[0,1.83,1.26],[.64,1.56,.025]),q(e,Uf(),G.glass,[0,2.35,1.29],[.46,.4,.04]),q(e,Uf(),G.cyan,[0,1.3,1.3],[.36,.035,.028]);let t=[],n=[],r=[];for(let e=0;e<4;e++){let i=Math.PI/4+e*Math.PI/2,a=Math.cos(i),o=Math.sin(i);t.push(J([a*.97,1.26,o*.97],[a*1.93,.23,o*1.93],.1)),n.push({geometry:Wf(8),position:[a*1.93,.11,o*1.93],scale:[.32,.22,.32]}),r.push({geometry:Uf(),position:[a*1.21,2,o*1.21],scale:[.28,.9,.07],rotation:[0,i,0]})}q(e,Jf(`pod-outriggers`,t),G.metalLight),q(e,Jf(`pod-landing-shoes`,n),G.metal),q(e,Jf(`pod-exterior-panels`,r),G.metal),q(e,Wf(8),G.metalLight,[0,3.83,0],[.035,.45,.035]);let i=q(e,K(),G.bloom,[0,4.1,0],[.095,.13,.095]);return i.name=`beacon`,q(e,Uf(),G.metal,[0,.35,1.46],[.9,.13,.7]),q(e,Uf(),G.metalLight,[0,.58,1.25],[.82,.13,.45]),np(e,`landing-pod`)}function th(e){let t=e.scale.toArray().join(`,`),n=e.userData.aquaticBounds;if(n?.scale===t)return n;e.updateWorldMatrix(!0,!0);let r=new er().setFromObject(e),i=r.min.y-e.position.y,a=r.max.y-e.position.y,o=Math.hypot(Math.max(Math.abs(r.min.x-e.position.x),Math.abs(r.max.x-e.position.x)),Math.max(Math.abs(r.min.z-e.position.z),Math.abs(r.max.z-e.position.z))),s=e.userData.animation.bodyCenterY,c={height:a-i,bottom:i,top:a,radius:o,bodyCentre:Number.isFinite(s)?s*Math.abs(e.scale.y):(i+a)/2,clearance:.07+.05*Math.max(Math.abs(e.scale.x),Math.abs(e.scale.y),Math.abs(e.scale.z)),scale:t};return e.userData.aquaticBounds=c,e.userData.modelHeight=c.height,c}function nh(e,t,n,r,i){let a=i.water?.(e,t);if(!a||a.id!==n)return null;let o=-1/0,s=1/0;for(let a=-1;a<8;a++){let c=Math.PI*a/4,l=e+(a<0?0:Math.cos(c)*r.radius),u=t+(a<0?0:Math.sin(c)*r.radius),d=i.water?.(l,u),f=i.height(l,u);if(!d||d.id!==n||!Number.isFinite(d.level)||!Number.isFinite(d.depth)||!Number.isFinite(f)||d.depth<=0)return null;let p=Math.max(f,d.level-d.depth);o=Math.max(o,p+r.clearance-r.bottom),s=Math.min(s,d.level-r.clearance-r.top)}return o>s?null:{sample:a,minimumY:o,maximumY:s}}function rh(e,t,n,r,i){let a=Math.max(1,Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.2));for(let o=1;o<=a;o++){let s=o/a;if(!nh(jt.lerp(e.x,t.x,s),jt.lerp(e.z,t.z,s),n,r,i))return!1}return!0}function ih(e,t,n,r,i,a,o,s){let c=e.userData.animation??{},l=[`fly`,`moth`,`bird`].includes(c.type),u=c.type===`swim`,d=e.userData.wildlifeInitialized===!0;if(d&&r<=0){u&&e.userData.aquaticUnavailable&&(e.visible=!1);return}r=jt.clamp(r,0,.1);let f=u?th(e):null,p=u?s.water?.(t.x,t.z):null,m=f?nh(e.position.x,e.position.z,p?.id,f,s):null;if(f&&!m){let n=nh(t.x,t.z,p?.id,f,s);if(!n){e.visible=!1,e.userData.aquaticUnavailable=!0,e.userData.behavior=`Outside suitable water`,e.userData.wildlifeInitialized=!0;return}e.position.x=t.x,e.position.z=t.z,m=n}e.userData.aquaticUnavailable=!1;let h=t.seed%997*.031,g=c.radius??(l?2.2:2.8),_=c.speed??(l?.65:.32),v=Math.hypot(e.position.x-i.x,e.position.z-i.z),y=o||c.type!==`bird`&&v<(u?4:9),b=!l&&!u&&Math.sin(n*.12+h)>.48,x=!y&&!b&&!a.reducedMotion;if(x){let i=n*_/Math.max(1,g)+h,a=t.x+Math.cos(i)*g,o=t.z+Math.sin(i)*g*.7,c=a-e.position.x,d=o-e.position.z,v=1-Math.exp(-r*.7),y=e.position.x+c*v,b=e.position.z+d*v,x=s.water?.(y,b);(u?rh({x:e.position.x,z:e.position.z},{x:y,z:b},p?.id,f,s):s.biome(y,b)===s.biome(t.x,t.z)&&(l||!s.blocked(y,b)&&!x))&&(e.position.x=y,e.position.z=b,f&&(m=nh(y,b,p?.id,f,s)),Math.hypot(c,d)>.02&&ah(e,Math.atan2(-c,-d),r*1.8))}else y&&!a.reducedMotion&&ah(e,Math.atan2(e.position.x-i.x,e.position.z-i.z),r*.65);let S=s.height(e.position.x,e.position.z),C=l?s.water?.(e.position.x,e.position.z):null,w=C?Math.max(S,C.level):S,T=n*(c.type===`crawl`?4:3.4)+h,E=a.reducedMotion?0:Math.sin(n*1.2+h)*(l?.22:x?.025:.009),D=c.type===`hop`&&x?Math.max(0,Math.sin(T))*.24:0;if(f&&m){let t=d&&(y||a.reducedMotion||r===0)?e.position.y:m.sample.level-(c.swimDepth??.7)-f.bodyCentre+(a.reducedMotion||y?0:Math.sin(n*.7+h)*.06);e.position.y=jt.clamp(t,m.minimumY,m.maximumY)}else l&&d&&y&&!a.reducedMotion?e.position.y=Math.max(e.position.y,w+.2):e.position.y=w+(l?c.hoverHeight??1.7:0)+E+D;e.userData.behavior=a.reducedMotion?`Resting`:u?y?`Holding in the current`:`Swimming`:l?y?`Hovering nearby`:`Gliding`:y?`Watching you`:b?`Foraging`:`Wandering`;for(let t of e.children){let e=t.userData.restRotation??=t.rotation.toArray().slice(0,3);if(t.rotation.set(e[0],e[1],e[2]),!a.reducedMotion){if(t.name.startsWith(`leg-`)){let e=Number(t.name.slice(4));t.rotation.x+=x?Math.sin(T+e%2*Math.PI+Math.floor(e/2)*.5)*(c.amplitude??.3):0}else if(t.name===`wing-left`||t.name===`wing-right`){let e=t.name===`wing-left`?-1:1;t.rotation.z+=e*Math.sin(n*(c.type===`moth`?10:c.type===`bird`?3.8:2.1)+h)*(c.amplitude??.2)}else t.name===`head`?t.rotation.x+=b?.26+Math.sin(n*1.1+h)*.06:Math.sin(n*.65+h)*.045:t.name===`tail`?t.rotation.y+=Math.sin(n*(u?4.8:1.4)+h)*(u?.3:.12):t.name.startsWith(`fin-`)&&(t.rotation.z+=Math.sin(n*3.2+h)*.14*(t.name.endsWith(`left`)?-1:1))}}e.userData.wildlifeInitialized=!0}function ah(e,t,n){let r=Math.atan2(Math.sin(t-e.rotation.y),Math.cos(t-e.rotation.y));e.rotation.y+=r*Math.min(1,n)}var oh=64,sh=32,ch=oh/sh,lh=.025,uh=.012,dh;function fh(){if(dh)return dh;let e=new va({name:`Vesper / clear flowing water`,color:`#ffffff`,vertexColors:!0,roughness:.24,metalness:.11,transparent:!0,opacity:.54,depthWrite:!1,side:2}),t={value:0};return e.userData.waterTime=t,e.userData.sharedResources=!0,e.onBeforeCompile=e=>{e.uniforms.waterTime=t,e.vertexShader=`
attribute float waterDepth;
attribute vec2 waterFlow;
varying vec3 vWaterSurface;
varying float vWaterDepth;
varying vec2 vWaterFlow;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vWaterSurface = (modelMatrix * vec4(position, 1.)).xyz;
vWaterDepth = waterDepth;
vWaterFlow = waterFlow;
`),e.fragmentShader=`
uniform float waterTime;
varying vec3 vWaterSurface;
varying float vWaterDepth;
varying vec2 vWaterFlow;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
float flowStrength = length(vWaterFlow);
vec2 flowDirection = flowStrength > .001 ? vWaterFlow / flowStrength : vec2(.62, .78);
vec2 crossDirection = vec2(-flowDirection.y, flowDirection.x);
float alongFlow = dot(vWaterSurface.xz, flowDirection);
float acrossFlow = dot(vWaterSurface.xz, crossDirection);
float waterPhase = alongFlow * .91 - waterTime * (.32 + flowStrength * .45);
float ripplePhase = acrossFlow * 1.43 + alongFlow * .24 + waterTime * .29;
float shallowEdge = 1. - smoothstep(.025, .25, vWaterDepth);
float fineWave = pow(.5 + .5 * sin(waterPhase + sin(ripplePhase) * .4), 10.);
diffuseColor.rgb *= .965 + fineWave * .14;
diffuseColor.rgb += vec3(.03, .046, .052) * fineWave * smoothstep(.06, .45, vWaterDepth);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.72, .86, .77), shallowEdge * .08);
diffuseColor.a *= .5 + .5 * smoothstep(.025, .7, vWaterDepth);
`),e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
float rippleAmplitude = .026 * smoothstep(.025, .28, vWaterDepth);
vec2 waterSlope = flowDirection * cos(waterPhase) * rippleAmplitude
  + crossDirection * cos(ripplePhase) * rippleAmplitude * .6;
normal = normalize(normal + mat3(viewMatrix) * vec3(waterSlope.x, 0., waterSlope.y));
float waterFresnel = pow(1. - abs(dot(normal, normalize(vViewPosition))), 3.);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.54, .77, .86), waterFresnel * .28);
`)},e.customProgramCacheKey=()=>`vesper / clipped flowing water / 1`,dh=e,e}function ph(e){return!!e.sample&&e.sample.depth>=lh}function mh(e,t,n){let r=t,i=n;for(let t=0;t<8;t++){let t=(r.x+i.x)*.5,n=(r.z+i.z)*.5,a={x:t,z:n,sample:Wu(e,t,n)};ph(a)?r=a:i=a}return r}function hh(e,t){let n=[];for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];ph(i)?ph(a)?n.push(a):n.push(mh(e,i,a)):ph(a)&&n.push(mh(e,a,i),a)}return n}function gh(e,t,n){if(!Number.isSafeInteger(t)||!Number.isSafeInteger(n))throw Error(`Invalid water chunk coordinates.`);let r=t*oh,i=n*oh,a=[];for(let t=0;t<=sh;t++)for(let n=0;n<=sh;n++){let o=r+n*ch,s=i+t*ch;a.push({x:o,z:s,sample:Wu(e,o,s)})}if(!a.some(ph))return null;let o=[],s=[],c=[],l=[],u=new B(`#79bdbe`),d=new B(`#397c96`),f=new B,p=e=>{let t=e.sample,n=Math.max(0,Math.min(8,t.depth));f.copy(u).lerp(d,jt.smoothstep(n,.2,2.8)),o.push(e.x,t.level+uh,e.z),s.push(f.r,f.g,f.b),c.push(n),l.push(t.flow.x,t.flow.z)};for(let t=0;t<sh;t++)for(let n=0;n<sh;n++){let r=a[t*33+n],i=a[t*33+n+1],o=a[(t+1)*33+n],s=a[(t+1)*33+n+1];for(let t of[[r,o,s],[r,s,i]]){let n=hh(e,t);for(let e=1;e+1<n.length;e++){let t=n[0],r=n[e],i=n[e+1];(r.z-t.z)*(i.x-t.x)-(r.x-t.x)*(i.z-t.z)>1e-6&&(p(t),p(r),p(i))}}}if(!o.length)return null;let m=new Mr;m.setAttribute(`position`,new V(o,3)),m.setAttribute(`color`,new V(s,3)),m.setAttribute(`waterDepth`,new V(c,1)),m.setAttribute(`waterFlow`,new V(l,2)),m.computeVertexNormals(),m.computeBoundingBox(),m.computeBoundingSphere();let h=new ni(m,fh());return h.name=`Vesper / water / ${t},${n}`,h.receiveShadow=!0,h.castShadow=!1,h.renderOrder=2,h.userData.chunkOwnedGeometry=!0,h.userData.sharedMaterial=!0,h}function _h(e,t,n){for(let r of Array.isArray(e)?e:[e]){let e=r.userData.waterTime;e&&(e.value=n||!Number.isFinite(t)?0:Math.max(0,t))}}var vh={forest:new B(`#71927b`),desert:new B(`#bd8c68`),caves:new B(`#354852`)},yh=Object.fromEntries(Object.values(Kl).map(e=>[e.id,new B(e.ground)])),bh={"canopy-tree":.65,"ribbon-tree":.48,"desert-spire":.72,"dune-rock":.95,"crystal-cluster":.5,"cave-column":.95,"ruin-ring":.6,"spire-pine":.42,"silver-birch":.45,"veil-willow":.55,"coral-tree":.55,"baobab-tree":1.15,"spiral-tree":.5,"tree-fern":.4,"fan-palm":.4,"boulder-stack":.85,"fallen-log":.55,"barrel-cactus":.4},xh=class{scene;seed;group=new An;chunks=new Map;pending=[];instanced=[];templates=new Map;collision=[];lastCenter=``;dirty=!1;frame=0;radius=3;pulseTime=-100;pulseOrigin=new R;pulseRing;halo;activeTarget=``;terrainMaterial=new va({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1});roofMaterial=new va({color:`#25353e`,roughness:.96,side:2,flatShading:!0});markerMaterial=new Wr({color:`#c3eee2`,transparent:!0,opacity:.9,depthTest:!1,side:2});markerGeometry=new ia(.13,.18,24);pod;entityCache=[];propAnchor=new L(1/0,1/0);currentPosition={x:0,z:0};wildlifeEnvironment={height:(e,t)=>Ku(this.seed,e,t),biome:(e,t)=>cu(this.seed,e,t),blocked:(e,t)=>this.isBlocked(e,t),water:(e,t)=>Wu(this.seed,e,t)};constructor(e,t,n){this.scene=e,this.seed=t,this.radius=n.quality===`low`?2:n.quality===`high`?4:3,this.group.name=`Seeded planet`,e.add(this.group),this.terrainMaterial.onBeforeCompile=e=>{e.vertexShader=`varying vec3 vSurface;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vSurface = position;`),e.fragmentShader=`varying vec3 vSurface;
float groundHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float groundNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(groundHash(i),groundHash(i+vec2(1.,0.)),f.x),mix(groundHash(i+vec2(0.,1.)),groundHash(i+1.),f.x),f.y);}
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
float nearDetail=1.-smoothstep(15.,65.,distance(vSurface,cameraPosition));
float grain=groundNoise(vSurface.xz*5.2)*.065+groundNoise(vSurface.xz*.45)*.10;
float strata=sin(vSurface.x*.8+vSurface.z*.32+groundNoise(vSurface.xz*.035)*9.)*.018;
diffuseColor.rgb*=.94+(grain+strata)*nearDetail;
`)},this.terrainMaterial.customProgramCacheKey=()=>`vesper-ground-1`,this.pod=eh(),this.pod.position.set(-8,Ku(t,-8,5),5),this.pod.rotation.y=.5,this.group.add(this.pod),this.pulseRing=new ni(new ia(.96,1,96),new Wr({color:`#9ed9c3`,transparent:!0,opacity:0,side:2,depthWrite:!1})),this.pulseRing.rotation.x=-Math.PI/2,this.group.add(this.pulseRing),this.halo=new ni(new ia(.42,.445,64),new Wr({color:`#dbe9cf`,transparent:!0,opacity:.6,side:2,depthTest:!1,depthWrite:!1})),this.halo.renderOrder=9,this.halo.visible=!1,this.group.add(this.halo),this.updateRegion({x:0,z:0});for(let e=0;e<9;e++)this.buildNext();this.rebuildProps()}setQuality(e){let t=e.quality===`low`?2:e.quality===`high`?4:3;t!==this.radius&&(this.radius=t,this.lastCenter=``)}updateRegion(e){let t=Math.floor(e.x/64),n=Math.floor(e.z/64),r=`${t},${n}:${this.radius}`;if(r===this.lastCenter)return;this.lastCenter=r;let i=new Set,a=[];for(let e=t-this.radius;e<=t+this.radius;e++)for(let t=n-this.radius;t<=n+this.radius;t++){let n=`${e},${t}`;i.add(n),this.chunks.has(n)||a.push([e,t])}a.sort((e,r)=>Math.hypot(e[0]-t,e[1]-n)-Math.hypot(r[0]-t,r[1]-n)),this.pending=a;for(let[e,t]of this.chunks)i.has(e)||(this.removeChunk(t),this.chunks.delete(e),this.dirty=!0)}makeTerrain(e){let t=new ra(64,64,24,24);t.rotateX(-Math.PI/2),t.translate(e.cx*64+32,0,e.cz*64+32);let n=t.attributes.position,r=new Float32Array(n.count*3),i=new B;for(let e=0;e<n.count;e++){let t=n.getX(e),a=n.getZ(e),o=Ku(this.seed,t,a);n.setY(e,o);let s=cu(this.seed,t,a);i.copy(yh[Qu(this.seed,t,a)]??vh[s]),i.lerp(vh[cu(this.seed,t+6,a)],.16),i.lerp(vh[cu(this.seed,t-6,a)],.16);let c=.9+.11*Math.sin(t*.16+Math.cos(a*.19))*Math.sin(a*.15);i.multiplyScalar(c),r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}t.setAttribute(`color`,new vr(r,3)),t.computeVertexNormals(),t.computeBoundingSphere();let a=new ni(t,this.terrainMaterial);a.receiveShadow=!0,this.group.add(a);let o=gh(this.seed,e.cx,e.cz);o&&this.group.add(o);let s=null,c=[],l=t.index;for(let e=0;e<l.count;e+=3){let t=l.getX(e),r=l.getX(e+1),i=l.getX(e+2);if([t,r,i].every(e=>cu(this.seed,n.getX(e),n.getZ(e))===`caves`))for(let e of[t,i,r]){let t=n.getX(e),r=n.getZ(e);c.push(t,n.getY(e)+18+Math.sin(t*.07)*2.1+Math.cos(r*.06)*1.8,r)}}if(c.length){let e=new Mr;e.setAttribute(`position`,new V(c,3)),e.computeVertexNormals(),s=new ni(e,this.roofMaterial),s.receiveShadow=!0,this.group.add(s)}return{terrain:a,water:o,roof:s}}buildNext(){let e=this.pending.shift();if(!e)return;let[t,n]=e,r=$u(this.seed,t,n);if(this.chunks.has(r.key))return;let i=this.makeTerrain(r),a=r.entities.map(e=>{let t=Zl[e.speciesId],n=Qm(t.model,e.seed);n.scale.setScalar(e.scale),n.userData.modelHeight=Zm[t.model].height*e.scale,n.rotation.y=e.rotation;let r=t.category!==`fauna`&&e.role===`specimen`&&Wu(this.seed,e.x,e.z)?Gu(this.seed,e.x,e.z)??e:e,i=Ku(this.seed,r.x,r.z);n.position.set(r.x,i,r.z),n.name=t.name,this.group.add(n);let a=new ni(this.markerGeometry,this.markerMaterial);return a.visible=!1,a.renderOrder=10,this.group.add(a),{data:e,object:n,marker:a,baseY:i,phase:e.seed%1e3/100}});this.chunks.set(r.key,{data:r,...i,entities:a}),this.entityCache.push(...a),this.dirty=!0}template(e,t){let n=`${e}:${t}`,r=this.templates.get(n);return r||(r=Qm(e,t*7919+17),r.updateMatrixWorld(!0),this.templates.set(n,r)),r}rebuildProps(){for(let e of this.instanced)this.group.remove(e),e.dispose();this.instanced=[],this.collision=[];let e=new Map,t=new tn,n=new Mt,r=new R,i=new R,a=new tn,o=this.entityCache.filter(e=>Zl[e.data.speciesId].category!==`fauna`&&Math.hypot(e.object.position.x-e.data.x,e.object.position.z-e.data.z)>.1);for(let s of this.chunks.values())for(let c of s.data.props){if(this.propsTooClose(c,s.data))continue;let l=Zm[c.kind].height*c.scale>4.5?4:1.8;if(o.some(e=>Math.hypot(c.x-e.object.position.x,c.z-e.object.position.z)<l)||Math.hypot(c.x-this.currentPosition.x,c.z-this.currentPosition.z)>(Zm[c.kind].height*c.scale>4.5?this.radius===2?135:175:this.radius===2?65:95))continue;i.set(c.x,Ku(this.seed,c.x,c.z),c.z),n.setFromAxisAngle(kn.DEFAULT_UP,c.rotation),r.setScalar(c.scale),t.compose(i,n,r),this.template(c.kind,Math.abs(c.seed)%3).traverse(n=>{if(!(n instanceof ni))return;let r=Array.isArray(n.material)?n.material:[n.material],i=n.geometry.uuid+r.map(e=>e.uuid).join(`:`),o=e.get(i);o||(o={geometry:n.geometry,material:n.material,matrices:[],shadow:!r.some(e=>e.transparent)},e.set(i,o)),a.multiplyMatrices(t,n.matrixWorld),o.matrices.push(a.clone())});let u=bh[c.kind];u&&this.collision.push({x:c.x,z:c.z,r:u*c.scale,y:i.y,h:Zm[c.kind].height*c.scale})}for(let t of e.values()){let e=new mi(t.geometry,t.material,t.matrices.length);t.matrices.forEach((t,n)=>e.setMatrixAt(n,t)),e.instanceMatrix.needsUpdate=!0,e.computeBoundingSphere(),e.castShadow=t.shadow,e.receiveShadow=!0,this.group.add(e),this.instanced.push(e)}this.dirty=!1,this.propAnchor.set(this.currentPosition.x,this.currentPosition.z)}propsTooClose(e,t){let n=Zm[e.kind].height*e.scale,r=n>4.5,i=n>1.5;return Math.hypot(e.x,e.z)<(r?14:i?8:3)||Math.abs(e.x)<(r?3.8:i?1.6:.65)&&e.z<0&&e.z>-48||t.sites.some(t=>Math.hypot(e.x-t.x,e.z-t.z)<(r?14:i?3:1.3))?!0:t.entities.some(t=>Math.hypot(e.x-t.x,e.z-t.z)<(r?4:i?1.8:.9))}isBlocked(e,t){if(Math.hypot(e+8,t-5)<2.8)return!0;for(let n of this.entityCache){let r=Zl[n.data.speciesId].model,i=n.data.role===`landmark`?1.1:bh[r];if(i&&Math.hypot(e-n.object.position.x,t-n.object.position.z)<i*n.data.scale+.25)return!0}for(let n of this.collision)if(Math.abs(e-n.x)<n.r+.38&&Math.abs(t-n.z)<n.r+.38&&Math.hypot(e-n.x,t-n.z)<n.r+.38)return!0;return!1}canObserve(e,t){let n=t.x-e.x,r=t.z-e.z,i=t.y-e.y,a=n*n+r*r;for(let t=.12;t<.92;t+=.08)if(Ku(this.seed,e.x+n*t,e.z+r*t)>e.y+i*t-.08)return!1;if(a>.01)for(let t of this.collision){let o=Math.max(0,Math.min(1,((t.x-e.x)*n+(t.z-e.z)*r)/a));if(o<.04||o>.92)continue;let s=e.y+i*o;if(s>t.y&&s<t.y+t.h&&Math.hypot(e.x+n*o-t.x,e.z+r*o-t.z)<t.r)return!1}return!0}getEntities(){return this.entityCache}get settled(){return this.pending.length===0&&!this.dirty}nearbyClearPosition(e){if(!this.isBlocked(e.x,e.z))return e;for(let t=1;t<=12;t++)for(let n=0;n<24;n++){let r=n*Math.PI/12,i={x:e.x+Math.cos(r)*t,z:e.z+Math.sin(r)*t};if(!this.isBlocked(i.x,i.z))return i}return{x:0,z:0}}getSites(){return Array.from(this.chunks.values()).flatMap(e=>e.data.sites)}getSite(e){return e?this.getSites().find(t=>t.id===e):void 0}getEntityPosition(e){let t=Zl[e.data.speciesId];return new R(e.object.position.x,e.object.position.y+Math.min(2.3,Zm[t.model].height*.52*e.data.scale),e.object.position.z)}getTerrainMeshes(){return[...this.chunks.values()].map(e=>e.terrain)}pulse(e,t){this.pulseTime=e,this.pulseOrigin.copy(t)}focus(e){this.activeTarget=e}update(e,t,n,r,i,a){this.frame++,this.currentPosition=n,Math.hypot(this.propAnchor.x-n.x,this.propAnchor.y-n.z)>18&&(this.dirty=!0),this.updateRegion(n),this.pending.length&&this.buildNext(),this.dirty&&(this.pending.length===0||this.frame%5==0)&&this.rebuildProps();let o=t-this.pulseTime;if(this.pulseRing.visible=o>=0&&o<2,this.pulseRing.visible){let e=Math.max(1,o*a*.9);this.pulseRing.position.set(this.pulseOrigin.x,Math.max(Ku(this.seed,this.pulseOrigin.x,this.pulseOrigin.z),Wu(this.seed,this.pulseOrigin.x,this.pulseOrigin.z)?.level??-1/0)+.2,this.pulseOrigin.z),this.pulseRing.scale.setScalar(e),this.pulseRing.material.opacity=(1-o/2)*.34}this.halo.visible=!1;for(let s of this.chunks.values()){s.water&&_h(s.water.material,t,i.settings.reducedMotion);for(let c of s.entities){let{data:s,object:l,phase:u,baseY:d}=c,f=Zl[s.speciesId];l.visible=Math.hypot(l.position.x-n.x,l.position.z-n.z)<(f.category===`fauna`?80:125),f.category===`fauna`?l.visible&&ih(l,s,t,e,n,i.settings,s.id===this.activeTarget,this.wildlifeEnvironment):f.category===`flora`&&(l.rotation.z=i.settings.reducedMotion?0:Math.sin(t*.65+u)*.012);let p=Math.hypot(l.position.x-this.pulseOrigin.x,l.position.z-this.pulseOrigin.z);if(c.marker.visible=l.visible&&o>p/(a*.9)&&o<7&&p<a*1.6&&!i.scanned[s.id],c.marker.visible){c.marker.position.copy(this.getEntityPosition(c)),c.marker.position.y+=.9+(i.settings.reducedMotion?0:Math.sin(t*2+u)*.07),c.marker.quaternion.copy(r.quaternion);let e=.7+p*.018;c.marker.scale.setScalar(e)}if(s.id===this.activeTarget&&l.visible){this.halo.visible=!0,this.halo.position.copy(this.getEntityPosition(c)),this.halo.quaternion.copy(r.quaternion);let e=s.role===`landmark`?1.8:1;this.halo.scale.setScalar(e)}s.role===`landmark`&&s.siteId&&i.completedSites.includes(s.siteId)&&(l.rotation.y=s.rotation+(i.settings.reducedMotion?0:t*.06),l.position.y=d+.3+(i.settings.reducedMotion?0:Math.sin(t*.6)*.08))}}}removeChunk(e){this.group.remove(e.terrain),e.terrain.geometry.dispose(),e.roof&&(this.group.remove(e.roof),e.roof.geometry.dispose()),e.water&&(this.group.remove(e.water),e.water.geometry.dispose());for(let t of e.entities)this.group.remove(t.object,t.marker);let t=new Set(e.entities);this.entityCache=this.entityCache.filter(e=>!t.has(e))}dispose(){for(let e of this.chunks.values())this.removeChunk(e);for(let e of this.instanced)e.dispose();this.terrainMaterial.dispose(),this.roofMaterial.dispose(),this.markerGeometry.dispose(),this.markerMaterial.dispose(),this.pulseRing.geometry.dispose(),this.pulseRing.material.dispose(),this.halo.geometry.dispose(),this.halo.material.dispose(),this.scene.remove(this.group),this.chunks.clear()}};function Sh(e){let t=new ga({side:1,depthWrite:!1,uniforms:{zenith:{value:new B(`#557780`)},horizon:{value:new B(`#ebcfa2`)},time:{value:0}},vertexShader:`varying vec3 vDirection; void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`varying vec3 vDirection; uniform vec3 zenith;uniform vec3 horizon;uniform float time;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec3 d=normalize(vDirection);float h=pow(max(0.,d.y),.55);vec3 c=mix(horizon,zenith,h);float w=sin(d.x*17.+d.z*12.+time*.015)*sin(d.z*23.-d.x*5.+time*.01);float band=exp(-pow((d.y-.27)*5.,2.));float clouds=smoothstep(.28,.95,w)*band*.13;c=mix(c,vec3(.91,.91,.83),clouds);float sun=pow(max(0.,dot(d,normalize(vec3(-.55,.28,-.7)))),120.);c+=vec3(1.,.61,.24)*sun*.65;gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),n=new ni(new aa(450,32,16),t);n.frustumCulled=!1,n.renderOrder=-1,e.add(n);let r=new ni(new aa(15,32,24),new Wr({color:`#c9d4cb`,fog:!1}));e.add(r);let i=new ni(new aa(15.4,32,24),new Wr({color:`#d4e3d6`,transparent:!0,opacity:.08,fog:!1}));return e.add(i),{sky:n,material:t,moon:r,halo:i}}function Ch(e,t){let n=t.range+12,r=new Co(t.origin,t.direction,.08,n),i=new wr,a=new R,o=[],s=null,c=1/0;for(let l of e){let e=t.object(l);if(!e.visible)continue;let u=t.point(l);a.copy(u).sub(t.origin);let d=a.length(),f=!1,p=t.radius(l),m=t.height(l);if(d>n+m+p)continue;let h=d>0?a.dot(t.direction)/d:-1,g=d>=.3&&h>=(d<4?.91:.976);if(i.center.copy(e.position),i.center.y+=m*.5,i.radius=Math.hypot(p,m*.5),r.ray.intersectsSphere(i)){e.updateWorldMatrix(!0,!0),o.length=0,r.intersectObject(e,!0,o);let t=o[0];if(t)u=t.point.clone(),d=t.distance,h=1,f=!0;else if(!g)continue}else if(!g)continue;if(d>n||d<.08)continue;let _=t.canObserve(u),v=f?d*.024:1+(1-h)*150+d*.024+(t.recorded(l)?1.1:0)+(!_||d>t.range?.2:0);v<c&&(c=v,s={entry:l,point:u,distance:d,visible:_})}return s}function wh(e,t){return e.distance>t?`out-of-range`:e.visible?e.scanned?`recorded`:e.locked?`locked`:`ready`:`occluded`}function Th(e,t){return t?e.replace(/\bhold E\b/gi,e=>e[0]===`H`?`Hold Scan`:`hold Scan`).replace(/\bQ\b/g,`Pulse`):e}function Eh(e,t=!1){switch(e){case`out-of-range`:return{title:`Specimen outside scanner range`,detail:`Move closer until the target card says Hold E. Your current scanner range is shown beside the survey sensor.`,prompt:`Move closer · outside scanner range`};case`occluded`:return{title:`Clear view required`,detail:`Move around the ridge or foliage blocking the specimen. Keep it centred in the crosshair.`,prompt:`Move around the obstacle · clear view needed`};case`recorded`:return{title:`This observation is already recorded`,detail:`This individual specimen is already in your atlas. Explore for another specimen or use Q to highlight unrecorded discoveries.`,prompt:`Recorded · seek another specimen`};case`locked`:return{title:`Three clues unlock this landmark`,detail:`Hold E to record each of the three distinct clues around this site, then return and hold E on the landmark. Q helps locate unrecorded clues.`,prompt:`Record all 3 surrounding clues first`};default:return{title:`Hold the scanner until the bar fills`,detail:`Keep the specimen centred and hold E for about one second. Landmarks take a little longer.`,prompt:t?`Hold E · reveal finding`:`Hold E · record observation`}}}function Dh(e){return{title:`Field supplies use a different action`,detail:e?`Move within 5 metres, face the supply or probe, and tap Use. Scan records catalogue specimens and investigation clues.`:`Move within 5 metres, face the supply or probe, and press F. Hold E records catalogue specimens and investigation clues.`}}function Oh(e){return{title:`No catalogue specimen selected`,detail:e?`Aim at a specimen and hold Scan until the bar fills. Pulse marks unrecorded specimens; some trees, rocks and plants are scenery.`:`Aim at a specimen and hold E until the bar fills. Q marks unrecorded specimens; some trees, rocks and plants are scenery.`}}var kh=class{context=null;master=null;wind=null;drone=null;volume=.65;lastStep=0;noise=null;lastBiome=`forest`;start(){if(!this.context){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e;let t=this.context;this.master=t.createGain(),this.master.gain.value=this.volume*.38,this.master.connect(t.destination);let n=t.createBuffer(1,t.sampleRate*3,t.sampleRate),r=n.getChannelData(0),i=0;for(let e=0;e<r.length;e++)i=(i+(Math.random()*2-1)*.018)/1.018,r[e]=i*3;this.noise=n;let a=t.createBufferSource();a.buffer=n,a.loop=!0,this.wind=t.createBiquadFilter(),this.wind.type=`lowpass`,this.wind.frequency.value=470;let o=t.createGain();o.gain.value=.21,a.connect(this.wind),this.wind.connect(o),o.connect(this.master),a.start(),this.drone=t.createOscillator(),this.drone.type=`sine`,this.drone.frequency.value=73.416;let s=t.createGain();s.gain.value=.034,this.drone.connect(s),s.connect(this.master),this.drone.start();let c=t.createOscillator();c.type=`sine`,c.frequency.value=110;let l=t.createGain();l.gain.value=.011,c.connect(l),l.connect(this.master),c.start()}this.context.state===`suspended`&&this.context.resume().catch(()=>{})}setVolume(e){this.volume=e,this.context&&this.master&&this.master.gain.setTargetAtTime(e*.38,this.context.currentTime,.12)}setBiome(e){this.lastBiome!==e&&(this.lastBiome=e,this.context&&this.wind&&this.drone&&(this.wind.frequency.setTargetAtTime(e===`forest`?470:e===`desert`?260:800,this.context.currentTime,3),this.drone.frequency.setTargetAtTime(e===`forest`?73.416:e===`desert`?55:82.406,this.context.currentTime,3)))}tone(e,t=.2,n=0,r=.22){if(!this.context||!this.master)return;let i=this.context,a=i.currentTime+n,o=i.createOscillator(),s=i.createGain();o.type=`sine`,o.frequency.value=e,s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(r,a+.012),s.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(s),s.connect(this.master),o.start(a),o.stop(a+t+.02),o.onended=()=>{o.disconnect(),s.disconnect()}}pulse(){this.tone(330,.55,0,.12),this.tone(659,.5,.12,.08)}scan(){this.tone(440,.2,0,.13),this.tone(587,.25,.12,.16),this.tone(880,.45,.26,.12)}discovery(){[293.66,440,587.33,880].forEach((e,t)=>this.tone(e,.7,t*.12,.13))}activate(){[146.83,220,293.66,440,587.33].forEach((e,t)=>this.tone(e,1.4,t*.19,.16))}tick(){this.tone(570,.06,0,.08)}step(e,t,n=!1){if(e<this.lastStep&&(this.lastStep=0),!this.context||!this.master||!this.noise||e-this.lastStep<(t?.31:.46))return;this.lastStep=e;let r=this.context,i=r.createBufferSource();i.buffer=this.noise;let a=r.createBiquadFilter();a.type=`lowpass`,a.frequency.value=n?1650:this.lastBiome===`caves`?1100:680;let o=r.createGain();o.gain.setValueAtTime(n?.11:.14,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+(n?.22:.11)),i.connect(a),a.connect(o),o.connect(this.master),i.start(),i.stop(r.currentTime+(n?.23:.12)),i.onended=()=>{i.disconnect(),a.disconnect(),o.disconnect()}}},Ah=document.querySelector(`#world`),jh=document.querySelector(`#app`),Mh;try{Mh=new Gl({canvas:Ah,antialias:!0,powerPreference:`high-performance`})}catch{throw jh.innerHTML=`<main style="padding:10vh 8vw;color:#edf3df;background:#162729;min-height:100vh;font-family:system-ui"><h1>Vesper needs a 3D-capable browser.</h1><p>Enable hardware acceleration and open this page in a current desktop browser.</p><p>Your expedition save will stay on this device.</p></main>`,of(af()),_f(jh),Error(`WebGL renderer could not initialize.`)}Mh.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),Mh.setSize(innerWidth,innerHeight),Mh.outputColorSpace=Ve,Mh.toneMapping=4,Mh.toneMappingExposure=1.18,Mh.shadowMap.enabled=!0,Mh.shadowMap.type=1;var Nh=new zn;Nh.fog=new Rn(`#b5c5b0`,100,225);var Ph=new $a(68,innerWidth/innerHeight,.08,510);Nh.add(Ph);var Z=new Cp(Ph),Fh=new Va(`#d9eadf`,`#587466`,2.1);Nh.add(Fh);var Ih=new io(`#ffdfad`,3.1);Ih.position.set(-60,80,-50),Ih.castShadow=!0,Ih.shadow.mapSize.set(1024,1024),Ih.shadow.camera.left=-45,Ih.shadow.camera.right=45,Ih.shadow.camera.top=45,Ih.shadow.camera.bottom=-45,Ih.shadow.camera.near=1,Ih.shadow.camera.far=200,Ih.shadow.normalBias=.08,Ih.shadow.bias=-1e-4,Nh.add(Ih,Ih.target);var Lh=new to(`#a3d6e7`,0,65,1.6);Nh.add(Lh);var Rh=Sh(Nh),zh=$m();Ph.add(zh),zh.scale.setScalar(.78),zh.position.set(.32,-.29,-.64),zh.rotation.set(.04,-.06,0);var Bh=new kh,Vh=Gd.load(),Q=new Gd(Vh?.seed??`VESPER-01`,Vh??void 0);Q.data.settings.language=nf()??Vh?.settings.language??`en`,of(Q.data.settings.language);function Hh(){let e=Q.data.settings;return jf(e)&&e.quality===`balanced`?{...e,quality:`low`}:e}var Uh=new xh(Nh,Q.data.seed,Hh()),Wh=new Sp(Q.data.seed);Nh.add(Wh.group);var Gh=!1,Kh=!0,qh=!!Vh,Jh=!1,Yh=0,Xh=0,Zh=``,Qh=-10,$h=!1,eg=Q.data.time,tg=0,ng=0,rg=0,ig=performance.now(),ag=60,og=null,sg=null,cg=0,lg=`ready`,ug=!1,$,dg,fg=new R,pg=new R,mg=new R(-170,118,-330);function hg(e,t,n){let r=Wu(e,t,n);return Math.max(Ku(e,t,n),r?r.level-.95:-1/0)}function gg(){return 13+(Q.getLevel()-1)*3}function _g(){og=null,sg=null,cg=0,lg=`ready`,Xh=0,Zh=``,Jh=!1,Yh=0,tg=0,Qh=-10,ng=0,Z.clearKeys()}function vg(){Q.data.position={x:Z.position.x,z:Z.position.z},Q.data.heading=Z.yaw,Q.data.pitch=Z.pitch,Q.data.time=eg}function yg(){Gh&&(vg(),qh=Q.save(),ng=eg,!qh&&!$h&&($h=!0,$.notify(`Your expedition could not be saved`,`Browser storage is unavailable or full. Export your expedition from the pause menu to keep a backup.`,`error`)),qh&&($h=!1))}function bg(){document.pointerLockElement===Ah&&document.exitPointerLock()}async function xg(){Kh||(dg?.sync(Q.data.settings,$.getScreen()===`playing`||$.getScreen()===`photo`),await dg?.requestPointer())}function Sg(e=`pause`){Gh&&(Kh=!0,Z.clearKeys(),dg?.reset(),Jh=!1,Yh=0,yg(),bg(),$.setScreen(e),dg?.sync(Q.data.settings,!1))}function Cg(){Gh&&(Kh=!1,$.setScreen(`playing`),Bh.start(),xg())}function wg(e,t=!1){let n=t||!Gh&&e!==void 0&&e!==Q.data.seed;if(n){let t=(e?.trim().replace(/[<>\u0000-\u001f]/g,``)||`VSP-${Math.random().toString(36).slice(2,7).toUpperCase()}`).slice(0,64);try{localStorage.removeItem(`vesper-expedition-v1`),localStorage.removeItem(`vesper-expedition-v1-backup`)}catch{}let n={...Q.data.settings};Q=new Gd(t),Q.data.settings=n,Uh.dispose(),Wh.dispose(),Nh.remove(Wh.group),Uh=new xh(Nh,t,Hh()),Wh=new Sp(t),Nh.add(Wh.group),eg=0,_g()}(!Gh||n)&&(Z.teleport(Q.data.position,(e,t)=>hg(Q.data.seed,e,t),Q.data.heading,Q.data.pitch),Gh=!0,ug=!n),Tg({}),Cg(),yg(),$.notify(`Expedition active`,Object.keys(Q.data.discoveries).length?`Your field atlas is ready. Continue where you left off.`:jf(Q.data.settings)?`Follow the green signal ahead. Aim and hold Scan to make your first observation.`:`Follow the green signal ahead. Hold E to make your first observation.`)}function Tg(e){Q.data.settings={...Q.data.settings,...e},of(Q.data.settings.language);let t=Hh(),n={low:1,balanced:1.5,high:2},r=jf(Q.data.settings);Mh.setPixelRatio(Math.min(devicePixelRatio,n[t.quality],r?1.25:2)),Mh.shadowMap.enabled=t.quality!==`low`&&!r,Uh.setQuality(t),dg?.sync(Q.data.settings,Gh&&!Kh&&($.getScreen()===`playing`||$.getScreen()===`photo`)),Bh.setVolume(t.volume),Gh&&yg()}function Eg(e,t){let n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}function Dg(){Mh.render(Nh,Ph),Ah.toBlob(e=>{e&&(Eg(`vesper-${Math.floor(eg)}.png`,e),$.notify(`Field photograph saved`,`A clean image of the current landscape.`))},`image/png`)}$=kf(jh,{start:wg,resume:Cg,pause:()=>Sg(),scan:()=>{Kh||(Rg(!1),Yh=performance.now()+1700,Bh.start())},pulse:()=>kg(),interact:Mg,craft:Ng,useItem:Pg,discardItem:e=>{if(!Gh)return;let t=Sd(Q.data.fieldKit,e);if(!t.ok){$.notify(`No item to discard`,t.reason??`Your bag is empty.`);return}jg(),$.notify(`One item discarded`,`${cd[e].name} · backpack space freed.`)},recallBeacon:Fg,packBeacon:Ig,setWaypoint:e=>{og=e,e&&$.notify(`Waypoint placed`,`Your compass will guide you there.`)},setSettings:Tg,exportSave:()=>{yg(),Eg(`vesper-${Q.data.seed.replace(/[^a-z0-9-]/gi,`_`)}.json`,new Blob([Q.export()],{type:`application/json`})),$.notify(`Atlas exported`,`Keep this file as a backup or import it on another browser.`)},importSave:async e=>{try{if(e.size>8e6)throw Error(`Save file is too large.`);let t=Ud(await e.text());Uh.dispose(),Wh.dispose(),Nh.remove(Wh.group),Q=new Gd(t.seed,t),Uh=new xh(Nh,t.seed,Hh()),Wh=new Sp(t.seed),Nh.add(Wh.group),eg=t.time,_g(),Gh=!0,ug=!0,Z.teleport(t.position,(e,n)=>hg(t.seed,e,n),t.heading,t.pitch),Tg({}),yg(),Sg(),$.notify(`Expedition restored`,`${Object.keys(t.discoveries).length} findings restored to your field atlas.`,`success`)}catch(e){$.notify(`Could not restore this atlas`,e instanceof Error?e.message:`Please choose a valid Vesper save file.`,`error`)}},reset:()=>{Gh=!1,wg(void 0,!0)},recall:()=>{Gh&&(Z.teleport({x:0,z:0},(e,t)=>hg(Q.data.seed,e,t),0,0),og=null,yg(),$.notify(`Returned to the landing site`,`Your discoveries and research are preserved.`),Cg())},photo:()=>{Gh&&($.getScreen()===`photo`?$.setScreen(`playing`):(Kh=!1,$.setScreen(`photo`),xg()))},capture:Dg});var Og=new Co;dg=If(Ah,Z,{getSettings:()=>Q.data.settings,canPlay:()=>Gh&&!Kh&&($.getScreen()===`playing`||$.getScreen()===`photo`),pickGround:(e,t)=>{let n=Ah.getBoundingClientRect();Og.setFromCamera(new L((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),Ph);let r=Og.intersectObjects(Uh.getTerrainMeshes(),!1)[0];return!r||Math.hypot(r.point.x-Z.position.x,r.point.z-Z.position.z)>80?null:Uh.isBlocked(r.point.x,r.point.z)?($.notify(`Choose open ground`,`That spot is occupied by scenery. Try nearby ground.`),null):{x:r.point.x,z:r.point.z}},actions:{scanHeld:e=>{e?Rg():zg()},interact:Mg,pulse:kg,backpack:()=>Sg(`backpack`),map:()=>Sg(`map`),pause:()=>Sg()},onActivity:()=>Bh.start(),onNotice:(e,t)=>$.notify(e,t)}),$.setScreen(`title`),Tg({});function kg(e=!1){if(!(!Gh||!e&&Kh)){if(!e&&tg>0){$.notify(`Sensor still recharging`,`Wait until the survey sensor says Pulse ready, or use a crafted pulse cell from your backpack.`);return}Bh.start(),Bh.pulse(),Uh.pulse(eg,Z.position),tg=Math.max(3,7-Q.getLevel()*.4),$.notify(`Survey pulse`,`Nearby specimens are marked. Check the map for field supplies and damaged probes.`)}}function Ag(){let e=Wh.nearestTarget(Ph,Z.position,12);if(!e)return null;let t=Q.data.fieldKit,n=Math.hypot(e.x-Z.position.x,e.z-Z.position.z),r=jf(Q.data.settings)?`Use`:`F`,i=n<=5,a=Uh.canObserve(Ph.position,Wh.getPosition(e)),o=i?a?null:`Move around the obstacle · clear view needed`:`Move within 5 m · collect / repair`;if(e.kind===`probe`){let s=Object.entries(ud).every(([e,n])=>t.inventory[e]>=n);return{id:e.id,kind:e.kind,title:dd[e.kind],distance:n,available:s&&i&&a,detail:`Repair with 2 alloy + 1 crystal. Earn 55 research XP and locate a supply cache.`,prompt:o??(s?`${r} · repair probe`:`Needs 2 alloy + 1 crystal · collect supplies first`)}}let s=Object.entries(e.rewards),c=hd(t)+s.reduce((e,[,t])=>e+t,0)<=60;return{id:e.id,kind:e.kind,title:dd[e.kind],distance:n,available:c&&i&&a,detail:s.map(([e,t])=>`${t} × ${cd[e].name}`).join(` · `),prompt:o??(c?`${r} · collect supplies`:`Backpack full · craft, use or discard supplies`)}}function jg(){Wh.update(Z.position,Q.data.fieldKit,eg,Hh()),yg(),$.update(Hg())}function Mg(){if(!Gh||Kh)return;let e=Wh.nearestTarget(Ph,Z.position);if(!e){let e=Wh.nearestTarget(Ph,Z.position,12);$.notify(e?`Move closer to the field supply`:`Nothing in reach`,`Move within 5 metres of a field supply or damaged probe and face it. Hold E scans specimens; F collects supplies and repairs probes.`);return}if(!Uh.canObserve(Ph.position,Wh.getPosition(e))){$.notify(`Move around the obstacle`,`You need a clear view of this field supply or probe.`);return}let t=e.kind===`probe`,n=t?Cd(Q.data.fieldKit,e):bd(Q.data.fieldKit,e);if(!n.ok){$.notify(`Field action unavailable`,n.reason??`Try again.`);return}if(t){let t=Q.getLevel();Q.data.xp+=55;let n=Wh.getNodes().filter(e=>e.kind===`cache`&&!Q.data.fieldKit.collected.includes(e.id)).sort((t,n)=>Math.hypot(t.x-e.x,t.z-e.z)-Math.hypot(n.x-e.x,n.z-e.z))[0];n&&(og={x:n.x,z:n.z}),Bh.activate(),$.notify(`Survey probe restored · +55 XP`,n?`A supply cache has been marked on your map.`:`Keep exploring for new field supplies.`,`success`),Q.getLevel()>t&&$.notify(`Research level ${Q.getLevel()}`,`Scanner reach increased to ${gg()} metres.`,`success`)}else Bh.scan(),$.notify(`Supplies added to backpack`,Object.entries(e.rewards).map(([e,t])=>`${t} × ${cd[e].name}`).join(` · `),`success`);jg()}function Ng(e){if(!Gh)return;let t=xd(Q.data.fieldKit,e);if(!t.ok){$.notify(`Cannot craft yet`,t.reason??`Gather supplies.`);return}$.notify(`${ld[e].name} crafted`,`Available in your backpack.`,`success`),jg()}function Pg(e){if(Gh){if(e===`pulse-cell`){let t=Sd(Q.data.fieldKit,e);if(!t.ok){$.notify(`No pulse cell available`,t.reason??`Craft one first.`);return}jg(),Cg(),kg(!0)}else if(e===`survey-beacon`){let e={x:Z.position.x-Math.sin(Z.yaw)*2.5,z:Z.position.z-Math.cos(Z.yaw)*2.5};if([[0,0],[-.85,-.85],[-.85,.85],[.85,-.85],[.85,.85]].some(([t,n])=>Wu(Q.data.seed,e.x+t,e.z+n)||Uh.isBlocked(e.x+t,e.z+n))){$.notify(`Find clear dry ground`,`Face an open patch of land before deploying your beacon.`);return}let t=wd(Q.data.fieldKit,e);if(!t.ok){$.notify(`Beacon unavailable`,t.reason??`Try again.`);return}jg(),$.notify(`Return beacon deployed`,`It is marked on the map. Return to it from your backpack.`,`success`)}}}function Fg(){let e=Q.data.fieldKit.beacon;if(!Gh||!e)return;let t=Uh.nearbyClearPosition(e);Z.teleport(t,(e,t)=>hg(Q.data.seed,e,t),Z.yaw,0),ug=!0,og={...e},yg(),Cg(),$.notify(`Returned to your survey beacon`,`Your field camp is ready for another expedition.`,`success`)}function Ig(){let e=Q.data.fieldKit.beacon;if(!Gh||!e)return;if(Math.hypot(e.x-Z.position.x,e.z-Z.position.z)>5){$.notify(`Move closer to your beacon`,`Return to it before packing it into your backpack.`);return}let t=Td(Q.data.fieldKit);if(!t.ok){$.notify(`Cannot pack beacon`,t.reason??`Try again.`);return}og&&Math.hypot(og.x-e.x,og.z-e.z)<.1&&(og=null),jg(),$.notify(`Beacon packed`,`You can deploy it again in another location.`,`success`)}function Lg(){let e=Object.keys(Q.data.discoveries).length;if(e===0)return{title:`A first observation`,detail:`Find the luminous specimen ahead. Aim at it and hold E.`,progress:0,total:1};let t=Uh.getSites().find(e=>e.id.includes(`intro`))??Uh.getSites().find(e=>Math.hypot(e.x,e.z+35)<3);if(Q.data.completedSites.length===0){let e=t?Q.getSiteProgress(t):0;return{title:`The listening grove`,detail:e===3?`Return to the central landmark. Hold E to reveal its finding.`:`Follow the path north. Hold E to record each of the three clues around the grove, then scan its central landmark.`,progress:e,total:3}}if(Q.data.visitedBiomes.length<3)return{title:`Beyond the canopy`,detail:`Desert lies east; luminous caverns lie south. Use M to place a waypoint.`,progress:Q.data.visitedBiomes.length,total:3};let n=Object.keys(Q.data.discoveries).filter(e=>Zl[e]?.rarity===`rare`).length;return n<3?{title:`Three ecological signatures`,detail:`Investigate one landmark in each biome. Their findings are related.`,progress:n,total:3}:e<Xl.length?{title:`An atlas of elsewhere`,detail:`Seek new habitats and complete the planet’s field catalogue.`,progress:e,total:Xl.length}:{title:`The horizon remains open`,detail:`Your catalogue is complete. Keep exploring new regions and recording observations.`,progress:Q.data.visitedChunks.length,total:Q.data.visitedChunks.length+10}}function Rg(e=!0){if(!Gh||Kh||$.getScreen()!==`playing`||(Bg(0),Jh=e,sg&&lg===`ready`))return;let t=jf(Q.data.settings),n=sg?Eh(lg,sg.data.role===`landmark`):Ag()?Dh(t):Oh(t);eg-Qh>.5&&(Qh=eg,$.notify(n.title,Th(n.detail,t)))}function zg(){if(Jh&&!Kh&&Xh>0&&Xh<1){let e=Eh(`ready`);$.notify(e.title,Th(e.detail,jf(Q.data.settings)))}Jh=!1}function Bg(e){Ph.getWorldDirection(pg);let t=Ch(Uh.getEntities(),{origin:Ph.position,direction:pg,range:gg(),object:e=>e.object,point:e=>Uh.getEntityPosition(e),radius:e=>Zm[Zl[e.data.speciesId].model].radius*e.data.scale,height:e=>Zm[Zl[e.data.speciesId].model].height*e.data.scale,recorded:e=>!!Q.data.scanned[e.data.id],canObserve:e=>Uh.canObserve(Ph.position,e)}),n=Wh.nearestTarget(Ph,Z.position,12),r=!1;if(n){fg.copy(Wh.getPosition(n)).sub(Ph.position);let e=fg.length();r=e>0&&fg.dot(pg)/e>.97&&(!t||e<t.distance-.4)}let i=r?null:t?.entry??null;if(sg=i,!i){Uh.focus(``),Xh=Math.max(0,Xh-e*3),Zh=``;return}i.data.id!==Zh&&(Xh=0,Zh=i.data.id);let a=i.data,o=Uh.getSite(a.siteId),s=a.role===`landmark`&&!!o&&Q.getSiteProgress(o)<3;if(cg=t.distance,lg=wh({distance:cg,visible:t.visible,scanned:!!Q.data.scanned[a.id],locked:s},gg()),Uh.focus(lg===`ready`||lg===`locked`||lg===`recorded`?i.data.id:``),lg!==`ready`){Xh=0;return}if((Jh||performance.now()<Yh)&&!Q.data.scanned[a.id]){if(Xh+=e/(a.role===`landmark`?1.6:1.05),Xh>=1)try{let e=Q.getLevel();a.role===`landmark`&&o&&(Q.completeSite(o),Bh.activate());let t={...a,x:i.object.position.x,z:i.object.position.z},n=Q.recordScan(t,eg);if(lg=`recorded`,Xh=0,Yh=0,n.isNew){let t=Zl[a.speciesId];n.newSpecies?(Bh.discovery(),$.showDiscovery(t,n.record)):(Bh.scan(),$.notify(`Observation recorded`,`${t.name} · another habitat added to your atlas.`,`success`)),Q.getLevel()>e&&$.notify(`Research level ${Q.getLevel()}`,`Scanner reach increased to ${gg()} metres.`,`success`),yg()}}catch(e){$.notify(`Observation unavailable`,e instanceof Error?e.message:`Try again.`,`error`)}}else Xh=Math.max(0,Xh-e*2.5)}function Vg(){if(!sg)return null;let e=sg.data,t=Zl[e.speciesId],n=Uh.getSite(e.siteId),r=n?Q.getSiteProgress(n):0,i=!!Q.data.scanned[e.id],a=e.role===`landmark`&&r<3,o=Eh(lg,e.role===`landmark`),s=jf(Q.data.settings);return{id:e.id,title:t.name,subtitle:e.role===`clue`?`Investigation clue`:t.subtitle,detail:lg===`ready`?t.category===`fauna`?`${sg.object.userData.behavior??`Resting`} · ${t.insight}`:t.insight:Th(o.detail,s),distance:cg,progress:Xh,scanned:i,locked:a,clueCount:r,scanStatus:lg,prompt:Th(lg===`locked`?`${o.prompt} · ${r}/3`:o.prompt,s),color:t.color}}function Hg(){return{seed:Q.data.seed,position:{x:Z.position.x,z:Z.position.z},heading:Z.yaw,biome:cu(Q.data.seed,Z.position.x,Z.position.z),habitat:Qu(Q.data.seed,Z.position.x,Z.position.z),waterName:Wu(Q.data.seed,Z.position.x,Z.position.z)?.name??null,swimming:Z.swimming,region:lu(Q.data.seed,Z.position.x,Z.position.z),time:eg,xp:Q.data.xp,level:Q.getLevel(),discoveries:Q.data.discoveries,scannedCount:Object.keys(Q.data.scanned).length,sitesCompleted:Q.data.completedSites.length,visitedChunks:Q.data.visitedChunks,visitedBiomes:Q.data.visitedBiomes,target:Vg(),objective:Lg(),settings:Q.data.settings,saved:qh,fps:ag,waypoint:og,scannerRange:gg(),pulseCooldown:tg,hasSave:qh,fieldKit:Q.data.fieldKit,fieldTarget:Ag(),fieldMarkers:Wh.getMarkers(Z.position),touchControls:dg?.touchActive??jf(Q.data.settings),mobileDevice:Af(),mouseDestination:Z.destination}}function Ug(e){return e instanceof HTMLElement&&!!e.closest(`input, textarea, select, [contenteditable="true"]`)}window.addEventListener(`keydown`,e=>{if(!Ug(e.target)){if(e.code===`Escape`){if(e.preventDefault(),!Gh)return;$.getScreen()===`playing`||$.getScreen()===`photo`?Sg():$.getScreen()!==`title`&&Cg();return}if(Gh){if(!e.repeat&&e.code===`KeyJ`){e.preventDefault(),$.getScreen()===`journal`?Cg():Sg(`journal`);return}if(!e.repeat&&e.code===`KeyM`){e.preventDefault(),$.getScreen()===`map`?Cg():Sg(`map`);return}if(!e.repeat&&e.code===`KeyB`){e.preventDefault(),$.getScreen()===`backpack`?Cg():Sg(`backpack`);return}if(!e.repeat&&e.code===`KeyP`){e.preventDefault(),$.getScreen()===`photo`?$.setScreen(`playing`):(Kh=!1,$.setScreen(`photo`),xg());return}Kh||([`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),Z.setKey(e.code,!0),!e.repeat&&e.code===`KeyE`&&Rg(),!e.repeat&&e.code===`KeyQ`&&kg(),!e.repeat&&e.code===`KeyF`&&Mg(),!e.repeat&&e.code===`KeyR`&&(Z.teleport({x:0,z:0},(e,t)=>hg(Q.data.seed,e,t),0,0),yg(),$.notify(`Returned to the landing site`,`Your research is preserved.`)),!e.repeat&&e.code===`KeyO`&&$.getScreen()===`photo`&&Dg())}}}),window.addEventListener(`keyup`,e=>{Z.setKey(e.code,!1),e.code===`KeyE`&&zg()}),window.addEventListener(`blur`,()=>{Gh&&!Kh&&Sg()}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&Gh&&!Kh&&Sg()}),window.addEventListener(`beforeunload`,yg),document.addEventListener(`pointerlockchange`,()=>{!document.pointerLockElement&&Gh&&!Kh&&!jf(Q.data.settings)&&Mf(Q.data.settings)===`pointer-lock`&&$.getScreen()===`playing`&&Sg()}),window.addEventListener(`resize`,()=>{Mh.setSize(innerWidth,innerHeight),Ph.aspect=innerWidth/innerHeight,Ph.updateProjectionMatrix()});var Wg={forest:new B(`#b6c7b3`),desert:new B(`#d6b18a`),caves:new B(`#203744`)},Gg={forest:[new B(`#557780`),new B(`#ebcfa2`)],desert:[new B(`#74828d`),new B(`#ecc298`)],caves:[new B(`#101f2c`),new B(`#203d49`)]},Kg=cu(Q.data.seed,0,0);function qg(e){let t=Math.max(.001,(e-ig)/1e3),n=Math.min(.045,t);if(ig=e,ag=jt.lerp(ag,1/t,.025),Gh&&!Kh){eg+=n,tg=Math.max(0,tg-n),Z.update(n,(e,t)=>hg(Q.data.seed,e,t),(e,t)=>Uh.isBlocked(e,t),Q.data.settings,(e,t)=>Wu(Q.data.seed,e,t));let e=cu(Q.data.seed,Z.position.x,Z.position.z),t=`${Math.floor(Z.position.x/64)},${Math.floor(Z.position.z/64)}`;Q.data.visitedChunks.includes(t)||Q.data.visitedChunks.push(t),Q.data.visitedBiomes.includes(e)||(Q.data.visitedBiomes.push(e),e!==`forest`&&(Q.data.xp+=24),eg>2&&$.notify(`A new ecological region`,`${lu(Q.data.seed,Z.position.x,Z.position.z)}${e===`forest`?``:` · +24 research XP`}`,`success`)),e!==Kg&&(Kg=e,Bh.setBiome(e)),Bg(n),Z.moving&&Z.grounded&&Bh.step(eg,Z.sprinting,!!Wu(Q.data.seed,Z.position.x,Z.position.z)),eg-ng>10&&yg()}else if(!Gh){let t=Q.data.settings.reducedMotion?0:e*35e-6;Ph.position.set(20+Math.sin(t)*3,23+Math.sin(t*.7)*.4,36),Ph.lookAt(-8,2,-35)}let r=Gh?{x:Z.position.x,z:Z.position.z}:{x:0,z:0};if(Uh.update(Gh&&!Kh?n:0,eg,r,Ph,Q.data,gg()*2.4),Wh.update(r,Q.data.fieldKit,eg,Hh()),dg?.sync(Q.data.settings,Gh&&!Kh&&($.getScreen()===`playing`||$.getScreen()===`photo`)),ug&&Uh.settled){ug=!1;let e=Uh.nearbyClearPosition(r);Math.hypot(e.x-r.x,e.z-r.z)>.1&&(Z.teleport(e,(e,t)=>hg(Q.data.seed,e,t),Z.yaw,Z.pitch),yg(),$.notify(`A clear place to continue`,`Your saved position was inside scenery. You have been moved to nearby open ground.`))}let i=cu(Q.data.seed,r.x,r.z),a=1-Math.exp(-n*1.5),o=Nh.fog;o.color.lerp(Wg[i],a),o.near=jt.lerp(o.near,i===`caves`?18:80,a),o.far=jt.lerp(o.far,i===`caves`?115:Hh().quality===`low`?160:230,a),Ih.intensity=jt.lerp(Ih.intensity,i===`caves`?.22:i===`desert`?3.3:2.6,a),Fh.intensity=jt.lerp(Fh.intensity,i===`caves`?.72:1.9,a),Lh.intensity=jt.lerp(Lh.intensity,i===`caves`?16:0,a),Lh.position.copy(Ph.position),Lh.position.y+=2,Rh.material.uniforms.zenith.value.lerp(Gg[i][0],a),Rh.material.uniforms.horizon.value.lerp(Gg[i][1],a),Ih.position.set(r.x-60,90,r.z-50),Ih.target.position.set(r.x,0,r.z),Rh.sky.position.copy(Ph.position),Rh.moon.position.copy(Ph.position).add(mg),Rh.halo.position.copy(Rh.moon.position),Rh.material.uniforms.time.value=Q.data.settings.reducedMotion?0:Gh?eg:e*.001,Rh.moon.visible=i!==`caves`,Rh.halo.visible=i!==`caves`,zh.visible=Gh&&!Kh&&$.getScreen()!==`photo`,zh.position.y=-.29+(Q.data.settings.reducedMotion?0:Math.sin(eg*2)*.002),e-rg>90&&($.update(Hg()),rg=e),Mh.render(Nh,Ph),requestAnimationFrame(qg)}requestAnimationFrame(qg);