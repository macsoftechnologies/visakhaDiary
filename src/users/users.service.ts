import { HttpStatus, Injectable } from '@nestjs/common';
import { userDto } from './dto/users.dto';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { SharedService } from 'src/shared/shared.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private sharedService: SharedService,
  ) {}
  async addUser(req: userDto) {
    try {
      console.log(req, 'req..');
      const addUserResp = await getRepository(Users).save(req);
      console.log(addUserResp);

      if (addUserResp) {
        return {
          statusCode: HttpStatus.OK,
          Data: addUserResp,
        };
      }
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        msg: 'Invalid Request',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  async userLogin(req: userDto) {
    try {
      const data = await this.sharedService.executeQuery(
        `SELECT * from users_master where user_name=${req.user_name} AND password=${req.password}`,
      );
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          Data: data.recordset,
          // Query: query,
        };
      }
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        msg: 'Invalid Request',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }

  async userCategoryList(req: userDto) {
    try {
      if (req.user_type == 'admin') {
        const data = await this.sharedService.executeQuery(
          `SELECT * from Head_Quarters`,
        );
        if (data) {
          return {
            statusCode: HttpStatus.OK,
            Data: data.recordset,
            // Query: query,
          };
        }
      } else if (req.user_type == 'hq') {
        const data = await this.sharedService.executeQuery(
          `SELECT * from BCC where hq_code=${req.user_type_code}`,
        );
        if (data) {
          return {
            statusCode: HttpStatus.OK,
            Data: data.recordset,
            // Query: query,
          };
        }
      } else if (req.user_type == 'bcc') {
        const data = await this.sharedService.executeQuery(
          `SELECT * from Producers where bcc_code=${req.user_type_code}`,
        );
        if (data) {
          return {
            statusCode: HttpStatus.OK,
            Data: data.recordset,
            // Query: query,
          };
        }
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          msg: 'Invalid Request',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        Message: error,
      };
    }
  }
}
