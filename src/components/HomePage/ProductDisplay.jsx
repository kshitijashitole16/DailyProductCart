import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import { da } from "zod/v4/locales";

const ProductDisplay = ({ product }) => {
  const [cartData, setCartData] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleQuantityChange = (id, change) => {
    setCartData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(0, Math.min(item.stock, item.qty + change)),
            }
          : item
      )
    );
  };
  const handleAddToCart = (data) => {
    setCartData((prev) => {
      const foundItem = prev.find((item) => item.id === data.id);
      if (foundItem) {
        return prev.map((item) =>
          item.id === data.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...data, qty: 1 }];
    });
  };
  const orderPlacedTimeOut = () =>
    setTimeout(() => {
      setOrderPlaced(false);
    }, 1000);
  return (
    <div className="product-container">
      {product.map((data) => (
        <div className="product-card" key={data.id}>
          {/* <div className="product-image">
            <img src={data.image} alt={data.name} />
          </div> */}

          <div className="product-details">
            <span className="product-category">{data.category}</span>

            <h3 className="product-name">{data.name}</h3>

            <p className="product-id">Product category: {data.category}</p>

            <div className="product-price">
              ₹{data.price}
              <span> / {data.unit}</span>
            </div>

            <p className={data.stock > 0 ? "in-stock" : "out-of-stock"}>
              {data.stock > 0 ? `${data.stock} available` : "Out of stock"}
            </p>

            <button
              className="add-cart-btn"
              disabled={data.stock === 0}
              onClick={() => handleAddToCart(data)}
            >
              {data.stock > 0 ? "Add to Cart" : "Unavailable"}
            </button>
          </div>
        </div>
      ))}

      {orderPlaced ? (
        <div className="order-success">
          <span className="success-icon">✓</span>
          <span>Order placed successfully!</span>
        </div>
      ) : (
        <>
          <Cart
            data={cartData}
            onQtyChnage={handleQuantityChange}
            setOrderPlaced={setOrderPlaced}
            setCartData={setCartData}
            orderPlacedTimeOut={orderPlacedTimeOut}
          ></Cart>
        </>
      )}
    </div>
  );
};

export default ProductDisplay;
