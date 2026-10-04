"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown, MapPin, Minus, Plus, Sparkles, Users } from "lucide-react";

const rooms = [
  {
    name: "Dusk Garden Villa",
    tag: "Most intimate",
    price: 18500,
    size: "720 sq ft",
    guests: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Moonlit Pool Suite",
    tag: "Private pool",
    price: 24500,
    size: "980 sq ft",
    guests: 3,
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Vedora Signature Villa",
    tag: "The signature stay",
    price: 32500,
    size: "1,420 sq ft",
    guests: 4,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85",
  },
];

const experiences = [
  ["Twilight Dining", "A private table under the last light of the day.", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"],
  ["Stillwater Spa", "Slow rituals, warm stone and a quieter pace.", "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"],
  ["Wild Coast", "Golden trails and hidden coves beyond the gardens.", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"],
];

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export default function Home() {
  const [dates, setDates] = useState({ checkIn: "2026-10-12", checkOut: "2026-10-15" });
  const [guests, setGuests] = useState(2);
  const [openGuests, setOpenGuests] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const nights = useMemo(() => {
    const start = new Date(dates.checkIn).getTime();
    const end = new Date(dates.checkOut).getTime();
    return Math.max(1, Math.round((end - start) / 86400000));
  }, [dates]);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#">
            <span>VEDORA</span>
            <small>RESORT & RETREATS</small>
          </a>
          <div className="nav-links">
            <a href="#stay">Stay</a>
            <a href="#experience">Experience</a>
            <a href="#story">Our story</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="nav-cta" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}>Reserve</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={14} /> COASTAL SLOW LUXURY</div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
            Escape into<br /><i>something extraordinary.</i>
          </motion.h1>
          <p>Where dusky skies, still water and thoughtful hospitality create room to breathe.</p>
          <a className="ghost-btn" href="#stay">Discover Vedora <ArrowRight size={17} /></a>
        </div>
        <div className="hero-caption">
          <span>01</span>
          <div><strong>Where the evening lingers</strong><small>Vedora Coast, India</small></div>
        </div>
      </section>

      <section id="booking" className="booking-shell">
        <div className="booking-panel">
          <div className="booking-field">
            <CalendarDays size={18} />
            <label>CHECK IN<input type="date" value={dates.checkIn} onChange={(e) => setDates(v => ({ ...v, checkIn: e.target.value }))} /></label>
          </div>
          <div className="booking-field">
            <CalendarDays size={18} />
            <label>CHECK OUT<input type="date" value={dates.checkOut} onChange={(e) => setDates(v => ({ ...v, checkOut: e.target.value }))} /></label>
          </div>
          <div className="booking-field guest-field" onClick={() => setOpenGuests(v => !v)}>
            <Users size={18} />
            <label>GUESTS<span>{guests} guests</span></label>
            <ChevronDown size={16} />
            {openGuests && <div className="guest-menu">
              <button onClick={(e) => { e.stopPropagation(); setGuests(g => Math.max(1, g - 1)); }}><Minus size={14} /></button>
              <strong>{guests}</strong>
              <button onClick={(e) => { e.stopPropagation(); setGuests(g => Math.min(6, g + 1)); }}><Plus size={14} /></button>
            </div>}
          </div>
          <button className="booking-btn" onClick={() => setConfirmation(true)}>Check availability <ArrowRight size={17} /></button>
        </div>
      </section>

      <section id="stay" className="section room-section">
        <div className="section-heading">
          <div><span className="eyebrow">THE STAYS</span><h2>Rooms made for<br /><i>longer evenings.</i></h2></div>
          <p>Three distinct ways to stay at Vedora, all designed around light, space and privacy.</p>
        </div>
        <div className="room-grid">
          {rooms.map((room, i) => (
            <motion.article key={room.name} className="room-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
              <div className="room-image" style={{ backgroundImage: `url("${room.image}")` }}><span>{room.tag}</span></div>
              <div className="room-copy">
                <div><h3>{room.name}</h3><p>{room.size} · up to {room.guests} guests</p></div>
                <strong>₹{formatINR(room.price)}<small>/night</small></strong>
              </div>
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

      <section id="story" className="story">
        <div className="story-image" />
        <div className="story-copy"><span className="eyebrow">OUR STORY</span><h2>A resort built around the <i>last light.</i></h2><p>Vedora began with a simple idea: luxury doesn't need to be loud. It can be found in a room that opens to the breeze, a dinner that waits for sunset, and the feeling of nowhere else you need to be.</p><button className="text-btn">Read the Vedora story <ArrowRight size={17} /></button></div>
      </section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>The kind of place that makes you forget what time it is.</blockquote><span>— A VEDORA GUEST</span></section>

      <footer id="contact" className="footer">
        <div><div className="brand footer-brand"><span>VEDORA</span><small>RESORT & RETREATS</small></div><p>Dusky days. Deep rest. Thoughtful stays.</p></div>
        <div className="footer-location"><MapPin size={17} /><span>Vedora Coast<br />South India</span></div>
        <div className="footer-links"><a href="#stay">Stay</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      </footer>

      {confirmation && (
        <div className="modal-backdrop" onClick={() => setConfirmation(false)}>
          <motion.div className="modal" initial={{ scale: .96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()}>
            <span className="eyebrow">AVAILABILITY PREVIEW</span>
            <h2>Your Vedora escape is <i>taking shape.</i></h2>
            <p>{nights} nights · {guests} guests · {dates.checkIn} to {dates.checkOut}</p>
            <div className="modal-price">From <strong>₹{formatINR(rooms[0].price * nights)}</strong></div>
            <p className="modal-note">Frontend demo only — the next iteration can connect this flow to real inventory, payments and confirmation emails.</p>
            <button className="booking-btn full" onClick={() => setConfirmation(false)}>Continue to room selection <ArrowRight size={17} /></button>
          </motion.div>
        </div>
      )}
    </main>
  );
}