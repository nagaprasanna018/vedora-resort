import Link from "next/link";
import { ArrowRight, Compass, Leaf, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  ["01", "Quiet luxury", "We believe the best luxury is the kind you feel rather than see: space, privacy, natural materials and a team that remembers the little things."],
  ["02", "Sense of place", "Vedora is rooted in its coast, its gardens and its changing light. The landscape isn't a backdrop here; it is part of the stay."],
  ["03", "The slower hour", "There is always another hour for breakfast, another swim before dinner, another sunset to wait for. We design the stay around that freedom."]
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero"><div><span className="eyebrow"><Sparkles size={14}/> THE VEDORA STORY</span><h1>Made for the <i>space between.</i></h1><p>Vedora is a small coastal retreat shaped by warm evenings, green gardens and the belief that getting away should feel different from simply going somewhere.</p></div></section>
        <section className="about-intro"><div className="about-image"/><div className="about-copy"><span className="eyebrow">WHY VEDORA</span><h2>Luxury with <i>room to breathe.</i></h2><p>We built Vedora around the last light of the day. Every villa faces a garden, pool or open horizon. Every ritual is deliberately unhurried. And every stay is imagined as a reset rather than an itinerary.</p><p>From the first coffee to the final night swim, our aim is simple: leave you with fewer notifications, longer lunches and a better memory of time.</p><Link className="text-btn dark" href="/rooms">Explore the stays <ArrowRight size={17}/></Link></div></section>
        <section className="about-values"><div className="about-values-head"><span className="eyebrow">OUR BELIEFS</span><h2>Small details. <i>Deep impact.</i></h2></div><div className="values-grid">{values.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
        <section className="about-experience"><div className="about-experience-copy"><span className="eyebrow">ONE PROPERTY, MANY RHYTHMS</span><h2>Swim. Wander. <i>Restore.</i></h2><p>Start with the pool. Drift to the spa. Take the garden trail before dusk, then settle into a table that waits for sunset.</p><Link className="booking-btn" href="/booking">Plan your stay <ArrowRight size={16}/></Link></div><div className="about-experience-image"/></section>
        <section className="about-amenities"><div><Compass size={24}/><span>THE COAST</span><p>Salt air and soft horizons</p></div><div><Leaf size={24}/><span>THE GARDENS</span><p>Native greens and hidden corners</p></div><div><Sparkles size={24}/><span>THE RITUALS</span><p>Spa, dining and dusk swims</p></div></section>
      </main>
      <Footer />
    </>
  );
}