import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { CrudcursosComponent } from './admin/crudcursos/crudcursos.component';
import { CrudstudentsComponent } from './admin/crudstudents/crudstudents.component';
import { CrudteachersComponent } from './admin/crudteachers/crudteachers.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component:RegisterComponent },
  { path: 'admin', component:AdminComponent},
  { path: 'aluno', component:CrudstudentsComponent},
  { path: 'professor', component:CrudteachersComponent},
  { path: 'cursos', component:CrudcursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
