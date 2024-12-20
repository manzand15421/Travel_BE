import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";

import { userRegistry } from "@/api/user/userRouter";
import { travelRegistry } from "@/api/Travel/router";
import { authRegistry } from "@/api/Auth_SC/router";

export function generateOpenAPIDocument() {
  const registry = new OpenAPIRegistry([ authRegistry,userRegistry, travelRegistry]);
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Swagger API",
    },
    externalDocs: {
      description: "View the raw OpenAPI Specification in JSON format",
      url: "/swagger.json",
    },
  }); 
}
