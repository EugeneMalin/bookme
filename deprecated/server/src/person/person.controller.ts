import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { IListParams } from '../common/listParam.interface';
import { Person } from './person.entity';
import { IPerson } from './person.interface';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Post()
    create(@Body() personDto: IPerson): Promise<number> {
        Logger.log(`Creates person for ${'USER'}`)
        return this.personService.create(personDto).then()
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        Logger.log('Deletes person from database')
        return this.personService.delete(id)
    }

    @Put()
    update(@Body() personDto: IPerson): Promise<Person> {
        return this.personService.update(personDto);
    }

    @Get()
    getAll(@Body() params: IListParams): Promise<Person[]> {
        return this.personService.getAll(params.page, params.filter, params.limit)
    }
}
