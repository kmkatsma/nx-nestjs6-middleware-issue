import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): string {
    return this.appService.getData();
  }
}

@Controller('test')
export class AppController2 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): string {
    return 'test';
  }
}
