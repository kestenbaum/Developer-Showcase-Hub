import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  async onModuleInit(): Promise<void> {
    if (this.dataSource.isInitialized) {
      console.log('Initializing Db');
    }
  }
}
