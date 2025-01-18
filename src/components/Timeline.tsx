

export default function Timeline() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">

      <div className="container">
	  	 <h2 className="text-center text-4xl font-bold tracking-tight m-4 text-gray-900 sm:text-5xl">
		Here are the outline for our work process 
     </h2>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* Left */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-emerald-700 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-emerald-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-500 shadow"></div>
            </div>
          </div>
          {/* Right */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-emerald-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-500 shadow"></div>
            </div>
            <div className="bg-emerald-700 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.
              </p>
            </div>
          </div>
          {/* Left */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-emerald-700 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-emerald-300 pointer-events-none bg-emerald-100"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-500 shadow"></div>
            </div>
          </div>
          {/* Left */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-emerald-700 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-emerald-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-500 shadow"></div>
            </div>
          </div>
          {/* Right */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-emerald-300 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-500 shadow"></div>
            </div>
            <div className="bg-emerald-700 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
