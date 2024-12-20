import type { Request, Response } from 'express';
import { travelService } from './Services';
import { handleServiceResponse } from '@/common/utils/httpHandlers';

class TravelController {
  public getTravelNoReg = async (req: Request, res: Response) => {
    const { NOREG, ROWSTART, ROWEND } = req.query;

    // Execute the stored procedure
    const serviceResponse = await travelService.getTravelNoReg(
      NOREG as string,
      Number(ROWSTART),
      Number(ROWEND),
    );

    // Convert BigInt values to strings
    const sanitizedResult = JSON.parse(
      JSON.stringify(serviceResponse, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value,
      ),
    );

    return handleServiceResponse(sanitizedResult, res);
  };

  public getProfile = async (req : Request , res : Response) => {
    const NOREG = req.query.NOREG as string
    const result = await travelService.getProfile(NOREG)
    return handleServiceResponse(result,res)
  }
}


export const travelController = new TravelController();
