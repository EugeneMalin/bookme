import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create user'), async () => {
    const testEmail = 'email@asda.asa';
    const testLogin = 'test12';
    const creationRes = await service.create({login: testLogin, password: 'testtest', email: testEmail})
    expect(creationRes.password).toBeUndefined();
    expect(creationRes.email).toBe(testEmail);
    expect(creationRes.login).toBe(testLogin);
  }
});
