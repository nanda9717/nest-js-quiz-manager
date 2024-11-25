import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterDto } from "./dto/user-register.dto";
import { User } from "./user.entity";
import { ApiBadRequestResponse, ApiCreatedResponse } from "@nestjs/swagger";

@Controller('user')
export class UserController{

    constructor(private userService: UserService){}

    @Post('/register')
    @ApiCreatedResponse({description:'Created user object as response', type: User})
    @ApiBadRequestResponse({description:'User cannot register. Try again'})
    @UsePipes(ValidationPipe)
    async userRegistration(@Body() userData: UserRegisterDto): Promise<User>{
        return await this.userService.register(userData);
    }

}