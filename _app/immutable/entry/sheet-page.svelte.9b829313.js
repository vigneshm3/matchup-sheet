import{S as ee,i as te,s as le,k as I,q as V,a as H,l as b,m as D,r as y,h,c as k,n as P,b as q,G as c,u as M,H as X,J as se,g as C,f as ae,d as J,K as ne,I as ie,L as oe,y as re,z as ce,A as fe,M as ue,N as _e,B as he,v as me}from"../chunks/index.d5e2cb91.js";import{p as ve}from"../chunks/stores.54ca4daa.js";const Y=function(s){return s.length>500?s.substring(0,500)+"...":s};function de(s){let e,a,f,m,l,_,g,v,i,K,d,n,R,t,u,o,p,w,T,B,z,G,S,j=Y(s[5])+"",A;return{c(){e=I("div"),a=I("div"),f=V(s[0]),m=H(),l=I("div"),_=V(s[4]),g=H(),v=I("div"),i=V(s[1]),K=H(),d=I("div"),n=V("Runes"),R=H(),t=I("div"),u=V(s[2]),o=H(),p=I("div"),w=V("Items"),T=H(),B=I("div"),z=V(s[3]),G=H(),S=I("p"),A=V(j),this.h()},l(E){e=b(E,"DIV",{class:!0});var r=D(e);a=b(r,"DIV",{class:!0});var L=D(a);f=y(L,s[0]),L.forEach(h),m=k(r),l=b(r,"DIV",{class:!0});var N=D(l);_=y(N,s[4]),N.forEach(h),g=k(r),v=b(r,"DIV",{class:!0});var Z=D(v);i=y(Z,s[1]),Z.forEach(h),K=k(r),d=b(r,"DIV",{class:!0});var F=D(d);n=y(F,"Runes"),F.forEach(h),R=k(r),t=b(r,"DIV",{class:!0});var O=D(t);u=y(O,s[2]),O.forEach(h),o=k(r),p=b(r,"DIV",{class:!0});var Q=D(p);w=y(Q,"Items"),Q.forEach(h),T=k(r),B=b(r,"DIV",{class:!0});var U=D(B);z=y(U,s[3]),U.forEach(h),G=k(r),S=b(r,"P",{});var W=D(S);A=y(W,j),W.forEach(h),r.forEach(h),this.h()},h(){P(a,"class","name svelte-g587or"),P(l,"class","difficulty svelte-g587or"),P(v,"class","level svelte-g587or"),P(d,"class","subtitle svelte-g587or"),P(t,"class","level svelte-g587or"),P(p,"class","subtitle svelte-g587or"),P(B,"class","level svelte-g587or"),P(e,"class","card svelte-g587or")},m(E,r){q(E,e,r),c(e,a),c(a,f),c(e,m),c(e,l),c(l,_),c(e,g),c(e,v),c(v,i),c(e,K),c(e,d),c(d,n),c(e,R),c(e,t),c(t,u),c(e,o),c(e,p),c(p,w),c(e,T),c(e,B),c(B,z),c(e,G),c(e,S),c(S,A)},p(E,[r]){r&1&&M(f,E[0]),r&16&&M(_,E[4]),r&2&&M(i,E[1]),r&4&&M(u,E[2]),r&8&&M(z,E[3]),r&32&&j!==(j=Y(E[5])+"")&&M(A,j)},i:X,o:X,d(E){E&&h(e)}}}function ge(s,e,a){let{champion_name:f="Teemo"}=e,{levelling:m="Hard"}=e,{runes:l="Predator"}=e,{items:_="Kraken"}=e,{difficulty:g="EZ"}=e,{comments:v="Kill"}=e;return s.$$set=i=>{"champion_name"in i&&a(0,f=i.champion_name),"levelling"in i&&a(1,m=i.levelling),"runes"in i&&a(2,l=i.runes),"items"in i&&a(3,_=i.items),"difficulty"in i&&a(4,g=i.difficulty),"comments"in i&&a(5,v=i.comments)},[f,m,l,_,g,v]}class pe extends ee{constructor(e){super(),te(this,e,ge,de,le,{champion_name:0,levelling:1,runes:2,items:3,difficulty:4,comments:5})}}function x(s,e,a){const f=s.slice();return f[3]=e[a],f}function $(s){let e,a;const f=[s[3]];let m={};for(let l=0;l<f.length;l+=1)m=oe(m,f[l]);return e=new pe({props:m}),{c(){re(e.$$.fragment)},l(l){ce(e.$$.fragment,l)},m(l,_){fe(e,l,_),a=!0},p(l,_){const g=_&1?ue(f,[_e(l[3])]):{};e.$set(g)},i(l){a||(C(e.$$.fragment,l),a=!0)},o(l){J(e.$$.fragment,l),a=!1},d(l){he(e,l)}}}function Ee(s){let e,a,f,m,l,_,g,v,i,K;document.title=e=s[1].data.title;let d=s[0],n=[];for(let t=0;t<d.length;t+=1)n[t]=$(x(s,d,t));const R=t=>J(n[t],1,1,()=>{n[t]=null});return{c(){a=H(),f=I("h1"),m=V("Hello!"),l=H(),_=I("h3"),g=V("This page has matchup info"),v=H(),i=I("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){se("svelte-13v4y7l",document.head).forEach(h),a=k(t),f=b(t,"H1",{});var o=D(f);m=y(o,"Hello!"),o.forEach(h),l=k(t),_=b(t,"H3",{});var p=D(_);g=y(p,"This page has matchup info"),p.forEach(h),v=k(t),i=b(t,"DIV",{class:!0});var w=D(i);for(let T=0;T<n.length;T+=1)n[T].l(w);w.forEach(h),this.h()},h(){P(i,"class","container svelte-uwf32p")},m(t,u){q(t,a,u),q(t,f,u),c(f,m),q(t,l,u),q(t,_,u),c(_,g),q(t,v,u),q(t,i,u);for(let o=0;o<n.length;o+=1)n[o].m(i,null);K=!0},p(t,[u]){if((!K||u&2)&&e!==(e=t[1].data.title)&&(document.title=e),u&1){d=t[0];let o;for(o=0;o<d.length;o+=1){const p=x(t,d,o);n[o]?(n[o].p(p,u),C(n[o],1)):(n[o]=$(p),n[o].c(),C(n[o],1),n[o].m(i,null))}for(me(),o=d.length;o<n.length;o+=1)R(o);ae()}},i(t){if(!K){for(let u=0;u<d.length;u+=1)C(n[u]);K=!0}},o(t){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)J(n[u]);K=!1},d(t){t&&h(a),t&&h(f),t&&h(l),t&&h(_),t&&h(v),t&&h(i),ne(n,t)}}}function Ie(s,e,a){let f,m;ie(s,ve,_=>a(1,m=_));let l=m.data.matchup_data;return a(0,f=l),[f,m]}class Ve extends ee{constructor(e){super(),te(this,e,Ie,Ee,le,{})}}export{Ve as default};
