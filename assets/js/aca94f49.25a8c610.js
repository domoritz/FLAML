"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,_=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(_,i(i({ref:t},u),{},{components:n})):r.createElement(_,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2647:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"trial_runner",title:"onlineml.trial_runner"},i=void 0,o={unversionedId:"reference/onlineml/trial_runner",id:"reference/onlineml/trial_runner",isDocsHomePage:!1,title:"onlineml.trial_runner",description:"OnlineTrialRunner Objects",source:"@site/docs/reference/onlineml/trial_runner.md",sourceDirName:"reference/onlineml",slug:"/reference/onlineml/trial_runner",permalink:"/FLAML/docs/reference/onlineml/trial_runner",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/onlineml/trial_runner.md",tags:[],version:"current",frontMatter:{sidebar_label:"trial_runner",title:"onlineml.trial_runner"},sidebar:"referenceSideBar",previous:{title:"trial",permalink:"/FLAML/docs/reference/onlineml/trial"},next:{title:"online_scheduler",permalink:"/FLAML/docs/reference/scheduler/online_scheduler"}},p=[{value:"OnlineTrialRunner Objects",id:"onlinetrialrunner-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"champion_trial",id:"champion_trial",children:[],level:4},{value:"running_trials",id:"running_trials",children:[],level:4},{value:"step",id:"step",children:[],level:4},{value:"get_top_running_trials",id:"get_top_running_trials",children:[],level:4},{value:"get_trials",id:"get_trials",children:[],level:4},{value:"add_trial",id:"add_trial",children:[],level:4},{value:"stop_trial",id:"stop_trial",children:[],level:4},{value:"pause_trial",id:"pause_trial",children:[],level:4},{value:"run_trial",id:"run_trial",children:[],level:4}],level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"onlinetrialrunner-objects"},"OnlineTrialRunner Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class OnlineTrialRunner()\n")),(0,l.kt)("p",null,"Class for the OnlineTrialRunner."),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(max_live_model_num: int, searcher=None, scheduler=None, champion_test_policy="loss_ucb", **kwargs)\n')),(0,l.kt)("p",null,"Constructor."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_live_model_num")," - The maximum number of 'live'/running models allowed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"searcher")," - A class for generating Trial objects progressively.\nThe ConfigOracle is implemented in the searcher."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scheduler")," - A class for managing the 'live' trials and allocating the\nresources for the trials."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"champion_test_policy")," - A string to specify what test policy to test for\nchampion. Currently can choose from ","['loss_ucb', 'loss_avg', 'loss_lcb', None]",".")),(0,l.kt)("h4",{id:"champion_trial"},"champion","_","trial"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef champion_trial() -> Trial\n")),(0,l.kt)("p",null,"The champion trial."),(0,l.kt)("h4",{id:"running_trials"},"running","_","trials"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef running_trials()\n")),(0,l.kt)("p",null,"The running/'live' trials."),(0,l.kt)("h4",{id:"step"},"step"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def step(data_sample=None, prediction_trial_tuple=None)\n")),(0,l.kt)("p",null,"Schedule one trial to run each time it is called."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data_sample")," - One data example."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prediction_trial_tuple")," - A list of information containing\n(prediction_made, prediction_trial).")),(0,l.kt)("h4",{id:"get_top_running_trials"},"get","_","top","_","running","_","trials"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def get_top_running_trials(top_ratio=None, top_metric="ucb") -> list\n')),(0,l.kt)("p",null,"Get a list of trial ids, whose performance is among the top running trials."),(0,l.kt)("h4",{id:"get_trials"},"get","_","trials"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_trials() -> list\n")),(0,l.kt)("p",null,"Return the list of trials managed by this TrialRunner."),(0,l.kt)("h4",{id:"add_trial"},"add","_","trial"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def add_trial(new_trial)\n")),(0,l.kt)("p",null,"Add a new trial to this TrialRunner.\nTrials may be added at any time."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"new_trial")," ",(0,l.kt)("em",{parentName:"li"},"Trial")," - Trial to queue.")),(0,l.kt)("h4",{id:"stop_trial"},"stop","_","trial"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def stop_trial(trial)\n")),(0,l.kt)("p",null,"Stop a trial: set the status of a trial to be\nTrial.TERMINATED and perform other subsequent operations."),(0,l.kt)("h4",{id:"pause_trial"},"pause","_","trial"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def pause_trial(trial)\n")),(0,l.kt)("p",null,"Pause a trial: set the status of a trial to be Trial.PAUSED\nand perform other subsequent operations."),(0,l.kt)("h4",{id:"run_trial"},"run","_","trial"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def run_trial(trial)\n")),(0,l.kt)("p",null,"Run a trial: set the status of a trial to be Trial.RUNNING\nand perform other subsequent operations."))}u.isMDXComponent=!0}}]);