import React from 'react';

function Hero() {
  return (
    <div className="h-screen bg-[url(src/assets/ecommerce.png)]  bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-col items-center text-center gap-3 ">
        <h2 className="text-3xl font-bold text-black">
          Exclusive Print and Artword
        </h2>
        <p className="text-xl font-semibold">
          Exclusive Art Pieces, for the Exclusive You.
        </p>
        <button className="px-3 py-3 bg-blue-400 rounded-md active:bg-blue-300 cursor-pointer font-semibold text-white active:text-black">
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Hero;
