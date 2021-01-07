import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { IListParams } from 'src/common/listParam.interface';
import { List } from './list.entity';
import { IList } from './list.interface';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
    constructor(private readonly listService: ListService) {}

    @Post()
    create(@Body() listDto: IList): Promise<number> {
        Logger.log(`Creates list for ${'USER'}`)
        return this.listService.create(listDto).then()
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        Logger.log('Deletes list from database')
        return this.listService.delete(id)
    }

    @Put()
    update(@Body() listDto: IList): Promise<List> {
        return this.listService.update(listDto);
    }

    @Get()
    getAll(@Body() params: IListParams): Promise<List[]> {
        return this.listService.getAll(params.page, params.filter, params.limit)
    }
}
