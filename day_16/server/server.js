import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅connected to database");
    app.listen(PORT, () => console.log(`🚀server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
