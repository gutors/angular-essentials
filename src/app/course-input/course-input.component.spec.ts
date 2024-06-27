import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInputComponent } from './course-input.component';

describe('CourseInputComponent', () => {
  let component: CourseInputComponent;
  let fixture: ComponentFixture<CourseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
