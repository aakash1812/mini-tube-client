(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(238)},238:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(47),i=n.n(c),o=n(8),s=n(6),u=n(103),l=n(244),m=n(243),p=n(11),d=n(12),h=n(14),f=n(13),E=n(15),b=n(17),v=n.n(b),S=n(20),g=n(30),y=n(104),O=n.n(y).a.create({baseURL:"http://192.168.6.220:3001"}),j=n(105),I=n.n(j)()(),w=function(e){return function(){var t=Object(g.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},N=n(240),C=n(239),A=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).renderError=function(e){var t=e.touched,n=e.error;if(t&&n)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},n))},n.renderInput=function(e){var t="field ".concat(e.meta.error&&e.meta.touched?"error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.label),r.a.createElement("input",{onChange:e.input.onChange,value:e.input.value}),n.renderError(e.meta))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(N.a,{name:"Title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(N.a,{name:"Description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(r.a.Component),k=Object(C.a)({form:"streamForm",validate:function(e){var t={};return e.Title||(t.Title="Form must have a Title"),e.Description||(t.Description="Form must have a Description"),t}})(A),T=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStreams(e)},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a Stream"),r.a.createElement(k,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),D=Object(o.b)(null,{createStreams:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(n,a){var r,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,O.post("/streams",Object(S.a)({},e,{userId:r}));case 3:c=t.sent,n({type:"CREATE_STREAM",payload:c.data}),I.push("/");case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}})(T),_=function(e){return i.a.createPortal(r.a.createElement("div",{onClick:function(){return I.push("/")},className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},x=n(241),M=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).renderContent=function(){return n.props.stream?"Are you sure you want to delete this stream : ".concat(n.props.stream.title):"Are you sure you want to delete this stream :"},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(e.props.match.params.id)},className:"ui primary button"},"Delete"),r.a.createElement(x.a,{to:"/",className:"ui button"},"Cancel"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions()}))}}]),t}(r.a.Component),R=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:w,deleteStream:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),I.push("/");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(M),F=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a Stream"),r.a.createElement(k,{initialValues:{Title:this.props.stream.Title,Description:this.props.stream.Description},onSubmit:this.onSubmit})):r.a.createElement("div",null)}}]),t}(r.a.Component),U=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:w,editStream:function(e,t){return function(){var n=Object(g.a)(v.a.mark(function n(a){var r;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),I.push("/");case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(F),L=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(x.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(x.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},t.Title,r.a.createElement("div",{className:"description"},t.Description)))})}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(x.a,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Streams"),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(r.a.Component),G=Object(o.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(g.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(L),H=function(){return r.a.createElement("div",null,"StreamShow")},q=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"547149568769-8hiov01cujr38e22o83ar8vqno28nf6s.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),console.log("At Auth"),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return!0===this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui blue google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui blue google button"},r.a.createElement("i",{className:"google icon"}),"Sign in with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),P=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(q),B=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(x.a,{to:"/",className:"item"},"Streamy"),r.a.createElement("div",{className:"right menu"},r.a.createElement(x.a,{to:"/",className:"item"},"All Streams"),r.a.createElement(P,null)))},J=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,{history:I},r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(m.a,{path:"/",exact:!0,component:G}),r.a.createElement(m.a,{path:"/streams/new",exact:!0,component:D}),r.a.createElement(m.a,{path:"/streams/edit/:id",exact:!0,component:U}),r.a.createElement(m.a,{path:"/streams/delete/:id",exact:!0,component:R}),r.a.createElement(m.a,{path:"/streams/show",exact:!0,component:H}))))},V=n(242),X={isSignedIn:null,userId:null},K=n(29),z=n(73),Q=n.n(z),W=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(S.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(S.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:V.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(S.a)({},e,Q.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(S.a)({},e,Object(K.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return Q.a.omit(e,t.payload);default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Z=Object(s.e)(W,Y(Object(s.a)(u.a)));i.a.render(r.a.createElement(o.a,{store:Z},r.a.createElement(J,null)),document.querySelector("#root"))}},[[108,2,1]]]);
//# sourceMappingURL=main.68b1ce45.chunk.js.map