import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUsuario } from 'models/usuario.model';
import * as firebase from 'firebase';
import { ILogin } from 'models/login.model';
import { Router } from '@angular/router';
import { filterEventStoreDefs } from '@fullcalendar/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // tslint:disable-next-line: variable-name
  public token_id: string;
  public tpUser: boolean;


  registerUser(user: IUsuario): Promise<any>{
    return firebase.default.auth().createUserWithEmailAndPassword(user.email, user.senha)
      .then((resposta: any) => {
        delete user.senha;
        firebase.default.database().ref(`client/${btoa(user.email)}`)
          .set(user);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  autenticarClient(login: ILogin): Promise<any>{
    return firebase.default.auth().signInWithEmailAndPassword(login.email, login.senha)
      .then(() => {
        firebase.default.auth().currentUser.getIdToken()
          .then((idToken) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken);
      })
      .catch((error: Error) => console.log(error));
    });
  }

  autenticarAdmin(login: ILogin): Promise<any>{
    return firebase.default.auth().signInWithEmailAndPassword(login.email, login.senha)
      .then(() => {
        firebase.default.auth().currentUser.getIdToken()
          .then((idToken) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken);
      })
      .catch((error: Error) => console.log(error));
    });
  }

  autenticado(): boolean{
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null){
      this.token_id = localStorage.getItem('idToken');
    }
    return this.token_id !== undefined ? true : false;
  }

  logout(): Promise<any>{
    return firebase.default.auth().signOut()
      .then(() => {
        localStorage.removeItem('idToken');
        this.token_id = undefined;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
