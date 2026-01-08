import { UserModel } from "generated/prisma/models";
import { RegisterUserCommand } from "src/user/command/register-user-command";

export interface IUserRepository{
    findByEmail(email : string):Promise<UserModel | null>
    create(user : RegisterUserCommand):Promise<void>
}