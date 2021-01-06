import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { ITag } from './tag.interface';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private tagsRepository: Repository<Tag>,
    ) {}

    create(tag: ITag): Promise<Tag> {
        const item = this.tagsRepository.create(tag);
        return this.tagsRepository.save(item);
    }

    save(tag: Tag): Promise<number> {
        return this.tagsRepository.save(tag).then(item => item.id);
    }

    get(id: number): Promise<Tag> {
        return this.tagsRepository.findOne(id)
    }

    remove(id: number): Promise<boolean> {
        return this.tagsRepository.delete(id).then(res => res.affected === 1);
    }

    findAll(filter: Partial<ITag>): Promise<Tag[]> {
        return this.tagsRepository.find(filter);
    }
}
