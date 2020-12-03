import { email, minLength, prop, required } from '@rxweb/reactive-form-validators';
import { IUsuario } from './usuario.model';

export interface IConsulta {
    doutor: IUsuario;
    data: Date;
    plano: string;
    obs: string;
    status: boolean;
}

export class MConsulta implements IConsulta {
    @prop()
    @required({message: 'Doutor(a) é obrigatório.' })
    doutor: IUsuario;
    @prop()
    @required({message: 'Paciente é obrigatório.' })
    paciente: IUsuario;
    @prop()
    @required({message: 'Data é obrigatório.' })
    data: Date;
    @prop()
    plano: string;
    @prop()
    obs: string;
    @prop()
    status: boolean;

    constructor() {

    }
}
