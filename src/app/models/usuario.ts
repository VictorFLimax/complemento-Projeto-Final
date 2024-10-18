import {ModelBase} from './model-base';

export class Usuario extends ModelBase {
  email: string;
  nome?: string;
  apelido: string;
  senha: string;
  perfil: 'I' | 'P';

}

