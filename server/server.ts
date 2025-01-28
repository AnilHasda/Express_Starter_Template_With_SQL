import express from "express";
const app=express();
import {config} from "dotenv";
import {connection} from "../src/config/db/connection";
import {errorHandler} from "../src/middlewares/errorHandler/errorHandler";
import authRouter from "../src/routes/authentication.route";
import cookieParser from "cookie-parser";
 declare global {
  namespace Express {
    interface Request {
      email?: string; // Make email optional
      file?:Express.Multer.File;
    }
  }
}
config();
connection();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/v1/",authRouter);
app.use(errorHandler);
export default app;
