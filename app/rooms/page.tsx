import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms, formatINR } from "@/data/rooms";

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        <section className="inner-hero rooms-hero">
          <div><span className="eyebrow">THE STAYS</span><h1>Rooms made for <i>longer evenings.</i></h1><p>Three distinct expressions of Vedora, each designed around privacy, light and the pleasure of slowing down.</p></div>
        </section>
        <section className="rooms-list">
          {rooms.map((room, i) => (
            <article className="room-list-card" key={room.slug}>
              <Link href={`/rooms/${room.slug}`} className="room-list-image" style={{ backgroundImage: `url("${room.image}")` }}>
                <span>{room.tag}</span><b>0{i + 1}</b>
              </Link>
              <div className="room-list-copy">
                <div>
                  <span className="eyebrow">STAY 0{i + 1}</span>
                  <h2>{room.name}</h2><p>{room.description}</p>
                  <div className="room-meta"><span>{room.size}</span><span><Users size={14}/> up to {room.guests}</span><span>{room.bed}</span></div>
                </div>
                <div className="room-list-price"><small>FROM</small><strong>₹{formatINR(room.price)}</strong><small>PER NIGHT</small><Link className="text-btn dark" href={`/rooms/${room.slug}`}>Explore room <ArrowRight size={17}/></Link></div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}