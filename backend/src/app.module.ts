import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PasswordManagementService } from './password-management/password-management.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    envFilePath :'.env'
  }), PrismaModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, PasswordManagementService],
})
export class AppModule {}
