import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-input.component.html',
  styleUrl: './course-input.component.css'
})
export class CourseInputComponent {
 
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
 })

  onSubmit() {
    console.log(this.profileForm.value);
  }
  
}
