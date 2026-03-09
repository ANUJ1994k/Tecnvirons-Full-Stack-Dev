import express from "express";
import cors from "cors";
import transactionsRoutes from "./routes/transactions.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/transactions", transactionsRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});