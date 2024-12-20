import { PrismaClient as PrismaClientSC } from '../../../prisma/generated/client-dbSC';
import { PrismaClient as PrismaClientTravel } from '../../../prisma/generated/client-dbTravel';

import axios from "axios";
import { userRegistry } from '../user/userRouter';

const prismaSC = new PrismaClientSC();
const prisma = new PrismaClientTravel();

export class TravelRepository {

  async CallTravelNoReg(NOREG: string = '', ROWSTART: number, ROWEND: number) {
    const result = await prisma.$queryRaw`EXEC dbo.sp_GetTravelNoReg @NOREG = ${NOREG}, @ROWSTART = ${ROWSTART}, @ROWEND = ${ROWEND}`;
    return result; 
  }

  async getDataUser(NOREG : string = '') {
    const result = await prisma.tB_V_EMPLOYEE_PROFILE.findFirst({where : {NOREG}})
    return result;
  }

}
