import { Link } from "react-router-dom";

export default function Cart({
  cart = [],
  removeFromCart,
  groupedItems,
  totalPrice,
  toggleCart,
}) {
  return (
    <div className="w-full relative m-0 font-body">
      <div className=" sticky top-0  bg-white py-4 flex">
        <button className="p-2 ml-1" onClick={toggleCart}>
          <svg
            className="lucide lucide-chevron-left bg-black sticky top-5 left-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div className="bg-gray-500 text-black">
        <h1 className="ml-5 text-sm md:text-lg lg:text-xl text-green-500 font-bold ">
          Votre Panier: <br /> Montant Total: {totalPrice.toFixed(2)} €
        </h1>
        {cart.length === 0 ? (
          <p className="ml-5 text-sm md:text-lg lg:text-xl text-green-500 font-bold ">
            Votre panier est vide.
          </p>
        ) : (
          <ul className="flex flex-col justify-center items-center mt-16">
            {groupedItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center mb-12 bg-white text-center w-24 lg:w-40 rounded-3xl py-4 "
              >
                <img className="" src={item.picture} alt="" />
                <h3>
                  {item.name} {item.quantity > 1 ? `x${item.quantity}` : ""} -{" "}
                  {(item.price * item.quantity).toFixed(2)} €
                </h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-orange-600"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length === 0 ? (
          <div></div>
        ) : (
          <Link className="bg-orange-600 p-2 rounded-md text-white hover:text-green-500 sticky bottom-10 left-5">
            Commander
          </Link>
        )}
      </div>
    </div>
  );
}
