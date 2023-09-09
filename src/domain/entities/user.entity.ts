import Person from './person.entity';

export type UserProps = {
  id?: number;
  createdAt?: Date;
  email: string;
  username: string;
  password: string;
  refreshToken?: string;
  person: Person;
};

class User {
  constructor(public props: UserProps) {}

  private set id(value: number | undefined) {
    this.props.id = value;
  }

  get id() {
    return this.props.id;
  }

  updateId(id: number | undefined) {
    this.id = id;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  get email() {
    return this.props.email;
  }

  updateEmail(email: string) {
    this.email = email;
  }

  private set username(value: string) {
    this.props.username = value;
  }

  get username() {
    return this.props.username;
  }

  updateUsername(username: string) {
    this.username = username;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get password() {
    return this.props.password;
  }

  updatePassword(password: string) {
    this.password = password;
  }

  private set refreshToken(value: string | undefined) {
    this.props.refreshToken = value;
  }

  get refreshToken() {
    return this.props.refreshToken;
  }

  updaterefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  private set person(value: Person) {
    this.props.person = value;
  }

  get person() {
    return this.props.person;
  }

  updateperson(person: Person) {
    this.person = person;
  }
}

export default User;
