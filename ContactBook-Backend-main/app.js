// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import router from "./routes/index.js";
// import { v2 as cloudinary } from "cloudinary";
// import env from "dotenv";
// import cookieParser from "cookie-parser";
// env.config();

// const PORT = process.env.PORT || 8000;
// const app = express();

// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://contactbook-manage.netlify.app",
// ];
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials:true
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cookieParser());
// app.use(router);

// app.get("/", (req, res) => {
//   res.send("Express JS on Vercel");
// });

// cloudinary.config({
//   cloud_name: "dih6gzzhk",
//   api_key: "553388149965484",
//   api_secret: "0umYW6KOYp9ZO4_1ZteptavElNY",
// });

// const DB_URL = process.env.DB_URI;
// mongoose.connect(DB_URL);
// mongoose.connection.on("connected", () =>
//   console.log("My MongoDB Is Connected")
// );
// mongoose.connection.on("error", (err) => console.log("Error In MongoDb", err));

// app.listen(PORT, () => {
//   console.log(`Server Is Running On localhost:${PORT}`);
// });

// app.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";
import { v2 as cloudinary } from "cloudinary";
import env from "dotenv";
import cookieParser from "cookie-parser";

env.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://contactbook-manage.netlify.app",
  "https://contact-management-app-omega-pink.vercel.app/",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.get("/", (req, res) => {
  res.send("Express JS is running");
});

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dih6gzzhk",
  api_key: process.env.CLOUD_API_KEY || "553388149965484",
  api_secret: process.env.CLOUD_API_SECRET || "0umYW6KOYp9ZO4_1ZteptavElNY",
});

// MongoDB connect
const DB_URL = process.env.DB_URI;
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("error", (err) =>
  console.log("MongoDB connection error:", err)
);

export default app;
