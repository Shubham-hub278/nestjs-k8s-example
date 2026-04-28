import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PostgresService implements OnModuleDestroy {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.POSTGRES_HOST ?? '127.0.0.1',
      port: Number(process.env.POSTGRES_PORT ?? 5432),
      user: process.env.POSTGRES_USER ?? 'postgres',
      password: process.env.POSTGRES_PASSWORD ?? 'postgres',
      database: process.env.POSTGRES_DB ?? 'k8s_demo',
      max: 5,
    });
  }

  async healthCheck(): Promise<'ok'> {
    await this.pool.query('SELECT 1');
    return 'ok';
  }

  async onModuleDestroy(): Promise<void> {
    await this.pool.end();
  }
}
