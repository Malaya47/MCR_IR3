import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <section className="mt-3 container">
        <img
          className="img-fluid"
          src="https://placehold.co/1200x400"
          alt="hero-image"
        />
      </section>

      <section className="text-center py-4">
        <h3>Shopie</h3>
        <p>Welcome to the Shopie application!</p>
        <Link className="btn btn-primary" to={"/products"}>
          Browse Products
        </Link>
      </section>

      <section className="text-center py-4">
        <h3>Trending</h3>
        <p>Checkout our trending products</p>
        <div className="row pt-1">
          <div className="col-md-4">
            <img src="https://placehold.co/300x300" alt="trending-image" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x300" alt="trending-image" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x300" alt="trending-image" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
