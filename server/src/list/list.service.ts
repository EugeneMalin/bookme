import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DEFAULT_LIMIT } from '../common/const';
import { IFilter } from '../common/filter.interface';
import { Repository } from 'typeorm';
import { List } from './list.entity';
import { IList } from './list.interface';

@Injectable()
export class ListService {
    
    constructor(
        @InjectRepository(List)
        private listRepository: Repository<List>
    ) {}

    /**
     * Gets list of items
     * @param page index of current page
     * @param filter filter params for item
     * @param limit count of items at page
     */
    getAll(page: number, filter?: IFilter, limit: number = DEFAULT_LIMIT): Promise<List[]> {
        return this.listRepository
            .createQueryBuilder('prsn')
            .where(...this._getQuery(filter))
            .limit(limit)
            .offset(limit * page)
            .getMany()
    }

    /**
     * Creates new list
     * @param list new list
     */
    async create(list: IList): Promise<List> {
        const item = this.listRepository.create(list);
        return this.listRepository.save(item);
    }

    /**
     * Updates list in list
     * @param list new list dto
     */
    async update(list: IList): Promise<List> {
        const item = await this.listRepository.findOne(list.id);

        if (!item) {
            return Promise.reject()
        }

        item.name = list.name;
        item.public = list.public;

        return this.listRepository.save(item);
    }

    /**
     * Deletes the list
     * @param id identifier of list
     */
    delete(id: number): Promise<boolean> {
        return this.listRepository.delete(id).then(res => res.affected > 0)
    }

    
    /**
     * Gets query for list
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
