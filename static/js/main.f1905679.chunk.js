(this["webpackJsonpoop-game"]=this["webpackJsonpoop-game"]||[]).push([[0],{18:function(t,e,o){},19:function(t,e,o){},27:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),i=o(7),a=o.n(i),s=(o(18),o(19),o(2)),c=o(3),u=(o(5),o(0));function h(t){return Object(u.jsx)("div",{className:"itemModelStyle",style:{top:t.position[1],left:t.position[0],borderColor:t.color,width:t.size[0],height:t.size[1]}})}var l=r.a.memo(h),f=function(){function t(){Object(s.a)(this,t),this.position=[Math.ceil(.7*Math.random()*window.screen.width+50),Math.ceil(.7*Math.random()*window.screen.height+50)],this.size=[20,20]}return Object(c.a)(t,[{key:"render",value:function(){return Object(u.jsx)(l,{position:this.position,color:"white",size:this.size})}}]),t}(),b=o(6),y=function(){return Object(b.b)()},m=b.c,v=o(8),d={startStatus:!1,difficultyStatus:0,heroName:"Ordinary Hero",level:1,gameOverStatus:!1,heroPosition:[20,60],botPosition:[500,500],bot2Position:[500,500],heroSize:[],itemSize:[],bot2Size:[],botSize:[],bulletPosition:[],bulletState:!1,bulletSize:[],exitPosition:[],keyPosition:[0,0],boosterPosition:[0,0],pauseStatus:!1,saveStatus:!1,boosterStatus:!1,keyForExit:!1},g=Object(v.b)({name:"game",initialState:d,reducers:{difficultyStatusAction:function(t,e){t.difficultyStatus=e.payload},heroNameAction:function(t,e){t.heroName=e.payload},startStatusAction:function(t){t.startStatus=!0},levelUpAction:function(t){t.level+=1},gameOverAction:function(t,e){t.gameOverStatus=e.payload},saveAction:function(t,e){t.saveStatus=e.payload},pauseStatusAction:function(t,e){t.pauseStatus=e.payload},keyForExitAction:function(t,e){t.keyForExit=e.payload},boosterStatusAction:function(t,e){t.boosterStatus=e.payload},heroMoveAction:function(t,e){t.heroPosition=e.payload},heroSizeInitAction:function(t,e){t.heroSize=e.payload},itemSizeInitAction:function(t,e){t.itemSize=e.payload},bulletSizeInitAction:function(t,e){t.bulletSize=e.payload},bulletMoveAction:function(t,e){t.bulletPosition=e.payload},bulletStateAction:function(t,e){t.bulletState=e.payload},botMoveAction:function(t,e){t.botPosition=e.payload},bot2MoveAction:function(t,e){t.bot2Position=e.payload},botSizeInitAction:function(t,e){t.botSize=e.payload},bot2SizeInitAction:function(t,e){t.bot2Size=e.payload},keyPositionSetPositionAction:function(t,e){t.keyPosition=e.payload},exitSetPositionAction:function(t,e){t.exitPosition=e.payload},boosterSetPositionAction:function(t,e){t.boosterPosition=e.payload},loadStateAction:function(t,e){t.heroPosition=e.payload.heroPosition,t.botPosition=e.payload.botPosition,t.bot2Position=e.payload.bot2Position,t.gameOverStatus=e.payload.gameOverStatus,t.saveStatus=e.payload.saveStatus,t.level=e.payload.level,t.bot2Size=e.payload.bot2Size,t.botSize=e.payload.botSize,t.keyPosition=e.payload.keyPosition,t.exitPosition=e.payload.exitPosition}}}),j=g.actions,O=(j.difficultyStatusAction,j.levelUpAction),w=j.gameOverAction,p=j.pauseStatusAction,S=(j.startStatusAction,j.heroMoveAction),F=j.heroSizeInitAction,k=(j.heroNameAction,j.botMoveAction),P=j.botSizeInitAction,x=(j.bot2MoveAction,j.bot2SizeInitAction,j.loadStateAction),A=j.saveAction,z=j.keyForExitAction,B=j.keyPositionSetPositionAction,L=j.exitSetPositionAction,C=j.boosterSetPositionAction,I=j.boosterStatusAction,M=j.itemSizeInitAction,N=(j.bulletSizeInitAction,j.bulletMoveAction),T=j.bulletStateAction,E=function(t){return t.game.heroPosition},W=function(t){return t.game.gameOverStatus},X=function(t){return t.game.botPosition},Y=function(t){return t.game.exitPosition},R=g.reducer;function q(t){m(E);var e=m((function(t){return t.game.keyForExit})),o=y(),n=t.keyItem,r=t.exit,i=t.booster;return o(M(r.item.size)),o(L(r.item.position)),o(B(n.position)),o(C(i.position)),Object(u.jsxs)(u.Fragment,{children:[t.booster.render(),n.render(),r.render(e)]})}var U=function(){function t(e){Object(s.a)(this,t),this.item=e}return Object(c.a)(t,[{key:"render",value:function(t){switch(t){case!1:return Object(u.jsx)(l,{position:this.item.position,color:"transparent",size:this.item.size});case!0:return this.item.render();default:return!1}}}]),t}();function H(){var t=m((function(t){return t.game.level}));console.log(t);var e=new f,o=new f,n=new U(o),r=new f;return console.log(n),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(q,{keyItem:e,exit:n,booster:r})})}o(13),o(12);var J=o(4);function G(t){return Object(u.jsx)("div",{className:"botModelStyle",style:{top:t.botXY[1],left:t.botXY[0],width:t.form[0],height:t.form[1],borderInlineWidth:4,backgroundColor:t.color}})}var V=r.a.memo(G),$=function(){function t(e,o,n,r,i,a){Object(s.a)(this,t),this.type=e,this.position=o,this.interval=n,this.moveLength=r,this.form=i,this.strategy=a}return Object(c.a)(t,[{key:"returnComponent",value:function(t){return Object(u.jsx)(V,{botXY:Object(J.a)(t),form:this.form})}}]),t}(),D=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t,e,o){switch(t){case"easy":case"normal":case"hard":return new $("mover",[300,300],60,10,e,o);default:return!1}}},{key:"getPose",value:function(){return this.position}},{key:"toForm",value:function(){return this.form}}]),t}(),K=function(){function t(e,o,n,r,i){Object(s.a)(this,t),this.abstractBotFactory=e,this.strategyFactory=o,this.form1=n,this.form2=r,this.form3=i}return Object(c.a)(t,[{key:"execute",value:function(t){switch(t){case 1:return this.abstractBotFactory.create(this.abstractBotFactory.case1,this.abstractBotFactory.botLevel1,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case1,this.strategyFactory.strategyType1));case 2:return this.abstractBotFactory.create(this.abstractBotFactory.case1,this.abstractBotFactory.botLevel2,this.form2.getForm(),this.strategyFactory.create(this.strategyFactory.case2,this.strategyFactory.strategyType2));case 3:return this.abstractBotFactory.create(this.abstractBotFactory.case1,this.abstractBotFactory.botLevel3,this.form3.getForm(),this.strategyFactory.create(this.strategyFactory.case3,this.strategyFactory.strategyType3));case 4:return this.abstractBotFactory.create(this.abstractBotFactory.case2,this.abstractBotFactory.botLevel1,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case1,this.strategyFactory.strategyType1));case 5:return this.abstractBotFactory.create(this.abstractBotFactory.case2,this.abstractBotFactory.botLevel2,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case2,this.strategyFactory.strategyType2));case 6:return this.abstractBotFactory.create(this.abstractBotFactory.case2,this.abstractBotFactory.botLevel3,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case3,this.strategyFactory.strategyType3));case 7:return this.abstractBotFactory.create(this.abstractBotFactory.case3,this.abstractBotFactory.botLevel1,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case1,this.strategyFactory.strategyType1));case 8:return this.abstractBotFactory.create(this.abstractBotFactory.case3,this.abstractBotFactory.botLevel2,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case2,this.strategyFactory.strategyType2));case 9:return this.abstractBotFactory.create(this.abstractBotFactory.case3,this.abstractBotFactory.botLevel3,this.form1.getForm(),this.strategyFactory.create(this.strategyFactory.case3,this.strategyFactory.strategyType3));default:return!1}}}]),t}(),Q=function(){function t(e,o){Object(s.a)(this,t),this.height=e[0],this.width=e[1],this.color=o}return Object(c.a)(t,[{key:"getForm",value:function(){return[this.width,this.height]}}]),t}(),Z=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t){switch(t){case"smallSquare":return new Q([16,16]);case"bigSquare":return new Q([38,38]);case"wideLine":return new Q([16,78]);case"highLine":return new Q([78,16]);default:return!1}}}]),t}(),_=function t(){Object(s.a)(this,t),this.move=function(t,e,o,n){var r=Object(J.a)(n);t<=2.5?(r[0]-=o,e(r[0],r[1])):t>2.5&&t<=5?(r[1]-=o,e(r[0],r[1])):t>5&&t<=7.5?(r[0]+=o,e(r[0],r[1])):(r[1]+=o,e(r[0],r[1]))}},tt=function t(){Object(s.a)(this,t),this.move=function(t,e,o,n,r){var i=Object(J.a)(n);r[0]<i[0]?(i[0]-=o,e(i[0],i[1])):r[0]>i[0]?(i[0]+=o,e(i[0],i[1])):r[1]>i[1]?(i[1]+=o,e(i[0],i[1])):r[1]<i[1]&&(i[1]-=o,e(i[0],i[1]))}},et=function t(){Object(s.a)(this,t),this.move=function(t,e,o,n,r){var i=Object(J.a)(n);r[0]<i[0]&&r[1]<i[1]?(i[0]-=o,i[1]-=o,e(i[0],i[1])):r[0]>i[0]&&r[1]<i[1]?(i[0]+=o,i[1]-=o,e(i[0],i[1])):r[0]>i[0]&&r[1]>i[1]?(i[0]+=o,i[1]+=o,e(i[0],i[1])):r[0]<i[0]&&r[1]>i[1]?(i[0]-=o,i[1]+=o,e(i[0],i[1])):r[0]===i[0]&&r[1]>i[1]?(i[1]+=o,e(i[0],i[1])):r[0]===i[0]&&r[1]<i[1]?(i[1]-=o,e(i[0],i[1])):r[0]>i[0]&&r[1]===i[1]?(i[0]+=o,e(i[0],i[1])):r[0]<i[0]&&r[1]===i[1]&&(i[0]-=o,e(i[0],i[1]))}},ot=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t,e,o){switch(t){case"easy":case"normal":case"hard":return new $("jumper",[300,300],500,50,e,o);default:return!1}}},{key:"getPose",value:function(){return this.position}},{key:"toForm",value:function(){return this.form}}]),t}(),nt=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t,e,o){switch(t){case"simple":return[new $("shooter",[800,300],0,0,e,o),new $("bullet",[800,300],50,2,e,o)];case"normal":return[new $("shooter",[800,300],0,0,e,o),new $("bullet",[800,300],40,3,e,o)];case"hard":return[new $("shooter",[800,300],0,0,e,o),new $("bullet",[800,300],30,4,e,o)];default:return!1}}},{key:"getPose",value:function(){return this.position}},{key:"toForm",value:function(){return this.form}}]),t}(),rt=function(){function t(){Object(s.a)(this,t),this.case1="mover",this.case2="jumper",this.case3="shooter",this.case4="bullet",this.botLevel1="easy",this.botLevel2="normal",this.botLevel3="hard",this.moversFactory=new D,this.jumpersFactory=new ot,this.shootersFactory=new nt}return Object(c.a)(t,[{key:"create",value:function(t,e,o,n){switch(t){case this.case1:return this.moversFactory.create(e,o,n.create(e));case this.case2:return this.jumpersFactory.create(e,o,n.create(e));case this.case3:return this.shootersFactory.create(e,o,n.create(e));default:return!1}}}]),t}(),it=function t(){Object(s.a)(this,t),this.move=function(t,e,o,n){var r=Object(J.a)(n);r[0]-=o,e(r[0],r[1])}},at=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t,e){switch(t){case"easy":return new it;case"normal":return new tt;case"hard":return new et;default:return!1}}}]),t}(),st=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t,e){switch(t){case"easy":return new _;case"normal":return new tt;case"hard":return new et;default:return!1}}}]),t}(),ct=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t){switch(t){case"easy":return new _;case"normal":return new tt;case"hard":return new et;default:return!1}}}]),t}(),ut=function t(){Object(s.a)(this,t),this.move=function(t,e,o,n){e(n[0],n[1])}},ht=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"create",value:function(t,e){switch(t){case"easy":return new ut;case"normal":return new tt;case"hard":return new et;default:return!1}}}]),t}(),lt=function(){function t(){Object(s.a)(this,t),this.case1="mover",this.case2="jumper",this.case3="shooter",this.case4="bullet",this.strategyType1="easy",this.strategyType1="normal",this.strategyType1="hard"}return Object(c.a)(t,[{key:"create",value:function(t,e){switch(t){case this.case1:return new ct(e);case this.case2:return new st(e);case this.case3:return new ht(e);case this.case4:return new at(e);default:return!1}}}]),t}(),ft=function(){function t(){Object(s.a)(this,t),this.Command=K,this.FormsFactory=Z,this.BotFactory=rt,this.formsFactory=new Z,this.form1=this.formsFactory.create("smallSquare"),this.form2=this.formsFactory.create("bigSquare"),this.form3=this.formsFactory.create("highLine"),this.botStategyFactory=new lt}return Object(c.a)(t,[{key:"createCommander",value:function(){return new this.Command(new this.BotFactory,new lt,this.formsFactory.create("smallSquare"),this.formsFactory.create("bigSquare"),this.formsFactory.create("highLine"))}}]),t}(),bt=function t(e){Object(s.a)(this,t),this.bot=e,this.bot.interval-=10},yt=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"returnResultOfChecking",value:function(t,e,o,n){return t[0]+e[0]>=o[0]&&t[0]<=o[0]+n[0]&&(t[1]+e[1]>=o[1]&&t[1]<=o[1]+n[1])}}]),t}();function mt(t){var e=m((function(t){return t.game.bulletState})),o=m(W),r=m((function(t){return t.game.pauseStatus})),i=m((function(t){return t.game.boosterStatus})),a=m((function(t){return t.game.level})),s=new yt,c=m((function(t){return t.game.botSize})),h=m((function(t){return t.game.heroSize})),l=m(X),f=m(E),b=m((function(t){return t.game.bulletPosition})),v=t.bot,d=y();if("bullet"===v.type&!e&&(l=b,T(!0)),i&&a>=0){new bt(v);d(I(!1))}Object(n.useEffect)((function(){d(P(v.form))}),[]),Object(n.useEffect)((function(){if(!o&&!r){var t=setInterval((function(){v.strategy.move(10*Math.random(),g,v.moveLength,l,f)}),v.interval);return function(){return clearInterval(t)}}}),[l]),Object(n.useEffect)((function(){if(!o&&!r&&"bullet"===v.type){var t=setInterval((function(){v.strategy.move(10*Math.random(),g,v.moveLength,l,f)}),v.interval);return function(){return clearInterval(t)}}}),[l]),Object(n.useEffect)((function(){setTimeout((function(){d(T(!1))}),2e3)}),[e]);var g=function(t,e){var o=t,n=e,r=window.screen.width,i=window.screen.height;t<=0&&(o=20),e<=40&&(n=40),t>=r-60&&(o=r-60),e>=i-140&&(n=i-160),"bullet"!==v.type?d(k([o,n])):d(N([o,n]))};return s.returnResultOfChecking(f,h,l,c)&&d(w(!0)),e?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(V,{botXY:Object(J.a)(l),form:v.form}),Object(u.jsx)(V,{botXY:Object(J.a)(l),form:v.form})]}):Object(u.jsx)(V,{botXY:Object(J.a)(l),form:v.form})}function vt(){var t=m((function(t){return t.game.level})),e=new Z,o=new ft(e).createCommander().execute(t);return Object(u.jsx)(mt,{bot:o})}var dt=function(){function t(e){Object(s.a)(this,t),this.state=e}return Object(c.a)(t,[{key:"save",value:function(e){localStorage.clear();var o=0;for(o in e)localStorage.setItem(o,e[o]);return new t(e)}},{key:"load",value:function(){for(var t={},e=0;e<localStorage.length;e++){var o=localStorage.key(e),n=localStorage.getItem(o),r=n;r="gameOverStatus"!==o&&"pauseStatus"!==o&&"saveStatus"!==o&&"level"!==o?n.split(",").map(Number):"level"===o?+r[0]:"true"===n,t[o]=r}return t}}]),t}();function gt(){var t=new dt,e=y(),o=m((function(t){return t.game})),n=m(X);o.saveStatus&&(e(A(!1)),t.save(o));return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("span",{style:{color:"whitesmoke"},children:["Level ",o.level]}),Object(u.jsx)("button",{onClick:function(){e(A(!0))},children:"Save"}),Object(u.jsx)("button",{onClick:function(){return function(){var o=t.load();e(x(o))}()},children:"Load"}),Object(u.jsx)("button",{onClick:function(){return e(p(!0))},children:"Pause"}),Object(u.jsx)("button",{onClick:function(){return function(){var t=Object(J.a)(n);t[0]+=1,e(p(!1)),e(k(t))}()},children:"Play"})]})}function jt(){return Object(u.jsx)("div",{className:"containerStyle"})}var Ot=r.a.memo(jt),wt=function(){function t(e){var o=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Hero",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:20,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[40,40];Object(s.a)(this,t),this.move=function(t,e){switch(t){case 37:o.xPosition-=o.moveLength,e(o.xPosition,o.yPosition);break;case 38:o.yPosition-=o.moveLength,e(o.xPosition,o.yPosition);break;case 39:o.xPosition+=o.moveLength,e(o.xPosition,o.yPosition);break;case 40:o.yPosition+=o.moveLength,e(o.xPosition,o.yPosition)}},this.personName=n,this.xPosition=r,this.yPosition=i,this.size=u,this.moveLength=c,this.level=a,this.color="white",this.borderWidth=4}return Object(c.a)(t,[{key:"getPose",value:function(t,e){this.xPosition=t,this.yPosition=e}}]),t}();function pt(t){return Object(u.jsx)("div",{className:"heroModelStyle",style:{top:t.heroXY[1],left:t.heroXY[0],width:t.heroSize[0],height:t.heroSize[1],borderInlineWidth:4}})}var St=r.a.memo(pt);function Ft(){var t=y();return Object(u.jsxs)("div",{className:"modalContainer",children:[Object(u.jsx)("div",{className:"modalContent",children:"Game over!"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"modalButton",onClick:function(){return t(w(!1)),void t(x(d))},children:"Try again!"})})]})}function kt(t){var e=m(E),o=(m((function(t){return t.game.keyPosition})),m(Y),m(W)),r=(m((function(t){return t.game.boosterPosition})),y()),i=t.newHero;r(F(i.size));var a=Object(n.useCallback)((function(t){var e=t.keyCode;e>=37&&e<=40&&i.move(e,s)}),[]);window.addEventListener("keydown",a);var s=function(t,e){var o=t,n=e,a=window.screen.width,s=window.screen.height;t<=0&&(o=20),e<=40&&(n=40),t>=a-60&&(o=a-60),e>=s-140&&(n=s-160),r(S([o,n])),i.getPose(o,n)};return o?Object(u.jsx)(Ft,{}):Object(u.jsx)("div",{children:Object(u.jsx)(St,{heroXY:e,heroSize:i.size})})}function Pt(t){var e=new wt;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(kt,{newHero:e})})}function xt(){var t=y(),e=m((function(t){return t.game.heroSize})),o=m(E),n=m((function(t){return t.game.exitPosition})),r=m((function(t){return t.game.keyPosition})),i=m((function(t){return t.game.boosterPosition})),a=m((function(t){return t.game.itemSize})),s=new yt;return s.returnResultOfChecking(o,e,r,a)&&t(z(!0)),s.returnResultOfChecking(o,e,n,a)&&(console.log("LEVEL-UP"),console.log(o,e,n,a),t(O()),t(z(!1)),t(I(!1)),t(L([900,900]))),s.returnResultOfChecking(o,e,i,a)&&t(I(!0)),!1}var At=function(){return m((function(t){return t.game.startStatus})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(gt,{}),Object(u.jsx)(Ot,{}),Object(u.jsx)(Pt,{}),Object(u.jsx)(H,{}),Object(u.jsx)(vt,{}),Object(u.jsx)(xt,{})]})},zt=Object(v.a)({reducer:{game:R}}),Bt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Lt(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var o=t.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b.a,{store:zt,children:Object(u.jsx)(At,{})})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/oop-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/oop-game","/service-worker.js");Bt?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):Lt(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Lt(e,t)}))}}()},5:function(t,e,o){}},[[27,1,2]]]);
//# sourceMappingURL=main.f1905679.chunk.js.map