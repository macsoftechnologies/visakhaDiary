import { ApiProperty } from "@nestjs/swagger";

export class cattleinformationDto{
    @ApiProperty()
    producer_no:string
    @ApiProperty()
    bcc_code:string
    @ApiProperty()
    society_code:string
    
}