import express from "express";
import dotenv from "dotenv";
import databaseconnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";
dotenv.config({
  path: ".env",
});
const app = express();
databaseconnection();

//midddleware
app.use(
  express.urlencoded({
    extends: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port: ${process.env.PORT}`);
});
