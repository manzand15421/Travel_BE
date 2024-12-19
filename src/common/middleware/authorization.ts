import { PrismaClient , TB_M_USER } from "../../../prisma/generated/client-dbSC";
import { NextFunction, Request,Response } from "express";
import { verifyToken } from "../helpers/jwt";

interface UserRequest extends Request{
    user?: TB_M_USER | null;
}

const prisma = new PrismaClient()

export async function authorize(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const bearerToken = req.headers.authorization;
      if (!bearerToken) return res.status(401).json({ message: "Unauthorized: Missing token" });
  
      const token = bearerToken.split(" ")[1]; // Bearer {token}
      const payload = verifyToken(token);
  
      if (!payload) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
  
      req.user = await prisma.tB_M_USER.findUnique({
        where: { USERNAME: payload.id },
      });
  
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: User not found" });
      }
  
      next();
    } catch (error: any) {
      if (error.message === "TokenExpiredError") {
        return res.status(401).json({ message: "Unauthorized: Token expired" });
      }
      if (error.message === "InvalidTokenError") {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      console.error(error);
      next(error);
    }
  }
  
