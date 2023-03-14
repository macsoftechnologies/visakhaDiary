import { ApiProperty } from '@nestjs/swagger';
export class userDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  user_name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  user_type: string;

  @ApiProperty()
  user_type_code: string;
}
