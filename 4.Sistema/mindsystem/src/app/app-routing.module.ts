import { UserClientComponent } from './user-client/user-client.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuardService } from 'services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
        component: AppComponent,
        children: [
            {
                path: 'home',
                component: LoginComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'user-admin',
                component: UserAdminComponent,
                canActivate: [ AuthGuardService ]
            },
            {
                path: 'user-client',
                component: UserClientComponent,
                canActivate: [ AuthGuardService ]
            },
            {
              path: 'cadastro',
              component: CadastroComponent
          },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
