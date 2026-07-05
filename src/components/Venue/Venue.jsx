import "./Venue.css";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
} from "lucide-react";

export default function Venue() {

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/dir//GM7F%2B3QW+Sundarban+Lawns,+Ghotawade+Phata,Shindewadi,Kasar+amboli,Paud+Road,+Mulshi,+SH+60,+Kasar+Amboli,+Maharashtra+412115/@18.5127377,73.671881,17z/data=!4m17!1m7!3m6!1s0x3bc2bd2092121683:0xf2045774d514cf57!2sSundarban+Lawns!8m2!3d18.5127377!4d73.6744559!16s%2Fg%2F11xfml8x7!4m8!1m0!1m5!1m1!1s0x3bc2bd2092121683:0xf2045774d514cf57!2m2!1d73.6744559!2d18.5127377!3e0?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <section className="venue" id="venue">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Wedding Venue
      </motion.h2>

      <motion.div
        className="venue-card"
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400"
          alt="Venue"
        />

        <div className="venue-content">

          <h3>Sundarban Lawns</h3>

          <div className="venue-row">
            <CalendarDays size={18}/>
            <span>29 December 2026</span>
          </div>

          <div className="venue-row">
            <Clock3 size={18}/>
            <span>6:30 PM</span>
          </div>

          <div className="venue-row">
            <MapPin size={18}/>
            <span>
              Sundarban Lawns,
              Ghotawade Phata,
              Shindewadi,
              Kasar Amboli,
              Paud Road,
              Mulshi,
              Pirangut,
              Maharashtra - 412115
            </span>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Sundarban+Lawns+Pirangut&output=embed"
            loading="lazy"
          ></iframe>

          <button onClick={openMap}>
            <Navigation size={18}/>
            Get Directions
          </button>

        </div>

      </motion.div>

    </section>
  );
}   