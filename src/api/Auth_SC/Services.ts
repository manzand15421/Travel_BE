import { AuthRepository } from './repository';
import { ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';
import { StatusCodes } from 'http-status-codes';
import { createToken } from '@/common/helpers/jwt';

export class TravelService {
  private authRepository: AuthRepository;

  constructor(repository: AuthRepository = new AuthRepository()) {
    this.authRepository = repository;
  }


  async LoginTravel(USERNAME: string, PASSWORD: string) {
    try {
      const user = await this.authRepository.LoginTravel(USERNAME);

      if (!user) {
        return ServiceResponse.failure(
          'Invalid Username Or Password',
          null,
          StatusCodes.NOT_ACCEPTABLE,
        );
      }
      const isMatch = PASSWORD === user.PASSWORD; //compare payload & password from db

      if (!isMatch) {
        return ServiceResponse.failure(
          'Invalid Username Or Password',
          null,
          StatusCodes.NOT_ACCEPTABLE,
        );
      }

      const token = createToken({
        id: user.USERNAME,
      });

      const getData = await this.authRepository.getUserLogin(USERNAME);

      return ServiceResponse.success('Login Success', { getData, token });
    } catch (e) {
      const errorMessage = `Error fetching travel records: ${(e as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while retrieving travel records.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const travelService = new TravelService();
