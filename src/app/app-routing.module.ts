import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Bloques/inicio/inicio.component';
import { LoginComponent } from './Bloques/login/login.component';
import { OradoresComponent } from './Bloques/oradores/oradores.component';
import { RegistroComponent } from './Bloques/registro/registro.component';
import { BarraInicioComponent } from './Bloques/barra-inicio/barra-inicio.component';
import { CalendarioComponent } from './Bloques/calendario/calendario.component';
import { AdminComponent } from './Bloques/admin/admin.component';
import { AdminOradoresComponent } from './Bloques/admin-oradores/admin-oradores.component';
import { AdminCharlasComponent } from './Bloques/admin-charlas/admin-charlas.component';
import { AdminParticipantesComponent } from './Bloques/admin-participantes/admin-participantes.component';
import { NuevoOradorComponent } from './Bloques/nuevo-orador/nuevo-orador.component';
import { NuevaCharlaComponent } from './Bloques/nueva-charla/nueva-charla.component';
import { NuevoParticipanteComponent } from './Bloques/nuevo-participante/nuevo-participante.component';
import { EditarOradorComponent } from './Bloques/editar-orador/editar-orador.component';
import { EditarCharlasComponent } from './Bloques/editar-charlas/editar-charlas.component';
import { EditarUsuarioComponent } from './Bloques/editar-usuario/editar-usuario.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';



const rutas: Routes = [
  { path: 'barra-inicio', component: BarraInicioComponent },
  { path: 'inicio', component: InicioComponent, },
  { path: '', component: LoginComponent, },
  { path: 'oradores', component: OradoresComponent, },
  { path: 'registro', component: RegistroComponent, },
  { path: 'calendario', component: CalendarioComponent },
  {
    
    path: 'privado', component: AdminComponent, canActivate: [AutenticacionGuard],
    children: [
      
      { path: 'admin', component: AdminComponent },
      { path: 'admin-charlas', component: AdminCharlasComponent },
      { path: 'admin-oradores', component: AdminOradoresComponent },
      { path: 'admin-participantes', component: AdminParticipantesComponent },
      { path: 'admin-oradores/nuevo-orador', component: NuevoOradorComponent },
      { path: 'admin-oradores/editar-orador/:id', component: EditarOradorComponent },
      { path: 'admin-charlas/nueva-charla', component: NuevaCharlaComponent },
      { path: 'admin-charlas/editar-charlas/:id', component: EditarCharlasComponent },
      { path: 'admin-participantes/nuevo-participante', component: NuevoParticipanteComponent },
      { path: 'admin-participantes/editar-usuario/:id', component: EditarUsuarioComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
