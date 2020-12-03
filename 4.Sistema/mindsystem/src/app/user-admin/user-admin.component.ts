import { Component, OnInit, ViewChild } from '@angular/core';
import { IConsulta } from 'models/consulta.model';
import { ConsultaService } from 'services/consulta.service';
import { FullCalendar } from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/angular';
import { AuthService } from 'services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  public date: Date;
  public options: any = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    header: {
        left: 'prev,next',
        center: 'Mind System',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true
  };
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  public consultas: IConsulta[] = [];

  @ViewChild('calendar', { static: true }) private calendar: FullCalendar;

  constructor(
    private colsultaService: ConsultaService,
    private authService: AuthService,
    private router: Router,
    ) { }


  ngOnInit() {
      this.consultas = this.colsultaService.getConsultas();
  }


  sair(){
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/']);
      });
  }



}
