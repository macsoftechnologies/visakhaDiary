import { ApiProperty } from '@nestjs/swagger';
export class userDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;
}
