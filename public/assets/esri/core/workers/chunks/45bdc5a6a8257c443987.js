"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3485],{66577:(e,t,i)=>{i.d(t,{qM:()=>c});var r=i(75215),n=i(6570),l=i(9361),o=i(65091),s=i(13473),a=i(17332),u=i(58901);i(82971),i(86973),i(33955);const c={base:l.Z,key:"type",typeMap:{extent:n.Z,multipoint:o.Z,point:s.Z,polyline:u.Z,polygon:a.Z}};(0,r.N7)(c)},33955:(e,t,i)=>{i.d(t,{im:()=>m,q9:()=>v,Ji:()=>h,YX:()=>c,aW:()=>p,wp:()=>d,oU:()=>y,l9:()=>f});var r=i(70586),n=i(6570),l=i(9361),o=i(65091),s=i(13473),a=i(17332),u=i(58901);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function p(e){return void 0!==e.points}function d(e){return void 0!==e.x&&void 0!==e.y}function f(e){return void 0!==e.paths}function y(e){return void 0!==e.rings}function m(e){return(0,r.Wi)(e)?null:e instanceof l.Z?e:d(e)?s.Z.fromJSON(e):f(e)?u.Z.fromJSON(e):y(e)?a.Z.fromJSON(e):p(e)?o.Z.fromJSON(e):c(e)?n.Z.fromJSON(e):null}function h(e){return e?d(e)?"esriGeometryPoint":f(e)?"esriGeometryPolyline":y(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":p(e)?"esriGeometryMultipoint":null:null}const g={esriGeometryPoint:s.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:a.Z,esriGeometryEnvelope:n.Z,esriGeometryMultipoint:o.Z};function v(e){return e&&g[e]||null}},86973:(e,t,i)=>{i.d(t,{Mk:()=>n,P$:()=>l});var r=i(35454);const n=(0,r.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),l=(0,r.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},39450:(e,t,i)=>{i.d(t,{Z:()=>c});var r,n=i(43697),l=i(10736),o=i(5600),s=(i(80442),i(75215)),a=(i(92604),i(52525));let u=r=class extends l.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new r({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,n._)([(0,o.Cb)({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"cols",void 0),(0,n._)([(0,o.Cb)({type:s.z8,json:{write:!0}})],u.prototype,"level",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],u.prototype,"levelValue",void 0),(0,n._)([(0,o.Cb)({type:Number,json:{write:!0}})],u.prototype,"resolution",void 0),(0,n._)([(0,o.Cb)({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"rows",void 0),(0,n._)([(0,o.Cb)({type:Number,json:{write:!0}})],u.prototype,"scale",void 0),u=r=(0,n._)([(0,a.j)("esri.layers.support.LOD")],u);var c=u},11145:(e,t,i)=>{i.d(t,{Z:()=>F});var r,n=i(43697),l=i(35454),o=i(10736),s=i(70586),a=i(67900),u=i(5600),c=(i(80442),i(75215)),p=(i(92604),i(71715)),d=i(52525),f=i(30556),y=i(13473),m=i(82971),h=i(24470),g=i(8744),v=i(40488),_=i(39450);const b=new l.Xn({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let w=r=class extends o.wq{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:i,size:n=256,spatialReference:l=m.Z.WebMercator,numLODs:o=24}=e;if(!(0,g.JY)(l)){const e=[];if(i)for(let t=0;t<i.length;t++){const r=i[t];e.push({level:t,scale:r,resolution:r})}else{let t=5e-4;for(let i=o-1;i>=0;i--)e.unshift({level:i,scale:t,resolution:t}),t*=2}return new r({dpi:96,lods:e,origin:new y.Z(0,0,l),size:[n,n],spatialReference:l})}const s=(0,g.C5)(l),u=e.origin?new y.Z({x:e.origin.x,y:e.origin.y,spatialReference:l}):new y.Z(s?{x:s.origin[0],y:s.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),c=1/(39.37*(0,a.c9)(l)*96),p=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],r=t*c;p.push({level:e,scale:t,resolution:r})}else{let e=(0,g.sT)(l)?512/n*591657527.5917094:256/n*591657527.591555;const i=Math.ceil(o/t);p.push({level:0,scale:e,resolution:e*c});for(let r=1;r<i;r++){const i=e/2**t,n=i*c;p.push({level:r,scale:i,resolution:n}),e=i}}return new r({dpi:96,lods:p,origin:u,size:[n,n],spatialReference:l})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,g.C5)(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return y.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const r=[];this._levelToLOD={},e&&(t=-1/0,i=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,this._levelToLOD[e.level]=e}))),this._set("scales",r),this._set("minScale",t),this._set("maxScale",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];{const i=Math.floor(e),r=i+1;return t[i]/(t[i]/t[r])**(e-i)}}scaleToZoom(e){const t=this.scales,i=t.length-1;let r=0;for(;r<i;r++){const i=t[r],n=t[r+1];if(i<=e)return r;if(n===e)return r+1;if(i>e&&n<e)return r+Math.log(i/e)/Math.log(i/n)}return r}snapScale(e,t=.95){const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,r){const n=this.lodAt(e);if(!n)return null;let l,o;if("number"==typeof t)l=t,o=i;else if((0,g.fS)(t.spatialReference,this.spatialReference))l=t.x,o=t.y,r=i;else{const e=(0,v.iV)(t,this.spatialReference);if((0,s.Wi)(e))return null;l=e.x,o=e.y,r=i}const a=n.resolution*this.size[0],u=n.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:(0,h.Ue)()}),r.level=e,r.row=Math.floor((this.origin.y-o)/u+.001),r.col=Math.floor((l-this.origin.x)/a+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=0){let i=this.lodAt(e.level);if(!i&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const r=e.level-i.level,n=i.resolution*this.size[0]/2**r,l=i.resolution*this.size[1]/2**r;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,h.Ue)()),e.extent[0]=this.origin.x+e.col*n,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+n,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:i}=this.lodAt(t.level),r=i*this.size[0],n=i*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*n,e[2]=e[0]+r,e[3]=e[1]+n,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return r.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const r=e[i];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}};(0,n._)([(0,u.Cb)({type:Number,json:{write:!0}})],w.prototype,"compressionQuality",void 0),(0,n._)([(0,u.Cb)({type:Number,json:{write:!0}})],w.prototype,"dpi",void 0),(0,n._)([(0,u.Cb)({type:String,json:{read:b.read,write:b.write,origins:{"web-scene":{read:!1,write:!1}}}})],w.prototype,"format",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],w.prototype,"isWrappable",null),(0,n._)([(0,u.Cb)({type:y.Z,json:{write:!0}})],w.prototype,"origin",void 0),(0,n._)([(0,p.r)("origin")],w.prototype,"readOrigin",null),(0,n._)([(0,u.Cb)({type:[_.Z],value:null,json:{write:!0}})],w.prototype,"lods",null),(0,n._)([(0,u.Cb)({readOnly:!0})],w.prototype,"minScale",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],w.prototype,"maxScale",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],w.prototype,"scales",void 0),(0,n._)([(0,u.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],w.prototype,"size",void 0),(0,n._)([(0,p.r)("size",["rows","cols"])],w.prototype,"readSize",null),(0,n._)([(0,f.c)("size",{cols:{type:c.z8},rows:{type:c.z8}})],w.prototype,"writeSize",null),(0,n._)([(0,u.Cb)({type:m.Z,json:{write:!0}})],w.prototype,"spatialReference",void 0),w=r=(0,n._)([(0,d.j)("esri.layers.support.TileInfo")],w);var F=w},35671:(e,t,i)=>{i.d(t,{io:()=>h,AB:()=>m,gd:()=>y,Q0:()=>f,YN:()=>u,UF:()=>p,O5:()=>g,os:()=>_,H7:()=>O,qN:()=>I,Pz:()=>z,Qc:()=>C,vP:()=>M}),i(20102);var r,n,l=i(78286);(n=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",n.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";var o=i(59266);const s=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],a=["field","normalizationField"];function u(e,t){if(null!=e&&null!=t)for(const i of Array.isArray(e)?e:[e])if(c(s,i,t),"visualVariables"in i&&i.visualVariables)for(const e of i.visualVariables)c(a,e,t)}function c(e,t,i){if(e)for(const r of e){const e=(0,l.hS)(r,t),n=e&&"function"!=typeof e&&i.get(e);n&&(0,l.RB)(r,n.name,t)}}function p(e,t){if(null!=e&&null!=t&&t.fields.length)if("startField"in e){const i=t.get(e.startField),r=t.get(e.endField);e.startField=i&&i.name||null,e.endField=r&&r.name||null}else{const i=t.get(e.startTimeField),r=t.get(e.endTimeField);e.startTimeField=i&&i.name||null,e.endTimeField=r&&r.name||null}}const d=new Set;function f(e,t){return e&&t?(d.clear(),y(d,e,t),Array.from(d).sort()):[]}function y(e,t,i){var r;if(i)if(null!=t&&null!=(r=t.fields)&&r.length)if(i.includes("*"))for(const{name:i}of t.fields)e.add(i);else for(const r of i)m(e,t,r);else{if(i.includes("*"))return e.clear(),void e.add("*");for(const t of i)e.add(t)}}function m(e,t,i){if("string"==typeof i)if(t){const r=t.get(i);r&&e.add(r.name)}else e.add(i)}async function h(e,t,i){var r;if(!i)return;const{arcadeUtils:n}=await(0,o.LC)(),l=n.extractFieldNames(i,null==t||null==(r=t.fields)?void 0:r.map((e=>e.name)));for(const i of l)m(e,t,i)}function g({displayField:e,fields:t}){return e||(t&&t.length?v(t,"name-or-title")||v(t,"unique-identifier")||v(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function v(e,t){for(const i of e)if(i&&i.valueType&&i.valueType===t)return i.name;return null}function _(e){const t=e.defaultValue;return void 0!==t&&A(e,t)?t:e.nullable?null:void 0}function b(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function w(e){return null===e||b(e)}const F="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function x(e){return null===e||F(e)}function T(e){return null!=e&&"string"==typeof e}function S(e){return null===e||T(e)}function N(){return!0}function A(e,t){let i;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":i=e.nullable?x:F;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":i=e.nullable?w:b;break;case"string":case"esriFieldTypeString":i=e.nullable?S:T;break;default:i=N}return 1===arguments.length?i:i(t)}const G=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function O(e){return null!=e&&G.has(e.type)}function I(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var L,V;function z(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function C(e,t){return e.nullable&&null===t?null:O(e)&&!function(e,t){const i="string"==typeof e?D(e):e;return!!i&&(i.isInteger?F(t)&&t>=i.min&&t<=i.max:t>=i.min&&t<=i.max)}(e.type,Number(t))?L.OUT_OF_RANGE:A(e,t)?e.domain?function(e,t){switch(e.type){case"range":{const i="range"in e?e.range[0]:e.minValue,n="range"in e?e.range[1]:e.maxValue;if(+t<i||+t>n)return r.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return r.INVALID_CODED_VALUE}return null}(e.domain,t):null:V.INVALID_TYPE}function D(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return R;case"esriFieldTypeInteger":case"integer":return E;case"esriFieldTypeSingle":case"single":return Z;case"esriFieldTypeDouble":case"double":return $}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(L||(L={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(V||(V={}));const R={min:-32768,max:32767,isInteger:!0},E={min:-2147483648,max:2147483647,isInteger:!0},Z={min:-34e37,max:12e37,isInteger:!1},$={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function M(e,t,i){switch(e){case r.INVALID_CODED_VALUE:return`Value ${i} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case r.VALUE_OUT_OF_RANGE:return`Value ${i} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case V.INVALID_TYPE:return`Value ${i} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case L.OUT_OF_RANGE:{const{min:e,max:r}=D(t.type);return`Value ${i} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}},59266:(e,t,i)=>{i.d(t,{mz:()=>c,pp:()=>u,WW:()=>s,Yi:()=>a,LC:()=>o}),i(66577);var r=i(70586),n=i(82971);let l;function o(){return l||(l=(async()=>{const e=await Promise.all([i.e(9490),i.e(6690)]).then(i.bind(i,96690));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),l}const s=(e,t,i)=>c.create(e,t,i,null,["$feature"]),a=(e,t,i)=>c.create(e,t,i,null,["$feature","$view"]),u=(e,t,i,r)=>c.create(e,t,i,r,["$feature","$view"]);class c{constructor(e,t,i,r,n,l,o,s){this.script=e,this.evaluate=n;const a=Array.isArray(o)?o:o.fields;this.fields=a,this._syntaxTree=r,this._arcade=t,this._arcadeDictionary=i,this._arcadeFeature=l,this._spatialReference=s,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,i,l,s,a){const{arcade:u,Feature:p,Dictionary:d}=await o(),f=n.Z.fromJSON(t),y=u.parseScript(e,a),m=s.reduce(((e,t)=>({...e,[t]:null})),{});let h=null;(0,r.pC)(l)&&(h=new d(l),h.immutable=!0,m.$config=null);const g=u.scriptUsesGeometryEngine(y)&&u.enableGeometrySupport(),v=u.scriptUsesFeatureSet(y)&&u.enableFeatureSetSupport(),_=u.scriptIsAsync(y)&&u.enableAsyncSupport(),b={vars:m,spatialReference:f,useAsync:!!_},w=new d;w.immutable=!1,w.setField("scale",0);const F=u.compileScript(y,b);return await Promise.all([g,v,_]),new c(e,u,d,y,(e=>("$view"in e&&e.$view&&(w.setField("scale",e.$view.scale),e.$view=w),h&&(e.$config=h),F({vars:e,spatialReference:f}))),new p,i,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}}}]);