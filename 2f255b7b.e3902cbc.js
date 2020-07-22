(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(2),a=n(9),i=(n(0),n(217)),r={id:"how_to_contribute",title:"How To Contribute"},s={permalink:"/community/how_to_contribute",source:"@site/community/how_to_contribute.md",description:"\x3c!--",date:"2020-07-22T23:55:52.033Z",tags:[],title:"How To Contribute",readingTime:4.71,truncated:!1,prevItem:{title:"Coding Guidelines",permalink:"/community/coding_guidelines"},nextItem:{title:"Reporting Issues",permalink:"/community/reporting_issues"}},l=[{value:"Find an issue",id:"find-an-issue",children:[]},{value:"Fix an issue",id:"fix-an-issue",children:[]},{value:"Create a pull request",id:"create-a-pull-request",children:[]},{value:"Committing a change",id:"committing-a-change",children:[]},{value:"Still got questions?",id:"still-got-questions",children:[]}],u={rightToc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"YuniKorn uses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JIRA for issue tracking."),Object(i.b)("li",{parentName:"ul"},"GitHub Pull Requests to manage code review and the change itself."),Object(i.b)("li",{parentName:"ul"},"MarkDown in the source tree for the documentation.")),Object(i.b)("h2",{id:"find-an-issue"},"Find an issue"),Object(i.b)("p",null,"We use JIRA issues to track bugs for this project.\nFind an issue that you would like to work on, or file a new one if you have discovered a new issue.\nFor help with reporting issues look at the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"community/reporting_issues.md"}),"how to report an issue"),"."),Object(i.b)("p",null,"The easiest way to get started working with the code base is to pick up a really easy\nJIRA and work on that. This will help you get familiar with the code base, build system,\nreview process, etc. We flag these starter bugs ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://issues.apache.org/jira/issues/?jql=project%3DYUNIKORN%20AND%20status%3DOpen%20AND%20labels%3Dnewbie"}),"here"),"."),Object(i.b)("p",null,"If nobody is working on an existing issue, assign it to yourself only if you intend to work on it shortly.\nIf you pick up an existing JIRA look for pull requests that are linked to the JIRA ticket.\nSomeone might be already working on it and not assigned the ticket.\nJIRAs that have a pull requests linked will have the label ",Object(i.b)("inlineCode",{parentName:"p"},"pull-request-available")," and a link to the pull request can be found under issue links."),Object(i.b)("p",null,"For anything that is more than a trivial change, like a typo or one line code change, it\u2019s a good idea to discuss your intended approach on the issue.\nYou are much more likely to have your patch reviewed and committed if you\u2019ve already got buy-in from the YuniKorn community before you start writing the fix."),Object(i.b)("p",null,"If you cannot assign the JIRA to yourself ask the community to help assign it and add you to the contributors list in JIRA.   "),Object(i.b)("h2",{id:"fix-an-issue"},"Fix an issue"),Object(i.b)("p",null,"Fixes or improvement must be created on the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch.\nFork the relevant YuniKorn project into your own project and checkout the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch.\nMake sure that you have an up to date code revision checked out before you start.\nCreate a branch to work on, a good name to use is the JIRA ID you are working on."),Object(i.b)("p",null,"Now start coding! As you are writing your patch, please keep the following things in mind:"),Object(i.b)("p",null,"Include tests with your patch.\nIf your patch adds a feature or fixes a bug and does not include tests, it will generally not be accepted.\nIf you are unsure how to write tests for a particular component, please ask on the JIRA for guidance."),Object(i.b)("p",null,"Please keep your patch narrowly targeted to the problem described by the JIRA.\nIt\u2019s better for everyone if we maintain discipline about the scope of each patch.\nIn general, if you find a bug while working on a specific feature, file a JIRA for the bug, check if you can assign it to yourself and fix it independently of the feature.\nThis helps us to differentiate between bug fixes and features and allows us to build stable maintenance releases."),Object(i.b)("p",null,"Make sure you have observed the recommendations in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"community/coding_guidelines.md"}),"coding guidelines"),".\nBefore you commit you should also run the full test suite using ",Object(i.b)("inlineCode",{parentName:"p"},"make test"),".\nMake sure that all the tests pass."),Object(i.b)("p",null,"Finally, please write a good, clear commit message, with a short, descriptive title.\nThe descriptive title must start with the JIRA ID you are working on.\nAn example is: ",Object(i.b)("inlineCode",{parentName:"p"},"[YUNIKORN-2] Support Gang Scheduling"),"\nThe commit message will be used to pre-fill the pull request information.\nThe JIRA ID in the message will automatically link the pull request and the JIRA.\nThe message that follows can be used to explain what the problem was, and how it was fixed."),Object(i.b)("h2",{id:"create-a-pull-request"},"Create a pull request"),Object(i.b)("p",null,"Please create a pull request on github with your patch.\nSee ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.github.com/articles/using-pull-requests/"}),"opening a pull request")," for all the details."),Object(i.b)("p",null,"For committers: You can create a new branch, push your change and create a PR using the GitHub UI.\nFor contributors: you have already forked the repository and committed your changes to your fork.\nUse the GitHub UI to create a PR using the ",Object(i.b)("inlineCode",{parentName:"p"},"compare across forks")," option."),Object(i.b)("p",null,"The pull request description must include the JIRA reference that you are working on.\nIf you set the commit message as described above the pull request will automatically pick it up.\nIf you did not do that you can amend the description of the pull request to add the JIRA ID.\nFor example a pull request linked to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://issues.apache.org/jira/browse/YUNIKORN-2"}),"YUNIKORN-2")," should have a description like:\n",Object(i.b)("inlineCode",{parentName:"p"},"[YUNIKORN-2] Support Gang Scheduling")),Object(i.b)("h2",{id:"committing-a-change"},"Committing a change"),Object(i.b)("p",null,"When a change is approved it will be committed to the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch of the repository.\nThe commit message must include the JIRA in the first line and should include a ",Object(i.b)("inlineCode",{parentName:"p"},"Closes #1")," as a\nA commit will automatically close the PR.\nThe JIRA will not be closed automatically."),Object(i.b)("h2",{id:"still-got-questions"},"Still got questions?"),Object(i.b)("p",null,"If you\u2019re not sure about something, try to follow the style of the existing codebase.\nLook at whether there are other examples in the code that do a similar thing.\nFeel free to ask questions on the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:dev@yunikorn.apache.org"}),"dev@yunikorn.apache.org")," list as well."))}c.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,b=p["".concat(r,".").concat(d)]||p[d]||h[d]||i;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);