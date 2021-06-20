import { useState } from "react";
import React from "react";
import Menu from "./menu";

const Gallery = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <div className="B flex justify-center mt-3">
        <button
          className="btn active inline-flex text-white bg-indigo-600 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-sm text-lg"
          onClick={() => setItems(Menu)}
        >
          Show All
        </button>
        <button
          className="btn ml-1 inline-flex text-white bg-gray-700 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 hover:text-gray-900 rounded-sm text-lg"
          onClick={() => filterItem("nature")}
        >
          Nature
        </button>
        <button
          className="btn ml-1 inline-flex text-white bg-gray-700 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 hover:text-gray-900 rounded-sm text-lg"
          onClick={() => filterItem("cars")}
        >
          Cars
        </button>
        <button
          className="btn ml-1 inline-flex text-white bg-gray-700 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 hover:text-gray-900 rounded-sm text-lg"
          onClick={() => filterItem("people")}
        >
          People
        </button>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((elem) => {
              const { id, name, image, cname, link } = elem;

              // add image onclick function

              function openImg() {
                window.open(image);
              }
              // function openTab() {
              //   window.download(link);
              // }
              // add image onclick function

              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full nature transform transition duration-200 hover:scale-105">
                  <a
                    onClick={openImg}
                    className="block relative h-48 rounded overflow-hidden"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={image}
                      className="object-cover object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-2 text-center">
                    <h3 className="text-gray-400 text-xs tracking-widest title-font mb-0">
                      {cname}
                    </h3>
                    <h2 className="NM text-gray-900 title-font text-lg font-medium">
                      {name}
                    </h2>
                    <div className="flex justify-center mt-1">
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white hover:border-transparent border border-blue-500 py-1 px-4 rounded inline-flex items-center">
                        <svg
                          className="fill-current w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>

                        <a href={link} download rel="noopener noreferrer">
                          <span>Download</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* end div */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
