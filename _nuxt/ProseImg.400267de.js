import{d as r,I as n,b as c,c as h,N as o,ag as l,Y as d,l as u,ah as g}from"./entry.4e476658.js";const f=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=l(d(u().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return g(s,t.src)}return t.src});return(a,s)=>(c(),h("img",{src:o(i),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};
