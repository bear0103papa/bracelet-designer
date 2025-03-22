"use strict";(self.webpackChunkcrystal_jewelry=self.webpackChunkcrystal_jewelry||[]).push([[234],{540:(e,r,i)=>{i.d(r,{A:()=>h});var t=i(464),o=i(276),n=i(579);const s=t.Ay.div`
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`,d=t.Ay.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
`,a=t.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`,p=t.Ay.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
  }
`,l=t.Ay.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=t.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px dashed #ccc;
  border-radius: 50%;
`,c=t.Ay.img`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  transform-origin: ${e=>-e.radius+"px 0px"};
  transform: ${e=>`\n    translate(-50%, -50%)\n    rotate(${e.angle}deg)\n  `};
  left: 100%;
  top: 50%;
  object-fit: cover;
`,g=t.Ay.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;

  ${p}:hover & {
    opacity: 1;
  }
`,h=()=>{const{currentDesign:e,setCurrentDesign:r,savedDesigns:i=[],setSavedDesigns:t}=(0,o.c)(),h=e=>{const r=e.size;return e.crystals.map(((i,t)=>{const o=e.crystals.slice(0,t).reduce(((e,r)=>e+r.size),0)/r*360,s=i.size/r*80*Math.PI,d=(80-s)/2;return(0,n.jsx)(c,{src:i.image,size:s,angle:o,radius:d,alt:i.name,onError:e=>{e.target.src="/assets/placeholder.jpg"}},`${i.id}-${t}`)}))};return(0,n.jsxs)(s,{children:[(0,n.jsx)(d,{children:"\u5df2\u5132\u5b58\u8a2d\u8a08"}),(0,n.jsx)(a,{children:(i||[]).map((e=>(0,n.jsxs)(p,{onClick:()=>(e=>{r({...e})})(e),children:[(0,n.jsx)(l,{children:(0,n.jsx)(x,{children:h(e)})}),(0,n.jsx)(g,{onClick:r=>((e,r)=>{e.stopPropagation();const o=i.filter((e=>e.id!==r));t(o),localStorage.setItem("savedDesigns",JSON.stringify(o))})(r,e.id),children:"\xd7"})]},e.id)))})]})}},996:(e,r,i)=>{i.r(r),i.d(r,{default:()=>y});var t=i(43),o=i(464),n=i(540),s=i(276),d=i(579);o.Ay.div`
  margin-bottom: 20px;
`,o.Ay.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
`,o.Ay.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`,o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;const a=o.Ay.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.active?"#666":"#fff"};
  color: ${e=>e.active?"#fff":"#333"};
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 16px;
  
  &:hover {
    background: ${e=>e.active?"#666":"#f0f0f0"};
  }
`,p=((0,o.Ay)(a)`
  width: 80px;
  height: 50px;
  border-radius: 25px;
  padding: 0 15px;
`,o.Ay.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`,o.Ay.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`,o.Ay.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`,o.Ay.div`
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`),l=o.Ay.div`
  margin-bottom: 24px;
`,x=o.Ay.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
`,c=o.Ay.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: right;
  color: #333;
`,g=o.Ay.button`
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #45a049;
  }
`,h=o.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`,u=o.Ay.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`,f=o.Ay.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`,y=()=>{const{currentDesign:e}=(0,s.c)(),[r,i]=(0,t.useState)(!1),[o,a]=(0,t.useState)(!1);return(0,d.jsxs)(p,{children:[(0,d.jsx)(l,{children:(0,d.jsx)(n.A,{})}),(0,d.jsxs)(l,{children:[(0,d.jsx)(x,{children:"\u8a02\u8cfc\u8cc7\u8a0a"}),(0,d.jsxs)(c,{children:["\u7e3d\u91d1\u984d: NT$ ",e.crystals.reduce(((e,r)=>e+r.price),0)]}),(0,d.jsx)(g,{onClick:()=>{i(!0)},children:"\u4e0b\u55ae"}),r&&(0,d.jsxs)(h,{onSubmit:e=>{e.preventDefault();new FormData(e.target);a(!0),i(!1)},children:[(0,d.jsx)(u,{name:"name",placeholder:"\u59d3\u540d",required:!0}),(0,d.jsx)(u,{name:"email",type:"email",placeholder:"Email",required:!0}),(0,d.jsx)(f,{name:"address",placeholder:"\u9001\u8ca8\u5730\u5740",required:!0}),(0,d.jsx)(g,{type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]}),o&&(0,d.jsx)("div",{style:{color:"#4CAF50",textAlign:"center",marginTop:"10px"},children:"\u8a02\u8cfc\u6210\u529f\uff01"})]})]})}}}]);
//# sourceMappingURL=234.78a99578.chunk.js.map