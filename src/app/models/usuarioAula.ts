import {ModelBase} from './model-base';
import {Aula} from './aula';
import {Usuario} from './usuario';


export class UsuarioAula extends ModelBase {
    usuario: Usuario;
    aula: Aula;
}
