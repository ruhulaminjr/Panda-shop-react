import React from "react";

const Cart = ({ cartItem }) => {
  // console.log(cartItem)
  // const cartTotal = cartItem.reduce(
  //   (prev, cartItem) => prev + cartItem.price,
  //   0
  // );
  let cartTotal = 0;
  let cartQuantity = 0;
  for (const item of cartItem) {
    let itemquantity = item.quantity ? item.quantity : 1;
    cartTotal += item.price * itemquantity;
    cartQuantity += itemquantity;
  }
  const tax = cartTotal * 0.18;
  const shipping = cartItem.length ? 10 : 0;
  const subTotal = cartTotal + tax + shipping;
  return (
    <div id="summary" className="px-2 py-3 w-1/5 mx-auto">
      <h1 className="font-semibold text-2xl border-b pb-5">Order Summary</h1>
      <div className="flex justify-between mt-1 mb-2">
        <span className="font-semibold text-sm uppercase">
          Items: {cartQuantity}
        </span>
        <span className="font-semibold text-sm">{cartTotal.toFixed(2)}$</span>
      </div>
      <div className="flex justify-between mt-2 mb-2">
        <span className="font-semibold text-sm uppercase">Shipping:</span>
        <span className="font-semibold text-sm">{shipping}$</span>
      </div>
      <div className="flex justify-between mt-3 mb-2">
        <span className="font-semibold text-sm uppercase">Tax:</span>
        <span className="font-semibold text-sm">{tax.toFixed(2)}$</span>
      </div>
      <div className="border-t mt-5">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
