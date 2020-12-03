import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IConsulta, MConsulta } from 'models/consulta.model';
import { IUsuario } from 'models/usuario.model';

@Component({
  selector: 'app-crud-pedido',
  templateUrl: './crud-pedido.component.html',
  styleUrls: ['./crud-pedido.component.scss']
})
export class CrudPedidoComponent implements OnInit {

    productDialog: boolean;

    selectedProducts: any[];
    submitted: boolean;
    statuses: any[];

    doutor = 'Pedro';
    listPacientes: IUsuario[] = [];
    list: IUsuario[] = [];

    constructor(
      private userService: UserService
    ) { }

    ngOnInit(): void {
      this.listPacientes = this.userService.getPacientes();

      this.statuses = [
          {label: 'ABERTO', value: false},
          {label: 'CONFIRMADO', value: true},
      ];
    }

    openNew() {
      //implements
    }

    deleteSelectedProducts(){
      //implements
    }

    editProduct(product){
      //implements
    }

    deleteProduct(product){
      //implements
    }

    hideDialog(){
      //implements
    }

    saveProduct(){
      //implements
    }
}
