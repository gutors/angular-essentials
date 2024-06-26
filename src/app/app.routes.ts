import { Routes } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'course-card', component: CourseCardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'course-info/:id', component: CourseInfoComponent, pathMatch: 'full'},
    { path: '**', component: AppComponent, pathMatch: 'full'}
];
