"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
];

export default function GalleryPage() {
  const [active,setActive]=useState<number|null>(null);
  return <><Navbar/><main className="inner-page"><section className="inner-hero gallery-hero"><div><span className="eyebrow">A VISUAL DIARY</span><h1>The Vedora <i>light.</i></h1><p>Quiet corners, salt air, warm evenings and the spaces between.</p></div></section><section className="gallery-grid">{images.map((src,i)=><button key={src} className={`gallery-tile tile-${i%5}`} style={{backgroundImage:`url("${src}")`}} onClick={()=>setActive(i)} aria-label={`Open gallery image ${i+1}`}/>)}</section></main>{active!==null&&<div className="lightbox" onClick={()=>setActive(null)}><button className="lightbox-close" onClick={()=>setActive(null)}><X size={22}/></button><div className="lightbox-image" style={{backgroundImage:`url("${images[active]}")`}} onClick={e=>e.stopPropagation()}/></div>}<Footer/></>;
}