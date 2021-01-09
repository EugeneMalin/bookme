import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUser } from './user.interface';

/**
 * User DAO service
 */
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    /**
     * Gets existing user
     * @param login existing user login
     * @param password hash of user password
     */
    login(login: string, password: string): Promise<User|null> {
        return this.usersRepository.findOneOrFail({
            login
        }).then(user => user.password === User.hashPassword(password) ? user : null).catch(() => {
            Logger.log(`Bad log request with login ${login}`);
            return null;
        })
    }

    /**
     * Creates new user, if login or email exists throw error
     * 
     * todo create email confirmation https://nest-modules.github.io/mailer/docs/mailer
     *  and create person only after email confirmed
     * @param user new user
     */
    async create(user: IUser): Promise<Partial<User>> {
        const counts: {
            usersWithEmail: number,
            usersWithlogin: number
        } = await Promise.all([this.usersRepository.count({
            email: user.email
        }), this.usersRepository.count({
            login: user.login
        })]).then(([count1, count2]) => ({
            usersWithEmail: count1,
            usersWithlogin: count2
        }));

        if (counts.usersWithEmail || counts.usersWithlogin) {
            Logger.warn(`Try to create user with existed login "${user.login}" or email "${user.email}"`);
            throw new InternalServerErrorException({message: 'User is exists!',
             statusCode: counts.usersWithlogin ? counts.usersWithEmail ? 3 : 1 : 2})
        }

        const usr = this.usersRepository.create(user)
        Logger.log(`Creates user ${user.login}`)
        // todo add person creation
        return this.usersRepository.save(usr).then((savedUser) => ({
            login: savedUser.login,
            id: savedUser.id,
            email: savedUser.email
        }));
    }

    /**
     * Deletes user
     * @param id identifier of user
     */
    delete(id: number): Promise<boolean> {
        // todo add person remove
        // todo add private lists (with books ?) remove
        return this.usersRepository.delete(id).then(res => res.affected > 0);
    }

    /**
     * Updates user, if user not exists rejects
     * @param user new item
     */
    async update(user: IUser): Promise<User> {
        const oldItem = await this.usersRepository.findOne(user.id);
        if (!oldItem) {
            return Promise.reject()
        }
        oldItem.email = user.email;
        oldItem.login = user.login;
        oldItem.password = User.hashPassword(user.password);

        return this.usersRepository.save(oldItem);
    }
}
