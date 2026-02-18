import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "KisanMitra Backend Running" });
});

// Mock Weather API
app.get("/api/weather", (req, res) => {
  res.json({
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 62
  });
});

// Mock Market API
app.get("/api/market", (req, res) => {
  res.json({
    crop: "Rice",
    price: 2200,
    mandi: "Hyderabad"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
