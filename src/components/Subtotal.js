import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal(props) {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  // const totalPrice = () => {
  //   let sum = 0;
  //   props.cart.forEach((e) => {
  //     sum += Number(e.price);
  //   });
  //   return sum;
  // };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
