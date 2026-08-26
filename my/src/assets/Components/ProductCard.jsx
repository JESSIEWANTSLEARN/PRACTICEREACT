import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>

      <p>₱{product.price}</p>

      <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>

      <span> {quantity} </span>

      <button onClick={() => setQuantity((q) => q + 1)}>+</button>

      <br />
      <br />

      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
