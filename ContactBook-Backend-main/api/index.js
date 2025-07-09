// api/index.js
import app from "../app.js";
import { createServerlessExpressHandler } from "@vendia/serverless-express";

export default createServerlessExpressHandler(app);
