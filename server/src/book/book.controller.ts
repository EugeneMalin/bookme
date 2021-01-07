import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { IListParams } from 'src/common/listParam.interface';
import { Book } from './book.entity';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    create(@Body() bookDto: IBook): Promise<number> {
        Logger.log(`Creates book for ${'USER'}`)
        return this.bookService.create(bookDto).then()
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        Logger.log('Deletes book from database')
        return this.bookService.delete(id)
    }

    @Put()
    update(@Body() bookDto: IBook): Promise<Book> {
        return this.bookService.update(bookDto);
    }

    @Get()
    getAll(@Body() params: IListParams): Promise<Book[]> {
        return this.bookService.getAll(params.page, params.filter, params.limit)
    }
}
