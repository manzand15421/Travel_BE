import type { Request, Response } from 'express';
import { travelService } from './Services';
import { handleServiceResponse } from '@/common/utils/httpHandlers';

class AuthController {
  public LoginUser = async (req: Request, res: Response) => {
    const { USERNAME, PASSWORD } = req.body;
    const result = await travelService.LoginTravel(USERNAME, PASSWORD);
    return handleServiceResponse(result, res);
  };
}


export const authController = new AuthController();
