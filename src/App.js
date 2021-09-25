import { useEffect, useState } from "react";
import Cart from "./Components/cart/cart";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import "./App.css";
import { getLocalDb, saveDataToLocalDb } from "./util/LocalDb";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItem, setCardItem] = useState([]);
  const [searched, setSearched] = useState([]);
  const [loading,setLoading] = useState(true)
  const addToBagHandler = (p) => {
    setCardItem([...cartItem, p]);
    saveDataToLocalDb(p.id);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearched(data);
        setLoading(false)
      });
  }, []);
  useEffect(() => {
    let cartSavedItem = getLocalDb();
    if (products.length) {
      let savedCarts = [];
      for (const id in cartSavedItem) {
        let filterItem = products.find((p) => Number(p.id) === Number(id));
        filterItem["quantity"] = cartSavedItem[id];
        savedCarts.push(filterItem);
      }
      setCardItem(savedCarts);
      // console.log(savedCarts);
    }
  }, [products]);
  const searchHandler = (e) => {
    const searchvalue = e.target.value.toLowerCase();
    console.log(searchvalue);
    const filterSearch = products.filter((p) =>
      p.title.toLowerCase().includes(searchvalue)
    );
    setSearched(filterSearch);
  };
  return (
    <div className="app">
      {loading && <div class="loader"></div>}
      <Header searchHandler={searchHandler} />
      <Cart cartItem={cartItem} />
      <Products products={searched} addToBagHandler={addToBagHandler} />
    </div>
  );
}

export default App;
