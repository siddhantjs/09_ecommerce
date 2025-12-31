import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold mb-3">
          {product.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {product.description}
        </p>

        <p className="text-xl font-bold mb-4">
          ₹ {Math.round(product.price * 80)}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
