import { Module } from '@nestjs/common';
import { MarksModule } from './mark/mark.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { BookModule } from './book/book.module';
import { ListModule } from './list/list.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { number, object, string } from 'joi';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema: object({
      DB_HOST: string().required(),
      DB_PORT: number().required(),
      DB_USER: string().required(),
      DB_PASS: string().required(),
      DB_NAME: string().required()
    })
  }), DatabaseModule, MarksModule, TagModule, UserModule, PersonModule, BookModule, ListModule]
})
export class AppModule {}
