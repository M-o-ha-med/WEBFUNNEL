{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
import { useEffect, useRef , useState } from "react";
import KeenSlider from "keen-slider";
import { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

  const reviewData  = [
	{
	  name : "Hana Shofa Aulia" , 
	  review:"Pelayanannya oke banget, transparan & bisa menyesuaikan dengan budget client. Arsiteknya bisa menuangkan kebutuhan kami dengan detail pada design yang dibuat. Good job!",
	  ProfilePic : "https://lh3.googleusercontent.com/a/ACg8ocJyyH15s2TjiJGzh29tAB8-skzd7s7qN_uQK7IfgjnkJAn4uIY=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Dedy S",
	  review: "Rekomendasi banget pakai jasa arsitek disini! Bisa mewujudkan ide desain sesuai keinginan yang kita mau mulai dari desain klasik, modern, mewah dan masih banyak lagi.. Yang penting anggaran sama pengerjaan tetap efisien 👍👍 …",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjXie-Z2HogALaAdR2kgwA_WN90Z2m8Fw_68wnvXDezd7zcozAtf=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Ediyansyah Rayyan",
	  review: "Pake jasa desain Anugerah Cipta Arsitektur memang pas. Pelayanannya baik, konsultasi mudah dan ramah, hasil desainnya sesuai dngan keinginan, dan harga terjangkau.",
	  ProfilePic : "https://lh3.googleusercontent.com/a/ACg8ocLLdq85YHGDb_VbirqVMEbrJPpopIA14nhVTBheLahbc2ZLUQ=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Rina Maulina",
	  review: "Jasa arsitektur paling sat set mah menurut aku..paling gercep, paling oke desainnya, transparan, ramah dikantong. Skuy recommended!!!",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjWdt0oZmhdjhuzatI5Irmqf9eRnYbe1K0hp-ol9MJnzzxERCk0=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Shaka Wahyu",
	  review: "Desainnya Bagus, sangat memuaskan, Pelayananya jga sangat baik semoga kedepannya bisa lebih sempurna lagi",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjWV2NXs7Bu4NcispWfDqLsZkPJ_tBPDU_rOJbnygedIxVUEcSR_=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Arfan Wicaksono",
	  review: "Kalo butuh desain mening disini, kualitas baik dan komunikasi enak juga, ngga kaku",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjX_uTEE0Y--w10FVkEAGkraFkknR4GnI5i2AOJrzqoOQkpepwfr=w36-h36-p-rp-mo-ba2-br100"
	},
	{
	  name: "Ains Adifen",
	  review: "Harga bersahabat, pekerjaan cepat. Rekomendasi banget yg butuh design baik pribadi maupun instansi. Sllu jadi langganan",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjVOGctpd9VFeDIVaxAjD65k7D1ZbbC48vc7L5haqLQ-8D85pkQRcw=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Puji Saeful",
	  review: "Desain nya sesuai dan keren pastinya... Pokoknya Jasa Desain Arsitektur disini aja",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjWqzavg0YXu2SIZiAvKAxGEjIymsGuUxOukUPu7cfnIHiBdhE4=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Ahmad Zaeni",
	  review: "Salah satu arsitek terpercaya hasil desain yang memuaskan, mantap",
	  ProfilePic : "https://lh3.googleusercontent.com/a-/ALV-UjXYe0JvFDmJG22JJyPKlULOD4tluomyxXgnY3_AYq2jelnUspo4=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Muhammad Febryan",
	  review: "jasa arsitektur paling mantep pokoknya di bandung!! recomended deh.",
	  ProfilePic : "https://lh3.googleusercontent.com/a/ACg8ocJmN_GuptbV2r1e5lLntGYUUde4PQQvERNHx0d2mlXBHlPXbSA=w36-h36-p-rp-mo-br100"
	},
	{
	  name: "Ikzir Zirs",
	  review: "Salah satu jasa arsitek terbaik di bandung, pelaksaan yang cepat dengan budget sesuai dengan kesepakatan",
	  ProfilePic : "https://lh3.googleusercontent.com/a/ACg8ocJ8SWrjYAdxIQGZh967gYGU3Cw91shbC8XmKA_Sn9NzUrznxQ=w36-h36-p-rp-mo-br100"
	},
  ]

export default function Testimonials() {

  const sliderRef = useRef(null);
  const keenSliderInstance = useRef<KeenSliderInstance | null>(null);;
  const [page , setPage] = useState(1);
  const totalPage = reviewData.length;
  useEffect(() => {
    const sliderElement = sliderRef.current;

    // Initialize KeenSlider
    keenSliderInstance.current = new KeenSlider(sliderElement!, {
      loop: true,
      defaultAnimation: { duration: 750 },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "center",
            perView: 1.5,
            spacing: 16,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "center",
            perView: 1.75,
            spacing: 16,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "center",
            perView: 3,
            spacing: 16,
          },
        },
      },
      created(slider) {
        updateActiveSlide(slider);
      },
      slideChanged(slider) {
        updateActiveSlide(slider);
      },
    });

	function updateActiveSlide(slider: KeenSliderInstance) {
	  const currentSlide = slider.track.details.rel;
	  setPage(currentSlide + 1); // Adjust for 0-based index
	  const slides = slider.slides;
	  slides.forEach((slide) => slide.classList.add("opacity-40"));
	  slides[currentSlide].classList.remove("opacity-40");
	}


    return () => {
      // Cleanup KeenSlider instance
      keenSliderInstance.current?.destroy();
    };
  }, []);

	const goToPrev = () => {
	  if (keenSliderInstance.current) {
		keenSliderInstance.current.prev();
		setPage((prev) => ((prev - 2 + totalPage) % totalPage) + 1); // Wrap around
	  }
	};

	const goToNext = () => {
	  if (keenSliderInstance.current) {
		keenSliderInstance.current.next();
		setPage((prev) => (prev % totalPage) + 1); // Wrap around
	  }
	};



return (
<section className="bg-white m-10" id="Testimoni">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Testimoni dari klien Anugerah cipta arsitektur
    </h2>

    <div className="mt-8">
      <div ref={sliderRef} className="keen-slider">
	  {reviewData.map((item) => (
        <div className="keen-slider__slide opacity-40 transition-opacity duration-500" key={item.name}>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 h-[18rem]" >
            <div className="flex items-center gap-4">
              <img
                alt=""
                src={item.ProfilePic}
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">{item.name}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
				{item.review}
            </p>
          </blockquote>
        </div>

        ))}
      </div>
		
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="text-gray-600 transition-colors hover:text-gray-900"
		  onClick={goToPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <p className="w-16 text-center text-sm text-gray-700">
          <span id="keen-slider-active">{page}</span>
          /
          <span id="keen-slider-count">{totalPage}</span>
        </p>

        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="text-gray-600 transition-colors hover:text-gray-900"
		  onClick={goToNext}
        >
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>


)
}
