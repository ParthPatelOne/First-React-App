import React from "react";
// import ReactPlayer from 'react-player';
// import {Link} from "react-router-dom";
const Home = () => {

  // add subscribe onclick function
  function openTab() {
    window.open('https://www.youtube.com/channel/UC9Hg731splneZdAHFhT1Thw');
    };
  return (
   
     
   <div className="text-gray-600 body-font ">
      <div className="container  mx-auto flex px-5 py-16 items-center justify-center flex-col">

        <iframe width="560" height="315" className="lg:w-3/4 lg:h-96 md:h-96 md:w-5/6 w-5/6 mb-4 object-cover object-center rounded" src="https://www.youtube.com/embed/IrGJ1C_VpcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <ReactPlayer className="lg:w-3/4 lg:h-96 md:h-96 md:w-5/6 w-5/6 mb-4 object-cover object-center rounded" url="https://youtu.be/OFl9oSbPE0s" control={true}/> */}
        <div className="text-center lg:w-2/3 w-full ">
          <h1 className="NM title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">MX GAMER</h1>
          <div className="flex justify-center animate-pulse">
            <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-sm text-lg"><a onClick={openTab} rel="noopener noreferrer"><span>SUBSCRIBE</span></a></button>

          </div>
        </div>
  </div>
    </div>
    
  );
};

export default Home;
