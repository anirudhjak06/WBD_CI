(this.webpackJsonplamaadmin=this.webpackJsonplamaadmin||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(42),a=n.n(c),o=(n(75),n(118)),s=n(26),i=n(1);function d(){return Object(i.jsx)("div",{className:"sidebar",children:Object(i.jsx)("div",{className:"sidebarWrapper",children:Object(i.jsxs)("div",{className:"sidebarMenu",children:[Object(i.jsx)("h3",{className:"sidebarTitle",children:"Dashboard"}),Object(i.jsx)("ul",{className:"sidebarList",children:Object(i.jsx)(s.b,{to:"/newproduct",className:"link",children:Object(i.jsxs)("li",{className:"sidebarListItem",children:[Object(i.jsx)(o.a,{className:"sidebarIcon"}),"Products"]})})})]})})})}var l,u=n(4),b=n.n(u),j=n(9),p=n(16),h=(n(82),n(33)),g=Object(h.b)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:function(e){e.isFetching=!0},loginSuccess:function(e,t){e.isFetching=!1,e.currentUser=t.payload},loginFailure:function(e){e.isFetching=!1,e.error=!0},logout:function(e){e.currentUser=null}}}),O=g.actions,x=O.loginStart,f=O.loginSuccess,m=O.loginFailure,v=O.logout,P=g.reducer,S=n(49),w=n.n(S),y="https://greengrocery30.herokuapp.com/api/",F=null===(l=JSON.parse(localStorage.getItem("persist:root")))||void 0===l?void 0:l.user,N=F&&JSON.parse(F).currentUser,k=null===N||void 0===N?void 0:N.accessToken;console.log(k);var I,C=w.a.create({baseURL:y}),U=w.a.create({baseURL:y,headers:{token:"Bearer ".concat(k)}}),z=Object(h.b)({name:"product",initialState:{products:[],isFetching:!1,error:!1},reducers:{getProductStart:function(e){e.isFetching=!0,e.error=!1},getProductSuccess:function(e,t){e.isFetching=!1,e.products=t.payload},getProductFailure:function(e){e.isFetching=!1,e.error=!0},deleteProductStart:function(e){e.isFetching=!0,e.error=!1},deleteProductSuccess:function(e,t){e.isFetching=!1,e.products.splice(e.products.findIndex((function(e){return e._id===t.payload})),1)},deleteProductFailure:function(e){e.isFetching=!1,e.error=!0},updateProductStart:function(e){e.isFetching=!0,e.error=!1},updateProductSuccess:function(e,t){e.isFetching=!1,e.products[e.products.findIndex((function(e){return e._id===t.payload.id}))]=t.payload.product},updateProductFailure:function(e){e.isFetching=!1,e.error=!0},addProductStart:function(e){e.isFetching=!0,e.error=!1},addProductSuccess:function(e,t){e.isFetching=!1,e.products.push(t.payload)},addProductFailure:function(e){e.isFetching=!1,e.error=!0}}}),D=z.actions,L=(D.getProductStart,D.getProductSuccess,D.getProductFailure,D.deleteProductStart,D.deleteProductSuccess,D.deleteProductFailure,D.updateProductStart,D.updateProductSuccess,D.updateProductFailure,D.addProductStart),T=D.addProductSuccess,B=D.addProductFailure,J=z.reducer,R=function(){var e=Object(j.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x()),e.prev=1,e.next=4,C.post("/auth/login",n);case 4:r=e.sent,t(f(r.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(m());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,U.post("/products",t);case 4:r=e.sent,n(T(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("in product"),n(B());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e){e(v())},E=n(20),G=n(17),M=G.a.div(I||(I=Object(p.a)(["\n  text-decoration: underline;\n  font-size: 17px;\n  cursor: pointer;\n  margin-left: 25px;\n"])));function _(){var e=Object(E.b)(),t=function(){var t=Object(j.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("hello"),A(e);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"topbar",children:Object(i.jsxs)("div",{className:"topbarWrapper",children:[Object(i.jsx)("div",{className:"topLeft",children:Object(i.jsx)("span",{className:"logo",children:"Volunteer"})}),Object(i.jsx)("div",{className:"topRight",children:Object(i.jsx)(s.b,{to:"/",onClick:t,style:{textDecoration:"none",color:"black"},children:Object(i.jsx)(M,{style:{textDecoration:"none",color:"black"},children:Object(i.jsx)("b",{children:"Logout"})})})})]})})}n(101);var W,X,q,K,Y,H,Q,Z,$,ee=n(7),te=n(3),ne=n(38),re=n(10),ce=(n(102),n(39)),ae=n(65),oe=Object(ae.a)({apiKey:"AIzaSyB7S0XtlD0TjUigf896hpMFO6zyOqGoXUA",authDomain:"shop-de1b6.firebaseapp.com",projectId:"shop-de1b6",storageBucket:"shop-de1b6.appspot.com",messagingSenderId:"334968057132",appId:"1:334968057132:web:818e8c68cc7c2bf9461089"});function se(){var e=Object(r.useState)({}),t=Object(re.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),o=Object(re.a)(a,2),s=o[0],d=o[1],l=Object(r.useState)([]),u=Object(re.a)(l,2),b=u[0],j=u[1],p=Object(E.b)(),h=function(e){c((function(t){return Object(ne.a)(Object(ne.a)({},t),{},Object(te.a)({},e.target.name,e.target.value))}))};return Object(i.jsxs)("div",{className:"newProduct",children:[Object(i.jsx)("h1",{className:"addProductTitle",children:"New Product"}),Object(i.jsxs)("form",{className:"addProductForm",children:[Object(i.jsxs)("div",{className:"addProductItem",children:[Object(i.jsx)("label",{children:"Image"}),Object(i.jsx)("input",{type:"file",id:"file",onChange:function(e){return d(e.target.files[0])}})]}),Object(i.jsxs)("div",{className:"addProductItem",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{name:"title",type:"text",placeholder:"Mango...",onChange:h})]}),Object(i.jsxs)("div",{className:"addProductItem",children:[Object(i.jsx)("label",{children:"Description"}),Object(i.jsx)("input",{name:"desc",type:"text",placeholder:"Description...",onChange:h})]}),Object(i.jsxs)("div",{className:"addProductItem",children:[Object(i.jsx)("label",{children:"Price"}),Object(i.jsx)("input",{name:"price",type:"number",placeholder:"100",onChange:h})]}),Object(i.jsxs)("div",{className:"addProductItem",children:[Object(i.jsx)("label",{children:"Categories"}),Object(i.jsx)("input",{type:"text",placeholder:"Fruit, Vegetable",onChange:function(e){j(e.target.value.split(","))}})]}),Object(i.jsxs)("div",{className:"addProductItem",children:[Object(i.jsx)("label",{children:"Stock"}),Object(i.jsxs)("select",{name:"inStock",onChange:h,children:[Object(i.jsx)("option",{value:"true",children:"Yes"}),Object(i.jsx)("option",{value:"false",children:"No"})]})]}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault();var t=(new Date).getTime()+s.name,r=Object(ce.b)(oe),c=Object(ce.c)(r,t),a=Object(ce.d)(c,s);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){Object(ce.a)(a.snapshot.ref).then((function(e){var t=Object(ne.a)(Object(ne.a)({},n),{},{img:e,categories:b});V(t,p)}))}),alert("Product has been created successfully!"))},className:"addProductButton",children:"Create"})]})]})}var ie=G.a.div(W||(W=Object(p.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(to right,\n      rgba(121, 17, 9, 100),\n      rgba(0, 93, 255, 100)\n    );\n    // background-image: linear-gradient(to right, red , blue);\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),de=G.a.div(X||(X=Object(p.a)(["\n  border-radius: 2.5%;\n  width: 36%;\n  height: 36%;\n  padding: 20px;\n  background-color: white;\n  align-items: center;\n  \n"]))),le=G.a.h1(q||(q=Object(p.a)(["\n  font-size: 34px;\n  font-weight: 600;\n  align-items: center;\n"]))),ue=G.a.form(K||(K=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),be=G.a.input(Y||(Y=Object(p.a)(["\n  flex: 1;\n  min-width: 60%;\n  margin: 10px 0;\n  font-size: 20px;\n  padding: 10px;\n  border-style: solid;\n    border-color: black;\n  border-width: 2px;\n    border-radius: 4.5%;\n    transition: all 0.5s ease;\n  &:hover {\n    background-color: transparent;\n    transform: scale(1.1);\n  }\n"]))),je=G.a.button(H||(H=Object(p.a)(["\n  width: 50%;\n  border: none;\n  padding: 15px 20px;\n  font-size: 14px;\n  background-color: teal;\n  color: white;\n  cursor: pointer;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 20px;\n  &:disabled {\n    color: green;\n    cursor: not-allowed;\n  }\n"]))),pe=(G.a.button(Q||(Q=Object(p.a)(["\n  width: 40%;\n  font-size: 14px;\n  border: none;\n  padding: 15px 15px;\n  background-color: green;\n  color: white;\n  cursor: pointer;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 20px;\n  &:disabled {\n    color: green;\n    cursor: not-allowed;\n  }\n"]))),G.a.a(Z||(Z=Object(p.a)(["\n  margin: 5px 0px;\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n"]))),G.a.span($||($=Object(p.a)(["\n  color: red;\n"])))),he=function(){var e=Object(r.useState)(""),t=Object(re.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(re.a)(a,2),s=o[0],d=o[1],l=Object(E.b)(),u=Object(E.c)((function(e){return e.user})),p=u.isFetching,h=u.error,g=function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(n+s),R(l,{username:n,password:s});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)(ie,{children:Object(i.jsxs)(de,{children:[Object(i.jsx)(le,{children:Object(i.jsx)("center",{children:"VOLUNTEER SIGN IN"})}),Object(i.jsxs)(ue,{children:[Object(i.jsx)(be,{placeholder:"Username",onChange:function(e){return c(e.target.value)}}),Object(i.jsx)(be,{placeholder:"Password",type:"password",onChange:function(e){return d(e.target.value)}}),Object(i.jsx)(je,{onClick:g,disabled:p,children:"LOGIN"}),h&&Object(i.jsx)(pe,{children:"Something went wrong..."})]})]})})};var ge=function(){var e=!1;try{var t=Object(E.c)((function(e){return e.user.currentUser.isVolunteer}));console.log("hello"+t),e=t}catch(n){console.log(n)}return console.log(e),e?Object(i.jsx)(s.a,{children:Object(i.jsx)(ee.c,{children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(d,{}),Object(i.jsx)(ee.a,{path:"/",children:Object(i.jsx)(se,{})})]})]})})}):Object(i.jsx)(s.a,{children:Object(i.jsx)(ee.c,{children:Object(i.jsx)(ee.a,{path:"/",children:Object(i.jsx)(he,{})})})})},Oe=n(12),xe=n(27),fe=n(66),me={key:"root",version:1,storage:n.n(fe).a},ve=Object(Oe.b)({user:P,product:J}),Pe=Object(xe.g)(me,ve),Se=Object(h.a)({reducer:Pe,middleware:function(e){return e({serializableCheck:{ignoredActions:[xe.a,xe.f,xe.b,xe.c,xe.d,xe.e]}})}}),we=Object(xe.h)(Se),ye=n(67);a.a.render(Object(i.jsx)(E.a,{store:Se,children:Object(i.jsx)(ye.a,{loading:"null",persistor:we,children:Object(i.jsx)(ge,{})})}),document.getElementById("root"))},75:function(e,t,n){},82:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.c47be49a.chunk.js.map