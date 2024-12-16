import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LibraryBook } from '../../../types/library-book.type';
import { Course } from '../../../types/course.type';
import { ProductFilterPipe } from '../../../pipes/product-filter.pipe';
import { CourseType } from '../../../types/course-type.enum';

@Component
({
  selector: 'mm-baking-class',
  templateUrl: './baking-class.component.html',
  styleUrl: './baking-class.component.scss'
})
export class BakingClassComponent implements OnInit
{
  public readonly CourseType = CourseType;
  bakingClasses: Array<Course>;

  constructor(private httpClient: HttpClient)
  {
    this.bakingClasses = [];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<Course>>("/assets/data/Courses.json")
                   .subscribe(courses => this.bakingClasses = courses);
  }
}