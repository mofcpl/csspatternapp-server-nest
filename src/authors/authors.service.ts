import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './authors.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorsService {

    constructor(@InjectRepository(Author) private repository: Repository<Author>) {}

    saveAuthor(name: string, email: string, password: string, homepage: string) {
        const author = this.repository.create({name, email, password, homepage})
        this.repository.save(author);
    }
}
