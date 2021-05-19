(this.webpackJsonpquiz6=this.webpackJsonpquiz6||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);a(91);var n=a(0),c=a.n(n),o=a(11),s=a.n(o),i=a(23),r=a(24),l=a(30),d=a(28),u=a(2),j=(c.a.Component,a(56)),h=(a.p,a(70),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={newText:e.todo.text,editing:!1},n}return Object(r.a)(a,[{key:"deleteTodo",value:function(){this.props.remove(this.props.todo.id)}},{key:"checkTodoToggle",value:function(){this.props.checkToggle(this.props.todo.id)}},{key:"showEditForm",value:function(){var e=this.state.editing;this.setState({newText:this.props.todo.text,editing:!e})}},{key:"getNewText",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"saveEditedValue",value:function(){var e=this.state.newText;this.props.saveEditedValue(this.props.todo.id,e),this.setState({newText:this.props.todo.text,editing:!1})}},{key:"render",value:function(){var e=this,t=this.state.editing,a=this.props.todo;return Object(u.jsxs)("li",{className:"list-group-item list-row "+(a.completed?"done":""),children:[Object(u.jsx)("div",{className:"btn-circle checkbox",onClick:function(){return e.checkTodoToggle()},children:"\u2713"}),Object(u.jsxs)("div",{className:"list-text__container",onDoubleClick:function(){return e.showEditForm()},children:[!t&&Object(u.jsx)("span",{className:"list-text",children:a.text}),t&&Object(u.jsxs)("div",{className:"input-group",children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:a.text,value:this.state.newText,onChange:function(t){return e.getNewText(t)}}),Object(u.jsxs)("div",{className:"input-group-append",children:[Object(u.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.showEditForm()},children:"\u53d6\u6d88"}),Object(u.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.saveEditedValue()},children:"\u5b8c\u6210\u7de8\u8f2f"})]})]})]}),Object(u.jsx)("div",{className:"btn-circle delete",onClick:function(){return e.deleteTodo()},children:"\u2715"})]})}}]),a}(c.a.Component)),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)("h1",{style:{color:"#b0efeb"},children:"CGU Todo list"})}}]),a}(c.a.Component),p=(c.a.Component,function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))}),m=a(55),x=a(12),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={todos:[{id:1,text:"\u9019\u6b21\u4f5c\u696d\u600e\u9ebc\u90a3\u9ebc\u96e3",color:"red",completed:!0},{id:2,text:"\u80a1\u7968\u5d29\u76e4\u6211\u8981\u7761\u516c\u5712\u5566",completed:!1},{id:3,text:"\u5feb\u9003\u963f",completed:!1}],newId:4,newText:""},n}return Object(r.a)(a,[{key:"getNewValue",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"addTodo",value:function(e){var t=this.state,a=t.todos,n=t.newText,c=t.newId;n?this.setState({todos:[].concat(Object(j.a)(a),[{id:c,text:n,completed:!1}]),newId:c+1,newText:""}):e.preventDefault()}},{key:"deleteTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"checkTodoToggle",value:function(e){var t=this.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));this.setState({todos:t})}},{key:"saveEditedValue",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e&&(a.text=t),a}));this.setState({todos:a})}},{key:"render",value:function(){var e=this,t=this.state.todos;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("header",{className:"header__container",children:Object(u.jsx)(b,{})}),Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",id:"input-add",placeholder:"add a new todo",value:this.state.newText,onChange:function(t){return e.getNewValue(t)}}),Object(u.jsx)("span",{className:"input-group-append",children:Object(u.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(t){return e.addTodo(t)},children:"Add"})})]}),Object(u.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(t){return Object(u.jsx)(h,{todo:t,remove:function(t){return e.deleteTodo(t)},checkToggle:function(t){return e.checkTodoToggle(t)},saveEditedValue:function(t,a){return e.saveEditedValue(t,a)}},t.id)}))})]})}}]),a}(c.a.Component),v=a(167),f=a(155),g=a(162),w=a(164),k=a(163),y=a(166),T=a(105),F=a(165),N=a(160),C=a(74),S=a.n(C),D=a(76),E=a(161),I=a(140),z=a(141),A=a(142),V=a(143),q=a(144),R=a(145),W=a(146),P=a(147),_=a(148),Q=a(149);var Y=a(150),B=a(153),H=a(154),L=a(72),G=a.n(L);var J=a(168),M=a(73),U=a.n(M),X=function(){console.info("You clicked the delete icon.")},K=function(){console.info("You clicked the Chip.")};var Z=a(156),$=a(158),ee=a(157),te=a(159);function ae(){return Object(u.jsxs)(D.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ","Your Website",(new Date).getFullYear(),"."]})}var ne=Object(E.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},last:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));s.a.render(Object(u.jsx)(m.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(x.a,{exact:!0,path:"/",component:function(){var e=ne();return Object(u.jsxs)(N.a,{container:!0,component:"main",className:e.root,children:[Object(u.jsx)(g.a,{}),Object(u.jsx)(N.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(u.jsxs)(N.a,{item:!0,xs:12,sm:8,md:5,component:T.a,elevation:6,square:!0,children:[Object(u.jsx)(Y.a,{position:"static",children:Object(u.jsxs)(B.a,{children:[Object(u.jsx)(H.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(u.jsx)(G.a,{})}),Object(u.jsx)(D.a,{variant:"h6",children:"\u9084\u6c92\u60f3\u5230\u529f\u80fdQQ"}),Object(u.jsx)(f.a,{color:"inherit",children:"\u653e\u597d\u73a9\u7684"})]})}),Object(u.jsxs)("div",{className:e.paper,children:[Object(u.jsx)(v.a,{className:e.avatar,children:Object(u.jsx)(S.a,{})}),Object(u.jsx)(D.a,{component:"h1",variant:"h5",children:"\u767b\u5165"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(Z.a,{children:Object(u.jsxs)(ee.a,{children:[Object(u.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"\u9577\u5e9a\u5927\u5b78"}),Object(u.jsx)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:"\u9577\u5e9a\u5927\u5b78\u662f\u4e00\u9593\u512a\u8cea\u5b78\u6821"})]})}),Object(u.jsx)($.a,{children:Object(u.jsx)(te.a,{href:"https://www.cgu.edu.tw/",children:"Learn more"})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(I.a,{quote:"\u9577\u5e9a\u5927\u5b78\u662f\u4e00\u9593\u512a\u8cea\u5b78\u6821",hashtag:"\u9577\u5e9a\u5927\u5b78",url:"https://www.facebook.com/sharer.php?u=https%3A%2F%2Freactjsexample.com%2Fsocial-media-share-buttons-and-share-counts-for-react%2F",children:Object(u.jsx)(z.a,{size:32,round:!0})}),Object(u.jsx)(A.a,{url:"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Freactjsexample.com%2Fsocial-media-share-buttons-and-share-counts-for-react%2F%26title%3DSocial%2520media%2520share%2520buttons%2520and%2520share%2520counts%2520for%2520React",summary:"\u6211\u9577\u5927\u5b78\u5e97\u5728\u6230100\u5e74",title:"\u79c1\u7acb\u53f0\u5927",children:Object(u.jsx)(V.a,{size:32,round:!0})}),Object(u.jsx)(q.a,{url:"https://www.pinterest.com/pin/create/button/?url=https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/&media=&description=Social%20media%20share%20buttons%20and%20share%20counts%20for%20React",description:"\u9577\u5e9a\u5927\u5b78\u662f\u4e00\u9593\u512a\u8cea\u5b78\u6821",media:"https://images.app.goo.gl/Ci6ejnXHFE31kvH4A",children:Object(u.jsx)(R.a,{size:32,round:!0})}),Object(u.jsx)(W.a,{url:"https://twitter.com/intent/tweet?url=https://reactjsexample.com/social-media-share-buttons-and-share-counts-for-react/&text=Social%20media%20share%20buttons%20and%20share%20counts%20for%20React",title:"\u9577\u5e9a\u5927\u5b78\u5e97",children:Object(u.jsx)(P.a,{size:32,round:!0})}),Object(u.jsx)(_.a,{url:"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Freactjsexample.com%252Fsocial-media-share-buttons-and-share-counts-for-react%252F%26title%3DSocial%2520media%2520share%2520buttons%2520and%2520share%2520counts%2520for%2520React",title:"\u9019\u7db2\u9801\u88fd\u4f5c\u4eba\u760b\u4e86\u5427",children:Object(u.jsx)(Q.a,{size:32,round:!0})})]}),Object(u.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(u.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(u.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(u.jsx)(k.a,{control:Object(u.jsx)(y.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(u.jsx)("switch",{children:Object(u.jsxs)(m.b,{to:"/about",children:[" ",Object(u.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,children:"Sign In"})]})}),Object(u.jsxs)(N.a,{container:!0,children:[Object(u.jsx)(N.a,{item:!0,xs:!0,children:Object(u.jsx)(te.a,{href:"https://support.google.com/mail/answer/41078?co=GENIE.Platform%3DDesktop&hl=zh-Hant",variant:"body2",children:"\u5fd8\u8a18\u5bc6\u78bc\u4e86\u55ce?\u592a\u905c\u4e86\u5427!"})}),Object(u.jsx)(N.a,{item:!0,children:Object(u.jsx)(te.a,{href:"#",variant:"body2",children:"\u9084\u6c92\u6709\u5e33\u865f?\u8a72\u8a3b\u518a\u4e86\u5427!"})})]}),Object(u.jsx)(F.a,{mt:5,children:Object(u.jsx)(ae,{})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(J.a,{avatar:Object(u.jsx)(v.a,{children:"#"}),label:"2330\u7684\u6975\u9650?",onClick:K,variant:"outlined",component:"a",href:"https://udn.com/news/story/6839/5176175"}),Object(u.jsx)(J.a,{avatar:Object(u.jsx)(v.a,{alt:"Natacha",src:"/static/images/avatar/1.jpg"}),label:"M1 ipad pro\u8a72\u8cb7\u4e86\u5427",onDelete:X,variant:"outlined",component:"a",href:"https://www.apple.com/tw/ipad-pro/"}),Object(u.jsx)(J.a,{avatar:Object(u.jsx)(v.a,{children:"#"}),label:"\u50b3\u7522\u696d\u5c07\u8d77\u98db?",onClick:K,variant:"outlined",component:"a",href:"https://news.cnyes.com/news/id/4634766"}),Object(u.jsx)(J.a,{avatar:Object(u.jsx)(v.a,{children:"QQ"}),label:"\u822a\u6d77\u738b\u92fc\u9435\u4eba\u6c92\u8ddf\u5230",onClick:K,variant:"outlined"}),Object(u.jsx)(J.a,{label:"\u9019\u5f35\u56de\u58d3\u6708\u5747\u7dda\u8a18\u5f97\u8ddf",component:"a",href:"https://tw.stock.yahoo.com/q/bc?s=1905",clickable:!0,variant:"outlined"}),Object(u.jsx)(J.a,{avatar:Object(u.jsx)(v.a,{children:"W"}),label:"Sam\u5e36\u4f60\u98db",clickable:!0,color:"primary",onDelete:X,deleteIcon:Object(u.jsx)(U.a,{}),variant:"outlined"})]})]})]})]})]})}}),Object(u.jsx)(x.a,{path:"/about",children:Object(u.jsx)(O,{})})]})}),document.getElementById("root")),p()},70:function(e,t,a){},91:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.5886026e.chunk.js.map