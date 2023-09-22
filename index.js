import "dotenv/config.js";
import express from "express";
import PatientRoute from "./routes/PatientRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Hello World Guys");
});

app.use(PatientRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});