import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useProduct from "../hooks/useProducts";
import useDebounce from "../hooks/useDebounce";
import usePaginate from "../hooks/usePaginate";
import { useTheme } from "../context/ThemeContext";

const Products = () => {
  const itemsPerPage = 10;
  const { search } = useOutletContext();
  const [page, setPage] = useState(1);
  const { theme } = useTheme();

  // getting products, loading, error from useProduct custom Hook
  const { loading, error, products } = useProduct();

  // getting debounced value from useDebounce custom hook
  const debouncedValue = useDebounce(search, 800);

  // reset page when search changes
  useEffect(() => {
    setPage(1);
  }, [debouncedValue]);

  // filtering products based on search keyword
  const filteredProduct = useMemo(() => {
    if (!debouncedValue) return products;
    return products.filter(item =>
      item.title?.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue, products]);

  // pagination on filtered products
  const { currentItems, totalPages } = usePaginate(
    filteredProduct,
    itemsPerPage,
    page
  );

  // loading state
  if (loading) {
    return (
      <div className={`flex justify-center items-center h-screen ${
        theme === "light" 
          ? "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50" 
          : "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900"
      }`}>
        <div className="text-center space-y-4">
          <div className={`inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid ${
            theme === "light"
              ? "border-rose-400 border-r-transparent"
              : "border-amber-400 border-r-transparent"
          }`}></div>
          <p className={`text-lg font-semibold ${
            theme === "light" ? "text-rose-600" : "text-amber-400"
          }`}>
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`px-4 py-8 min-h-screen transition-colors duration-300 ${
      theme === "light" 
        ? "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50" 
        : "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900"
    }`}>
      {/* Page Heading */}
      <h1 className={`
        text-3xl md:text-4xl font-extrabold text-center mb-10
        bg-gradient-to-r ${
          theme === "light"
            ? "from-rose-500 via-orange-500 to-amber-500"
            : "from-amber-400 via-orange-400 to-yellow-500"
        }
        text-transparent bg-clip-text
        drop-shadow-sm
      `}>
        All Products
      </h1>

      {/* No Results Message */}
      {currentItems.length === 0 && (
        <div className="text-center py-16">
          <p className={`text-lg ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}>
            No products found matching your search.
          </p>
        </div>
      )}

      {/* Products Grid */}
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-6
      ">
        {currentItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`
                px-4 py-2 rounded-xl font-semibold
                transition-all duration-200
                ${
                  page === i + 1
                    ? theme === "light"
                      ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-200 scale-105"
                      : "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 shadow-lg shadow-amber-900/50 scale-105"
                    : theme === "light"
                      ? "bg-white text-gray-700 border border-gray-200 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-600 shadow-sm"
                      : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-amber-500 hover:text-amber-400"
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;