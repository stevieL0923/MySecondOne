import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clientForm = this.formBuilder.group({
    company: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    name: '',
    email: '',
    phone: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  validate() : boolean {
                
    // Validate POC Entry
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    let nameElement = document.getElementById('name');

    if (nameElement) {
      var name = (<HTMLInputElement>nameElement).value;
      if(!regName.test(name)) {
          alert('Please enter POC full name (first & last name).');
          nameElement.focus();
      }
    }
    // Validate Email
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    let emailElement = document.getElementById('email');
    var email = (<HTMLInputElement>emailElement).value;
    if(reg.test(email)){
        this.clientForm.reset();
        return true;
    }
    alert('Please enter valid email.');
    return false;
  }
}
