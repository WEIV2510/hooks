import "./App.css";
import { useState } from "react";
import { userContext } from "./Context";
import Header from "./Header";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <div className="App">
      <userContext.Provider value={'ขนม'} >
        <Header />
      </userContext.Provider>
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>จำนวนสินค้าในตะกร้า {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="case1.jpg" alt="Case" width="15%" />
        <br />
        เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product1);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="hat1.jpg" alt="Hat" width="15%" />
        <br />
        หมวก ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product2);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="shirt1.jpg" alt="T-Shirt" width="15%" />
        <br />
        เสื้อ ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product3);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;
