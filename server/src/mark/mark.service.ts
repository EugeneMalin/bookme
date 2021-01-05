import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mark } from './mark.entity';
import { IMark } from './mark.interface';

@Injectable()
export class MarksService {
  constructor(
    @InjectRepository(Mark)
    private marksRepository: Repository<Mark>,
  ) {}

  create(mark: IMark): Promise<Mark> {
    const item = this.marksRepository.create(mark);
    return this.marksRepository.save(item);
  }

  remove(id: number): Promise<boolean> {
    return this.marksRepository.delete(id).then(res => res.affected === 1);
  }

  findAll(filter: Partial<IMark>): Promise<Mark[]> {
    return this.marksRepository.find(filter);
  }
}
