import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisService } from './redis.service';
import { PostgresService } from './postgres.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RedisService, PostgresService],
})
export class AppModule {}
