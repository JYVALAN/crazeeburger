import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Menu() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const groupedItems = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalPrice = groupedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const menuItems = [
    {
      id: 1,
      name: "Big Burger",
      picture: "./public/burger.jpg",
      description:
        "Un burger classique avec du bœuf, des tranches de tomate, de la laitue et des oignons.",
      price: 8.99,
    },
    {
      id: 2,
      name: "Frites Géantes",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.agAejZqtKVGvBigHBTVW1QHaFR%26pid%3DApi&f=1&ipt=5dfa77738ed570ffd3f94a90d0cf7308e7e1882a29f717c90a0b8c11a7895509&ipo=images",
      description:
        "Des frites croustillantes et bien dorées, servies avec une sauce au choix.",
      price: 3.49,
    },
    {
      id: 3,
      name: "Nuggets de Poulet",
      picture: "./public/nuggets.png",
      description:
        "Des nuggets de poulet croustillants et tendres, parfaits pour un en-cas rapide.",
      price: 5.99,
    },
    {
      id: 4,
      name: "Milk-shake Chocolat",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2pxp-v04f368NWRYy9TSgAHaHa%26pid%3DApi&f=1&ipt=101555236e69874e3daeefd26e8e5f6b3a20ed7c70dc61b63135a9fb46aee350&ipo=images",
      description:
        "Un délicieux milk-shake à la crème glacée et au chocolat, pour se rafraîchir.",
      price: 4.29,
    },
    {
      id: 5,
      name: "Salade César",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jeanginer.fr%2Fwp-content%2Fuploads%2F2019%2F03%2Fassiette-salade-cesar.jpg&f=1&nofb=1&ipt=6dbda764320276e745d0c9f7e2eec92aed3dd5342bc1081e2fa35642973e504c&ipo=images",
      description:
        "Une salade fraîche avec de la laitue romaine, des croûtons, du parmesan et une vinaigrette crémeuse.",
      price: 6.79,
    },
    {
      id: 6,
      name: "Coca Cola",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fq94XnErvTkrXc5VlJF1VwAAAA%26pid%3DApi&f=1&ipt=2bba4e4767851e768eefe05c4ed75876e82aa83a5ec3ac8b1a33fc0c6a468378&ipo=images",
      description:
        "Une salade fraîche avec de la laitue romaine, des croûtons, du parmesan et une vinaigrette crémeuse.",
      price: 6.79,
    },
    {
      id: 7,
      name: "Hot-Dog Suprême",
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.falK-wxXSOieJFDKR1r1_wHaFx%26pid%3DApi&f=1&ipt=71998d95527bddbc8fc6912252de87d57d9231f1257f70ce687ce3aeca16778e&ipo=images",
      description:
        "Une salade fraîche avec de la laitue romaine, des croûtons, du parmesan et une vinaigrette crémeuse.",
      price: 6.79,
    },
    {
      id: 8,
      name: "Wrap Poulet César",
      description:
        "Un wrap frais garni de poulet grillé, de laitue romaine, de croûtons et de vinaigrette César.",
      price: 6.79,
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.htjb8GZXAoj0IBlAQQyjiAHaEv%26pid%3DApi&f=1&ipt=10a2e1c3f2b5bc9bf687bea3fb061a246f9440eb3591a00eb29b2ff2014508ad&ipo=images",
    },
    {
      id: 9,
      name: "Tacos Végétariens",
      description:
        "Trois tacos végétariens garnis de haricots noirs, de riz, de salsa et de guacamole.",
      price: 7.29,
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8CVADkp01rGSwDE8zY0Z6AHaHa%26pid%3DApi&f=1&ipt=ab51ebe893ab8cbd6ac0697c6f896bb6eff1e6ff87c5d4139d58e57157e282ee&ipo=images",
    },
    {
      id: 10,
      name: "Sundae Chocolat-Fraise",
      description:
        "Une délicieuse coupe glacée avec de la crème glacée au chocolat et à la fraise, recouverte de sauce chocolat et de chantilly.",
      price: 4.99,
      picture:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9QPyBykSyi_5M7ZzH7agBAHaIm%26pid%3DApi&f=1&ipt=27f06aee320b4c5174de07ada3cdf5d5f1c39a7f138feaa3295ccf2952ac9ec3&ipo=images",
    },
  ];

  return (
    <div className="w-full">
      <header className="sticky top-0 flex justify-between font-display bg-orange-600 py-3 md:py-5">
        <div className="md:flex mx-3 text-[5px] md:text-[8px]">
          <h1 className="">Crazee</h1>
          <svg
            className="text-white hidden md:block my-0 w-3 h-3 md:w-8 md:h-8 md:my-0 mx-3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 10C5 7.23858 7.23858 5 10 5H14C16.7614 5 19 7.23858 19 10V10.8382C17.9457 9.59948 16.026 9.60669 14.9818 10.8598C14.7311 11.1607 14.2689 11.1607 14.0182 10.8598C12.9679 9.59944 11.0321 9.59944 9.98178 10.8598C9.73105 11.1607 9.26895 11.1607 9.01822 10.8598C7.97395 9.60669 6.05435 9.59948 5 10.8382V10ZM21 10V10.5C21.2559 10.5 21.5118 10.5976 21.7071 10.7929C22.0976 11.1834 22.0976 11.8166 21.7071 12.2071L21.5246 12.3896C21.1544 12.7599 20.7056 12.999 20.234 13.1095C21.2565 13.4231 22 14.3747 22 15.5C22 16.3607 21.565 17.1199 20.9029 17.5696C20.9651 17.6999 21 17.8459 21 18V18.5C21 20.433 19.433 22 17.5 22H6.5C4.567 22 3 20.433 3 18.5V18C3 17.8459 3.03486 17.6999 3.09712 17.5696C2.43498 17.1199 2 16.3607 2 15.5C2 14.3747 2.74348 13.4231 3.76602 13.1095C3.29437 12.999 2.84564 12.7599 2.47537 12.3896L2.29289 12.2071C1.90237 11.8166 1.90237 11.1834 2.29289 10.7929C2.48816 10.5976 2.74408 10.5 3 10.5V10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10ZM5.35966 13H8.83259C8.32453 12.8675 7.84903 12.5809 7.48178 12.1402C7.23105 11.8393 6.76895 11.8393 6.51822 12.1402L6.46105 12.2088C6.15489 12.5762 5.77366 12.8406 5.35966 13ZM10.1674 13H13.8326C13.3245 12.8675 12.849 12.5809 12.4818 12.1402C12.2311 11.8393 11.7689 11.8393 11.5182 12.1402C11.151 12.5809 10.6755 12.8675 10.1674 13ZM15.1674 13H18.6403C18.2263 12.8406 17.8451 12.5762 17.5389 12.2088L17.4818 12.1402C17.2311 11.8393 16.7689 11.8393 16.5182 12.1402C16.151 12.5809 15.6755 12.8675 15.1674 13ZM5 18V18.5C5 19.3284 5.67157 20 6.5 20H17.5C18.3284 20 19 19.3284 19 18.5V18H5ZM4 15.5C4 15.2239 4.22386 15 4.5 15H19.5C19.7761 15 20 15.2239 20 15.5C20 15.7761 19.7761 16 19.5 16H4.5C4.22386 16 4 15.7761 4 15.5Z"
                fill="rgb(255 255 255 / var(--tw-text-opacity))"
              ></path>{" "}
            </g>
          </svg>
          <h1 className="">Burger</h1>
        </div>
        <nav className="font-body self-center mx-3 text-sm">
          <Link
            to="/dashboard"
            className="text-white visited:text-white hover:text-gray-600 underline"
          >
            Dashboard
          </Link>
          <Link
            to="/signup"
            className="text-white visited:text-white hover:text-gray-600 underline mx-2"
          >
            Inscription
          </Link>
          <Link
            to="/"
            className="text-white visited:text-white hover:text-gray-600 underline mx-2"
          >
            Connexion
          </Link>
        </nav>
      </header>
      <section className="grid grid-cols-4 font-body">
        <div className="bg-yellow-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 col-span-4 text-center pt-5 gap-3 px-4">
          {menuItems.map((item) => (
            <figure
              key={item.id}
              className="grid grid-cols-2 grid-rows-3 items-center p-5 md:p-8 lg:p-10 xl:p-10  mx-2 bg-white rounded-[40px] text-sm md:text-md lg:text-lg xl:text-xl"
            >
              <img
                className="col-span-2 w-16 h-12 lg:w-20 lg:h-16 xl:w-24 xl:h-20 mx-auto"
                src={item.picture}
                alt=""
              />
              <p className="font-display h-8  text-black col-span-2">
                {item.name}
              </p>
              <p className="text-black">{item.price} €</p>
              <button
                onClick={() => addToCart(item)}
                className="bg-orange-600 p-1 md:py-2 lg:py-3 text-[8px] md:text-sm lg:text-md xl:text-lg"
              >
                Ajouter
              </button>
            </figure>
          ))}
          <button
            onClick={toggleCart}
            className="sticky bottom-5 left-5 m-auto bg-green-600 text-white p-4 rounded-xl"
          >
            Voir panier : {totalPrice.toFixed(2)} €
          </button>
        </div>
      </section>
      {showCart === false ? (
        <aside className="hidden"></aside>
      ) : (
        <aside className="absolute right-0 top-[75px] w-[50%] h-[100vh] overflow-y-scroll">
          {showCart ? (
            <Cart
              groupedItems={groupedItems}
              totalPrice={totalPrice}
              removeFromCart={removeFromCart}
              cart={cart}
              toggleCart={toggleCart}
            />
          ) : null}
        </aside>
      )}
    </div>
  );
}
