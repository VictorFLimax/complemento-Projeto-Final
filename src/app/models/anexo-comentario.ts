import {ModelBase} from './model-base';
import {Comentario} from './comentario';


export class AnexoComentario extends ModelBase {
    nome: string;
    tipo: 'A' | 'F' | 'S';
    extensao?: 'P' | 'J' | 'W';
    caminhoAnexo: string;
    comentario: Comentario;

}
