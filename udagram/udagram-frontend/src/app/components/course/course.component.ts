

import { Component } from '@angular/core';
import { Courses, EnglishCourses } from './courses.data';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})

export class CourseComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = EnglishCourses;
}
