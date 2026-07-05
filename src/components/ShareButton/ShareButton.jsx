import "./ShareButton.css";
import { Share2 } from "lucide-react";

export default function ShareButton() {

  const shareInvitation = () => {

    const url = window.location.href;

    const text =
`💍 आमच्या शुभ विवाह सोहळ्यास आपण सहकुटुंब उपस्थित राहून आम्हांस शुभाशीर्वाद द्यावा ही नम्र विनंती.

${url}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );

  };

  return (

    <button
      className="share-btn"
      onClick={shareInvitation}
    >

      <Share2 size={20} />

      Share Invitation

    </button>

  );

}