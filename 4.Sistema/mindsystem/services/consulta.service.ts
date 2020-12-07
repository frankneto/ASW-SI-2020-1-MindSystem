import { MConsulta } from './../models/consulta.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IConsulta } from 'models/consulta.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  public consultaListSubj: BehaviorSubject<IConsulta[]> = new BehaviorSubject<IConsulta[]>([]);
  public consultaList$ = this.consultaListSubj.asObservable();

  public consultaList: any = [
    {
      id: '1',
      data: '2020-11-27T16:00:00',
      doutor: 'Marcelo',
      plano: 'Ipasgo'
    },
    {
      id: '2',
      data: '2020-11-30T08:00:00',
      doutor: 'João',
      plano: 'Particular'
    },
    {
      id: '3',
      data: '2020-11-27T12:00:00',
      doutor: 'Antonio',
      plano: 'Unimed'
    },
  ];

  constructor(
    private http: HttpClient) {}

  getConsultas() {
      return this.consultaList;
  }



}
