const express = require("express");
const app = express();

// Middleware pour parser les données JSON
app.use(express.json());

// Route pour l'authentification
app.post("/", (req, res) => {
  const { email, password } = req.body;

  // Fonction pour vérifier les informations d'identification
  const authenticateUser = (email, password) => {
    const user = Users.find(
      (u) => u.email === email && u.password === password
    );
    return user && user.role === "admin";
  };

  if (authenticateUser(email, password)) {
    res.status(200).json({ message: "Connexion réussie" });
  } else {
    res.status(401).json({ message: "Échec de la connexion" });
  }
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
