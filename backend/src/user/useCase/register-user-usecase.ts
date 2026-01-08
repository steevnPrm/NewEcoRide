import { RegisterUserCommand } from "../command/register-user-command";
import { PasswordManagementService } from "src/password-management/password-management.service";
import { UserRepository } from "../repositories/user/user.service";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class RegisterUserUseCase{
    constructor(
        private readonly repository : UserRepository,
        private readonly passwordMaganer : PasswordManagementService,
    ){}
    async execute(command : RegisterUserCommand){
        try {
            const isEmailExist = await this.repository.findByEmail(command.email)
            if(isEmailExist){
                throw new BadRequestException
            }
            const hashed = await this.passwordMaganer.hash(command.password)
            const safeUser = {
                ...command, password : hashed
            }

            const saveUser = await this.repository.create(safeUser)
            return safeUser
        } catch (error) {
            
        }
    }
}