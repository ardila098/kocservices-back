const mongoose = require("mongoose");

require("dotenv").config();

const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/insurancedb";


mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
