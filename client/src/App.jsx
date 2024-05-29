import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function App() {
  const Users = [
    {
      email: "johndoe@example.com",
      password: "password",
      role: "user",
    },
    {
      email: "janesmith@example.com",
      password: "qwerty",
      role: "user",
    },
    {
      email: "admin@example.com",
      password: "admin",
      role: "admin",
    },
  ];
  // State
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // Comportement
  const onSubmit = (e) => {
    e.preventDefault();
    const user = Users.find((u) => {
      const emailMatch =
        u.email.trim().toLowerCase() === credentials.email.trim().toLowerCase();
      const passwordMatch = u.password === credentials.password;
      return emailMatch ? passwordMatch : false;
    });

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Connexion réussie");
      console.log(user);
      <Navigate replace to="/menu" />;
    } else {
      console.log("Identifiants invalides");
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // render
  return (
    <div className="font-body flex flex-col m-auto mt-48 items-center text-center">
      <Header color="orange-600" className="" />
      <h2 className="text-3xl mb-5">Bienvenue chez nous !</h2>
      <h3 className="text-xl mb-5">Connectez-vous</h3>
      <form className="Login flex flex-col" action="submit" onSubmit={onSubmit}>
        <input
          className="mb-5 p-1 md:p-2  pr-20 md:pr-40 lg:pr-60 xl:pr-96"
          type="text"
          name="email"
          value={credentials.email}
          onChange={onChange}
          placeholder="Email"
        />
        <input
          className="mb-5 p-1 md:p-2  pr-20 lg:pr-40"
          type="password"
          value={credentials.password}
          onChange={onChange}
          name="password"
          placeholder="Mot de passe"
        />
        <button className="py-1 px-7 m-2 md:py-2 md:m-4 text-white bg-orange-600">
          Accéder à votre espace
        </button>
      </form>

      <p>
        Pas de compte ?{" "}
        <Link
          to="/signup"
          className="text-orange-600 visited:text-orange-600 hover:text-white underline"
        >
          Inscrivez-vous
        </Link>
      </p>
      <p>
        Envie de voir le menu ?{" "}
        <Link
          to="/menu"
          className="text-orange-600 visited:text-orange-600 hover:text-white underline"
        >
          C'est par ici
        </Link>
      </p>
      <Footer></Footer>
    </div>
  );
}

export default App;
