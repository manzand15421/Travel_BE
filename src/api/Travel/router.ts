import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { travelController } from "./controller";
import { ReqLoginSchema,DataloginSchema, TravelSchema, LoginSchema } from "./model";
import { GetTravelNoRegSchema } from "./model";
import { authorize } from "@/common/middleware/authorization";

// Define the OpenAPI registry and router
export const travelRegistry = new OpenAPIRegistry();
export const authRegistry = new OpenAPIRegistry() 
export const travelRouter: Router = express.Router();

travelRegistry.register("Travel", TravelSchema);
authRegistry.register("Auth",DataloginSchema)



// Register the OpenAPI schema
travelRegistry.registerPath({
  method: "get",
  path: "/travel/travelNoReg",
  tags: ["Travel"],
  request: { query: GetTravelNoRegSchema.shape.query },
  responses: createApiResponse(z.array(TravelSchema), "Success"),
});

travelRegistry.registerPath({
  method: "post",
  path: "/travel/LoginTravel",
  tags: ["Travel"],
  // request: { body: ReqLoginSchema.shape.body }, // Pass the correct body schema
  responses: createApiResponse((DataloginSchema), "Success"),
});

// Define the route
travelRouter.get("/travelNoReg",authorize,validateRequest(GetTravelNoRegSchema),travelController.getTravelNoReg);// Call the controller method;
travelRouter.get('/userSC',travelController.GetDataUser)
travelRouter.post('/LoginTravel',validateRequest(ReqLoginSchema),travelController.LoginUser)
