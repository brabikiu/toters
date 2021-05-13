import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: string = '',
    public email: string = '',
    public password: string = '',
    public country: string = 'Select country'
  ) {}
}

@Component({
  selector: 'app-crudstudents',
  templateUrl: './crudstudents.component.html',
  styleUrls: ['./crudstudents.component.css']
})
export class CrudstudentsComponent implements OnInit {

  toti: any = {};
  students: string = "students";

  constructor(private studentsService: ApiService) {}

 // It maintains list of Registrations
 registrations: Registration[] = [];
 // It maintains registration Model
 regModel: Registration;
 // It maintains registration form display status. By default it will be false.
 showNew: Boolean = false;
 // It will be either 'Save' or 'Update' based on operation.
 submitType: string = 'Save';
 // It maintains table row index based on selection.
 selectedRow: number;
 // It maintains Array of countries.
 countries: string[] = ['US', 'UK', 'India', 'UAE'];

  ngOnInit(): void {
    this.getStudents();
  }

  public async getStudents(){
    const promise = await this.studentsService.getStudents().toPromise();     
    this.toti = promise;
  }

  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      this.registrations[this.selectedRow].country = this.regModel.country;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  }

}


