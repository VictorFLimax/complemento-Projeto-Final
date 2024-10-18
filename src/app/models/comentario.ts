import {ModelBase} from './model-base';
import {Aula} from './aula';
import {Usuario} from './usuario';


export class Comentario extends ModelBase{
  dataComentario: Date;
  texto: string;
  tipo: 'P' | 'O';
  aula: Aula
  usuario: Usuario;
}
