import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarksModule } from './mark/mark.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';

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
  }), MarksModule, TagModule, UserModule, PersonModule]
})
export class AppModule {}
