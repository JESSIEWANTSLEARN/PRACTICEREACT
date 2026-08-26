import { useParams, Link } from "react-router-dom";
import "./Pages.css";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Product Details</h1>

      <p>Product ID: {id}</p>

      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;
