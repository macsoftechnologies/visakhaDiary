import { ApiProperty } from "@nestjs/swagger";

export class recoveriesentryDto{
    @ApiProperty()
    bcc_code:string
    @ApiProperty()
    society_code:string
    @ApiProperty()
    from_date:string
}
