import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterDto } from "./dto/user-register.dto";
import { User } from "./user.entity";

@Controller('user')
export class UserController{

    constructor(private userService: UserService){}

    @Post('/register')
    @UsePipes(ValidationPipe)
    async userRegistration(@Body() userData: UserRegisterDto): Promise<User>{
        return await this.userService.register(userData);
    }

}