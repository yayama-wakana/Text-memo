(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),u=(i(n(1)),n(7)),a=i(n(22));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputText:"",time:new Date,items:[]},n.addItem=n.addItem.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"addItem",value:function(){var e=new Date,t=this.state.items;t.push({text:this.state.inputText+this.state.time}),this.setState({inputText:"",time:e,items:t})}},{key:"render",value:function(){var e=this;return o.default.createElement(u.Page,null,o.default.createElement(u.Input,{value:this.state.inputText,onChange:function(t){e.setState({inputText:t.target.value,items:e.state.items})},modifier:"material"}),o.default.createElement(u.Button,{onClick:this.addItem},"追加"),this.state.items.map((function(e){return o.default.createElement(a.default,{text:e.text})})))}}]),t}(o.default.Component);t.default=l},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),u=(a(n(1)),n(7));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return o.default.createElement(u.Card,null,o.default.createElement("p",null,this.props.text))}}]),t}(o.default.Component);t.default=i},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n(10);var r=n(12),o=l(n(0)),u=l(n(1)),a=l(n(4)),i=l(n(18));function l(e){return e&&e.__esModule?e:{default:e}}n(23),n(24),a.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var f=document.getElementById("app");u.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(i.default,null)),f)}},[[8,1,2]]]);