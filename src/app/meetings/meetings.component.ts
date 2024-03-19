import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
  meetingForm = this.formBuilder.group({
    description: '',
    company: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    room: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  validateDate() : boolean {
    let dateElement = document.getElementById('date');

    if (dateElement) {
      var entryDate = (<HTMLInputElement>dateElement).value;
      // Get Localtime Date
      var inputDate = new Date(entryDate +"T00:00");

      // Get Current Date
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (inputDate < currentDate) {
          alert('Please enter current or future date');
          dateElement.focus();
          return false;
      }
    }
    this.meetingForm.reset();
    return true;
  }

}
