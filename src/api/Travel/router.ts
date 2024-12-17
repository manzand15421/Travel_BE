import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { travelController } from "./controller";
import { TravelSchema } from "./model";
import { GetTravelNoRegSchema } from "./model";

// Define the OpenAPI registry and router
export const travelRegistry = new OpenAPIRegistry();
export const travelRouter: Router = express.Router();

// Register the OpenAPI schema
travelRegistry.registerPath({
  method: "get",
  path: "/travel/travelNoReg",
  tags: ["Travel"],
  request: { query: GetTravelNoRegSchema.shape.query },
  responses: createApiResponse(z.array(TravelSchema), "Success"),
});

// Define the route
travelRouter.get("/travelNoReg",validateRequest(GetTravelNoRegSchema),travelController.getTravelNoReg);// Call the controller method;
