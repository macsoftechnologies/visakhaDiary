import { Body, Controller, HttpStatus, Post, Request } from '@nestjs/common';
import { userDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/addUser')
  async createUser(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.usersService.addUser(req.body);
      console.log('result', result);

      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/login')
  async loginUser(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.usersService.userLogin(req.body);
      console.log('result', result);

      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/getUserCategoryList')
  async categoryList(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.usersService.userCategoryList(req.body);
      console.log('result', result);

      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
}
