import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('redis/ping')
  async getRedisPing(): Promise<{ status: string; redis: string }> {
    const redis = await this.appService.getRedisStatus();
    return { status: 'ok', redis };
  }

  @Get('postgres/health')
  async getPostgresHealth(): Promise<{ status: string; postgres: string }> {
    const postgres = await this.appService.getPostgresStatus();
    return { status: 'ok', postgres };
  }
}
