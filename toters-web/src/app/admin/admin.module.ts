import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudstudentsComponent } from './crudstudents/crudstudents.component';
import { CrudteachersComponent } from './crudteachers/crudteachers.component';
import { AdminComponent } from './admin/admin.component';
import { TemplateModule } from '../shared/template/template.module';
import { FormsModule } from '@angular/forms';
import { CrudcursosComponent } from './crudcursos/crudcursos.component';
import { SecurityModule } from '../security/security.module';

@NgModule({
  declarations: [   
    CrudstudentsComponent,
    CrudteachersComponent,
    CrudcursosComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    FormsModule,
    SecurityModule
  ]
})
export class AdminModule { }
