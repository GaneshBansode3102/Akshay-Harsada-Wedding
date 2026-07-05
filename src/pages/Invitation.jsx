import { useState } from "react";

import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Decor from "../components/Decor/Decor";
import Flowers from "../components/Flowers/Flowers";
import Music from "../components/Music/Music";
import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import Family from "../components/Family/Family";
import Venue from "../components/Venue/Venue";
import Footer from "../components/Footer/Footer";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";

import Confetti from "../components/Confetti/Confetti";
import Particles from "../components/Particles/Particles";
export default function Invitation() {

  //   const [open,setOpen]=useState(false);

  //   if(!open){
  //     return <Loader onComplete={()=>setOpen(true)} />;
  //   }

  return (
    <>
      <ScrollProgress />
      <Header />
      <Confetti />
      <Decor />
      <Particles />
      <Flowers />
      <Music />

      <Hero />
      <Countdown />
      <Events />
      <Gallery />
      <Family />
      <Venue />
      <Footer />
    </>
  );
}