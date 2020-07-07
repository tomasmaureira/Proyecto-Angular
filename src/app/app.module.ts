import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Bloques/inicio/inicio.component';
import { LoginComponent } from './Bloques/login/login.component';
import { RegistroComponent } from './Bloques/registro/registro.component';
import { OradoresComponent } from './Bloques/oradores/oradores.component';
import { AdminComponent } from './Bloques/admin/admin.component';
import { BarraInicioComponent } from './Bloques/barra-inicio/barra-inicio.component';
import { CalendarioComponent } from './Bloques/calendario/calendario.component';
import { AdminOradoresComponent } from './Bloques/admin-oradores/admin-oradores.component';
import { AdminCharlasComponent } from './Bloques/admin-charlas/admin-charlas.component';
import { AdminParticipantesComponent } from './Bloques/admin-participantes/admin-participantes.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { NuevoOradorComponent } from './Bloques/nuevo-orador/nuevo-orador.component';
import { NuevaCharlaComponent } from './Bloques/nueva-charla/nueva-charla.component';
import { EditarCharlasComponent } from './Bloques/editar-charlas/editar-charlas.component';
import { UsuariosComponent } from './Bloques/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarOradorComponent } from './Bloques/editar-orador/editar-orador.component';
import { NuevoParticipanteComponent } from './Bloques/nuevo-participante/nuevo-participante.component';
import { EditarUsuarioComponent } from './Bloques/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    OradoresComponent,
    AdminComponent,
    BarraInicioComponent,
    CalendarioComponent,
    AdminOradoresComponent,
    AdminCharlasComponent,
    AdminParticipantesComponent,
    NuevoOradorComponent,
    NuevaCharlaComponent,
    EditarCharlasComponent,
    UsuariosComponent,
    EditarOradorComponent,
    NuevoParticipanteComponent,
    EditarUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    RecurrenceEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DayService, WeekService, MonthService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
