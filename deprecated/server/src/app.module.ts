import { Module } from '@nestjs/common';
import { MarksModule } from './mark/mark.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { BookModule } from './book/book.module';
import { ListModule } from './list/list.module';
import { DatabaseModule } from './database.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule, DatabaseModule, MarksModule, TagModule, UserModule, PersonModule, BookModule, ListModule]
})
export class AppModule {}
