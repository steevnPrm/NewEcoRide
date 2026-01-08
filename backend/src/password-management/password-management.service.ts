import { Injectable } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { IPasswordManagement } from './i-password-management';

@Injectable()
export class PasswordManagementService implements IPasswordManagement {
    async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

}
