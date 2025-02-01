
export default function  Banner() {
return (
<section
  className="relative bg-[url(../foto-sampul.jpg)] bg-cover bg-center bg-no-repeat w-screen" id="Home" 
>
<div
  className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/25"
></div>


  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-bilbao-600 font-extrabold sm:text-5xl ">
       Merancang masa depan 

        <strong className="block font-extrabold text-emerald-600"> Melebihi ekspektasi anda </strong>
      </h1>

      <p className="mt-4 max-w-lg text-justify sm:text-xl/relaxed font-semibold">
		Wujudkan rumah impian Anda! Dari konsep hingga eksekusi, mulai dari Renovasi hingga membangun dari nol.
		kami pastikan setiap detail dirancang dengan fungsionalitas, estetika, dan kualitas terbaik. 
      </p>
	  
	  <p className="mt-4 max-w-lg sm:text-xl/relaxed font-bold">
		Klik di bawah untuk memulai konsultasi dan wujudkan rumah impian Anda sekarang!
	  </p>
	  
	  
	  
	  

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto"
        >
          Get Started
        </a>

      </div>
    </div>
  </div>
</section>);
}
