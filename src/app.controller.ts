import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //프록시 처리
  @Get()
  proxy() {
    return this.appService.proxy();
  }

  @Get('challenge1')
  async challenge1(): Promise<number> {
    return await this.appService.challenge1();
  }

  @Get('challenge2')
  async challenge2(): Promise<number> {
    return await this.appService.challenge2();
  }
}
