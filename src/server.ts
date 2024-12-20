import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";

import { openAPIRouter } from "@/api-docs/openAPIRouter";
import { userRouter } from "@/api/user/userRouter";
import { travelRouter } from "./api/Travel/router";
import { authRouter } from "./api/Auth_SC/router";
import errorHandler from "@/common/middleware/errorHandler";
import rateLimiter from "@/common/middleware/rateLimiter";
import requestLogger from "@/common/middleware/requestLogger";
import { env } from "@/common/utils/envConfig";

const logger = pino({ name: "server start" });
const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

// Swagger UI
app.use(openAPIRouter);   

// Routes
app.get('/',(req,res) => {
  res.status(200).json("Travel Testing")
  })
  
app.use("/users", userRouter);
app.use("/travel", travelRouter);
app.use("/travel" ,authRouter)


// Global 404 Error Handler
app.use((req, res) => {
  res.status(404).json({ message: "Sorry,Page not found" });
});



// Error handlers
app.use(errorHandler());

export { app, logger };
