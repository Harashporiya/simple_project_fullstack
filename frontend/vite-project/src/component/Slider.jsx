import React from "react";
import HeroSlider, { Slide, Nav, Overlay} from "hero-slider";
import Dc from "./Dc";
import Header from "./Header";

function Slider() {
  const handleBeforeSliding = (previousSlide, nextSlide) => {
    console.debug(
      "onBeforeSliding(previousSlide, nextSlide): ",
      previousSlide,
      nextSlide
    );
  };

  const handleAfterSliding = (nextSlide) => {
    console.debug("onAfterSliding(nextSlide): ", nextSlide);
  };

  return (
    <div>
      <Header />
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onBeforeSliding: handleBeforeSliding,
          onAfterSliding: handleAfterSliding,
        }}
      >
        <Overlay>
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-transparent to-black text-white">
            <h1 className="text-6xl w-4/5 text-center font-bold mb-4">
              Heroic Missteps: Unveiling Superheroes' Least Heroic Moments
            </h1>
            <h2 className="text-3xl w-4/5 text-center font-medium mb-2">
              Exploring the Awkward, Useless, and Detrimental Side of
              Superheroism
            </h2>
            <p className="text-2xl w-4/5 text-center mt-10">
              Dive into the extraordinary world of superheroes through 'Hero
              Rank,' where we shed light on those moments when even the
              mightiest heroes had their fair share of missteps. From comically
              useless scenes to unintended consequences, join us on a journey of
              laughter, reflection, and a fresh perspective on the lighter side
              of heroism. Because even the most powerful beings have their off
              days!
            </p>
          </div>
        </Overlay>

        <Slide
          background={{
            backgroundImage: 'url("https://i.imgur.com/tEvSreU.jpeg")',
            backgroundAttachment: "fixed",
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://wallpapers.com/images/featured/4k-avengers-gx5riyd6eqklm4hf.jpg")',
            backgroundAttachment: "fixed",
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://images3.alphacoders.com/666/666317.jpg")',
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://cdn.mos.cms.futurecdn.net/qDe5fSKMdj9WGq67o4Frvd.jpg")',
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://sm.ign.com/ign_nordic/lists/t/the-25-bes/the-25-best-marvel-heroes-ever_xb4n.jpg")',
            backgroundAttachment: "fixed",
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://staticg.sportskeeda.com/editor/2023/04/5f3a8-16810185653074-1920.jpg")',
            backgroundAttachment: "fixed",
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/ea/b7/bc/eab7bc257d227a0c2d0b145d9096d17b.jpg")',
            backgroundAttachment: "fixed",
          }}
        ></Slide>

        <Slide
          background={{
            backgroundImage:
              'url("https://wallpapers.com/images/featured/4k-marvel-awrqh8lcgyk3crjc.jpg")',
            backgroundAttachment: "fixed",
          }}
        ></Slide>
      

        {/* <SideNav /> */}
        <Nav/>
      </HeroSlider>
    
    </div>
  );
}

export default Slider;
