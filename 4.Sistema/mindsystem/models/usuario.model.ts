import { email, minLength, prop, required } from '@rxweb/reactive-form-validators';
import type { IConsulta } from './consulta.model';

export interface IUsuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    tpAdmin: boolean;
    pedidos: IConsulta[];
}

export class MUsuario implements IUsuario {
    @prop()
    id: string;
    @prop()
    nome: string;
    @prop()
    @required({message: 'Email é obrigatório.' })
    @email()
    email: string;
    @prop()
    @required({message: 'Senha é obrigatório.' })
    // @minLength({value: 6, message: 'Senha deve ter no mínimo 6 caracteres.' })
    senha: string;
    @prop()
    tpAdmin: boolean;
    @prop()
    pedidos: IConsulta[];

    constructor() {

    }
}
