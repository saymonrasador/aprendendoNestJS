import { Injectable } from '@nestjs/common';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class AuthService {
    private readonly users: User[] = [];

    createUser(user: User) {
        this.users.push(user);
    }

    findAllUsers() {
        return this.users;
    }

    findUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
}
