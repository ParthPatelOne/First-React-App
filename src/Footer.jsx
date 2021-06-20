import React from "react";

const Footer = () => {
  function openInsta() {
    window.open("https://www.instagram.com/invites/contact/?i=17ff31nlk2z1f&utm_content=6d7tf1f");
  }
  // function openFace() {
  //   window.open("https://www.w3schools.com/react/showreact.asp?filename=demo2_react_events");
  // }
  function openSite() {
    window.open("https://fakedeveloper.000webhostapp.com/");
  }
  return (
   
    <>
      <hr />
    
      <footer className="text-gray-600 body-font NAV">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="./img/load-gif.gif"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-12 h-12 text-white p-1 bg-gray-50 rounded-full"
            />
            <span className="ml-3 text-xl NM">PARTH PATEL</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 NM">
            © 2021.All rights reserved—
            <a
             
              className="text-gray-600 ml-1 NM"
              rel="noopener noreferrer"
              onClick={openInsta}
            >
              @ParthPatel
            </a>
          </p>
          <span className=" inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 NM">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              onClick={openInsta}
              
              className="ml-3 text-gray-500 NM"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a onClick={openSite}  className="ml-3 text-gray-500  -mt-2">
              <button class="NM bg-transparent hover:bg-gray-900 text-blue-700 font-semibold hover:text-white py-1 px-2  border border-gray-400 hover:border-transparent rounded">
                Basic Site
              </button>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
