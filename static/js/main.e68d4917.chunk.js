(this["webpackJsonpreminder-react"]=this["webpackJsonpreminder-react"]||[]).push([[0],{100:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(31),c=a.n(s),i=(a(90),a(91),a(63)),o=a(16),l=a(17),d=a(22),j=a(21),u=a(13),h=a(127),b=a(2),m=a(3),O=a(0),x=["user","component","render"],g=function(e){var t=e.user,a=e.component,n=e.render,r=Object(m.a)(e,x);return t&&n?Object(O.jsx)(u.b,Object(b.a)(Object(b.a)({},r),{},{render:n})):Object(O.jsx)(u.b,Object(b.a)(Object(b.a)({},r),{},{render:function(e){return t?Object(O.jsx)(a,Object(b.a)({},e)):Object(O.jsx)(u.a,{to:"/"})}}))},p=a(72),f=(a(100),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(O.jsx)(p.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(p.a.Heading,{children:a}),Object(O.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(r.a.Component)),v=a(85),w=a(50),y=a(11),C=Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(y.c,{to:"/all-reminders",className:"nav-link",children:"Current Noodles"}),Object(O.jsx)(y.c,{to:"/reminder",className:"nav-link",children:"Make Reminder Noodle"}),Object(O.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(O.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),A=Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(y.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(O.jsx)(y.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=Object(O.jsx)(n.Fragment,{children:Object(O.jsx)(y.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),N=function(e){var t=e.user;return Object(O.jsxs)(w.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(O.jsx)(w.a.Brand,{children:Object(O.jsx)(y.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:" Never Forgetti "})}),Object(O.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(O.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),S,t?C:A]})})]})},k=a(7),P="https://aqueous-atoll-85096.herokuapp.com",T="http://localhost:4741",D="localhost"===window.location.hostname?T:P,E=a(19),I=a.n(E),L=function(e){return I()({url:D+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},G=a(6),U=a(35),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,a=n.props,r=a.msgAlert,s=a.history,c=a.setUser;(t=n.state,I()({method:"POST",url:D+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(n.state)})).then((function(e){return c(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",password:"",passwordConfirmation:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.passwordConfirmation;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Sign Up"}),Object(O.jsxs)(G.a,{onSubmit:this.onSignUp,children:[Object(O.jsxs)(G.a.Group,{controlId:"email",children:[Object(O.jsx)(G.a.Label,{children:"Email address"}),Object(O.jsx)(G.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(O.jsxs)(G.a.Group,{controlId:"password",children:[Object(O.jsx)(G.a.Label,{children:"Password"}),Object(O.jsx)(G.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(O.jsxs)(G.a.Group,{controlId:"passwordConfirmation",children:[Object(O.jsx)(G.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(G.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),q=Object(u.f)(F),B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,r=t.history,s=t.setUser;L(n.state).then((function(e){return s(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/all-reminders")})).catch((function(e){n.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Sign In"}),Object(O.jsxs)(G.a,{onSubmit:this.onSignIn,children:[Object(O.jsxs)(G.a.Group,{controlId:"email",children:[Object(O.jsx)(G.a.Label,{children:"Email address"}),Object(O.jsx)(G.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(O.jsxs)(G.a.Group,{controlId:"password",children:[Object(O.jsx)(G.a.Label,{children:"Password"}),Object(O.jsx)(G.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),R=Object(u.f)(B),z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return I()({url:D+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),H=Object(u.f)(z),W=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,r=t.history,s=t.user;(function(e,t){return I()({url:D+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,s).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Change Password"}),Object(O.jsxs)(G.a,{onSubmit:this.onChangePassword,children:[Object(O.jsxs)(G.a.Group,{controlId:"oldPassword",children:[Object(O.jsx)(G.a.Label,{children:"Old password"}),Object(O.jsx)(G.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(O.jsxs)(G.a.Group,{controlId:"newPassword",children:[Object(O.jsx)(G.a.Label,{children:"New Password"}),Object(O.jsx)(G.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),M=Object(u.f)(W),_=a(8),Y=function(e){var t=e.user,a=e.msgAlert,r=Object(n.useState)({title:"",description:"",time:"",rating:""}),s=Object(_.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(!1),l=Object(_.a)(o,2),d=l[0],j=l[1],h=function(e){e.persist(),i((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(k.a)({},e.target.name,e.target.value))}))};return c?d?Object(O.jsx)(u.a,{to:"/all-reminders"}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(G.a,{onSubmit:function(e){e.preventDefault(),I()({url:"".concat(D,"/reminder"),method:"POST",data:{reminder:c},headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(){return j(!0)})).then((function(){return a({heading:"Reminder Creating",message:"Now you wont forget!",variant:"success"})})).catch((function(e){a({heading:"Oops",message:"Reminder failed:"+e.message,variant:"danger"})}))},children:[Object(O.jsxs)(G.a.Group,{controlId:"name",children:[Object(O.jsx)(G.a.Label,{className:"headers",children:"Name"}),Object(O.jsx)(G.a.Control,{required:!0,name:"title",value:c.title,placeholder:"What to remember?",onChange:h})]}),Object(O.jsxs)(G.a.Group,{controlId:"description",children:[Object(O.jsx)(G.a.Label,{className:"headers",children:"Description"}),Object(O.jsx)(G.a.Control,{required:!0,name:"description",value:c.description,placeholder:"Description",onChange:h})]}),Object(O.jsxs)(G.a.Group,{children:[Object(O.jsx)(G.a.Label,{className:"date"}),Object(O.jsx)(G.a.Control,{required:!0,name:"time",value:c.time,type:"date",onChange:h})]}),Object(O.jsxs)(G.a.Group,{children:[Object(O.jsx)(G.a.Label,{className:"rating"}),Object(O.jsx)(G.a.Control,{required:!0,name:"rating",placeholder:"Number 1-5, decimals work also",value:c.rating,onChange:h})]}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})})}):Object(O.jsx)("p",{children:"Loading..."})},J=function(e){var t=e.value,a=e.text,n=e.color;return Object(O.jsxs)("div",{className:"rating",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:n},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:n},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:n},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:n},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:n},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:a&&a})]})};J.defaultProps={color:"black"};var K=J,V=a(84),Q=a(128),X=a(124);var Z=function(e){var t,a=e.user,r=(e.msgAlert,Object(n.useState)([])),s=Object(_.a)(r,2),c=s[0],i=s[1];return Object(n.useEffect)((function(){I()({url:"".concat(D,"/reminder"),method:"GET",headers:{Authorization:"Bearer ".concat(a.token)}}).then((function(e){i(e.data.reminder)}))}),[]),c&&(t=c.map((function(e){return Object(O.jsx)(V.a,{sm:12,md:6,lg:4,xl:3,children:Object(O.jsx)(Q.a,{className:"my-3 p-3 rounded",children:Object(O.jsxs)(Q.a.Body,{children:[Object(O.jsx)(y.b,{to:"/reminder/".concat(e._id),children:Object(O.jsx)(Q.a.Title,{as:"h1",children:Object(O.jsx)("strong",{children:e.title})})}),Object(O.jsxs)(Q.a.Text,{as:"p",children:["Due At: ",e.time.substring(0,10)]}),Object(O.jsx)(Q.a.Text,{as:"h6",children:e.description}),Object(O.jsx)(Q.a.Text,{as:"h3",children:"Difficulty:"}),Object(O.jsx)(K,{value:e.rating})]})})},e._id)}))),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{style:{textAlign:"center",fontSize:"80px"},children:"My Reminder Noodles"}),Object(O.jsx)(X.a,{children:t})]})},$=a(126);var ee=Object(u.f)((function(e){var t=e.user,a=e.match,r=e.msgAlert,s=Object(n.useState)(null),c=Object(_.a)(s,2),i=c[0],o=c[1],l=Object(n.useState)(!1),d=Object(_.a)(l,2),j=d[0],h=d[1],b=Object(n.useState)(!1),m=Object(_.a)(b,2),x=m[0],g=m[1],p=function(){return g(!1)};return Object(n.useEffect)((function(){I()({url:"".concat(D,"/reminder/").concat(a.params.id),method:"GET",headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){o(e.data.reminder)}))}),[]),i?j?Object(O.jsx)(u.a,{to:{pathname:"/all-reminders",state:{msg:"You successfully deleted your reminder"}}}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(X.a,{children:Object(O.jsx)(V.a,{children:Object(O.jsx)(Q.a,{className:"my-3 p-3 rounded",children:Object(O.jsxs)(Q.a.Body,{children:[Object(O.jsx)(y.b,{to:"/reminder/".concat(i._id),children:Object(O.jsx)(Q.a.Title,{as:"div",children:Object(O.jsx)("h1",{children:i.title})})}),Object(O.jsxs)(Q.a.Text,{as:"p",children:["Due At: ",i.time.substring(0,10)]}),Object(O.jsx)(Q.a.Text,{as:"h6",children:i.description}),Object(O.jsx)(Q.a.Text,{as:"h3",children:"Difficulty:"}),Object(O.jsx)(K,{value:i.rating})]})})})})}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(O.jsx)(U.a,{variant:"primary",onClick:function(){return g(!0)},children:"Delete Reminder"}),Object(O.jsxs)($.a,{show:x,onHide:p,children:[Object(O.jsx)($.a.Header,{closeButton:!0,children:Object(O.jsx)($.a.Title,{children:"Delete Reminder"})}),Object(O.jsx)($.a.Body,{children:"Are you sure you want to delete?"}),Object(O.jsxs)($.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:p,children:"Close"}),Object(O.jsx)(U.a,{variant:"primary",onClick:function(){I()({url:"".concat(D,"/reminder/").concat(a.params.id),method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(){return h(!0)})).then((function(){r({heading:"Deleted",message:"You will forget now",variant:"success"})})).catch((function(e){r({heading:"Nope!",message:"Delete error: "+e.message,variant:"danger"})}))},children:"Delete"})]})]}),Object(O.jsx)(y.b,{to:"/reminder/"+a.params.id+"/edit",children:Object(O.jsx)(U.a,{className:"btn btn-primary",style:{marginLeft:"5px"},children:"Edit Reminder"})})]})]}):Object(O.jsx)("p",{children:"Loading..."})})),te=Object(u.f)((function(e){var t=e.user,a=e.match,r=e.msgAlert,s=Object(n.useState)({title:"",description:"",time:"",rating:""}),c=Object(_.a)(s,2),i=c[0],o=c[1],l=Object(n.useState)(!1),d=Object(_.a)(l,2),j=d[0],h=d[1];Object(n.useEffect)((function(){I()({url:"".concat(D,"/reminder/").concat(a.params.id),method:"GET",headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){o(e.data.reminder)}))}),[]);var m=function(e){e.persist(),o((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(k.a)({},e.target.name,e.target.value))}))};return i?j?Object(O.jsx)(u.a,{to:"/all-reminders"}):Object(O.jsx)("div",{children:Object(O.jsxs)(G.a,{onSubmit:function(e){e.preventDefault(),I()({url:"".concat(D,"/reminder/").concat(a.params.id),method:"PATCH",data:{reminder:i},headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(){return h(!0)})).then((function(){return r({heading:"Reminder Edited",message:"Now you wont forget!",variant:"success"})})).catch((function(e){r({heading:"Oops",message:"Reminder failed:"+e.message,variant:"danger"})}))},children:[Object(O.jsxs)(G.a.Group,{controlId:"name",children:[Object(O.jsx)(G.a.Label,{className:"headers",children:"Name"}),Object(O.jsx)(G.a.Control,{required:!0,name:"title",value:i.title,placeholder:"What to remember?",onChange:m})]}),Object(O.jsxs)(G.a.Group,{controlId:"description",children:[Object(O.jsx)(G.a.Label,{className:"headers",children:"Description"}),Object(O.jsx)(G.a.Control,{required:!0,name:"description",value:i.description,placeholder:"Description",onChange:m})]}),Object(O.jsxs)(G.a.Group,{children:[Object(O.jsx)(G.a.Label,{className:"date",children:"Date"}),Object(O.jsx)(G.a.Control,{required:!0,name:"time",value:i.time.substring(0,10),type:"date",onChange:m})]}),Object(O.jsxs)(G.a.Group,{children:[Object(O.jsx)(G.a.Label,{className:"rating",children:"Difficulty"}),Object(O.jsx)(G.a.Control,{required:!0,name:"rating",value:i.rating,onChange:m})]}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})}):Object(O.jsx)("p",{children:"Loading..."})}));var ae=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)("h1",{id:"text-animate",className:"main-title",children:"EAT SPAGHETTI and NEVER FORGETTI"}),Object(O.jsx)("h4",{children:"The end of forgetting, brought to you with noodles and some secret sauce."}),Object(O.jsx)("img",{alt:"Spaghetti",src:"https://i.imgur.com/RKxdbeK.png"})]})})},ne=a(125),re=function(){return Object(O.jsx)("footer",{children:Object(O.jsx)(ne.a,{children:Object(O.jsx)(X.a,{children:Object(O.jsx)(V.a,{className:"text-center py-3",children:"Copyright \xa9 Cody Sanders"})})})})},se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,a=e.message,r=e.variant,s=Object(h.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:a,variant:r,id:s}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,r=t.user;return Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(N,{user:r}),a.map((function(t){return Object(O.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(O.jsxs)("main",{className:"container",children:[Object(O.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(ae,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(u.b,{path:"/sign-up",render:function(){return Object(O.jsx)(q,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(u.b,{path:"/sign-in",render:function(){return Object(O.jsx)(R,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(O.jsx)(g,{user:r,path:"/sign-out",render:function(){return Object(O.jsx)(H,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(O.jsx)(g,{user:r,path:"/change-password",render:function(){return Object(O.jsx)(M,{msgAlert:e.msgAlert,user:r})}}),Object(O.jsx)(g,{exact:!0,user:r,path:"/reminder",render:function(){return Object(O.jsx)(Y,{msgAlert:e.msgAlert,user:r})}}),Object(O.jsx)(g,{user:r,path:"/all-reminders",render:function(){return Object(O.jsx)(Z,{msgAlert:e.msgAlert,user:r})}}),Object(O.jsx)(g,{user:r,path:"/reminder/:id",render:function(){return Object(O.jsx)(ee,{msgAlert:e.msgAlert,user:r})}}),Object(O.jsx)(g,{user:r,path:"/reminder/:id/edit",render:function(){return Object(O.jsx)(te,{msgAlert:e.msgAlert,user:r})}})]}),Object(O.jsx)(re,{})]})}}]),a}(n.Component),ce=Object(O.jsx)(y.a,{basename:"",children:Object(O.jsx)(se,{})});c.a.render(ce,document.getElementById("root"))},90:function(e,t,a){},91:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.e68d4917.chunk.js.map