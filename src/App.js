import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout";
import NewProduct from "./components/NewProduct";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HZ1rJHF9TnVvlNbwj62F3neh1MWmZyxM0GeO8291vm1GR8t5MdWpEs59VcpMWdbXSgHXJrf9eXwaz2n4CfF2C8m00XskuuxnI"
);

function App() {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  // const addNewProduct = (t, r, p, i) => {
  //   setProducts([
  //     ...products,
  //     { title: t, rating: r, price: p, image: i },
  //   ]);
  // };

  // const addToCart = (t, r, p, i) => {
  //   setCart([...cart, { title: t, rating: r, price: p, image: i }]);
  // };

  // const deleteCartProduct = (i) => {
  //   let newCart = cart.filter((e, index) => index !== i);
  //   setCart([...newCart]);
  // };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header /* cart={cart} */ />
            <Checkout /* cart={cart} deleteCartProduct={deleteCartProduct} */ />
          </Route>
          <Route path="/newproduct">
            <Header /* cart={cart} */ />
            <NewProduct /* add={addNewProduct} */ />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header /* cart={cart} */ />
            <Home /* products={products} cart={cart} addToCart={addToCart} */ />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
