import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengAllModule } from 'modules/primeng-all.module';
import { LoginComponent } from './login/login.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserClientComponent } from './user-client/user-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CrudPedidoComponent } from './crud-pedido/crud-pedido.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthService } from 'services/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthGuardService } from 'services/auth-guard.service';
import { BackEndService } from 'services/back-end.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    PrimengAllModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UserAdminComponent,
    UserClientComponent,
    CalendarComponent,
    CrudPedidoComponent,
    CadastroComponent,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AuthService,
    AuthGuardService,
    BackEndService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
