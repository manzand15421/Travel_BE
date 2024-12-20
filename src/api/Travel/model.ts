import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { string, z } from "zod";

extendZodWithOpenApi(z);

export type Travel = z.infer<typeof TravelSchema>;
export const TravelSchema =
    z.object({
      ROW_NO: z.number(),
      NOREG: z.string(),
      EDITNAME: z.string(),
      DIV_ID: z.string(),
      DIV_NAME: z.string(),
    }) 
  

// Define Zod schema for request validation
export const GetTravelNoRegSchema = z.object({
  query: z.object({
    NOREG: z.string().optional(), 
    ROWSTART: z.preprocess((val) => Number(val), z.number().min(1)), 
    ROWEND: z.preprocess((val) => Number(val), z.number().min(1)),
  }),
});


export const GetProfileSchema = z.object({
  query : z.object({ NOREG : z.string().nonempty('NOREG IS REQUIRED') })
})