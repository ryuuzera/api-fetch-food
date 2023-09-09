// Importe a classe Person e seus tipos

import Person, { PersonProps } from '../domain/entities/person.entity';
import TextUtility from '../infra/services/textService/text.utility';

describe('Person Class', () => {
  let person: Person;
  const initialPersonProps: PersonProps = {
    cpf: '123.456.789-00',
    cnpj: '12.345.678/0001-90',
  };

  beforeEach(() => {
    person = new Person(initialPersonProps);
  });

  it('should create a Person instance', () => {
    expect(person).toBeInstanceOf(Person);
  });

  it('should get and set id', () => {
    const newId = 123;
    person.updateId(newId);
    expect(person.id).toBe(newId);
  });

  it('should get and set cpf', () => {
    const newCPF = '987.654.321-00';
    person.updateCPF(newCPF);
    expect(person.cpf).toBe(TextUtility.removeSpecialCharacters(newCPF));
  });

  it('should get and set cnpj', () => {
    const newCNPJ = '98.765.432/0001-09';
    person.updateCNPJ(newCNPJ);
    expect(person.cnpj).toBe(TextUtility.removeSpecialCharacters(newCNPJ));
  });
});
