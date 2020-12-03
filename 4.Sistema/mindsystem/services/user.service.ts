import { Injectable } from '@angular/core';
import { IConsulta } from 'models/consulta.model';
import { IUsuario, MUsuario } from 'models/usuario.model';
import { BackEndService } from './back-end.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    public listPacientes: IUsuario[] = [];
    public listDoutores: IUsuario[] = [];

    constructor(
      private backEndService: BackEndService,
    ){
      this.listDoutores = this.backEndService.list1;
      this.listPacientes = this.backEndService.list2;
    }

    getDoutores(): IUsuario[]{
      return this.listDoutores;
    }

    getPacientes(): IUsuario[]{
      return this.listPacientes;
    }

    getListPedidos(paciente: IUsuario): IConsulta[]{
      let aux: IConsulta[] = [];
      this.listPacientes.forEach( p => {
        if (p.id === paciente.id){
          aux = p.pedidos;
        }
      });
      return aux;
    }

}
