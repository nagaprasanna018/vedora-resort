"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { RoomTour } from "@/data/rooms";

export default function RoomTour({ items }: { items: RoomTour[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  const go = (direction: number) => {
    setActive((index) => (index + direction + items.length) % items.length);
  };

  return (
    <section className="room-tour">
      <div className="tour-heading">
        <div><span className="eyebrow">TAKE THE TOUR</span><h2>See the stay <i>before you arrive.</i></h2></div>
        <p>Move through the room, choose the view that catches you and get a feel for the rhythm of the space.</p>
      </div>
      <div className="tour-stage">
        <motion.div key={current.image} initial={{ opacity: 0.15, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .55 }} className="tour-main-image" style={{ backgroundImage: `url("${current.image}")` }}>
          <span className="tour-scene-label">{current.label} · {current.title}</span>
          <button className="tour-nav prev" onClick={() => go(-1)} aria-label="Previous tour view"><ChevronLeft size={22}/></button>
          <button className="tour-nav next" onClick={() => go(1)} aria-label="Next tour view"><ChevronRight size={22}/></button>
          <span className="tour-expand"><Maximize2 size={15}/> IMMERSIVE VIEW</span>
        </motion.div>
        <div className="tour-side">
          <div className="tour-copy"><span className="eyebrow">{current.label} · {current.title}</span><h3>{current.title}</h3><p>{current.description}</p><span className="tour-count">{active + 1} / {items.length}</span></div>
          <div className="tour-tabs">
            {items.map((item, index) => (
              <button key={item.label} className={index === active ? "active" : ""} onClick={() => setActive(index)}>
                <span>{item.label}</span><strong>{item.title}</strong><ArrowRight size={15}/>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}