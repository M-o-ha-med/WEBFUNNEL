export default function VisionAndMission() {
  return (
    <section className="relative px-12 py-6 flex flex-col items-center" id="VisidanMisi">
      <h1 className="text-4xl font-bold text-center m-4">Visi dan Misi</h1>
      <div className="flex flex-col items-center gap-8">
        {/* Visi Section */}
        <div className="w-full md:w-3/4 lg:w-1/2 py-8 flex justify-center">
          <div className="px-12 py-12 bg-white ring-2 ring-gray-100 hover:shadow-md hover:shadow-bilbao-700 shadow-bilbao-700 transition-shadow rounded-md">
            <h2 className="text-4xl text-black md:text-5xl font-bold text-center">Visi</h2>
            <p className="sm:text-xl md:text-xl xl:text-xl text-black sm:p-4 text-justify whitespace-normal">
              “Menjadi konsultan arsitektur terpercaya yang menciptakan desain inovatif, fungsional, dan bernilai estetika tinggi untuk memenuhi kebutuhan masyarakat modern.”
            </p>
          </div>
        </div>
        {/* Misi Section */}
        <div className="w-full md:w-3/4 lg:w-1/2 flex justify-center">
          <div className="p-10 bg-white ring-2 ring-gray-100 hover:shadow-md hover:shadow-bilbao-700 shadow-bilbao-700 transition-shadow rounded-md">
            <h2 className="text-4xl text-black md:text-5xl font-bold text-center">Misi</h2>
            <ul className="list-decimal m-4 w-full sm:text-md xl:text-xl text-black">
              <li className = "xl:p-4 md:p-2 sm:p-2 text-justify whitespace-pre-line">Memberikan layanan desain yang kreatif, efisien, dan sesuai dengan kebutuhan klien.</li>
              <li className = "xl:p-4 md:p-2 sm:p-2 text-justify whitespace-pre-line">Mengutamakan kualitas dan ketepatan waktu dalam setiap proyek.</li>
              <li className = "xl:p-4 md:p-2 sm:p-2 text-justify whitespace-pre-line">Mengintegrasikan teknologi terkini untuk menghasilkan solusi arsitektur yang berkelanjutan dan ramah lingkungan.</li>
              <li className = "xl:p-4 md:p-2 sm:p-2 text-justify whitespace-pre-line">Membangun hubungan jangka panjang dengan klien melalui komunikasi yang transparan dan pelayanan terbaik.</li>
              <li className = "xl:p-4 md:p-6 sm:p-6 text-justify whitespace-pre-line">Mendorong pengembangan ide-ide baru dan pembelajaran berkelanjutan dalam tim untuk mendukung inovasi.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
