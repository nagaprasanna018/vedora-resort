import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomTour from "@/components/RoomTour";
import Reviews from "@/components/Reviews";
import { getRoom, rooms, formatINR } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) {
    return <><Navbar /><main className="not-found"><span className="eyebrow">VEDORA</span><h1>Room not found.</h1><Link className="text-btn dark" href="/rooms">Back to stays <ArrowLeft size={17}/></Link></main><Footer /></>;
  }

  return (
    <>
      <Navbar />
      <main className="room-detail">
        <section className="detail-hero">
          <div className="detail-main-image" style={{ backgroundImage: `url("${room.gallery[0]}")` }} />
          <div className="detail-hero-overlay">
            <Link href="/rooms" className="back-link"><ArrowLeft size={15}/> All stays</Link>
            <span className="eyebrow">{room.tag}</span>
            <h1>{room.name}</h1>
          </div>
        </section>

        <section className="detail-content">
          <div className="detail-intro"><span className="eyebrow">A VEDORA STAY</span><h2>{room.short}<br /><i>without hurry.</i></h2><p>{room.description}</p></div>
          <aside className="booking-card">
            <span className="eyebrow">FROM</span><strong>₹{formatINR(room.price)}</strong><small>per night</small>
            <div className="booking-card-line" />
            <div className="mini-facts"><span>{room.size}</span><span>{room.guests} guests</span><span>{room.bed}</span></div>
            <Link href={`/booking?room=${room.slug}`} className="booking-btn full">Reserve this stay <ArrowRight size={16}/></Link>
            <small className="muted-note">Best available rate · breakfast included</small>
          </aside>
        </section>

        <RoomTour items={room.tour} />

        <section className="detail-gallery">
          <div className="detail-gallery-main" style={{ backgroundImage: `url("${room.gallery[1]}")` }}><span>THE LIVING SPACE</span></div>
          <div className="detail-gallery-side">
            <div style={{ backgroundImage: `url("${room.gallery[2]}")` }}><span>THE DETAILS</span></div>
            <div className="amenities-panel"><span className="eyebrow">EVERYTHING YOU NEED</span><div className="amenity-grid">{room.amenities.map((a)=><span key={a}><Check size={14}/>{a}</span>)}</div></div>
          </div>
        </section>

        <Reviews reviews={room.reviews} />

        <section className="stay-notes">
          <div><span className="eyebrow">YOUR STAY</span><h2>Arrive. Exhale. <i>Stay awhile.</i></h2></div>
          <div className="notes-grid"><p><strong>Check-in</strong> from 2:00 PM</p><p><strong>Check-out</strong> until 11:00 AM</p><p><strong>Breakfast</strong> daily, 7:30–10:30 AM</p><p><strong>Spa ritual</strong> reserve 60 minutes</p></div>
        </section>
      </main>
      <Footer />
    </>
  );
}