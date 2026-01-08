import { Injectable } from "@nestjs/common";
import { RegisterUserCommand } from "../command/register-user-command";
import { RegisterUserDTO } from "../dto/register-user-dto";

@Injectable()
export class RegisterUserMapper{
    async convert(dto : RegisterUserDTO): Promise<RegisterUserCommand>{
        return new RegisterUserCommand(
            dto.firstname,
            dto.lastname,
            dto.username,
            dto.email,
            dto.password
        )
    }
}