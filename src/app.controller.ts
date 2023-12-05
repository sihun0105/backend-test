import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConvertedProduct } from './challenge1-type';
import { Option } from './challenge2-type';
import { RateLimitGuard } from './rate-limit/rate-limit.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //프록시 처리
  @Get()
  proxy() {
    return this.appService.proxy();
  }
  @UseGuards(RateLimitGuard)
  @Get('challenge1')
  async challenge1(): Promise<ConvertedProduct> {
    return await this.appService.challenge1();
  }
  @UseGuards(RateLimitGuard)
  @Get('challenge2')
  async challenge2(): Promise<Option[]> {
    return await this.appService.challenge2();
  }
}
