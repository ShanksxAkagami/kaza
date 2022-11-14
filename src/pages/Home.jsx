import React from "react";
import { Link } from "react-router-dom";

import imageBanner from "../assets/banner.png";

import products from "../data/data.json";
import moreData from "../data/moreData";

import Banner from "../components/Banner";
import Card from "../components/Card";

const slogan = moreData.slogan;

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Banner image={imageBanner} title={slogan} />
      </div>
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Card image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
