import { Routes } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CourseInputComponent } from './course-input/course-input.component';

export const routes: Routes = [
    { path: 'course-card', component: CourseCardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'course-input', component: CourseInputComponent, pathMatch: 'full'},
    { path: 'course-info/:id', component: CourseInfoComponent, pathMatch: 'full'},
    { path: '**', component: AppComponent, pathMatch: 'full'}
];
