import{S as x,i as $,s as ee,C as K,k as b,a as S,K as P,l as D,m as p,h as m,c as V,L as M,n as t,M as I,p as O,b as te,D as h,N as Q,O as se,E as R,F as U,G as X,f as j,t as H,P as le,Q as J,R as T}from"./index-1f36319e.js";const ae=a=>({}),Y=a=>({}),re=a=>({}),Z=a=>({});function ie(a){let l,i,w,E,n,z,y,e,o,_,L,u,d,f,g,B,W;const F=a[5].left,c=K(F,a,a[4],Z),N=a[5].right,v=K(N,a,a[4],Y);return{c(){l=b("div"),i=b("div"),c&&c.c(),E=S(),n=b("div"),v&&v.c(),y=S(),e=b("span"),o=P("svg"),_=P("path"),L=S(),u=P("svg"),d=P("path"),this.h()},l(s){l=D(s,"DIV",{class:!0,id:!0});var r=p(l);i=D(r,"DIV",{class:!0,id:!0,draggable:!0});var k=p(i);c&&c.l(k),k.forEach(m),E=V(r),n=D(r,"DIV",{class:!0,id:!0,draggable:!0});var q=p(n);v&&v.l(q),q.forEach(m),y=V(r),e=D(r,"SPAN",{id:!0,class:!0});var C=p(e);o=M(C,"svg",{id:!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var A=p(o);_=M(A,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),p(_).forEach(m),A.forEach(m),L=V(C),u=M(C,"svg",{id:!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var G=p(u);d=M(G,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),p(d).forEach(m),G.forEach(m),C.forEach(m),r.forEach(m),this.h()},h(){t(i,"class",w=I(a[3].class)+" svelte-wwzrgh"),t(i,"id","left"),t(i,"draggable","false"),t(n,"class",z=I(a[3].class)+" svelte-wwzrgh"),t(n,"id","right"),t(n,"draggable","false"),t(_,"fill-rule","evenodd"),t(_,"d","M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"),t(_,"clip-rule","evenodd"),t(o,"id","left-handle"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"viewBox","0 0 20 20"),t(o,"fill","currentColor"),t(o,"class","svelte-wwzrgh"),t(d,"fill-rule","evenodd"),t(d,"d","M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"),t(d,"clip-rule","evenodd"),t(u,"id","right-handle"),t(u,"xmlns","http://www.w3.org/2000/svg"),t(u,"viewBox","0 0 20 20"),t(u,"fill","currentColor"),t(u,"class","svelte-wwzrgh"),t(e,"id","handle"),t(e,"class","svelte-wwzrgh"),t(l,"class",f=I(a[3].class)+" svelte-wwzrgh"),t(l,"id","container"),O(l,"--position",a[1].format(a[0]))},m(s,r){te(s,l,r),h(l,i),c&&c.m(i,null),h(l,E),h(l,n),v&&v.m(n,null),h(l,y),h(l,e),h(e,o),h(o,_),h(e,L),h(e,u),h(u,d),g=!0,B||(W=[Q(i,"dragstart",ne),Q(n,"dragstart",oe),se(a[2].call(null,e))],B=!0)},p(s,[r]){c&&c.p&&(!g||r&16)&&R(c,F,s,s[4],g?X(F,s[4],r,re):U(s[4]),Z),(!g||r&8&&w!==(w=I(s[3].class)+" svelte-wwzrgh"))&&t(i,"class",w),v&&v.p&&(!g||r&16)&&R(v,N,s,s[4],g?X(N,s[4],r,ae):U(s[4]),Y),(!g||r&8&&z!==(z=I(s[3].class)+" svelte-wwzrgh"))&&t(n,"class",z),(!g||r&8&&f!==(f=I(s[3].class)+" svelte-wwzrgh"))&&t(l,"class",f),r&1&&O(l,"--position",s[1].format(s[0]))},i(s){g||(j(c,s),j(v,s),g=!0)},o(s){H(c,s),H(v,s),g=!1},d(s){s&&m(l),c&&c.d(s),v&&v.d(s),B=!1,le(W)}}}const ne=()=>!1,oe=()=>!1;function ue(a,l,i){let{$$slots:w={},$$scope:E}=l,{position:n=.5}=l;const z=Intl.NumberFormat("en",{style:"percent",minimumFractionDigits:6});function y(e){let o=!1,_=0;function L(f){f.isPrimary&&(o=!0,_=e.parentElement.clientWidth*n,e.setPointerCapture(f.pointerId))}function u(f){f.isPrimary&&o&&(_+=f.offsetX-2,i(0,n=Math.max(Math.min(_/e.parentElement.clientWidth,1),0)))}function d(f){f.isPrimary&&(o=!1,e.releasePointerCapture(f.pointerId))}return e.addEventListener("pointerdown",L,{passive:!0}),e.addEventListener("pointermove",u,{passive:!0}),e.addEventListener("pointerup",d,{passive:!0}),e.addEventListener("pointercancel",d,{passive:!0}),{destroy(){e.removeEventListener("pointerdown",L),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",d),e.removeEventListener("pointercancel",d)}}}return a.$$set=e=>{i(3,l=J(J({},l),T(e))),"position"in e&&i(0,n=e.position),"$$scope"in e&&i(4,E=e.$$scope)},l=T(l),[n,z,y,l,E,w]}class ce extends x{constructor(l){super(),$(this,l,ue,ie,ee,{position:0})}}export{ce as I};
