import { TravelRepository } from "./repository";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";

export class TravelService {
  private travelRepository: TravelRepository;

  constructor(repository: TravelRepository = new TravelRepository()) {
    this.travelRepository = repository;
  }

  // Retrieve paginated results from the stored procedure
  async getTravelNoReg(NOREG: string, ROWSTART: number, ROWEND: number) {
    try {
      const response = await this.travelRepository.CallTravelNoReg(NOREG, ROWSTART, ROWEND);
      if (!response || response.length === 0) {
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
}

export const travelService = new TravelService();
