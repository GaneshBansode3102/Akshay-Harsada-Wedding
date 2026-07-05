import "./Particles.css";

export default function Particles() {

  return (
    <div className="particles">

      {[...Array(60)].map((_, i) => (

        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
          }}
        />

      ))}

    </div>
  );

}