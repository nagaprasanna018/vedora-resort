"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Minus, Plus, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms, formatINR } from "@/data/rooms";

const steps = ["Dates", "Stay", "Details", "Confirm"];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [roomSlug, setRoomSlug] = useState(rooms[1].slug);
  const [guests, setGuests] = useState(2);
  const [dates, setDates] = useState({ checkIn: "2026-10-12", checkOut: "2026-10-15" });
  const [guest, setGuest] = useState({ name: "", email: "", phone: "" });
  const [confirmed, setConfirmed] = useState(false);

  const room = rooms.find((r) => r.slug === roomSlug) ?? rooms[0];
  const nights = useMemo(() => {
    const start = new Date(dates.checkIn).getTime();
    const end = new Date(dates.checkOut).getTime();
    return Math.max(1, Math.round((end - start) / 86400000));
  }, [dates]);
  const total = room.price * nights;

  const next = () => setStep((s) => Math.min(3, s + 1));

  if (confirmed) {
    return (
      <><Navbar /><main className="confirmation-page"><div className="confirm-card"><div className="confirm-icon"><Check size={30}/></div><span className="eyebrow">RESERVATION REQUEST RECEIVED</span><h1>Your Vedora escape is <i>taking shape.</i></h1><p>Thank you{guest.name ? `, ${guest.name}` : ""}. Your frontend reservation is saved for this demo.</p><div className="confirm-grid"><div><small>RESERVATION</small><strong>VDR-{Math.floor(10000 + Math.random()*89999)}</strong></div><div><small>STAY</small><strong>{room.name}</strong></div><div><small>DATES</small><strong>{dates.checkIn} → {dates.checkOut}</strong></div><div><small>ESTIMATED TOTAL</small><strong>₹{formatINR(total)}</strong></div></div><Link className="booking-btn full" href="/rooms">Explore more stays <ArrowRight size={16}/></Link></div></main><Footer /></>
    );
  }

  return (
    <><Navbar /><main className="booking-page">
      <div className="booking-heading"><Link className="back-link dark-link" href="/rooms"><ArrowLeft size={15}/> Back to stays</Link><span className="eyebrow">RESERVE YOUR ESCAPE</span><h1>A slower kind of <i>luxury.</i></h1></div>
      <div className="stepper">{steps.map((s,i)=><div key={s} className={i<=step?"active":""}><span>0{i+1}</span>{s}</div>)}</div>
      <section className="booking-layout">
        <div className="booking-form-panel">
          {step===0 && <div className="form-step"><span className="eyebrow">01 · YOUR DATES</span><h2>When will you arrive?</h2><div className="form-grid two"><label>CHECK IN<input type="date" value={dates.checkIn} onChange={e=>setDates(v=>({...v,checkIn:e.target.value}))}/></label><label>CHECK OUT<input type="date" value={dates.checkOut} onChange={e=>setDates(v=>({...v,checkOut:e.target.value}))}/></label></div><div className="form-grid"><label>GUESTS<div className="counter"><button type="button" onClick={()=>setGuests(g=>Math.max(1,g-1))}><Minus size={15}/></button><strong>{guests} guests</strong><button type="button" onClick={()=>setGuests(g=>Math.min(room.guests,g+1))}><Plus size={15}/></button></div></label></div></div>}
          {step===1 && <div className="form-step"><span className="eyebrow">02 · CHOOSE YOUR STAY</span><h2>Pick the room that feels like you.</h2><div className="select-rooms">{rooms.map(r=><button key={r.slug} className={r.slug===roomSlug?"selected":""} onClick={()=>setRoomSlug(r.slug)}><span className="select-room-image" style={{backgroundImage:`url("${r.image}")`}}/><span><strong>{r.name}</strong><small>₹{formatINR(r.price)} / night</small></span>{r.slug===roomSlug&&<Check size={17}/>}</button>)}</div></div>}
          {step===2 && <div className="form-step"><span className="eyebrow">03 · GUEST DETAILS</span><h2>Who should we prepare the stay for?</h2><div className="form-grid"><label>FULL NAME<input placeholder="Your name" value={guest.name} onChange={e=>setGuest(v=>({...v,name:e.target.value}))}/></label><label>EMAIL<input type="email" placeholder="you@example.com" value={guest.email} onChange={e=>setGuest(v=>({...v,email:e.target.value}))}/></label><label>PHONE<input placeholder="+91" value={guest.phone} onChange={e=>setGuest(v=>({...v,phone:e.target.value}))}/></label></div></div>}
          {step===3 && <div className="form-step"><span className="eyebrow">04 · REVIEW</span><h2>One last look before your stay.</h2><div className="review-list"><div><span>DATES</span><strong>{dates.checkIn} → {dates.checkOut}</strong></div><div><span>GUESTS</span><strong>{guests}</strong></div><div><span>ROOM</span><strong>{room.name}</strong></div><div><span>GUEST</span><strong>{guest.name || "Guest"}</strong></div><div><span>TOTAL</span><strong>₹{formatINR(total)}</strong></div></div><div className="secure-note"><ShieldCheck size={16}/> Demo flow — no payment is collected.</div></div>}
          <div className="form-actions"><button className="back-step" onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0}>Back</button><button className="booking-btn" onClick={()=>step===3?setConfirmed(true):next()}>{step===3?"Request reservation":"Continue"} <ArrowRight size={16}/></button></div>
        </div>
        <aside className="booking-summary"><div className="summary-image" style={{backgroundImage:`url("${room.image}")`}}/><span className="eyebrow">YOUR STAY</span><h3>{room.name}</h3><p>{nights} nights · {guests} guests</p><div className="summary-row"><span>₹{formatINR(room.price)} × {nights}</span><strong>₹{formatINR(total)}</strong></div><div className="summary-row muted"><span>Taxes</span><span>Included in demo</span></div><div className="summary-total"><span>ESTIMATED TOTAL</span><strong>₹{formatINR(total)}</strong></div></aside>
      </section>
    </main><Footer /></>
  );
}