(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"06e5":function(e,t,n){},2136:function(e,t,n){e.exports=n.p+"media/bg.bb632ed6.mp3"},"397c":function(e,t,n){"use strict";n("6ce1")},"47e2":function(e,t,n){"use strict";n("ed8a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("034f"),n("2877")),s={},c=Object(o["a"])(s,r,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{ref:"main",staticClass:"wall",attrs:{id:"main"}}),n("transition",{attrs:{name:"fade"}},[e.showWinningDialog?n("Winning",{attrs:{title:e.prizeTitle,detail:e.prizeDetail,name:e.prizeName}}):e._e()],1),n("PrizeList",{attrs:{currentIndex:e.currentIndex,info:e.prizeInfo,list:e.prizeList},on:{"update:currentIndex":function(t){e.currentIndex=t},"update:current-index":function(t){e.currentIndex=t}},model:{value:e.showPrizeList,callback:function(t){e.showPrizeList=t},expression:"showPrizeList"}}),n("audio",{ref:"audio",attrs:{hidden:"",loop:"true",controls:"controls"}},[n("source",{attrs:{src:e.bgMp3}})])],1)},m=[],f=(n("a9e3"),n("d3b7"),n("159b"),n("b0c0"),n("a15b"),n("99af"),n("d81d"),n("fb6a"),n("4e82"),n("4de4"),n("e9c4"),n("25f0"),[{id:"0628538",name:"用户1"},{id:"0891204",name:"用户2"},{id:"0890393",name:"用户3"},{id:"0923932",name:"用户4"},{id:"0902842",name:"用户5"},{id:"0911439",name:"用户6"},{id:"0894218",name:"用户7"},{id:"0894216",name:"用户8"},{id:"0894244",name:"用户9"},{id:"0894239",name:"用户10"},{id:"0925292",name:"用户11"},{id:"0892890",name:"用户12"},{id:"0894231",name:"用户13"},{id:"0905547",name:"用户14"},{id:"0926295",name:"用户15"},{id:"0905569",name:"用户16"},{id:"0900304",name:"用户17"},{id:"0919500",name:"用户18"},{id:"0891826",name:"用户19"},{id:"0919501",name:"用户20"},{id:"0907739",name:"用户21"},{id:"0890517",name:"用户22"},{id:"0898991",name:"用户23"},{id:"0903934",name:"用户24"},{id:"0892895",name:"用户25"},{id:"0903899",name:"用户26"},{id:"0905542",name:"用户27"},{id:"0903988",name:"用户28"},{id:"0933177",name:"用户29"},{id:"0937009",name:"用户30"},{id:"0939557",name:"用户31"}]);console.log("一共".concat(f.length,"人"));var h=f,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"winning"},[n("div",{staticClass:"content"},[n("span",{staticClass:"prize-name"},[e._v(" "+e._s(e.title)+" ")]),n("span",{staticClass:"prize-detail"},[e._v(" "+e._s(e.detail)+" ")]),n("div",{staticClass:"name"},[e._v(" "+e._s(e.name)+" ")])])])},v=[],g={name:"Winning",props:{title:{required:!0,type:String},detail:{required:!0,type:String},name:{required:!0,type:String}}},b=g,z=(n("397c"),Object(o["a"])(b,p,v,!1,null,"044c8db1",null)),y=z.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prize-list",class:{hide:!e.visible}},[n("div",{staticClass:"title"},[e._v("中奖信息")]),n("div",{staticClass:"info"},e._l(e.info,(function(t,i){return n("label",{key:t.name},[n("input",{attrs:{tabindex:"-1",type:"radio",name:"prize"},domProps:{checked:e.currentIndex===i},on:{change:function(t){return e.handleChange(i)}}}),n("span",{staticClass:"name"},[e._v(e._s(t.name)+"("+e._s(t.number)+" / "+e._s(t.count)+")")]),Array.isArray(e.list[i])?n("ul",e._l(e.list[i],(function(t,i){return n("li",{key:i},[e._v(" "+e._s(t)+" ")])})),0):n("div",[e._v("暂无中奖信息")])])})),0)])},x=[],S={name:"PrizeList",data:function(){return{visible:!1}},props:{value:{required:!0,type:Boolean},info:{required:!0,type:Array},list:{required:!0,type:Array},currentIndex:{required:!0,type:Number}},methods:{handleChange:function(e){this.$emit("update:currentIndex",e)}},watch:{value:function(e){this.visible=e},visible:function(e){this.$emit("input",e)}}},I=S,C=(n("47e2"),Object(o["a"])(I,w,x,!1,null,"713553a1",null)),_=C.exports,L=n("2136"),O=n.n(L),P=JSON.parse(localStorage.getItem("choosed"))||{},j=[.2,.08],D=[5,1],E={name:"Home",data:function(){return{isStart:!1,showWinningDialog:!1,currentIndex:4,prizeInfo:[{level:0,name:"特等奖",prize:"小米智能音箱",count:1,number:0},{level:1,name:"一等奖",prize:"小爱音箱",count:4,number:0},{level:2,name:"二等奖",prize:"护眼台灯",count:5,number:0},{level:3,name:"三等奖",prize:"充电宝",count:8,number:0},{level:4,name:"四等奖",prize:"智能插座",count:10,number:0}],prizeList:JSON.parse(localStorage.getItem("prizeList"))||[],prizeTitle:"",prizeDetail:"",prizeName:"",showPrizeList:!1,bgMp3:O.a}},components:{Winning:y,PrizeList:_},methods:{init:function(){var e=this;this.currentIndex=Number(localStorage.getItem("currentIndex")||4),this.prizeInfo.forEach((function(t,n){Array.isArray(e.prizeList[n])&&(t.number=e.prizeList[n].length)}))},createHTML:function(){var e=[];return h.forEach((function(t,n){t.index=n,P[t.name]||e.push('<li><a href="#">'+t.name+"</a></li>")})),0===e.length&&e.push('<li><a href="#">大家都有奖了</a></li>'),["<ul>"].concat(e,["</ul>"]).join("")},createCanvas:function(){var e=document.createElement("canvas");e.id="myCanvas",e.width=document.body.clientWidth,e.height=document.body.clientHeight-10,e.innerHTML=this.createHTML(),document.getElementById("main").appendChild(e),TagCanvas.Start("myCanvas","",{textColour:"#FFD700",initial:j,textHeight:42,zoom:1.05,dragControl:!1,wheelZoom:!1})},removeCanvas:function(){var e=document.getElementById("myCanvas");e&&e.parentNode.removeChild(e)},lottery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return h.filter((function(e){return!P[e.name]})).map((function(e){return Object.assign({score:Math.random()},e)})).sort((function(e,t){return e.score-t.score})).slice(0,e).map((function(e){return e.name}))},handleReset:function(){var e=window.confirm("确定重置一切吗？");e&&(localStorage.clear(),window.location.reload())},handleSave:function(e){this.prizeList[this.currentIndex]||this.$set(this.prizeList,this.currentIndex,[]),this.prizeList[this.currentIndex].push(e.name),localStorage.setItem("prizeList",JSON.stringify(this.prizeList))},getNextPrizeIndex:function(){for(var e=-1,t=this.prizeInfo.length-1;t>=0;t--){var n=this.prizeInfo[t];if(n.number<n.count){e=t;break}}return e},handleStart:function(){if(this.showWinningDialog)this.showWinningDialog=!1;else{this.isStart=!this.isStart;var e=this.prizeInfo[this.currentIndex];if(this.currentIndex<0)return window.alert("所有奖项均已抽完，明年再会"),this.isStart=!1,void this.setSpeed(j);if(e.number>=e.count&&(console.log("-------- ".concat(e.name,"已全部抽完，自动切换下一个奖项 --------")),this.currentIndex=this.getNextPrizeIndex(),e=this.prizeInfo[this.currentIndex],!e))return console.log("没下一个奖项了"),void(this.isStart=!1);if(!this.isStart){var t=this.lottery(1);t.forEach((function(e){P[e]=!0})),localStorage.setItem("choosed",JSON.stringify(P));var n=t.toString();e.number++,console.debug("".concat(e.name,": ").concat(n," (").concat(e.number,"/").concat(e.count,")")),this.handleSave({name:n});var i="".concat(e.name),r="".concat(e.prize);this.showDialog(i,r,n),this.removeCanvas(),this.createCanvas()}this.setSpeed(this.isStart?D:j)}},setSpeed:function(e){TagCanvas.SetSpeed("myCanvas",e)},showDialog:function(e,t,n){this.prizeTitle=e,this.prizeName=n,this.prizeDetail=t,this.showWinningDialog=!0},resize:function(){this.removeCanvas(),this.createCanvas(),this.isStart=!1,this.setSpeed(j)}},mounted:function(){var e=this;this.init(),this.createCanvas(),document.onkeydown=function(t){var n=t||window.event;if(n){var i=n.keyCode;if(13===i||32===i)e.handleStart();else if(46===i||8===i)e.handleReset();else if(76===i)e.showPrizeList=!e.showPrizeList;else if(80===i){var r=e.$refs.audio;r.play()}}},window.addEventListener("resize",this.resize)},beforeDestroy:function(){document.onkeydown=null,window.removeEventListener("resize",this.resize)},watch:{currentIndex:function(e){localStorage.setItem("currentIndex",e)}}},N=E,k=(n("707d"),Object(o["a"])(N,d,m,!1,null,"57deca39",null)),T=k.exports;i["a"].use(l["a"]);var M=[{path:"/",name:"Home",component:T}],W=new l["a"]({routes:M}),$=W;i["a"].config.productionTip=!1,new i["a"]({router:$,render:function(e){return e(u)}}).$mount("#app")},"6ce1":function(e,t,n){},"707d":function(e,t,n){"use strict";n("06e5")},"85ec":function(e,t,n){},ed8a:function(e,t,n){}});