import { useEffect, useState } from "react";

import ProductCard from "../Components/ProductCard";

import "./Pages.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })

      .then((data) => {
        setProducts(data);
      })

      .catch(() => {
        setError("Failed to load products.");
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="page">
      <h1>Product Catalog</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
