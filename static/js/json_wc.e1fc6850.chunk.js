"use strict";(self.webpackChunkjournalmytrade=self.webpackChunkjournalmytrade||[]).push([[978],{8738:function(e,t,a){a.d(t,{WordCloud:function(){return I}});var i=a(7853),r=a(4531),s=a(6148),n=a(4474),o=a(3538),l=a(1020),h=a(8334),u=a(5113),d=a(565),f=a(8986),g=a(8180),v=function(e){(0,l.Z)(a,e);var t=(0,h.Z)(a);function a(){return(0,i.Z)(this,a),t.apply(this,arguments)}return(0,r.Z)(a,[{key:"setupDefaultRules",value:function(){var e=this;(0,n.Z)((0,o.Z)(a.prototype),"setupDefaultRules",this).call(this);var t=this._root.interfaceColors,i=this.rule.bind(this);i("WordCloud").setAll({width:d.AQ,height:d.AQ,minFontSize:(0,d.aQ)(2),maxFontSize:(0,d.aQ)(15),excludeWords:[],angles:[0,-90],minWordLength:1,step:15,randomness:0,autoFit:!0,animationEasing:g.C0(g.T7)});var r=i("Label",["wordcloud"]);r.setAll({text:"{category}",centerX:d.CI,centerY:d.CI,position:"absolute",lineHeight:d.AQ,populateText:!0}),r.setup=function(a){a.set("background",f.A.new(e._root,{fill:t.get("background"),fillOpacity:0}))}}}]),a}(u.Q),c=a(3792),p=a(3454),b=a(6343),m=a(7919),y=a(1918),_=a(6817),x=a(4628),w=a(4921),k=a(3661),Z=a(6683),I=function(e){(0,l.Z)(a,e);var t=(0,h.Z)(a);function a(){var e;return(0,i.Z)(this,a),e=t.apply(this,arguments),Object.defineProperty((0,s.Z)(e),"_currentIndex",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty((0,s.Z)(e),"_timeoutDP",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty((0,s.Z)(e),"_ghostContainer",{enumerable:!0,configurable:!0,writable:!0,value:e.children.push(m.W.new(e._root,{layer:99,opacity:.01}))}),Object.defineProperty((0,s.Z)(e),"_pointSets",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty((0,s.Z)(e),"_sets",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty((0,s.Z)(e),"_process",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty((0,s.Z)(e),"_buffer",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty((0,s.Z)(e),"_boundsToAdd",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty((0,s.Z)(e),"labels",{enumerable:!0,configurable:!0,writable:!0,value:e._makeLabels()}),e}return(0,r.Z)(a,[{key:"_afterNew",value:function(){var e=this;this._defaultThemes.push(v.new(this._root)),this.fields.push("category","fill"),this._setDefault("valueField","value"),this._setDefault("categoryField","category"),this._setDefault("fillField","fill"),(0,n.Z)((0,o.Z)(a.prototype),"_afterNew",this).call(this),this._root.events.on("frameended",(function(){e.set("progress",e._currentIndex/e.dataItems.length)}))}},{key:"makeLabel",value:function(e){var t=this.children.push(this.labels.make());t._setDataItem(e);var a=e.get("fill");null!=a&&t.set("fill",a),t.set("x",-999999),e.set("label",t),this.labels.push(t);var i=this._ghostContainer.children.push(this.labels.make());return i._setDataItem(e),i.setAll({fill:_.Il.fromHex(0),fontWeight:"900"}),e.set("ghostLabel",i),this.labels.push(i),t}},{key:"_makeLabels",value:function(){var e=this;return new y.o(p.YS.new({}),(function(){return b._._new(e._root,{themeTags:x.Fy(e.labels.template.get("themeTags",[]),["wordcloud","series"])},[e.labels.template])}))}},{key:"processDataItem",value:function(e){if((0,n.Z)((0,o.Z)(a.prototype),"processDataItem",this).call(this,e),null==e.get("fill")){var t=this.get("colors");t&&e.setRaw("fill",t.next())}this.makeLabel(e)}},{key:"_prepareChildren",value:function(){(0,n.Z)((0,o.Z)(a.prototype),"_prepareChildren",this).call(this),this.isDirty("text")&&(this.data.setAll(this._getWords(this.get("text"))),this._dirty.text=!1)}},{key:"_updateChildren",value:function(){var e=this;(0,n.Z)((0,o.Z)(a.prototype),"_updateChildren",this).call(this);var t=this._root._renderer.resolution,i=Math.round(this._root.width()*t),r=2*this.get("step",1);if(this._valuesDirty||this._sizeDirty||this.isPrivateDirty("adjustedFontSize")){var s=this.getPrivate("adjustedFontSize",1),l=this.innerWidth(),h=this.innerHeight(),u=Math.min(l,h),d=Math.max(l,h);this._buffer=Array(Math.ceil(this._root.width()*this._root.height()*t*t)).fill(0),u<800&&(r/=2),this._ghostContainer._display.clear(),this._pointSets=[];for(var f=0;f<this._sets;f++){for(var g=r*(this._sets-f),v=this._spiralPoints(l/2,h/2,l,h,0,g*h/d,g*l/d,0,0),c=v.length-1;c>=0;c--){var p=v[c];(p.x<0||p.x>l||p.y<0||p.y>h)&&v.splice(c,1)}this._pointSets.push(v)}var b=0,m=0,y=0,_=1/0,k=0;w.S6(this._dataItems,(function(e){var t=e.get("valueWorking",0);b+=t,m+=Math.abs(t)})),this._dataItems.sort((function(e,t){var a=e.get("value"),i=t.get("value");return a>i?-1:a<i?1:0})),w.S6(this._dataItems,(function(e){var t=e.get("valueWorking",0);t>=m&&(b=e.get("value",0)),t>y&&(y=t),t<_&&(_=t),k++})),this.setPrivateRaw("valueLow",_),this.setPrivateRaw("valueHigh",y),this.setPrivateRaw("valueSum",b),this.setPrivateRaw("valueAverage",b/k),this.setPrivateRaw("valueAbsoluteSum",m);var I=Math.min(l,h),C=x.Iy(this.get("minFontSize",10),I)*s,S=x.Iy(this.get("maxFontSize",100),I)*s,M=this.get("angles",[0]);w.S6(this._dataItems,(function(t){var a=t.get("valueWorking",0),i=t.get("ghostLabel"),r=C+(S-C)*(a-_)/(y-_);Z.i2(r)&&(r=S);var s=e._sets-1-Math.floor((r-C)/(S-C)*(e._sets-1));t.setRaw("set",s),t.setRaw("fontSize",r);var n=M[Math.floor(Math.random()*M.length)];t.setRaw("angle",n),i.setAll({fontSize:r,rotation:n,x:-1e4})})),this._process=!1,this._currentIndex=0,this._root.events.once("frameended",(function(){e.setTimeout((function(){e._process=!0,e._markDirtyKey("progress")}),50)}))}var D=this._boundsToAdd;if(D){for(var P=this._ghostContainer._display.getLayer().context,A=Math.round(D.top),j=Math.round(D.left),z=Math.round(D.right-D.left),L=Math.round(D.bottom-D.top),F=P.getImageData(j,A,z,L).data,W=this._buffer,R=3,O=A;O<A+L;O++)for(var T=j;T<j+z;T++){var E=(O+1)*i-(i-T);0!=F[R]&&(W[E]=1),R+=4}this._boundsToAdd=void 0}this._process&&this.isDirty("progress")&&this._processItem()}},{key:"_processItem",value:function(){var e=this;if(this._boundsToAdd=void 0,this._currentIndex<this.dataItems.length){var t=this.dataItems[this._currentIndex],a=t.get("label"),i=t.get("ghostLabel"),r=this._root._renderer.resolution,s=i.width(),n=i.height(),o=i._display.getLayer().context,l=t.get("set"),h=this._pointSets[l],u=this.innerWidth(),d=this.innerHeight(),f=Math.round(this._root.width()*r),g=this.x(),v=this.y(),c=this.get("angles",[0]);u>d&&s>=u/2&&w.S6(c,(function(e){if(0==e&&0!=t.get("angle")){t.setRaw("angle",0),i.set("rotation",0);var a=[n,s];s=a[0],n=a[1]}})),d>u&&s>=u/2&&w.S6(c,(function(e){if(90==Math.abs(e)&&0==t.get("angle")){t.setRaw("angle",e),i.set("rotation",e);var a=[n,s];s=a[0],n=a[1]}}));var p=Math.ceil(s*r),b=Math.ceil(n*r);if(o&&s>0&&n>0)for(var m=Math.round(Math.random()*h.length*this.get("randomness",0)),y=!0;y;){var _=h[m];if(_){if(y=!1,this._currentIndex>0){var x=Math.round((_.x+g)*r-p/2),k=Math.round((_.y+v)*r-b/2);y=this._hasColor(x,k,p,b,f)}if(_.x-s/2<0||_.x+s/2>u||_.y-n/2<0||_.y+n/2>d)m++,y=!0;else if(y)m+=2;else{var Z=t.get("angle",0),I=t.get("fontSize",0);-999999!=a.get("x")?(a.animate({key:"x",to:_.x,duration:this.get("animationDuration",0),easing:this.get("animationEasing")}),a.animate({key:"y",to:_.y,duration:this.get("animationDuration",0),easing:this.get("animationEasing")}),a.animate({key:"rotation",to:Z,duration:this.get("animationDuration",0),easing:this.get("animationEasing")}),a.animate({key:"fontSize",to:I,duration:this.get("animationDuration",0),easing:this.get("animationEasing")})):(a.setAll({x:_.x,y:_.y,rotation:Z,fontSize:I}),a.appear()),i.setAll({x:_.x,y:_.y});for(var C=h.length-1;C>=0;C--){var S=h[C];S.x>=_.x-s/2&&S.x<=_.x+s/2&&S.y>=_.y-n/2&&S.y<=_.y+n/2&&h.splice(C,1)}this._boundsToAdd={left:(_.x+g-s/2)*r,right:(_.x+g+s/2)*r,top:(_.y+v-n/2)*r,bottom:(_.y+v+n/2)*r}}}else{if(this.get("autoFit"))return void this.setTimeout((function(){e.setPrivate("adjustedFontSize",.9*e.getPrivate("adjustedFontSize",1))}),50);a.set("x",-999999),y=!1}}this._currentIndex++}}},{key:"disposeDataItem",value:function(e){(0,n.Z)((0,o.Z)(a.prototype),"disposeDataItem",this).call(this,e);var t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());var i=e.get("ghostLabel");i&&(this.labels.removeValue(i),i.dispose())}},{key:"_getWords",value:function(e){var t=[];if(e){var a,i="A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400\u4db5\u4e00\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua90a-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9@+",r=new RegExp("(["+i+"]+[-"+i+"]*["+i+"]+)|(["+i+"]+)","ig"),s=e.match(r);if(!s)return[];for(;a=s.pop();){for(var n=void 0,o=0;o<t.length;o++)if(t[o].category.toLowerCase()==a.toLowerCase()){n=t[o];break}n?(n.value++,this.isCapitalized(a)||(n.category=a)):t.push({category:a,value:1})}var l=this.get("excludeWords"),h=this.get("minValue",1),u=this.get("minWordLength",1);if(h>1||u>1||l&&l.length>0)for(var d=t.length-1;d>=0;d--){var f=t[d],g=f.category;f.value<h&&t.splice(d,1),g.length<u&&t.splice(d,1),l&&-1!==l.indexOf(g)&&t.splice(d,1)}t.sort((function(e,t){return e.value==t.value?0:e.value>t.value?-1:1}));var v=this.get("maxCount",1/0);t.length>v&&(t=t.slice(0,v))}return t}},{key:"isCapitalized",value:function(e){var t=e.toLowerCase();return e[0]!=t[0]&&e.substr(1)==t.substr(1)&&e!=t}},{key:"_spiralPoints",value:function(e,t,a,i,r,s,n,o,l){for(var h=r+.01,u=o*k.sE,d=[];h<a+n;){var f=s;if(f/2>h&&(f=2*h),(u+=2*Math.asin(f/2/h))*k.v4>l+(a-r)/n*360)break;var g=u*k.v4,v={x:e+h*Math.cos(u),y:t+h*i/a*Math.sin(u)};d.push(v),h=r+g/360*n}return d.shift(),d}},{key:"_hasColor",value:function(e,t,a,i,r){var s=this._buffer;if(s)for(var n=t;n<t+i;n+=4)for(var o=e;o<e+a;o+=4){if(0!=s[(n+1)*r-(r-o)])return!0}return!1}}]),a}(c.F);Object.defineProperty(I,"className",{enumerable:!0,configurable:!0,writable:!0,value:"WordCloud"}),Object.defineProperty(I,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:c.F.classNames.concat([I.className])})}}]);
//# sourceMappingURL=json_wc.e1fc6850.chunk.js.map