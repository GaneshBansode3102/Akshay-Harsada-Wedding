import "../Events/Events.css";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const events = [
  {
    title: "Haldi Ceremony",
    date: "29 Dec 2026",
    time: "3:00 PM",
    venue: "Sundarban Lawns",
    color: "#FFD54F",
  },
  {
    title: "Sangeet Night",
    date: "29 Dec 2026",
    time: "4:00 PM",
    venue: "Sundarban Lawns",
    color: "#F48FB1",
  },
  {
    title: "Wedding",
    date: "29 Dec 2026",
    time: "6:30 PM",
    venue: "Sundarban Lawns",
    color: "#C8A02E",
  },
  {
    title: "Reception",
    date: "02 Jan 2027",
    time: "7:00 PM",
    venue: "Sundarban Lawns",
    color: "#90CAF9",
  },
];

export default function Events() {
  return (
    <section className="events" id="events">

      <h2>Wedding Events</h2>

      <div className="events-grid">

        {events.map((item, index) => (

          <motion.div
            className="event-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: index * .15 }}
            viewport={{ once: true }}
          >

            <div
              className="event-circle"
              style={{ background: item.color }}
            >
              ❤
            </div>

            <h3>{item.title}</h3>

            <div className="event-row">
              <CalendarDays size={18} />
              <span>{item.date}</span>
            </div>

            <div className="event-row">
              <Clock3 size={18} />
              <span>{item.time}</span>
            </div>

            <div className="event-row">
              <MapPin size={18} />
              <span>{item.venue}</span>
            </div>

            <button>
              View Details
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}