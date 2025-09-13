import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Post()
  create(): string {
    return 'This action adds a new item';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
