"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown, Minus, Plus, Sparkles, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms, formatINR } from "@/data/rooms";

const experiences = [
  ["Twilight Dining", "A private table under the last light of the day.", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"],
  ["Stillwater Spa", "Slow rituals, warm stone and a quieter pace.", "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"],
  ["Wild Coast", "Golden trails and hidden coves beyond the gardens.", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"],
];

export default function Home() {
  const [dates, setDates] = useState({ checkIn: "2026-10-12", checkOut: "2026-10-15" });
  const [guests, setGuests] = useState(2);
  const [openGuests, setOpenGuests] = useState(false);
  const [preview, setPreview] = useState(false);

  const nights = useMemo(() => {
    const start = new Date(dates.checkIn).getTime();
    const end = new Date(dates.checkOut).getTime();
    return Math.max(1, Math.round((end - start) / 86400000));
  }, [dates]);

  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-media" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow"><Sparkles size={14} /> COASTAL SLOW LUXURY</div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
              Escape into<br /><i>something extraordinary.</i>
            </motion.h1>
            <p>Where dusky skies, still water and thoughtful hospitality create room to breathe.</p>
            <Link className="ghost-btn" href="/rooms">Discover Vedora <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-caption"><span>01</span><div><strong>Where the evening lingers</strong><small>Vedora Coast, India</small></div></div>
        </section>

        <section id="booking" className="booking-shell">
          <div className="booking-panel">
            <div className="booking-field"><CalendarDays size={18} /><label>CHECK IN<input type="date" value={dates.checkIn} onChange={(e) => setDates(v => ({ ...v, checkIn: e.target.value }))} /></label></div>
            <div className="booking-field"><CalendarDays size={18} /><label>CHECK OUT<input type="date" value={dates.checkOut} onChange={(e) => setDates(v => ({ ...v, checkOut: e.target.value }))} /></label></div>
            <div className="booking-field guest-field" onClick={() => setOpenGuests(v => !v)}>
              <Users size={18} /><label>GUESTS<span>{guests} guests</span></label><ChevronDown size={16} />
              {openGuests && <div className="guest-menu">
                <button onClick={(e) => { e.stopPropagation(); setGuests(g => Math.max(1, g - 1)); }}><Minus size={14} /></button>
                <strong>{guests}</strong>
                <button onClick={(e) => { e.stopPropagation(); setGuests(g => Math.min(6, g + 1)); }}><Plus size={14} /></button>
              </div>}
            </div>
            <button className="booking-btn" onClick={() => setPreview(true)}>Check availability <ArrowRight size={17} /></button>
          </div>
        </section>

        <section id="stay" className="section room-section">
          <div className="section-heading"><div><span className="eyebrow">THE STAYS</span><h2>Rooms made for<br /><i>longer evenings.</i></h2></div><Link className="section-link" href="/rooms">View all stays <ArrowRight size={16}/></Link></div>
          <div className="room-grid">
            {rooms.map((room, i) => (
              <motion.article key={room.slug} className="room-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
                <Link href={`/rooms/${room.slug}`} className="room-image" style={{ backgroundImage: `url("${room.image}")` }}><span>{room.tag}</span></Link>
                <div className="room-copy"><div><h3>{room.name}</h3><p>{room.size} · up to {room.guests} guests</p></div><strong>₹{formatINR(room.price)}<small>/night</small></strong></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading"><div><span className="eyebrow">THE VEDORA RHYTHM</span><h2>Come for the stay.<br /><i>Stay for the feeling.</i></h2></div><p>Every detail is deliberately slower: long lunches, warm water, salt air and evenings without an agenda.</p></div>
          <div className="experience-grid">
            {experiences.map(([title, copy, image], i) => (
              <motion.div className="experience-card" key={title} whileHover={{ y: -8 }} transition={{ duration: .25 }}>
                <div className="experience-image" style={{ backgroundImage: `url("${image}")` }} />
                <div className="experience-copy"><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowRight size={18} /></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="story" className="story"><div className="story-image" /><div className="story-copy"><span className="eyebrow">OUR STORY</span><h2>A resort built around the <i>last light.</i></h2><p>Vedora began with a simple idea: luxury doesn't need to be loud. It can be found in a room that opens to the breeze, a dinner that waits for sunset, and the feeling of nowhere else you need to be.</p><Link className="text-btn" href="/gallery">See the Vedora world <ArrowRight size={17} /></Link></div></section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>The kind of place that makes you forget what time it is.</blockquote><span>— A VEDORA GUEST</span></section>

        {preview && <div className="modal-backdrop" onClick={() => setPreview(false)}><motion.div className="modal" initial={{ scale: .96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()}><span className="eyebrow">AVAILABILITY PREVIEW</span><h2>Your Vedora escape is <i>taking shape.</i></h2><p>{nights} nights · {guests} guests · {dates.checkIn} to {dates.checkOut}</p><div className="modal-price">From <strong>₹{formatINR(rooms[0].price * nights)}</strong></div><p className="modal-note">This is a frontend demo. Continue to the booking flow to choose your room and enter guest details.</p><Link className="booking-btn full" href="/booking">Continue to booking <ArrowRight size={17} /></Link></motion.div></div>}
      </main>
      <Footer />
    </>
  );
}