import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'securepassword' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'anotherpassword' },
  ];

  create(user: User) {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find(user => user.name === name);
  }

  delete(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  update(id: number, user: User) {
    const index = this.users.findIndex(u => u.id === id);
    if (index >= 0) {
      this.users[index] = { ...this.users[index], ...user };
      return this.users[index];
    }
    return null;
  }
}
