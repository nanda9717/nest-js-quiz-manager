import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserRegisterDto{
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe'
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'The email address of the User',
        example: 'john.doe@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({
        description: 'The password of the User',
        example: 'Password@123'
    })
    @IsNotEmpty()
    @Length(8,24)
    password: string

    @ApiProperty({
        description: 'Confirm the password',
        example: 'Password@123'
    })
    @IsNotEmpty()
    @Length(8,24)
    confirm: string

}