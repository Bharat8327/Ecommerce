import React from 'react';
import Hero from '../../component/hero/Hero';
import Category from '../categories/Categories';
import Product from '../../component/product/Product';
function Home() {
  return (
    <div className="">
      <Hero />
      <section className="max-w-[1200px] mx-auto py-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div>
          <h2 className="text-2xl font-bold mt-10 sm:mt-20">
            Shop by category
          </h2>
          <p className="text-sm sm:text-base">
            Shop from the best, our film and TV Posters Collection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto py-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div>
          <h2 className="text-2xl font-bold mt-10 sm:mt-20">
            Our Top Picks
          </h2>
          <p className="text-sm sm:text-base">
           All New Designs, Same Old Details
           </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
