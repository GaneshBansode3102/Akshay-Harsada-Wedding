import "./Countdown.css";
import Countdown from "react-countdown";
import weddingData from "../../data/weddingData";
import { motion } from "framer-motion";

export default function CountdownSection() {

  const targetDate = new Date(
    weddingData.wedding.date
  ).getTime();

  const renderer = ({ days, hours, minutes, seconds }) => (

    <motion.div
      className="countdown-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
    >

      <h2>Save The Date</h2>

      <p className="subtitle">
        We can't wait to celebrate with you
      </p>

      <div className="timer">

        <div className="circle">
          <h1>{days}</h1>
          <span>Days</span>
        </div>

        <div className="circle">
          <h1>{hours}</h1>
          <span>Hours</span>
        </div>

        <div className="circle">
          <h1>{minutes}</h1>
          <span>Minutes</span>
        </div>

        <div className="circle">
          <h1>{seconds}</h1>
          <span>Seconds</span>
        </div>

      </div>

    </motion.div>

  );

  return (
    <section className="countdown">
      <Countdown
        date={targetDate}
        renderer={renderer}
      />
    </section>
  );

}