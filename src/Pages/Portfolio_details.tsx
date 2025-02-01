import { MutableRefObject } from "react";
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import sampul_depan from "../assets/Rumah_Pak_Yopi/Sampul_depan.jpeg";
import konsep_rumah from "../assets/Rumah_Pak_Yopi/Konsep_rumah.jpeg";
import denah_rumah from "../assets/Rumah_Pak_Yopi/Denah_rumah.jpeg";
import tampak_depan from "../assets/Rumah_Pak_Yopi/Front.jpeg";
import tampak_belakang from "../assets/Rumah_Pak_Yopi/Rear.jpeg";
import tampak_kiri from "../assets/Rumah_Pak_Yopi/Left.jpeg";
import tampak_kanan from "../assets/Rumah_Pak_Yopi/Right.jpeg";

const images = import.meta.glob('../assets/Rumah_Pak_Yopi/INTERIOR*.jpeg', { eager: true });

const InteriorImages = Object.values(images).map((module: any) => module.default);


function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => slide.classList.remove("active"));
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }
    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }
    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function PortfolioDetails() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
	slides: { origin: "center", perView: 1, spacing: 2 },
  });
  
  const [othersliderRef, otherinstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
	slides: { origin: "center", perView: 1, spacing: 2 },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
	  slides: { origin: "center", perView: 4, spacing: 5 },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  
    const [otherthumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
	  slides: { origin: "center", perView: 4, spacing: 5 },
    },
    [ThumbnailPlugin(otherinstanceRef)]
  );

  return (
  

    <div className="flex flex-col items-center w-full md:shrink-0">
      <Navbar />
      <h2 className="font-bold text-4xl md:text-4xl xl:text-5xl sm:text-3xl py-10 text-center bg-gray-100 w-full">
        Tropical Modern House
      </h2>
      <div className="flex flex-col items-center md:shrink-0 my-20">
        <img
          src={sampul_depan}
          alt="Sampul Depan"
          className="object-scale-down xl:w-3/4 xl:h-3/4 rounded-md"
        />
      </div>
	  
      <h2 className="font-bold text-4xl md:text-6xl  xl:text-5xl sm:text-4xl py-10 text-center bg-gray-100 w-full">
        Konsep Rumah
      </h2>
      <div className="flex flex-col items-center md:shrink-0 my-20">
        <img
          src={konsep_rumah}
          alt="Konsep Rumah"
          className="object-scale-down xl:w-3/4 xl:h-3/4  rounded-md"
        />
      </div>
	  
      <h2 className="font-bold text-4xl md:text-6xl  xl:text-5xl sm:text-4xl py-10 text-center bg-gray-100 w-full">
        Denah Rumah
      </h2>
	  
      <div className="flex flex-col items-center md:shrink-0 my-20">
        <img
          src={denah_rumah}
          alt="Denah Rumah"
          className="object-scale-down xl:w-3/4 xl:h-3/4  rounded-md"
        />
      </div>

	  
	  <h2 className="font-bold text-4xl md:text-6xl  xl:text-5xl sm:text-4xl py-10 text-center bg-gray-100 w-screen">
        Tampak Rumah
      </h2>
      

		<div ref={sliderRef} className="keen-slider align-center m-4">
        <div className="flex keen-slider__slide justify-center  md:shrink-0">
          <img src={tampak_depan} alt="Slide 1" className="object-scale-down w-9/10 h-9/10 rounded-md" />
        </div>
        <div className="flex keen-slider__slide justify-center  md:shrink-0"> 
          <img src={tampak_belakang} alt="Slide 2" className="object-scale-down w-9/10 h-9/10 rounded-md" />
        </div>
        <div className="flex keen-slider__slide justify-center  md:shrink-0">
          <img src={tampak_kanan} alt="Slide 3" className="object-scale-down w-9/10 h-9/10 rounded-md " />
        </div>
        <div className="flex keen-slider__slide justify-center place-item-strech  md:shrink-0">
          <img src={tampak_kiri} alt="Slide 3" className="object-scale-down w-9/10 h-9/10  rounded-md" />
        </div>
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide">
          <img
            src={tampak_depan}
            alt="Thumbnail 1"
            className="object-scale-down w-3/10 h-3/10 rounded-sm"
          />
        </div>
        <div className="keen-slider__slide">
          <img
            src={tampak_belakang}
            alt="Thumbnail 2"
            className="object-scale-down w-3/10 h-3/10  rounded-sm"
          />
        </div>
        <div className="keen-slider__slide">
          <img
            src={tampak_kanan}
            alt="Thumbnail 3"
            className="object-scale-down w-3/10 h-3/10  rounded-sm"
          />
        </div>

        <div className="keen-slider__slide">
          <img
            src={tampak_kiri}
            alt="Thumbnail 3"
            className="object-scale-down w-3/10 h-3/10  rounded-sm"
          />
        </div>
		
      </div>


      <h2 className="font-bold text-4xl md:text-6xl  xl:text-5xl sm:text-4xl py-10 text-center bg-gray-100 w-full">
        Interior rumah
      </h2>

      <div ref={othersliderRef} className="keen-slider align-center m-4">
	  {InteriorImages.map( (item,index) => (
        <div className="flex keen-slider__slide justify-center  md:shrink-0" key={item}>
          <img src={item} alt={`Interior ${index + 1}`} className="object-scale-down w-9/10 h-9/10 rounded-md" />
        </div>
	  
	  ))}

      </div>
      <div ref={otherthumbnailRef} className="keen-slider thumbnail">
	  {InteriorImages.map((item , index) => (
        <div className="keen-slider__slide" key={item}>
          <img
            src={item}
            alt={`Thumbnail ${index + 1}`}
            className="object-scale-down w-3/10 h-3/10 rounded-sm"
          />
        </div>
 	  ))}
		
      </div>

      <Footer />
    </div>
  );
}
