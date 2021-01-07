import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { Mark } from './mark.entity';
import { IMark } from './mark.interface';
import { MarksService } from './mark.service';

@Controller('mark')
export class MarksController {
    constructor(private readonly marksService: MarksService) {}

    @Post()
    create(@Body() markDto: IMark): Promise<number> {
        Logger.log(`Creates mark for ${'BOOK'} from ${'USER'}`)
        return this.marksService.create(markDto).then(mark => mark.id);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        Logger.log(`Deletes mark ${id} for ${'BOOK'} from ${'USER'}`)
        return this.marksService.remove(id);
    }
}
