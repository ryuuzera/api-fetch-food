import Person from '../domain/entities/person.entity';
import User, { UserProps } from '../domain/entities/user.entity';

describe('User Class', () => {
  let user: User;
  const initialUserProps: UserProps = {
    email: 'test@example.com',
    username: 'testuser',
    password: 'password123',
    person: new Person({ cpf: '44553504898' }),
  };

  beforeEach(() => {
    user = new User(initialUserProps);
  });

  it('should create a User instance', () => {
    expect(user).toBeInstanceOf(User);
  });

  it('should get and set id', () => {
    const newId = 123;
    user.updateId(newId);
    expect(user.id).toBe(newId);
  });

  it('should get and set email', () => {
    const newEmail = 'newemail@example.com';
    user.updateEmail(newEmail);
    expect(user.email).toBe(newEmail);
  });

  it('should get and set username', () => {
    const newUsername = 'newusername';
    user.updateUsername(newUsername);
    expect(user.username).toBe(newUsername);
  });

  it('should get and set password', () => {
    const newPassword = 'newpassword123';
    user.updatePassword(newPassword);
    expect(user.password).toBe(newPassword);
  });

  it('should get and set refreshToken', () => {
    const newRefreshToken = 'new-refresh-token';
    user.updaterefreshToken(newRefreshToken);
    expect(user.refreshToken).toBe(newRefreshToken);
  });

  it('should get and set person', () => {
    const newPerson = new Person({ cpf: '44553504898'});
    user.updateperson(newPerson);
    expect(user.person).toBe(newPerson);
  });
});
