import { Injectable } from '@nestjs/common';
import { PostgresService } from './postgres.service';
import { RedisService } from './redis.service';

@Injectable()
export class AppService {
  constructor(
    private readonly redisService: RedisService,
    private readonly postgresService: PostgresService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getRedisStatus(): Promise<string> {
    return this.redisService.ping();
  }

  async getPostgresStatus(): Promise<'ok'> {
    return this.postgresService.healthCheck();
  }
}
