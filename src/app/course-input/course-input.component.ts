import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-input.component.html',
  styleUrl: './course-input.component.css'
})
export class CourseInputComponent {
  firstName = ''
  lastName = ''
 
  profileForm = new FormGroup({
    firstName: new FormControl(this.firstName, [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl(this.lastName, [
      Validators.required,
      Validators.minLength(4)
    ]),
 })

  onSubmit() {
    console.log(this.profileForm.value);
  }

  get first() {
    return this.profileForm.get('firstName');
  }

  get last() {
    return this.profileForm.get('lastName');
  }

}
