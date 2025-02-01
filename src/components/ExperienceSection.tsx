interface ServiceCardProps{
	ServiceType: string;
	ListofServices: string[];


}


function ServiceCard(props:ServiceCardProps){
return (
    <div className="py-8">
        <div className="px-6 py-6  w-[20rem] h-[30rem] bg-white ring-2 ring-bilbao-50 hover:shadow-md hover:shadow-bilbao-300 shadow-bilbao-100 transition-shadow rounded-md">
            <h2 className="text-xl text-black  font-bold text-center ">
                {props.ServiceType}
            </h2>
			<ul className="list-disc">
				{props.ListofServices.map((item) =>(
				<li key={item} className="m-4">{item}</li>
				))}
			</ul>
        </div>
    </div>


);

}

export default function ExperienceSection(){

return(
<div className="p-4 md:p-6 text-black bg-white ">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Jasa yang kami tawarkan
    </h2>
	<div className="flex flex-wrap justify-center items-center gap-4">

			<ServiceCard 
			ServiceType="Jasa Desain Arsitektur, Drafter dan Gambar Kerja" 
			ListofServices={["Perancangan konsep desain bangunan (eksterior dan interior).","Desain rumah tinggal, komersial, dan fasilitas publik.","Konsultasi desain untuk renovasi atau perluasan bangunan.","Penyusunan gambar kerja detail (technical drawing).","Pembuatan gambar PBG (Persetujuan Bangunan Gedung) sesuai standar regulasi." ]}
			/>

			<ServiceCard 
			ServiceType="Jasa Desain Interior" 
			ListofServices={["Perancangan tata ruang dan elemen interior untuk estetika dan fungsionalitas.","Penyusunan konsep furniture custom."]}
			/>
			
			<ServiceCard 
			ServiceType="Jasa Desain Lanskap" 
			ListofServices={["Perencanaan taman dan area hijau untuk bangunan.","Integrasi elemen lanskap dengan desain arsitektur."]}	/>
			
			<ServiceCard 
			ServiceType="Konsultasi Perencanaan" 
			ListofServices={["Analisis kebutuhan klien dan feasibility study proyek.","Konsultasi pemilihan material, budget, dan jadwal pembangunan."]}
			/>
			
			<ServiceCard 
			ServiceType="Manajemen Proyek" 
			ListofServices={["Pengawasan proyek dari desain hingga pelaksanaan pembangunan.","Koordinasi antara klien dan kontraktor untuk memastikan kualitas hasil sesuai desain."]}
			/>


		
	</div>
</div>




);

}