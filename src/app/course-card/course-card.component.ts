import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course!: Course;

  @Input({
    required: true
  })
  index!: number

  @Output('courseTitleChanged')
  courseEmitter = new EventEmitter<Course>();

  onTitleUpdated(description: string) {
    console.log("card component - button clicked")
    this.courseEmitter.emit({
      ...this.course,
      description
    })
  }

  cardClasses() {
    if (this.course?.category == 'BEGINNER') {
      return 'beginner'
    }
    
    return {
      'beginner': this.course?.category == 'BEGINNER',
      'course-card': true
    }
  }
  
}
