"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(n),h=s,p=l["".concat(u,".").concat(h)]||l[h]||f[h]||i;return n?r.createElement(p,a(a({ref:t},d),{},{components:n})):r.createElement(p,a({ref:t},d))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[l]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:3},a="Manual API tests",o={unversionedId:"testing/manual-api-testing",id:"testing/manual-api-testing",title:"Manual API tests",description:"The backend was tested using Postman.",source:"@site/docs/testing/manual-api-testing.md",sourceDirName:"testing",slug:"/testing/manual-api-testing",permalink:"/project-algorithmic-trading/docs/testing/manual-api-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/edit/main/documentation/docs/testing/manual-api-testing.md",tags:[],version:"current",lastUpdatedBy:"Sean Britt",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Acceptance test",permalink:"/project-algorithmic-trading/docs/testing/acceptence-testing"}},u={},c=[],d={toc:c};function l(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manual-api-tests"},"Manual API tests"),(0,s.kt)("p",null,"The backend was tested using Postman."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Here is a test for the logout API function:"),"\n",(0,s.kt)("img",{alt:"logout test",src:n(4680).Z,width:"1785",height:"1163"}),"\nThe logout function takes a token in its input, and returns a HTTP 205 message if successful. We can see here that the logout was successful."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Here is a test for registering a new user:"),"\n",(0,s.kt)("img",{alt:"register user test",src:n(1170).Z,width:"1783",height:"1167"}),"\nThis function expects a username, password, and a password re-entry. It returns a HTTP 201 and the new user\u2019s username on success, as we can see in the screenshot above."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test for user search by username:"),"\n",(0,s.kt)("img",{alt:"search user test",src:n(3976).Z,width:"1783",height:"1169"}),"\nThis API function expects the calling user to be authenticated. It takes a username and returns an object with the username and a user_id if the username belongs to a valid user. It returns a 404 Not Found if the username is invalid."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test for sending a friend request:"),"\n",(0,s.kt)("img",{alt:"send friend request test",src:n(6351).Z,width:"1784",height:"1167"}),"\nThis API function expects the user id of the user to send the friend request to. It returns a 200 OK if the id is valid, indicating the request was sent."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test revoking a friend request:"),"\n",(0,s.kt)("img",{alt:"revoke friend request test",src:n(9947).Z,width:"1780",height:"1165"}),"\nThis API function expects the user id of a user to whom a friend request was previously sent. It always returns HTTP 200, even if the id is invalid. However, if the id is valid, it deletes the friend request before returning."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test for getting a list of friend requests:"),"\n",(0,s.kt)("img",{alt:"get list of friend requests test",src:n(3900).Z,width:"1788",height:"1171"}),"\nThis API function returns a list of users who have sent a friend request to the authenticated user. As we can see in the body, a user with username \u2018slycooper\u2019 and user id of 60 has sent a friend request to the user. If the user has no incoming friend requests, the list would be empty."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test responding to a friend request:"),"\n",(0,s.kt)("img",{alt:"respond to friend request test",src:n(3204).Z,width:"1788",height:"1166"}),"\nThis API function expects the user id of a user who has sent the authenticated user a friend request. It also expects a response which is either \u201caccept\u201d or \u201cdecline\u201d. It returns 200 OK if there was a valid friend request from the user in question. Otherwise it returns a 500 Internal Server Error. "),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test get friends list:"),"\n",(0,s.kt)("img",{alt:"get friends list test",src:n(9788).Z,width:"1790",height:"1167"}),"\nThis API function retrieves the authenticated user\u2019s list of friends. It returns an empty list if no friends are present."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test unfriend:"),"\n",(0,s.kt)("img",{alt:"unfriend test",src:n(4728).Z,width:"1790",height:"1175"}),"\nThis API function takes the user id of a current friend. It removes that friend from the friend\u2019s list and returns 200 OK."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test check friendship:"),"\n",(0,s.kt)("img",{alt:"check friendship test",src:n(1309).Z,width:"1792",height:"1169"}),"\nThis API function takes a user id and returns true if the user with that user id is friends with the authenticated user, otherwise it returns false. Here we can see that the authenticated user is not friends with the user with user id 1."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test checking for an outgoing friend request:"),"\n",(0,s.kt)("img",{alt:"check outgoing friend request test",src:n(9692).Z,width:"1797",height:"1172"}),"\nThis API function takes a user id and returns true if the authenticated user has a friend request out for the user with the supplied user id. Otherwise it returns false. Here we can see that there is no outgoing request from the authenticated user to the user with user id 1."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test checking for an incoming friend request:"),"\n",(0,s.kt)("img",{alt:"check incoming friend request test",src:n(2396).Z,width:"1788",height:"1177"}),"\nThis API function returns true if the authenticated user has an incoming friend request from the user with the supplied user id. Otherwise, it returns false."))}l.isMDXComponent=!0},1309:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/check-friend-5b17369cbd9546fa6840470157c584a1.png"},2396:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/check-incoming-request-714a31d43276fa1114efa63180b01d60.png"},9692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/check-outgoing-request-4f51cfd1def01fcef77340e32b697a7e.png"},3976:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/findUser-d84bd06af2661b0b44a0845b61a30bb1.png"},9788:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/get-friends-fcea00d716edac0ffa0589ca0763cfb3.png"},3900:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/get-requests-b1715d5ab9395247c2053f2348bf203b.png"},4680:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/logout-7e9ef6b8cc3478ca14f80cd7f3de59a1.png"},1170:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/register-25c469fb315b9b147dc0b1d35d8d2b40.png"},3204:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/respond-request-7dac0589b279d7720214a8106d70ca45.png"},9947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/revoke-92c26a5c5645d266b3f1c0ba71b963ec.png"},6351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/send-request-491c211c12d3c863efdff8b9d8791a5a.png"},4728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unfriend-d8ffebfd008a868dd2fbbca9fd33c2d7.png"}}]);