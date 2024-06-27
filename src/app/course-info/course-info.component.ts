import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css'
})
export class CourseInfoComponent implements OnInit {
  courseId!: number;
  course!: Course
  categories = ["BEGINNER", "INTERMEDIATE", "ADVANCED"]
  submited = false
  
  constructor(private activatedRoute: ActivatedRoute,
    private courseService: CoursesService) {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id'];
    });
  }
  ngOnInit(): void {
    this.courseService.loadCourse(this.courseId).subscribe(course => {
      this.course = course;
    });
  }

  onSubmit() {
    this.submited = true
  }

}
