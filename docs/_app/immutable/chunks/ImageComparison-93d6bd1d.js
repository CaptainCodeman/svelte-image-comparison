import{S as x,i as $,s as ee,C as K,k as P,a as V,K as D,l as M,m as h,h as g,c as z,L as B,n as t,M as y,p as O,b as te,D as p,N as Q,O as se,E as R,F as U,G as X,f as j,t as H,P as le,Q as J,R as T}from"./index-a0e11c75.js";const ae=a=>({}),Y=a=>({}),re=a=>({}),Z=a=>({});function ie(a){let l,i,w,E,n,L,C,e,o,_,I,u,d,f,m,F,W;const N=a[5].left,c=K(N,a,a[4],Z),S=a[5].right,v=K(S,a,a[4],Y);return{c(){l=P("div"),i=P("div"),c&&c.c(),E=V(),n=P("div"),v&&v.c(),C=V(),e=P("span"),o=D("svg"),_=D("path"),I=V(),u=D("svg"),d=D("path"),this.h()},l(s){l=M(s,"DIV",{class:!0,id:!0});var r=h(l);i=M(r,"DIV",{class:!0,id:!0,draggable:!0});var k=h(i);c&&c.l(k),k.forEach(g),E=z(r),n=M(r,"DIV",{class:!0,id:!0,draggable:!0});var q=h(n);v&&v.l(q),q.forEach(g),C=z(r),e=M(r,"SPAN",{id:!0,class:!0});var b=h(e);o=B(b,"svg",{id:!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var A=h(o);_=B(A,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),h(_).forEach(g),A.forEach(g),I=z(b),u=B(b,"svg",{id:!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var G=h(u);d=B(G,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),h(d).forEach(g),G.forEach(g),b.forEach(g),r.forEach(g),this.h()},h(){t(i,"class",w=y(a[3].class)+" svelte-wss513"),t(i,"id","left"),t(i,"draggable","false"),t(n,"class",L=y(a[3].class)+" svelte-wss513"),t(n,"id","right"),t(n,"draggable","false"),t(_,"fill-rule","evenodd"),t(_,"d","M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"),t(_,"clip-rule","evenodd"),t(o,"id","left-handle"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"viewBox","0 0 20 20"),t(o,"fill","currentColor"),t(o,"class","svelte-wss513"),t(d,"fill-rule","evenodd"),t(d,"d","M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"),t(d,"clip-rule","evenodd"),t(u,"id","right-handle"),t(u,"xmlns","http://www.w3.org/2000/svg"),t(u,"viewBox","0 0 20 20"),t(u,"fill","currentColor"),t(u,"class","svelte-wss513"),t(e,"id","handle"),t(e,"class","svelte-wss513"),t(l,"class",f=y(a[3].class)+" svelte-wss513"),t(l,"id","container"),O(l,"--position",a[1].format(a[0]))},m(s,r){te(s,l,r),p(l,i),c&&c.m(i,null),p(l,E),p(l,n),v&&v.m(n,null),p(l,C),p(l,e),p(e,o),p(o,_),p(e,I),p(e,u),p(u,d),m=!0,F||(W=[Q(i,"dragstart",ne),Q(n,"dragstart",oe),se(a[2].call(null,e))],F=!0)},p(s,[r]){c&&c.p&&(!m||r&16)&&R(c,N,s,s[4],m?X(N,s[4],r,re):U(s[4]),Z),(!m||r&8&&w!==(w=y(s[3].class)+" svelte-wss513"))&&t(i,"class",w),v&&v.p&&(!m||r&16)&&R(v,S,s,s[4],m?X(S,s[4],r,ae):U(s[4]),Y),(!m||r&8&&L!==(L=y(s[3].class)+" svelte-wss513"))&&t(n,"class",L),(!m||r&8&&f!==(f=y(s[3].class)+" svelte-wss513"))&&t(l,"class",f),r&1&&O(l,"--position",s[1].format(s[0]))},i(s){m||(j(c,s),j(v,s),m=!0)},o(s){H(c,s),H(v,s),m=!1},d(s){s&&g(l),c&&c.d(s),v&&v.d(s),F=!1,le(W)}}}const ne=()=>!1,oe=()=>!1;function ue(a,l,i){let{$$slots:w={},$$scope:E}=l,{position:n=.5}=l;const L=Intl.NumberFormat("en",{style:"percent",minimumFractionDigits:6});function C(e){let o=!1,_=0;function I(f){f.isPrimary&&(o=!0,_=e.parentElement.clientWidth*n,e.setPointerCapture(f.pointerId))}function u(f){f.isPrimary&&o&&(_+=f.offsetX-2,i(0,n=Math.max(Math.min(_/e.parentElement.clientWidth,1),0)))}function d(f){f.isPrimary&&(o=!1,e.releasePointerCapture(f.pointerId))}return e.addEventListener("pointerdown",I,{passive:!0}),e.addEventListener("pointermove",u,{passive:!0}),e.addEventListener("pointerup",d,{passive:!0}),e.addEventListener("pointercancel",d,{passive:!0}),{destroy(){e.removeEventListener("pointerdown",I),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",d),e.removeEventListener("pointercancel",d)}}}return a.$$set=e=>{i(3,l=J(J({},l),T(e))),"position"in e&&i(0,n=e.position),"$$scope"in e&&i(4,E=e.$$scope)},l=T(l),[n,L,C,l,E,w]}class ce extends x{constructor(l){super(),$(this,l,ue,ie,ee,{position:0})}}export{ce as I};