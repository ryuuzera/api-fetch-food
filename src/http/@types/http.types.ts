export enum HttpStatus {
  SUCESSO = 1,
  ERRO = 2,
  NAO_LOCALIZADO = 3,
  NAO_AUTORIZADO = 4,
  ACESSO_PROIBIDO = 5,
  REGISTRO_DUPLICADO = 6,
  REQUISICAO_INVALIDA = 7,
  SCHEMA_NAO_ENCONTARDO = 8,
  ERRO_SERVIDOR = 99,
}

export type ResponseObject<T = Object> = {
  status?:
    | 'success'
    | 'error'
    | 'not found'
    | 'unauthorized'
    | 'forbidden access'
    | 'duplicated register'
    | 'bad request'
    | 'server error';
  statusCode: HttpStatus;
  title: 'data' | 'messages';
  data: T;
};
