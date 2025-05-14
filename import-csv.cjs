const admin = require("firebase-admin");
const fs = require("fs");
const csv = require("csv-parser");

// Remplace par le chemin vers ton fichier de clé
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Remplace par le nom de ta collection
const collectionName = "cars";

// Remplace par le chemin vers ton fichier CSV
const results = [];
fs.createReadStream("./carsDataset.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", async () => {
  for (const row of results) {
    try {
      await db.collection(collectionName).add(row);
      console.log("Document ajouté :", row);
    } catch (error) {
      console.error("Erreur d'import pour :", row, error);
    }
  }
  console.log("Importation terminée !");
});
