import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ILogin, MLogin } from 'models/login.model';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { AuthService } from 'services/auth.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {

  public model: ILogin;
  public frmLogin: FormGroup;

  public inputValid: boolean;
  public value: string;
  public stateOptions: any[];


  constructor(
    private router: Router,
    private readonly fb: RxFormBuilder,
    private authService: AuthService,
    protected readonly messageService: MessageService,
  ) {
    this.stateOptions = [{label: 'Paciente', value: 'Paciente'}, {label: 'Admin', value: 'Admin'}];
  }

  ngOnInit(): void {
    this.model = new MLogin();
    this.frmLogin = this.fb.formGroup(this.model);
    this.frmLogin.valueChanges
            .pipe(
                map((x) => {
                    Object.assign(this.model, x);
                    return x;
                })
            )
            .subscribe();
  }

  onEnter(){
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.model.senha = <string>Md5.hashStr(this.model.senha);
    if (this.value === 'Paciente'){
      this.authService.autenticarClient(this.model)
        .then(() => {
          this.router.navigate(['/user-client']);
        })
        .catch(() => {
          this.showError();
        });
    }
    if (this.value === 'Admin'){
      this.authService.autenticarAdmin(this.model)
        .then(() => {
          console.log("passei!");
          this.router.navigate(['/user-admin']);
        })
        .catch(() => {
          this.showError();
        });
    }
  }

  goToRegister(){
    this.router.navigate(['/cadastro']);
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Login não encontrado.'});
  }

}
