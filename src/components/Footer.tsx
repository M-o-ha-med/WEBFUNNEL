export default function Footer() {
  return (
    <div className="px-2 pt-16  sm:max-w-full md:max-w-full  md:px-4 lg:px-8 shadow-sm bg-gray-50">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-3">

        <div className="grid grid-cols-2 gap-8 row-gap-8 lg:col-span-4 md:grid-cols-3">
          <img src="../logoapp.svg" className="w-3/4 lg:w-1/4 mx-auto"/>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Alamat dan Jam Operasional
            </p>
			<p className="font-normal text-xl tracking-wide text-justify text-gray-600">
				Jl. Bina Asih Timur I No.2, Cipamukolan, Kec. Rancasari Kota Bandung Jawa Barat · 11 km
			</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <span className="text-xl">Senin - Jum'at<br />(08.00 - 17.00)</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Kontak</p>
            <ul className="mt-2 space-y-2 items-center">
              <li>
				  <a
					href="https://www.instagram.com/anugerahciptaarsitektur"
					className="flex items-center space-x-2 text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
				  >
					<svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
					  <circle cx="15" cy="15" r="4" />
					  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
					</svg>
				   Instagram
				  </a>
				  
              </li>
              <li>
				  <a
					href="https://web.facebook.com/anugerahciptaarsitektur"
					className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 flex items-center space-x-2 "
				  >
					<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
					  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
					</svg>
					
					Facebook
				  </a>
				  
              </li>
              <li>
				  <a
					href="https://www.linkedin.com/company/anugerah-cipta-arsitektur/"
					className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 flex items-center space-x-2"
					
				  >
					<svg viewBox="0 0 50 50" fill="currentColor" className="h-6">
				      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
					</svg>
					
					Linkedin
				   </a>
				   
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col  pt-5 pb-10  border-t-2 border-t-emerald-500 justify-center items-center sm:flex-row ">
        <p className="text-sm text-gray-800">
          © Copyright 2025 PT.Anugerah Cipta Arsitektur All rights reserved.
        </p>
      </div>
    </div>
  );
};