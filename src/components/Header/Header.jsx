import "./Header.css";
import { FaInstagram, FaMusic, FaDownload } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        💍 A & H
      </div>

      <nav>

        <a href="#hero">Home</a>

        <a href="#events">Events</a>

        <a href="#gallery">Gallery</a>

        <a href="#family">Family</a>

        <a href="#venue">Venue</a>

      </nav>

      <div className="icons">

        <FaDownload className="download-icon" />

      </div>

    </header>
  );
}