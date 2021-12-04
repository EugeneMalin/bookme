import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mark } from './mark.entity';
import { MarksController } from './mark.controller';
import { MarksService } from './mark.service';

@Module({
    imports: [TypeOrmModule.forFeature([Mark])],
    exports: [TypeOrmModule],
    providers: [MarksService],
    controllers: [MarksController]
})
export class MarksModule {}
