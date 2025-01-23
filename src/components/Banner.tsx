
export default function  Banner() {
return (
<section
  className="relative bg-[url(../foto-sampul.jpg)] bg-cover bg-center bg-no-repeat" id="Home"
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

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-emerald-600 shadow hover:text-emerald-700 focus:outline-none focus:ring active:text-emerald-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>);
}
