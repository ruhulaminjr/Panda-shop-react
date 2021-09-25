import React from "react";
import Rating from "react-rating";

const Product = ({ product, addToBagHandler }) => {
  const { category, image, price, rating, title } = product;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>

        <div>
          <Rating
            initialRating={rating.rate}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />
        </div>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title.slice(0, 36)}
        </h2>
        <p className="mt-1">${price}</p>
        <button
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          onClick={() => addToBagHandler(product)}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default Product;
