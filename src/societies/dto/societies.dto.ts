import { ApiProperty } from "@nestjs/swagger";

export class societiesDto{
    @ApiProperty()
    bcc_code:string
    @ApiProperty()
    society_code:string
}