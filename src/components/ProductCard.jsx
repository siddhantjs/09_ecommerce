import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import {useTheme} from '../context/ThemeContext'

const ProductCard = ({ product }) => {
  const addToCart = useCartStore(state => state.addToCart);
  const {theme} = useTheme();
  return (
    <div
      className={`relative rounded-2xl p-4 flex flex-col
        ${theme==="light"?"text-gray-900":"text-[#FFCDC9]"}
        backdrop-blur-lg 
        border border-white/30 
        shadow-lg hover:shadow-2xl
        hover:-translate-y-1 transition-all duration-300`}
      
    >
      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Title */}
      <h2 className={`text-sm font-semibold mb-2 line-clamp-2 ${theme==="light"?"text-gray-900":"text-[#FFCDC9]"}`}>
        {product.title}
      </h2>

      {/* Price */}
      <p className={`text-lg font-bold ${theme==="light"?"text-gray-900":"text-[#FFCDC9]"} mb-4`}>
        ₹ {Math.round(product.price * 80)}
      </p>

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        <Link
          to={`/products/${product.id}`}
          className="
            flex-1 text-center text-sm px-3 py-2 rounded-lg
            border border-gray-300 
            hover:bg-white/60 
            transition
          "
        >
          Details
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="
            flex-1 text-sm px-3 py-2 rounded-lg
            bg-black text-white
            hover:bg-gray-800 transition
          "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
