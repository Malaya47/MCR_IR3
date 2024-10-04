import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />

      <section className="container mb-5">
        <h2 className="mt-3">About Shopie</h2>
        <p>This is a Shopie application built with React and React Router.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem obcaecati dignissimos amet neque a omnis doloribus ab
          labore eius officiis dolorum rem vitae minus deserunt non, minima nam!
          Hic ddcd.
        </p>

        <div className="row mt-4">
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" alt="" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" alt="" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" alt="" />
          </div>
        </div>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quis
          incidunt excepturi repellat consequatur ab aliquam! Veritatis tenetur
          vero repellendus, ad magnam dolorum odio culpa quibusdam accusamus
          reiciendis beatae. Quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quis
          incidunt excepturi repellat consequatur ab aliquam! Veritatis tenetur
          vero repellendus, ad magnam dolorum odio culpa quibusdam accusamus
          reiciendis beatae. Quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quis
          incidunt excepturi repellat consequatur ab aliquam! Veritatis tenetur
          vero repellendus, ad magnam dolorum odio culpa quibusdam accusamus
          reiciendis beatae. Quae.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
