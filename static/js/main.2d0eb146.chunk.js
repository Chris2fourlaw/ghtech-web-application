(this["webpackJsonpghtech-web-application"]=this["webpackJsonpghtech-web-application"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),i=a.n(s),r=a(14),o=a(7),l=a(3),u=function(){return Object(l.jsx)("footer",{className:"mastfoot mt-auto",children:Object(l.jsx)("div",{className:"inner",children:Object(l.jsx)("p",{children:"GHTech coding assessment submission by Chris Lawson."})})})},h=a(22),j=Object(o.g)((function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"landing-heading",children:"Landing page."}),Object(l.jsx)("p",{className:"lead",children:"This is the landing page."}),Object(l.jsx)("p",{className:"lead",children:Object(l.jsx)(r.b,{to:"/login",children:Object(l.jsx)(h.a,{variant:"secondary",size:"large",children:"Go To Login"})})})]})})),d=a(23),b=a(24),m=a(27),x=a(25),O=a(19),p=a(15),v=(a(37),function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={auth:!1,userLink:"/login",userText:"Log In"},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.auth().onAuthStateChanged((function(t){t?e.setState({auth:t,userLink:"#",userText:"Log Out"}):e.setState({auth:!1,userLink:"/login",userText:"Log In"})}))}},{key:"userLinkClickHandler",value:function(){this.state.auth&&(p.a.auth().signOut(),console.log("signed out"))}},{key:"render",value:function(){var e=this,t=this.state,a=t.auth,n=t.userLink,c=t.userText;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"masthead-brand",children:"GHTech Web Application"}),Object(l.jsxs)(O.a,{className:"nav-masthead justify-content-center",activeKey:"/",children:[Object(l.jsx)(O.a.Item,{children:Object(l.jsx)(r.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"Home"})}),a?Object(l.jsx)(O.a.Item,{children:Object(l.jsx)(r.c,{exact:!0,to:"/contacts",className:"nav-link",activeClassName:"active",children:"Contacts"})}):null,a?Object(l.jsx)(O.a.Item,{children:Object(l.jsx)(r.c,{exact:!0,to:"/chatroom",className:"nav-link",activeClassName:"active",children:"Chat Room"})}):null,Object(l.jsx)(O.a.Item,{children:Object(l.jsx)(r.c,{exact:!0,to:n,onClick:function(){e.userLinkClickHandler()},className:"nav-link",activeClassName:"active",children:c})})]})]})}}]),a}(c.a.Component)),g=Object(o.g)(v),f=function(){return Object(l.jsx)("header",{className:"masthead mb-auto",children:Object(l.jsx)("div",{className:"inner",children:Object(l.jsx)(g,{})})})},k=a(18),N=a(40),w=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={user:!1,incorrect:!1},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:!1})}))}},{key:"onFormSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target[0].value,n=e.target[1].value;p.a.auth().signInWithEmailAndPassword(a,n).then((function(e){var a=e.user;t.setState({user:a})})).catch((function(e){"auth/user-not-found"===e.code&&(console.log("Incorrct username/password"),t.setState({incorrect:!0}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.incorrect;return a?Object(l.jsx)(o.a,{to:"/contacts"}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"login-heading",children:"Please sign in."}),Object(l.jsxs)(k.a,{className:"form-signin",onSubmit:function(t){e.onFormSubmit(t)},children:[Object(l.jsx)(N.a,{show:n,variant:"danger",onClick:function(){return e.setState({incorrect:!1})},dismissible:!0,children:"Incorrect Username/Password"}),Object(l.jsx)(k.a.Group,{controlId:"formBasicEmail",children:Object(l.jsx)(k.a.Control,{type:"email",placeholder:"Enter email",required:!0})}),Object(l.jsx)(k.a.Group,{controlId:"formBasicPassword",children:Object(l.jsx)(k.a.Control,{type:"password",placeholder:"Password",required:!0,autoComplete:"on"})}),Object(l.jsx)(h.a,{variant:"primary",size:"lg",className:"btn-block",type:"submit",children:"Sign in"})]})]})}}]),a}(c.a.Component);p.a.initializeApp({apiKey:"AIzaSyBTzDxqhrHQklOA727dv0iH7cQvs7xUvwU",authDomain:"ghtech-web-application.firebaseapp.com",projectId:"ghtech-web-application",storageBucket:"ghtech-web-application.appspot.com",messagingSenderId:"751898111640",appId:"1:751898111640:web:9a5ebf4f06a5a09264eaed"});var C=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"content-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:[Object(l.jsx)(f,{}),Object(l.jsx)("main",{role:"main",className:"inner content",children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/",exact:!0,component:j}),Object(l.jsx)(o.b,{path:"/login",exact:!0,component:w})]})}),Object(l.jsx)(u,{})]})})};a(52);i.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2d0eb146.chunk.js.map