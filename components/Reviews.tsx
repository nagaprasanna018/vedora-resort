"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Review } from "@/data/rooms";

export default function Reviews({ reviews, compact = false }: { reviews: Review[]; compact?: boolean }) {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  const move = (step: number) => setActive((index) => (index + step + reviews.length) % reviews.length);

  return (
    <section className={compact ? "reviews compact-reviews" : "reviews"}>
      <div className="reviews-heading">
        <div><span className="eyebrow">STAY NOTES</span><h2>Guests remember the <i>feeling.</i></h2></div>
        <div className="review-controls"><button onClick={() => move(-1)} aria-label="Previous review"><ChevronLeft size={17}/></button><span>0{active + 1} / 0{reviews.length}</span><button onClick={() => move(1)} aria-label="Next review"><ChevronRight size={17}/></button></div>
      </div>
      <motion.div key={review.name + active} initial={{ opacity: .3, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }} className="review-card">
        <div className="stars">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={13} fill="currentColor"/>)}</div>
        <Quote size={34} className="quote-icon"/>
        <blockquote>“{review.quote}”</blockquote>
        <div className="review-person"><div><strong>{review.name}</strong><span>{review.stay}</span></div><small>{review.date}</small></div>
      </motion.div>
    </section>
  );
}