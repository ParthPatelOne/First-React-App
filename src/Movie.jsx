import React from "react";
import "./new.css";
import { useState } from "react";
// import Movies from "./moviesdata";
import JSONDATA from "./MOCK_DATA.json";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* <h1 className="text-center -mb-2 text-gray-400 text-justify-center">
        If the search bar doesn't work, refresh the page once and the search bar
        will work
      </h1> */}
      <div class="max-w-7xl mx-14 mt-5 searchbox flex items-center rounded-md border-2 border-blue-700 border-opacity-100 shadow-xl">
        <input
          class="sh globalInputSearch rounded-md w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none hover:bg-gray-50"
          id="search"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <section className="text-gray-600 body-font globalTargetLists">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {JSONDATA.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val, key) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="bg overflow-hidden rounded-lg shadow-xl transform transition duration-200 hover:scale-105">
                    <a
                      href={val.image}
                      target="_blank"
                      className="block relative h-56 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={val.image}
                      />
                    </a>
                    <div className="mt-2 text-center">
                      <h3 className="text-gray-400 text-xs tracking-widest title-font mb-0">
                        {val.category}
                      </h3>
                      <h2 className="font text-gray-900 title-font text-lg font-medium">
                        {val.name}
                      </h2>
                      <span className="flex justify-center mt-1 mb-3">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white hover:border-transparent border border-blue-500 py-1 px-4 rounded inline-flex items-center">
                          <svg
                            className="fill-current w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                          </svg>
                          <a href={val.link}>
                            <span>Download</span>
                          </a>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
