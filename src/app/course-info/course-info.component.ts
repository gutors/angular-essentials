import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css'
})
export class CourseInfoComponent {
  courseId!: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id'];
    });
  }
  
}
