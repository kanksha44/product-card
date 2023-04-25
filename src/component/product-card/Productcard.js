import React from "react";
import "./productcard.css";

const Productcard = ({ product, alertFunction }) => {
  const { productPic, productName, Brand, productDescription, Price, Rating } =
    product;
  return (
    <div className="main-product-card">
      <div className="card-body">
        <div className="product-image">
          <img src={productPic} alt={productName} />
        </div>
        <div className="product-card-content">
          <h1>{Brand}</h1>
          <p>{productDescription}</p>
          <h5>{Price}</h5>
          <h6>{Rating}</h6>
        </div>
        <div className="addtocartbtn">
          <button onClick={alertFunction}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
export default Productcard;
