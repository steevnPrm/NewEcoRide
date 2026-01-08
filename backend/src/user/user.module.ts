import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordManagementService } from 'src/password-management/password-management.service';
import { UserRepository } from './repositories/user/user.service';
import { RegisterUserUseCase } from './useCase/register-user-usecase';
import { RegisterUserMapper } from './mapper/register-user-mapper';

@Module({
  providers: [
    UserService,
    UserRepository,
    PrismaService,
    PasswordManagementService,
    RegisterUserUseCase,
    RegisterUserMapper
  ],
  exports: [
    UserService,
    RegisterUserUseCase, 
    RegisterUserMapper
  ],
})
export class UserModule {}
