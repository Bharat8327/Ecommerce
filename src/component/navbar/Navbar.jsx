import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-between px-5 py-3 items-center fixed w-full  bg-[#212121] text-white ">
      <div className="sm:block hidden">
        <div className="text-xl flex gap-5 font-semibold ">
          <div>
            <Link to={'/product?category=comis '}>
              {' '}
              <span className="hover:text-yellow-800">Comics</span>
            </Link>
          </div>
          <div>
            <Link to={'/product?category=tv&shows'}>
              {' '}
              <span className="hover:text-yellow-800">Tv shows</span>
            </Link>
          </div>
          <div>
            <Link to={'/product?category=sports'}>
              {' '}
              <span className="hover:text-yellow-800">Sports</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xl font-semibold sm:absolute left-[50%] static ">
        <Link to={'/'}>
          <span className="hover:text-yellow-800">Poster</span>
        </Link>
      </div>
      <div className="flex font-semibold ">
        <Link to="/cart">
          {' '}
          <div className="hover:text-yellow-600">
            <FaShoppingCart className="text-4xl" />
          </div>
          <span className="absolute sm:right-6 right-2 top-0 md:bg-yellow-400 rounded-md select-none font-bold md:opacity-55 text-red-600">
            325
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
