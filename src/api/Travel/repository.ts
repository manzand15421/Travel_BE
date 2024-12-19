import { PrismaClient as PrismaClientSC } from '../../../prisma/generated/client-dbSC';
import { PrismaClient as PrismaClientTravel } from '../../../prisma/generated/client-dbTravel';

import axios from "axios";

const prismaSC = new PrismaClientSC();
const prisma = new PrismaClientTravel();

export class TravelRepository {

  async CallTravelNoReg(NOREG: string = '', ROWSTART: number, ROWEND: number) {
    const result = await prisma.$queryRaw`EXEC dbo.sp_GetTravelNoReg @NOREG = ${NOREG}, @ROWSTART = ${ROWSTART}, @ROWEND = ${ROWEND}`;
    return result; 
  }

  async getData() {
    const resultData  = await prismaSC.tB_M_USER.findMany({
      where : {
        USERNAME : "1324521"
      }
    })
    return  resultData
    
  }
  async LoginTravel (USERNAME: string ='' ) {
    const result = await prismaSC.tB_M_USER.findUnique({where : {USERNAME}})
    return result 
  
  }

  async getUserLogin(USERNAME : string) {
    const result = await prismaSC.tB_M_AUTHORIZATION.findFirst({
      where: {
        TB_M_USER: {
          USERNAME: USERNAME,
        },
      },
      select : {
        APPLICATION : true,
        ROLE : true,
        FEATURE : true, 
        FUNCTION : true,
      TB_M_USER : { 
        select : {
          USERNAME : true,
          ID : true,
          REG_NO : true,
          COMPANY : true,
          FIRST_NAME : true,
          LAST_NAME : true,
          GENDER: true,
          BIRTH_DATE : true,
          ADDRESS : true,
          IN_ACTIVE_DIRECTORY : true,
          LOCK_TIMEOUT: true,
          SESSION_TIMEOUT : true,
        }
      }
      
      }

    })
    return result;
  }




  async HrLogin(username: string, password: string , mobileno : string) {
    const result = await axios.post('https://hrportal.toyota.co.id/Login/CheckSCMobile', {
      username,
      password,
      mobileno
    });
    return result;
  }

}
