import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

require('dotenv').config()

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: !!process.env.DEBUG,
  })],
  controllers: [],
})
export class AppModule {}
