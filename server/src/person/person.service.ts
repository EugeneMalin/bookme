import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DEFAULT_LIMIT } from 'src/common/const';
import { IFilter } from 'src/common/filter.interface';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { IPerson } from './person.interface';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>
    ) {}

    /**
     * Gets list of items
     * @param page index of current page
     * @param filter filter params for item
     * @param limit count of items at page
     */
    getAll(page: number, filter?: IFilter, limit: number = DEFAULT_LIMIT): Promise<Person[]> {
        return this.personRepository
            .createQueryBuilder('prsn')
            .where(...this._getQuery(filter))
            .limit(limit)
            .offset(limit * page)
            .getMany()
    }

    /**
     * Creates new person
     * @param person new person
     */
    async create(person: IPerson): Promise<Person> {
        const item = this.personRepository.create(person);
        return this.personRepository.save(item);
    }

    /**
     * Updates person in list
     * @param person new person dto
     */
    async update(person: IPerson): Promise<Person> {
        const item = await this.personRepository.findOne(person.id);

        if (!item) {
            return Promise.reject()
        }

        item.name = person.name;
        item.surname = person.surname;
        item.patronymic = person.patronymic;

        return this.personRepository.save(item);
    }

    /**
     * Deletes the person
     * @param id identifier of person
     */
    delete(id: number): Promise<boolean> {
        return this.personRepository.delete(id).then(res => res.affected > 0)
    }

    
    /**
     * Gets query for person
     * @param filter filter params
     */
    private _getQuery(filter: IFilter): [string, {[x: string]: string}] {
        let req = [];
        const params = {};

        if (filter.name) {
            req.push('prsn.name = :name');
            params['name'] = filter.name;
        }

        if (filter.surname) {
            req.push('prsn.surname = :surname');
            params['surname'] = filter.surname;
        }

        if (filter.patronymic) {
            req.push('prsn.patronymic = :patronymic');
            params['patronymic'] = filter.patronymic;
        }

        return [req.join(' OR '), params]
    }
}
