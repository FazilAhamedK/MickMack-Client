import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseType } from '../../../types/course-type.enum';
import { Course } from '../../../types/course.type';

@Component
({
  selector: 'mm-decorating-class',
  templateUrl: './decorating-class.component.html',
  styleUrl: './decorating-class.component.scss'
})
export class DecoratingClassComponent implements OnInit
{
  public readonly CourseType = CourseType;
  decoratingClasses: Array<Course>;

  constructor(private httpClient: HttpClient)
  {
    this.decoratingClasses = [];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<Course>>("/assets/data/Courses.json")
                   .subscribe(courses => this.decoratingClasses = courses);
  }
}