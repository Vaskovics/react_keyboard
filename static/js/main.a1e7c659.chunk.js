(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),d=n(6),i=n(1),u=n(0),p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:"Nothing was pressed yet"},e.keyHandler=function(t){e.setState({pressedKey:"The last pressed key is [".concat(t.key,"]")})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.documentElement.addEventListener("keydown",this.keyHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyHandler)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("p",{className:"App__message",children:this.state.pressedKey})})}}]),n}(i.Component);n(13);a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a1e7c659.chunk.js.map