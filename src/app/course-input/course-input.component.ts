import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, fromEvent, map, of } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './course-input.component.html',
  styleUrl: './course-input.component.css'
})
export class CourseInputComponent implements OnInit {

  constructor(private coursesService: CoursesService) {
  }

  users = [{ id: '1', name: 'John' }, { id: '2', name: 'Maria' }]
  data$ = new Observable<any>();

  // courses$ = of()
  courses$: Observable<Course[]> = new Observable();
  // RxJs BehaviourSubject example
  user$ = new BehaviorSubject<{ id:string, name: string } | null>(null)
  users$ = of(this.users)
  // RxJs FromEvent example
  documentclick$ = fromEvent(document, 'click');
  
  ngOnInit() {
    this.documentclick$.subscribe(e => console.log(e))
    this.courses$ = this.coursesService.loadCourses();
    
    setTimeout(() => {
      this.user$.next({ id: '1', name: 'John' });
    }, 3000)

    setTimeout(() => {
      this.user$.next({ id: '2', name: 'Maria' });
      this.data$ = combineLatest([
        this.courses$,
        this.coursesnames$,
        this.users$
      ]).pipe(
        map(([courses, coursesnames, user]) => ({courses, coursesnames, user}))
      )
    }, 6000)
  }
  
  // RxJs map example
  coursesnames$ = this.courses$.pipe(
    map(courses => courses.map(course => 
        course.description)));
  // RxJs filter example
  coursesbegginner$ = this.courses$.pipe(
    map(courses => courses.filter(course => course.category == 'BEGINNER')));

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
