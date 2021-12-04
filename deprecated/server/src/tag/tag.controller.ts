import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { Tag } from './tag.entity';
import { ITag } from './tag.interface';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private readonly tagsService: TagService) {}

    @Put(':id')
    async update(@Param('id') id: number, @Body() markDto: ITag): Promise<number> {
        const item = await this.tagsService.get(id);
        Logger.log(`Updates tag ${item.id}`)

        item.name = markDto.name;
        item.description = markDto.description;

        return this.tagsService.save(item);
    }

    @Get(':id')
    get(@Param('id') id: number): Promise<Tag> {
        return this.tagsService.get(id);
    }

    @Post()
    create(@Body() markDto: ITag): Promise<number> {
        Logger.log(`Creates tag for ${'BOOK'} from ${'USER'}`)
        return this.tagsService.create(markDto).then(mark => mark.id);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        Logger.log(`Deletes tag ${id} for ${'BOOK'} from ${'USER'}`)
        return this.tagsService.remove(id);
    }
}
