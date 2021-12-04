import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DEFAULT_LIMIT } from '../common/const';
import { IFilter } from '../common/filter.interface';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { IBook } from './book.interface';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>
    ) {}

    /**
     * Gets list of items
     * @param page index of current page
     * @param filter filter params for item
     * @param limit count of items at page
     */
    getAll(page: number, filter?: IFilter, limit: number = DEFAULT_LIMIT): Promise<Book[]> {
        return this.bookRepository
            .createQueryBuilder('prsn')
            .where(...this._getQuery(filter))
            .limit(limit)
            .offset(limit * page)
            .getMany()
    }

    /**
     * Creates new book
     * @param book new book
     */
    async create(book: IBook): Promise<Book> {
        const item = this.bookRepository.create(book);
        return this.bookRepository.save(item);
    }

    /**
     * Updates book in list
     * @param book new book dto
     */
    async update(book: IBook): Promise<Book> {
        const item = await this.bookRepository.findOne(book.id);

        if (!item) {
            return Promise.reject()
        }

        item.name = book.name;

        return this.bookRepository.save(item);
    }

    /**
     * Deletes the book
     * @param id identifier of book
     */
    delete(id: number): Promise<boolean> {
        return this.bookRepository.delete(id).then(res => res.affected > 0)
    }

    
    /**
     * Gets query for book
     * @param filter filter params
     */
    private _getQuery(filter: IFilter): [string, {[x: string]: string}] {
        let req = [];
        const params = {};

        if (filter.name) {
            req.push('prsn.name = :name');
            params['name'] = filter.name;
        }

        return [req.join(' OR '), params]
    }
}
