import useCartStore from "../store/useCartStore";

const Cart = () => {
  const {
    cartItems,
    removeToCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalItems
  } = useCartStore();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="p-6 text-center">Your cart is empty 🛒</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.map(item => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-4 border-b pb-4"
        >
          <img
            src={item.image}
            className="h-16 object-contain"
            alt=""
          />

          <div className="flex-1">
            <h2 className="text-sm font-semibold">
              {item.title}
            </h2>
            <p>₹ {Math.round(item.price * 80)}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-2 bg-gray-300"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-2 bg-gray-300"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeToCart(item.id)}
            className="text-red-500 ml-4"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl text-gray-900 font-bold mt-6">
        Total: ₹ {Math.round(totalAmount * 80)}
      </h2>
    </div>
  );
};

export default Cart;
