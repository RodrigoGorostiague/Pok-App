"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[236],{5236:(B,l,e)=>{e.r(l),e.d(l,{createSwipeBackGesture:()=>p});var g=e(3630),u=e(6416),m=e(441);const p=(n,M,v,P,X)=>{const i=n.ownerDocument.defaultView;let o=(0,u.i)(n);const d=t=>o?-t.deltaX:t.deltaX;return(0,m.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(o=(0,u.i)(n),(t=>{const{startX:s}=t;return o?s>=i.innerWidth-50:s<=50})(t)&&M()),onStart:v,onMove:t=>{const s=d(t)/i.innerWidth;P(s)},onEnd:t=>{const r=d(t),s=i.innerWidth,c=r/s,a=(t=>o?-t.velocityX:t.velocityX)(t),h=a>=0&&(a>.2||r>s/2),E=(h?1-c:c)*s;let D=0;if(E>5){const y=E/Math.abs(a);D=Math.min(y,540)}X(h,c<=0?.01:(0,g.m)(0,c,.9999),D)}})}}}]);