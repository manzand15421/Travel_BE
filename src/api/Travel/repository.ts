import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class TravelRepository {

  async CallTravelNoReg(NOREG: string = '', ROWSTART: number, ROWEND: number) {
    const result = await prisma.$queryRaw`EXEC dbo.sp_GetTravelNoReg @NOREG = ${NOREG}, @ROWSTART = ${ROWSTART}, @ROWEND = ${ROWEND}`;
    return result; 
  }

}
