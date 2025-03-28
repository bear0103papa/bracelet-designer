"use strict";(self.webpackChunkcrystal_jewelry=self.webpackChunkcrystal_jewelry||[]).push([[48,234],{540:(e,t,r)=>{r.d(t,{A:()=>h});var i=r(464),o=r(276),a=r(579);const n=i.Ay.div`
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`,s=i.Ay.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: #333;
`,l=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`,d=i.Ay.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
  }
`,c=i.Ay.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=i.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px dashed #ccc;
  border-radius: 50%;
`,x=i.Ay.img`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  transform-origin: ${e=>-e.radius+"px 0px"};
  transform: ${e=>`\n    translate(-50%, -50%)\n    rotate(${e.angle}deg)\n  `};
  left: 100%;
  top: 50%;
  object-fit: cover;
`,g=i.Ay.button`
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

  ${d}:hover & {
    opacity: 1;
  }
`,h=()=>{const{currentDesign:e,setCurrentDesign:t,savedDesigns:r=[],setSavedDesigns:i}=(0,o.c)(),h=e=>{const t=e.size;return e.crystals.map(((r,i)=>{const o=e.crystals.slice(0,i).reduce(((e,t)=>e+t.size),0)/t*360,n=r.size/t*80*Math.PI,s=(80-n)/2;return(0,a.jsx)(x,{src:r.image,size:n,angle:o,radius:s,alt:r.name,onError:e=>{e.target.src="/assets/placeholder.jpg"}},`${r.id}-${i}`)}))};return(0,a.jsxs)(n,{children:[(0,a.jsx)(s,{children:"\u5df2\u5132\u5b58\u8a2d\u8a08"}),(0,a.jsx)(l,{children:(r||[]).map((e=>(0,a.jsxs)(d,{onClick:()=>(e=>{t({...e})})(e),children:[(0,a.jsx)(c,{children:(0,a.jsx)(p,{children:h(e)})}),(0,a.jsx)(g,{onClick:t=>((e,t)=>{e.stopPropagation();const o=r.filter((e=>e.id!==t));i(o),localStorage.setItem("savedDesigns",JSON.stringify(o))})(t,e.id),children:"\xd7"})]},e.id)))})]})}},596:(e,t,r)=>{r.r(t),r.d(t,{default:()=>at});var i=r(43),o=r(464),a=r(727),n=r(579);const s=o.Ay.div`
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,l=o.Ay.div`
  flex: 1;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background: ${e=>e.active?"#f0f0f0":"white"};
  font-weight: ${e=>e.active?"bold":"normal"};
  border-bottom: 2px solid ${e=>e.active?"#4a90e2":"transparent"};
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
  }
`,d=e=>{let{currentCategory:t,onCategoryChange:r}=e;(0,a.Zp)();const i=e=>{"helper"===e&&(localStorage.removeItem("crystal_color_filter"),localStorage.removeItem("filter_timestamp"),localStorage.removeItem("redirect_to_helper"),localStorage.removeItem("helper_page")),r(e)};return(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{active:"crystal"===t,onClick:()=>i("crystal"),children:"\u6c34\u6676"}),(0,n.jsx)(l,{active:"accessory"===t,onClick:()=>i("accessory"),children:"\u914d\u4ef6"}),(0,n.jsx)(l,{active:"helper"===t,onClick:()=>i("helper"),children:"\u5c0f\u5e6b\u624b"})]})};var c=r(585),p=r(276);o.Ay.div`
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;const x=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`,g=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`,h=o.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`,u=o.Ay.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
`,m=o.Ay.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
`,f=o.Ay.button`
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`,y=o.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`,b=o.Ay.div`
  font-size: 10px;
  color: #666;
  text-align: center;
`,v=()=>{const{currentDesign:e,setCurrentDesign:t}=(0,p.c)(),[r,o]=(0,i.useState)(null),[a,s]=(0,i.useState)("asc"),[l,d]=(0,i.useState)((()=>{const e=localStorage.getItem("crystalFilters");return e?JSON.parse(e):{color:"",size:"",energy:"",price:""}}));(0,i.useEffect)((()=>{localStorage.setItem("crystalFilters",JSON.stringify(l))}),[l]);const v={color:[...new Set(c.Kb.map((e=>e.color)))],size:["\u5c0f(\u22648mm)","\u4e2d(8-12mm)","\u5927(\u226512mm)"],energy:[...new Set(c.Kb.map((e=>e.energy)))],price:["0-10","11-15","16-20"]},j=()=>e.crystals.reduce(((e,t)=>e+t.size),0),w=c.Kb.filter((e=>!(e=>j()+e.size>300)(e)&&((!l.color||e.color===l.color)&&(!l.power||e.power===l.power)&&(!l.size||("\u5c0f(\u22648mm)"===l.size?e.size<=8:"\u4e2d(8-12mm)"===l.size?e.size>8&&e.size<12:e.size>=12))&&(!l.price||("0-10"===l.price?e.price<=10:"11-15"===l.price?e.price>10&&e.price<=15:e.price>15))))).sort(((e,t)=>{if(!r)return 0;const i="asc"===a?1:-1;return e[r]>t[r]?i:-i})),A=e=>t=>{t.dataTransfer.setData("crystal",JSON.stringify(e))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u,{children:[Object.entries(v).map((e=>{let[t,r]=e;return(0,n.jsxs)(m,{value:l[t],onChange:e=>d({...l,[t]:e.target.value}),children:[(0,n.jsx)("option",{value:"",children:"color"===t?"\u8272\u7cfb":"size"===t?"\u5c3a\u5bf8":"energy"===t?"\u80fd\u91cf":"\u50f9\u683c"}),r.map((e=>(0,n.jsx)("option",{value:e,children:e},e)))]},t)})),(0,n.jsx)(f,{onClick:()=>{const e={color:"",size:"",power:"",price:""};d(e),localStorage.setItem("crystalFilters",JSON.stringify(e))},children:"\u6e05\u9664\u7be9\u9078"})]}),(0,n.jsx)(x,{children:w.map((r=>{(()=>{const t=e.size,r=j();Math.max(0,t-r)})();return(0,n.jsxs)(g,{onClick:()=>(r=>{const i=[...e.crystals,r],o=i.reduce(((e,t)=>e+t.size),0);o>300||(o>e.size?t((e=>({...e,size:o,crystals:i}))):t((e=>({...e,crystals:i}))))})(r),style:{opacity:1,cursor:"pointer"},children:[(0,n.jsx)(h,{src:r.image,alt:r.name,draggable:!0,onDragStart:A(r),onError:e=>{e.target.src="/placeholder.jpg"}}),(0,n.jsx)(y,{children:r.name}),(0,n.jsxs)(b,{children:[r.color," | ",r.size,"mm | ",r.price,"\u5143"]})]},r.id)}))})]})},j=o.Ay.div`
  padding: 20px;
`,w=o.Ay.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`,A=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`,z=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`,S=o.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`,k=o.Ay.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
`,$=o.Ay.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
`,C=o.Ay.button`
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`,D=o.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`,I=o.Ay.div`
  font-size: 10px;
  color: #666;
  text-align: center;
`,M=()=>{const{setCurrentDesign:e,setSelectedCrystal:t}=(0,p.c)(),[r,o]=(0,i.useState)(null),[a,s]=(0,i.useState)("asc"),[l,d]=(0,i.useState)((()=>{const e=localStorage.getItem("accessoryFilters");return e?JSON.parse(e):{color:"",type:"",material:"",price:""}}));(0,i.useEffect)((()=>{localStorage.setItem("accessoryFilters",JSON.stringify(l))}),[l]);const x={color:[...new Set(c.l_.map((e=>e.color)))],type:[...new Set(c.l_.map((e=>e.type)).filter(Boolean))],material:[...new Set(c.l_.map((e=>e.material)).filter(Boolean))],price:["0-10","11-15","16-20"]},g=c.l_.filter((e=>(!l.color||e.color===l.color)&&(!l.type||e.type===l.type)&&(!l.material||e.material===l.material)&&(!l.price||("0-10"===l.price?e.price<=10:"11-15"===l.price?e.price>10&&e.price<=15:e.price>15)))).sort(((e,t)=>{if(!r)return 0;const i="asc"===a?1:-1;return e[r]>t[r]?i:-i})),h=e=>t=>{t.dataTransfer.setData("crystal",JSON.stringify(e))};return(0,n.jsxs)(j,{children:[(0,n.jsx)(w,{children:"\u7cbe\u7f8e\u914d\u4ef6\uff0c\u9ede\u7db4\u624b\u934a"}),(0,n.jsxs)(k,{children:[Object.entries(x).map((e=>{let[t,r]=e;return(0,n.jsxs)($,{value:l[t],onChange:e=>d({...l,[t]:e.target.value}),children:[(0,n.jsx)("option",{value:"",children:"color"===t?"\u8272\u7cfb":"type"===t?"\u985e\u578b":"material"===t?"\u6750\u8cea":"\u50f9\u683c"}),r.map((e=>(0,n.jsx)("option",{value:e,children:e},e)))]},t)})),(0,n.jsx)(C,{onClick:()=>{const e={color:"",type:"",material:"",price:""};d(e),localStorage.setItem("accessoryFilters",JSON.stringify(e))},children:"\u6e05\u9664\u7be9\u9078"})]}),(0,n.jsx)(A,{children:g.map((r=>(0,n.jsxs)(z,{onClick:()=>(r=>{t(r),e((e=>({...e,crystals:[...e.crystals,r]})))})(r),children:[(0,n.jsx)(S,{src:r.image,alt:r.name,draggable:!0,onDragStart:h(r),onError:e=>{e.target.src="/placeholder.jpg"}}),(0,n.jsx)(D,{children:r.name}),(0,n.jsxs)(I,{children:[r.color," | ",r.material||""," | ",r.price,"\u5143"]})]},r.id)))})]})};var _=r(460);const E=o.Ay.div`
  padding: 20px;
`,F=o.Ay.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`,T=o.Ay.div`
  margin-bottom: 24px;
`,N=o.Ay.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`,O=o.Ay.ul`
  list-style: none;
  padding: 0;
`,L=o.Ay.li`
  margin-bottom: 8px;
  color: #333;
`,X=o.Ay.li`
  margin-bottom: 8px;
  color: #333;
`,q=o.Ay.div`
  margin-bottom: 24px;
`,J=()=>{const{selectedCrystal:e}=(0,p.c)();if(!e)return null;e.description;return(0,n.jsxs)(E,{children:[(0,n.jsx)(F,{children:e.name}),(0,n.jsxs)(T,{children:[(0,n.jsx)(N,{children:"\u57fa\u672c\u8cc7\u8a0a"}),(0,n.jsxs)(O,{children:[(0,n.jsxs)(L,{children:["\u8272\u7cfb\uff1a",e.color]}),(0,n.jsxs)(L,{children:["\u5c3a\u5bf8\uff1a",e.size," mm"]}),(0,n.jsxs)(L,{children:["\u80fd\u91cf\uff1a",e.energy]}),(0,n.jsxs)(L,{children:["\u50f9\u683c\uff1aNT$ ",e.price]}),e.zodiac&&(0,n.jsxs)(L,{children:["\u9069\u5408\u661f\u5ea7\uff1a",e.zodiac.join("\u3001")]}),e.chakra&&(0,n.jsxs)(L,{children:["\u8108\u8f2a\uff1a",e.chakra]})]})]}),(0,n.jsx)(q,{children:(e=>Array.isArray(e)?e.map(((e,t)=>(0,n.jsx)(X,{children:e},t))):e?(0,n.jsx)(X,{children:e}):null)(e.description)})]})};var P=r(448);const B=o.Ay.div`
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,W=o.Ay.div`
  position: relative;
  width: 100%;
  height: 500px;
`,K=o.Ay.div`
  position: absolute;
  top: calc(50% + 90px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: all 0.3s ease;
`,Y=o.Ay.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  height: 2px;
  transform-origin: left center;
  z-index: 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`,Z=o.Ay.div`
  position: absolute;
  width: ${e=>e.displaySize}px;
  height: ${e=>e.displaySize}px;
  left: 50%;
  top: 50%;
  transform-origin: center;
  transform: 
    translate(-50%, -50%)
    rotate(${e=>e.angle}deg)
    translateX(${e=>e.radius}px)
    rotate(${e=>e.isAccessory?e.angle>180?"270deg":"90deg":`-${e.angle}deg`});
  transition: all 0.3s ease;
  z-index: ${e=>e.moveMode?e.isSource?3:2:e.size>10?2:1};
  pointer-events: auto;
  border-radius: ${e=>e.isAccessory?"10%":"50%"};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    border-radius: ${e=>e.isAccessory?"10% 10% 0 0 / 20% 20% 0 0":"50% 50% 0 0 / 100% 100% 0 0"};
    pointer-events: none;
  }
  
  ${e=>e.moveMode&&`\n    filter: brightness(${e.isSource?"1.2":e.isTarget?"1":"0.7"});\n    transform: translate(-50%, -50%)\n      rotate(${e.angle}deg)\n      translateX(${e.radius}px)\n      rotate(${e.isAccessory?"90deg":`-${e.angle}`}deg)\n      scale(${e.isSource||e.isTarget?"1.1":"1"});\n    ${e.isTarget?"outline: 2px solid #4a90e2;":""}\n  `}
`,R=o.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.isAccessory?"10%":"50%"};
  position: relative;
  display: block;
`,U=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%);
  pointer-events: none;
`,G=o.Ay.div`
  position: absolute;
  bottom: -20px;
  left: 30%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.show?1:0};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateX(-50%) scale(1.1);
  }
  
  &.drag-over {
    background: rgba(255, 0, 0, 0.3);
    transform: translateX(-50%) scale(1.2);
  }
`,H=o.Ay.div`
  display: none;
  
  @media (max-width: 767px) {
    display: ${e=>e.show?"block":"none"};
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    overflow: hidden;
    cursor: pointer;
  }
`,Q=o.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,V=o.Ay.img`
  position: absolute;
  width: ${e=>.4*e.displaySize}px;
  height: ${e=>.4*e.displaySize}px;
  border-radius: 50%;
  transform-origin: center;
  transform: ${e=>`\n    translate(-50%, -50%)\n    rotate(${e.angle}deg)\n    translateX(${e.radius}px)\n  `};
  left: 50%;
  top: 50%;
  object-fit: cover;
`,ee=o.Ay.button`
  position: absolute;
  top: 90px;
  left: 10px;
  padding: 8px 16px;
  background: rgba(255, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: #ff4444;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`,te=o.Ay.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 1001;
  width: 80%;
  max-width: 300px;
  overflow: hidden;
`,re=o.Ay.button`
  width: 100%;
  padding: 15px;
  border: none;
  background: white;
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:active {
    background: #f5f5f5;
  }
`,ie=o.Ay.div`
  display: ${e=>e.show?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`,oe=o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>e.show?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1100;
  
  @media (max-width: 767px) {
    align-items: flex-start;
    padding-top: 20%;
  }
`,ae=o.Ay.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  
  @media (max-width: 767px) {
    max-height: 70vh;
  }
`,ne=o.Ay.button`
  position: absolute;
  top: 100px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,se=o.Ay.div`
  position: absolute;
  top: 90px;
  right: 10px;
  z-index: 10;
  
  @media (min-width: 768px) {
    top: 95px;
    right: 15px;
  }
`,le=o.Ay.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:hover::after {
    content: "儲存樣式";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
  }
  
  img {
    width: 24px;
    height: 24px;
    
    @media (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }
`,de=o.Ay.div`
  margin: 15px 0;
  text-align: center;
`,ce=o.Ay.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,pe=o.Ay.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`,xe=o.Ay.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`,ge=o.Ay.button`
  width: 45px;
  height: 45px;
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
`,he=(0,o.Ay)(ge)`
  width: 70px;
  height: 45px;
  border-radius: 22.5px;
  padding: 0 15px;
`,ue=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,me=o.Ay.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`,fe=o.Ay.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`,ye=o.Ay.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(74, 144, 226, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`,be=o.Ay.button`
  background: white;
  color: #4a90e2;
  border: none;
  border-radius: 15px;
  padding: 4px 10px;
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #f0f0f0;
  }
`,ve=o.Ay.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`,je=o.Ay.button`
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #3a80d2;
  }
  
  &:nth-child(2) {
    background: #ff6b6b;
    
    &:hover {
      background: #ff5252;
    }
  }
`,we=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  z-index: 10;
`,Ae=o.Ay.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,ze=o.Ay.div`
  display: flex;
  gap: 15px;
`,Se=o.Ay.button`
  padding: 8px 20px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #ff5252;
  }
`,ke=o.Ay.button`
  padding: 8px 20px;
  background: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #e0e0e0;
  }
`,$e=e=>{let{onCrystalClick:t}=e;const{currentDesign:r,setCurrentDesign:o,setSelectedCrystal:a,savedDesigns:s,setSavedDesigns:l}=(0,p.c)(),[d,c]=(0,i.useState)([]),[x,g]=(0,i.useState)(200),[h,u]=(0,i.useState)(null),[m,f]=(0,i.useState)(!1),[y,b]=(0,i.useState)(!1),[v,j]=(0,i.useState)(0),[w,A]=(0,i.useState)(!1),z=r.size/10,[S,k]=(0,i.useState)(z.toString()),[$,C]=(0,i.useState)(""),[D,I]=(0,i.useState)(null),[M,_]=(0,i.useState)(!1),[E,F]=(0,i.useState)(!1),[T,N]=(0,i.useState)(!1),[O,L]=(0,i.useState)(null),[X,q]=(0,i.useState)(!1),[$e,Ce]=(0,i.useState)(window.innerWidth<=767),[De,Ie]=(0,i.useState)(!1),[Me,_e]=(0,i.useState)(""),[Ee,Fe]=(0,i.useState)(0),[Te,Ne]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(r.crystals.length>0){const e=r.size,t=r.crystals.reduce(((e,t)=>e+t.size),0);if(Fe(t),t>e){const r=10*Math.ceil(t/10);return console.log(`\u81ea\u52d5\u8abf\u6574\u624b\u570d\u5c3a\u5bf8\uff1a\u5f9e ${e}mm \u5230 ${r}mm`),void o((e=>({...e,size:r})))}const i=r.crystals.length,a=e/160,n=1/Math.sqrt(a),s=120*Math.sqrt(a),l=[];let d=0;const p=[];for(let o=0;o<i;o++){const e=r.crystals[o];let t=45*(e.size/8)*n;const i=25*n,a=60*n;t=Math.max(i,Math.min(t,a));const l=t/s*(180/Math.PI);p.push({crystal:e,displaySize:t,angleOccupation:l}),d+=l}const x=1.25,g=d/x;let h=0;for(let r=0;r<p.length;r++){const{crystal:e,displaySize:t,angleOccupation:i}=p[r],o=h+i/2;h+=i/x;const a="Accessories"===e.category;l.push({...e,angle:360*o/g,radius:s,displaySize:t,sizeAdjustFactor:n,isAccessory:a})}c(l)}else c([]),Fe(0),f(!1)}),[r]),(0,i.useEffect)((()=>{const e=()=>{const e=window.scrollY>300;A(e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),(0,i.useEffect)((()=>{k(z.toString())}),[z]),(0,i.useEffect)((()=>{const e=()=>{Ce(window.innerWidth<=767)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const Oe=()=>{b(!1)},Le=e=>{o((t=>({...t,crystals:t.crystals.filter(((t,r)=>r!==e))}))),a(null)},Xe=e=>{const t=10*e,i=[...r.crystals];let a=i.reduce(((e,t)=>e+t.size),0);for(;a>t&&i.length>0;){a-=i.pop().size}o((e=>({...e,size:t,crystals:i})))},qe=()=>{o((e=>({...e,crystals:[]}))),c([])},Je=e=>{switch(e){case"info":a(r.crystals[D]),q(!0);break;case"move":return N(!0),L(D),void _(!1);case"delete":Le(D);break;case"clearAll":return void Ne(!0)}_(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(B,{children:(0,n.jsxs)(W,{children:[(0,n.jsx)(se,{children:(0,n.jsx)(le,{onClick:()=>{const e=Date.now().toString(),t={...r,id:e,savedAt:(new Date).toISOString()};l([...s,t])},children:(0,n.jsx)("img",{src:P,alt:"\u5132\u5b58\u6a23\u5f0f"})})}),(0,n.jsx)(ee,{onClick:qe,children:"\u6e05\u9664\u5168\u90e8"}),T&&(0,n.jsxs)(ye,{children:["\u8acb\u9078\u64c7\u8981\u4ea4\u63db\u4f4d\u7f6e\u7684\u6c34\u6676",(0,n.jsx)(be,{onClick:()=>{N(!1),L(null),I(null)},children:"\u53d6\u6d88\u79fb\u52d5"})]}),(0,n.jsxs)(K,{children:[d.length<2?null:d.map(((e,t)=>{const r=(t+1)%d.length,i=d[r],o=e.angle*Math.PI/180,a=i.angle*Math.PI/180,s=e.radius,l=i.radius,c=Math.cos(o)*s,p=Math.sin(o)*s,x=Math.cos(a)*l,g=Math.sin(a)*l,h=Math.sqrt(Math.pow(x-c,2)+Math.pow(g-p,2)),u=180*Math.atan2(g-p,x-c)/Math.PI,m=e.sizeAdjustFactor?1*e.sizeAdjustFactor:1;return(0,n.jsx)(Y,{style:{width:`${h}px`,height:`${m}px`,left:`calc(50% + ${c}px)`,top:`calc(50% + ${p}px)`,transform:`rotate(${u}deg)`,opacity:.3,background:"linear-gradient(to right, rgba(255,255,255,0.7), rgba(220,220,220,0.7))"}},`connection-${t}`)})),d.map(((e,t)=>{const i="accessory"===e.category;return(0,n.jsxs)(Z,{displaySize:e.displaySize,angle:e.angle,radius:e.radius,size:e.size,moveMode:T,isSource:O===t,isTarget:T&&D===t&&O!==t,onClick:e=>((e,t,i)=>{if(i&&i.preventDefault(),T){if(null!==O){const e=[...r.crystals],i=e[O];return e[O]=e[t],e[t]=i,o({...r,crystals:e}),L(null),void N(!1)}L(t)}else{if($e)return I(t),void _(!0);I(t),a(r.crystals[t]),q(!0)}})(0,t,e),draggable:E,onDragStart:e=>((e,t)=>{j(Date.now()),e.dataTransfer.setData("moveBeadIndex",t.toString()),b(!0)})(e,t),onDragEnd:Oe,onDragOver:e=>((e,t)=>{e.preventDefault(),T&&t!==O&&I(t)})(e,t),onDrop:e=>((e,t)=>{if(e.preventDefault(),T&&null!==O&&t!==O){const e=[...r.crystals],i=e[O];return e[O]=e[t],e[t]=i,o((t=>({...t,crystals:e}))),N(!1),L(null),void I(null)}const i=e.dataTransfer.getData("moveBeadIndex");if(i){const e=parseInt(i);if(e!==t){const i=[...r.crystals],a=i[e];i[e]=i[t],i[t]=a,o((e=>({...e,crystals:i})))}b(!1)}})(e,t),isAccessory:i,children:[(0,n.jsx)(R,{src:e.image,alt:`${i?"Accessory":"Crystal"} ${t}`,isAccessory:i,onError:t=>{console.error(`Failed to load image: ${e.image}`),t.target.src="default-crystal.png"}}),(0,n.jsx)(U,{})]},t)}))]}),(0,n.jsxs)(de,{children:[(0,n.jsxs)(ce,{children:["\u624b\u570d\u5c3a\u5bf8",(0,n.jsx)(pe,{children:"(cm)"})]}),(0,n.jsxs)(xe,{children:[[14,15,16,17,18].map((e=>(0,n.jsx)(ge,{active:z===e,onClick:()=>Xe(e),children:e},e))),(0,n.jsx)(he,{onClick:()=>{Ie(!0),_e(z.toString())},children:"\u81ea\u8a02"})]}),De&&(0,n.jsxs)(ue,{children:[(0,n.jsx)(me,{type:"number",step:"0.1",min:"8",max:"30",value:Me,onChange:e=>{const t=e.target.value;_e(t)},onBlur:()=>{const e=parseFloat(Me);!isNaN(e)&&e>=8&&e<=30&&Xe(e),Ie(!1)},autoFocus:!0}),(0,n.jsx)(fe,{children:"cm"})]}),(0,n.jsxs)("totalUsedLength",{children:["\u76ee\u524d\u9577\u5ea6\uff1a",(Ee/10).toFixed(1)," cm"]})]}),(0,n.jsx)(G,{show:y,onDragEnter:e=>{e.preventDefault(),e.currentTarget.classList.add("drag-over")},onDragLeave:e=>{e.currentTarget.classList.remove("drag-over")},onDrop:e=>{e.preventDefault(),e.currentTarget.classList.remove("drag-over");const t=parseInt(e.dataTransfer.getData("moveBeadIndex"));isNaN(t)||Le(t),b(!1)},children:"\ud83d\uddd1\ufe0f"})]})}),(0,n.jsx)(H,{show:w&&!$e,children:(0,n.jsx)(Q,{children:d.map(((e,t)=>{const r=((e,t,r)=>{const i=e/t*360;return{x:r*Math.cos(i*Math.PI/180),y:r*Math.sin(i*Math.PI/180),angle:i}})(t,d.length,30);return(0,n.jsx)(V,{src:e.image,displaySize:e.displaySize,angle:r.angle,radius:30,alt:e.name,draggable:!1,style:{transform:`\n                    translate(-50%, -50%)\n                    rotate(${r.angle}deg)\n                    translateX(30px)\n                  `}},`mini-${e.id}-${t}`)}))})}),M&&null!==D&&!T&&(0,n.jsxs)(te,{children:[(0,n.jsx)(re,{onClick:()=>Je("info"),children:"\u986f\u793a\u8cc7\u8a0a"}),(0,n.jsx)(re,{onClick:()=>Je("move"),children:"\u79fb\u52d5\u4f4d\u7f6e"}),(0,n.jsx)(re,{onClick:()=>Je("delete"),children:"\u522a\u9664\u6c34\u6676"}),(0,n.jsx)(re,{onClick:()=>Je("clearAll"),children:"\u5168\u90e8\u522a\u9664"}),(0,n.jsx)(re,{onClick:()=>_(!1),children:"\u53d6\u6d88"}),Te&&(0,n.jsxs)(we,{children:[(0,n.jsx)(Ae,{children:"\u78ba\u5b9a\u8981\u522a\u9664\u6240\u6709\u6c34\u6676\u55ce\uff1f"}),(0,n.jsxs)(ze,{children:[(0,n.jsx)(Se,{onClick:()=>{qe(),Ne(!1),_(!1)},children:"\u78ba\u5b9a"}),(0,n.jsx)(ke,{onClick:()=>{Ne(!1)},children:"\u53d6\u6d88"})]})]})]}),(0,n.jsx)(ie,{show:M&&!T,onClick:()=>_(!1)}),(0,n.jsx)(oe,{show:X,children:(0,n.jsxs)(ae,{onClick:e=>e.stopPropagation(),children:[(0,n.jsx)(ne,{onClick:()=>q(!1),children:"\xd7"}),(0,n.jsx)(J,{}),(0,n.jsxs)(ve,{children:[(0,n.jsx)(je,{onClick:()=>{N(!0),q(!1)},children:"\u79fb\u52d5\u4f4d\u7f6e"}),(0,n.jsx)(je,{onClick:()=>{Le(D),q(!1)},children:"\u522a\u9664\u6c34\u6676"})]})]})})]})};var Ce=r(540);const De=o.Ay.div`
  padding: 20px;
`,Ie=o.Ay.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`,Me=()=>(0,n.jsxs)(De,{children:[(0,n.jsx)(Ie,{children:"\u7cbe\u9078\u6c34\u6676\uff0c\u80fd\u91cf\u52a0\u6301"}),(0,n.jsx)(v,{})]});var _e=r(996);const Ee=r.p+"static/media/user.b93f3b9265b70005aa91.png",Fe=r.p+"static/media/freeze.9a0bfea9bf9ca8f012b0.png",Te=r.p+"static/media/jewel.663a25f2ba9c2a304be4.png",Ne=r.p+"static/media/witch.2146c81794181f96ae99.png",Oe=o.Ay.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`,Le=o.Ay.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
`,Xe=o.Ay.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex: 1;
  color: ${e=>e.active?"#4a90e2":"#666"};
  border-top: 3px solid ${e=>e.active?"#4a90e2":"transparent"};
  
  &:hover {
    color: #4a90e2;
  }
`,qe=o.Ay.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`,Je=o.Ay.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`,Pe=o.Ay.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`,Be=o.Ay.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover img {
    fill: #4a90e2;
  }
`,We=o.Ay.div`
  font-size: 12px;
`,Ke=o.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-top: -40px; // 向上偏移，使其部分顯示在導航欄上方
  background: white;
  border-radius: 50%;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
  visibility: ${e=>e.show?"visible":"hidden"};
  position: ${e=>e.show?"relative":"absolute"};
  flex: ${e=>e.show?1:"none"};
`,Ye=o.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px dashed #ccc;
`,Ze=o.Ay.img`
  position: absolute;
  width: ${e=>.45*e.displaySize}px;
  height: ${e=>.45*e.displaySize}px;
  border-radius: 50%;
  transform-origin: center;
  left: 50%;
  top: 50%;
  object-fit: cover;
`,Re=e=>{let{currentCategory:t,onCategoryChange:r}=e;const{currentDesign:o}=(0,p.c)(),[s,l]=(0,i.useState)([]),d=((0,a.Zp)(),"crystal"===t||"accessory"===t);(0,i.useEffect)((()=>{if(o.crystals.length>0){const e=3.5,t=o.crystals.map(((t,r)=>{const i=r/o.crystals.length*360-90,a=t.size*e;return{...t,angle:i,displaySize:a}}));l(t)}else l([])}),[o]);return(0,i.useEffect)((()=>{window.setMobileCategory=e=>{r(e)};const e=localStorage.getItem("fromTemplate"),t=localStorage.getItem("template_selected_time");if("true"===e&&t){Date.now()-parseInt(t,10)<3e5&&(r("profile"),localStorage.removeItem("fromTemplate"),localStorage.removeItem("template_selected_time"))}return()=>{delete window.setMobileCategory}}),[r]),(0,n.jsx)(Oe,{children:(0,n.jsxs)(Le,{children:[(0,n.jsxs)(Xe,{active:"profile"===t,onClick:()=>r("profile"),children:[(0,n.jsx)(Be,{active:"profile"===t,children:(0,n.jsx)("img",{src:Ee,alt:"\u500b\u4eba"})}),(0,n.jsx)(We,{children:"\u500b\u4eba"})]}),(0,n.jsxs)(Xe,{active:"crystal"===t,onClick:()=>r("crystal"),children:[(0,n.jsx)(qe,{active:"crystal"===t,children:(0,n.jsx)("img",{src:Fe,alt:"\u6c34\u6676"})}),(0,n.jsx)(We,{children:"\u6c34\u6676"})]}),(0,n.jsx)(Ke,{show:d,children:(0,n.jsx)(Ye,{children:s.map(((e,t)=>{const r=((e,t)=>({angle:e/t*360-90}))(t,s.length);return(0,n.jsx)(Ze,{src:e.image,displaySize:e.displaySize,angle:r.angle,radius:30,alt:e.name,style:{transform:`\n                      translate(-50%, -50%)\n                      rotate(${r.angle}deg)\n                      translateX(30px)\n                    `}},`mini-${e.id}-${t}`)}))})}),(0,n.jsxs)(Xe,{active:"accessory"===t,onClick:()=>r("accessory"),children:[(0,n.jsx)(Je,{active:"accessory"===t,children:(0,n.jsx)("img",{src:Te,alt:"\u914d\u4ef6"})}),(0,n.jsx)(We,{children:"\u914d\u4ef6"})]}),(0,n.jsxs)(Xe,{active:"helper"===t,onClick:()=>{return"helper"===(e="helper")&&(localStorage.removeItem("crystal_color_filter"),localStorage.removeItem("filter_timestamp"),localStorage.removeItem("redirect_to_helper"),localStorage.removeItem("helper_page")),void r(e);var e},children:[(0,n.jsx)(Pe,{active:"helper"===t,children:(0,n.jsx)("img",{src:Ne,alt:"\u5c0f\u5e6b\u624b"})}),(0,n.jsx)(We,{children:"\u5c0f\u5e6b\u624b"})]})]})})},Ue=o.Ay.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 60px);
  
  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-bottom: 70px; /* 為底部導航留出空間 */
  }
`,Ge=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 767px) {
    display: ${e=>e.isMobile&&"profile"!==e.currentCategory?"none":"flex"};
  }
`,He=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  
  @media (max-width: 767px) {
    max-height: none;
  }
`,Qe=o.Ay.div`
  width: 100%;
  margin-bottom: 20px;
`,Ve=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 767px) {
    display: none;
  }
`,et=(o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,o.Ay.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: right;
  color: #333;
`),tt=o.Ay.button`
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
`,rt=o.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,it=o.Ay.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`,ot=o.Ay.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`,at=()=>{const[e,t]=(0,i.useState)("crystal"),[r,o]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!1),{currentDesign:c}=(0,p.c)(),[x,g]=(0,i.useState)(window.innerWidth<=767);(0,a.Zp)();(0,i.useEffect)((()=>{const e=()=>{g(window.innerWidth<=767)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,i.useEffect)((()=>{console.log("Current category changed to:",e)}),[e]),(0,i.useEffect)((()=>{const e=localStorage.getItem("redirect_to_helper"),r=localStorage.getItem("helper_page");"true"===e&&(localStorage.removeItem("redirect_to_helper"),t("helper"),console.log("\u5df2\u5207\u63db\u5230 helper \u9801\u9762\uff0c\u9801\u9762\u985e\u578b:",r))}),[]);const h=e=>{console.log("Changing category to:",e),t(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Ue,{children:[(0,n.jsxs)(Ge,{isMobile:x,currentCategory:e,children:[(0,n.jsx)($e,{}),(0,n.jsxs)(Ve,{children:[(0,n.jsx)(Ce.A,{}),(0,n.jsxs)(et,{children:["\u7e3d\u91d1\u984d: NT$ ",c&&c.crystals?c.crystals.reduce(((e,t)=>e+t.price),0):0]}),(0,n.jsx)(tt,{onClick:()=>{o(!0)},children:"\u4e0b\u55ae"}),r&&(0,n.jsxs)(rt,{onSubmit:e=>{e.preventDefault();new FormData(e.target);l(!0),o(!1)},children:[(0,n.jsx)(it,{name:"name",placeholder:"\u59d3\u540d",required:!0}),(0,n.jsx)(it,{name:"email",type:"email",placeholder:"Email",required:!0}),(0,n.jsx)(ot,{name:"address",placeholder:"\u9001\u8ca8\u5730\u5740",required:!0}),(0,n.jsx)(tt,{type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]}),s&&(0,n.jsx)("div",{style:{color:"#4CAF50",textAlign:"center",marginTop:"10px"},children:"\u8a02\u8cfc\u6210\u529f\uff01"})]})]}),(0,n.jsx)(He,{children:x?(()=>{switch(console.log("Rendering mobile content for category:",e),e){case"profile":return(0,n.jsx)(_e.default,{});case"crystal":default:return(0,n.jsx)(Me,{});case"accessory":return(0,n.jsx)(M,{});case"helper":return(0,n.jsx)(_.default,{})}})():(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Qe,{children:(0,n.jsx)(d,{currentCategory:e,onCategoryChange:h})}),(()=>{switch(console.log("Rendering desktop content for category:",e),e){case"crystal":default:return(0,n.jsx)(Me,{});case"accessory":return(0,n.jsx)(M,{});case"helper":return(0,n.jsx)(_.default,{})}})()]})})]}),x&&(0,n.jsx)(Re,{currentCategory:e,onCategoryChange:h})]})}},996:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(43),o=r(464),a=r(540),n=r(276),s=r(579);o.Ay.div`
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
`;const l=o.Ay.button`
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
`,d=((0,o.Ay)(l)`
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
`),c=o.Ay.div`
  margin-bottom: 24px;
`,p=o.Ay.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
`,x=o.Ay.div`
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
`,m=o.Ay.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`,f=()=>{const{currentDesign:e}=(0,n.c)(),[t,r]=(0,i.useState)(!1),[o,l]=(0,i.useState)(!1);return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(a.A,{})}),(0,s.jsxs)(c,{children:[(0,s.jsx)(p,{children:"\u8a02\u8cfc\u8cc7\u8a0a"}),(0,s.jsxs)(x,{children:["\u7e3d\u91d1\u984d: NT$ ",e.crystals.reduce(((e,t)=>e+t.price),0)]}),(0,s.jsx)(g,{onClick:()=>{r(!0)},children:"\u4e0b\u55ae"}),t&&(0,s.jsxs)(h,{onSubmit:e=>{e.preventDefault();new FormData(e.target);l(!0),r(!1)},children:[(0,s.jsx)(u,{name:"name",placeholder:"\u59d3\u540d",required:!0}),(0,s.jsx)(u,{name:"email",type:"email",placeholder:"Email",required:!0}),(0,s.jsx)(m,{name:"address",placeholder:"\u9001\u8ca8\u5730\u5740",required:!0}),(0,s.jsx)(g,{type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]}),o&&(0,s.jsx)("div",{style:{color:"#4CAF50",textAlign:"center",marginTop:"10px"},children:"\u8a02\u8cfc\u6210\u529f\uff01"})]})]})}}}]);
//# sourceMappingURL=48.c7f26419.chunk.js.map