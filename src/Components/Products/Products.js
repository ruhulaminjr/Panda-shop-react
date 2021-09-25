import React from "react";
import Product from "../product/product";

const Products = ({ products,addToBagHandler }) => {

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => (
              <Product product={item} key={item.id} addToBagHandler={addToBagHandler}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
