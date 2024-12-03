import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoints";
import classes from "./result.module.css";
import ProductCard from "../../Componenets/Product/ProductCard";
import Loader from "../../Componenets/Loader/Loader";

function Result() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res.data); // Check what the API returns
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />

          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Result;
