"use strict";(self.webpackChunkcrystal_jewelry=self.webpackChunkcrystal_jewelry||[]).push([[234],{540:(e,r,i)=>{i.d(r,{A:()=>f});var t=i(464),n=i(276),o=i(579);const d=t.Ay.div`
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,a=t.Ay.h3`
  margin-bottom: 16px;
  font-size: 18px;
  color: #333;
  text-align: center;
  flex-shrink: 0;
`,s=t.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  overflow-y: auto;
  flex-grow: 1;
  padding: 4px;
`,l=t.Ay.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #ddd;
  }
`,p=t.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,x=t.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
`,c=t.Ay.img`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform-origin: center;
  object-fit: cover;
  transform: ${e=>`\n    translate(-50%, -50%)\n    rotate(${e.angle}deg)\n    translateX(${e.radius}px)\n    rotate(${-e.angle}deg)\n  `};
`,g=t.Ay.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, background-color 0.2s;
  padding: 0;
  font-size: 14px;
  line-height: 1;

  ${l}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`,h=t.Ay.div`
  text-align: center;
  color: #888;
  padding: 30px;
  font-size: 14px;
`,f=()=>{const{currentDesign:e,setCurrentDesign:r,savedDesigns:i=[],setSavedDesigns:t}=(0,n.c)(),f=e=>{if(!e||!e.crystals||0===e.crystals.length)return null;const r=e.crystals.length;return e.crystals.map(((e,i)=>{const t=i/r*360,n=22+10*Math.min(1,e.size/10);return(0,o.jsx)(c,{src:e.image,size:n,angle:t,radius:60,alt:e.name||"bead",onError:e=>{e.target.src="/placeholder.jpg"}},`${e.id||i}-${i}`)}))};return(0,o.jsxs)(d,{children:[(0,o.jsx)(a,{children:"\u5df2\u5132\u5b58\u8a2d\u8a08"}),i&&i.length>0?(0,o.jsx)(s,{children:i.map((e=>(0,o.jsxs)(l,{onClick:()=>(e=>{r({...e})})(e),children:[(0,o.jsx)(p,{children:(0,o.jsx)(x,{children:f(e)})}),(0,o.jsx)(g,{onClick:r=>((e,r)=>{e.stopPropagation();const n=i.filter((e=>e.id!==r));t(n),localStorage.setItem("savedDesigns",JSON.stringify(n))})(r,e.id),children:"\xd7"})]},e.id)))}):(0,o.jsx)(h,{children:"\u5c1a\u7121\u5132\u5b58\u7684\u8a2d\u8a08"})]})}},996:(e,r,i)=>{i.r(r),i.d(r,{default:()=>b});var t=i(43),n=i(464),o=i(540),d=i(276),a=i(579);n.Ay.div`
  margin-bottom: 20px;
`,n.Ay.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
`,n.Ay.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`,n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;const s=n.Ay.button`
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
`,l=((0,n.Ay)(s)`
  width: 80px;
  height: 50px;
  border-radius: 25px;
  padding: 0 15px;
`,n.Ay.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`,n.Ay.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`,n.Ay.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`,n.Ay.div`
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`),p=n.Ay.div`
  margin-bottom: 24px;
`,x=n.Ay.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
`,c=n.Ay.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: right;
  color: #333;
`,g=n.Ay.button`
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
`,h=n.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`,f=n.Ay.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`,u=n.Ay.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`,b=()=>{const{currentDesign:e}=(0,d.c)(),[r,i]=(0,t.useState)(!1),[n,s]=(0,t.useState)(!1);return(0,a.jsxs)(l,{children:[(0,a.jsx)(p,{children:(0,a.jsx)(o.A,{})}),(0,a.jsxs)(p,{children:[(0,a.jsx)(x,{children:"\u8a02\u8cfc\u8cc7\u8a0a"}),(0,a.jsxs)(c,{children:["\u7e3d\u91d1\u984d: NT$ ",e.crystals.reduce(((e,r)=>e+r.price),0)]}),(0,a.jsx)(g,{onClick:()=>{i(!0)},children:"\u4e0b\u55ae"}),r&&(0,a.jsxs)(h,{onSubmit:e=>{e.preventDefault();new FormData(e.target);s(!0),i(!1)},children:[(0,a.jsx)(f,{name:"name",placeholder:"\u59d3\u540d",required:!0}),(0,a.jsx)(f,{name:"email",type:"email",placeholder:"Email",required:!0}),(0,a.jsx)(u,{name:"address",placeholder:"\u9001\u8ca8\u5730\u5740",required:!0}),(0,a.jsx)(g,{type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]}),n&&(0,a.jsx)("div",{style:{color:"#4CAF50",textAlign:"center",marginTop:"10px"},children:"\u8a02\u8cfc\u6210\u529f\uff01"})]})]})}}}]);
//# sourceMappingURL=234.b3ef5829.chunk.js.map