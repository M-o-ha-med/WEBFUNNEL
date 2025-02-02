import { useState } from "react";
import sampul_depan from "../assets/Rumah_Pak_Yopi/Sampul_depan.jpeg";
const Portofolio = () => {
  const [showCard, setShowCard] = useState<string>("all");

    const handleProject = (category : string) => {
    setShowCard(category);
}

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark" id="Portfolio">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark mb-3 text-4xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Portofolio Kami
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  Berikut adalah seluruh proyek yang telah kami kerjakan
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Semua Projek")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-bilbao-700  text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-bilbao-700 hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Rumah")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-bilbao-700  text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-bilbao-700 hover:text-white"
                    }`}
                  >
                    Rumah
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Tempat ibadah")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-bilbao-700  text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-bilbao-700 hover:text-white"
                    }`}
                  >
                    Tempat ibadah
                  </button>
                </li>
 
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref={sampul_depan}
              category="Rumah"
              title="Modern Tropical House - Aceh"
              button="View Details"
              buttonHref="/ModernTropicalHouseAceh"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;

interface portofolioCardprops {
  category : string;
  ImageHref : string;
  title : string;
  button : string;
  buttonHref : string;
  showCard : string;

}
const PortfolioCard = (props:portofolioCardprops) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          props.showCard === "all" || props.showCard === props.category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={props.ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-xl dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {props.category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{props.title}</h3>
            <a
              href={props.buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-bilbao-700 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {props.button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
