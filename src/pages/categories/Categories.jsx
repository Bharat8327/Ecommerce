import React from 'react';
import camera from '../../assets/camera.jpg';
function Categories() {
  return (
    <div className="">
      <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <img
          src={camera}
          alt="Comic 1"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <h4 className="mt-2 text-lg font-semibold text-center sm:text-left">
          Comic 1
        </h4>
        <p className="text-sm text-gray-600 text-center sm:text-left">
          Description of Comic 1
        </p>
        <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 w-full sm:w-auto cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Categories;
