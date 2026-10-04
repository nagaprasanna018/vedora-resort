"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/rooms", "Stay"],
    ["/gallery", "Gallery"],
    ["/#experience", "Experience"],
    ["/about", "About"],
    ["/contact", "Contact"]
  ];

  return (
    <header className="site-nav">
      <nav className="nav">
        <Link className="brand" href="/">
          <span>VEDORA</span>
          <small>RESORT & RETREATS</small>
        </Link>
        <div className="nav-links">
          {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <Link className="nav-cta" href="/booking">Reserve</Link>
        <button className="mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
      </nav>

      {open && (
        <div className="mobile-panel">
          <div className="mobile-panel-head">
            <Link className="brand" href="/" onClick={() => setOpen(false)}><span>VEDORA</span><small>RESORT & RETREATS</small></Link>
            <button className="mobile-menu-btn light" onClick={() => setOpen(false)} aria-label="Close menu"><X size={21} /></button>
          </div>
          <div className="mobile-panel-links">
            {links.map(([href, label], i) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</Link>)}
          </div>
          <Link className="booking-btn mobile-reserve" href="/booking" onClick={() => setOpen(false)}>Begin your stay</Link>
        </div>
      )}
    </header>
  );
}