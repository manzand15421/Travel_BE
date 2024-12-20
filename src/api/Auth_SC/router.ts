import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { authController } from "./controller";
import { ReqLoginSchema,DataloginSchema } from "./model";


// Define the OpenAPI registry and router

export const authRegistry = new OpenAPIRegistry() 
export const authRouter: Router = express.Router();

authRegistry.register("Auth_SC",DataloginSchema)

authRegistry.registerPath({
  method: "post",
  path: "/travel/LoginTravel",
  tags: ["Auth SC_DB"],
  // request: { body: ReqLoginSchema.shape.body }, // Pass the correct body schema
  responses: createApiResponse((DataloginSchema), "Success"),
});

// Define the route
authRouter.post('/LoginTravel',validateRequest(ReqLoginSchema),authController.LoginUser)


