import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

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
  
export type authentication = z.infer<typeof DataloginSchema>
export const DataloginSchema = z.object({

APPLICATION : z.string(),
ROLE : z.string(),
FEATURE : z.string(),
FUNCTION : z.string(),
USERNAME : z.string(),
ID : z.string(),
REG_NO : z.string(),
COMPANY : z.string(),
FIRST_NAME : z.string(),
LAST_NAME : z.string(),
GENDER : z.string(),
BIRTH_DATE : z.string(),
ADDRESS :  z.string(),
IN_ACTIVE_DIRECTORY : z.boolean(),
LOCK_TIMEOUT : z.number().int(),
SESSION_TIMEOUT : z.number().int(),

})


export const ReqLoginSchema = z.object({
    body : z.object({
      USERNAME: z.string().nonempty("Username is Required"),
      PASSWORD: z.string(),
    }),
  
});

// Define Zod schema for request validation
export const GetTravelNoRegSchema = z.object({
  query: z.object({
    NOREG: z.string().optional(), 
    ROWSTART: z.preprocess((val) => Number(val), z.number().min(1)), 
    ROWEND: z.preprocess((val) => Number(val), z.number().min(1)),
  }),
});

export const LoginSchema = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
    mobileno: z.string(),
  }),
});