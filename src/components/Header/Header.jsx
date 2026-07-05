import "./Header.css";
import { FaDownload } from "react-icons/fa";
import patrika from "../../assets/Patrika.png";

export default function Header() {

const downloadInvitation = async () => {
  const response = await fetch(patrika);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Akshay-Harshada-Wedding-Invitation.png";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};

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
        <FaDownload
          className="download-icon"
          onClick={downloadInvitation}
          title="Download Invitation"
        />
      </div>

    </header>
  );
}