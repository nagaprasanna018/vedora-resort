import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand footer-brand" href="/"><span>VEDORA</span><small>RESORT & RETREATS</small></Link>
        <p>Dusky days. Deep rest. Thoughtful stays.</p>
      </div>
      <div className="footer-location"><MapPin size={17} /><span>Vedora Coast<br />South India</span></div>
      <div className="footer-links">
        <Link href="/rooms">Stay</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@vedora.example"><Mail size={15} /> Email</a>
        <a href="#instagram"><Instagram size={15} /> Instagram</a>
      </div>
    </footer>
  );
}