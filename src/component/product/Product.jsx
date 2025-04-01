import camera from '../../assets/ecommerce.png';

function Product() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={camera} alt="Product" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Product Title</h2>
        <p className="text-sm text-gray-600 mt-2">
          This is a short description of the product. It highlights key features
          and benefits.
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-800">$99.99</span>
          <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-600 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
