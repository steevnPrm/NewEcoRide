import { Injectable } from '@nestjs/common';
import { RegisterUserUseCase } from './useCase/register-user-usecase';
import { RegisterUserDTO } from './dto/register-user-dto';
import { RegisterUserMapper } from './mapper/register-user-mapper';

@Injectable()
export class UserService {
    constructor(
        private readonly usecase : RegisterUserUseCase,
        private readonly mapper : RegisterUserMapper
    ){}

    async registerUser(dto : RegisterUserDTO){
        const command = this.mapper.convert(dto)
        this.usecase.execute(await command)
    }
}
