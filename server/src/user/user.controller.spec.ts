import { InternalServerErrorException } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { UserController } from "./user.controller"
import { User } from "./user.entity";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

describe('User controller', () => {
    let controller: UserController;

    const id = 1;
    const userDto: IUser = {
        login: 'testerUser',
        email: 'tester@module.com',
        password: '1234567890'
    };

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController],
            providers: [{
                provide: UserService,
                useValue: {
                    create: () => Promise.resolve({
                        ...userDto,
                        id,
                        password: User.hashPassword(userDto.password)
                    })
                }
            }]
        }).compile();

        moduleRef.useLogger(false);
        
        controller = moduleRef.get<UserController>(UserController);
    })
    
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create random user', async () => {
            const created = await controller.create(userDto);
             
            expect(created.email).toBe(userDto.email)
            expect(created.login).toBe(userDto.login)
            expect(created.id).toBe(id);
            expect(created.password).toBe(User.hashPassword(userDto.password))
        })
    });
})