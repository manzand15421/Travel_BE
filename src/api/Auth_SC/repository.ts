import { PrismaClient as PrismaClientSC } from '../../../prisma/generated/client-dbSC';

const prismaSC = new PrismaClientSC();


export class AuthRepository {


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
}
