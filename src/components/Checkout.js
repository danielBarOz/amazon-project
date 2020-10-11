import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Shopping Cart</h2>
        {cart?.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty</h2>
          </div>
        ) : (
          <div>
            {cart?.map((item, i) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      {cart?.length > 0 && (
        <div className="checkout__right">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt=""
          />
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
