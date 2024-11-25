import { Injectable } from "@nestjs/common";
import { UserRegisterDto } from "./dto/user-register.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    async register(userData: UserRegisterDto): Promise<User>{
        // const salt = await bcrypt.genSalt();
        // const password = await bcrypt.hash(userData.password, salt);
        const user = new User();
        user.name = userData.name;
        user.email = userData.email;
        user.password = userData.password;
        return await user.save();
    }

    async getUserByEmail(email: string): Promise<User | undefined>{
        return User.findOne({where: {email: email}});
    }
}