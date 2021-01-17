import { User } from './user.entity';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });

  describe('hashPassword', () => {
    it('should hash same password for same string', () => {
      const pass = '12345678'
      expect(User.hashPassword(pass)).toBe(User.hashPassword(pass));
    })
  })
});
