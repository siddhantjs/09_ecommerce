import { Link } from "react-router-dom";
import { Plus, Eye } from "lucide-react";
import useCartStore from "../store/useCartStore";
import { useTheme } from '../context/ThemeContext';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore(state => state.addToCart);
  const { theme } = useTheme();
  
  return (
    <div
      className={`
        relative rounded-2xl p-5 flex flex-col
        backdrop-blur-lg 
        ${theme === "light"
          ? "bg-white/90 border-gray-200 shadow-md hover:shadow-xl"
          : "bg-gray-800/50 border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-amber-900/20"}
        border
        hover:-translate-y-2 transition-all duration-300
        group
      `}
    >
      {/* Product Image */}
      <div className="flex justify-center mb-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-40 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Title */}
      <h2 className={`
        text-sm font-semibold mb-2 line-clamp-2 min-h-[2.5rem]
        ${theme === "light" ? "text-gray-800" : "text-gray-100"}
      `}>
        {product.title}
      </h2>

      {/* Price */}
      <p className={`
        text-xl font-bold mb-4
        bg-gradient-to-r ${
          theme === "light"
            ? "from-rose-600 to-orange-600"
            : "from-amber-400 to-orange-400"
        }
        text-transparent bg-clip-text
      `}>
        ₹ {Math.round(product.price * 80)}
      </p>

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        <Link
          to={`/products/${product.id}`}
          className={`
            flex-1 flex items-center justify-center gap-2
            text-sm px-4 py-2.5 rounded-xl font-medium
            ${theme === "light"
              ? "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              : "bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600"}
            transition-all duration-300
            hover:scale-105
          `}
        >
          <Eye size={16} />
          Details
        </Link>

        <button
          onClick={() => addToCart(product)}
          className={`
            flex-1 flex items-center justify-center gap-2
            text-sm px-4 py-2.5 rounded-xl font-medium
            ${theme === "light"
              ? "bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white shadow-md shadow-rose-200"
              : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-gray-900 shadow-md shadow-amber-900/50"}
            transition-all duration-300
            hover:scale-105 hover:shadow-lg
          `}
        >
          <Plus size={16} />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;