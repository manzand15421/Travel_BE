import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { travelService, TravelService } from "./Services";
import { handleServiceResponse } from "@/common/utils/httpHandlers";

const prisma = new PrismaClient();

class TravelController {
  public getTravelNoReg = async (req: Request, res: Response) => {
    const { NOREG, ROWSTART, ROWEND } = req.query;

    
      // Execute the stored procedure
      const serviceResponse = await travelService.getTravelNoReg(
        NOREG as string,
        Number(ROWSTART),
        Number(ROWEND));

      // Convert BigInt values to strings
      const sanitizedResult = JSON.parse(
        JSON.stringify(serviceResponse, (key, value) => (typeof value === "bigint" ? value.toString() : value))
      );

     return handleServiceResponse(sanitizedResult, res);
  
  };
}

export const travelController = new TravelController();
