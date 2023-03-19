import { ApiProperty } from '@nestjs/swagger';

export class bccDto {
  @ApiProperty()
  district_code: string;
  @ApiProperty()
  bcc_code:string
  @ApiProperty()
  hq_code:string
}
