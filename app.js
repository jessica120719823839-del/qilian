var Ll="170";var Tu=0,vc=1,Eu=2;var Ah=1,wu=2,In=3,ii=0,At=1,Xt=2,_n=0,ns=1,xn=2,_c=3,xc=4,Au=5,Mi=100,Cu=101,Ru=102,Pu=103,Iu=104,Lu=200,Du=201,Uu=202,Nu=203,mo=204,go=205,Fu=206,Ou=207,Bu=208,zu=209,Hu=210,ku=211,Vu=212,Gu=213,Wu=214,vo=0,_o=1,xo=2,as=3,yo=4,Mo=5,So=6,bo=7,Ch=0,Xu=1,qu=2,ni=0,Dl=1,Ul=2,Nl=3,Qs=4,Yu=5,Fl=6,Ol=7;var Rh=300,os=301,ls=302,To=303,Eo=304,ha=306,Hs=1e3,Un=1001,wo=1002,Qt=1003,Zu=1004;var dr=1005;var zt=1006,Fa=1007;var Nn=1008;var fn=1009,Ph=1010,Ih=1011,ks=1012,Bl=1013,Ti=1014,Fn=1015,tn=1016,zl=1017,Hl=1018,cs=1020,Lh=35902,Dh=1021,Uh=1022,jt=1023,Nh=1024,Fh=1025,is=1026,hs=1027,ua=1028,kl=1029,Oh=1030,Vl=1031;var Gl=1033,zr=33776,Hr=33777,kr=33778,Vr=33779,Ao=35840,Co=35841,Ro=35842,Po=35843,Io=36196,Lo=37492,Do=37496,Uo=37808,No=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,Ho=37814,ko=37815,Vo=37816,Go=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Gr=36492,Zo=36494,Jo=36495,Bh=36283,$o=36284,Ko=36285,jo=36286;var Wr=2300,Qo=2301,Oa=2302,yc=2400,Mc=2401,Sc=2402;var Ju=3200,$u=3201;var Ku=0,ju=1,ei="",Ct="srgb",vs="srgb-linear",da="linear",nt="srgb";var Hi=7680;var bc=519,Qu=512,ed=513,td=514,zh=515,nd=516,id=517,sd=518,rd=519,Tc=35044,fa=35048;var Ec="300 es",On=2e3,Xr=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=1234567,Os=Math.PI/180,Vs=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Wl(i,e){return(i%e+e)%e}function ad(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function od(i,e,t){return i!==e?(t-i)/(e-i):0}function Bs(i,e,t){return(1-t)*i+t*e}function ld(i,e,t,n){return Bs(i,e,1-Math.exp(-t*n))}function cd(i,e=1){return e-Math.abs(Wl(i,e*2)-e)}function hd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ud(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fd(i,e){return i+Math.random()*(e-i)}function pd(i){return i*(.5-Math.random())}function md(i){i!==void 0&&(wc=i);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gd(i){return i*Os}function vd(i){return i*Vs}function _d(i){return(i&i-1)===0&&i!==0}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Md(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xs={DEG2RAD:Os,RAD2DEG:Vs,generateUUID:_s,clamp:wt,euclideanModulo:Wl,mapLinear:ad,inverseLerp:od,lerp:Bs,damp:ld,pingpong:cd,smoothstep:hd,smootherstep:ud,randInt:dd,randFloat:fd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:vd,isPowerOfTwo:_d,ceilPowerOfTwo:xd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Md,normalize:Ft,denormalize:es},Ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],E=s[1],T=s[4],M=s[7],L=s[2],w=s[5],A=s[8];return r[0]=a*v+o*E+l*L,r[3]=a*m+o*T+l*w,r[6]=a*d+o*M+l*A,r[1]=c*v+h*E+u*L,r[4]=c*m+h*T+u*w,r[7]=c*d+h*M+u*A,r[2]=f*v+p*E+g*L,r[5]=f*m+p*T+g*w,r[8]=f*d+p*M+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new Oe;function Hh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=Gs("canvas");return i.style.display="block",i}var Ac={};function Ns(i){i in Ac||(Ac[i]=!0,console.warn(i))}function bd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Td(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ed(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var We={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Pc=[.3127,.329],Ic=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[vs]:{primaries:Cc,whitePoint:Pc,transfer:da,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Cc,whitePoint:Pc,transfer:nt,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});var ki,el=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Gs("canvas")),ki.width=e.width,ki.height=e.height;let n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wd=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(za(s[a].image)):r.push(za(s[a]))}else r=za(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ad=0,Ht=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,s=Un,r=zt,a=Nn,o=jt,l=fn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=_s(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Rh;Ht.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,M=(p+1)/2,L=(d+1)/2,w=(h+f)/4,A=(u+v)/4,P=(g+m)/4;return T>M&&T>L?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*v,E=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let L=Math.sqrt(T),w=Math.atan2(L,d*E);m=Math.sin(m*w)/L,o=Math.sin(o*w)/L}let M=o*E;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new C,Dc=new yn,Ei=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),pr.subVectors(this.max,Ps),Vi.subVectors(e.a,Ps),Gi.subVectors(e.b,Ps),Wi.subVectors(e.c,Ps),Zn.subVectors(Gi,Vi),Jn.subVectors(Wi,Gi),pi.subVectors(Vi,Wi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!ka(t,Vi,Gi,Wi,pr)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Vi,Gi,Wi,pr))?!1:(mr.crossVectors(Zn,Jn),t=[mr.x,mr.y,mr.z],ka(t,Vi,Gi,Wi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wn=[new C,new C,new C,new C,new C,new C,new C,new C],hn=new C,fr=new Ei,Vi=new C,Gi=new C,Wi=new C,Zn=new C,Jn=new C,pi=new C,Ps=new C,pr=new C,mr=new C,mi=new C;function ka(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cd=new Ei,Is=new C,Va=new C,wi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Va)),this.expandByPoint(Is.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new C,Ga=new C,gr=new C,$n=new C,Wa=new C,vr=new C,Xa=new C,us=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ga.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Ga);let r=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=$n.dot(this.direction),l=-$n.dot(gr),c=$n.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ga).addScaledVector(gr,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){Wa.subVectors(t,e),vr.subVectors(n,e),Xa.crossVectors(Wa,vr);let a=this.direction.dot(Xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);let l=o*this.direction.dot(vr.crossVectors($n,vr));if(l<0)return null;let c=o*this.direction.dot(Wa.cross($n));if(c<0||l+c>a)return null;let h=-o*$n.dot(Xa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),a=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rd,e,Pd)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Kn.crossVectors(n,$t),Kn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Kn.crossVectors(n,$t)),Kn.normalize(),_r.crossVectors($t,Kn),s[0]=Kn.x,s[4]=_r.x,s[8]=$t.x,s[1]=Kn.y,s[5]=_r.y,s[9]=$t.y,s[2]=Kn.z,s[6]=_r.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],T=n[7],M=n[11],L=n[15],w=s[0],A=s[4],P=s[8],S=s[12],y=s[1],R=s[5],H=s[9],z=s[13],G=s[2],J=s[6],W=s[10],ee=s[14],V=s[3],re=s[7],de=s[11],be=s[15];return r[0]=a*w+o*y+l*G+c*V,r[4]=a*A+o*R+l*J+c*re,r[8]=a*P+o*H+l*W+c*de,r[12]=a*S+o*z+l*ee+c*be,r[1]=h*w+u*y+f*G+p*V,r[5]=h*A+u*R+f*J+p*re,r[9]=h*P+u*H+f*W+p*de,r[13]=h*S+u*z+f*ee+p*be,r[2]=g*w+v*y+m*G+d*V,r[6]=g*A+v*R+m*J+d*re,r[10]=g*P+v*H+m*W+d*de,r[14]=g*S+v*z+m*ee+d*be,r[3]=E*w+T*y+M*G+L*V,r[7]=E*A+T*R+M*J+L*re,r[11]=E*P+T*H+M*W+L*de,r[15]=E*S+T*z+M*ee+L*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],E=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,T=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,M=h*v*c-g*u*c+g*o*p-a*v*p-h*o*d+a*u*d,L=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,w=t*E+n*T+s*M+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=E*A,e[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*A,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*A,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*A,e[4]=T*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*A,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*A,e[8]=M*A,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*d-t*u*d)*A,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*d+t*o*d)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*A,e[12]=L*A,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,E=l*c,T=l*h,M=l*u,L=n.x,w=n.y,A=n.z;return s[0]=(1-(v+d))*L,s[1]=(p+M)*L,s[2]=(g-T)*L,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+T)*A,s[9]=(m-E)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);let c=1/r,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===On)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*c,p=(n+s)*h,g,v;if(o===On)g=(a+r)*u,v=-2*u;else if(o===Xr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xi=new C,un=new mt,Rd=new C(0,0,0),Pd=new C(1,1,1),Kn=new C,_r=new C,$t=new C,Uc=new mt,Nc=new yn,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Id=0,Fc=new C,qi=new yn,Cn=new mt,xr=new C,Ls=new C,Ld=new C,Dd=new yn,Oc=new C(1,0,0),Bc=new C(0,1,0),zc=new C(0,0,1),Hc={type:"added"},Ud={type:"removed"},Yi={type:"childadded",child:null},qa={type:"childremoved",child:null},en=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new zn,n=new yn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Oe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ls,xr,this.up):Cn.lookAt(xr,Ls,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Cn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ud),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};en.DEFAULT_UP=new C(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new C,Rn=new C,Ya=new C,Pn=new C,Zi=new C,Ji=new C,kc=new C,Za=new C,Ja=new C,$a=new C,Ka=new pt,ja=new pt,Qa=new pt,Si=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Rn.subVectors(n,t),Ya.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Rn),l=dn.dot(Ya),c=Rn.dot(Rn),h=Rn.dot(Ya),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ka.setScalar(0),ja.setScalar(0),Qa.setScalar(0),Ka.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ka,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(Qa,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Rn.subVectors(e,t),dn.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),dn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Zi.subVectors(s,n),Ji.subVectors(r,n),Za.subVectors(e,n);let l=Zi.dot(Za),c=Ji.dot(Za);if(l<=0&&c<=0)return t.copy(n);Ja.subVectors(e,s);let h=Zi.dot(Ja),u=Ji.dot(Ja);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Zi,a);$a.subVectors(e,r);let p=Zi.dot($a),g=Ji.dot($a);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ji,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return kc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(kc,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Zi,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Wl(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eo(a,r,e+1/3),this.g=eo(a,r,e),this.b=eo(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return We.fromWorkingColorSpace(Lt.copy(this),e),Math.round(wt(Lt.r*255,0,255))*65536+Math.round(wt(Lt.g*255,0,255))*256+Math.round(wt(Lt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ct){We.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,s=Lt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(yr);let n=Bs(jn.h,yr.h,t),s=Bs(jn.s,yr.s,t),r=Bs(jn.l,yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ee;Ee.NAMES=kh;var Nd=0,ri=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=_s(),this.name="",this.blending=ns,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Hn=class extends ri{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dn=Fd();function Fd(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Od(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=wt(i,-65504,65504),Dn.floatView[0]=i;let e=Dn.uint32View[0],t=e>>23&511;return Dn.baseTable[t]+((e&8388607)>>Dn.shiftTable[t])}function Bd(i){let e=i>>10;return Dn.uint32View[0]=Dn.mantissaTable[Dn.offsetTable[e]+(i&1023)]+Dn.exponentTable[e],Dn.floatView[0]}var Vh={toHalfFloat:Od,fromHalfFloat:Bd},Mt=new C,Mr=new Ae,St=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}};var Zr=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},zd=0,an=new mt,to=new en,$i=new C,Kt=new Ei,Ds=new Ei,Et=new C,vt=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?Jr:Zr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Kt.min,Ds.min),Kt.expandByPoint(Et),Et.addVectors(Kt.max,Ds.max),Kt.expandByPoint(Et)):(Kt.expandByPoint(Ds.min),Kt.expandByPoint(Ds.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Et.add($i)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,f=new Ae,p=new Ae,g=new Ae,v=new C,m=new C;function d(P,S,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(v),o[S].add(v),o[y].add(v),l[P].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,S=E.length;P<S;++P){let y=E[P],R=y.start,H=y.count;for(let z=R,G=R+H;z<G;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let T=new C,M=new C,L=new C,w=new C;function A(P){L.fromBufferAttribute(s,P),w.copy(L);let S=o[P];T.copy(S),T.sub(L.multiplyScalar(L.dot(S))).normalize(),M.crossVectors(w,S);let R=M.dot(l[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,R)}for(let P=0,S=E.length;P<S;++P){let y=E[P],R=y.start,H=y.count;for(let z=R,G=R+H;z<G;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new St(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vc=new mt,gi=new us,Sr=new wi,Gc=new C,br=new C,Tr=new C,Er=new C,no=new C,wr=new C,Wc=new C,Ar=new C,ut=class extends en{constructor(e=new vt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(no.fromBufferAttribute(u,e),a?wr.addScaledVector(no,h):wr.addScaledVector(no.sub(t),h))}t.add(wr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Sr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Sr,Gc)===null||gi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Vc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,L=T;M<L;M+=3){let w=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);s=Cr(this,d,e,n,c,h,u,w,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Cr(this,a,e,n,c,h,u,E,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,L=T;M<L;M+=3){let w=M,A=M+1,P=M+2;s=Cr(this,d,e,n,c,h,u,w,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=m,T=m+1,M=m+2;s=Cr(this,a,e,n,c,h,u,E,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Hd(i,e,t,n,s,r,a,o){let l;if(e.side===At?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:i}}function Cr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,br),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Er);let h=Hd(i,e,t,n,br,Tr,Er,Wc);if(h){let u=new C;Si.getBarycoord(Wc,br,Tr,Er,u),s&&(h.uv=Si.getInterpolatedAttribute(s,o,l,c,u,new Ae)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,l,c,u,new Ae)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new C,materialIndex:0};Si.getNormal(br,Tr,Er,f.normal),h.face=f,h.barycoord=u}return h}var Xs=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(v,m,d,E,T,M,L,w,A,P,S){let y=M/A,R=L/P,H=M/2,z=L/2,G=w/2,J=A+1,W=P+1,ee=0,V=0,re=new C;for(let de=0;de<W;de++){let be=de*R-z;for(let ke=0;ke<J;ke++){let st=ke*y-H;re[v]=st*E,re[m]=be*T,re[d]=G,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[d]=w>0?1:-1,h.push(re.x,re.y,re.z),u.push(ke/A),u.push(1-de/P),ee+=1}}for(let de=0;de<P;de++)for(let be=0;be<A;be++){let ke=f+be+J*de,st=f+be+J*(de+1),q=f+(be+1)+J*(de+1),te=f+(be+1)+J*de;l.push(ke,st,te),l.push(st,q,te),V+=6}o.addGroup(p,V,S),p+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){let e={};for(let t=0;t<i.length;t++){let n=ds(i[t]);for(let s in n)e[s]=n[s]}return e}function kd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var oi={clone:ds,merge:Ot},Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends ri{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$r=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new C,Xc=new Ae,qc=new Ae,Bt=class extends $r{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,qc),t.subVectors(qc,Xc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ki=-90,ji=1,il=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Ki,ji,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Ki,ji,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Ki,ji,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Ki,ji,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Ki,ji,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Ki,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Kr=class extends Ht{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sl=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xs(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:_n});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=zt),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},io=new C,Wd=new C,Xd=new Oe,Ln=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=io.subVectors(n,t).cross(Wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xd.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new wi,Rr=new C,jr=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],T=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-d).normalize(),n[1].setComponents(l+r,f+c,m+p,M+d).normalize(),n[2].setComponents(l+a,f+h,m+g,M+E).normalize(),n[3].setComponents(l-a,f-h,m-g,M-E).normalize(),n[4].setComponents(l-o,f-u,m-v,M-T).normalize(),t===On)n[5].setComponents(l+o,f+u,m+v,M+T).normalize();else if(t===Xr)n[5].setComponents(o,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ai=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let E=d*f-a;for(let T=0;T<c;T++){let M=T*u-r;g.push(M,-E,0),v.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let T=E+c*d,M=E+c*(d+1),L=E+1+c*(d+1),w=E+1+c*d;p.push(T,M,w),p.push(M,L,w)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,xm=`#define TOON
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
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Em=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:$d,alphatest_fragment:Kd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:vf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:yf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Tf,colorspace_pars_fragment:Ef,envmap_fragment:wf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:kf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:xp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Tp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:Hp,transmission_fragment:kp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:$p,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:vm,meshphysical_frag:_m,meshtoon_vert:xm,meshtoon_frag:ym,points_vert:Mm,points_frag:Sm,shadow_vert:bm,shadow_frag:Tm,sprite_vert:Em,sprite_frag:wm},ie={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},vn={basic:{uniforms:Ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ot([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ot([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ot([ie.points,ie.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ot([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ot([ie.common,ie.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ot([ie.sprite,ie.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ot([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ot([ie.lights,ie.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};vn.physical={uniforms:Ot([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Pr={r:0,b:0,g:0},_i=new zn,Am=new mt;function Cm(i,e,t,n,s,r,a){let o=new Ee(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function v(E){let T=!1,M=g(E);M===null?d(o,l):M&&M.isColor&&(d(M,1),T=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,T){let M=g(T);M&&(M.isCubeTexture||M.mapping===ha)?(h===void 0&&(h=new ut(new Xs(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ds(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(T.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(_i)),h.material.toneMapped=We.getTransfer(M.colorSpace)!==nt,(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ut(new ai(2,2),new je({name:"BackgroundMaterial",uniforms:ds(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=We.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,T){E.getRGB(Pr,Gh(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:v,addToRenderList:m}}function Rm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,R,H,z,G){let J=!1,W=u(z,H,R);r!==W&&(r=W,c(r.object)),J=p(y,z,H,G),J&&g(y,z,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(y,R,H,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,H){let z=H.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let J=G[R.id];J===void 0&&(J={},G[R.id]=J);let W=J[z];return W===void 0&&(W=f(l()),J[z]=W),W}function f(y){let R=[],H=[],z=[];for(let G=0;G<t;G++)R[G]=0,H[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,R,H,z){let G=r.attributes,J=R.attributes,W=0,ee=H.getAttributes();for(let V in ee)if(ee[V].location>=0){let de=G[V],be=J[V];if(be===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(y,R,H,z){let G={},J=R.attributes,W=0,ee=H.getAttributes();for(let V in ee)if(ee[V].location>=0){let de=J[V];de===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));let be={};be.attribute=de,de&&de.data&&(be.data=de.data),G[V]=be,W++}r.attributes=G,r.attributesNum=W,r.index=z}function v(){let y=r.newAttributes;for(let R=0,H=y.length;R<H;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){let H=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;H[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),G[y]!==R&&(i.vertexAttribDivisor(y,R),G[y]=R)}function E(){let y=r.newAttributes,R=r.enabledAttributes;for(let H=0,z=R.length;H<z;H++)R[H]!==y[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function T(y,R,H,z,G,J,W){W===!0?i.vertexAttribIPointer(y,R,H,G,J):i.vertexAttribPointer(y,R,H,z,G,J)}function M(y,R,H,z){v();let G=z.attributes,J=H.getAttributes(),W=R.defaultAttributeValues;for(let ee in J){let V=J[ee];if(V.location>=0){let re=G[ee];if(re===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){let de=re.normalized,be=re.itemSize,ke=e.get(re);if(ke===void 0)continue;let st=ke.buffer,q=ke.type,te=ke.bytesPerElement,xe=q===i.INT||q===i.UNSIGNED_INT||re.gpuType===Bl;if(re.isInterleavedBufferAttribute){let ae=re.data,Re=ae.stride,Ue=re.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)d(V.location+Ve,ae.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ve=0;Ve<V.locationSize;Ve++)T(V.location+Ve,be/V.locationSize,q,de,Re*te,(Ue+be/V.locationSize*Ve)*te,xe)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)d(V.location+ae,re.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ae=0;ae<V.locationSize;ae++)T(V.location+ae,be/V.locationSize,q,de,be*te,be/V.locationSize*ae*te,xe)}}else if(W!==void 0){let de=W[ee];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(V.location,de);break;case 3:i.vertexAttrib3fv(V.location,de);break;case 4:i.vertexAttrib4fv(V.location,de);break;default:i.vertexAttrib1fv(V.location,de)}}}}E()}function L(){P();for(let y in n){let R=n[y];for(let H in R){let z=R[H];for(let G in z)h(z[G].object),delete z[G];delete R[H]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let H in R){let z=R[H];for(let G in z)h(z[G].object),delete z[G];delete R[H]}delete n[y.id]}function A(y){for(let R in n){let H=n[R];if(H[y.id]===void 0)continue;let z=H[y.id];for(let G in z)h(z[G].object),delete z[G];delete H[y.id]}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Pm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Im(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==jt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:L,maxSamples:w}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,T=E*4,M=d.clippingState||null;l.value=M,M=h(g,f,T,p);for(let L=0;L!==T;++L)M[L]=t[L];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,M=p;T!==v;++T,M+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Dm(i){let e=new WeakMap;function t(a,o){return o===To?a.mapping=os:o===Eo&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===To||o===Eo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new sl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var qs=class extends $r{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ts=4,Yc=[.125,.215,.35,.446,.526,.582],bi=20,so=new qs,Zc=new Ee,ro=null,ao=0,oo=0,lo=!1,yi=(1+Math.sqrt(5))/2,Qi=1/yi,Jc=[new C(-yi,Qi,0),new C(yi,Qi,0),new C(-Qi,0,yi),new C(Qi,0,yi),new C(0,yi,-Qi),new C(0,yi,Qi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,ao,oo),this._renderer.xr.enabled=lo,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:tn,format:jt,colorSpace:vs,depthBuffer:!1},s=$c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,e,t)}return s}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,s){let o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zc),h.toneMapping=ni,h.autoClear=!1;let p=new Hn({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new ut(new Xs,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Zc),v=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let T=this._cubeSize;Ir(s,E*T,d>2?T:0,T,T),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===os||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jc[(s-r-1)%Jc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let d=[],E=0;for(let A=0;A<bi;++A){let P=A/v,S=Math.exp(-P*P/2);d.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;let M=this._sizeLods[s],L=3*M*(s>T-ts?s-T+ts:0),w=4*(this._cubeSize-M);Ir(t,L,w,3*M,2*M),l.setRenderTarget(t),l.render(u,so)}};function Um(i){let e=[],t=[],n=[],s=i,r=i-ts+1+Yc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ts?l=Yc[a-i+ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),T=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,P=w>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(S,v*g*w),T.set(f,m*g*w);let y=[w,w,w,w,w,w];M.set(y,d*g*w)}let L=new vt;L.setAttribute("position",new St(E,v)),L.setAttribute("uv",new St(T,m)),L.setAttribute("faceIndex",new St(M,d)),e.push(L),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $c(i,e,t){let n=new kt(i,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nm(i,e,t){let n=new Float32Array(bi),s=new C(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Kc(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function jc(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===To||l===Eo,h=l===os||l===ls;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Qr(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Qr(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let T=0,M=E.length;T<M;T+=3){let L=E[T+0],w=E[T+1],A=E[T+2];f.push(L,w,w,A,A,L)}}else if(g!==void 0){let E=g.array;v=g.version;for(let T=0,M=E.length/3-1;T<M;T+=3){let L=T+0,w=T+1,A=T+2;f.push(L,w,w,A,A,L)}}else return;let m=new(Hh(f)?Jr:Zr)(f,1);m.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function km(i,e,t){let n=new WeakMap,s=new pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let M=o.attributes.position.count*T,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*L*4*u),A=new Yr(w,M,L,u);A.type=Fn,A.needsUpdate=!0;let P=T*4;for(let y=0;y<u;y++){let R=m[y],H=d[y],z=E[y],G=M*L*4*y;for(let J=0;J<R.count;J++){let W=J*P;p===!0&&(s.fromBufferAttribute(R,J),w[G+W+0]=s.x,w[G+W+1]=s.y,w[G+W+2]=s.z,w[G+W+3]=0),g===!0&&(s.fromBufferAttribute(H,J),w[G+W+4]=s.x,w[G+W+5]=s.y,w[G+W+6]=s.z,w[G+W+7]=0),v===!0&&(s.fromBufferAttribute(z,J),w[G+W+8]=s.x,w[G+W+9]=s.y,w[G+W+10]=s.z,w[G+W+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Ae(M,L)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ea=class extends Ht{constructor(e,t,n,s,r,a,o,l,c,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ti),n===void 0&&h===hs&&(n=cs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xh=new Ht,Qc=new ea(1,1),qh=new Yr,Yh=new nl,Zh=new Kr,eh=[],th=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pa(i,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),Tt(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),Tt(t,n)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),Tt(t,n)}}function $m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=zh,r=Qc):r=Xh,t.setTexture2D(e||r,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yh,s)}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zh,s)}function og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qh,s)}function lg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,e){i.uniform1fv(this.addr,e)}function hg(i,e){let t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){let t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function dg(i,e){let t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pg(i,e){let t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mg(i,e){let t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gg(i,e){i.uniform1iv(this.addr,e)}function vg(i,e){i.uniform2iv(this.addr,e)}function _g(i,e){i.uniform3iv(this.addr,e)}function xg(i,e){i.uniform4iv(this.addr,e)}function yg(i,e){i.uniform1uiv(this.addr,e)}function Mg(i,e){i.uniform2uiv(this.addr,e)}function Sg(i,e){i.uniform3uiv(this.addr,e)}function bg(i,e){i.uniform4uiv(this.addr,e)}function Tg(i,e,t){let n=this.cache,s=e.length,r=pa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xh,r[a])}function Eg(i,e,t){let n=this.cache,s=e.length,r=pa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yh,r[a])}function wg(i,e,t){let n=this.cache,s=e.length,r=pa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zh,r[a])}function Ag(i,e,t){let n=this.cache,s=e.length,r=pa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qh,r[a])}function Cg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return Mg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}var rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}},al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},co=/(\w+)(\])?(\[|\.)?/g;function rh(i,e){i.seq.push(e),i.map[e.id]=e}function Rg(i,e,t){let n=i.name,s=n.length;for(co.lastIndex=0;;){let r=co.exec(n),a=co.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rh(t,c===void 0?new rl(o,i,e):new al(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ol(o),rh(t,u)),t=u}}}var rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Rg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ah(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pg=37297,Ig=0;function Lg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var oh=new Oe;function Dg(i){We._getMatrix(oh,We.workingColorSpace,i);let e=`mat3( ${oh.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(e),a)}else return s}function Ug(i,e){let t=Dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ng(i,e){let t;switch(e){case Dl:t="Linear";break;case Ul:t="Reinhard";break;case Nl:t="Cineon";break;case Qs:t="ACESFilmic";break;case Fl:t="AgX";break;case Ol:t="Neutral";break;case Yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lr=new C;function Fg(){We.getLuminanceCoefficients(Lr);let i=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Bg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fs(i){return i!==""}function ch(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(Hg,Vg)}var kg=new Map;function Vg(i,e){let t=ze[e];if(t===void 0){let n=kg.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(Gg,Wg)}function Wg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Zg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Xu:e="ENVMAP_BLENDING_MIX";break;case qu:e="ENVMAP_BLENDING_ADD";break}return e}function Jg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $g(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xg(t),c=qg(t),h=Yg(t),u=Zg(t),f=Jg(t),p=Og(t),g=Bg(r),v=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),d.length>0&&(d+=`
`)):(m=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),d=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ze.tonemapping_pars_fragment:"",t.toneMapping!==ni?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=ll(a),a=ch(a,t),a=hh(a,t),o=ll(o),o=ch(o,t),o=hh(o,t),a=uh(a),o=uh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=E+m+a,M=E+d+o,L=ah(s,s.VERTEX_SHADER,T),w=ah(s,s.FRAGMENT_SHADER,M);s.attachShader(v,L),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(w).trim(),J=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,w);else{let ee=lh(s,L,"vertex"),V=lh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+ee+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||G==="")&&(W=!1);W&&(R.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(L),s.deleteShader(w),P=new rs(s,v),S=zg(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Pg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=w,this}var Kg=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hl(e),t.set(e,n)),n}},hl=class{constructor(e){this.id=Kg++,this.code=e,this.usedTimes=0}};function jg(i,e,t,n,s,r,a){let o=new Ws,l=new cl,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,H,z){let G=H.fog,J=z.geometry,W=S.isMeshStandardMaterial?H.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=ee&&ee.mapping===ha?ee.image.height:null,re=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,be=de!==void 0?de.length:0,ke=0;J.morphAttributes.position!==void 0&&(ke=1),J.morphAttributes.normal!==void 0&&(ke=2),J.morphAttributes.color!==void 0&&(ke=3);let st,q,te,xe;if(re){let it=vn[re];st=it.vertexShader,q=it.fragmentShader}else st=S.vertexShader,q=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);let ae=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Ve=z.isBatchedMesh===!0,ft=!!S.map,Je=!!S.matcap,_t=!!ee,N=!!S.aoMap,sn=!!S.lightMap,Xe=!!S.bumpMap,qe=!!S.normalMap,we=!!S.displacementMap,lt=!!S.emissiveMap,Te=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,F=S.clearcoat>0,Y=S.dispersion>0,$=S.iridescence>0,X=S.sheen>0,ye=S.transmission>0,oe=_&&!!S.anisotropyMap,fe=F&&!!S.clearcoatMap,$e=F&&!!S.clearcoatNormalMap,j=F&&!!S.clearcoatRoughnessMap,pe=$&&!!S.iridescenceMap,Ce=$&&!!S.iridescenceThicknessMap,Pe=X&&!!S.sheenColorMap,me=X&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Be=!!S.specularColorMap,at=!!S.specularIntensityMap,I=ye&&!!S.transmissionMap,se=ye&&!!S.thicknessMap,k=!!S.gradientMap,Z=!!S.alphaMap,he=S.alphaTest>0,le=!!S.alphaHash,Ne=!!S.extensions,gt=ni;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(gt=i.toneMapping);let Pt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:vs,alphaToCoverage:!!S.alphaToCoverage,map:ft,matcap:Je,envMap:_t,envMapMode:_t&&ee.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:sn,bumpMap:Xe,normalMap:qe,displacementMap:f&&we,emissiveMap:lt,normalMapObjectSpace:qe&&S.normalMapType===ju,normalMapTangentSpace:qe&&S.normalMapType===Ku,metalnessMap:Te,roughnessMap:b,anisotropy:_,anisotropyMap:oe,clearcoat:F,clearcoatMap:fe,clearcoatNormalMap:$e,clearcoatRoughnessMap:j,dispersion:Y,iridescence:$,iridescenceMap:pe,iridescenceThicknessMap:Ce,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:Ye,specularColorMap:Be,specularIntensityMap:at,transmission:ye,transmissionMap:I,thicknessMap:se,gradientMap:k,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:le,combine:S.combine,mapUv:ft&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:sn&&v(S.lightMap.channel),bumpMapUv:Xe&&v(S.bumpMap.channel),normalMapUv:qe&&v(S.normalMap.channel),displacementMapUv:we&&v(S.displacementMap.channel),emissiveMapUv:lt&&v(S.emissiveMap.channel),metalnessMapUv:Te&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:oe&&v(S.anisotropyMap.channel),clearcoatMapUv:fe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(S.sheenRoughnessMap.channel),specularMapUv:Ye&&v(S.specularMap.channel),specularColorMapUv:Be&&v(S.specularColorMap.channel),specularIntensityMapUv:at&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:se&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(qe||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(ft||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:ft&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:lt&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===At,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function d(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(y,S),T(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function T(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){let y=g[S.type],R;if(y){let H=vn[y];R=oi.clone(H.uniforms)}else R=S.uniforms;return R}function L(S,y){let R;for(let H=0,z=h.length;H<z;H++){let G=h[H];if(G.cacheKey===y){R=G,++R.usedTimes;break}}return R===void 0&&(R=new $g(i,y,S,r),h.push(R)),R}function w(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function Qg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function e0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ph(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,f,p,g,v,m){let d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,v,m){let d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||e0),n.length>1&&n.sort(f||fh),s.length>1&&s.sort(f||fh)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function t0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ph,i.set(n,[a])):s>=r.length?(a=new ph,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function n0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function i0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var s0=0;function r0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a0(i){let e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new mt,a=new mt;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,T=0,M=0,L=0,w=0,A=0;c.sort(r0);for(let S=0,y=c.length;S<y;S++){let R=c[S],H=R.color,z=R.intensity,G=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*z,u+=H.g*z,f+=H.b*z;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],z);A++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=W,p++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[v]=W;let ee=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,ee.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=ee.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=J,M++}v++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let ee=R.shadow,V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=W,g++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(z),W.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=A,n.version=s0++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let T=c[d];if(T.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(T.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function mh(i){let e=new a0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function o0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mh(i),e.set(s,[o])):r>=a.length?(o=new mh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ul=class extends ri{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends ri{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h0(i,e,t){let n=new jr,s=new Ae,r=new Ae,a=new pt,o=new ul({depthPacking:$u}),l=new dl,c={},h=t.maxTextureSize,u={[ii]:At,[At]:ii,[Xt]:Xt},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let d=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(_n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=d!==In&&this.type===In,G=d===In&&this.type!==In;for(let J=0,W=w.length;J<W;J++){let ee=w[J],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||z===!0||G===!0){let be=this.type!==In?{minFilter:Qt,magFilter:Qt}:{};V.map!==null&&V.map.dispose(),V.map=new kt(s.x,s.y,be),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let de=V.getViewportCount();for(let be=0;be<de;be++){let ke=V.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),H.viewport(a),V.updateMatrices(ee,be),n=V.getFrustum(),M(A,P,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===In&&E(V,P),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function E(w,A){let P=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kt(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,P,p,v,null)}function T(w,A,P,S){let y=null,R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=y.uuid,z=A.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let J=G[z];J===void 0&&(J=y.clone(),G[z]=J,A.addEventListener("dispose",L)),y=J}if(y.visible=A.visible,y.wireframe=A.wireframe,S===In?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=i.properties.get(y);H.light=P}return y}function M(w,A,P,S,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===In)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let z=e.update(w),G=w.material;if(Array.isArray(G)){let J=z.groups;for(let W=0,ee=J.length;W<ee;W++){let V=J[W],re=G[V.materialIndex];if(re&&re.visible){let de=T(w,re,S,y);w.onBeforeShadow(i,w,A,P,z,de,V),i.renderBufferDirect(P,null,z,de,w,V),w.onAfterShadow(i,w,A,P,z,de,V)}}}else if(G.visible){let J=T(w,G,S,y);w.onBeforeShadow(i,w,A,P,z,J,null),i.renderBufferDirect(P,null,z,J,w,null),w.onAfterShadow(i,w,A,P,z,J,null)}}let H=w.children;for(let z=0,G=H.length;z<G;z++)M(H[z],A,P,S,y)}function L(w){w.target.removeEventListener("dispose",L);for(let P in c){let S=c[P],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var u0={[vo]:_o,[xo]:So,[yo]:bo,[as]:Mo,[_o]:vo,[So]:xo,[bo]:yo,[Mo]:as};function d0(i,e){function t(){let I=!1,se=new pt,k=null,Z=new pt(0,0,0,0);return{setMask:function(he){k!==he&&!I&&(i.colorMask(he,he,he,he),k=he)},setLocked:function(he){I=he},setClear:function(he,le,Ne,gt,Pt){Pt===!0&&(he*=gt,le*=gt,Ne*=gt),se.set(he,le,Ne,gt),Z.equals(se)===!1&&(i.clearColor(he,le,Ne,gt),Z.copy(se))},reset:function(){I=!1,k=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,se=!1,k=null,Z=null,he=null;return{setReversed:function(le){if(se!==le){let Ne=e.get("EXT_clip_control");se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let gt=he;he=null,this.setClear(gt)}se=le},getReversed:function(){return se},setTest:function(le){le?ae(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(le){k!==le&&!I&&(i.depthMask(le),k=le)},setFunc:function(le){if(se&&(le=u0[le]),Z!==le){switch(le){case vo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case So:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=le}},setLocked:function(le){I=le},setClear:function(le){he!==le&&(se&&(le=1-le),i.clearDepth(le),he=le)},reset:function(){I=!1,k=null,Z=null,he=null,se=!1}}}function s(){let I=!1,se=null,k=null,Z=null,he=null,le=null,Ne=null,gt=null,Pt=null;return{setTest:function(it){I||(it?ae(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(it){se!==it&&!I&&(i.stencilMask(it),se=it)},setFunc:function(it,ln,Tn){(k!==it||Z!==ln||he!==Tn)&&(i.stencilFunc(it,ln,Tn),k=it,Z=ln,he=Tn)},setOp:function(it,ln,Tn){(le!==it||Ne!==ln||gt!==Tn)&&(i.stencilOp(it,ln,Tn),le=it,Ne=ln,gt=Tn)},setLocked:function(it){I=it},setClear:function(it){Pt!==it&&(i.clearStencil(it),Pt=it)},reset:function(){I=!1,se=null,k=null,Z=null,he=null,le=null,Ne=null,gt=null,Pt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,T=null,M=null,L=null,w=null,A=new Ee(0,0,0),P=0,S=!1,y=null,R=null,H=null,z=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ee>=2);let re=null,de={},be=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),st=new pt().fromArray(be),q=new pt().fromArray(ke);function te(I,se,k,Z){let he=new Uint8Array(4),le=i.createTexture();i.bindTexture(I,le),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<k;Ne++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(se+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return le}let xe={};xe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(as),Xe(!1),qe(vc),ae(i.CULL_FACE),N(_n);function ae(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Re(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ue(I,se){return u[I]!==se?(i.bindFramebuffer(I,se),u[I]=se,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ve(I,se){let k=p,Z=!1;if(I){k=f.get(se),k===void 0&&(k=[],f.set(se,k));let he=I.textures;if(k.length!==he.length||k[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ne=he.length;le<Ne;le++)k[le]=i.COLOR_ATTACHMENT0+le;k.length=he.length,Z=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,Z=!0);Z&&i.drawBuffers(k)}function ft(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let Je={[Mi]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};Je[Pu]=i.MIN,Je[Iu]=i.MAX;let _t={[Lu]:i.ZERO,[Du]:i.ONE,[Uu]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,se,k,Z,he,le,Ne,gt,Pt,it){if(I===_n){v===!0&&(Re(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),I!==Au){if(I!==m||it!==S){if((d!==Mi||M!==Mi)&&(i.blendEquation(i.FUNC_ADD),d=Mi,M=Mi),it)switch(I){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xn:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,L=null,w=null,A.set(0,0,0),P=0,m=I,S=it}return}he=he||se,le=le||k,Ne=Ne||Z,(se!==d||he!==M)&&(i.blendEquationSeparate(Je[se],Je[he]),d=se,M=he),(k!==E||Z!==T||le!==L||Ne!==w)&&(i.blendFuncSeparate(_t[k],_t[Z],_t[le],_t[Ne]),E=k,T=Z,L=le,w=Ne),(gt.equals(A)===!1||Pt!==P)&&(i.blendColor(gt.r,gt.g,gt.b,Pt),A.copy(gt),P=Pt),m=I,S=!1}function sn(I,se){I.side===Xt?Re(i.CULL_FACE):ae(i.CULL_FACE);let k=I.side===At;se&&(k=!k),Xe(k),I.blending===ns&&I.transparent===!1?N(_n):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function qe(I){I!==Tu?(ae(i.CULL_FACE),I!==R&&(I===vc?i.cullFace(i.BACK):I===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),R=I}function we(I){I!==H&&(W&&i.lineWidth(I),H=I)}function lt(I,se,k){I?(ae(i.POLYGON_OFFSET_FILL),(z!==se||G!==k)&&(i.polygonOffset(se,k),z=se,G=k)):Re(i.POLYGON_OFFSET_FILL)}function Te(I){I?ae(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+J-1),re!==I&&(i.activeTexture(I),re=I)}function _(I,se,k){k===void 0&&(re===null?k=i.TEXTURE0+J-1:k=re);let Z=de[k];Z===void 0&&(Z={type:void 0,texture:void 0},de[k]=Z),(Z.type!==I||Z.texture!==se)&&(re!==k&&(i.activeTexture(k),re=k),i.bindTexture(I,se||xe[I]),Z.type=I,Z.texture=se)}function F(){let I=de[re];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){st.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function me(I){q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Ye(I,se){let k=c.get(se);k===void 0&&(k=new WeakMap,c.set(se,k));let Z=k.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(se,I.name),k.set(I,Z))}function Be(I,se){let Z=c.get(se).get(I);l.get(se)!==Z&&(i.uniformBlockBinding(se,Z,I.__bindingPointIndex),l.set(se,Z))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,de={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,T=null,M=null,L=null,w=null,A=new Ee(0,0,0),P=0,S=!1,y=null,R=null,H=null,z=null,G=null,st.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Re,bindFramebuffer:Ue,drawBuffers:Ve,useProgram:ft,setBlending:N,setMaterial:sn,setFlipSided:Xe,setCullFace:qe,setLineWidth:we,setPolygonOffset:lt,setScissorTest:Te,activeTexture:b,bindTexture:_,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:pe,texImage3D:Ce,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:$e,texStorage3D:j,texSubImage2D:X,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Pe,viewport:me,reset:at}}function gh(i,e,t,n){let s=f0(n);switch(t){case Dh:return i*e;case Nh:return i*e;case Fh:return i*e*2;case ua:return i*e/s.components*s.byteLength;case kl:return i*e/s.components*s.byteLength;case Oh:return i*e*2/s.components*s.byteLength;case Vl:return i*e*2/s.components*s.byteLength;case Uh:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case Gl:return i*e*4/s.components*s.byteLength;case zr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:case Po:return Math.max(i,16)*Math.max(e,8)/4;case Ao:case Ro:return Math.max(i,8)*Math.max(e,8)/2;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gr:case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bh:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ko:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f0(i){switch(i){case fn:case Ph:return{byteLength:1,components:1};case ks:case Ih:case tn:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case Ti:case Bl:case Fn:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function p0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Gs("canvas")}function v(b,_,F){let Y=1,$=Te(b);if(($.width>F||$.height>F)&&(Y=F/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(Y*$.width),ye=Math.floor(Y*$.height);u===void 0&&(u=g(X,ye));let oe=_?g(X,ye):u;return oe.width=X,oe.height=ye,oe.getContext("2d").drawImage(b,0,0,X,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+ye+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,F,Y,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){let ye=$?da:We.getTransfer(Y);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=ye===nt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(b,_){let F;return b?_===null||_===Ti||_===cs?F=i.DEPTH24_STENCIL8:_===Fn?F=i.DEPTH32F_STENCIL8:_===ks&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ti||_===cs?F=i.DEPTH_COMPONENT24:_===Fn?F=i.DEPTH_COMPONENT32F:_===ks&&(F=i.DEPTH_COMPONENT16),F}function L(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){let _=b.target;_.removeEventListener("dispose",w),P(_),_.isVideoTexture&&h.delete(_)}function A(b){let _=b.target;_.removeEventListener("dispose",A),y(_)}function P(b){let _=n.get(b);if(_.__webglInit===void 0)return;let F=b.source,Y=f.get(F);if(Y){let $=Y[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(b),Object.keys(Y).length===0&&f.delete(F)}n.remove(b)}function S(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let F=b.source,Y=f.get(F);delete Y[_.__cacheKey],a.memory.textures--}function y(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let $=0;$<_.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=b.textures;for(let Y=0,$=F.length;Y<$;Y++){let X=n.get(F[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(b)}let R=0;function H(){R=0}function z(){let b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function G(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function J(b,_){let F=n.get(b);if(b.isVideoTexture&&we(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function W(b,_){let F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ee(b,_){let F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function V(b,_){let F=n.get(b);if(b.version>0&&F.__version!==b.version){te(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let re={[Hs]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},de={[Qt]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},be={[Qu]:i.NEVER,[rd]:i.ALWAYS,[ed]:i.LESS,[zh]:i.LEQUAL,[td]:i.EQUAL,[sd]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function ke(b,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===Fa||_.magFilter===dr||_.magFilter===Nn||_.minFilter===zt||_.minFilter===Fa||_.minFilter===dr||_.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,re[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==dr&&_.minFilter!==Nn||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function st(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",w));let Y=_.source,$=f.get(Y);$===void 0&&($={},f.set(Y,$));let X=G(_);if(X!==b.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[X].usedTimes++;let ye=$[b.__cacheKey];ye!==void 0&&($[b.__cacheKey].usedTimes--,ye.usedTimes===0&&S(_)),b.__cacheKey=X,b.__webglTexture=$[X].texture}return F}function q(b,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let $=st(b,_),X=_.source;t.bindTexture(Y,b.__webglTexture,i.TEXTURE0+F);let ye=n.get(X);if(X.version!==ye.__version||$===!0){t.activeTexture(i.TEXTURE0+F);let oe=We.getPrimaries(We.workingColorSpace),fe=_.colorSpace===ei?null:We.getPrimaries(_.colorSpace),$e=_.colorSpace===ei||oe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let j=v(_.image,!1,s.maxTextureSize);j=lt(_,j);let pe=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),Pe=T(_.internalFormat,pe,Ce,_.colorSpace,_.isVideoTexture);ke(Y,_);let me,Ye=_.mipmaps,Be=_.isVideoTexture!==!0,at=ye.__version===void 0||$===!0,I=X.dataReady,se=L(_,j);if(_.isDepthTexture)Pe=M(_.format===hs,_.type),at&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Pe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Pe,j.width,j.height,0,pe,Ce,null));else if(_.isDataTexture)if(Ye.length>0){Be&&at&&t.texStorage2D(i.TEXTURE_2D,se,Pe,Ye[0].width,Ye[0].height);for(let k=0,Z=Ye.length;k<Z;k++)me=Ye[k],Be?I&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,k,Pe,me.width,me.height,0,pe,Ce,me.data);_.generateMipmaps=!1}else Be?(at&&t.texStorage2D(i.TEXTURE_2D,se,Pe,j.width,j.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pe,Ce,j.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,j.width,j.height,0,pe,Ce,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Pe,Ye[0].width,Ye[0].height,j.depth);for(let k=0,Z=Ye.length;k<Z;k++)if(me=Ye[k],_.format!==jt)if(pe!==null)if(Be){if(I)if(_.layerUpdates.size>0){let he=gh(me.width,me.height,_.format,_.type);for(let le of _.layerUpdates){let Ne=me.data.subarray(le*he/me.data.BYTES_PER_ELEMENT,(le+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,le,me.width,me.height,1,pe,Ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,j.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Pe,me.width,me.height,j.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,j.depth,pe,Ce,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Pe,me.width,me.height,j.depth,0,pe,Ce,me.data)}else{Be&&at&&t.texStorage2D(i.TEXTURE_2D,se,Pe,Ye[0].width,Ye[0].height);for(let k=0,Z=Ye.length;k<Z;k++)me=Ye[k],_.format!==jt?pe!==null?Be?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,k,Pe,me.width,me.height,0,pe,Ce,me.data)}else if(_.isDataArrayTexture)if(Be){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Pe,j.width,j.height,j.depth),I)if(_.layerUpdates.size>0){let k=gh(j.width,j.height,_.format,_.type);for(let Z of _.layerUpdates){let he=j.data.subarray(Z*k/j.data.BYTES_PER_ELEMENT,(Z+1)*k/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,pe,Ce,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,Ce,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,j.width,j.height,j.depth,0,pe,Ce,j.data);else if(_.isData3DTexture)Be?(at&&t.texStorage3D(i.TEXTURE_3D,se,Pe,j.width,j.height,j.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,Ce,j.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,j.width,j.height,j.depth,0,pe,Ce,j.data);else if(_.isFramebufferTexture){if(at)if(Be)t.texStorage2D(i.TEXTURE_2D,se,Pe,j.width,j.height);else{let k=j.width,Z=j.height;for(let he=0;he<se;he++)t.texImage2D(i.TEXTURE_2D,he,Pe,k,Z,0,pe,Ce,null),k>>=1,Z>>=1}}else if(Ye.length>0){if(Be&&at){let k=Te(Ye[0]);t.texStorage2D(i.TEXTURE_2D,se,Pe,k.width,k.height)}for(let k=0,Z=Ye.length;k<Z;k++)me=Ye[k],Be?I&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,pe,Ce,me):t.texImage2D(i.TEXTURE_2D,k,Pe,pe,Ce,me);_.generateMipmaps=!1}else if(Be){if(at){let k=Te(j);t.texStorage2D(i.TEXTURE_2D,se,Pe,k.width,k.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ce,j)}else t.texImage2D(i.TEXTURE_2D,0,Pe,pe,Ce,j);m(_)&&d(Y),ye.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function te(b,_,F){if(_.image.length!==6)return;let Y=st(b,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);let X=n.get($);if($.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);let ye=We.getPrimaries(We.workingColorSpace),oe=_.colorSpace===ei?null:We.getPrimaries(_.colorSpace),fe=_.colorSpace===ei||ye===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let $e=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!$e&&!j?pe[Z]=v(_.image[Z],!0,s.maxCubemapSize):pe[Z]=j?_.image[Z].image:_.image[Z],pe[Z]=lt(_,pe[Z]);let Ce=pe[0],Pe=r.convert(_.format,_.colorSpace),me=r.convert(_.type),Ye=T(_.internalFormat,Pe,me,_.colorSpace),Be=_.isVideoTexture!==!0,at=X.__version===void 0||Y===!0,I=$.dataReady,se=L(_,Ce);ke(i.TEXTURE_CUBE_MAP,_);let k;if($e){Be&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ye,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){k=pe[Z].mipmaps;for(let he=0;he<k.length;he++){let le=k[he];_.format!==jt?Pe!==null?Be?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,le.width,le.height,Pe,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,le.width,le.height,Pe,me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ye,le.width,le.height,0,Pe,me,le.data)}}}else{if(k=_.mipmaps,Be&&at){k.length>0&&se++;let Z=Te(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Be?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Pe,me,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,pe[Z].width,pe[Z].height,0,Pe,me,pe[Z].data);for(let he=0;he<k.length;he++){let Ne=k[he].image[Z].image;Be?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ne.width,Ne.height,Pe,me,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ye,Ne.width,Ne.height,0,Pe,me,Ne.data)}}else{Be?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,me,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Pe,me,pe[Z]);for(let he=0;he<k.length;he++){let le=k[he];Be?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Pe,me,le.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ye,Pe,me,le.image[Z])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),X.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function xe(b,_,F,Y,$,X){let ye=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),fe=T(F.internalFormat,ye,oe,F.colorSpace),$e=n.get(_),j=n.get(F);if(j.__renderTarget=_,!$e.__hasExternalTextures){let pe=Math.max(1,_.width>>X),Ce=Math.max(1,_.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,X,fe,pe,Ce,_.depth,0,ye,oe,null):t.texImage2D($,X,fe,pe,Ce,0,ye,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),qe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,j.__webglTexture,0,Xe(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,j.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let Y=_.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,X=M(_.stencilBuffer,$),ye=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=Xe(_);qe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,b)}else{let Y=_.textures;for(let $=0;$<Y.length;$++){let X=Y[$],ye=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),fe=T(X.internalFormat,ye,oe,X.colorSpace),$e=Xe(_);F&&qe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,fe,_.width,_.height):qe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let $=Y.__webglTexture,X=Xe(_);if(_.depthTexture.format===is)qe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===hs)qe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ue(b){let _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),ae(_.__webglDepthbuffer[Y],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ae(_.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(b,_,F){let Y=n.get(b);_!==void 0&&xe(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ue(b)}function ft(b){let _=b.texture,F=n.get(b),Y=n.get(_);b.addEventListener("dispose",A);let $=b.textures,X=b.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let fe=0;fe<_.mipmaps.length;fe++)F.__webglFramebuffer[oe][fe]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ye)for(let oe=0,fe=$.length;oe<fe;oe++){let $e=n.get($[oe]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&qe(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){let fe=$[oe];F.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);let $e=r.convert(fe.format,fe.colorSpace),j=r.convert(fe.type),pe=T(fe.internalFormat,$e,j,fe.colorSpace,b.isXRRenderTarget===!0),Ce=Xe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)xe(F.__webglFramebuffer[oe][fe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else xe(F.__webglFramebuffer[oe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,fe=$.length;oe<fe;oe++){let $e=$[oe],j=n.get($e);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),ke(i.TEXTURE_2D,$e),xe(F.__webglFramebuffer,b,$e,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m($e)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),ke(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)xe(F.__webglFramebuffer[fe],b,_,i.COLOR_ATTACHMENT0,oe,fe);else xe(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,oe,0);m(_)&&d(oe),t.unbindTexture()}b.depthBuffer&&Ue(b)}function Je(b){let _=b.textures;for(let F=0,Y=_.length;F<Y;F++){let $=_[F];if(m($)){let X=E(b),ye=n.get($).__webglTexture;t.bindTexture(X,ye),d(X),t.unbindTexture()}}}let _t=[],N=[];function sn(b){if(b.samples>0){if(qe(b)===!1){let _=b.textures,F=b.width,Y=b.height,$=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(b),oe=_.length>1;if(oe)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let $e=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,$,i.NEAREST),l===!0&&(_t.length=0,N.length=0,_t.push(i.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(_t.push(X),N.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let $e=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Xe(b){return Math.min(s.maxSamples,b.samples)}function qe(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function we(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function lt(b,_){let F=b.colorSpace,Y=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==vs&&F!==ei&&(We.getTransfer(F)===nt?(Y!==jt||$!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=qe}function m0(i,e){function t(n,s=ei){let r,a=We.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===jt)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Fh)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===ua)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===Oh)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===zr||n===Hr||n===kr||n===Vr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Co||n===Ro||n===Po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Lo)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Ho||n===ko||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===$o||n===Ko||n===jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fl=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ti=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},v0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
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

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new je({vertexShader:v0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new pl,m=t.getContextAttributes(),d=null,E=null,T=[],M=[],L=new Ae,w=null,A=new Bt;A.viewport=new pt;let P=new Bt;P.viewport=new pt;let S=[A,P],y=new fl,R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=T[q];return te===void 0&&(te=new zs,T[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=T[q];return te===void 0&&(te=new zs,T[q]=te),te.getGripSpace()},this.getHand=function(q){let te=T[q];return te===void 0&&(te=new zs,T[q]=te),te.getHandSpace()};function z(q){let te=M.indexOf(q.inputSource);if(te===-1)return;let xe=T[te];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let q=0;q<T.length;q++){let te=M[q];te!==null&&(M[q]=null,T[q].disconnect(te))}R=null,H=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new kt(p.framebufferWidth,p.framebufferHeight,{format:jt,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,xe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?hs:is,xe=m.stencil?cs:Ti);let Re={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new kt(f.textureWidth,f.textureHeight,{format:jt,type:fn,depthTexture:new ea(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(q){for(let te=0;te<q.removed.length;te++){let xe=q.removed[te],ae=M.indexOf(xe);ae>=0&&(M[ae]=null,T[ae].disconnect(xe))}for(let te=0;te<q.added.length;te++){let xe=q.added[te],ae=M.indexOf(xe);if(ae===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=M.length){M.push(xe),ae=Ue;break}else if(M[Ue]===null){M[Ue]=xe,ae=Ue;break}if(ae===-1)break}let Re=T[ae];Re&&Re.connect(xe)}}let W=new C,ee=new C;function V(q,te,xe){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let ae=W.distanceTo(ee),Re=te.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),ft=Re[14]/(Re[10]+1),Je=(Re[9]+1)/Re[5],_t=(Re[9]-1)/Re[5],N=(Re[8]-1)/Re[0],sn=(Ue[8]+1)/Ue[0],Xe=Ve*N,qe=Ve*sn,we=ae/(-N+sn),lt=we*-N;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(lt),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Te=Ve+we,b=ft+we,_=Xe-lt,F=qe+(ae-lt),Y=Je*ft/b*Te,$=_t*ft/b*Te;q.projectionMatrix.makePerspective(_,F,Y,$,Te,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,xe=q.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),y.near=P.near=A.near=te,y.far=P.far=A.far=xe,(R!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,H=y.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;let ae=q.parent,Re=y.cameras;re(y,ae);for(let Ue=0;Ue<Re.length;Ue++)re(Re[Ue],ae);Re.length===2?V(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),de(q,y,ae)};function de(q,te,xe){xe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let be=null;function ke(q,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ae=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Ue=0;Ue<xe.length;Ue++){let Ve=xe[Ue],ft=null;if(p!==null)ft=p.getViewport(Ve);else{let _t=u.getViewSubImage(f,Ve);ft=_t.viewport,Ue===0&&(e.setRenderTargetTextures(E,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(E))}let Je=S[Ue];Je===void 0&&(Je=new Bt,Je.layers.enable(Ue),Je.viewport=new pt,S[Ue]=Je),Je.matrix.fromArray(Ve.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ve.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ft.x,ft.y,ft.width,ft.height),Ue===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Je)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let Ue=u.getDepthInformation(xe[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,s.renderState)}}for(let xe=0;xe<T.length;xe++){let ae=M[xe],Re=T[xe];ae!==null&&Re!==void 0&&Re.update(ae,te,c||a)}be&&be(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let st=new Wh;st.setAnimationLoop(ke),this.setAnimationLoop=function(q){be=q},this.dispose=function(){}}},xi=new zn,x0=new mt;function y0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,T,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===At&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===At&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),T=E.envMap,M=E.envMapRotation;T&&(m.envMap.value=T,xi.copy(M),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(xi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){let M=T.program;n.uniformBlockBinding(E,M)}function c(E,T){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let L=T.program;n.updateUBOMapping(E,L);let w=e.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){let T=u();E.__bindingPointIndex=T;let M=i.createBuffer(),L=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let T=s[E.id],M=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,A=M.length;w<A;w++){let P=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,y=P.length;S<y;S++){let R=P[S];if(p(R,w,S,L)===!0){let H=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],G=0;for(let J=0;J<z.length;J++){let W=z[J],ee=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+G,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,T,M,L){let w=E.value,A=T+"_"+M;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{let P=L[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return L[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){let T=E.uniforms,M=0,L=16;for(let A=0,P=T.length;A<P;A++){let S=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,R=S.length;y<R;y++){let H=S[y],z=Array.isArray(H.value)?H.value:[H.value];for(let G=0,J=z.length;G<J;G++){let W=z[G],ee=v(W),V=M%L,re=V%ee.boundary,de=V+re;M+=re,de!==0&&L-de<ee.storage&&(M+=L-de),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=ee.storage}}}let w=M%L;return w>0&&(M+=L-w),E.__size=M,E.__cache={},this}function v(E){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){let T=E.target;T.removeEventListener("dispose",m);let M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ta=class{constructor(e={}){let{canvas:t=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=ni,this.toneMappingExposure=1;let M=this,L=!1,w=0,A=0,P=null,S=-1,y=null,R=new pt,H=new pt,z=null,G=new Ee(0),J=0,W=t.width,ee=t.height,V=1,re=null,de=null,be=new pt(0,0,W,ee),ke=new pt(0,0,W,ee),st=!1,q=new jr,te=!1,xe=!1,ae=new mt,Re=new mt,Ue=new C,Ve=new pt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function _t(){return P===null?V:1}let N=n;function sn(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){let D="webgl2";if(N=sn(D,x),N===null)throw sn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Xe,qe,we,lt,Te,b,_,F,Y,$,X,ye,oe,fe,$e,j,pe,Ce,Pe,me,Ye,Be,at,I;function se(){Xe=new Om(N),Xe.init(),Be=new m0(N,Xe),qe=new Im(N,Xe,e,Be),we=new d0(N,Xe),qe.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),lt=new Hm(N),Te=new Qg,b=new p0(N,Xe,we,Te,qe,Be,lt),_=new Dm(M),F=new Fm(M),Y=new qd(N),at=new Rm(N,Y),$=new Bm(N,Y,lt,at),X=new Vm(N,$,Y,lt),Pe=new km(N,qe,b),j=new Lm(Te),ye=new jg(M,_,F,Xe,qe,at,j),oe=new y0(M,Te),fe=new t0,$e=new o0(Xe),Ce=new Cm(M,_,F,we,X,p,l),pe=new h0(M,X,qe),I=new M0(N,lt,qe,we),me=new Pm(N,Xe,lt),Ye=new zm(N,Xe,lt),lt.programs=ye.programs,M.capabilities=qe,M.extensions=Xe,M.properties=Te,M.renderLists=fe,M.shadowMap=pe,M.state=we,M.info=lt}se();let k=new ml(M,N);this.xr=k,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=Xe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Xe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(W,ee,!1))},this.getSize=function(x){return x.set(W,ee)},this.setSize=function(x,D,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,ee=D,t.width=Math.floor(x*V),t.height=Math.floor(D*V),O===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(W*V,ee*V).floor()},this.setDrawingBufferSize=function(x,D,O){W=x,ee=D,V=O,t.width=Math.floor(x*O),t.height=Math.floor(D*O),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(be)},this.setViewport=function(x,D,O,B){x.isVector4?be.set(x.x,x.y,x.z,x.w):be.set(x,D,O,B),we.viewport(R.copy(be).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(ke)},this.setScissor=function(x,D,O,B){x.isVector4?ke.set(x.x,x.y,x.z,x.w):ke.set(x,D,O,B),we.scissor(H.copy(ke).multiplyScalar(V).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(x){we.setScissorTest(st=x)},this.setOpaqueSort=function(x){re=x},this.setTransparentSort=function(x){de=x},this.getClearColor=function(x){return x.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(x=!0,D=!0,O=!0){let B=0;if(x){let U=!1;if(P!==null){let Q=P.texture.format;U=Q===Gl||Q===Vl||Q===kl}if(U){let Q=P.texture.type,ce=Q===fn||Q===Ti||Q===ks||Q===cs||Q===zl||Q===Hl,ge=Ce.getClearColor(),ve=Ce.getClearAlpha(),Ie=ge.r,Fe=ge.g,_e=ge.b;ce?(g[0]=Ie,g[1]=Fe,g[2]=_e,g[3]=ve,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Ie,v[1]=Fe,v[2]=_e,v[3]=ve,N.clearBufferiv(N.COLOR,0,v))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),$e.dispose(),Te.dispose(),_.dispose(),F.dispose(),X.dispose(),at.dispose(),I.dispose(),ye.dispose(),k.dispose(),k.removeEventListener("sessionstart",cc),k.removeEventListener("sessionend",hc),fi.stop()};function Z(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let x=lt.autoReset,D=pe.enabled,O=pe.autoUpdate,B=pe.needsUpdate,U=pe.type;se(),lt.autoReset=x,pe.enabled=D,pe.autoUpdate=O,pe.needsUpdate=B,pe.type=U}function le(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ne(x){let D=x.target;D.removeEventListener("dispose",Ne),gt(D)}function gt(x){Pt(x),Te.remove(x)}function Pt(x){let D=Te.get(x).programs;D!==void 0&&(D.forEach(function(O){ye.releaseProgram(O)}),x.isShaderMaterial&&ye.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,O,B,U,Q){D===null&&(D=ft);let ce=U.isMesh&&U.matrixWorld.determinant()<0,ge=Mu(x,D,O,B,U);we.setMaterial(B,ce);let ve=O.index,Ie=1;if(B.wireframe===!0){if(ve=$.getWireframeAttribute(O),ve===void 0)return;Ie=2}let Fe=O.drawRange,_e=O.attributes.position,Ke=Fe.start*Ie,ot=(Fe.start+Fe.count)*Ie;Q!==null&&(Ke=Math.max(Ke,Q.start*Ie),ot=Math.min(ot,(Q.start+Q.count)*Ie)),ve!==null?(Ke=Math.max(Ke,0),ot=Math.min(ot,ve.count)):_e!=null&&(Ke=Math.max(Ke,0),ot=Math.min(ot,_e.count));let ct=ot-Ke;if(ct<0||ct===1/0)return;at.setup(U,B,ge,O,ve);let Wt,et=me;if(ve!==null&&(Wt=Y.get(ve),et=Ye,et.setIndex(Wt)),U.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*_t()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(U.isLine){let Me=B.linewidth;Me===void 0&&(Me=1),we.setLineWidth(Me*_t()),U.isLineSegments?et.setMode(N.LINES):U.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else U.isPoints?et.setMode(N.POINTS):U.isSprite&&et.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Me=U._multiDrawStarts,En=U._multiDrawCounts,tt=U._multiDrawCount,cn=ve?Y.get(ve).bytesPerElement:1,zi=Te.get(B).currentProgram.getUniforms();for(let Jt=0;Jt<tt;Jt++)zi.setValue(N,"_gl_DrawID",Jt),et.render(Me[Jt]/cn,En[Jt])}else if(U.isInstancedMesh)et.renderInstances(Ke,ct,U.count);else if(O.isInstancedBufferGeometry){let Me=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,En=Math.min(O.instanceCount,Me);et.renderInstances(Ke,ct,En)}else et.render(Ke,ct)};function it(x,D,O){x.transparent===!0&&x.side===Xt&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,ur(x,D,O),x.side=ii,x.needsUpdate=!0,ur(x,D,O),x.side=Xt):ur(x,D,O)}this.compile=function(x,D,O=null){O===null&&(O=x),d=$e.get(O),d.init(D),T.push(d),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),x!==O&&x.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let B=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let ge=Q[ce];it(ge,O,U),B.add(ge)}else it(Q,O,U),B.add(Q)}),T.pop(),d=null,B},this.compileAsync=function(x,D,O=null){let B=this.compile(x,D,O);return new Promise(U=>{function Q(){if(B.forEach(function(ce){Te.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){U(x);return}setTimeout(Q,10)}Xe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ln=null;function Tn(x){ln&&ln(x)}function cc(){fi.stop()}function hc(){fi.start()}let fi=new Wh;fi.setAnimationLoop(Tn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(x){ln=x,k.setAnimationLoop(x),x===null?fi.stop():fi.start()},k.addEventListener("sessionstart",cc),k.addEventListener("sessionend",hc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(D),D=k.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,P),d=$e.get(x,T.length),d.init(D),T.push(d),Re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Re),xe=this.localClippingEnabled,te=j.init(this.clippingPlanes,xe),m=fe.get(x,E.length),m.init(),E.push(m),k.enabled===!0&&k.isPresenting===!0){let Q=M.xr.getDepthSensingMesh();Q!==null&&Na(Q,D,-1/0,M.sortObjects)}Na(x,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,de),Je=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Je&&Ce.addToRenderList(m,x),this.info.render.frame++,te===!0&&j.beginShadows();let O=d.state.shadowsArray;pe.render(O,x,D),te===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,U=m.transmissive;if(d.setupLights(),D.isArrayCamera){let Q=D.cameras;if(U.length>0)for(let ce=0,ge=Q.length;ce<ge;ce++){let ve=Q[ce];dc(B,U,x,ve)}Je&&Ce.render(x);for(let ce=0,ge=Q.length;ce<ge;ce++){let ve=Q[ce];uc(m,x,ve,ve.viewport)}}else U.length>0&&dc(B,U,x,D),Je&&Ce.render(x),uc(m,x,D);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(M,x,D),at.resetDefaultState(),S=-1,y=null,T.pop(),T.length>0?(d=T[T.length-1],te===!0&&j.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Na(x,D,O,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){B&&Ve.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);let ce=X.update(x),ge=x.material;ge.visible&&m.push(x,ce,ge,O,Ve.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){let ce=X.update(x),ge=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ve.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ve.copy(ce.boundingSphere.center)),Ve.applyMatrix4(x.matrixWorld).applyMatrix4(Re)),Array.isArray(ge)){let ve=ce.groups;for(let Ie=0,Fe=ve.length;Ie<Fe;Ie++){let _e=ve[Ie],Ke=ge[_e.materialIndex];Ke&&Ke.visible&&m.push(x,ce,Ke,O,Ve.z,_e)}}else ge.visible&&m.push(x,ce,ge,O,Ve.z,null)}}let Q=x.children;for(let ce=0,ge=Q.length;ce<ge;ce++)Na(Q[ce],D,O,B)}function uc(x,D,O,B){let U=x.opaque,Q=x.transmissive,ce=x.transparent;d.setupLightsView(O),te===!0&&j.setGlobalState(M.clippingPlanes,O),B&&we.viewport(R.copy(B)),U.length>0&&hr(U,D,O),Q.length>0&&hr(Q,D,O),ce.length>0&&hr(ce,D,O),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function dc(x,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new kt(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?tn:fn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let Q=d.state.transmissionRenderTarget[B.id],ce=B.viewport||R;Q.setSize(ce.z,ce.w);let ge=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(G),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Je&&Ce.render(O);let ve=M.toneMapping;M.toneMapping=ni;let Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),te===!0&&j.setGlobalState(M.clippingPlanes,B),hr(x,O,B),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let _e=0,Ke=D.length;_e<Ke;_e++){let ot=D[_e],ct=ot.object,Wt=ot.geometry,et=ot.material,Me=ot.group;if(et.side===Xt&&ct.layers.test(B.layers)){let En=et.side;et.side=At,et.needsUpdate=!0,fc(ct,O,B,Wt,et,Me),et.side=En,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}M.setRenderTarget(ge),M.setClearColor(G,J),Ie!==void 0&&(B.viewport=Ie),M.toneMapping=ve}function hr(x,D,O){let B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=x.length;U<Q;U++){let ce=x[U],ge=ce.object,ve=ce.geometry,Ie=B===null?ce.material:B,Fe=ce.group;ge.layers.test(O.layers)&&fc(ge,D,O,ve,Ie,Fe)}}function fc(x,D,O,B,U,Q){x.onBeforeRender(M,D,O,B,U,Q),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(M,D,O,B,x,Q),U.transparent===!0&&U.side===Xt&&U.forceSinglePass===!1?(U.side=At,U.needsUpdate=!0,M.renderBufferDirect(O,D,B,U,x,Q),U.side=ii,U.needsUpdate=!0,M.renderBufferDirect(O,D,B,U,x,Q),U.side=Xt):M.renderBufferDirect(O,D,B,U,x,Q),x.onAfterRender(M,D,O,B,U,Q)}function ur(x,D,O){D.isScene!==!0&&(D=ft);let B=Te.get(x),U=d.state.lights,Q=d.state.shadowsArray,ce=U.state.version,ge=ye.getParameters(x,U.state,Q,D,O),ve=ye.getProgramCacheKey(ge),Ie=B.programs;B.environment=x.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(x.isMeshStandardMaterial?F:_).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ie===void 0&&(x.addEventListener("dispose",Ne),Ie=new Map,B.programs=Ie);let Fe=Ie.get(ve);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ce)return mc(x,ge),Fe}else ge.uniforms=ye.getUniforms(x),x.onBeforeCompile(ge,M),Fe=ye.acquireProgram(ge,ve),Ie.set(ve,Fe),B.uniforms=ge.uniforms;let _e=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_e.clippingPlanes=j.uniform),mc(x,ge),B.needsLights=bu(x),B.lightsStateVersion=ce,B.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function pc(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=rs.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function mc(x,D){let O=Te.get(x);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Mu(x,D,O,B,U){D.isScene!==!0&&(D=ft),b.resetTextureUnits();let Q=D.fog,ce=B.isMeshStandardMaterial?D.environment:null,ge=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vs,ve=(B.isMeshStandardMaterial?F:_).get(B.envMap||ce),Ie=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Fe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_e=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,ot=!!O.morphAttributes.color,ct=ni;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=M.toneMapping);let Wt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=Wt!==void 0?Wt.length:0,Me=Te.get(B),En=d.state.lights;if(te===!0&&(xe===!0||x!==y)){let rn=x===y&&B.id===S;j.setState(B,x,rn)}let tt=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==En.state.version||Me.outputColorSpace!==ge||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==ve||B.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==j.numPlanes||Me.numIntersection!==j.numIntersection)||Me.vertexAlphas!==Ie||Me.vertexTangents!==Fe||Me.morphTargets!==_e||Me.morphNormals!==Ke||Me.morphColors!==ot||Me.toneMapping!==ct||Me.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Me.__version=B.version);let cn=Me.currentProgram;tt===!0&&(cn=ur(B,D,U));let zi=!1,Jt=!1,Cs=!1,ht=cn.getUniforms(),gn=Me.uniforms;if(we.useProgram(cn.program)&&(zi=!0,Jt=!0,Cs=!0),B.id!==S&&(S=B.id,Jt=!0),zi||y!==x){we.buffers.depth.getReversed()?(ae.copy(x.projectionMatrix),Td(ae),Ed(ae),ht.setValue(N,"projectionMatrix",ae)):ht.setValue(N,"projectionMatrix",x.projectionMatrix),ht.setValue(N,"viewMatrix",x.matrixWorldInverse);let qn=ht.map.cameraPosition;qn!==void 0&&qn.setValue(N,Ue.setFromMatrixPosition(x.matrixWorld)),qe.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Jt=!0,Cs=!0)}if(U.isSkinnedMesh){ht.setOptional(N,U,"bindMatrix"),ht.setOptional(N,U,"bindMatrixInverse");let rn=U.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),ht.setValue(N,"boneTexture",rn.boneTexture,b))}U.isBatchedMesh&&(ht.setOptional(N,U,"batchingTexture"),ht.setValue(N,"batchingTexture",U._matricesTexture,b),ht.setOptional(N,U,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",U._indirectTexture,b),ht.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",U._colorsTexture,b));let Rs=O.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&Pe.update(U,O,cn),(Jt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,ht.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(gn.envMap.value=ve,gn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(gn.envMapIntensity.value=D.environmentIntensity),Jt&&(ht.setValue(N,"toneMappingExposure",M.toneMappingExposure),Me.needsLights&&Su(gn,Cs),Q&&B.fog===!0&&oe.refreshFogUniforms(gn,Q),oe.refreshMaterialUniforms(gn,B,V,ee,d.state.transmissionRenderTarget[x.id]),rs.upload(N,pc(Me),gn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rs.upload(N,pc(Me),gn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(N,"center",U.center),ht.setValue(N,"modelViewMatrix",U.modelViewMatrix),ht.setValue(N,"normalMatrix",U.normalMatrix),ht.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let rn=B.uniformsGroups;for(let qn=0,Yn=rn.length;qn<Yn;qn++){let gc=rn[qn];I.update(gc,cn),I.bind(gc,cn)}}return cn}function Su(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function bu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,D,O){Te.get(x.texture).__webglTexture=D,Te.get(x.depthTexture).__webglTexture=O;let B=Te.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){let O=Te.get(x);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,O=0){P=x,w=D,A=O;let B=!0,U=null,Q=!1,ce=!1;if(x){let ve=Te.get(x);if(ve.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(ve.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(ve.__hasExternalTextures)b.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let _e=x.depthTexture;if(ve.__boundDepthTexture!==_e){if(_e!==null&&Te.has(_e)&&(x.width!==_e.image.width||x.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}let Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ce=!0);let Fe=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?U=Fe[D][O]:U=Fe[D],Q=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?U=Te.get(x).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[O]:U=Fe,R.copy(x.viewport),H.copy(x.scissor),z=x.scissorTest}else R.copy(be).multiplyScalar(V).floor(),H.copy(ke).multiplyScalar(V).floor(),z=st;if(we.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&we.drawBuffers(x,U),we.viewport(R),we.scissor(H),we.setScissorTest(z),Q){let ve=Te.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,O)}else if(ce){let ve=Te.get(x.texture),Ie=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,O||0,Ie)}S=-1},this.readRenderTargetPixels=function(x,D,O,B,U,Q,ce){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){we.bindFramebuffer(N.FRAMEBUFFER,ge);try{let ve=x.texture,Ie=ve.format,Fe=ve.type;if(!qe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&O>=0&&O<=x.height-U&&N.readPixels(D,O,B,U,Be.convert(Ie),Be.convert(Fe),Q)}finally{let ve=P!==null?Te.get(P).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(x,D,O,B,U,Q,ce){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){let ve=x.texture,Ie=ve.format,Fe=ve.type;if(!qe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-B&&O>=0&&O<=x.height-U){we.bindFramebuffer(N.FRAMEBUFFER,ge);let _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,O,B,U,Be.convert(Ie),Be.convert(Fe),0);let Ke=P!==null?Te.get(P).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,Ke);let ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bd(N,ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(_e),N.deleteSync(ot),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,O=0){x.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);let B=Math.pow(2,-O),U=Math.floor(x.image.width*B),Q=Math.floor(x.image.height*B),ce=D!==null?D.x:0,ge=D!==null?D.y:0;b.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,ce,ge,U,Q),we.unbindTexture()},this.copyTextureToTexture=function(x,D,O=null,B=null,U=0){x.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let Q,ce,ge,ve,Ie,Fe,_e,Ke,ot,ct=x.isCompressedTexture?x.mipmaps[U]:x.image;O!==null?(Q=O.max.x-O.min.x,ce=O.max.y-O.min.y,ge=O.isBox3?O.max.z-O.min.z:1,ve=O.min.x,Ie=O.min.y,Fe=O.isBox3?O.min.z:0):(Q=ct.width,ce=ct.height,ge=ct.depth||1,ve=0,Ie=0,Fe=0),B!==null?(_e=B.x,Ke=B.y,ot=B.z):(_e=0,Ke=0,ot=0);let Wt=Be.convert(D.format),et=Be.convert(D.type),Me;D.isData3DTexture?(b.setTexture3D(D,0),Me=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),Me=N.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),Me=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let En=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=N.getParameter(N.UNPACK_SKIP_PIXELS),zi=N.getParameter(N.UNPACK_SKIP_ROWS),Jt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);let Cs=x.isDataArrayTexture||x.isData3DTexture,ht=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let gn=Te.get(x),Rs=Te.get(D),rn=Te.get(gn.__renderTarget),qn=Te.get(Rs.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<ge;Yn++)Cs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,U,Fe+Yn),x.isDepthTexture?(ht&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,U,ot+Yn),N.blitFramebuffer(ve,Ie,Q,ce,_e,Ke,Q,ce,N.DEPTH_BUFFER_BIT,N.NEAREST)):ht?N.copyTexSubImage3D(Me,U,_e,Ke,ot+Yn,ve,Ie,Q,ce):N.copyTexSubImage2D(Me,U,_e,Ke,ot+Yn,ve,Ie,Q,ce);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ht?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Me,U,_e,Ke,ot,Q,ce,ge,Wt,et,ct.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,U,_e,Ke,ot,Q,ce,ge,Wt,ct.data):N.texSubImage3D(Me,U,_e,Ke,ot,Q,ce,ge,Wt,et,ct):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_e,Ke,Q,ce,Wt,et,ct.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_e,Ke,ct.width,ct.height,Wt,ct.data):N.texSubImage2D(N.TEXTURE_2D,U,_e,Ke,Q,ce,Wt,et,ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,En),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,zi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Jt),U===0&&D.generateMipmaps&&N.generateMipmap(Me),we.unbindTexture()},this.copyTextureToTexture3D=function(x,D,O=null,B=null,U=0){return x.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,x=arguments[2],D=arguments[3],U=arguments[4]||0),Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,O,B,U)},this.initRenderTarget=function(x){Te.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),we.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,we.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Ys=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Zs=class extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,h=Qt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gl=class extends ri{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},na=new C,ia=new C,vh=new mt,Us=new us,Dr=new wi,ho=new C,_h=new C,vl=class extends en{constructor(e=new vt,t=new gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)na.fromBufferAttribute(t,s-1),ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;vh.copy(s).invert(),Us.copy(e.ray).applyMatrix4(vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=h.getX(v),E=h.getX(v+1),T=Ur(this,e,Us,l,d,E);T&&t.push(T)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),d=Ur(this,e,Us,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=Ur(this,e,Us,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=Ur(this,e,Us,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ur(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(na.fromBufferAttribute(a,s),ia.fromBufferAttribute(a,r),t.distanceSqToSegment(na,ia,ho,_h)>n)return;ho.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ho);if(!(l<e.near||l>e.far))return{distance:l,point:_h.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var xh=new C,yh=new C,sa=class extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xh.distanceTo(yh);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _l=class extends ri{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mh=new mt,xl=new us,Nr=new wi,Fr=new C,fs=class extends en{constructor(e=new vt,t=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Mh.copy(s).invert(),xl.copy(e.ray).applyMatrix4(Mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);Fr.fromBufferAttribute(u,m),Sh(Fr,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Fr.fromBufferAttribute(u,g),Sh(Fr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sh(i,e,t,n,s,r,a){let o=xl.distanceSqToPoint(i);if(o<t){let l=new C;xl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Js=class extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ae:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],a=[],o=new C,l=new mt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(wt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ql(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Or=new C,uo=new ql,fo=new ql,po=new ql,$s=class extends yl{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),uo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),fo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),po.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),po.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(uo.calc(l),fo.calc(l),po.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ra=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ps=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,v=[],m=n/2,d=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(p,2));function E(){let M=new C,L=new C,w=0,A=(t-e)/n;for(let P=0;P<=r;P++){let S=[],y=P/r,R=y*(t-e)+e;for(let H=0;H<=s;H++){let z=H/s,G=z*l+o,J=Math.sin(G),W=Math.cos(G);L.x=R*J,L.y=-y*n+m,L.z=R*W,u.push(L.x,L.y,L.z),M.set(J,A,W).normalize(),f.push(M.x,M.y,M.z),p.push(z,1-y),S.push(g++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let y=v[S][P],R=v[S+1][P],H=v[S+1][P+1],z=v[S][P+1];(e>0||S!==0)&&(h.push(y,R,z),w+=3),(t>0||S!==r-1)&&(h.push(R,H,z),w+=3)}c.addGroup(d,w,0),d+=w}function T(M){let L=g,w=new Ae,A=new C,P=0,S=M===!0?e:t,y=M===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let R=g;for(let H=0;H<=s;H++){let G=H/s*l+o,J=Math.cos(G),W=Math.sin(G);A.x=S*W,A.y=m*y,A.z=S*J,u.push(A.x,A.y,A.z),f.push(0,y,0),w.x=J*.5+.5,w.y=W*.5*y+.5,p.push(w.x,w.y),g++}for(let H=0;H<s;H++){let z=L+H,G=R+H;M===!0?h.push(G,G+1,z):h.push(G+1,G,z),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var aa=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,f=new C,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let E=[],T=d/n,M=0;d===0&&a===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let w=L/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+M,1-T),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let T=h[d][E+1],M=h[d][E],L=h[d+1][E],w=h[d+1][E+1];(d!==0||a>0)&&p.push(T,M,w),(d!==n-1||l<Math.PI)&&p.push(M,L,w)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oa=class extends je{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}};function Br(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function S0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ms=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=e,o=2*t-n;break;case Sc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:a=e,l=2*n-t;break;case Sc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,T=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let L=0;L!==o;++L)r[L]=d*a[h+L]+E*a[c+L]+T*a[l+L]+M*a[u+L];return r}},Sl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},bl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Br(t,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Br(e.times,Array),values:Br(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&S0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Qo;var Ai=class extends pn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Wr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends pn{};Tl.prototype.ValueTypeName="color";var El=class extends pn{};El.prototype.ValueTypeName="number";var wl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},la=class extends pn{InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends pn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Wr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends pn{};Al.prototype.ValueTypeName="vector";var bh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Cl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},b0=new Cl,Ks=class{constructor(e){this.manager=e!==void 0?e:b0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rl=class extends Ks{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bh.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Gs("img");function l(){h(),bh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var js=class extends Ks{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,a=new Rl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}};var gs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Th(){return performance.now()}var Yl="\\[\\]\\.:\\/",T0=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",E0="[^"+Yl.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",Zl),A0=/(WCOD+)?/.source.replace("WCOD",E0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),P0=new RegExp("^"+w0+A0+C0+R0+"$"),I0=["material","materials","bones","map"],Pl=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(e){let t=P0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);I0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Pl;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var Eh=new mt,ca=class{constructor(e,t,n=0,s=1/0){this.ray=new us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(e,t=!0,n=[]){return Il(e,this,n,t),n.sort(wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Il(e[s],this,n,t);return n.sort(wh),n}};function wh(i,e){return i.distance-e.distance}function Il(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Il(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);var ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},D0=new qs(-1,1,1,-1,0,1),Jl=class extends vt{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},U0=new Jl,li=class{constructor(e){this._mesh=new ut(U0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ms=class extends nn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof je?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oi.clone(e.uniforms),this.material=new je({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var er=class extends nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ga=class extends nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var va=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(ma),this.copyPass.material.blending=_n,this.clock=new gs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}er!==void 0&&(a instanceof er?n=!0:a instanceof ga&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _a=class extends nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Jh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ss=class i extends nn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,a,{type:tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new kt(r,a,{type:tn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new kt(r,a,{type:tn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Jh;this.highPassUniforms=oi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ma;this.copyUniforms=oi.clone(h.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:xn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ee,this.oldClearAlpha=1,this.basic=new Hn,this.fsQuad=new li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new je({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new je({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ss.BlurDirectionX=new Ae(1,0);Ss.BlurDirectionY=new Ae(0,1);var $h={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xa=class extends nn{constructor(){super();let e=$h;this.uniforms=oi.clone(e.uniforms),this.material=new oa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ol&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Di=958.32,Ui=554.75,N0=7,Kh=800,F0=5800,on=1536,kn=893,rr={W:92.6,E:103.6,S:36,N:41},jh="https://commons.wikimedia.org/wiki/File:",Vn={yugur1962:{w:500,h:402,zh:"\u7518\u8083\u88D5\u56FA\u65CF\u51AC\u730E",en:"Yugur winter hunt, Gansu",mz:"1962\u5E74 \xB7\u300A\u4EBA\u6C11\u753B\u62A5\u300B",me:"1962 \xB7 China Pictorial",by:"\u300A\u4EBA\u6C11\u753B\u62A5\u300BChina Pictorial, 1962 no. 1",lic:"Public domain",f:"1962-01_1962\u5E74_\u7518\u8083\u88D5\u56FA\u65CF\u51AC\u730E.jpg"},tent:{w:1280,h:848,zh:"\u9752\u6D77\u6E56\u7554\u7684\u5E10\u7BF7",en:"Decorated tents near Qinghai Lake",mz:"\u5F53\u4EE3 \xB7 \u9752\u6D77",me:"Today \xB7 Qinghai",by:"Popolon",lic:"CC BY-SA 4.0",f:"Decorated_tent_near_lake_Qinghai.jpg"},tu:{w:500,h:375,zh:"\u9752\u6D77\u7684\u571F\u65CF\u59D1\u5A18",en:"A young Tu woman, Qinghai",mz:"\u5F53\u4EE3 \xB7 \u9752\u6D77",me:"Today \xB7 Qinghai",by:"wanghongliu (Panoramio)",lic:"CC BY-SA 3.0",f:"\u7F8E\u4E3D\u7684\u9C9C\u5351\u540E\u88D4-\u9752\u6D77\u571F\u65CF\u59D1\u5A18_beauty_of_China_Tu_-_panoramio.jpg"},mosque:{w:1280,h:960,zh:"\u5C71\u4E39\u6E05\u771F\u5BFA",en:"Shandan Mosque",mz:"\u5F53\u4EE3 \xB7 \u5F20\u6396\u5C71\u4E39",me:"Today \xB7 Shandan, Zhangye",by:"H2v5o68z",lic:"CC0",f:"\u5C71\u4E39\u6E05\u771F\u5BFA.jpg"},mati:{w:1280,h:853,zh:"\u9A6C\u8E44\u5BFA\u77F3\u7A9F\u7FA4",en:"The Mati Si grottoes",mz:"\u59CB\u51FF\u4E8E\u5317\u51C9\uFF0C\u4ECA\u4E3A\u85CF\u4F20\u4F5B\u6559\u5BFA\u9662 \xB7 \u5F20\u6396\u8083\u5357",me:"Begun under the Northern Liang; a Tibetan Buddhist monastery today \xB7 Sunan, Zhangye",by:"guan (Panoramio)",lic:"CC BY 3.0",f:"\u7518\u8083\u7701\u5F20\u6396\u5E02\u8083\u5357_\u9A6C\u8E44\u5BFA_-_panoramio_(3).jpg"},jiayuguan:{w:1280,h:961,zh:"\u5609\u5CEA\u5173\u897F\u95E8",en:"West gate of the Jiayu Pass fort",mz:"\u59CB\u5EFA\u4E8E1372\u5E74 \xB7 \u5609\u5CEA\u5173",me:"Founded 1372 \xB7 Jiayuguan",by:"Dan Lundberg",lic:"CC BY-SA 2.0",f:"20160507_China_6087_crop_Jiayuguan_sRGB_(29881729872).jpg"},silkjyg:{w:2440,h:640,zh:"\u300A\u4E1D\u8DEF\u5C71\u6C34\u5730\u56FE\u300B\u5377\u9996\uFF1A\u5609\u5CEA\u5173",en:"Silk Road Landscape Map, opening section: Jiayu Pass",mz:"\u660E\u4EE3\u4E2D\u53F6\uFF08\u7EA61524\u20131539\uFF09\xB7 \u7EE2\u672C\u9752\u7EFF \xB7 \u6545\u5BAB\u535A\u7269\u9662",me:"Mid-Ming, c. 1524\u20131539 \xB7 colours on silk \xB7 Palace Museum, Beijing",by:"Unknown Ming court painter",lic:"Public domain",f:"\u4E1D\u8DEF\u5C71\u6C34\u5730\u56FE.png"},sakya:{w:500,h:702,zh:"\u8428\u8FE6\u73ED\u667A\u8FBE\u4E0E\u516B\u601D\u5DF4",en:"Sakya Pandita and Drog\xF6n Ch\xF6gyal Phagpa",mz:"\u5510\u5361 \xB7 \u5E74\u4EE3\u4E0D\u8BE6",me:"Thangka \xB7 date unknown",by:"Unknown artist",lic:"Public domain",f:"Sakya_Pandita_Kunga_Gyaltsen_and_Drogon_Chogyal_Phagpa.jpg"},stele_t:{w:495,h:1280,zh:"\u51C9\u5DDE\u91CD\u4FEE\u62A4\u56FD\u5BFA\u611F\u901A\u5854\u7891 \xB7 \u897F\u590F\u6587\u9762\u62D3\u7247",en:"Liangzhou Stele, Tangut face (rubbing)",mz:"1094\u5E74 \xB7 \u6B66\u5A01 \xB7 \u636E\u5FB7\u5FAE\u7406\u4E9A1898\u5E74\u520A\u672C",me:"1094 \xB7 Wuwei \xB7 from Dev\xE9ria, 1898",by:"Gabriel Dev\xE9ria (1844\u20131899)",lic:"Public domain",f:"Liangzhou_stele_Tangut_rubbing.jpg"},stele_c:{w:566,h:1280,zh:"\u540C\u4E00\u5757\u7891\u7684\u6C49\u6587\u9762\u5F55\u6587",en:"The same stele, Chinese face (transcription)",mz:"1094\u5E74 \xB7 \u6B66\u5A01 \xB7 \u636E\u5FB7\u5FAE\u7406\u4E9A1898\u5E74\u520A\u672C",me:"1094 \xB7 Wuwei \xB7 from Dev\xE9ria, 1898",by:"Gabriel Dev\xE9ria (1844\u20131899)",lic:"Public domain",f:"Liangzhou_stele_Chinese_copy.jpg"},tangutmusic:{w:1280,h:687,zh:"\u300A\u6C34\u6708\u89C2\u97F3\u300B\u5C40\u90E8\uFF1A\u4E50\u821E\u8005",en:"Moon-Water Guanyin, detail: musicians and a dancer",mz:"\u897F\u590F \xB7 \u9ED1\u6C34\u57CE\uFF08\u9ED1\u6CB3\u4E0B\u6E38\uFF09\u51FA\u571F \xB7 \u827E\u5C14\u7C73\u5854\u4EC0\u535A\u7269\u9986",me:"Xi Xia \xB7 from Khara-Khoto on the lower Hei River \xB7 State Hermitage Museum",by:"Tangut artist, 10th\u201313th c.",lic:"Public domain",f:"Moon-Water_Bodhisattva_Kuanyin,_detail_of_entertainers._China,_Tangut_State_of_Xi-Xia,_Khara_Khoto._10-13th_century._State_Hermitage_Museum.jpg"},dafo:{w:1280,h:857,zh:"\u5F20\u6396\u5927\u4F5B\u5BFA\u5927\u4F5B\u6BBF",en:"Hall of the reclining Buddha, Zhangye",mz:"\u897F\u590F\uFF0C1098\u5E74\u59CB\u5EFA \xB7 \u5F20\u6396",me:"Xi Xia, founded 1098 \xB7 Zhangye",by:"Livewireshock",lic:"CC BY-SA 3.0",f:"Dafosi_-_This_hall_contains_the_largest_reclining_wooden_Bhudda_in_China.JPG"},xixiatext:{w:1280,h:853,zh:"\u897F\u590F\u6587\u4F5B\u7ECF",en:"Buddhist text in Tangut script",mz:"\u897F\u590F \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"Xi Xia \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Western_Xia_Buddhist_Text_(10097123656).jpg"},zhangyichao:{w:1234,h:624,zh:"\u5F20\u8BAE\u6F6E\u7EDF\u519B\u51FA\u884C\u56FE\uFF08\u5C40\u90E8\uFF09",en:"Zhang Yichao\u2019s army on the march (detail)",mz:"\u665A\u5510 \xB7 \u83AB\u9AD8\u7A9F\u7B2C156\u7A9F",me:"Late Tang \xB7 Mogao Cave 156",by:"Late Tang mural painters",lic:"Public domain",f:"Dunhuang_Zhang_Yichao_army.jpg"},uyghur:{w:1280,h:1193,zh:"\u56DE\u9E58\u738B\u5B50\u4F9B\u517B\u50CF",en:"Uyghur princes as donors",mz:"9\u201312\u4E16\u7EAA \xB7 \u5410\u9C81\u756A\u67CF\u5B5C\u514B\u91CC\u514B\u7B2C9\u7A9F\uFF08\u975E\u6CB3\u897F\uFF09",me:"9th\u201312th c. \xB7 Bezeklik Cave 9, Turfan (not in Hexi)",by:"Uyghur artist",lic:"Public domain",f:"Uyghur_princes_wearing_Chinese-styled_robes_and_headgear._Bezeklik,_Cave_9,_9-12th_century_CE.jpg"},yangdi:{w:812,h:1272,zh:"\u968B\u7080\u5E1D\u50CF\uFF08\u300A\u5386\u4EE3\u5E1D\u738B\u56FE\u300B\uFF09",en:"Emperor Yang of Sui, from the Thirteen Emperors scroll",mz:"\u4F20\u5510\xB7\u960E\u7ACB\u672C \xB7 \u6CE2\u58EB\u987F\u7F8E\u672F\u9986",me:"Attributed to Yan Liben, Tang \xB7 Museum of Fine Arts, Boston",by:"Attributed to Yan Liben",lic:"Public domain",f:"Sui_Yangdi_Tang.jpg"},camel:{w:816,h:1280,zh:"\u4E09\u5F69\u9A86\u9A7C\u8F7D\u4E50\u4FD1",en:"Sancai camel carrying musicians",mz:"\u5510 \xB7 \u897F\u5B89\u51FA\u571F\uFF08\u975E\u6CB3\u897F\uFF09",me:"Tang \xB7 excavated at Xi\u2019an (not from Hexi)",by:"Gary Todd",lic:"CC0",f:"Tang_Sancai_Porcelain_with_Musicians_on_a_Camel_(no_background).jpg"},kumarajiva:{w:855,h:1135,zh:"\u9E20\u6469\u7F57\u4EC0\u8BD1\u300A\u91D1\u521A\u7ECF\u300B\u6B8B\u7247",en:"Fragment of the Diamond Sutra in Kumarajiva\u2019s translation",mz:"\u6566\u714C\u5199\u672C \xB7 \u6CD5\u56FD\u56FD\u5BB6\u56FE\u4E66\u9986 \u4F2F\u5E0C\u548C\u85CF\u54C1",me:"Dunhuang manuscript \xB7 BnF, Pelliot collection",by:"Biblioth\xE8que nationale de France",lic:"Public domain",f:"Fragments._(Jin_gang_bo_re_bo_luo_mi_jing_trad._de_Kum\u0101raj\u012Bva)._-_btv1b8300499b.jpg"},stupa:{w:853,h:1280,zh:"\u5317\u51C9\u77F3\u5854",en:"Northern Liang stone stupa",mz:"5\u4E16\u7EAA \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"5th c. \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Northern_Liang_Stone_Stupa_(10096337195).jpg"},tiantishan:{w:1280,h:853,zh:"\u5929\u68AF\u5C71\u77F3\u7A9F\u5927\u4F5B",en:"The great Buddha at Tiantishan",mz:"\u5927\u4F5B\u4E3A\u5510\u4EE3\u6240\u9020\uFF1B\u77F3\u7A9F\u59CB\u51FF\u4E8E\u5317\u51C9 \xB7 \u6B66\u5A01",me:"The colossus is Tang; the caves were begun under the Northern Liang \xB7 Wuwei",by:"Candace Shock",lic:"CC BY-SA 4.0",f:"Tiantishan_Grottoes_2015.jpg"},brick1:{w:1280,h:853,zh:"\u9B4F\u664B\u5893\u753B\u50CF\u7816\uFF1A\u9A91\u9A6C\u8005",en:"Wei\u2013Jin tomb brick: a rider",mz:"3\u20134\u4E16\u7EAA \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"3rd\u20134th c. \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Wei_and_Jin_Painted_Brick_(10095152566).jpg"},brick2:{w:1280,h:853,zh:"\u9B4F\u664B\u5893\u753B\u50CF\u7816\uFF1A\u725B\u8015",en:"Wei\u2013Jin tomb brick: ploughing with oxen",mz:"3\u20134\u4E16\u7EAA \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"3rd\u20134th c. \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Wei_and_Jin_Painted_Brick_(10095214843).jpg"},brick3:{w:1280,h:853,zh:"\u9B4F\u664B\u5893\u753B\u50CF\u7816\uFF1A\u9A91\u5C04",en:"Wei\u2013Jin tomb brick: hunting from the saddle",mz:"3\u20134\u4E16\u7EAA \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"3rd\u20134th c. \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Wei_and_Jin_Painted_Brick_(10095182146).jpg"},brick4:{w:1280,h:853,zh:"\u9B4F\u664B\u5893\u753B\u50CF\u7816\uFF1A\u7267\u9A6C",en:"Wei\u2013Jin tomb brick: herding horses",mz:"3\u20134\u4E16\u7EAA \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"3rd\u20134th c. \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Wei_and_Jin_Painted_Brick_(10095144745).jpg"},zhangqian:{w:980,h:610,zh:"\u5F20\u9A9E\u51FA\u4F7F\u897F\u57DF\u56FE\uFF08\u5C40\u90E8\uFF09",en:"Zhang Qian leaving for the Western Regions (detail)",mz:"\u521D\u5510 \xB7 \u83AB\u9AD8\u7A9F\u7B2C323\u7A9F",me:"Early Tang \xB7 Mogao Cave 323",by:"Tang mural painters",lic:"Public domain",f:"Zhang_Qian.jpg"},horse:{w:1280,h:853,zh:"\u94DC\u5954\u9A6C",en:"The galloping bronze horse",mz:"\u4E1C\u6C49 \xB7 \u6B66\u5A01\u96F7\u53F0\u6C49\u5893\u51FA\u571F \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"Eastern Han \xB7 Leitai tomb, Wuwei \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Eastern_Han_Bronze_Galloping_Horse_(10094006603).jpg"},slips:{w:949,h:1280,zh:"\u5C45\u5EF6\u6C49\u7B80",en:"Han slips from Juyan",mz:"\u6C49 \xB7 \u9ED1\u6CB3\u4E0B\u6E38\u5C45\u5EF6 \xB7 \u5185\u8499\u53E4\u535A\u7269\u9662",me:"Han \xB7 Juyan, lower Hei River \xB7 Inner Mongolia Museum",by:"BabelStone",lic:"CC BY-SA 3.0",f:"Inner_Mongolia_Museum_Juyan_Hanjian_set.jpg"},huoqubing:{w:1280,h:659,zh:"\u9A6C\u8E0F\u5308\u5974",en:"Horse trampling a Xiongnu warrior",mz:"\u897F\u6C49 \xB7 \u8302\u9675\u970D\u53BB\u75C5\u5893\uFF08\u9655\u897F\uFF09",me:"Western Han \xB7 tomb of Huo Qubing, Maoling (Shaanxi)",by:"Hanming Huang",lic:"CC BY-SA 4.0",f:"Tomb_of_Huo_Qubing._Horse_trampling_a_Xiongnu_warrior.jpg"},frontier:{w:1280,h:567,zh:"\u6566\u714C\u9644\u8FD1\u7684\u6C49\u4EE3\u8FB9\u585E\u7EBF\uFF08\u636E\u65AF\u5766\u56E0\uFF09",en:"The Han frontier line near Dunhuang, after Aurel Stein",mz:"\u8D6B\u5C14\u66FC\u300A\u4E2D\u56FD\u5386\u53F2\u5546\u4E1A\u5730\u56FE\u96C6\u300B\uFF0C1935",me:"Herrmann, Historical and Commercial Atlas of China, 1935",by:"Albert Herrmann",lic:"Public domain",f:"Ancient_Frontier_Line_near_Tun-huang.jpg"},plaque:{w:1280,h:1024,zh:"\u8DEA\u9A6C\u5F62\u5E26\u9970",en:"Belt plaque: a kneeling horse",mz:"\u516C\u5143\u524D3\u2013\u524D1\u4E16\u7EAA \xB7 \u4E2D\u56FD\u5317\u65B9 \xB7 \u5927\u90FD\u4F1A\u827A\u672F\u535A\u7269\u9986",me:"3rd\u20131st c. BCE \xB7 northern China \xB7 The Met",by:"The Metropolitan Museum of Art",lic:"CC0",f:"Belt_plaque_in_the_shape_of_a_kneeling_horse,_3rd-1st_century_BCE,_North_China.jpg"},plaque2:{w:1280,h:789,zh:"\u53CC\u9A6C\u76F8\u6597\u7EB9\u5E26\u9970",en:"Belt plaque: horses in combat",mz:"\u516C\u5143\u524D2\u4E16\u7EAA \xB7 \u9102\u5C14\u591A\u65AF\u53CA\u534E\u5317\u897F\u90E8 \xB7 \u67CF\u6797\u6C11\u65CF\u5B66\u535A\u7269\u9986",me:"2nd c. BCE \xB7 Ordos and western North China \xB7 Ethnological Museum, Berlin",by:"Daderot",lic:"CC0",f:"Belt_plaque_with_horses_in_combat,_Ordos_region_and_western_part_of_North_China,_2nd_century_BC,_bronze_-_Ethnological_Museum,_Berlin_-_DSC02171.JPG"},majiayao:{w:1280,h:960,zh:"\u9A6C\u5BB6\u7A91\u6587\u5316\u7F51\u7EB9\u5F69\u9676\u7F50",en:"Painted jar with net pattern, Majiayao culture",mz:"\u7EA6\u524D3300\u2013\u524D2000 \xB7 \u65C5\u987A\u535A\u7269\u9986",me:"c. 3300\u20132000 BCE \xB7 L\xFCshun Museum",by:"Yuzhouren",lic:"CC0",f:"Majiayao_pottery_front_view.jpg"},majiayao2:{w:1280,h:853,zh:"\u9A6C\u5BB6\u7A91\u6587\u5316\u5F69\u9676",en:"Painted pottery, Majiayao culture",mz:"\u65B0\u77F3\u5668\u65F6\u4EE3 \xB7 \u4E0A\u6D77\u535A\u7269\u9986",me:"Neolithic \xB7 Shanghai Museum",by:"Gary Lee Todd",lic:"CC0",f:"Neolithic_Majiayao_Culture_Pottery_05.jpg"},siba:{w:1280,h:853,zh:"\u56DB\u575D\u6587\u5316\u5F69\u9676",en:"Painted pottery, Siba culture",mz:"\u7EA6\u524D2000\u2013\u524D1500 \xB7 \u7518\u8083\u7701\u535A\u7269\u9986",me:"c. 2000\u20131500 BCE \xB7 Gansu Provincial Museum",by:"Gary Todd",lic:"CC0",f:"Siba_Culture_Pottery_(10096616493).jpg"},thrust:{w:1280,h:551,zh:"\u5317\u7941\u8FDE\u7684\u9006\u51B2\u65AD\u5C42",en:"A thrust fault in the northern Qilian",mz:"\u84DD\u7070\u8272\u7684\u8001\u5CA9\u5C42\u88AB\u63A8\u5230\u7EA2\u8272\u5CA9\u5C42\u4E4B\u4E0A",me:"Old blue-grey rock thrust over red beds",by:"Jide",lic:"CC BY-SA 3.0",f:"Thrust_fault_Qilian_Shan.jpg"},danxia2:{w:1280,h:960,zh:"\u5F20\u6396\u4E39\u971E",en:"Zhangye Danxia",mz:"\u767D\u57A9\u7EAA\u4EE5\u6765\u7684\u7EA2\u8272\u7802\u5CA9\u4E0E\u6CE5\u5CA9",me:"Red sandstones and mudstones from the Cretaceous on",by:"YubYub41",lic:"CC BY-SA 4.0",f:"Zhangye_Danxia.JPG"}},O0=[{zh:"\u5F20\u6396\u4E39\u971E\uFF08\u7B2C\u56DB\u4E50\u7AE0\uFF09",en:"Zhangye Danxia (movement IV)",by:"Terry Wu",lic:"CC BY-SA 2.0",f:"Colourful_mountains_of_the_Zhangye_National_Geopark.jpg"},{zh:"\u8001\u864E\u6C9F12\u53F7\u51B0\u5DDD\uFF08\u7B2C\u4E94\u4E50\u7AE0\uFF09",en:"Laohugou No. 12 Glacier (movement V)",by:"European Union, Copernicus Sentinel-2 imagery",lic:"Attribution",f:"Laohugou_No_12_glacier,_Tibetan_plateau_-_China.jpg"},{zh:"\u300A\u4E1D\u8DEF\u5C71\u6C34\u5730\u56FE\u300B\u5168\u5377\uFF08\u7B2C\u4E8C\u4E50\u7AE0\uFF09",en:"Silk Road Landscape Map, full scroll (movement II)",by:"Ming court painter, c. 1524\u20131539, Palace Museum",lic:"Public domain",f:"\u4E1D\u8DEF\u5C71\u6C34\u5730\u56FE.png"}],ou=[["\u94C5\u767D","Lead white","#cfc8b8"],["\u8D6D\u77F3","Ochre","#a9743c"],["\u77F3\u9752","Azurite","#4a6690"],["\u571F\u7EA2","Red earth","#93402e"],["\u77F3\u7EFF","Malachite","#4f8a6c"],["\u96CC\u9EC4","Orpiment","#cfa040"],["\u6731\u7802","Cinnabar","#b33b2f"],["\u9EDB","Indigo black","#363b48"],["\u91D1","Gold leaf","#bb9a52"],["\u9530\u9ED1","Manganese black","#2c2824"],["\u4E39\u971E\u7EA2","Danxia red","#7c3226"]],Xn=[{zh:"\u4ECA",en:"TODAY",y:"\u4ECA\u5929 \xB7 TODAY",imgs:["yugur1962","tent","mati","tu","mosque"],lines:[["\u6700\u4E0A\u9762\u4E00\u5C42\uFF0C\u662F\u4ECA\u5929\u3002","The top layer is today."],["\u88D5\u56FA\u65CF\u7684\u5148\u7956\u662F\u56DE\u9E58\u4EBA\u3002\u5982\u4ECA\uFF0C\u4E00\u90E8\u5206\u88D5\u56FA\u4EBA\u8BF4\u7A81\u53A5\u8BED\uFF0C\u4E00\u90E8\u5206\u8BF4\u8499\u53E4\u8BED\uFF1B\u4ED6\u4EEC\u4FE1\u85CF\u4F20\u4F5B\u6559\uFF0C\u5199\u6C49\u5B57\u3002","The Yugurs descend from the Uyghurs. Today some Yugurs speak a Turkic language and some a Mongolic one; they practise Tibetan Buddhism and write in Chinese characters."],["\u4E00\u4E2A\u6C11\u65CF\u8EAB\u4E0A\uFF0C\u5C31\u53E0\u7740\u597D\u51E0\u5C42\u3002","One people can carry several layers."]]},{zh:"\u660E",en:"MING",y:"1368 \u2014 1644",imgs:["jiayuguan","silkjyg"],lines:[["1372\u5E74\uFF0C\u660E\u671D\u5728\u7941\u8FDE\u5C71\u4E0E\u9ED1\u5C71\u4E4B\u95F4\u7684\u5CE1\u53E3\u4FEE\u8D77\u5609\u5CEA\u5173\u3002","In 1372 the Ming built Jiayu Pass in the gap between the Qilian and the Black Mountains."],["\u5173\u4E0A\u6709\u5899\uFF0C\u5899\u4E0A\u6709\u95E8\u3002\u5546\u961F\u7167\u6837\u8FDB\u51FA\uFF1B\u5BAB\u5EF7\u753B\u5E08\u628A\u8FD9\u6761\u8DEF\u4E00\u76F4\u753B\u5230\u4E86\u5929\u65B9\u3002","The pass had a wall, and the wall had a gate. Caravans kept coming and going, and a court painter drew the road all the way to Mecca."]]},{zh:"\u8499\u53E4 \xB7 \u5143",en:"MONGOL \xB7 YUAN",y:"1227 \u2014 1368",imgs:["sakya"],lines:[["1247\u5E74\uFF0C\u8499\u53E4\u5B97\u738B\u9614\u7AEF\u4E0E\u8428\u8FE6\u73ED\u667A\u8FBE\u5728\u51C9\u5DDE\u4F1A\u9762\uFF0C\u8BAE\u5B9A\u5410\u8543\u5F52\u9644\u8499\u53E4\u3002","In 1247 the Mongol prince K\xF6den met Sakya Pandita at Liangzhou, and Tibet submitted to Mongol rule."],["\u9A6C\u53EF\xB7\u6CE2\u7F57\u5199\u9053\uFF0C\u4ED6\u5728\u7518\u5DDE\u4F4F\u4E86\u4E00\u5E74\u3002\u57CE\u91CC\u6709\u8BB8\u591A\u4F5B\u5BFA\uFF0C\u4E5F\u6709\u4E09\u5EA7\u57FA\u7763\u6559\u5802\u3002","Marco Polo wrote that he spent a year in Ganzhou, a city of many Buddhist temples and three Christian churches."]]},{zh:"\u897F\u590F",en:"XI XIA",y:"1038 \u2014 1227",imgs:["stele_t","stele_c","tangutmusic","dafo","xixiatext"],lines:[["\u515A\u9879\u4EBA\u5EFA\u7ACB\u897F\u590F\uFF0C\u521B\u5236\u4E86\u897F\u590F\u6587\u3002","The Tangut founded Xi Xia and created a script of their own."],["\u51C9\u5DDE\u7684\u4E00\u5757\u77F3\u7891\uFF0C\u4E00\u9762\u523B\u897F\u590F\u6587\uFF0C\u4E00\u9762\u523B\u6C49\u6587\uFF0C\u8BB2\u7684\u662F\u540C\u4E00\u5EA7\u4F5B\u5854\u3002","A stele at Liangzhou bears Tangut on one face and Chinese on the other, and both tell of the same pagoda."],["\u5F20\u6396\u5927\u4F5B\u5BFA\u59CB\u5EFA\u4E8E1098\u5E74\u3002\u897F\u590F\u4EBA\u5851\u7684\u5367\u4F5B\u957F\u4E09\u5341\u56DB\u7C73\u534A\uFF0C\u7761\u4E86\u4E5D\u767E\u591A\u5E74\u3002","Zhangye\u2019s Great Buddha Temple was founded in 1098. Its reclining Buddha, 34.5 metres long, has slept for more than nine hundred years."]]},{zh:"\u5410\u8543 \xB7 \u56DE\u9E58",en:"TIBETAN \xB7 UYGHUR",y:"764 \u2014 1036",imgs:["zhangyichao","uyghur"],lines:[["\u5B89\u53F2\u4E4B\u4E71\u540E\uFF0C\u5410\u8543\u5360\u636E\u6CB3\u897F\u8FD1\u767E\u5E74\u3002","After the An Lushan rebellion, the Tibetan empire held Hexi for nearly a century."],["848\u5E74\uFF0C\u6C99\u5DDE\u4EBA\u5F20\u8BAE\u6F6E\u8D77\u5175\uFF0C\u628A\u6CB3\u897F\u8BF8\u5DDE\u5F52\u8FD8\u5510\u671D\u3002","In 848 Zhang Yichao of Shazhou rose in arms and returned the Hexi prefectures to the Tang."],["\u56DE\u9E58\u4EBA\u4ECE\u6F20\u5317\u5357\u8FC1\uFF0C\u5728\u7518\u5DDE\u7ACB\u56FD\u3002\u4ECA\u5929\u7684\u88D5\u56FA\u65CF\uFF0C\u5C31\u662F\u4ED6\u4EEC\u7684\u540E\u4EBA\u3002","Uyghurs moving south from the steppe founded a kingdom at Ganzhou. Today\u2019s Yugurs are their descendants."]]},{zh:"\u968B\u5510",en:"SUI \xB7 TANG",y:"581 \u2014 907",imgs:["yangdi","camel"],lines:[["609\u5E74\u516D\u6708\uFF0C\u968B\u7080\u5E1D\u897F\u5DE1\uFF0C\u7FFB\u8D8A\u7941\u8FDE\u5C71\u7684\u5927\u6597\u62D4\u8C37\uFF0C\u9047\u4E0A\u98CE\u96EA\uFF0C\u58EB\u5352\u51BB\u6B7B\u5927\u534A\u3002","In the sixth month of 609, Emperor Yang of Sui crossed the Qilian by the Dadoba Gorge. A blizzard caught them, and more than half his soldiers froze to death."],["\u5728\u7109\u652F\u5C71\u4E0B\uFF0C\u897F\u57DF\u4E8C\u5341\u4E03\u56FD\u7684\u4F7F\u8005\u5728\u9053\u65C1\u8FCE\u5019\u3002","At Mount Yanzhi, envoys of twenty-seven Western kingdoms waited by the road."],["\u201C\u51C9\u5DDE\u4E03\u91CC\u5341\u4E07\u5BB6\uFF0C\u80E1\u4EBA\u534A\u89E3\u5F39\u7435\u7436\u3002\u201D\u2014\u2014\u5C91\u53C2","\u201CLiangzhou: a hundred thousand homes within seven li, and half the foreigners can play the pipa.\u201D \u2014 Cen Shen"],["\u201C\u8461\u8404\u7F8E\u9152\u591C\u5149\u676F\uFF0C\u6B32\u996E\u7435\u7436\u9A6C\u4E0A\u50AC\u3002\u201D\u2014\u2014\u738B\u7FF0\u3002\u8461\u8404\u548C\u7435\u7436\u90FD\u4ECE\u897F\u8FB9\u6765\uFF1B\u4ECA\u5929\u9152\u6CC9\u7684\u591C\u5149\u676F\uFF0C\u7528\u7684\u662F\u7941\u8FDE\u5C71\u7684\u7389\u3002","\u201CFine grape wine in luminous cups; we would drink, but a pipa on horseback calls.\u201D \u2014 Wang Han. Grapes and the pipa both came from the west; Jiuquan\u2019s luminous cups today are carved from Qilian jade."]]},{zh:"\u9B4F\u664B \xB7 \u4E94\u51C9",en:"WEI\u2013JIN \xB7 FIVE LIANG",y:"220 \u2014 439",imgs:["kumarajiva","stupa","tiantishan","brick1","brick2","brick3","brick4"],lines:[["\u4E2D\u539F\u5927\u4E71\u7684\u5E74\u4EE3\uFF0C\u6CB3\u897F\u53CD\u5012\u5B89\u5B9A\u3002\u8FD9\u91CC\u5148\u540E\u51FA\u73B0\u4E94\u4E2A\u201C\u51C9\u201D\u56FD\uFF0C\u5EFA\u7ACB\u8005\u6709\u6C49\u4EBA\u3001\u6C10\u4EBA\u3001\u9C9C\u5351\u4EBA\u548C\u5362\u6C34\u80E1\u4EBA\u3002","While the Central Plains fell apart, Hexi stayed calm. Five states named Liang rose here in turn, founded by Han, Di, Xianbei and Lushui Hu."],["\u5609\u5CEA\u5173\u3001\u9152\u6CC9\u4E00\u5E26\u7684\u9B4F\u664B\u5893\u7816\u4E0A\uFF0C\u6709\u4EBA\u6276\u7281\u8015\u7530\uFF0C\u6709\u4EBA\u653E\u9A6C\u5C04\u730E\u3002","On painted bricks from Wei\u2013Jin tombs around Jiayuguan and Jiuquan, some people plough while others herd horses and hunt from the saddle."],["\u9F9F\u5179\u50E7\u4EBA\u9E20\u6469\u7F57\u4EC0\u5728\u51C9\u5DDE\u4F4F\u4E86\u5341\u4E03\u5E74\uFF0C\u5B66\u4F1A\u4E86\u6C49\u8BED\u3002\u540E\u6765\u4ED6\u5728\u957F\u5B89\u8BD1\u51FA\u300A\u91D1\u521A\u7ECF\u300B\u3002","Kumarajiva, a monk from Kucha, lived seventeen years in Liangzhou and learned Chinese there. Later, in Chang\u2019an, he translated the Diamond Sutra."],["439\u5E74\u5317\u9B4F\u706D\u5317\u51C9\uFF0C\u201C\u6C99\u95E8\u4F5B\u4E8B\u7686\u4FF1\u4E1C\u201D\u3002\u51C9\u5DDE\u7684\u50E7\u4EBA\u548C\u5DE5\u5320\u88AB\u8FC1\u5F80\u5E73\u57CE\uFF0C\u4E0D\u4E45\u90A3\u91CC\u5F00\u51FF\u4E86\u4E91\u5188\u77F3\u7A9F\u3002","When Northern Wei conquered the Northern Liang in 439, \u201Cmonks and Buddhist works all went east\u201D. Liangzhou\u2019s monks and craftsmen were moved to Pingcheng, where the Yungang caves were soon carved."]]},{zh:"\u6C49",en:"HAN",y:"\u524D121 \u2014 220",imgs:["zhangqian","horse","slips","huoqubing","frontier"],lines:[["\u5F20\u9A9E\u4E24\u6B21\u51FA\u4F7F\u897F\u57DF\u3002\u516C\u5143\u524D121\u5E74\uFF0C\u970D\u53BB\u75C5\u4E24\u6B21\u51FA\u51FB\u6CB3\u897F\u3002","Zhang Qian made two journeys to the Western Regions. In 121 BCE Huo Qubing led two campaigns into Hexi."],["\u6C49\u671D\u6CBF\u8D70\u5ECA\u4FEE\u8D77\u957F\u57CE\u3001\u70FD\u71E7\u548C\u9A7F\u7AD9\u3002\u5C45\u5EF6\u6C49\u7B80\u8BB0\u4E0B\u620D\u5352\u7684\u53E3\u7CAE\u3001\u9A6C\u5339\u548C\u5BB6\u4FE1\uFF0C\u9ED1\u6CB3\u7684\u6C34\u4E00\u76F4\u6D41\u5230\u90A3\u91CC\u3002","The Han lined the corridor with walls, beacon towers and post stations. Wooden slips from Juyan record soldiers\u2019 rations, horses and letters home; the Hei River\u2019s water reached that far."],["\u6B66\u5A01\u96F7\u53F0\u6C49\u5893\u51FA\u571F\u7684\u94DC\u5954\u9A6C\uFF0C\u4E00\u53EA\u8E44\u5B50\u8E0F\u5728\u98DE\u9E1F\u80CC\u4E0A\u3002","The bronze horse from the Leitai tomb at Wuwei sets one hoof on a flying bird."],["\u970D\u53BB\u75C5\u5893\u524D\u7684\u77F3\u9A6C\uFF0C\u811A\u4E0B\u8E29\u7740\u4E00\u4E2A\u5308\u5974\u4EBA\u3002\u4ED6\u7684\u8138\u4E5F\u523B\u5728\u8FD9\u5757\u77F3\u5934\u91CC\uFF0C\u7559\u4E86\u4E24\u5343\u5E74\u3002","Before Huo Qubing\u2019s tomb, a stone horse tramples a Xiongnu warrior. His face is carved into the same stone, and it has lasted two thousand years."]]},{zh:"\u6708\u6C0F \xB7 \u5308\u5974",en:"YUEZHI \xB7 XIONGNU",y:"\u524D121\u5E74\u4EE5\u524D",imgs:["plaque","plaque2"],lines:[["\u201C\u59CB\u6708\u6C0F\u5C45\u6566\u714C\u3001\u7941\u8FDE\u95F4\u3002\u201D\u2014\u2014\u300A\u53F2\u8BB0\u300B","\u201CThe Yuezhi first lived between Dunhuang and the Qilian.\u201D \u2014 Records of the Grand Historian"],["\u6708\u6C0F\u88AB\u5308\u5974\u51FB\u8D25\uFF0C\u897F\u8FC1\u4E2D\u4E9A\u3002\u4ED6\u4EEC\u540E\u6765\u5EFA\u7ACB\u7684\u8D35\u971C\uFF0C\u6210\u4E86\u4F5B\u6559\u4E1C\u4F20\u7684\u6E90\u5934\u4E4B\u4E00\u3002","Defeated by the Xiongnu, the Yuezhi moved west into Central Asia. The Kushan empire they later founded became one of the sources from which Buddhism travelled east."],["\u8349\u539F\u4E0A\u7684\u4EBA\uFF0C\u628A\u9A6C\u3001\u72FC\u3001\u9E7F\u94F8\u8FDB\u8170\u5E26\u4E0A\u7684\u94DC\u724C\u3002","Steppe peoples cast horses, wolves and deer into the bronze plaques on their belts."]]},{zh:"\u53F2\u524D",en:"PREHISTORY",y:"\u7EA6\u524D3300 \u2014 \u524D1500",imgs:["majiayao","siba","majiayao2"],lines:[["\u4E94\u5343\u5E74\u524D\uFF0C\u8FD9\u91CC\u7684\u4EBA\u5728\u9676\u7F50\u4E0A\u753B\u65CB\u6DA1\u548C\u7F51\u683C\u3002","Five thousand years ago, people here painted whirlpools and nets on their jars."],["\u7EA6\u56DB\u5343\u5E74\u524D\uFF0C\u897F\u4E9A\u9A6F\u5316\u7684\u5C0F\u9EA6\u3001\u5927\u9EA6\u548C\u51B6\u94DC\u6280\u672F\u6CBF\u7740\u8D70\u5ECA\u4E1C\u6765\uFF0C\u9047\u89C1\u4E86\u4E1C\u65B9\u7684\u7C9F\u548C\u9ECD\u3002","About four thousand years ago, wheat and barley first grown in West Asia, and the craft of smelting copper, came east along the corridor and met the millets of the East."],["\u56DB\u575D\u6587\u5316\uFF0C\u5F97\u540D\u4E8E\u5C71\u4E39\u53BF\u7684\u56DB\u575D\u6EE9\u3002","The Siba culture takes its name from Siba Tan in Shandan county."]]},{zh:"\u57FA\u5CA9",en:"BEDROCK",y:"\u767D\u57A9\u7EAA \xB7 \u7EA6\u4E00\u4EBF\u5E74\u524D",imgs:["thrust","danxia2"],lines:[["\u518D\u5F80\u4E0B\uFF0C\u662F\u767D\u57A9\u7EAA\u6E56\u5E95\u6C89\u79EF\u7684\u7EA2\u8272\u7802\u5CA9\uFF0C\u8DDD\u4ECA\u7EA6\u4E00\u4EBF\u5E74\u3002\u90A3\u65F6\u8FD8\u6CA1\u6709\u4EBA\u3002","Further down lies red sandstone laid on Cretaceous lake floors about a hundred million years ago. There were no people yet."],["\u58C1\u753B\u4E0A\u7684\u989C\u6599\uFF0C\u672C\u662F\u78E8\u788E\u7684\u77FF\u77F3\u3002\u753B\u4E0A\u7684\u989C\u8272\uFF0C\u539F\u90FD\u662F\u5C71\u91CC\u7684\u989C\u8272\u3002","Mural pigments are ground minerals. Every colour on those walls was first a colour inside a mountain."]]}],lu={wuwei:[102.638,37.928,"\u6B66\u5A01 \xB7 \u51C9\u5DDE","WUWEI \xB7 LIANGZHOU","city"],zhangye:[100.45,38.926,"\u5F20\u6396 \xB7 \u7518\u5DDE","ZHANGYE \xB7 GANZHOU","city"],jiuquan:[98.494,39.733,"\u9152\u6CC9 \xB7 \u8083\u5DDE","JIUQUAN \xB7 SUZHOU","city"],jiayuguan:[98.215,39.802,"\u5609\u5CEA\u5173","JIAYU PASS","city"],dunhuang:[94.662,40.142,"\u6566\u714C \xB7 \u6C99\u5DDE","DUNHUANG \xB7 SHAZHOU","city"],yumen:[93.864,40.354,"\u7389\u95E8\u5173","YUMEN PASS","city"],wushaoling:[102.87,37.2,"\u4E4C\u9798\u5CAD","WUSHAOLING","place"],yanzhi:[101.4,38.4,"\u7109\u652F\u5C71","MOUNT YANZHI","place"],danxia:[100.075,38.955,"\u5F20\u6396\u4E39\u971E","ZHANGYE DANXIA","place"],mati:[100.427,38.483,"\u9A6C\u8E44\u5BFA","MATI SI","place"],biandukou:[100.96,38.25,"\u6241\u90FD\u53E3 \xB7 \u5927\u6597\u62D4\u8C37","BIANDUKOU \xB7 DADOBA GORGE","place"],qilian:[98.9,38.7,"\u7941 \u8FDE \u5C71","QILIAN SHAN","big"],badain:[101.8,40.45,"\u5DF4\u4E39\u5409\u6797\u6C99\u6F20","BADAIN JARAN DESERT","big"],qinghai:[100.2,36.9,"\u9752\u6D77\u6E56","QINGHAI LAKE","place"],shiyang:[102.95,38.33,"\u77F3\u7F8A\u6CB3","SHIYANG RIVER","river"],hei:[100.15,39.4,"\u9ED1\u6CB3","HEI RIVER","river"],shule:[96.3,40.33,"\u758F\u52D2\u6CB3","SHULE RIVER","river"],c_tianzhu:[103.14,36.98,"\u5929\u795D \xB7 \u85CF\u65CF","TIANZHU \xB7 TIBETAN","county"],c_sunan:[99.615,38.835,"\u8083\u5357 \xB7 \u88D5\u56FA\u65CF","SUNAN \xB7 YUGUR","county"],c_subei:[94.877,39.512,"\u8083\u5317 \xB7 \u8499\u53E4\u65CF","SUBEI \xB7 MONGOL","county"],c_aksay:[94.34,39.63,"\u963F\u514B\u585E \xB7 \u54C8\u8428\u514B\u65CF","AKSAY \xB7 KAZAKH","county"],c_menyuan:[101.62,37.376,"\u95E8\u6E90 \xB7 \u56DE\u65CF","MENYUAN \xB7 HUI","county"],c_huzhu:[101.957,36.84,"\u4E92\u52A9 \xB7 \u571F\u65CF","HUZHU \xB7 TU","county"],c_datong:[101.685,36.927,"\u5927\u901A \xB7 \u56DE\u65CF\u571F\u65CF","DATONG \xB7 HUI & TU","county"]},ec=i=>Math.log(Math.tan(Math.PI/4+i*Math.PI/360)),Qh=ec(rr.N),B0=ec(rr.S);function z0(i,e){let t=(i-rr.W)/(rr.E-rr.W),n=(Qh-ec(e))/(Qh-B0);return[(t-.5)*Di,(n-.5)*Ui]}var Pi=null;function Vt(i,e){if(!Pi)return 0;let t=(i/Di+.5)*(on-1),n=(e/Ui+.5)*(kn-1);t=Math.max(0,Math.min(on-1.001,t)),n=Math.max(0,Math.min(kn-1.001,n));let s=t|0,r=n|0,a=t-s,o=n-r,l=r*on+s,c=Pi[l],h=Pi[l+1],u=Pi[l+on],f=Pi[l+on+1];return(c*(1-a)+h*a)*(1-o)+(u*(1-a)+f*a)*o}function Le(i,e,t=0,n=!1){let[s,r]=z0(i,e);return new C(s,n?t:Vt(s,r)+t,r)}function cr(i,e=0){let t=lu[i];return Le(t[0],t[1],e)}var Mn=matchMedia("(pointer:coarse)").matches||Math.min(innerWidth,innerHeight)<560,H0=matchMedia("(prefers-reduced-motion: reduce)").matches,di=document.getElementById("gl"),Sn;try{if(Sn=new ta({canvas:di,antialias:!1,powerPreference:"high-performance"}),!Sn.capabilities.isWebGL2)throw new Error("no webgl2")}catch(i){throw document.getElementById("nogl").hidden=!1,i}var Ni=Math.min(devicePixelRatio||1,Mn?1.5:1.75);Sn.setPixelRatio(Ni);Sn.setSize(innerWidth,innerHeight);Sn.toneMapping=Qs;Sn.toneMappingExposure=1;var Ze=new Bt(48,innerWidth/innerHeight,.1,5e3);function cu(){let i=innerWidth/innerHeight;Ze.fov=i<1?58+(1-i)*30:48,Ze.aspect=i,Ze.updateProjectionMatrix()}cu();var mn=new Ys,ar=new Ys,bn=new va(Sn),Ql=new _a(mn,Ze);bn.addPass(Ql);var tc=new Ss(new Ae(innerWidth/2,innerHeight/2),.55,.65,.78);bn.addPass(tc);bn.addPass(new xa);var Ta=new Ms({uniforms:{tDiffuse:{value:null},uTime:{value:0},uFade:{value:1},uFadeCol:{value:new Ee(658448)},uGrain:{value:H0?0:.035},uVig:{value:1.15}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uFade,uGrain,uVig; uniform vec3 uFadeCol; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 q=vUv-.5; c.rgb*=clamp(1.-dot(q,q)*uVig,0.,1.);
      c.rgb+=(h(vUv*913.7+fract(uTime*7.31))-.5)*uGrain; c.rgb=mix(c.rgb,uFadeCol,uFade); gl_FragColor=vec4(c.rgb,1.); }`});bn.addPass(Ta);var nc=`
float hash12(vec2 p){ vec3 p3=fract(vec3(p.xyx)*.1031); p3+=dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
float hash13(vec3 p3){ p3=fract(p3*.1031); p3+=dot(p3,p3.zyx+31.32); return fract((p3.x+p3.y)*p3.z); }
float vnoise(vec2 p){ vec2 i=floor(p),f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash12(i),hash12(i+vec2(1,0)),u.x),mix(hash12(i+vec2(0,1)),hash12(i+vec2(1,1)),u.x),u.y); }
float vnoise3(vec3 p){ vec3 i=floor(p),f=fract(p); vec3 u=f*f*(3.-2.*f);
  float a=hash13(i),b=hash13(i+vec3(1,0,0)),c=hash13(i+vec3(0,1,0)),d=hash13(i+vec3(1,1,0));
  float e=hash13(i+vec3(0,0,1)),f1=hash13(i+vec3(1,0,1)),g=hash13(i+vec3(0,1,1)),h=hash13(i+vec3(1,1,1));
  return mix(mix(mix(a,b,u.x),mix(c,d,u.x),u.y),mix(mix(e,f1,u.x),mix(g,h,u.x),u.y),u.z); }
float fbm(vec2 p){ float s=0.,a=.5; for(int i=0;i<4;i++){ s+=a*vnoise(p); p=p*2.03+17.1; a*=.5; } return s; }
float fbm3(vec3 p){ float s=0.,a=.5; for(int i=0;i<3;i++){ s+=a*vnoise3(p); p=p*2.07+11.3; a*=.5; } return s; }
`;function k0(){let e=new Uint8Array(262144),t=(s,r,a)=>{let o=Math.imul(s,374761393)^Math.imul(r,668265263)^Math.imul(a,982451653);return o=Math.imul(o^o>>>13,1274126177),o^=o>>>16,(o>>>0)/4294967295},n=(s,r,a,o)=>{let l=s*a,c=r*a,h=Math.floor(l),u=Math.floor(c),f=l-h,p=c-u,g=f*f*(3-2*f),v=p*p*(3-2*p),m=(d,E)=>t(((h+d)%a+a)%a,((u+E)%a+a)%a,o);return(m(0,0)*(1-g)+m(1,0)*g)*(1-v)+(m(0,1)*(1-g)+m(1,1)*g)*v};for(let s=0;s<256;s++)for(let r=0;r<256;r++){let a=r/256,o=s/256,l=(s*256+r)*4;e[l]=n(a,o,16,1)*255,e[l+1]=(n(a,o,4,2)*.5+n(a,o,8,3)*.25+n(a,o,16,4)*.125+n(a,o,32,5)*.0625)/.9375*255,e[l+2]=(n(a,o,64,6)*.6+n(a,o,128,7)*.4)*255,e[l+3]=(n(a,o,8,8)*.5+n(a,o,16,9)*.25+n(a,o,32,10)*.125+n(a,o,64,11)*.0625)/.9375*255}return e}var V0=k0();function hu(i){let e=new Zs(V0,256,256,jt,fn);return e.wrapS=e.wrapT=Hs,e.magFilter=zt,e.minFilter=i?Nn:zt,e.generateMipmaps=!!i,e.needsUpdate=!0,e}var Ca=hu(!0),G0=hu(!1),Ra="uniform sampler2D uNoise; vec4 NT(vec2 p){ return texture2D(uNoise,p); }";function uu(){let i=new je({side:At,depthWrite:!1,depthTest:!1,uniforms:{uNoise:{value:Ca},uTop:{value:new Ee},uHor:{value:new Ee},uBot:{value:new Ee},uSunDir:{value:new C(0,.2,-1).normalize()},uSunCol:{value:new Ee},uStars:{value:0},uTime:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD=position; vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position=p.xyww; }",fragmentShader:nc+Ra+`uniform vec3 uTop,uHor,uBot,uSunDir,uSunCol; uniform float uStars,uTime; varying vec3 vD;
      void main(){ vec3 d=normalize(vD); float h=d.y;
        vec3 c=mix(uHor,uTop,smoothstep(0.,.6,h)); c=mix(c,uBot,smoothstep(0.,-.3,h));
        float s=max(dot(d,uSunDir),0.); c+=uSunCol*(pow(s,5.)*.22+pow(s,160.)*.45+pow(s,5000.)*2.5);
        if(uStars>0.){ vec3 q=d*420.; vec3 i=floor(q); float r=hash13(i); vec3 f=fract(q)-.5;
          float st=step(.994,r)*smoothstep(.32,0.,length(f))*smoothstep(.02,.35,h);
          c+=vec3(.9,.95,1.)*st*uStars*(1.3+.9*sin(uTime*1.7+r*80.))*(.4+r*2.);
          c+=vec3(.55,.6,.75)*uStars*.05*smoothstep(.5,.0,abs(dot(d,normalize(vec3(.4,.55,-.7)))))*NT(d.xz*1.5).g*smoothstep(0.,.3,h); }
        gl_FragColor=vec4(c,1.); }`}),e=new ut(new aa(2e3,48,24),i);return e.renderOrder=-10,e.frustumCulled=!1,e}var Ea=uu();mn.add(Ea);var ic=uu();ar.add(ic);var Zt={mesh:null,mat:null},Pa=document.createElement("canvas");Pa.width=512;Pa.height=298;var Gn=Pa.getContext("2d");Gn.fillStyle="#000";Gn.fillRect(0,0,512,298);var sc=new Js(Pa);function W0(i,e){let t=Mn?[384,224]:[1024,596],n=new ai(Di,Ui,t[0],t[1]);n.rotateX(-Math.PI/2);let s=new je({uniforms:{uH:{value:i},uSat:{value:e},uMelt:{value:sc},uNoise:{value:Ca},uTexel:{value:new Ae(1/on,1/kn)},uWorld:{value:new Ae(Di,Ui)},uSunDir:{value:new C(.3,.3,-1).normalize()},uSunCol:{value:new Ee(1,1,1)},uSkyCol:{value:new Ee(.2,.25,.35)},uGndCol:{value:new Ee(.05,.04,.04)},uFogCol:{value:new Ee(.05,.06,.08)},uFogDen:{value:.0012},uSnowline:{value:20.5},uContour:{value:.3},uOasis:{value:.5},uTime:{value:0},uSatAmt:{value:.75},uExpo:{value:1},uPaint:{value:0},uMeltK:{value:1},uHole:{value:new C(0,0,0)},uHoleOn:{value:0},uCamPos:{value:Ze.position}},vertexShader:`uniform sampler2D uH; varying vec2 vUv; varying vec3 vW; varying float vEdge;
      void main(){ vUv=uv; vec3 p=position; p.y=texture2D(uH,vec2(uv.x,1.-uv.y)).r;
        float e=min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y)); vEdge=smoothstep(0.,.07,e); p.y=mix(-14.,p.y,smoothstep(0.,.035,e));
        vec4 w=modelMatrix*vec4(p,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,fragmentShader:nc+Ra+`
      uniform sampler2D uH,uSat,uMelt; uniform vec2 uTexel,uWorld;
      uniform vec3 uSunDir,uSunCol,uSkyCol,uGndCol,uFogCol,uHole,uCamPos;
      uniform float uFogDen,uSnowline,uContour,uOasis,uTime,uSatAmt,uExpo,uHoleOn,uPaint,uMeltK;
      varying vec2 vUv; varying vec3 vW; varying float vEdge;
      float Ht(vec2 p){ return texture2D(uH,p).r; }
      void main(){
        vec2 hu=vec2(vUv.x,1.-vUv.y);
        float dh=length(vW.xz-uHole.xy);
        if(uHoleOn>.5 && dh<uHole.z) discard;
        float hl=Ht(hu-vec2(uTexel.x,0.)),hr=Ht(hu+vec2(uTexel.x,0.)),hn=Ht(hu-vec2(0.,uTexel.y)),hs=Ht(hu+vec2(0.,uTexel.y));
        vec3 n=normalize(vec3((hl-hr)/(2.*uWorld.x*uTexel.x),1.,(hn-hs)/(2.*uWorld.y*uTexel.y)));
        float y=vW.y; float meters=y/7.*1000.+1400.;
        vec3 sat=texture2D(uSat,vUv).rgb; vec3 sg=sqrt(max(sat,0.));
        float lum=dot(sg,vec3(.299,.587,.114));
        float veg=smoothstep(.0,.05,sg.g-sg.r)*smoothstep(.6,.3,lum);
        float water=smoothstep(.03,.1,sg.b-sg.r)*smoothstep(.55,.25,lum);
        vec3 alb=mix(vec3(lum*lum)*vec3(1.05,.96,.86),sat*1.1,uSatAmt);
        float slope=1.-n.y;
        float nz=NT(vW.xz*.0225).g;
        float sl=uSnowline+(nz-.5)*5.;
        float snow=smoothstep(sl-1.,sl+1.4,y)*smoothstep(.7,.38,slope);
        snow=max(snow,smoothstep(.6,.82,lum)*smoothstep(uSnowline-6.,uSnowline-1.,y));
        float melt=texture2D(uMelt,vUv).r*uMeltK;
        snow*=1.-melt*.85;
        alb=mix(alb,vec3(.8,.85,.92),snow);
        alb=mix(alb,vec3(.01,.025,.04),water);
        float dif=max(dot(n,uSunDir),0.);
        vec3 amb=mix(uGndCol,uSkyCol,n.y*.5+.5);
        vec3 col=alb*(dif*uSunCol+amb);
        float sp=pow(hash12(floor(vW.xz*30.)),80.)*snow*(.5+.5*sin(uTime*2.3+vW.x*9.+vW.z*5.));
        col+=sp*(uSunCol+uSkyCol)*1.6;
        vec3 V=normalize(uCamPos-vW); vec3 R=reflect(-uSunDir,vec3(0.,1.,0.));
        col+=water*(pow(max(dot(R,V),0.),40.)*uSunCol*1.2+uSkyCol*.25);
        float low=smoothstep(4.5,1.5,y);
        float flick=.85+.15*sin(uTime*.8+vW.x*.07+vW.z*.05);
        col+=vec3(1.,.7,.32)*veg*low*uOasis*.34*flick;
        col+=vec3(.2,.7,.5)*veg*low*uOasis*.12;
        float dcam=length(vW-uCamPos);
        if(uPaint>.001){
          // blue-green landscape (qinglu shanshui): ochre foothills, malachite slopes, azurite crests, silk ground, ink ridges
          float hc=Ht(hu); float lap=(hl+hr+hn+hs-4.*hc);
          float h01=clamp(y/26.,0.,1.);
          float silkN=NT(vUv*vec2(56.,32.5)).a*.5+NT(vUv*vec2(15.,8.7)).g*.5;
          vec3 silk=mix(vec3(.74,.6,.36),vec3(.86,.74,.5),silkN);
          float mtn=smoothstep(.25,.6,slope*3.+h01*.8);
          float st=NT(vW.xz*vec2(.09,.03)+vec2(0.,y*.075)).g;
          vec3 ochre=vec3(.62,.4,.2), mala=vec3(.22,.48,.36), azu=vec3(.16,.3,.55);
          vec3 m=mix(ochre,mala,smoothstep(.15,.45,h01+st*.2));
          m=mix(m,azu,smoothstep(.45,.8,h01+(st-.5)*.3+(1.-n.y)*.4));
          vec3 pc=mix(silk,m,mtn);
          pc=mix(pc,vec3(.25,.55,.4),veg*low*.8);
          pc=mix(pc,vec3(.1,.22,.42),water);
          pc=mix(pc,vec3(.93,.92,.88),snow*.85);
          float shade=.62+.48*dif;
          float ink=smoothstep(.004,.03,-lap)*smoothstep(.2,.6,mtn)*(.55+.45*st);
          pc*=shade*(1.-ink*.75);
          pc*=.86+.18*silkN;
          vec3 lit=pc*(.55*(uSunCol+uSkyCol*2.)+.25);
          col=mix(col,lit,uPaint);
        }
        float cv=meters/250.; float cw=fwidth(cv);
        float cl=1.-smoothstep(0.,1.3,abs(fract(cv-.5)-.5)/max(cw,1e-4));
        float major=1.-step(.5,mod(floor(cv+.5),4.));
        float minorK=.28*smoothstep(380.,140.,dcam);
        col+=vec3(.85,.66,.36)*cl*uContour*mix(minorK,1.,major)*(1.-snow*.55)*smoothstep(1.2,.15,cw);
        col+=vec3(.3,.62,1.)*melt*(.18+.1*sin(uTime*2.+vW.x*.3));
        if(uHoleOn>.5){ float rim=smoothstep(uHole.z+3.,uHole.z,dh); col=col*(1.-rim*.6)+vec3(.9,.45,.2)*pow(rim,4.)*.9; }
        float f=1.-exp(-dcam*uFogDen);
        col=mix(col,uFogCol,clamp(f,0.,1.));
        col=mix(uFogCol,col,vEdge);
        gl_FragColor=vec4(col*uExpo,1.);
      }`,extensions:{derivatives:!0}}),r=new ut(n,s);r.frustumCulled=!1,mn.add(r),Zt.mesh=r,Zt.mat=s}var Gt={mesh:null,mat:null};function X0(i){let e=[],t=[],n=[],s=[],r=[],a=[],o=0,l=Math.log(12e4);for(let u of i){if(u.length<2)continue;let f=u.map(([g,v,m])=>{let d=(g-.5)*Di,E=(v-.5)*Ui;return[d,E,Math.max(0,Math.log(m)-Math.log(300))/(l-Math.log(300))]}),p=0;for(let g=0;g<f.length;g++){let[v,m,d]=f[g],E=f[Math.max(0,g-1)],T=f[Math.min(f.length-1,g+1)],M=T[0]-E[0],L=T[1]-E[1],w=Math.hypot(M,L)||1;M/=w,L/=w,g>0&&(p+=Math.hypot(v-f[g-1][0],m-f[g-1][1]));let A=.45+2.3*d*d;for(let P of[-1,1]){let S=v-L*A*P,y=m+M*A*P;e.push(S,Math.max(Vt(S,y),Vt(v,m))+.5,y),t.push(d),n.push(p),s.push(Vt(v,m)),r.push(P)}if(g>0){let P=o-2;a.push(P,P+1,o,P+1,o+1,o)}o+=2}}let c=new vt;c.setAttribute("position",new Ge(e,3)),c.setAttribute("aAcc",new Ge(t,1)),c.setAttribute("aDist",new Ge(n,1)),c.setAttribute("aH",new Ge(s,1)),c.setAttribute("aSide",new Ge(r,1)),c.setIndex(a);let h=new je({transparent:!0,depthWrite:!1,blending:xn,side:Xt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,uniforms:{uFill:{value:40},uTime:{value:0},uOn:{value:0},uCamPos:{value:Ze.position},uFogDen:{value:.0012}},vertexShader:`attribute float aAcc,aDist,aH,aSide; varying float vA,vD,vH,vS; varying vec3 vW;
      void main(){ vA=aAcc; vD=aDist; vH=aH; vS=aSide; vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float uFill,uTime,uOn,uFogDen; uniform vec3 uCamPos; varying float vA,vD,vH,vS; varying vec3 vW;
      void main(){ float e=smoothstep(1.,.15,abs(vS));
        float vis=smoothstep(uFill-1.,uFill+1.5,vH);
        float front=exp(-abs(vH-uFill)*1.2)*step(.01,vis);
        float pulse=.55+.45*sin(vD*.22-uTime*2.6);
        vec3 c=mix(vec3(.25,.55,1.),vec3(.8,.94,1.),vA)*(.7+2.*vA)*pulse;
        c+=vec3(.9,.97,1.)*front*1.5;
        float fog=exp(-length(vW-uCamPos)*uFogDen);
        float a=e*vis*uOn*(.3+.7*vA)*fog;
        gl_FragColor=vec4(c*a,a); }`});Gt.mesh=new ut(c,h),Gt.mesh.frustumCulled=!1,Gt.mesh.renderOrder=2,Gt.mat=h,mn.add(Gt.mesh)}function q0(i,e){let t=new vt,n=new Float32Array(i*3),s=new Float32Array(i);for(let o=0;o<i;o++)n[o*3]=Math.random(),n[o*3+1]=Math.random(),n[o*3+2]=Math.random(),s[o]=Math.random();t.setAttribute("position",new St(n,3)),t.setAttribute("aSeed",new St(s,1));let r=new je({transparent:!0,depthWrite:!1,blending:xn,uniforms:{uTime:{value:0},uCam:{value:new C},uBox:{value:e.clone()},uFall:{value:2.2},uWind:{value:new Ae(1.2,.4)},uSize:{value:1.1},uOp:{value:0},uCyl:{value:new pt(0,0,0,0)},uPR:{value:Ni}},vertexShader:`attribute float aSeed; uniform float uTime,uFall,uSize,uPR; uniform vec3 uCam,uBox; uniform vec2 uWind; varying float vA; varying vec3 vW;
      void main(){ vec3 off=vec3(uWind.x*uTime,-uTime*uFall*(.55+.45*aSeed),uWind.y*uTime);
        vec3 q=fract(position+(off-uCam)/uBox); vec3 w=uCam+(q-.5)*uBox;
        w.x+=sin(uTime*.6+aSeed*40.)*.7; w.z+=cos(uTime*.5+aSeed*30.)*.5; vW=w;
        vec4 mv=viewMatrix*vec4(w,1.); gl_Position=projectionMatrix*mv;
        float d=-mv.z; gl_PointSize=uSize*uPR*(30./max(d,.5))*(.6+.8*aSeed);
        vA=smoothstep(uBox.x*.5,uBox.x*.15,d)*smoothstep(.3,1.5,d); }`,fragmentShader:`uniform float uOp; uniform vec4 uCyl; varying float vA; varying vec3 vW;
      void main(){ if(uCyl.w>0. && length(vW.xz-uCyl.xy)>uCyl.z) discard; float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d)*vA*uOp; gl_FragColor=vec4(vec3(.85,.9,1.)*a,a); }`}),a=new fs(t,r);return a.frustumCulled=!1,a.renderOrder=5,a}var Rt=q0(Mn?1800:4200,new C(120,70,120));mn.add(Rt);var K={n:Mn?700:1400,trail:6};K.x=new Float32Array(K.n);K.z=new Float32Array(K.n);K.vx=new Float32Array(K.n);K.vz=new Float32Array(K.n);K.life=new Float32Array(K.n);K.hist=new Float32Array(K.n*K.trail*3);K.next=0;{let i=new vt,e=K.n*(K.trail-1);K.pos=new Float32Array(e*2*3),K.alpha=new Float32Array(e*2),i.setAttribute("position",new St(K.pos,3).setUsage(fa)),i.setAttribute("aA",new St(K.alpha,1).setUsage(fa));let t=new je({transparent:!0,depthWrite:!1,blending:xn,vertexShader:"attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float vA; void main(){ gl_FragColor=vec4(vec3(.55,.8,1.)*vA*1.8,vA); }"});K.lines=new sa(i,t),K.lines.frustumCulled=!1,K.lines.renderOrder=6,mn.add(K.lines)}function Y0(i,e,t){for(let n=0;n<t;n++){let s=K.next;K.next=(K.next+1)%K.n;let r=Math.random()*3.5,a=Math.random()*6.283;K.x[s]=i+Math.cos(a)*r,K.z[s]=e+Math.sin(a)*r,K.vx[s]=0,K.vz[s]=0,K.life[s]=8+Math.random()*7;let o=Vt(K.x[s],K.z[s])+.3;for(let l=0;l<K.trail;l++){let c=(s*K.trail+l)*3;K.hist[c]=K.x[s],K.hist[c+1]=o,K.hist[c+2]=K.z[s]}}}var eu=0;function Z0(i){eu++;let e=eu%2===0,t=0;for(let n=0;n<K.n;n++){let s=n*K.trail*3;if(K.life[n]>0){K.life[n]-=i;let a=K.x[n],o=K.z[n],l=(Vt(a+.8,o)-Vt(a-.8,o))/1.6,c=(Vt(a,o+.8)-Vt(a,o-.8))/1.6;K.vx[n]+=(-l*55+(Math.random()-.5)*3)*i,K.vz[n]+=(-c*55+(Math.random()-.5)*3)*i;let h=Math.exp(-1.4*i);K.vx[n]*=h,K.vz[n]*=h;let u=Math.hypot(K.vx[n],K.vz[n]);if(u>22&&(K.vx[n]*=22/u,K.vz[n]*=22/u),K.x[n]+=K.vx[n]*i,K.z[n]+=K.vz[n]*i,e)for(let f=K.trail-1;f>0;f--){let p=s+f*3,g=s+(f-1)*3;K.hist[p]=K.hist[g],K.hist[p+1]=K.hist[g+1],K.hist[p+2]=K.hist[g+2]}K.hist[s]=K.x[n],K.hist[s+1]=Vt(K.x[n],K.z[n])+.35,K.hist[s+2]=K.z[n]}let r=Math.max(0,Math.min(1,K.life[n]/3));for(let a=0;a<K.trail-1;a++){let o=s+a*3,l=s+(a+1)*3,c=t*6;K.pos[c]=K.hist[o],K.pos[c+1]=K.hist[o+1],K.pos[c+2]=K.hist[o+2],K.pos[c+3]=K.hist[l],K.pos[c+4]=K.hist[l+1],K.pos[c+5]=K.hist[l+2],K.alpha[t*2]=r*(1-a/K.trail),K.alpha[t*2+1]=r*(1-(a+1)/K.trail),t++}}K.lines.geometry.attributes.position.needsUpdate=!0,K.lines.geometry.attributes.aA.needsUpdate=!0}function J0(i,e){let t=i/Di+.5,n=e/Ui+.5,s=t*512,r=n*298,a=Gn.createRadialGradient(s,r,0,s,r,9);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(1,"rgba(255,255,255,0)"),Gn.globalCompositeOperation="lighter",Gn.fillStyle=a,Gn.fillRect(s-10,r-10,20,20),sc.needsUpdate=!0}var hi={pts:null};function $0(){let i=["wuwei","zhangye","jiuquan","jiayuguan","dunhuang","yumen"],e=new vt,t=[],n=[];i.forEach(r=>{let a=cr(r,.8);t.push(a.x,a.y,a.z),n.push(0)}),e.setAttribute("position",new Ge(t,3)),e.setAttribute("aOn",new Ge(n,1));let s=new je({transparent:!0,depthWrite:!1,blending:xn,uniforms:{uTime:{value:0},uPR:{value:Ni},uOn:{value:0}},vertexShader:"attribute float aOn; uniform float uTime,uPR,uOn; varying float vA; void main(){ vA=aOn*uOn; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=uPR*(10.+4.*sin(uTime*1.3+position.x))*clamp(260./-mv.z,.6,3.); }",fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=(smoothstep(.5,.0,d)*.6+smoothstep(.12,.0,d))*vA; gl_FragColor=vec4(vec3(1.,.78,.42)*a*1.6,a); }"});hi.pts=new fs(e,s),hi.pts.frustumCulled=!1,hi.keys=i,mn.add(hi.pts)}var He={n:Mn?260:520};function K0(){let i=["wushaoling","wuwei","yanzhi","zhangye","jiuquan","jiayuguan","dunhuang","yumen"].map(a=>cr(a,.6));i.splice(3,0,Le(100.9,38.7,.6));let e=new $s(i),t=1500;He.samples=e.getSpacedPoints(t),He.S=t,He.samples.forEach(a=>a.y=Vt(a.x,a.z)+.6);let n=new vt;He.pos=new Float32Array(He.n*3);let s=new Float32Array(He.n*3);He.s=new Float32Array(He.n),He.sp=new Float32Array(He.n),He.off=new Float32Array(He.n);for(let a=0;a<He.n;a++){He.s[a]=Math.random();let o=a%2===0;He.sp[a]=(o?1:-1)*(.006+Math.random()*.01),He.off[a]=(Math.random()-.5)*4;let l=o?[1,.75,.4]:[.6,.8,1];s.set(l,a*3)}n.setAttribute("position",new St(He.pos,3).setUsage(fa)),n.setAttribute("color",new St(s,3));let r=new je({transparent:!0,depthWrite:!1,blending:xn,vertexColors:!0,uniforms:{uOn:{value:0},uPR:{value:Ni}},vertexShader:"uniform float uPR; varying vec3 vC; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=uPR*clamp(90./-mv.z,1.2,4.); }",fragmentShader:"uniform float uOn; varying vec3 vC; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.1,d)*uOn; gl_FragColor=vec4(vC*a*1.4,a); }"});He.pts=new fs(n,r),He.pts.frustumCulled=!1,mn.add(He.pts)}function j0(i){if(!(!He.pts||He.pts.material.uniforms.uOn.value<=0)){for(let e=0;e<He.n;e++){He.s[e]=(He.s[e]+He.sp[e]*i+1)%1;let t=He.s[e]*He.S,n=Math.min(He.S-1,t|0),s=t-n,r=He.samples[n],a=He.samples[n+1],o=a.x-r.x,l=a.z-r.z,c=Math.hypot(o,l)||1,h=r.x+o*s-l/c*He.off[e],u=r.z+l*s+o/c*He.off[e];He.pos[e*3]=h,He.pos[e*3+1]=Vt(h,u)+.5,He.pos[e*3+2]=u}He.pts.geometry.attributes.position.needsUpdate=!0}}var xt={meshes:[],reveal:0,op:0};function Q0(){let i=[Le(98.215,39.8,0,!0),Le(97.4,40.02,0,!0),Le(96.4,40.28,0,!0),Le(95.4,40.25,0,!0),Le(94.66,40.18,0,!0),Le(93.86,40.36,0,!0),Le(92.6,40.5,0,!0)],e=i[i.length-1];for(let o=1;o<=4;o++)i.push(new C(e.x-o*140,o*o*2.2,e.z-o*18));let t=new $s(i),s=t.getLength()/49.78;xt.H=s;let r=new js,a=7.5;for(let o=0;o<4;o++){let c=[],h=[],u=[],f=[];for(let d=0;d<=120;d++){let E=(o+d/120)/4,T=t.getPointAt(E),M=1-d/120;if(c.push(T.x,T.y+a,T.z,T.x,T.y+a+s,T.z),h.push(M,0,M,1),u.push(E,E),d>0){let L=(d-1)*2;f.push(L,L+2,L+1,L+1,L+2,L+3)}}let p=new vt;p.setAttribute("position",new Ge(c,3)),p.setAttribute("uv",new Ge(h,2)),p.setAttribute("aS",new Ge(u,1)),p.setIndex(f);let g=r.load(`assets/img/silk${o}.jpg`);g.colorSpace=Ct,g.anisotropy=4;let v=new je({transparent:!0,depthWrite:!1,side:Xt,uniforms:{map:{value:g},uReveal:{value:0},uOp:{value:0},uTime:{value:0}},vertexShader:"attribute float aS; varying vec2 vUv; varying float vS; void main(){ vUv=uv; vS=aS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D map; uniform float uReveal,uOp,uTime; varying vec2 vUv; varying float vS;
        void main(){ if(vS>uReveal) discard; vec3 c=texture2D(map,vUv).rgb;
          float edge=smoothstep(0.,.04,vUv.y)*smoothstep(1.,.96,vUv.y);
          float front=exp(-(uReveal-vS)*90.);
          float far=smoothstep(.95,.55,vS);
          c=c*1.05+vec3(1.,.8,.45)*front*.9;
          float a=uOp*edge*(.25+.75*far);
          gl_FragColor=vec4(c,a); }`}),m=new ut(p,v);m.frustumCulled=!1,m.renderOrder=3,m.visible=!1,mn.add(m),xt.meshes.push(m)}}var ue={R:18,LH:12,group:new ti,panels:[],titles:[],top:0,built:!1},du=ou.map(i=>new Ee(i[2])),rc={pos:new C,I:1};function wa(i){return ue.top-(i+.5)*ue.LH}function ac(i){return i*2.39996%(Math.PI*2)-Math.PI}function ev(){let i=cr("zhangye");ue.cx=i.x,ue.cz=i.z,ue.top=i.y+.5,ue.group.position.set(ue.cx,0,ue.cz);let e=Xn.length*ue.LH,t=new ps(ue.R,ue.R,e+2,192,1,!0),n=new je({side:At,uniforms:{uNoiseW:{value:G0},uPig:{value:du},uTop:{value:ue.top},uLH:{value:ue.LH},uLamp:{value:rc.pos},uLampI:{value:1},uTime:{value:0},uCenter:{value:new Ae(ue.cx,ue.cz)},uR:{value:ue.R}},vertexShader:"varying vec3 vW; void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform sampler2D uNoiseW; uniform vec3 uPig[11]; uniform float uTop,uLH,uLampI,uTime,uR; uniform vec3 uLamp; uniform vec2 uCenter; varying vec3 vW;
      vec4 NW(vec2 p){ return texture2D(uNoiseW,p); }
      float bnd(float i,float th){ return -i*uLH+1.8*sin(th*2.+i*1.7)+1.*sin(th*5.+i*3.1)+.45*sin(th*11.+i*.7); }
      void main(){
        vec2 rel=vW.xz-uCenter; float th=atan(rel.x,rel.y);
        float U=th/6.2831853+.5;
        float y=vW.y-uTop;
        float C=6.2831853*uR;
        vec2 q=vec2(U*8.,y/C*8.);
        float warp=(NW(q*.5).g-.5)*3.4;
        float yw=y+warp;
        float id=0.,nearest=99.;
        for(int i=1;i<=10;i++){ float b=bnd(float(i),th); if(yw<b) id=float(i); nearest=min(nearest,abs(yw-b)); }
        vec3 base=uPig[int(id)];
        vec2 ql=vec2(U*3.,yw*.085);
        float lam=NW(ql).g;
        float lam2=NW(vec2(U*14.,yw*.36)).a;
        vec3 c=base*(.55+.62*lam)*(.88+.24*lam2);
        c=mix(c,base*1.3+.03,smoothstep(.6,.75,lam)*.45);
        vec2 qg=q*3.;
        float g0=NW(qg).b;
        c*=.95+.1*g0;
        float cl=smoothstep(.76,.84,NW(q*3.4+.37).r);
        c=mix(c,base*1.3+vec3(.04),cl*.22);
        c*=mix(.18,1.,smoothstep(0.,.42,nearest));
        float e=.006;
        float gx=NW(qg+vec2(e,0.)).b, gy=NW(qg+vec2(0.,e)).b;
        float lx=NW(ql+vec2(e*.5,0.)).g, ly=NW(ql+vec2(0.,e*.5)).g;
        vec3 radial=normalize(vec3(-rel.x,0.,-rel.y)); vec3 tang=normalize(vec3(rel.y,0.,-rel.x));
        vec3 N=normalize(radial+tang*((g0-gx)*2.2+(lam-lx)*9.)+vec3(0.,1.,0.)*((g0-gy)*2.2+(lam-ly)*16.));
        vec3 L=uLamp-vW; float d=length(L); L/=d;
        float att=2.6*exp(-d*d*.017)+.035;
        float lit=max(dot(N,L),0.)*uLampI*att;
        float top=exp(y*.03)*.42*(N.y*.4+.6);
        vec3 col=c*(lit*vec3(1.,.8,.58)+top*vec3(.5,.62,.85)+.018);
        gl_FragColor=vec4(col,1.);
      }`}),s=new ut(t,n);s.position.y=ue.top-.3-(e+2)/2,s.frustumCulled=!1,ue.wall=s,ue.group.add(s);let r=new ut(new ra(ue.R,64),new Hn({color:1707274}));r.rotation.x=-Math.PI/2,r.position.y=ue.top-e,ue.group.add(r),ue.group.visible=!1,mn.add(ue.group),Xn.forEach((a,o)=>{let l=ac(o),c=tv(o),h=15,u=7.5,f=tu(c,!0),p=new ps(ue.R-.3,ue.R-.3,u,32,1,!0,l-h/ue.R/2,h/ue.R),g=new ut(p,f);g.position.y=wa(o)+1.2,g.frustumCulled=!1,ue.group.add(g),ue.titles.push(g);let v=a.imgs,m=8.2,d=()=>v.map(L=>m*Vn[L].w/Vn[L].h),E=2*Math.PI*ue.R-h-4-v.length*2.6,T=d().reduce((L,w)=>L+w,0);T>E&&(m*=E/T);let M=l-(h/2+2.6)/ue.R;v.forEach((L,w)=>{let A=m*Vn[L].w/Vn[L].h,P=A/ue.R,S=M-P/2,y=new ps(ue.R-.35,ue.R-.35,m,Math.max(6,Math.ceil(P*24)),1,!0,S-P/2,P),R=tu(null,!1,A/m),H=new ut(y,R);H.position.y=wa(o)+(w%2?-.9:.6),H.frustumCulled=!1,H.userData={id:L,theta:S,layer:o},ue.group.add(H),ue.panels.push(H),M-=P+2.6/ue.R})}),ue.built=!0}function tu(i,e,t=1){return new je({side:At,transparent:!0,depthWrite:!1,uniforms:{uNoise:{value:Ca},map:{value:i},uHas:{value:i?1:0},uLamp:{value:rc.pos},uLampI:{value:1},uHover:{value:0},uAsp:{value:t},uTitle:{value:e?1:0},uIn:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vW; varying vec3 vN; void main(){ vUv=vec2(1.-uv.x,uv.y); vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; vN=normalize(-(modelMatrix*vec4(position.x,0.,position.z,0.)).xyz); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:Ra+`uniform sampler2D map; uniform float uHas,uLampI,uHover,uAsp,uTitle,uIn; uniform vec3 uLamp; varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main(){
        if(uHas<.5) discard;
        vec4 t=texture2D(map,vUv);
        vec3 L=uLamp-vW; float d=length(L); L/=d;
        float lit=max(dot(normalize(vN),L),0.)*uLampI*(2.4*exp(-d*d*.015)+.05);
        if(uTitle>.5){ float a=t.a*uIn; vec3 c=t.rgb*(lit*vec3(1.,.85,.65)+.06); gl_FragColor=vec4(c,a); return; }
        vec2 q=vec2(vUv.x*uAsp,vUv.y);
        float e=min(min(q.x,uAsp-q.x),min(q.y,1.-q.y));
        float rough=(NT(q*.875).r-.5)*.05+(NT(q*2.5).r-.5)*.015;
        float m=smoothstep(.0,.025,e+rough);
        float frame=smoothstep(.0,.02,e+rough+.035)*(1.-m);
        vec3 c=t.rgb*(lit*vec3(1.,.9,.76)+.16+uHover*.35);
        c+=vec3(1.,.6,.3)*uHover*frame*1.5;
        float a=max(m,frame*.85)*uIn;
        c=mix(vec3(.05,.04,.035)*lit,c,m);
        gl_FragColor=vec4(c,a);
      }`})}function tv(i){let e=Xn[i],t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d");n.textAlign="center",n.textBaseline="middle";let s=e.zh.replace(/ · /g,"\xB7"),r=s.length>3?150:s.length>2?180:230;n.font=`${r}px "ZCOOL XiaoWei","Noto Serif SC",serif`,n.fillStyle="rgba(0,0,0,.85)",n.fillText(s,518,214),n.fillStyle="rgba(255,240,215,.35)",n.fillText(s,509,205),n.fillStyle="rgba(236,214,170,.95)",n.fillText(s,512,208),n.font='500 34px "Cinzel","Times New Roman",serif',n.fillStyle="rgba(236,214,170,.9)",n.fillText(e.en.split("").join("\u200A"),512,380),n.font='400 28px "Cinzel","Noto Serif SC",serif',n.fillStyle="rgba(236,214,170,.7)",n.fillText(`${e.y}`,512,432);let a=new Js(t);return a.colorSpace=Ct,a.anisotropy=4,a}var ya={},fu=new js;function pu(i){return ya[i]||(ya[i]=new Promise(e=>{fu.load(`assets/img/${i}.jpg`,t=>{t.colorSpace=Ct,t.anisotropy=4,e(t)},void 0,()=>e(null))})),ya[i]}function nv(){ue.panels.forEach(i=>pu(i.userData.id).then(e=>{e&&(i.material.uniforms.map.value=e,i.material.uniforms.uHas.value=1)}))}var Qe={P:0,target:0,cards:[]},Ma=nc+`
uniform float uF,uE,uTime;
float Dfold(vec2 p){ return uF*(10.*sin(p.x*.045+.9*sin(p.y*.03))+4.5*sin(p.x*.12+p.y*.05+1.3)+2.6*sin(p.y*.09+p.x*.02)); }
float hills(vec2 p){ vec2 q=p*.03; float r=0.,a=1.,w=0.;
  for(int i=0;i<4;i++){ float n=vnoise(q); n=1.-abs(n*2.-1.); r+=n*n*a; w+=a; q=q*2.07+3.1; a*=.5; }
  r/=w; return -9.-30.*(1.-r) - 6.*smoothstep(40.,95.,abs(p.x))*0.; }
float ytop(vec2 p){ return mix(Dfold(p)+uF*6.,hills(p)+uF*6.,uE); }
`,nu=Ra+`
uniform vec3 uPig[11];
vec3 strataCol(float yy,vec2 p){
  float d=-yy/6.; float jit=(NT(p*.003).r-.5)*.35;
  float id=clamp(floor(d+jit),0.,10.);
  vec3 c=uPig[int(id)];
  float lam=.9+.1*sin(d*6.283*2.+NT(p*.0075).r*4.);
  float fb=fract(d+jit); float edge=smoothstep(0.,.05,fb)*smoothstep(1.,.95,fb);
  return c*lam*(.72+.28*edge);
}`;function iv(){let t=Mn?220:340,n=Mn?130:200;Qe.W=220,Qe.D=130;let s={uNoise:{value:Ca},uF:{value:0},uE:{value:0},uTime:{value:0},uPig:{value:du},uSun:{value:new C(-.6,.55,.4).normalize()},uCamPos:{value:Ze.position}};Qe.uni=s;let r=new ai(220,130,t,n);r.rotateX(-Math.PI/2);let a=new je({uniforms:s,vertexShader:Ma+`varying vec3 vW; varying vec3 vN; varying float vOrig;
      void main(){ vec2 p=position.xz; float y=ytop(p); float e=.9;
        float yx=ytop(p+vec2(e,0.)),yz=ytop(p+vec2(0.,e));
        vN=normalize(vec3(y-yx,e,y-yz)); vec3 pos=vec3(p.x,y,p.y); vW=pos;
        vOrig=y-Dfold(p)-uF*6.; gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.); }`,fragmentShader:Ma+nu+`uniform vec3 uSun,uCamPos; varying vec3 vW; varying vec3 vN; varying float vOrig;
      void main(){ vec3 c=strataCol(vOrig,vW.xz); vec3 n=normalize(vN);
        float dif=max(dot(n,uSun),0.); vec3 col=c*(dif*vec3(1.25,1.,.8)+vec3(.22,.24,.32)*(n.y*.5+.6));
        float g=NT(vW.xz*.15).g; col*=.9+.2*g;
        float d=length(vW-uCamPos); col=mix(col,vec3(.5,.34,.28),1.-exp(-d*.0014));
        gl_FragColor=vec4(col,1.); }`});Qe.top=new ut(r,a),ar.add(Qe.top);let o=[],l=[],c=[],h=[],u=0,f=[[[-220/2,130/2],[220/2,130/2],[0,0,1]],[[220/2,130/2],[220/2,-130/2],[1,0,0]],[[220/2,-130/2],[-220/2,-130/2],[0,0,-1]],[[-220/2,-130/2],[-220/2,130/2],[-1,0,0]]];for(let[m,d,E]of f)for(let M=0;M<=260;M++){let L=M/260,w=m[0]+(d[0]-m[0])*L,A=m[1]+(d[1]-m[1])*L;if(o.push(w,0,A,w,0,A),l.push(...E,...E),c.push(1,0),M>0){let P=u-2;h.push(P,P+1,u,P+1,u+1,u)}u+=2}let p=new vt;p.setAttribute("position",new Ge(o,3)),p.setAttribute("normal",new Ge(l,3)),p.setAttribute("aTop",new Ge(c,1)),p.setIndex(h);let g=new je({uniforms:s,side:Xt,vertexShader:Ma+`attribute float aTop; varying vec3 vW; varying vec3 vN2;
      void main(){ vec2 p=position.xz; float y=aTop>.5?ytop(p):-80.; vec3 pos=vec3(p.x,y,p.y); vW=pos; vN2=normal; gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.); }`,fragmentShader:Ma+nu+`uniform vec3 uSun,uCamPos; varying vec3 vW; varying vec3 vN2;
      void main(){ float o=vW.y-Dfold(vW.xz)-uF*6.; vec3 c=strataCol(o,vW.xz+vec2(vW.y*3.,0.));
        float dif=max(dot(normalize(vN2),uSun),0.); vec3 col=c*(dif*vec3(1.15,.95,.8)+.32);
        col*=smoothstep(-80.,-60.,vW.y)*.6+.4;
        float d=length(vW-uCamPos); col=mix(col,vec3(.5,.34,.28),1.-exp(-d*.0014));
        gl_FragColor=vec4(col,1.); }`});Qe.skirt=new ut(p,g),Qe.skirt.frustumCulled=!1,ar.add(Qe.skirt);let v=Object.keys(Vn);v.forEach((m,d)=>{let E=Vn[m].w/Vn[m].h,T=5.2/Math.sqrt(Math.max(E,.5)),M=new Hn({transparent:!0,opacity:0,depthWrite:!1,side:Xt}),L=new ut(new ai(T*E,T),M);L.userData={a:d/v.length*Math.PI*2+Math.random()*.3,r:120+Math.random()*45,y:6+Math.random()*46,s:.04+Math.random()*.05,ph:Math.random()*6},ar.add(L),Qe.cards.push(L),pu(m).then(w=>{w&&(M.map=w,M.needsUpdate=!0)})})}var lr={},sv=document.getElementById("labels");function rv(){for(let[i,e]of Object.entries(lu)){let t=document.createElement("div");t.className="lb "+e[4],t.innerHTML=`<span class="zh">${e[2]}</span><span class="en">${e[3]}</span>`,sv.appendChild(t);let n=e[4]==="big"?14:e[4]==="county"?2.5:e[4]==="river"?1:2.2;lr[i]={el:t,pos:cr(i,n),on:!1,far:e[4]==="big"?900:e[4]==="county"?520:420}}}function ui(i,e=!0){i.forEach(t=>{lr[t]&&(lr[t].on=e)})}function Aa(){for(let i of Object.values(lr))i.on=!1}var bs=new C,av=0;function ov(i){let e=Ze.position,t=28;for(let n=2;n<t;n++){let s=n/t,r=e.x+(i.x-e.x)*s,a=e.y+(i.y-e.y)*s,o=e.z+(i.z-e.z)*s;if(a<Vt(r,o)-.3)return!0}return!1}function lv(){let i=innerWidth,e=innerHeight,t=av++%12===0;for(let n of Object.values(lr)){if(!n.on){n.el.classList.contains("on")&&n.el.classList.remove("on");continue}t&&(n.occ=ov(n.pos)),bs.copy(n.pos).project(Ze);let s=!n.occ&&bs.z<1&&Math.abs(bs.x)<1.1&&Math.abs(bs.y)<1.1,r=Ze.position.distanceTo(n.pos);s&&r<(n.far||420)?(n.el.style.transform=`translate(${(bs.x*.5+.5)*i}px,${(-bs.y*.5+.5)*e}px) translate(-50%,-100%)`,n.el.classList.add("on")):n.el.classList.remove("on")}}var qt={ctx:null,on:!0,scene:"intro",timers:{},init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=this.ctx=new i;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);let t=e.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=3,t.connect(this.master),this.rev=e.createConvolver(),this.rev.buffer=this.ir(5.5);let n=e.createGain();n.gain.value=.55,this.rev.connect(n),n.connect(t),this.dry=e.createGain(),this.dry.gain.value=.8,this.dry.connect(t),this.noise=this.mkNoise(4);let s=e.createBufferSource();s.buffer=this.noise,s.loop=!0;let r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=420,r.Q.value=.5;let a=e.createGain();a.gain.value=0,s.connect(r),r.connect(a),a.connect(this.dry),a.connect(this.rev),s.start();let o=e.createOscillator();o.frequency.value=.07;let l=e.createGain();l.gain.value=220,o.connect(l),l.connect(r.frequency),o.start(),this.wind={g:a,bp:r};let c=e.createGain();c.gain.value=0;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=300,h.Q.value=.8,[[73.42,"sawtooth",.16,-5],[110,"sawtooth",.12,4],[146.83,"triangle",.2,0],[36.71,"sine",.35,0]].forEach(([T,M,L,w])=>{let A=e.createOscillator();A.type=M,A.frequency.value=T,A.detune.value=w;let P=e.createGain();P.gain.value=L,A.connect(P),P.connect(h),A.start()});let u=e.createOscillator();u.frequency.value=.05;let f=e.createGain();f.gain.value=140,u.connect(f),f.connect(h.frequency),u.start(),h.connect(c),c.connect(this.dry),c.connect(this.rev),this.drone={g:c,lp:h};let p=e.createBufferSource();p.buffer=this.noise,p.loop=!0;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=90;let v=e.createGain();v.gain.value=0,p.connect(g),g.connect(v),v.connect(this.dry),p.start(),this.rumble={g:v};let m=e.createBufferSource();m.buffer=this.noise,m.loop=!0;let d=e.createBiquadFilter();d.type="bandpass",d.frequency.value=2600,d.Q.value=3;let E=e.createGain();E.gain.value=0,m.connect(d),d.connect(E),E.connect(this.dry),E.connect(this.rev),m.start(),this.trickle={g:E,bp:d},this.master.gain.setTargetAtTime(this.on?.9:0,e.currentTime,1.2)},ir(i){let e=this.ctx,t=i*e.sampleRate|0,n=e.createBuffer(2,t,e.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s);for(let a=0;a<t;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/t,3.4)*(a<200?a/200:1)}return n},mkNoise(i){let e=this.ctx,t=i*e.sampleRate|0,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0),r=0,a=0,o=0;for(let l=0;l<t;l++){let c=Math.random()*2-1;r=.99765*r+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,s[l]=(r+a+o+c*.1848)*.18}return n},set(i,e,t=1.5){this.ctx&&i.gain.setTargetAtTime(e,this.ctx.currentTime,t)},toggle(){this.on=!this.on,this.ctx&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.master.gain.setTargetAtTime(this.on?.9:0,this.ctx.currentTime,.4))},tone(i,{type:e="sine",vol:t=.1,att:n=.01,dec:s=3,when:r=0,rev:a=.7,partials:o=[[1,1]],detune:l=0}={}){if(!this.ctx)return;let c=this.ctx,h=c.currentTime+r,u=c.createGain();u.gain.setValueAtTime(0,h),u.gain.linearRampToValueAtTime(t,h+n),u.gain.exponentialRampToValueAtTime(1e-4,h+n+s);let f=c.createGain();f.gain.value=1-a*.5;let p=c.createGain();p.gain.value=a,u.connect(f),u.connect(p),f.connect(this.dry),p.connect(this.rev),o.forEach(([g,v])=>{let m=c.createOscillator();m.type=e,m.frequency.value=i*g,m.detune.value=l;let d=c.createGain();d.gain.value=v,m.connect(d),d.connect(u),m.start(h),m.stop(h+n+s+.1)})},bell(i,e=.06,t=4,n=0){this.tone(i,{vol:e,dec:t,when:n,partials:[[1,1],[2.01,.35],[2.76,.4],[5.4,.15],[8.9,.06]],rev:.8})},gong(i,e=.16){this.tone(i,{vol:e,att:.04,dec:8,partials:[[1,1],[1.48,.55],[2.09,.4],[2.56,.3],[3.9,.12]],rev:.9}),this.tone(i/2,{vol:e*.8,att:.05,dec:6,rev:.4})},flute(i,e=1.6,t=.07,n=0){if(!this.ctx)return;let s=this.ctx,r=s.currentTime+n,a=s.createGain();a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(t,r+.18),a.gain.setValueAtTime(t,r+e-.3),a.gain.linearRampToValueAtTime(0,r+e+.4),a.connect(this.dry);let o=s.createGain();o.gain.value=.9,a.connect(o),o.connect(this.rev);let l=s.createOscillator();l.type="sine",l.frequency.setValueAtTime(i*.965,r),l.frequency.exponentialRampToValueAtTime(i,r+.14);let c=s.createOscillator();c.type="triangle",c.frequency.value=i*2;let h=s.createGain();h.gain.value=.08,c.connect(h),h.connect(a);let u=s.createOscillator();u.frequency.value=5.1;let f=s.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(i*.007,r+.6),u.connect(f),f.connect(l.frequency),f.connect(c.frequency);let p=s.createBufferSource();p.buffer=this.noise;let g=s.createBiquadFilter();g.type="bandpass",g.frequency.value=i*1.5,g.Q.value=6;let v=s.createGain();v.gain.value=.5,p.connect(g),g.connect(v),v.connect(a),l.connect(a),[l,c,u].forEach(m=>{m.start(r),m.stop(r+e+.5)}),p.start(r,Math.random()*3),p.stop(r+e+.5)},every(i,e,t,n){this.timers[i]=this.timers[i]??e+Math.random()*(t-e),this.timers[i]-=this.dt,this.timers[i]<=0&&(this.timers[i]=e+Math.random()*(t-e),n())},setScene(i){if(this.scene=i,this.timers={},!this.ctx)return;let e={intro:.14,snow:.24,flow:.12,strata:.05,fold:.08,ret:.22,end:.12}[i]??.1,t={intro:0,snow:0,flow:.14,strata:.2,fold:.16,ret:.05,end:0}[i]??0;this.set(this.wind.g,e,2),this.set(this.drone.g,t,3),this.drone.lp.frequency.setTargetAtTime(i==="strata"?170:300,this.ctx.currentTime,3),this.wind.bp.frequency.setTargetAtTime(i==="strata"?220:420,this.ctx.currentTime,3),i!=="fold"&&this.set(this.rumble.g,0,.8),this.set(this.trickle.g,0,.3)},PENT:[293.66,349.23,392,440,523.25,587.33,698.46,783.99],phrase(){let i=2+(Math.random()*3|0),e=0,t=3+(Math.random()*3|0);for(let n=0;n<t;n++){let s=.7+Math.random()*1.5;this.flute(this.PENT[i],s,.06,e),e+=s*.92,i=Math.max(0,Math.min(this.PENT.length-1,i+[-2,-1,-1,1,1,2][Math.random()*6|0]))}},tick(i,e){if(!this.ctx||!this.on)return;this.dt=i;let t=this.scene;(t==="snow"||t==="ret"||t==="intro")&&this.every("bell",t==="intro"?5:2.2,t==="intro"?9:5.5,()=>{let n=[1174.66,880,1396.91,1046.5,783.99,1567.98][Math.random()*6|0];this.bell(n*(t==="ret"?.5:1),.035+Math.random()*.03,5)}),t==="snow"&&(this.set(this.trickle.g,e.melting?.06:0,.25),e.melting&&this.every("drip",.08,.3,()=>this.tone(1500+Math.random()*1600,{vol:.02,dec:.25,rev:.6}))),t==="flow"&&(this.every("camel",1.6,1.9,()=>{this.tone(612,{vol:.035,dec:1.4,partials:[[1,1],[2.32,.5],[4.1,.25]],rev:.5}),this.tone(918,{vol:.02,dec:1,when:.22,partials:[[1,1],[2.3,.4]],rev:.5})}),this.every("phr",7,11,()=>this.phrase())),t==="strata"&&this.every("drip",3,7,()=>this.tone(2200+Math.random()*900,{vol:.03,dec:.5,rev:1})),t==="fold"&&(this.set(this.rumble.g,Math.min(.5,e.foldSpeed*4),.3),this.every("fphr",9,13,()=>this.phrase()))}},rt=i=>document.querySelector(i),De={subs:rt("#subs"),szh:rt("#subs .zh"),sen:rt("#subs .en"),hint:rt("#hint"),next:rt("#next"),tag:rt("#layerTag"),gauge:rt("#gauge"),card:rt("#card"),top:rt("#top"),photo:rt("#photo"),inset:rt("#inset")},Ia="both";try{let i=localStorage.getItem("qilian-lang");i&&(Ia=i)}catch{}function mu(i){Ia=i,document.body.classList.remove("lang-zh","lang-en","lang-both"),document.body.classList.add("lang-"+i),document.querySelectorAll("#lang button").forEach(e=>e.classList.toggle("on",e.dataset.l===i));try{localStorage.setItem("qilian-lang",i)}catch{}}mu(Ia);document.querySelectorAll("#lang button").forEach(i=>i.addEventListener("click",()=>mu(i.dataset.l)));rt("#snd").addEventListener("click",i=>{qt.toggle(),i.currentTarget.classList.toggle("on",qt.on),i.currentTarget.setAttribute("aria-pressed",qt.on),i.currentTarget.style.opacity=qt.on?1:.45});var iu=null;function Li(i,e){De.subs.classList.add("out"),clearTimeout(iu),iu=setTimeout(()=>{De.szh.textContent=i||"",De.sen.textContent=e||"",(i||e)&&De.subs.classList.remove("out")},650)}function Wn(i,e){if(!i){De.hint.classList.add("out");return}De.hint.innerHTML=`<span class="zh">${i}</span><span class="en">${e}</span>`,De.hint.classList.remove("out")}var cv=[["snow","I","\u96EA","Snow"],["flow","II","\u6D41","Flow"],["strata","III","\u5C42","Strata"],["fold","IV","\u878D","Confluence"],["ret","V","\u5F52","Return"]],gu=rt("#nav");cv.forEach(([i,e,t,n])=>{let s=document.createElement("button");s.dataset.k=i,s.innerHTML=`<i>${e}</i><b class="zh">${t}</b><span class="en">${n}</span>`,s.addEventListener("click",()=>{Oi&&lc(i)}),gu.appendChild(s)});function hv(i){gu.querySelectorAll("button").forEach(e=>e.classList.toggle("on",e.dataset.k===i))}Xn.forEach((i,e)=>{let t=document.createElement("button");t.innerHTML=`<span class="zh">${i.zh}</span><span class="en">${i.en.split(" ")[0]}</span><i></i>`,t.addEventListener("click",()=>{yt==="strata"&&Bi(e)}),De.gauge.appendChild(t)});De.gauge.insertAdjacentHTML("afterbegin",'<div class="gcap">NOW \u4ECA</div>');De.gauge.insertAdjacentHTML("beforeend",'<div class="gcap low">DEEP TIME \u53E4</div>');function uv(i){let e=Xn[i],t=ou[i];De.tag.classList.add("out"),setTimeout(()=>{De.tag.querySelector(".era").textContent=e.zh,De.tag.querySelector(".eraen").textContent=e.en,De.tag.querySelector(".yrs").textContent=e.y,De.tag.querySelector(".pig i").style.background=t[2],De.tag.querySelector(".pig .zh").textContent="\u7B2C"+["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341","\u5341\u4E00"][i]+"\u5C42 \xB7 "+t[0],De.tag.querySelector(".pig .en").textContent=`Layer ${i+1} \xB7 ${t[1]}`,De.tag.classList.remove("out")},500),De.gauge.querySelectorAll("button").forEach((n,s)=>n.classList.toggle("on",s===i))}function ws(i){if(!i){De.card.hidden=!0;return}let e=Vn[i];De.card.querySelector(".t").innerHTML=`<span class="zh">${e.zh}</span>`,De.card.querySelector(".te").innerHTML=`<span class="en">${e.en}</span>`,De.card.querySelector(".m").innerHTML=`<span class="zh">${e.mz}</span>${Ia==="both"?"<br>":""}<span class="en">${e.me}</span>`,De.card.querySelector(".c").textContent=`${e.by} \xB7 ${e.lic} \xB7 Wikimedia Commons`,De.card.hidden=!1}function dv(){let i=rt("#srcList"),e=Object.entries(Vn).map(([n,s])=>`<li><span class="zh">${s.zh}</span> <span class="en">${s.en}</span> \xB7 ${s.by} \xB7 <span class="lic">${s.lic}</span> \xB7 <a href="${jh}${encodeURIComponent(s.f)}" target="_blank" rel="noopener">Wikimedia Commons</a></li>`).join(""),t=O0.map(n=>`<li><span class="zh">${n.zh}</span> <span class="en">${n.en}</span> \xB7 ${n.by} \xB7 <span class="lic">${n.lic}</span> \xB7 <a href="${jh}${encodeURIComponent(n.f)}" target="_blank" rel="noopener">Wikimedia Commons</a></li>`).join("");i.innerHTML=`<h3>\u51FA\u5904<span>SOURCES</span></h3>
  <h4>\u5730\u5F62\u4E0E\u5F71\u50CF \xB7 TERRAIN & IMAGERY</h4>
  <ul><li>\u9AD8\u7A0B\uFF1ATerrain Tiles\uFF08Mapzen / AWS \u5F00\u653E\u6570\u636E\uFF0C\u6E90\u81EA SRTM\u3001GMTED2010 \u7B49\uFF09\uFF0C\u5DF2\u7528\u4E8E 3D \u5730\u5F62\u4E0E\u6CB3\u7F51\u63A8\u7B97\u3002Elevation: <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noopener">Terrain Tiles on AWS</a> (Mapzen; SRTM, GMTED2010 and others). Rivers were traced from this DEM by D8 flow accumulation.</li>
  <li>\u536B\u661F\u5F71\u50CF\uFF1ASentinel-2 cloudless 2016 by EOX IT Services GmbH\uFF08\u542B\u7ECF\u5904\u7406\u7684\u54E5\u767D\u5C3C\u54E8\u5175\u6570\u636E\uFF09\uFF0C<span class="lic">CC BY 4.0</span>\u3002Imagery: <a href="https://s2maps.eu" target="_blank" rel="noopener">Sentinel-2 cloudless \u2013 s2maps.eu</a> by EOX IT Services GmbH (contains modified Copernicus Sentinel data 2016), CC BY 4.0.</li></ul>
  <h4>\u56FE\u50CF \xB7 IMAGES</h4><ol>${e}${t}</ol>
  <h4>\u6587\u732E \xB7 TEXTS</h4>
  <ul><li>\u989C\u5E08\u53E4\u6CE8\u300A\u6C49\u4E66\xB7\u6B66\u5E1D\u7EAA\u300B\u201C\u7941\u8FDE\u5C71\u5373\u5929\u5C71\u4E5F\uFF0C\u5308\u5974\u547C\u5929\u4E3A\u7941\u8FDE\u201D\uFF08\u4E00\u8BF4\u201C\u7941\u8FDE\u201D\u672C\u4E3A\u6C49\u8BED\u201C\u5929\u201D\u7684\u53E4\u97F3\uFF09\u3002</li>
  <li>\u5308\u5974\u6B4C\uFF0C\u89C1\u300A\u5341\u9053\u5FD7\u300B\u9038\u6587\uFF08\u300A\u53F2\u8BB0\u7D22\u9690\u300B\u5F15\u300A\u897F\u6CB3\u65E7\u4E8B\u300B\uFF0C\u6587\u5B57\u7565\u5F02\uFF09\u3002</li>
  <li>\u300A\u53F2\u8BB0\xB7\u5927\u5B9B\u5217\u4F20\u300B\u201C\u59CB\u6708\u6C0F\u5C45\u6566\u714C\u3001\u7941\u8FDE\u95F4\u201D\uFF1B\u300A\u53F2\u8BB0\xB7\u536B\u5C06\u519B\u9AA0\u9A91\u5217\u4F20\u300B\uFF1B\u300A\u968B\u4E66\xB7\u7080\u5E1D\u7EAA\u300B\u5927\u4E1A\u4E94\u5E74\uFF08\u5927\u6597\u62D4\u8C37\uFF09\uFF1B\u300A\u968B\u4E66\xB7\u88F4\u77E9\u4F20\u300B\uFF08\u71D5\u652F\u5C71\uFF0C\u897F\u8543\u4E8C\u5341\u4E03\u56FD\uFF09\uFF1B\u300A\u9B4F\u4E66\xB7\u91CA\u8001\u5FD7\u300B\u201C\u6C99\u95E8\u4F5B\u4E8B\u7686\u4FF1\u4E1C\u201D\u3002</li>
  <li>\u5C91\u53C2\u300A\u51C9\u5DDE\u9986\u4E2D\u4E0E\u8BF8\u5224\u5B98\u591C\u96C6\u300B\uFF1B\u738B\u7FF0\u300A\u51C9\u5DDE\u8BCD\u300B\u3002\u82F1\u6587\u8BD1\u6587\u4E3A\u672C\u4F5C\u65B0\u8BD1\u3002</li>
  <li>The Travels of Marco Polo, on Campichu (Ganzhou). \u51C9\u5DDE\u4F1A\u76DF\uFF081247\uFF09\uFF1B\u91CD\u4FEE\u62A4\u56FD\u5BFA\u611F\u901A\u5854\u7891\uFF081094\uFF09\u3002</li>
  <li>\u51B0\u5DDD\u6570\u636E\uFF1ASun Meiping et al., \u201CGlacier changes in the Qilian Mountains in the past half-century,\u201D <i>Journal of Geographical Sciences</i> 28 (2018)\uFF1A\u7B2C\u4E8C\u6B21\u51B0\u5DDD\u7F16\u76EE 2684 \u6761\u30011597.81 km\xB2\uFF0C\u8FD1\u534A\u4E16\u7EAA\u9762\u79EF\u51CF\u5C11 20.88%\u3002</li></ul>
  <h4>\u58F0\u97F3\u4E0E\u6280\u672F \xB7 SOUND & ENGINE</h4>
  <p>\u914D\u4E50\u5168\u90E8\u7531 Web Audio \u5B9E\u65F6\u5408\u6210\uFF08D \u7FBD\u8C03\u4E94\u58F0\u3001\u9A7C\u94C3\u3001\u98CE\u3001\u5730\u9E23\uFF09\u3002Score synthesised live in Web Audio. Engine: three.js (MIT). Type: Noto Serif SC, ZCOOL XiaoWei, Cinzel, Spectral (SIL Open Font License).</p>`}dv();function La(i){rt("#sources").hidden=!i}rt("#srcBtn").addEventListener("click",()=>La(!0));rt("#src2").addEventListener("click",()=>La(!0));rt("#closeSrc").addEventListener("click",()=>La(!1));addEventListener("keydown",i=>{i.key==="Escape"&&La(!1)});var Se={x:0,y:0,nx:0,ny:0,down:!1,dx:0,dy:0,moved:0,lastX:0,lastY:0,idle:0},Nt={yaw:0,pitch:0,vy:0,vp:0};di.addEventListener("pointerdown",i=>{Se.down=!0,Se.lastX=i.clientX,Se.lastY=i.clientY,Se.moved=0,Se.idle=0,di.setPointerCapture(i.pointerId),qt.ctx?.state==="suspended"&&qt.ctx.resume()});di.addEventListener("pointermove",i=>{if(Se.x=i.clientX,Se.y=i.clientY,Se.nx=i.clientX/innerWidth*2-1,Se.ny=-(i.clientY/innerHeight)*2+1,Se.idle=0,Se.down){let e=i.clientX-Se.lastX,t=i.clientY-Se.lastY;Se.dx+=e,Se.dy+=t,Se.moved+=Math.abs(e)+Math.abs(t),Se.lastX=i.clientX,Se.lastY=i.clientY}});var vu=i=>{Se.down&&Se.moved<6&&yt==="strata"&&pv(),Se.down=!1};di.addEventListener("pointerup",vu);di.addEventListener("pointercancel",vu);var Sa=0;addEventListener("wheel",i=>{if(!(!Oi||!rt("#sources").hidden)&&(Sa+=i.deltaY,Se.idle=0,Math.abs(Sa)>120)){let e=Math.sign(Sa);Sa=0,yt==="strata"&&Bi(ne.L+e)}},{passive:!0});addEventListener("keydown",i=>{Oi&&((i.key==="ArrowDown"||i.key==="PageDown")&&yt==="strata"&&Bi(ne.L+1),(i.key==="ArrowUp"||i.key==="PageUp")&&yt==="strata"&&Bi(ne.L-1),(i.key==="ArrowRight"||i.key===" ")&&(i.preventDefault(),xu()))});De.next.addEventListener("click",()=>xu());var s_=new C,r_=new C;function oc(i,e){if(e<=i[0].t)return[i[0].p,i[0].l];let t=i.length;if(e>=i[t-1].t)return[i[t-1].p,i[t-1].l];let n=0;for(;n<t-2&&e>i[n+1].t;)n++;let s=(e-i[n].t)/(i[n+1].t-i[n].t);n===0&&(s=s*s*(3-2*s)*.5+s*.5),n===t-2&&(s=1-(1-s)*(1-s)*.5-(1-s)*.5+0);let r=i[Math.max(0,n-1)],a=i[n],o=i[n+1],l=i[Math.min(t-1,n+2)],c=(h,u,f,p,g)=>{let v=s*s,m=v*s;return g.set(0,0,0).addScaledVector(h,-.5*m+v-.5*s).addScaledVector(u,1.5*m-2.5*v+1).addScaledVector(f,-1.5*m+2*v+.5*s).addScaledVector(p,.5*m-.5*v)};return[c(r.p,a.p,o.p,l.p,new C),c(r.l,a.l,o.l,l.l,new C)]}var tr=new C,a_=new yn,$l=new C;function Da(i,e,t=0,n=0){Ze.position.copy(i),tr.copy(e).sub(i).normalize(),tr.applyAxisAngle(new C(0,1,0),t),$l.crossVectors(tr,Ze.up).normalize(),$l.lengthSq()>0&&tr.applyAxisAngle($l,n),Ze.lookAt(tr.add(i))}var Fi={night:{top:[.008,.012,.028],hor:[.035,.045,.07],bot:[.03,.04,.065],sun:[.25,.35,-.9],sunC:[0,0,0],stars:1,tSun:[.32,.38,.55],tSky:[.07,.09,.16],tGnd:[.015,.015,.02],fog:[.03,.04,.065],fogD:.001,contour:.38,oasis:.7,sat:.55,expo:1},dawn:{top:[.015,.04,.13],hor:[.5,.42,.45],bot:[.22,.24,.33],sun:[.8,.17,-.28],sunC:[1,.58,.36],stars:.12,tSun:[1.85,1.2,.95],tSky:[.07,.11,.23],tGnd:[.02,.02,.028],fog:[.22,.24,.33],fogD:62e-5,contour:.07,oasis:.3,sat:.82,expo:1},dusk:{top:[.015,.035,.1],hor:[.78,.42,.22],bot:[.46,.3,.22],sun:[-.9,.13,-.3],sunC:[1.4,.58,.24],stars:.3,tSun:[1.8,1.02,.58],tSky:[.09,.11,.23],tGnd:[.045,.03,.025],fog:[.46,.3,.22],fogD:8e-4,contour:.05,oasis:1,sat:.84,expo:1}},nr=JSON.parse(JSON.stringify(Fi.night)),As=Fi.night;function fv(i){let e=1-Math.exp(-i*.5);for(let s of Object.keys(nr)){let r=nr[s],a=As[s];if(Array.isArray(r))for(let o=0;o<r.length;o++)r[o]+=(a[o]-r[o])*e;else nr[s]+=(a-nr[s])*e}let t=Ea.material.uniforms,n=nr;if(t.uTop.value.setRGB(...n.top),t.uHor.value.setRGB(...n.hor),t.uBot.value.setRGB(...n.bot),t.uSunDir.value.set(...n.sun).normalize(),t.uSunCol.value.setRGB(...n.sunC),t.uStars.value=n.stars,Zt.mat){let s=Zt.mat.uniforms;s.uSunDir.value.copy(t.uSunDir.value),s.uSunDir.value.y<.12&&(s.uSunDir.value.y=.12,s.uSunDir.value.normalize()),s.uSunCol.value.setRGB(...n.tSun),s.uSkyCol.value.setRGB(...n.tSky),s.uGndCol.value.setRGB(...n.tGnd),s.uFogCol.value.setRGB(...n.fog),s.uFogDen.value=n.fogD,s.uContour.value=n.contour,s.uOasis.value=n.oasis,s.uSatAmt.value=n.sat,s.uExpo.value=n.expo,Gt.mat&&(Gt.mat.uniforms.uFogDen.value=n.fogD*.6)}}var yt="intro",Ts=0,ba=0,Oi=!1,ir=1,or=0,Ut={melting:!1,melt:0,fill:40,foldSpeed:0},Yt={};Yt.intro={enter(){As=Fi.night,Rt.material.uniforms.uOp.value=.6},keys:null,update(i,e){let t=e*.012,n=Le(98.6,38.6,0,!0),s=new C(n.x+Math.sin(t)*120,230,n.z+420-Math.cos(t)*30);Da(s,new C(n.x,0,n.z-40),Se.nx*-.05,Se.ny*.03)}};Yt.snow={beats:[{t:1.5,zh:"\u4E00\u5207\u4ECE\u96EA\u5F00\u59CB\u3002",en:"It begins with snow."},{t:7,zh:"\u7941\u8FDE\u5C71\u4E0A\u6709\u4E24\u5343\u516D\u767E\u591A\u6761\u51B0\u5DDD\u3002",en:"More than two thousand six hundred glaciers lie on the Qilian.",fn:()=>Wn("\u6309\u4F4F\u5E76\u62D6\u8FC7\u96EA\u5C71 \xB7 \u8BA9\u96EA\u878D\u5316","Press and sweep across the peaks to melt the snow")},{t:15,need:()=>Ut.melt>.35,zh:"\u96EA\u6C34\u5411\u5317\u6D41\uFF0C\u6C47\u6210\u77F3\u7F8A\u6CB3\u3001\u9ED1\u6CB3\u3001\u758F\u52D2\u6CB3\u3002",en:"The meltwater runs north and gathers into the Shiyang, the Hei and the Shule rivers.",fn:()=>ui(["shiyang","hei","shule"])},{t:25,need:()=>Ut.fill<8,zh:"\u8FD9\u4E9B\u6CB3\u6D41\u4E0D\u5165\u6D77\u3002\u5B83\u4EEC\u6D88\u5931\u5728\u6208\u58C1\u548C\u6C99\u6F20\u91CC\uFF0C\u4E00\u8DEF\u517B\u51FA\u4E00\u4E32\u7EFF\u6D32\u3002",en:"These rivers never reach the sea. They vanish into the Gobi and the sand, feeding a string of oases on the way.",fn:()=>{As=Object.assign({},Fi.dawn,{oasis:.9})}},{t:35,zh:"\u6CA1\u6709\u8FD9\u5EA7\u5C71\u7684\u96EA\uFF0C\u5C31\u6CA1\u6709\u6CB3\u897F\u3002",en:"Without this mountain\u2019s snow there would be no Hexi.",fn:()=>Wn()},{t:44,end:!0}],enter(){As=Fi.dawn,Rt.material.uniforms.uOp.value=.9,Rt.material.uniforms.uFall.value=2.2,Gt.mat.uniforms.uOn.value=1,Ut.fill=40,Ut.melt=0,ui(["qilian"]),this.keys=[{t:0,p:Le(100.5,40.1,120,!0),l:Le(99.6,38.5,12,!0)},{t:14,p:Le(100.2,39.7,82,!0),l:Le(99.4,38.45,14,!0)},{t:32,p:Le(99.5,39.65,76,!0),l:Le(98.6,38.6,16,!0)},{t:60,p:Le(98.9,39.75,86,!0),l:Le(98,38.7,14,!0)}]},leave(){K.life.fill(0)},update(i,e){let[t,n]=oc(this.keys,e);if(Da(t,n,Nt.yaw,Nt.pitch),Ut.melting=!1,Se.down){let r=vv(Se.nx,Se.ny);r&&(Ut.melting=!0,Y0(r.x,r.z,Mn?3:5),J0(r.x,r.z),Ut.melt+=i*.16)}e>12&&(Ut.melt+=i*.012);let s=31-Math.min(1.25,Ut.melt)*30;Ut.fill+=(s-Ut.fill)*(1-Math.exp(-i*.5)),Gt.mat.uniforms.uFill.value=Ut.fill}};Yt.flow={beats:[{t:2,zh:"\u5C71\u5317\u8FD9\u6761\u72ED\u957F\u7684\u5E73\u539F\uFF0C\u53EB\u6CB3\u897F\u8D70\u5ECA\u3002\u4E1C\u8D77\u4E4C\u9798\u5CAD\uFF0C\u897F\u5230\u6566\u714C\uFF0C\u7EA6\u4E00\u5343\u516C\u91CC\u3002",en:"The long narrow plain north of the mountains is the Hexi Corridor, about a thousand kilometres from Wushaoling in the east to Dunhuang in the west.",fn:()=>ui(["wushaoling","wuwei","badain"])},{t:12,zh:"\u53F2\u4E66\u91CC\u6700\u65E9\u4F4F\u5728\u8FD9\u91CC\u7684\uFF0C\u662F\u6708\u6C0F\uFF0C\u540E\u6765\u662F\u5308\u5974\u3002",en:"The earliest people the histories record here are the Yuezhi, and after them the Xiongnu."},{t:20,zh:"\u516C\u5143\u524D121\u5E74\uFF0C\u6C49\u5C06\u970D\u53BB\u75C5\u8D8A\u8FC7\u7109\u652F\u5C71\uFF0C\u5308\u5974\u9000\u51FA\u6CB3\u897F\u3002",en:"In 121 BCE the Han general Huo Qubing crossed Mount Yanzhi, and the Xiongnu withdrew from Hexi.",fn:()=>ui(["yanzhi"])},{t:29,zh:"\u5308\u5974\u4EBA\u7559\u4E0B\u4E00\u9996\u6B4C\uFF1A\u201C\u5931\u6211\u7109\u652F\u5C71\uFF0C\u4EE4\u6211\u5987\u5973\u65E0\u989C\u8272\uFF1B\u5931\u6211\u7941\u8FDE\u5C71\uFF0C\u4F7F\u6211\u516D\u755C\u4E0D\u8543\u606F\u3002\u201D",en:"The Xiongnu left a song: \u201CWe lost Mount Yanzhi, and our women lost their colour. We lost the Qilian, and our herds no longer thrive.\u201D"},{t:41,zh:"\u6C49\u671D\u5728\u8FD9\u91CC\u8BBE\u7ACB\u6B66\u5A01\u3001\u5F20\u6396\u3001\u9152\u6CC9\u3001\u6566\u714C\u56DB\u90E1\u3002\u8D70\u5ECA\u4ECE\u6B64\u8FDE\u8D77\u4E2D\u539F\u4E0E\u897F\u57DF\u3002",en:"The Han set up four commanderies here: Wuwei, Zhangye, Jiuquan and Dunhuang. The corridor now joined the Central Plains to the Western Regions.",fn:()=>{hi.pts.material.uniforms.uOn.value=1,ui(["zhangye","jiuquan","dunhuang"])}},{t:51,zh:"\u4E1D\u7EF8\u3001\u4F5B\u7ECF\u3001\u8461\u8404\u3001\u7435\u7436\u3001\u9A6C\u548C\u4EBA\uFF0C\u4ECE\u4E24\u5934\u8D70\u8FDB\u8FD9\u6761\u8D70\u5ECA\u3002",en:"Silk and sutras, grapes and lutes, horses and people entered the corridor from both ends.",fn:()=>{He.pts.material.uniforms.uOn.value=1,ui(["jiayuguan","yumen"])}},{t:61,zh:"\u4E00\u5343\u516D\u767E\u591A\u5E74\u540E\uFF0C\u660E\u671D\u5BAB\u5EF7\u628A\u8FD9\u6761\u8DEF\u753B\u6210\u4E00\u5377\u7EA6\u4E09\u5341\u7C73\u957F\u7684\u9752\u7EFF\u5C71\u6C34\uFF0C\u4ECE\u5609\u5CEA\u5173\u4E00\u76F4\u753B\u5230\u5929\u65B9\u3002",en:"More than sixteen centuries later, the Ming court painted this road as a blue-green landscape scroll some thirty metres long, running from Jiayu Pass all the way to Mecca.",fn:()=>{xt.on=!0,xt.meshes.forEach(i=>i.visible=!0),Ii.t=1}},{t:74,zh:"\u5730\u56FE\u4F1A\u892A\u8272\uFF0C\u9053\u8DEF\u4F1A\u6539\u7EBF\u3002\u53EF\u6BCF\u4E00\u4E2A\u8D70\u8FC7\u7684\u4EBA\uFF0C\u90FD\u5728\u571F\u91CC\u7559\u4E0B\u4E86\u4E00\u5C42\u3002",en:"Maps fade and roads move. But everyone who passed through left a layer in the ground.",fn:()=>{xt.off=!0,Ii.t=0}},{t:84,fn:()=>{Zt.mat.uniforms.uHoleOn.value=1,ue.group.visible=!0,Kl=0,hi.pts.material.uniforms.uOn.value=0}},{t:93,end:!0}],enter(){As=Fi.dusk,Rt.material.uniforms.uOp.value=.25,Rt.material.uniforms.uFall.value=1.2,Gt.mat.uniforms.uOn.value=.7,Gt.mat.uniforms.uFill.value=-10,Ut.fill=-10,Aa(),Wn();let i=cr("zhangye");this.keys=[{t:0,p:Le(103.35,36.7,95,!0),l:Le(102.4,38,0,!0)},{t:9,p:Le(102.95,37.3,58,!0),l:Le(101.9,38.35,0,!0)},{t:20,p:Le(101.95,37.8,46,!0),l:Le(100.95,38.6,0,!0)},{t:31,p:Le(101.2,38.2,40,!0),l:Le(100.25,38.95,0,!0)},{t:42,p:Le(100.6,38.45,42,!0),l:Le(99.3,39.45,0,!0)},{t:52,p:Le(99.35,39.15,34,!0),l:Le(98.2,39.85,2,!0)},{t:62,p:Le(98.6,39.18,36,!0),l:Le(97.2,39.95,14,!0)},{t:73,p:Le(97.6,39.35,42,!0),l:Le(95.6,40.3,14,!0)},{t:83,p:Le(99.3,38.45,120,!0),l:new C(i.x,i.y,i.z)},{t:92,p:new C(i.x+4,i.y+70,i.z+26),l:new C(i.x,i.y-10,i.z)}]},update(i,e){let[t,n]=oc(this.keys,e);Da(t,n,Nt.yaw,Nt.pitch),xt.on&&(xt.reveal=Math.min(1,xt.reveal+i*.075),xt.op=Math.min(1,xt.op+i*.6),xt.off&&(xt.op=Math.max(0,xt.op-i*.2)),xt.meshes.forEach(s=>{s.material.uniforms.uReveal.value=xt.reveal,s.material.uniforms.uOp.value=xt.op})),Zt.mat.uniforms.uHoleOn.value>.5&&(Kl+=i,Zt.mat.uniforms.uHole.value.set(ue.cx,ue.cz,Math.min(ue.R-.5,Kl*4)))},leave(){xt.meshes.forEach(i=>i.visible=!1),He.pts.material.uniforms.uOn.value=0,hi.pts.material.uniforms.uOn.value=0}};var Kl=0,Ii={v:0,t:0},ne={L:-1,lineI:0,lineT:0,dive:0,yaw:0,yawT:0,camY:0,hover:null,focus:null,auto:!0},su=new ca;function Bi(i){i=Math.max(0,Math.min(Xn.length-1,i)),!(ne.dive<1)&&i!==ne.L&&(ne.L=i,ne.lineI=-1,ne.lineT=0,ne.yawT=ac(i)+(Math.random()-.5)*.1,uv(i),Li("",""),ws(null),ne.focus=null,qt.gong(98*Math.pow(.93,i),.14),ue.titles.forEach((e,t)=>e.userData.want=t===i?1:Math.abs(t-i)===1?.35:0))}function pv(){ne.hover?(ne.focus=ne.hover,ne.yawT=ne.hover.userData.theta,ws(ne.hover.userData.id),qt.bell(587.33,.05,3)):(ne.focus=null,ws(null))}Yt.strata={enter(){ue.group.visible=!0,Zt.mat.uniforms.uHoleOn.value=1,Zt.mat.uniforms.uHole.value.set(ue.cx,ue.cz,ue.R-.5),Gt.mat.uniforms.uOn.value=0,Aa(),Wn("\u6EDA\u8F6E\u6216 \u2191\u2193 \xB7 \u7A7F\u8FC7\u5730\u5C42\u3000\u70B9\u51FB\u56FE\u50CF \xB7 \u67E5\u770B","Scroll or \u2191\u2193 to move through the layers \xB7 click an image for details"),Rt.material.uniforms.uOp.value=.45,Rt.material.uniforms.uSize.value=.5,Rt.material.uniforms.uFall.value=3,Rt.material.uniforms.uCyl.value.set(ue.cx,ue.cz,ue.R-1,1),ne.L=-1,ne.dive=0,ne.back=0,ne.yaw=ac(0),ne.yawT=ne.yaw,De.gauge.hidden=!1,nv(),Li("\u5411\u4E0B\uFF0C\u5C31\u662F\u4ECE\u524D\u3002","Going down is going back."),ue.titles.forEach(i=>{i.userData.want=0,i.material.uniforms.uIn.value=0}),ue.panels.forEach(i=>i.material.uniforms.uIn.value=0)},update(i,e){if(ne.dive<1){ne.dive=Math.min(1,e/8);let h=ne.dive*ne.dive*(3-2*ne.dive),u=ue.top+62*(1-h)+(wa(0)-ue.top)*h,f=-1.45*(1-h)-.05*h,p=ne.yaw;Ze.position.set(ue.cx+Math.sin(p)*.01,u,ue.cz+Math.cos(p)*.01);let g=new C(Math.sin(p)*Math.cos(f),Math.sin(f),Math.cos(p)*Math.cos(f));Ze.lookAt(Ze.position.clone().add(g)),ne.camY=u,ne.dive>=1&&Bi(0),ru();return}let t=wa(ne.L)+.4;ne.camY+=(t-ne.camY)*(1-Math.exp(-i*1.6)),Se.down&&Se.moved>=6&&(ne.yawT+=Se.dx*-.004,ne.focus=null),Se.dx=0,Se.dy=0,!Se.down&&!ne.focus&&ne.lineI>=0&&(ne.yawT-=i*.045);let n=ne.yawT-ne.yaw;ne.yaw+=n*(1-Math.exp(-i*1.8));let s=-.02+Se.ny*.06,r=ne.yaw+Se.nx*-.12,a=innerWidth/innerHeight<1?12:4.5;ne.back+=(a-ne.back)*(1-Math.exp(-i*.8)),Ze.position.set(ue.cx-Math.sin(r)*ne.back,ne.camY,ue.cz-Math.cos(r)*ne.back),Ze.lookAt(Ze.position.x+Math.sin(r)*Math.cos(s),ne.camY+Math.sin(s),Ze.position.z+Math.cos(r)*Math.cos(s)),ru(),ue.panels.forEach(h=>{let u=Math.abs(h.userData.layer-ne.L)<=1?1:0,f=h.material.uniforms;f.uIn.value+=(u*f.uHas.value-f.uIn.value)*(1-Math.exp(-i*1.5))}),ue.titles.forEach(h=>{let u=h.material.uniforms;u.uIn.value+=((h.userData.want||0)-u.uIn.value)*(1-Math.exp(-i*1.2))}),su.setFromCamera(new Ae(Se.nx,Se.ny),Ze);let o=su.intersectObjects(ue.panels.filter(h=>Math.abs(h.userData.layer-ne.L)<=0&&h.material.uniforms.uHas.value>0),!1),l=o.length?o[0].object:null;l!==ne.hover&&(ne.hover&&(ne.hover.material.uniforms.uHover.value=0),ne.hover=l,l?(l.material.uniforms.uHover.value=1,Mn||ws(l.userData.id)):ne.focus||ws(null)),di.style.cursor=l?"pointer":"crosshair";let c=Xn[ne.L];if(ne.lineT+=i,ne.lineI<0&&ne.lineT>1.6)ne.lineI=0,ne.lineT=0,Li(...c.lines[0]);else if(ne.lineI>=0){let u=3.2+c.lines[ne.lineI][0].length*.17;ne.lineT>u&&(ne.lineI<c.lines.length-1?(ne.lineI++,ne.lineT=0,Li(...c.lines[ne.lineI])):ne.lineT>u+1.8&&ne.auto&&(ne.L<Xn.length-1?Bi(ne.L+1):ne.done||(ne.done=!0,_u())))}},leave(){De.gauge.hidden=!0,De.tag.classList.add("out"),ws(null),Rt.material.uniforms.uCyl.value.w=0,Rt.material.uniforms.uSize.value=1.1,di.style.cursor="crosshair",Wn()}};function ru(){let i=new C(Se.nx*.7,Se.ny*.7,.5).unproject(Ze).sub(Ze.position).normalize(),e=Ze.position.x-ue.cx,t=Ze.position.z-ue.cz,n=ue.R-5,s=i.x*i.x+i.z*i.z,r=2*(e*i.x+t*i.z),a=e*e+t*t-n*n,o=r*r-4*s*a,l=o>0&&s>1e-6?(-r+Math.sqrt(o))/(2*s):8;rc.pos.copy(Ze.position).addScaledVector(i,Math.max(2,Math.min(l,40)))}Yt.fold={beats:[{t:1.5,zh:"\u540E\u6765\uFF0C\u5370\u5EA6\u677F\u5757\u4E00\u8DEF\u5317\u63A8\uFF0C\u9752\u85CF\u9AD8\u539F\u9686\u8D77\u3002\u5E73\u8EBA\u7684\u5730\u5C42\u88AB\u6324\u538B\u3001\u5F2F\u6298\uFF0C\u62AC\u4E0A\u5C71\u53BB\u3002",en:"Then the Indian plate pushed north and the Tibetan Plateau rose. Flat-lying strata were squeezed, bent and lifted into mountains.",fn:()=>Wn("\u5DE6\u53F3\u62D6\u52A8 \xB7 \u63A8\u6324\u5927\u5730","Drag sideways to press the earth")},{t:4,need:()=>Qe.P>.5,zh:"\u98CE\u548C\u6C34\u53C8\u628A\u5C71\u524A\u5F00\uFF0C\u5F2F\u6298\u7684\u5730\u5C42\u4E00\u9053\u9053\u9732\u4E86\u51FA\u6765\u3002",en:"Wind and water cut the mountains open, and the folded layers came out in bands."},{t:6,need:()=>Qe.P>.85,zh:"\u6298\u8FC7\u4E4B\u540E\uFF0C\u5C31\u5206\u4E0D\u6E05\u54EA\u4E00\u5C42\u5C5E\u4E8E\u8C01\u4E86\u3002",en:"After the folding, no one can say which layer belongs to whom.",fn:()=>Wn()},{t:10,need:()=>Qe.P>.97,zh:"\u8FD9\u5C31\u662F\u5F20\u6396\u7684\u4E39\u971E\u3002",en:"This is the Danxia of Zhangye.",fn:()=>{let i=De.photo.querySelector("img");i.src.includes("danxia1")||(i.src=i.dataset.src),De.photo.classList.add("on"),qt.bell(293.66,.05,6),qt.bell(440,.04,6,.4),qt.bell(587.33,.035,6,.8)}},{t:17,need:()=>Qe.P>.97,zh:"\u5308\u5974\u4EBA\u5531\uFF0C\u5931\u4E86\u7109\u652F\u5C71\uFF0C\u5987\u5973\u4FBF\u6CA1\u4E86\u989C\u8272\u3002\u90A3\u4E9B\u989C\u8272\u5E76\u6CA1\u6709\u6D88\u5931\uFF0C\u5B83\u4EEC\u6C89\u8FDB\u4E86\u6BCF\u4E00\u5C42\u91CC\u3002",en:"The Xiongnu sang that losing Mount Yanzhi took the colour from their women\u2019s faces. The colour never vanished. It settled into every layer."},{t:26,need:()=>Qe.P>.97,end:!0}],enter(){Ql.scene=ar,Qe.P=0,Qe.target=0,Ut.foldSpeed=0;let i=ic.material.uniforms;i.uTop.value.setRGB(.03,.05,.13),i.uHor.value.setRGB(.66,.42,.3),i.uBot.value.setRGB(.12,.08,.08),i.uSunDir.value.set(-.6,.2,.4).normalize(),i.uSunCol.value.setRGB(1.2,.62,.32),i.uStars.value=0,Qe.cards.forEach(e=>e.material.opacity=0)},update(i,e){Se.down&&Se.moved>=2&&(Qe.target+=Math.abs(Se.dx)*.0011+Math.abs(Se.dy)*4e-4),Se.dx=0,Se.dy=0,e>7&&Se.idle>3&&(Qe.target+=i*.018),Qe.target=Math.min(1,Qe.target);let t=Qe.P;Qe.P+=(Qe.target-Qe.P)*(1-Math.exp(-i*1.4)),Ut.foldSpeed=Math.max(0,(Qe.P-t)/Math.max(i,.001));let n=Qe.P;Qe.uni.uF.value=xs.smoothstep(n,0,.55),Qe.uni.uE.value=xs.smoothstep(n,.4,.98),Qe.uni.uTime.value=e;let s=.35+e*.025,r=175-n*25;Ze.position.set(Math.sin(s)*r,62-n*12,Math.cos(s)*r),Ze.lookAt(0,-22+n*4,0),Qe.cards.forEach((a,o)=>{let l=a.userData;l.a+=i*l.s*(.4+n);let c=l.r*(1-n*.2);a.position.set(Math.cos(l.a)*c,l.y+Math.sin(e*.3+l.ph)*2+n*6,Math.sin(l.a)*c*.8),a.lookAt(Ze.position);let h=(a.material.map?.82:0)*(1-xs.smoothstep(n,.9,1)*.9);a.material.opacity+=(h-a.material.opacity)*(1-Math.exp(-i*.8))})},leave(){Ql.scene=mn,De.photo.classList.remove("on"),Wn()}};Yt.ret={beats:[{t:1.5,zh:"\u56DE\u5230\u5C71\u4E0A\u3002",en:"Back to the mountain."},{t:7,zh:"\u4ECA\u5929\uFF0C\u7941\u8FDE\u5C71\u4E24\u4FA7\u6563\u5E03\u7740\u85CF\u65CF\u3001\u88D5\u56FA\u65CF\u3001\u8499\u53E4\u65CF\u3001\u54C8\u8428\u514B\u65CF\u3001\u56DE\u65CF\u548C\u571F\u65CF\u7684\u81EA\u6CBB\u53BF\u3002",en:"Today, autonomous counties of Tibetans, Yugurs, Mongols, Kazakhs, Hui and Tu lie on both sides of the Qilian.",fn:()=>ui(["c_tianzhu","c_sunan","c_subei","c_aksay","c_menyuan","c_huzhu","c_datong"])},{t:17,zh:"\u5927\u5BB6\u90FD\u4F4F\u5728\u540C\u4E00\u5EA7\u96EA\u5C71\u4E0B\u3002",en:"They all live below the same snow."},{t:24,zh:"\u8FD1\u534A\u4E2A\u4E16\u7EAA\u91CC\uFF0C\u7941\u8FDE\u5C71\u7684\u51B0\u5DDD\u9762\u79EF\u7F29\u5C0F\u4E86\u7EA6\u4E94\u5206\u4E4B\u4E00\u3002",en:"In about half a century, the Qilian\u2019s glaciers have lost roughly a fifth of their area.",fn:()=>{Ri.recede=!0;let i=De.inset.querySelector("img");i.src.includes("laohugou")||(i.src=i.dataset.src),De.inset.classList.add("on")}},{t:34,zh:"\u96EA\u4F1A\u53D8\u5C11\uFF0C\u6CB3\u4F1A\u53D8\u77ED\u3002\u53EF\u53EA\u8981\u5C71\u4E0A\u8FD8\u4E0B\u96EA\u2014\u2014",en:"The snow may thin and the rivers may shorten. But as long as snow still falls on the mountain \u2014",fn:()=>{De.inset.classList.remove("on"),Rt.material.uniforms.uOp.value=1.4}},{t:42,zh:"\u6211\u4EEC\u90FD\u559D\u8FC7\u540C\u4E00\u573A\u96EA\u3002",en:"We have all drunk the same snow.",fn:()=>Aa()},{t:50,fn:()=>Ua("end")}],enter(){As=Fi.night,Ri.recede=!1,Ri.sl=20.5,Rt.material.uniforms.uOp.value=.8,Rt.material.uniforms.uFall.value=1.8,Rt.material.uniforms.uCyl.value.w=0,Zt.mat.uniforms.uHoleOn.value=0,ue.group.visible=!1,Gt.mat.uniforms.uOn.value=.45,Gt.mat.uniforms.uFill.value=-10,Aa(),ui(["qilian"]),this.keys=[{t:0,p:Le(100.6,40.3,150,!0),l:Le(99.6,38.4,10,!0)},{t:20,p:Le(99.4,40.6,210,!0),l:Le(98.6,38,0,!0)},{t:45,p:Le(98.4,40.4,170,!0),l:Le(98,38.3,10,!0)},{t:70,p:Le(97.6,40,140,!0),l:Le(97.5,38.4,16,!0)}]},update(i,e){let[t,n]=oc(this.keys,e);Da(t,n,Nt.yaw,Nt.pitch),Ri.recede&&(Ri.sl=Math.min(23.2,Ri.sl+i*.35)),Zt.mat.uniforms.uSnowline.value=Ri.sl},leave(){De.inset.classList.remove("on"),Zt.mat.uniforms.uSnowline.value=20.5}};var Ri={recede:!1,sl:20.5};Yt.end={enter(){let i=rt("#end");i.hidden=!1,requestAnimationFrame(()=>i.classList.add("on")),De.next.hidden=!0,Wn(),Li("",""),De.subs.classList.add("out")},update(i,e){Yt.ret.update(i,70+e*.5)}};function _u(){De.next.hidden=!1}var jl=["snow","flow","strata","fold","ret"];function xu(){if(!Oi)return;let i=jl.indexOf(yt);if(yt==="strata"&&ne.dive>=1&&ne.L<Xn.length-1&&!ne.done){Bi(ne.L+1);return}i>=0&&i<jl.length-1?lc(jl[i+1]):yt==="ret"&&Ua("end")}var Es=null;function lc(i){Es||(Es=i,or=1,mv(i==="ret"?14673644:658448))}function mv(i){Ta.uniforms.uFadeCol.value.set(i)}var gv={intro:.55,snow:.32,flow:.45,strata:.6,fold:.3,ret:.65,end:.6};function Ua(i){if(Yt[yt]&&Yt[yt].leave&&Yt[yt].leave(),yt=i,Ts=0,ba=0,Nt.yaw=0,Nt.pitch=0,De.next.hidden=!0,ne.done=!1,Ii.t=0,hv(i),i!=="end"){let e=rt("#end");e.classList.remove("on"),e.hidden=!0}Li("",""),Yt[i].enter(),tc.strength=gv[i]??.5,qt.setScene(i)}function vv(i,e){let t=Ze.position.clone(),n=new C(i,e,.5).unproject(Ze).sub(t).normalize(),s=0,r=!0;for(let a=0;a<900;a++){s+=1+s*.01;let o=t.x+n.x*s,l=t.z+n.z*s,c=t.y+n.y*s;if(Math.abs(o)>Di/2||Math.abs(l)>Ui/2){if(s>1500)return null;continue}if(c<Vt(o,l)){let h=s-(1+s*.01),u=s;for(let f=0;f<8;f++){let p=(h+u)/2,g=t.x+n.x*p,v=t.z+n.z*p;t.y+n.y*p<Vt(g,v)?u=p:h=p}return new C(t.x+n.x*u,0,t.z+n.z*u)}}return null}var sr=rt("#load");async function _v(){let i=new Image;i.src="assets/geo/height.png",await i.decode();let e=document.createElement("canvas");e.width=on,e.height=kn;let t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(i,0,0);let n=t.getImageData(0,0,on,kn).data;Pi=new Float32Array(on*kn);let s=new Uint16Array(on*kn);for(let a=0;a<on*kn;a++){let o=n[a*4]*16+Math.round(n[a*4+1]/17),c=(Kh+o/4095*(F0-Kh)-1400)/1e3*N0;Pi[a]=c,s[a]=Vh.toHalfFloat(c)}let r=new Zs(s,on,kn,ua,tn);return r.minFilter=zt,r.magFilter=zt,r.wrapS=r.wrapT=Un,r.needsUpdate=!0,r}function xv(i){return new Promise((e,t)=>fu.load(i,n=>{n.colorSpace=Ct,n.anisotropy=8,e(n)},void 0,t))}async function yv(){try{sr.textContent="\u8F7D\u5165\u5C71\u5DDD \xB7 Loading the mountains \xB7 0%";let i=!Mn&&Sn.capabilities.maxTextureSize>=4096,[e,t,n]=await Promise.all([_v().then(r=>(sr.textContent="\u8F7D\u5165\u5C71\u5DDD \xB7 Loading the mountains \xB7 45%",r)),xv(i?"assets/geo/sat_hi.jpg":"assets/geo/sat.jpg").then(r=>(sr.textContent="\u8F7D\u5165\u5F71\u50CF \xB7 Loading imagery \xB7 80%",r)),fetch("assets/geo/rivers.json").then(r=>r.json())]);W0(e,t),X0(n),$0(),K0(),Q0(),rv();try{await Promise.race([Promise.all([document.fonts.load('64px "ZCOOL XiaoWei"'),document.fonts.load('30px "Cinzel"')]),new Promise(r=>setTimeout(r,3500))])}catch{}ev(),iv(),sr.textContent="\u5DF2\u5C31\u7EEA \xB7 Ready";let s=rt("#enter");s.disabled=!1,Yt.intro.enter(),or=0}catch(i){console.error(i),sr.textContent="\u8F7D\u5165\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0 \xB7 Loading failed, please reload"}}rt("#enter").addEventListener("click",()=>{Oi||(Oi=!0,qt.init(),rt("#intro").classList.add("gone"),De.top.classList.remove("dim"),setTimeout(()=>{rt("#intro").hidden=!0},1700),Ua("snow"))});rt("#again").addEventListener("click",()=>{Gn.globalCompositeOperation="source-over",Gn.fillStyle="#000",Gn.fillRect(0,0,512,298),sc.needsUpdate=!0,xt.reveal=0,xt.op=0,xt.on=!1,xt.off=!1,lc("snow")});var Mv=new gs,Sv={v:.05},Dt={ema:16,t:0,dpr:Ni};function au(){Sn.setPixelRatio(Dt.dpr),bn.setPixelRatio(Dt.dpr),bn.setSize(innerWidth,innerHeight)}var ci=0;function yu(){requestAnimationFrame(yu);let i=Mv.getDelta(),e=Math.min(i,Sv.v);if(Dt.ema=Dt.ema*.94+i*1e3*.06,Dt.t+=i,Dt.t>2.5&&Oi&&!Dt.lock&&(Dt.t=0,Dt.ema>30&&Dt.dpr>.85?(Dt.dpr=Math.max(.85,Dt.dpr-.25),au()):Dt.ema<12.5&&Dt.dpr<Ni&&(Dt.dpr=Math.min(Ni,Dt.dpr+.25),au())),ci+=e,Ts+=e,Se.idle+=e,ir+=(or-ir)*(1-Math.exp(-e*(or>ir?2.6:1.1))),Es&&ir>.97&&(Ua(Es),Es=null,or=0),Ta.uniforms.uFade.value=ir,Ta.uniforms.uTime.value=ci,!Zt.mesh){bn.render();return}fv(e),(yt==="flow"||yt==="ret"||yt==="end")&&(Se.down&&Se.moved>=6&&(Nt.yaw+=Se.dx*-.0025,Nt.pitch+=Se.dy*-.002),Se.dx=0,Se.dy=0,Se.down||(Nt.yaw*=Math.exp(-e*.5),Nt.pitch*=Math.exp(-e*.5)),Nt.yaw=xs.clamp(Nt.yaw,-1.2,1.2),Nt.pitch=xs.clamp(Nt.pitch,-.5,.4)),yt==="snow"&&(Se.dx=0,Se.dy=0);let t=Yt[yt];if(t.beats&&ba<t.beats.length){let r=t.beats[ba];Ts>=r.t&&(!r.need||r.need()||Ts>r.t+22)&&(ba++,r.zh&&Li(r.zh,r.en),r.fn&&r.fn(),r.end&&_u())}t.update(e,Ts),Ts>12&&De.next.hidden&&yt!=="end"&&yt!=="intro"&&!Es&&(De.next.hidden=!1);let n=Zt.mat.uniforms;n.uTime.value=ci,Ii.v+=(Ii.t-Ii.v)*(1-Math.exp(-e*.55)),n.uPaint.value=Ii.v,n.uMeltK.value+=((yt==="snow"?1:0)-n.uMeltK.value)*(1-Math.exp(-e*.6)),Gt.mat.uniforms.uTime.value=ci,Ea.material.uniforms.uTime.value=ci,Ea.position.copy(Ze.position),ic.position.copy(Ze.position);let s=Rt.material.uniforms;s.uTime.value=ci,s.uCam.value.copy(Ze.position),hi.pts.material.uniforms.uTime.value=ci,ue.wall&&(ue.wall.material.uniforms.uTime.value=ci),(yt==="snow"||K.life.some(r=>r>0))&&Z0(e),j0(e),lv(),qt.tick(e,Ut),bn.render()}addEventListener("resize",()=>{cu(),Sn.setSize(innerWidth,innerHeight),bn.setSize(innerWidth,innerHeight),tc.resolution.set(innerWidth/2,innerHeight/2)});bn.setSize(innerWidth,innerHeight);yu();yv();
