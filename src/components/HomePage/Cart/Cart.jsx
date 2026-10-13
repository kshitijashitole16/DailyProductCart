import React from "react";

const Cart = ({
  data,
  onQtyChnage,
  setOrderPlaced,
  setCartData,
  orderPlacedTimeOut,
}) => {
  return (
    <>
      {data.length ? (
        <>
          <div className="cart-wrappar">
            <div>Cart</div>
            {data.map((item) => (
              <div className="item-card" key={item} id={item.id}>
                <div className="item-name">{item.name}</div>
                <div className="item-qty">
                  Item Qty:{" "}
                  <span>
                    <button
                      disabled={item.qty === 1}
                      onClick={() => onQtyChnage(item.id, -1)}
                    >
                      -
                    </button>
                    {item.qty}
                    <button
                      disabled={item.qty === item.stock}
                      onClick={() => onQtyChnage(item.id, 1)}
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
            ))}
            <button
              className="order-placed-btn"
              onClick={() => {
                setOrderPlaced(true);
                setCartData([]);
                orderPlacedTimeOut();
              }}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
