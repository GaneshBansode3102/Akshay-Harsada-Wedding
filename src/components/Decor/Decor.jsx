import "./Decor.css";

export default function Decor() {
  return (
    <>
      <div className="corner tl">❀</div>
      <div className="corner tr">❀</div>
      <div className="corner bl">❀</div>
      <div className="corner br">❀</div>

      <div className="side left"></div>
      <div className="side right"></div>

      <div className="top-line"></div>
      <div className="bottom-line"></div>
    </>
  );
}