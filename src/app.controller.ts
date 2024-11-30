import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyAuthGuard } from './common/guards/api-key-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('protected')
  @UseGuards(ApiKeyAuthGuard)
  handleApiKeyProtectedRequest(): string {
    return this.appService.handleApiKeyProtectedRequest();
  }
}
