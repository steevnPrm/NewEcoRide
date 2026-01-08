import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserRepository } from '../interface/i-user-repository';
import { UserModel } from 'generated/prisma/models';
import { RegisterUserCommand } from 'src/user/command/register-user-command';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        private readonly prisma : PrismaService
    ){}
    async create(user: RegisterUserCommand){
        const newUser = this.prisma.user.create({
            data : {
                firstname : user.firstname,
                lastname : user.lastname,
                username : user.username,
                email : user.email,
                password : user.password
            }
        })
    }
    async findByEmail(email: string): Promise<UserModel | null> {
        return this.prisma.user.findFirst({where : {
            email : email
        }}) 
    }
}
