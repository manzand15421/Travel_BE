import { TravelRepository } from "./repository";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";
import { createToken } from "@/common/helpers/jwt";

export class TravelService {
  private travelRepository: TravelRepository;

  constructor(repository: TravelRepository = new TravelRepository()) {
    this.travelRepository = repository;
  }

  // Retrieve paginated results from the stored procedure
  async getTravelNoReg(NOREG: string, ROWSTART: number, ROWEND: number) {
    try {
      const response = await this.travelRepository.CallTravelNoReg(NOREG, ROWSTART, ROWEND);
      if (!response || null) {
        return ServiceResponse.failure("No records found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success("Records found", response);
    } catch (ex) {
      const errorMessage = `Error fetching travel records: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving travel records.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getDataUser () {
    try {

      const response = await this.travelRepository.getData();
      if (!response || response.length === 0) {
        return ServiceResponse.failure("No records found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success("Records found", response);

    } catch (e) {

      const errorMessage = `Error fetching travel records: ${(e as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving travel records.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );

    }
  }

  async LoginTravel (USERNAME : string , PASSWORD : string) {
    try {
    const user = await this.travelRepository.LoginTravel(USERNAME)
    
    if(!user) {
      return ServiceResponse.failure("Invalid Username Or Password",null,StatusCodes.NOT_ACCEPTABLE)
    }
    const isMatch = PASSWORD === user.PASSWORD //compare payload & password from db

    if (!isMatch) {
    return ServiceResponse.failure("Invalid Username Or Password",null,StatusCodes.NOT_ACCEPTABLE)
   }

    const token = createToken({
      id : user.USERNAME
    })

    
   const getData = await this.travelRepository.getUserLogin(USERNAME)

    return ServiceResponse.success("Login Success",{getData,token})

  } catch(e) {
    const errorMessage = `Error fetching travel records: ${(e as Error).message}`;
    logger.error(errorMessage);
    return ServiceResponse.failure(
      "An error occurred while retrieving travel records.",
      null,
      StatusCodes.INTERNAL_SERVER_ERROR,
    );

  }


  }
}

export const travelService = new TravelService();
