(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479,931],{96087:function(e,l,s){Promise.resolve().then(s.bind(s,95214)),Promise.resolve().then(s.bind(s,28895))},55013:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return p}});var t=s(57437),a=s(16691),x=s.n(a),n=e=>{let{tags:l}=e;return(0,t.jsx)("ul",{className:"flex flex-row flex-wrap gap-x-[5px] gap-y-[5px]",children:l.map((e,l)=>(0,t.jsx)("li",{className:"border-[1px] border-gray-900 text-gray-500 text-[14px] leading-[21px] px-[6px] rounded-[20px]",style:{border:"0.6px solid rgb(107 114 128 / var(--tw-text-opacity))"},children:e},"".concat(e,"-").concat(l)))})},r=s(83058),c=s(61396),i=s.n(c),p=e=>{let{postMeta:l,screenType:s,articleType:a,index:c,language:p}=e;return(0,t.jsx)(i(),{onClick:e=>(function(e){let t={category:l.category,id:l.id,tags:l.tags,name:l.title,index:c,type:a,screen:s,language:p};r.B("click_article",t)})(0),href:l.path,children:(0,t.jsxs)("article",{className:"flex items-start gap-[20px]",children:[(0,t.jsxs)("div",{className:"flex flex-col flex-1 gap-[10px]",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-[6px]",children:[(0,t.jsx)("h1",{className:"text-[20px] leading-[30px] text-gray-800",children:l.title}),(0,t.jsx)("div",{className:"flex flex-col gap-[8px]",children:(0,t.jsx)("h2",{className:"text-[14px] leading-[21px] text-gray-800 line-clamp-2",children:l.description})})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-[4px] text-gray-400 text-[10px] leading-[18px",children:[(0,t.jsx)("time",{children:l.date}),(0,t.jsx)("span",{className:"w-[3px] h-[3px] bg-gray-400 rounded-[3px]"}),(0,t.jsxs)("span",{children:[l.readMin,"분"]})]}),(0,t.jsx)(n,{tags:l.tags.map(e=>e.name)})]}),(0,t.jsx)(x(),{className:"w-[120px] h-[120px] bg-gray-100",src:"".concat(l.banner),alt:"article main image",width:200,height:200})]})})}},18978:function(e,l,s){"use strict";var t=s(57437),a=s(55013);l.Z=e=>{let{title:l,allPostsMeta:s,articleType:x,screenType:n,language:r}=e;return(0,t.jsxs)("section",{className:"flex flex-1 flex-col gap-[80px]",children:[(0,t.jsx)("h2",{className:"md:flex hidden text-gray-900 font-semibold text-[22px]",children:l}),(0,t.jsx)("ul",{className:"flex flex-1 flex-col gap-[80px]",children:s.map((e,l)=>(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{postMeta:e,index:l,articleType:x,screenType:n,language:r})},"".concat(e.title).concat(l)))})]})}},95214:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return r}});var t=s(57437),a=s(83058),x=s(18978),n=e=>{let{allTags:l,language:s,screenType:x}=e;return(0,t.jsx)("section",{className:"xl:flex flex-col hidden w-[320px] h-full",children:(0,t.jsxs)("div",{className:"flex flex-col gap-[40px] w-full sticky top-[120px]",children:[(0,t.jsx)("h2",{className:"flex text-gray-900 font-semibold text-[22px]",children:"관심"}),(0,t.jsx)("ul",{className:"flex flex-row flex-wrap w-full gap-[10px]",children:l.map((e,l)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.path,onClick:t=>{var n;return n=e.name,void a.B("click_tag",{index:l,name:n,language:s,screen:x})},children:(0,t.jsx)("div",{className:"px-[12px] py-[8px] border-[1px] border-gray-300 text-gray-900 text-[16px]",children:e.name})})},"".concat(e).concat(l)))})]})})},r=e=>{let{allPostsMeta:l,allTags:s,language:a}=e,r="HOME";return(0,t.jsx)("main",{className:"flex w-full justify-center",children:(0,t.jsxs)("div",{className:"flex flex-row justify-start xl:w-[1200px] w-full px-[20px] py-[40px] md:px-[40px] md:pb-[80px] md:pt-[60px] gap-[80px]",children:[(0,t.jsx)(x.Z,{allPostsMeta:l,title:"전체글 (".concat(l.length,")"),articleType:"최신글",screenType:r,language:a}),(0,t.jsx)(n,{allTags:s,language:a,screenType:r})]})})}},28895:function(e,l,s){"use strict";s.r(l),s.d(l,{HeaderType:function(){return a},default:function(){return h}});var t,a,x=s(57437),n=s(16691),r=s.n(n),c=s(83058),i=e=>{let{screenType:l,language:s}=e;return(0,x.jsxs)("a",{href:"/".concat(s,"/profile"),onClick:e=>{c.B("click_btn",{event:"click_btn",name:"프로필",language:s,screen:l})},children:[(0,x.jsx)("div",{className:"sm:flex hidden items-center h-[40px] px-[18px] rounded-[100px] bg-gray-900",children:(0,x.jsx)(r(),{width:24,height:24,src:"/i_person.png",alt:"프로필 아이콘"})}),(0,x.jsx)("div",{className:"sm:hidden flex justify-center items-center h-[40px] w-[40px]",children:(0,x.jsx)(r(),{width:28,height:28,src:"/i_person_dark.png",alt:"프로필 아이콘"})})]})},p=e=>{let{screenType:l,language:s}=e,t="검색";return(0,x.jsxs)("a",{href:"/".concat(s,"/search"),onClick:e=>{c.B("click_btn",{event:"click_btn",name:t,language:s,screen:l})},children:[(0,x.jsxs)("div",{className:"sm:flex hidden items-center h-[40px] px-[18px]  rounded-[100px] text-[15px] text-gray-100 gap-[4px] bg-gray-900",children:[(0,x.jsx)(r(),{width:20,height:20,src:"/search.png",alt:"검색 아이콘"}),t]}),(0,x.jsx)("div",{className:"sm:hidden flex justify-center items-center h-[40px] w-[40px]",children:(0,x.jsx)(r(),{className:"sm:hidden",width:22,height:22,src:"/search_dark.png",alt:"검색 아이콘"})})]})},d=e=>{let{screenType:l,language:s="kr"}=e;return(0,x.jsx)("a",{href:"kr"==s?"/":"/"+s,onClick:e=>{c.B("click_btn",{name:"로고",language:s,screen:l})},children:(0,x.jsxs)("div",{className:"flex flex-row items-center text-[26px] leading-[-20px] tracking-tight gap-[16px]",children:[(0,x.jsx)(r(),{className:"sm:block hidden",width:50,height:50,src:"/headerLogo.png",alt:"로고"}),"달마야 여행가자"]})})};(t=a||(a={}))[t.SCROLL_TOP=0]="SCROLL_TOP",t[t.SCROLL_DOWN=1]="SCROLL_DOWN";var h=e=>{let{language:l,screenType:s}=e;return(0,x.jsx)("div",{className:"flex flex-col w-full fixed top-[0px] z-50",children:(0,x.jsx)("header",{className:"flex flex-row justify-center w-[100%] sm:h-[80px] h-[60px] border-b-[1px] border-gray-900 z-50 bg-white",children:(0,x.jsxs)("div",{className:"flex justify-between items-center xl:w-[1200px] w-[100%] sm:px-[40px] px-[20px]",children:[(0,x.jsx)(d,{language:l,screenType:s}),(0,x.jsx)("nav",{children:(0,x.jsxs)("ul",{className:"flex flex-row md:gap-[20px] gap-[10px]",children:[(0,x.jsx)("li",{children:(0,x.jsx)(p,{screenType:s,language:l})}),(0,x.jsx)("li",{children:(0,x.jsx)(i,{screenType:s,language:l})})]})})]})})})}},83058:function(e,l,s){"use strict";s.d(l,{B:function(){return t}});let t=(e,l)=>{window.gtag("event",e,{...l})}}},function(e){e.O(0,[986,396,971,596,744],function(){return e(e.s=96087)}),_N_E=e.O()}]);