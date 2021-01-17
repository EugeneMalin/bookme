import { Test } from "@nestjs/testing";
import { UserController } from "./user.controller"
import { User } from "./user.entity";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

describe('User controller', () => {
    let controller: UserController;

    const userDto: IUser = {
        id: 87,
        login: 'testerUser',
        email: 'tester@module.com',
        password: '1234567890'
    }

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        create: jest.fn().mockResolvedValue({
                            ...userDto,
                            password: User.hashPassword(userDto.password)
                        })
                    }
                }
            ]
        }).compile();

        controller = moduleRef.get<UserController>(UserController);
    })
    
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create user', async () => {
            const created = await controller.create(userDto);
             
            expect(created.id).toBe(87)
            expect(created.email).toBe(userDto.email)
            expect(created.login).toBe(userDto.login)
            expect(created.password).toBe(User.hashPassword(userDto.password))
        })
    })
})