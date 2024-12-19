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

  public GetDataUser = async (req: Request, res: Response) => {
    const result = await travelService.getDataUser();
    return handleServiceResponse(result, res);
  };

  public LoginUser = async (req: Request, res: Response) => {
    const { USERNAME, PASSWORD } = req.body;
    const result = await travelService.LoginTravel(USERNAME, PASSWORD);
    return handleServiceResponse(result, res);
  };
}

export const travelController = new TravelController();
