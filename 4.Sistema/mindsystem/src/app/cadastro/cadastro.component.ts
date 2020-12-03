import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { IUsuario, MUsuario } from 'models/usuario.model';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { AuthService } from 'services/auth.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public model: IUsuario = new MUsuario();
  public frmUser: FormGroup;

  constructor(
    private router: Router,
    private readonly fb: RxFormBuilder,
    protected readonly messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.model = new MUsuario();
    this.frmUser = this.fb.formGroup(this.model);
    this.frmUser.valueChanges
            .pipe(
                map((x) => {
                    Object.assign(this.model, x);
                    return x;
                })
            )
            .subscribe();
  }


  onRegister(){
    this.model.tpAdmin = false;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.model.senha = <string>Md5.hashStr(this.model.senha);
    this.authService.registerUser(this.model)
      .then(() => {
        this.showSuccess();
        setTimeout(() => {
          console.log('sucesso!');
          this.router.navigate(['/home']);
        }, 3000);
      })
      .catch(() => {
        this.showError();
      });
  }

  showSuccess() {
    this.messageService.add({severity: 'sucesso', summary: 'Sucesso', detail: 'Cadastro realizado com sucesso.'});
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Algo deu errado no cadastramento.'});
  }

}
