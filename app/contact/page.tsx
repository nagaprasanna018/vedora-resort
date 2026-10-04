"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [sent,setSent]=useState(false);
  return <><Navbar/><main className="contact-page"><section className="contact-intro"><div><span className="eyebrow">COME SAY HELLO</span><h1>We'd love to <i>hear from you.</i></h1><p>Tell us about your stay, celebration or simply ask us what the tide is like.</p></div><div className="contact-details"><p><MapPin size={17}/> Vedora Coast, South India</p><p><Mail size={17}/> hello@vedora.example</p><p><Phone size={17}/> +91 80 0000 0000</p></div></section><section className="contact-grid"><div className="contact-image"/><div className="contact-form">{sent?<div className="contact-sent"><span className="eyebrow">MESSAGE RECEIVED</span><h2>We'll be in touch <i>soon.</i></h2><p>This frontend demo has captured your intent without sending data anywhere.</p></div>:<><span className="eyebrow">SEND A NOTE</span><h2>Let's start a conversation.</h2><label>YOUR NAME<input placeholder="Your name"/></label><label>EMAIL<input placeholder="you@example.com" type="email"/></label><label>MESSAGE<textarea placeholder="How can we help?" rows={5}/></label><button className="booking-btn" onClick={()=>setSent(true)}>Send message <ArrowRight size={16}/></button></>}</div></section></main><Footer/></>;
}