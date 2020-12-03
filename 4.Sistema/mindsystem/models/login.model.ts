import { email, minLength, prop, required } from '@rxweb/reactive-form-validators';

export interface ILogin {
    email: string;
    senha: string;
}

export class MLogin implements ILogin {
    @prop()
    @required({message: 'Email é obrigatório.' })
    @email()
    email: string;
    @prop()
    @required({message: 'Senha é obrigatório.' })
    @minLength({value: 6, message: 'Senha deve ter no mínimo 6 caracteres.' })
    senha: string;

    constructor() {

    }
}
