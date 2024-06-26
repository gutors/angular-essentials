import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(CourseCardComponent)
  courseCard = new CourseCardComponent()

  constructor(private coursesService: CoursesService) {}

  ngAfterViewInit(): void {
    console.log(this.courseCard)
  }

  courses$: Observable<Course[]> = new Observable<Course[]>()

  ngOnInit(): void {
    console.log(this.coursesService)

    this.courses$ = this.coursesService.loadCourses()
  }

  courses: Course[] = []

  startDate = new Date(2000, 0, 1)
  price: number = 9.99
  rate = 0.67

  coreCourse = COURSES[0]
  rxjsCourse = COURSES[1]
  ngrxCourse = COURSES[2]

  data = { 
    title: 'Curso Iniciante com Angular 18'
  }

  onClickInputTitle() {
    alert('Hello World!')
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  buttonClick(newTitle: string) {
    this.data.title = newTitle
  }

  onCourseTitleChanged(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => {
      console.log("Course saved")
    })
  }

  onCourseClicked(course: Course) {
    console.log("App component - click event bubbled", course)
  }

  trackCourse(index: number, course: Course) {
    return course.id
  }

}
