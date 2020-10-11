import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

function Home(props) {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" //https://www.amazon.in/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1X_AuCC_Music._CB428379140_.jpg   <-- another ad
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="OnePlus 8 5G (Glacial Green 6GB RAM+128GB Storage)"
          image="https://www.amazon.in/images/I/619iTNHSCGL._SL1500_.jpg"
          rating={5}
          price={1099}
          // addToCart={props.addToCart}
        />
        <Product
          id="2"
          title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
          image="https://www.amazon.in/images/I/61ers6OzvUL._SL1024_.jpg"
          rating={5}
          price={999}
          // addToCart={props.addToCart}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="DELL XPS 9300 13.3-inch FHD Laptop, Silver"
          image="https://www.amazon.in/images/I/61ieRrVEJXL._SL1000_.jpg"
          rating={4}
          price={1399}
          // addToCart={props.addToCart}
        />
        <Product
          id="4"
          title="ASUS ROG Zephyrus M GU502GU-ES003T 15.6-inch FHD 144Hz Gaming Laptop"
          image="https://www.amazon.in/images/I/81YV9uenExL._SL1500_.jpg"
          rating={5}
          price={1699}
          // addToCart={props.addToCart}
        />
        <Product
          id="5"
          title="Apple MacBook Pro (16-inch, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          image="https://www.amazon.in/images/I/71L2iBSyyOL._SL1500_.jpg"
          rating={5}
          price={2199}
          // addToCart={props.addToCart}
        />
      </div>
      {/*       update for firebase
       */}
      {/* <div className="home__row">
        {props.products.map((e) => {
          return <div className="product">
          <div className="product__info">
            <p>{e.title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{e.price}</strong>
            </p>
            <div className="product__rating">
              {Array(e.rating)
                .fill()
                .map((_) => (
                  <p>⭐️</p>
                ))}
            </div>
          </div>
    
          <img src={e.image} alt="" />
          <button onClick={()=>{props.addToCart(e.title, e.rating, e.price, e.image)}}>Add to Cart</button>
        </div>
        })}
      </div> */}
    </div>
  );
}

export default Home;
