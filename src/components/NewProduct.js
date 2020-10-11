import React, { useState } from "react";
import "./NewProduct.css";
import { Link } from "react-router-dom";


////// need to update everything here???
//firebase?

function NewProduct(props) {
  const [newProduct, setNewProduct] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [errorMsgName, setErrorMsgName] = useState("");
  const [errorMsgPrice, setErrorMsgPrice] = useState("");
  const [errorMsgRating, setErrorMsgRating] = useState("");

  const addNewProduct = (e) => {
    e.preventDefault();
    if (newProduct.length === 0 || newProduct.length > 80) {
      setErrorMsgName(
        "Please enter a valid product name (between 1 and 80 characters)"
      );
    }
    if (price === 0 || price.length === 0) {
      setErrorMsgPrice("Please enter a valid price");
    }
    if (rating < 1 || rating > 5) {
      setErrorMsgRating("Please enter a valid rating (1-5)");
    } else {
      props.add(newProduct, Number(rating), price, img);
      setNewProduct("");
      setPrice("");
      setImg("");
      setRating("");
    }
  };

  return (
    <form>
      <div className="newproduct">
        <Link to="/">
          <img
            className="newproduct__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="logo"
          />
        </Link>
        <div className="newproduct__container">
          <h1>Add New Product</h1>
          <input
            className="newproduct__input"
            onChange={(e) => {
              setImg(e.target.value);
            }}
            type="text"
            placeholder="Enter image URL"
          />
          <p style={{ color: "red" }}>{errorMsgName}</p>
          <input
            className="newproduct__input"
            onChange={(e) => {
              setNewProduct(e.target.value);
            }}
            type="text"
            placeholder="Enter product name"
          />
          <p style={{ color: "red" }}>{errorMsgPrice}</p>
          <input
            className="newproduct__input"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            placeholder="Enter price"
          />
          <p style={{ color: "red" }}>{errorMsgRating}</p>
          <input
            className="newproduct__input"
            onChange={(e) => {
              setRating(e.target.value);
            }}
            type="number"
            placeholder="Enter rating from 1-5"
          />
          <p>New products will be shown on bottom of home page.</p>
          <button
            type="submit"
            className="newproduct__button"
            onClick={addNewProduct}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewProduct;
