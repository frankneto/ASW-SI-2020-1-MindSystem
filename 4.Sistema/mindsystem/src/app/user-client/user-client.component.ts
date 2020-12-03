import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConsulta } from 'models/consulta.model';
import { IUsuario } from 'models/usuario.model';
import { AuthService } from 'services/auth.service';
import { UserService } from 'services/user.service';

@Component({
  selector: 'app-user-client',
  templateUrl: './user-client.component.html',
  styleUrls: ['./user-client.component.scss']
})
export class UserClientComponent implements OnInit {

  public pedidos: IConsulta[] = [];
  public listDoutores: IUsuario[] = [];
  public nomeDoutores: string[];
  public vazio: boolean;
  public selectedDoctor: string;
  public selectedData: string;
  public selectedHorario: string;
  public invalidDates: Array<Date>;

  public user: IUsuario = {
    id: '101',
    nome: 'Fulano de tal',
    email: 'fulano@teste.com.br',
    senha: null,
    tpAdmin: false,
    pedidos: []
  }


  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.pedidos = this.userService.getListPedidos(this.user);
    this.pedidos === undefined ? this.vazio = true : this.vazio = false;

    this.listDoutores = this.userService.getDoutores();
    this.listDoutores.forEach(d => {
      this.nomeDoutores.push(d.nome);
    });

    console.log("Nome: ",this.nomeDoutores);

    const today = new Date();
    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  sendPedido(){
    //implemented
  }

  sair(){
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/']);
      });
  }

}
