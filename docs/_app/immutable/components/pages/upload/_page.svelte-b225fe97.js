import{S as A,i as $,s as D,k as p,a as T,w as I,l as g,m as h,c as P,x as k,h as u,n as m,b as v,D as w,y as z,O as L,f as C,t as U,z as q,q as O,r as R,T as S,B as V,U as j}from"../../../chunks/index-1f36319e.js";import{I as x}from"../../../chunks/ImageComparison-b9850665.js";import{t as F}from"../../../chunks/index-0c6a8077.js";function N(l,e){function t(s){s.stopPropagation(),s.preventDefault(),l.setAttribute("dragging",""),s.dataTransfer.dropEffect="copy"}function a(s){s.stopPropagation(),s.preventDefault(),l.removeAttribute("dragging"),s.dataTransfer.dropEffect="copy"}function n(s){s.stopPropagation(),s.preventDefault(),l.setAttribute("dragging",""),s.dataTransfer.dropEffect="copy"}function r(s){s.stopPropagation(),s.preventDefault(),l.removeAttribute("dragging");var o=s.dataTransfer;for(let i=0;i<o.items.length;i++){const c=o.items[i];if(c.kind==="file"){const d=c.getAsFile();d&&e(d)}}}return document.addEventListener("dragenter",t,!1),document.addEventListener("dragleave",a,!1),document.addEventListener("dragover",n,!1),document.addEventListener("drop",r,!1),{destroy(){document.removeEventListener("dragenter",t),document.removeEventListener("dragleave",a),document.removeEventListener("dragover",n),document.removeEventListener("drop",r)}}}function E(l){let e,t;return{c(){e=p("p"),t=O("Drop two same-size images onto the page to compare ..."),this.h()},l(a){e=g(a,"P",{class:!0});var n=h(e);t=R(n,"Drop two same-size images onto the page to compare ..."),n.forEach(u),this.h()},h(){m(e,"class","absolute m-4 text-gray-600 z-10")},m(a,n){v(a,e,n),w(e,t)},d(a){a&&u(e)}}}function B(l){let e,t,a,n;return{c(){e=p("canvas"),this.h()},l(r){e=g(r,"CANVAS",{slot:!0,class:!0}),h(e).forEach(u),this.h()},h(){m(e,"slot","left"),m(e,"class","svelte-1q4bapu")},m(r,s){v(r,e,s),a||(n=L(t=F.call(null,e,l[2])),a=!0)},p(r,s){t&&S(t.update)&&s&4&&t.update.call(null,r[2])},d(r){r&&u(e),a=!1,n()}}}function W(l){let e;return{c(){e=p("canvas"),this.h()},l(t){e=g(t,"CANVAS",{slot:!0,id:!0,class:!0}),h(e).forEach(u),this.h()},h(){m(e,"slot","right"),m(e,"id","right"),m(e,"class","svelte-1q4bapu")},m(t,a){v(t,e,a),l[4](e)},p:V,d(t){t&&u(e),l[4](null)}}}function G(l){let e,t,a,n,r,s,o=!l[1]&&E();return a=new x({props:{class:"w-full h-full",$$slots:{right:[W],left:[B]},$$scope:{ctx:l}}}),{c(){e=p("div"),o&&o.c(),t=T(),I(a.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var c=h(e);o&&o.l(c),t=P(c),k(a.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","absolute inset-0")},m(i,c){v(i,e,c),o&&o.m(e,null),w(e,t),z(a,e,null),n=!0,r||(s=L(N.call(null,e,l[3])),r=!0)},p(i,[c]){i[1]?o&&(o.d(1),o=null):o||(o=E(),o.c(),o.m(e,t));const d={};c&517&&(d.$$scope={dirty:c,ctx:i}),a.$set(d)},i(i){n||(C(a.$$.fragment,i),n=!0)},o(i){U(a.$$.fragment,i),n=!1},d(i){i&&u(e),o&&o.d(),q(a),r=!1,s()}}}function H(l){return new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.src=l})}function J(l,e,t){let a,n,r,s,o={width:1920,height:1080,render:i};function i(f){r&&(f.drawImage(r,0,0),s&&(n||(n=a.getContext("2d")),n.save(),n.resetTransform(),t(0,a.width=f.canvas.width,a),t(0,a.height=f.canvas.height,a),n.setTransform(f.getTransform()),n.drawImage(s,0,0),n.restore()))}let c=!0;async function d(f){if(!f.type.startsWith("image/"))return;const _=URL.createObjectURL(f),b=await H(_);URL.revokeObjectURL(_),c?t(1,r=b):s=b,t(2,o={width:r.width,height:r.height,render:i}),c=!c}function y(f){j[f?"unshift":"push"](()=>{a=f,t(0,a)})}return[a,r,o,d,y]}class X extends A{constructor(e){super(),$(this,e,J,G,D,{})}}export{X as default};