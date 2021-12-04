import { InternalServerErrorException } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

describe('User service', () => {
    let service: UserService;
    let repo: Repository<User>;
    
    const store: User[] = []
    const userDto: IUser = {
        login: 'testerUser',
        email: 'tester@module.com',
        password: '1234567890'
    };

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository
                },
                UserService
            ]
        }).compile();

        service = moduleRef.get<UserService>(UserService);
        repo = moduleRef.get<Repository<User>>(getRepositoryToken(User));

        moduleRef.useLogger(false);

        jest.spyOn(repo, 'save').mockImplementation((newItem) => {
            const usr = new User()

            usr.email = newItem.email || '',
            usr.login = newItem.login || '',
            usr.id = store.length++,
            usr.password = User.hashPassword(newItem.password || '')

            store.push(usr)
            return Promise.resolve(store.find(item => newItem.login === item?.login || newItem.email === item?.email))
        });
        jest.spyOn(repo, 'findOneOrFail').mockImplementation((conditions) => Promise.resolve(
            store.find(item => conditions.login === item.login || conditions.email === item.email)
        ));
    })
    
    it('should be defined', () => {
        expect(UserService).toBeDefined();
    });

    describe('create', () => {
        const userDtoWithSameLogin: IUser = {
            login: userDto.login,
            email: 'tester@module1.com',
            password: '1234567890'
        };
        const userDtoWithSameEmail: IUser = {
            login: 'testerUser1',
            email: userDto.email,
            password: '1234567890'
        };
        
        beforeEach(() => {
            jest.spyOn(repo, 'count').mockImplementation((conditionds) => {
                return Promise.resolve(
                    store.filter(item => {
                        let match = true;
                        Object.keys(conditionds).forEach(key => {
                            match = match && item[key] === conditionds[key]
                        })
                        return match
                    }).length
                )
            });
            jest.spyOn(repo, 'create').mockImplementation((newItem) => {
                const usr = new User()
    
                usr.email = newItem.email || '',
                usr.login = newItem.login || '',
                usr.id = store.length++,
                usr.password = newItem.password || ''
    
                store.push(usr)
                return store.find(item => newItem.login === item?.login || newItem.email === item?.email)
            });
        })

        it('should create random user', async () => {
            const created = await service.create(userDto);

            expect(created.email).toBe(userDto.email);
            expect(created.login).toBe(userDto.login);
            expect(created.password).toBe(User.hashPassword(userDto.password));
        })

        it('shouldn\'t create full double user', () => {
            return service.create(userDto).then(() => service.create(userDto).catch((e: InternalServerErrorException) => {
                expect(e.getStatus()).toBe(500);
                expect(e.message).toBe('User is exists!');
            }))
        })

        it('shouldn\'t create user with same email', () => {
            return service.create(userDto).then(() => service.create(userDtoWithSameEmail).catch((e: InternalServerErrorException) => {
                expect(e.getStatus()).toBe(500);
                expect(e.message).toBe('User is exists!');
            }))
        })

        it('shouldn\'t create user with same login', () => {
            return service.create(userDto).then(() => service.create(userDtoWithSameLogin).catch((e: InternalServerErrorException) => {
                expect(e.getStatus()).toBe(500);
                expect(e.message).toBe('User is exists!');
            }))
        })
    })

    afterEach(() => {
        store.length = 0;
    })
})