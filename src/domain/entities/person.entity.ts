export type PersonProps = {
  id?: number;
  cpf?: string;
  cnpj?: string;
};

class Person {
  constructor(public props: PersonProps) {}

  private set id(value: number | undefined) {
    this.props.id = value;
  }

  get id() {
    return this.props.id;
  }

  updateId(id: number | undefined) {
    this.id = id;
  }

  private set cpf(value: string | undefined) {
    this.props.cpf = TextUtility.removeSpecialCharacters(value);
  }

  get cpf() {
    return this.props.cpf;
  }

  updateCPF(cpf: string) {
    this.cpf = cpf;
  }

  private set cnpj(value: string | undefined) {
    this.props.cnpj = TextUtility.removeSpecialCharacters(value);
  }

  get cnpj() {
    return this.props.cnpj;
  }

  updateCNPJ(cnpj: string) {
    this.cnpj = cnpj;
  }
}
export default Person;
