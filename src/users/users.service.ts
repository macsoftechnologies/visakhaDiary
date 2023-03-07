import { HttpStatus, Injectable } from '@nestjs/common';
import { userDto } from './dto/users.dto';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
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
}
