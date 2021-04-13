(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(165)),o={id:"acls",title:"ACLs"},s={unversionedId:"user_guide/acls",id:"version-0.9.0/user_guide/acls",isDocsHomePage:!1,title:"ACLs",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/user_guide/acls.md",slug:"/user_guide/acls",permalink:"/docs/user_guide/acls",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Sorting Policies",permalink:"/docs/user_guide/sorting_policies"},next:{title:"Resource Quota Management",permalink:"/docs/user_guide/resource_quota_management"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Example config",id:"example-config",children:[{value:"Simple examples",id:"simple-examples",children:[]},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",children:[]}]},{value:"Access check",id:"access-check",children:[]},{value:"User and Group information",id:"user-and-group-information",children:[{value:"Resolution",id:"resolution",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"User information is currently not passed to the core scheduler from the kubernetes shim.\nTherefore, the recommendation is to use the wildcard ACL on the root queue for now as per the default configuration."))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."),Object(i.b)("p",null,"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),Object(i.b)("p",null,"If there is no access control list is configured access is ",Object(i.b)("em",{parentName:"p"},"denied")," by default."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"The access control list is defined as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),Object(i.b)("p",null,"This definition specifies a wildcard of * which results in access for everyone."),Object(i.b)("p",null,"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"an empty access control list. (implicit)"),Object(i.b)("li",{parentName:"ul"},"a single space. (explicit)")),Object(i.b)("h2",{id:"example-config"},"Example config"),Object(i.b)("h3",{id:"simple-examples"},"Simple examples"),Object(i.b)("p",null,"An ACL that allows access to just the user ",Object(i.b)("inlineCode",{parentName:"p"},"sue")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),Object(i.b)("p",null,"Nobody else will get access, this is just for ",Object(i.b)("inlineCode",{parentName:"p"},"sue"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"john")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bob")," will be denied access."),Object(i.b)("p",null,"An ACL that allows access to the user ",Object(i.b)("inlineCode",{parentName:"p"},"sue")," and the members of the group ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),Object(i.b)("p",null,"The user ",Object(i.b)("inlineCode",{parentName:"p"},"sue")," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),". Her group membership is irrelevant."),Object(i.b)("p",null,"The user named ",Object(i.b)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\nA third user called ",Object(i.b)("inlineCode",{parentName:"p"},"bob")," whom is not mentioned explicitly and is not a member of the ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," group will be denied access."),Object(i.b)("p",null,"An ACL that allows access to the members of the groups ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(i.b)("inlineCode",{parentName:"p"},"test"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),Object(i.b)("p",null,"The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," or ",Object(i.b)("inlineCode",{parentName:"p"},"test")," group."),Object(i.b)("p",null,"Looking at the same three users as before:\nThe user ",Object(i.b)("inlineCode",{parentName:"p"},"sue")," is not a member of either group and is denied access.\nThe user named ",Object(i.b)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\n",Object(i.b)("inlineCode",{parentName:"p"},"bob")," is not a member of the ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," group but is a member of ",Object(i.b)("inlineCode",{parentName:"p"},"test")," and will be allowed access."),Object(i.b)("h3",{id:"escaping-and-quotation-marks"},"Escaping and quotation marks"),Object(i.b)("p",null,"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."),Object(i.b)("p",null,"The following points need to be taken into account:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The wildcard entry must be quoted in the yaml config."),Object(i.b)("li",{parentName:"ol"},"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."),Object(i.b)("li",{parentName:"ol"},"An ACL without a user list and just one or more groups must be quoted to find the starting space:")),Object(i.b)("p",null,"Correctly quoted ACL example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),Object(i.b)("h2",{id:"access-check"},"Access check"),Object(i.b)("p",null,"The access check follows the pattern:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"check if the ACL is the wildcard"),Object(i.b)("li",{parentName:"ul"},"check if the user is in the user list"),Object(i.b)("li",{parentName:"ul"},"check if any of the groups the user is a member of is part of the group list")),Object(i.b)("p",null,"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."),Object(i.b)("h2",{id:"user-and-group-information"},"User and Group information"),Object(i.b)("p",null,"ACLs require the user's name and group membership.\nUser information must be provided by the shims to the core scheduler.\nThe current expectation is that the shims only provide the user information and leave the group information empty."),Object(i.b)("p",null,"User information is passed around in the scheduler as a combined user and groups object.\nThese objects are cached to allow fast lookup and minimise resolution of the groups."),Object(i.b)("p",null,"Based on the fact that the shims do not have to provide group information the core has the possibility to resolve the group memberships.\nGroup membership resolution is pluggable, see ",Object(i.b)("a",{parentName:"p",href:"#resolution"},"resolution")," below.\nIf the resolution of the groups of a user fails the result is still cached with a shortened lifetime.\nUsers resolution is cached, negatively and positively, per partition.\nUsers resolution like many other configs can differ between partition."),Object(i.b)("h3",{id:"resolution"},"Resolution"),Object(i.b)("p",null,"Groups do not have to be part of provided user and group object.\nWhen the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),Object(i.b)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),Object(i.b)("p",null,"Other resolvers are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"OS resolver"),Object(i.b)("li",{parentName:"ul"},"test resolver")))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);