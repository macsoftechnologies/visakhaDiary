import { ApiProperty } from '@nestjs/swagger';

export class headQuartersDto {
  @ApiProperty()
  hq_code: string;
}
