import express from "express";
import chalk from "chalk";
import cors from "cors";
import { query } from "./db/index.js"; // Importiere die query-Funktion aus der db.js-Datei

// portnummer prüfen oder auf 3000 setzen
const port = process.env.PORT || 3000;

// Ausführen express from "express initialisieren
const app = express();
//Aufruf  von cors
app.use(cors());

// app.listen(3000, () => console.log("Server is running on port 3000"));

// mit chalk
// app.listen(3000, () =>
//   console.log(chalk.bgGreen("Server is running on port 3000"))
// );

// funktioniert meine app?
app.get("/", async (req, res) => {
  const { rows } = await query("SELECT NOW();"); // Antwort auf die Anfrage senden
  res.json({ msg: "ProductAPI up and runnig", time: rows[0] }); // Senden der Antwort als JSON. time: rows[0].now gibt die aktuelle Zeit zurück
});
// mit port variable
app.listen(port, () =>
  console.log(chalk.bgGreen(`Server is running on port ${port}`))
);
