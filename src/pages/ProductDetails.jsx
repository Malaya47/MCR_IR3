import React from "react";
import Header from "../components/Header";
import { products } from "./Products";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  const foundProduct = products.find((product) => product.id === Number(id));

  return (
    <>
      <Header />

      <section className="card container py-4 px-4 mt-4 mb-5">
        <h2 className="mb-4">Products Details</h2>
        <div className="row">
          <div className="col-md-3">
            <img src={foundProduct.productImg1} alt="product-image-1" />
          </div>
          <div className="col-md-3">
            <img src={foundProduct.productImg2} alt="product-image-2" />
          </div>
          <div className="col-md-3">
            <img src={foundProduct.productImg3} alt="product-image-3" />
          </div>
        </div>

        <div className="mt-3">
          <p className="card-text">ID: {foundProduct.id}</p>
          <p className="card-text">Name: {foundProduct.name}</p>
          <p className="card-text">Description: {foundProduct.description}</p>
          <p className="card-text">Price: INR {foundProduct.price}</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
