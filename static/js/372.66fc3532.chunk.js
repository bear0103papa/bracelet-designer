"use strict";(self.webpackChunkcrystal_jewelry=self.webpackChunkcrystal_jewelry||[]).push([[234,372],{2234:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var i=t(5043),o=t(5464),n=t(8540),a=t(7276),s=t(579);o.Ay.div`
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
`,f=()=>{const{currentDesign:e}=(0,a.c)(),[r,t]=(0,i.useState)(!1),[o,l]=(0,i.useState)(!1);return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(n.A,{})}),(0,s.jsxs)(c,{children:[(0,s.jsx)(p,{children:"\u8a02\u8cfc\u8cc7\u8a0a"}),(0,s.jsxs)(x,{children:["\u7e3d\u91d1\u984d: NT$ ",e.crystals.reduce(((e,r)=>e+r.price),0)]}),(0,s.jsx)(g,{onClick:()=>{t(!0)},children:"\u4e0b\u55ae"}),r&&(0,s.jsxs)(h,{onSubmit:e=>{e.preventDefault();new FormData(e.target);l(!0),t(!1)},children:[(0,s.jsx)(u,{name:"name",placeholder:"\u59d3\u540d",required:!0}),(0,s.jsx)(u,{name:"email",type:"email",placeholder:"Email",required:!0}),(0,s.jsx)(m,{name:"address",placeholder:"\u9001\u8ca8\u5730\u5740",required:!0}),(0,s.jsx)(g,{type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]}),o&&(0,s.jsx)("div",{style:{color:"#4CAF50",textAlign:"center",marginTop:"10px"},children:"\u8a02\u8cfc\u6210\u529f\uff01"})]})]})}},8540:(e,r,t)=>{t.d(r,{A:()=>u});var i=t(5464),o=t(7276),n=t(579);const a=i.Ay.div`
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,s=i.Ay.h3`
  margin-bottom: 16px;
  font-size: 18px;
  color: #333;
  text-align: center;
  flex-shrink: 0;
`,l=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  overflow-y: auto;
  flex-grow: 1;
  padding: 4px;
`,d=i.Ay.div`
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
`,c=i.Ay.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,p=i.Ay.div`
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
`,x=i.Ay.img`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform-origin: center;
  object-fit: cover;
  transform: ${e=>`\n    translate(-50%, -50%)\n    rotate(${e.angle}deg)\n    translateX(${e.radius}px)\n    rotate(${-e.angle}deg)\n  `};
`,g=i.Ay.button`
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

  ${d}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`,h=i.Ay.div`
  text-align: center;
  color: #888;
  padding: 30px;
  font-size: 14px;
`,u=()=>{const{currentDesign:e,setCurrentDesign:r,savedDesigns:t=[],setSavedDesigns:i}=(0,o.c)(),u=e=>{if(!e||!e.crystals||0===e.crystals.length)return null;const r=e.crystals.length;return e.crystals.map(((e,t)=>{const i=t/r*360,o=22+10*Math.min(1,e.size/10);return(0,n.jsx)(x,{src:e.image,size:o,angle:i,radius:60,alt:e.name||"bead",onError:e=>{e.target.src="/placeholder.jpg"}},`${e.id||t}-${t}`)}))};return(0,n.jsxs)(a,{children:[(0,n.jsx)(s,{children:"\u5df2\u5132\u5b58\u8a2d\u8a08"}),t&&t.length>0?(0,n.jsx)(l,{children:t.map((e=>(0,n.jsxs)(d,{onClick:()=>(e=>{r({...e})})(e),children:[(0,n.jsx)(c,{children:(0,n.jsx)(p,{children:u(e)})}),(0,n.jsx)(g,{onClick:r=>((e,r)=>{e.stopPropagation();const o=t.filter((e=>e.id!==r));i(o),localStorage.setItem("savedDesigns",JSON.stringify(o))})(r,e.id),children:"\xd7"})]},e.id)))}):(0,n.jsx)(h,{children:"\u5c1a\u7121\u5132\u5b58\u7684\u8a2d\u8a08"})]})}},9216:(e,r,t)=>{t.r(r),t.d(r,{default:()=>tr});var i=t(5043),o=t(5464),n=t(579);const a=o.Ay.div`
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,s=o.Ay.div`
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
`,l=e=>{let{currentCategory:r,onCategoryChange:t,isMobile:i}=e;const o=e=>{"helper"===e&&(localStorage.removeItem("crystal_color_filter"),localStorage.removeItem("filter_timestamp"),localStorage.removeItem("redirect_to_helper"),localStorage.removeItem("helper_page")),t(e)};return(0,n.jsxs)(a,{children:[(0,n.jsx)(s,{active:"crystal"===r,onClick:()=>o("crystal"),children:"\u6c34\u6676"}),(0,n.jsx)(s,{active:"accessory"===r,onClick:()=>o("accessory"),children:"\u914d\u4ef6"}),!i&&(0,n.jsx)(s,{active:"helper"===r,onClick:()=>o("helper"),children:"\u5c0f\u5e6b\u624b"})]})};var d=t(3247),c=t(7276);o.Ay.div`
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;const p=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`,x=o.Ay.div`
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
`,g=o.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`,h=o.Ay.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
`,u=o.Ay.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
`,m=o.Ay.button`
  padding: 8px 16px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`,f=o.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`,y=o.Ay.div`
  font-size: 10px;
  color: #666;
  text-align: center;
`,b=()=>{const{currentDesign:e,setCurrentDesign:r}=(0,c.c)(),[t,o]=(0,i.useState)(null),[a,s]=(0,i.useState)("asc"),[l,b]=(0,i.useState)((()=>{const e=localStorage.getItem("crystalFilters");return e?JSON.parse(e):{color:"",size:"",energy:"",price:""}}));(0,i.useEffect)((()=>{localStorage.setItem("crystalFilters",JSON.stringify(l))}),[l]);const v={color:[...new Set(d.K.map((e=>e.color)))],size:["\u5c0f(\u22648mm)","\u4e2d(8-12mm)","\u5927(\u226512mm)"],energy:[...new Set(d.K.map((e=>e.energy)))],price:["0-10","11-15","16-20"]},j=()=>e.crystals.reduce(((e,r)=>e+r.size),0),w=d.K.filter((e=>!(e=>j()+e.size>300)(e)&&((!l.color||e.color===l.color)&&(!l.power||e.power===l.power)&&(!l.size||("\u5c0f(\u22648mm)"===l.size?e.size<=8:"\u4e2d(8-12mm)"===l.size?e.size>8&&e.size<12:e.size>=12))&&(!l.price||("0-10"===l.price?e.price<=10:"11-15"===l.price?e.price>10&&e.price<=15:e.price>15))))).sort(((e,r)=>{if(!t)return 0;const i="asc"===a?1:-1;return e[t]>r[t]?i:-i})),A=e=>r=>{r.dataTransfer.setData("crystal",JSON.stringify(e))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h,{children:[Object.entries(v).map((e=>{let[r,t]=e;return(0,n.jsxs)(u,{value:l[r],onChange:e=>b({...l,[r]:e.target.value}),children:[(0,n.jsx)("option",{value:"",children:"color"===r?"\u8272\u7cfb":"size"===r?"\u5c3a\u5bf8":"energy"===r?"\u80fd\u91cf":"\u50f9\u683c"}),t.map((e=>(0,n.jsx)("option",{value:e,children:e},e)))]},r)})),(0,n.jsx)(m,{onClick:()=>{const e={color:"",size:"",power:"",price:""};b(e),localStorage.setItem("crystalFilters",JSON.stringify(e))},children:"\u6e05\u9664\u7be9\u9078"})]}),(0,n.jsx)(p,{children:w.map((t=>{(()=>{const r=e.size,t=j();Math.max(0,r-t)})();return(0,n.jsxs)(x,{onClick:()=>(t=>{const i=[...e.crystals,t],o=i.reduce(((e,r)=>e+r.size),0);o>300||(o>e.size?r((e=>({...e,size:o,crystals:i}))):r((e=>({...e,crystals:i}))))})(t),style:{opacity:1,cursor:"pointer"},children:[(0,n.jsx)(g,{src:t.image,alt:t.name,draggable:!0,onDragStart:A(t),onError:e=>{e.target.src="/placeholder.jpg"}}),(0,n.jsx)(f,{children:t.name}),(0,n.jsxs)(y,{children:[t.color," | ",t.size,"mm | ",t.price,"\u5143"]})]},t.id)}))})]})},v=o.Ay.div`
  padding: 20px;
`,j=o.Ay.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`,w=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`,A=o.Ay.div`
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
`,k=o.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`,z=o.Ay.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
`,S=o.Ay.select`
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
`,$=o.Ay.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`,D=o.Ay.div`
  font-size: 10px;
  color: #666;
  text-align: center;
`,I=()=>{const{setCurrentDesign:e,setSelectedCrystal:r}=(0,c.c)(),[t,o]=(0,i.useState)(null),[a,s]=(0,i.useState)("asc"),[l,p]=(0,i.useState)((()=>{const e=localStorage.getItem("accessoryFilters");return e?JSON.parse(e):{color:"",type:"",material:"",price:""}}));(0,i.useEffect)((()=>{localStorage.setItem("accessoryFilters",JSON.stringify(l))}),[l]);const x={color:[...new Set(d.l.map((e=>e.color)))],type:[...new Set(d.l.map((e=>e.type)).filter(Boolean))],material:[...new Set(d.l.map((e=>e.material)).filter(Boolean))],price:["0-10","11-15","16-20"]},g=d.l.filter((e=>(!l.color||e.color===l.color)&&(!l.type||e.type===l.type)&&(!l.material||e.material===l.material)&&(!l.price||("0-10"===l.price?e.price<=10:"11-15"===l.price?e.price>10&&e.price<=15:e.price>15)))).sort(((e,r)=>{if(!t)return 0;const i="asc"===a?1:-1;return e[t]>r[t]?i:-i})),h=e=>r=>{r.dataTransfer.setData("crystal",JSON.stringify(e))};return(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:"\u7cbe\u7f8e\u914d\u4ef6\uff0c\u9ede\u7db4\u624b\u934a"}),(0,n.jsxs)(z,{children:[Object.entries(x).map((e=>{let[r,t]=e;return(0,n.jsxs)(S,{value:l[r],onChange:e=>p({...l,[r]:e.target.value}),children:[(0,n.jsx)("option",{value:"",children:"color"===r?"\u8272\u7cfb":"type"===r?"\u985e\u578b":"material"===r?"\u6750\u8cea":"\u50f9\u683c"}),t.map((e=>(0,n.jsx)("option",{value:e,children:e},e)))]},r)})),(0,n.jsx)(C,{onClick:()=>{const e={color:"",type:"",material:"",price:""};p(e),localStorage.setItem("accessoryFilters",JSON.stringify(e))},children:"\u6e05\u9664\u7be9\u9078"})]}),(0,n.jsx)(w,{children:g.map((t=>(0,n.jsxs)(A,{onClick:()=>(t=>{r(t),e((e=>({...e,crystals:[...e.crystals,t]})))})(t),children:[(0,n.jsx)(k,{src:t.image,alt:t.name,draggable:!0,onDragStart:h(t),onError:e=>{e.target.src="/placeholder.jpg"}}),(0,n.jsx)($,{children:t.name}),(0,n.jsxs)(D,{children:[t.color," | ",t.material||""," | ",t.price,"\u5143"]})]},t.id)))})]})};var _=t(7973);const M=o.Ay.div`
  padding: 20px;
`,E=o.Ay.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`,F=o.Ay.div`
  margin-bottom: 24px;
`,T=o.Ay.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`,O=o.Ay.ul`
  list-style: none;
  padding: 0;
`,N=o.Ay.li`
  margin-bottom: 8px;
  color: #333;
`,L=o.Ay.li`
  margin-bottom: 8px;
  color: #333;
`,X=o.Ay.div`
  margin-bottom: 24px;
`,q=()=>{const{selectedCrystal:e}=(0,c.c)();if(!e)return null;e.description;return(0,n.jsxs)(M,{children:[(0,n.jsx)(E,{children:e.name}),(0,n.jsxs)(F,{children:[(0,n.jsx)(T,{children:"\u57fa\u672c\u8cc7\u8a0a"}),(0,n.jsxs)(O,{children:[(0,n.jsxs)(N,{children:["\u8272\u7cfb\uff1a",e.color]}),(0,n.jsxs)(N,{children:["\u5c3a\u5bf8\uff1a",e.size," mm"]}),(0,n.jsxs)(N,{children:["\u80fd\u91cf\uff1a",e.energy]}),(0,n.jsxs)(N,{children:["\u50f9\u683c\uff1aNT$ ",e.price]}),e.zodiac&&(0,n.jsxs)(N,{children:["\u9069\u5408\u661f\u5ea7\uff1a",e.zodiac.join("\u3001")]}),e.chakra&&(0,n.jsxs)(N,{children:["\u8108\u8f2a\uff1a",e.chakra]})]})]}),(0,n.jsx)(X,{children:(e=>Array.isArray(e)?e.map(((e,r)=>(0,n.jsx)(L,{children:e},r))):e?(0,n.jsx)(L,{children:e}):null)(e.description)})]})};var J=t(448);const B=o.Ay.div`
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,P=o.Ay.div`
  position: relative;
  width: 100%;
  height: 500px;
`,W=o.Ay.div`
  position: absolute;
  top: calc(50% + 90px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: all 0.3s ease;
`,K=o.Ay.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  height: 2px;
  transform-origin: left center;
  z-index: 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`,R=o.Ay.div`
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
    rotate(${e=>e.isAccessory?(e.angle,"270deg"):`-${e.angle}deg`});
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
  
  ${e=>e.moveMode&&`\n    filter: brightness(${e.isSource?"1.2":e.isTarget?"1":"0.7"});\n    transform: translate(-50%, -50%)\n      rotate(${e.angle}deg)\n      translateX(${e.radius}px)\n      rotate(${e.isAccessory?"0":`-${e.angle}`}deg)\n      scale(${e.isSource||e.isTarget?"1.1":"1"});\n    ${e.isTarget?"outline: 2px solid #4a90e2;":""}\n  `}
`,Y=o.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>e.isAccessory?"10%":"50%"};
  position: relative;
  display: block;
`,H=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%);
  pointer-events: none;
`,U=o.Ay.div`
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
`,V=(o.Ay.div`
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
`,o.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,o.Ay.img`
  position: absolute;
  width: ${e=>.4*e.displaySize}px;
  height: ${e=>.4*e.displaySize}px;
  border-radius: 50%;
  transform-origin: center;
  transform: ${e=>`\n    translate(-50%, -50%)\n    rotate(${e.angle}deg)\n    translateX(${e.radius}px)\n  `};
  left: 50%;
  top: 50%;
  object-fit: cover;
`,o.Ay.button`
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
`),Z=o.Ay.div`
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
`,G=o.Ay.button`
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
`,Q=o.Ay.div`
  display: ${e=>e.show?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`,ee=o.Ay.div`
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
`,re=o.Ay.div`
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
`,te=o.Ay.button`
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
`,ie=o.Ay.div`
  position: absolute;
  top: 90px;
  right: 10px;
  z-index: 10;
  
  @media (min-width: 768px) {
    top: 95px;
    right: 15px;
  }
`,oe=o.Ay.button`
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
`,ne=o.Ay.div`
  margin: 15px 0;
  text-align: center;
`,ae=o.Ay.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,se=o.Ay.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
  font-weight: normal;
`,le=o.Ay.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`,de=o.Ay.button`
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
`,ce=(0,o.Ay)(de)`
  width: 70px;
  height: 45px;
  border-radius: 22.5px;
  padding: 0 15px;
`,pe=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,xe=o.Ay.input`
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
`,ge=o.Ay.span`
  margin-left: 8px;
  color: #666;
  font-size: 14px;
`,he=o.Ay.div`
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
`,ue=o.Ay.button`
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
`,me=o.Ay.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`,fe=o.Ay.button`
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
`,ye=o.Ay.div`
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
`,be=o.Ay.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,ve=o.Ay.div`
  display: flex;
  gap: 15px;
`,je=o.Ay.button`
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
`,we=o.Ay.button`
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
`,Ae=e=>{let{onCrystalClick:r}=e;const{currentDesign:t,setCurrentDesign:o,setSelectedCrystal:a,savedDesigns:s,setSavedDesigns:l}=(0,c.c)(),[d,p]=(0,i.useState)([]),[x,g]=(0,i.useState)(200),[h,u]=(0,i.useState)(null),[m,f]=(0,i.useState)(!1),[y,b]=(0,i.useState)(!1),[v,j]=(0,i.useState)(0),[w,A]=(0,i.useState)(!1),k=t.size/10,[z,S]=(0,i.useState)(k.toString()),[C,$]=(0,i.useState)(""),[D,I]=(0,i.useState)(null),[_,M]=(0,i.useState)(!1),[E,F]=(0,i.useState)(!1),[T,O]=(0,i.useState)(null),[N,L]=(0,i.useState)(!1),[X,Ae]=(0,i.useState)(window.innerWidth<=767),[ke,ze]=(0,i.useState)(!1),[Se,Ce]=(0,i.useState)(""),[$e,De]=(0,i.useState)(0),[Ie,_e]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(t.crystals.length>0){const e=t.size,r=t.crystals.reduce(((e,r)=>e+r.size),0);if(De(r),r>e){const t=10*Math.ceil(r/10);return console.log(`\u81ea\u52d5\u8abf\u6574\u624b\u570d\u5c3a\u5bf8\uff1a\u5f9e ${e}mm \u5230 ${t}mm`),void o((e=>({...e,size:t})))}const i=t.crystals.length,n=e/160,a=1/Math.sqrt(n),s=120*Math.sqrt(n),l=[];let d=0;const c=[];for(let o=0;o<i;o++){const e=t.crystals[o];let r=45*(e.size/8)*a;const i=25*a,n=60*a;r=Math.max(i,Math.min(r,n));const l=r/s*(180/Math.PI);c.push({crystal:e,displaySize:r,angleOccupation:l}),d+=l}const x=1.25,g=d/x;let h=0;for(let t=0;t<c.length;t++){const{crystal:e,displaySize:r,angleOccupation:i}=c[t],o=h+i/2;h+=i/x;const n="Accessories"===e.category;l.push({...e,angle:360*o/g,radius:s,displaySize:r,sizeAdjustFactor:a,isAccessory:n})}p(l)}else p([]),De(0),f(!1)}),[t]),(0,i.useEffect)((()=>{S(k.toString())}),[k]),(0,i.useEffect)((()=>{const e=()=>{Ae(window.innerWidth<=767)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const Me=()=>{b(!1)},Ee=e=>{o((r=>({...r,crystals:r.crystals.filter(((r,t)=>t!==e))}))),a(null)},Fe=e=>{const r=10*e,i=[...t.crystals];let n=i.reduce(((e,r)=>e+r.size),0);for(;n>r&&i.length>0;){n-=i.pop().size}o((e=>({...e,size:r,crystals:i})))},Te=()=>{o((e=>({...e,crystals:[]}))),p([])},Oe=e=>{switch(e){case"info":a(t.crystals[D]),L(!0);break;case"move":return F(!0),O(D),void A(!1);case"delete":Ee(D);break;case"clearAll":return void _e(!0)}A(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(B,{children:(0,n.jsxs)(P,{children:[(0,n.jsx)(ie,{children:(0,n.jsx)(oe,{onClick:()=>{const e=Date.now().toString(),r={...t,id:e,savedAt:(new Date).toISOString()};l([...s,r])},children:(0,n.jsx)("img",{src:J,alt:"\u5132\u5b58\u6a23\u5f0f"})})}),(0,n.jsx)(V,{onClick:Te,children:"\u6e05\u9664\u5168\u90e8"}),E&&(0,n.jsxs)(he,{children:["\u8acb\u9078\u64c7\u8981\u4ea4\u63db\u4f4d\u7f6e\u7684\u6c34\u6676",(0,n.jsx)(ue,{onClick:()=>{F(!1),O(null),I(null)},children:"\u53d6\u6d88\u79fb\u52d5"})]}),(0,n.jsxs)(W,{children:[d.length<2?null:d.map(((e,r)=>{const t=(r+1)%d.length,i=d[t],o=e.angle*Math.PI/180,a=i.angle*Math.PI/180,s=e.radius,l=i.radius,c=Math.cos(o)*s,p=Math.sin(o)*s,x=Math.cos(a)*l,g=Math.sin(a)*l,h=Math.sqrt(Math.pow(x-c,2)+Math.pow(g-p,2)),u=180*Math.atan2(g-p,x-c)/Math.PI,m=e.sizeAdjustFactor?1*e.sizeAdjustFactor:1;return(0,n.jsx)(K,{style:{width:`${h}px`,height:`${m}px`,left:`calc(50% + ${c}px)`,top:`calc(50% + ${p}px)`,transform:`rotate(${u}deg)`,opacity:.3,background:"linear-gradient(to right, rgba(255,255,255,0.7), rgba(220,220,220,0.7))"}},`connection-${r}`)})),d.map(((e,r)=>{const i="accessory"===e.category;return(0,n.jsxs)(R,{displaySize:e.displaySize,angle:e.angle,radius:e.radius,size:e.size,moveMode:E,isSource:T===r,isTarget:E&&D===r&&T!==r,onClick:e=>((e,r,i)=>{if(i&&i.preventDefault(),E){if(null!==T){const e=[...t.crystals],i=e[T];return e[T]=e[r],e[r]=i,o({...t,crystals:e}),O(null),void F(!1)}O(r)}else{if(X)return I(r),void A(!0);I(r),a(t.crystals[r]),L(!0)}})(0,r,e),draggable:_,onDragStart:e=>((e,r)=>{j(Date.now()),e.dataTransfer.setData("moveBeadIndex",r.toString()),b(!0)})(e,r),onDragEnd:Me,onDragOver:e=>((e,r)=>{e.preventDefault(),E&&r!==T&&I(r)})(e,r),onDrop:e=>((e,r)=>{if(e.preventDefault(),E&&null!==T&&r!==T){const e=[...t.crystals],i=e[T];return e[T]=e[r],e[r]=i,o((r=>({...r,crystals:e}))),F(!1),O(null),void I(null)}const i=e.dataTransfer.getData("moveBeadIndex");if(i){const e=parseInt(i);if(e!==r){const i=[...t.crystals],n=i[e];i[e]=i[r],i[r]=n,o((e=>({...e,crystals:i})))}b(!1)}})(e,r),isAccessory:i,children:[(0,n.jsx)(Y,{src:e.image,alt:`${i?"Accessory":"Crystal"} ${r}`,isAccessory:i,onError:r=>{console.error(`Failed to load image: ${e.image}`),r.target.src="default-crystal.png"}}),(0,n.jsx)(H,{})]},r)}))]}),(0,n.jsxs)(ne,{children:[(0,n.jsxs)(ae,{children:["\u624b\u570d\u5c3a\u5bf8",(0,n.jsx)(se,{children:"(cm)"})]}),(0,n.jsxs)(le,{children:[[14,15,16,17,18].map((e=>(0,n.jsx)(de,{active:k===e,onClick:()=>Fe(e),children:e},e))),(0,n.jsx)(ce,{onClick:()=>{ze(!0),Ce(k.toString())},children:"\u81ea\u8a02"})]}),ke&&(0,n.jsxs)(pe,{children:[(0,n.jsx)(xe,{type:"number",step:"0.1",min:"8",max:"30",value:Se,onChange:e=>{const r=e.target.value;Ce(r)},onBlur:()=>{const e=parseFloat(Se);!isNaN(e)&&e>=8&&e<=30&&Fe(e),ze(!1)},autoFocus:!0}),(0,n.jsx)(ge,{children:"cm"})]}),(0,n.jsxs)("totalUsedLength",{children:["\u76ee\u524d\u9577\u5ea6\uff1a",($e/10).toFixed(1)," cm"]})]}),(0,n.jsx)(U,{show:y,onDragEnter:e=>{e.preventDefault(),e.currentTarget.classList.add("drag-over")},onDragLeave:e=>{e.currentTarget.classList.remove("drag-over")},onDrop:e=>{e.preventDefault(),e.currentTarget.classList.remove("drag-over");const r=parseInt(e.dataTransfer.getData("moveBeadIndex"));isNaN(r)||Ee(r),b(!1)},children:"\ud83d\uddd1\ufe0f"})]})}),w&&null!==D&&!E&&(0,n.jsxs)(Z,{children:[(0,n.jsx)(G,{onClick:()=>Oe("info"),children:"\u986f\u793a\u8cc7\u8a0a"}),(0,n.jsx)(G,{onClick:()=>Oe("move"),children:"\u79fb\u52d5\u4f4d\u7f6e"}),(0,n.jsx)(G,{onClick:()=>Oe("delete"),children:"\u522a\u9664\u6c34\u6676"}),(0,n.jsx)(G,{onClick:()=>Oe("clearAll"),children:"\u5168\u90e8\u522a\u9664"}),(0,n.jsx)(G,{onClick:()=>A(!1),children:"\u53d6\u6d88"}),Ie&&(0,n.jsxs)(ye,{children:[(0,n.jsx)(be,{children:"\u78ba\u5b9a\u8981\u522a\u9664\u6240\u6709\u6c34\u6676\u55ce\uff1f"}),(0,n.jsxs)(ve,{children:[(0,n.jsx)(je,{onClick:()=>{Te(),_e(!1),A(!1)},children:"\u78ba\u5b9a"}),(0,n.jsx)(we,{onClick:()=>{_e(!1)},children:"\u53d6\u6d88"})]})]})]}),(0,n.jsx)(Q,{show:w&&!E,onClick:()=>A(!1)}),(0,n.jsx)(ee,{show:N,children:(0,n.jsxs)(re,{onClick:e=>e.stopPropagation(),children:[(0,n.jsx)(te,{onClick:()=>L(!1),children:"\xd7"}),(0,n.jsx)(q,{}),(0,n.jsxs)(me,{children:[(0,n.jsx)(fe,{onClick:()=>{F(!0),L(!1)},children:"\u79fb\u52d5\u4f4d\u7f6e"}),(0,n.jsx)(fe,{onClick:()=>{Ee(D),L(!1)},children:"\u522a\u9664\u6c34\u6676"})]})]})})]})};var ke=t(8540);const ze=o.Ay.div`
  padding: 20px;
`,Se=o.Ay.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`,Ce=()=>(0,n.jsxs)(ze,{children:[(0,n.jsx)(Se,{children:"\u7cbe\u9078\u6c34\u6676\uff0c\u80fd\u91cf\u52a0\u6301"}),(0,n.jsx)(b,{})]});t(2234);t.p;const $e=t.p+"static/media/freeze.9a0bfea9bf9ca8f012b0.png",De=(t.p,t.p+"static/media/witch.2146c81794181f96ae99.png"),Ie=o.Ay.div`
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
`,_e=o.Ay.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
`,Me=o.Ay.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex: 1;
  color: ${e=>e.active?"#4a90e2":"#666"};
  border-top: none;
  
  &:hover {
    color: #4a90e2;
  }
`,Ee=(o.Ay.div`
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
`,o.Ay.div`
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
`,o.Ay.div`
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
`),Fe=o.Ay.div`
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
`,Te=o.Ay.div`
  font-size: 12px;
`,Oe=o.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-top: -30px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
  position: relative;
  flex: none;
  order: 2;
`,Ne=o.Ay.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px dashed #ccc;
`,Le=o.Ay.img`
  position: absolute;
  width: ${e=>.35*e.displaySize}px;
  height: ${e=>.35*e.displaySize}px;
  border-radius: 50%;
  transform-origin: center;
  left: 50%;
  top: 50%;
  object-fit: cover;
`,Xe=e=>{let{currentCategory:r,onCategoryChange:t}=e;const{currentDesign:o}=(0,c.c)(),[a,s]=(0,i.useState)([]);(0,i.useEffect)((()=>{if(o.crystals&&o.crystals.length>0){const e=3.5,r=o.crystals.map(((r,t)=>{const i=r.size*e;return{...r,displaySize:i}}));s(r)}else s([])}),[o]);return(0,i.useEffect)((()=>{window.setMobileCategory=e=>{t(e)};const e=localStorage.getItem("fromTemplate"),r=localStorage.getItem("template_selected_time");if("true"===e&&r){Date.now()-parseInt(r,10)<3e5&&(t("profile"),localStorage.removeItem("fromTemplate"),localStorage.removeItem("template_selected_time"))}return()=>{delete window.setMobileCategory}}),[t]),(0,n.jsx)(Ie,{children:(0,n.jsxs)(_e,{children:[(0,n.jsxs)(Me,{active:"profile"===r,onClick:()=>t("profile"),style:{order:1},children:[(0,n.jsx)(Fe,{active:"profile"===r,children:(0,n.jsx)("img",{src:$e,alt:"\u597d\u8a2d\u8a08"})}),(0,n.jsx)(Te,{children:"\u597d\u8a2d\u8a08"})]}),(0,n.jsx)(Oe,{style:{order:2},children:(0,n.jsx)(Ne,{children:a.map(((e,r)=>{const t=((e,r)=>({angle:e/r*360-90}))(r,a.length);return(0,n.jsx)(Le,{src:e.image,displaySize:e.displaySize,alt:e.name,style:{transform:`\n                      translate(-50%, -50%)\n                      rotate(${t.angle}deg)\n                      translateX(30px)\n                    `}},`mini-${e.id}-${r}`)}))})}),(0,n.jsxs)(Me,{active:"helper"===r,onClick:()=>{return"helper"===(e="helper")&&(localStorage.removeItem("crystal_color_filter"),localStorage.removeItem("filter_timestamp"),localStorage.removeItem("redirect_to_helper"),localStorage.removeItem("helper_page")),void t(e);var e},style:{order:3},children:[(0,n.jsx)(Ee,{active:"helper"===r,children:(0,n.jsx)("img",{src:De,alt:"\u5c0f\u5e6b\u624b"})}),(0,n.jsx)(Te,{children:"\u5c0f\u5e6b\u624b"})]})]})})};var qe=t(6727);const Je=o.Ay.button`
  display: none; // 預設隱藏
  position: fixed;
  bottom: 100px; // 顯示在底部導航上方
  right: 20px;
  background-color: rgba(74, 144, 226, 0.8); // 半透明藍色
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px; // 調整箭頭或文字大小
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999; // 確保在其他元素之上，但在 Modal 之下
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  opacity: ${e=>e.visible?1:0};
  visibility: ${e=>e.visible?"visible":"hidden"};

  &:hover {
    background-color: rgba(58, 128, 210, 0.9); // Hover 時加深顏色
  }

  @media (max-width: 767px) {
    display: block; // 只在手機版顯示 block
  }
`,Be=()=>{const[e,r]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=()=>{window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,n.jsx)(Je,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},visible:e,children:"\u2191"})},Pe=o.Ay.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 60px);
  
  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
  }
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    min-height: calc(100vh - 80px);
  }
`,We=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 767px) {
    order: 1;
  }
`,Ke=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(1280px);
  
  @media (max-width: 1024px) {
    max-height: none;
    order: 3;
  }
`,Re=o.Ay.div`
  width: 100%;
  margin-bottom: 20px;
`,Ye=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 767px) {
    display: none;
  }
`,He=o.Ay.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    order: 2;
    margin-bottom: 20px;
  }
`,Ue=o.Ay.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
  text-align: right;
  color: #333;
`,Ve=o.Ay.button`
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
`,Ze=o.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`,Ge=o.Ay.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`,Qe=o.Ay.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
`,er=o.Ay.div`
  color: #4CAF50;
  text-align: center;
  margin-top: 15px;
  padding: 10px;
  background-color: #e8f5e9;
  border-radius: 4px;
`,rr=o.Ay.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
  padding: 0 15px;
`,tr=()=>{const[e,r]=(0,i.useState)("crystal"),[t,o]=(0,i.useState)(!1),[a,s]=(0,i.useState)(!1),{currentDesign:d,selectedCrystal:p,setCurrentDesign:x}=(0,c.c)(),[g,h]=(0,i.useState)(window.innerWidth<=767),u=((0,qe.Zp)(),(0,i.useRef)(null));(0,i.useEffect)((()=>{const e=()=>{h(window.innerWidth<=767)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,i.useEffect)((()=>{console.log("Current category changed to:",e)}),[e]),(0,i.useEffect)((()=>{const e=localStorage.getItem("redirect_to_helper"),t=localStorage.getItem("helper_page");"true"===e&&(localStorage.removeItem("redirect_to_helper"),r("helper"),console.log("\u5df2\u5207\u63db\u5230 helper \u9801\u9762\uff0c\u9801\u9762\u985e\u578b:",t))}),[]);const m=e=>{console.log("Changing category to:",e),r(e),"helper"===e&&(localStorage.removeItem("crystal_color_filter"),localStorage.removeItem("filter_timestamp"),localStorage.removeItem("redirect_to_helper"),localStorage.removeItem("helper_page"))};(0,i.useEffect)((()=>{!g||"helper"!==e&&"crystal"!==e&&"accessory"!==e&&"profile"!==e||setTimeout((()=>{var e;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})}),0)}),[e,g]);return(0,n.jsxs)(Pe,{children:[(0,n.jsxs)(We,{isMobile:g,currentCategory:e,children:[(0,n.jsx)(Ae,{onCrystalClick:()=>{}}),(0,n.jsxs)(He,{children:[(0,n.jsx)("h3",{children:"\u8a02\u8cfc\u8cc7\u8a0a"}),(0,n.jsxs)(Ue,{children:["\u7e3d\u91d1\u984d: NT$ ",(()=>{var e;if(!d||!d.crystals)return 0;const r=(null===(e=d.accessories)||void 0===e?void 0:e.reduce(((e,r)=>e+r.price),0))||0;return d.crystals.reduce(((e,r)=>e+r.price),0)+r})()]}),!t&&!a&&(0,n.jsx)(Ve,{onClick:()=>{o(!0),s(!1)},children:"\u4e0b\u55ae"}),t&&(0,n.jsxs)(Ze,{onSubmit:e=>{e.preventDefault();const r=new FormData(e.target);console.log("Order Submitted:",Object.fromEntries(r)),s(!0),o(!1)},children:[(0,n.jsx)(Ge,{name:"name",placeholder:"\u59d3\u540d",required:!0}),(0,n.jsx)(Ge,{name:"email",type:"email",placeholder:"Email",required:!0}),(0,n.jsx)(Qe,{name:"address",placeholder:"\u9001\u8ca8\u5730\u5740",required:!0}),(0,n.jsx)(Ve,{type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]}),a&&(0,n.jsx)(er,{children:"\u8a02\u8cfc\u6210\u529f\uff01\u611f\u8b1d\u60a8\u7684\u8a02\u8cfc\u3002"})]}),(0,n.jsx)(Ye,{children:(0,n.jsx)(ke.A,{})})]}),(0,n.jsxs)(Ke,{ref:u,children:[g&&(0,n.jsx)(rr,{children:"\u9ede\u64ca\u4e0b\u65b9\u9801\u7c64\u5207\u63db\u9078\u64c7\u6c34\u6676\u6216\u914d\u4ef6"}),(0,n.jsx)(Re,{children:(0,n.jsx)(l,{currentCategory:e,onCategoryChange:m,isMobile:g})}),!g&&(()=>{switch(console.log("Rendering desktop content for category:",e),e){case"crystal":default:return(0,n.jsx)(Ce,{});case"accessory":return(0,n.jsx)(I,{});case"helper":return(0,n.jsx)(_.default,{})}})(),g&&(()=>{switch(console.log("Rendering mobile content for category:",e),e){case"profile":return(0,n.jsx)(ke.A,{});case"crystal":default:return(0,n.jsx)(Ce,{});case"accessory":return(0,n.jsx)(I,{});case"helper":return(0,n.jsx)(_.default,{})}})()]}),g&&(0,n.jsx)(Xe,{currentCategory:e,onCategoryChange:m}),(0,n.jsx)(Be,{})]})}}}]);
//# sourceMappingURL=372.66fc3532.chunk.js.map