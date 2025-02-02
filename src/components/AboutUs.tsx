export default function AboutUs(){
return (

<section id="AboutUs">
<div className="mx-auto   px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-2">
        <img
          src="../AboutUs.jpg"
          className="rounded"
          alt=""
        />
      </div>

      <div className="md:col-span-2">
        <div className="max-w-lg md:max-w-none">
		  <h3 className="text-3xl text-justify mt-4 text-gray-700 font-bold" >Mengubah Properti Impian Anda Menjadi Kenyataan.</h3>
          <p className="text-xl xl: text-2xl md:text-2xl text-justify mt-4 text-gray-700">
			Dengan pengalaman lebih dari 7 tahun, telah sukses mengerjakan proyek arsitektur mulai dari rumah pribadi hingga kompleks perumahan berskala besar,baik di dalam maupun luar negeri.
			Kami berdedikasi untuk membantu Anda membangun properti impian yang tidak hanya fungsional dan indah, tetapi juga melebihi ekspektasi Anda.
          </p>
        </div>
      </div>
    </div>
  </div>
</section >

);

}
