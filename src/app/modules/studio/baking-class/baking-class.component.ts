import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
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
  bakingClasses: Array<Course>;
  currentIndex: number = 0;
  marginFactor: number = 1;
  elementWidth: number = 100;

  constructor(private httpClient: HttpClient)
  {
    this.bakingClasses = [];
    this.calculateSlideFactors();
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<Course>>("/assets/data/Courses.json")
                   .subscribe(courses => this.bakingClasses = courses.filter(course => course.type === CourseType.CLASS_BAKING));
  }

  @HostListener("window:resize")
  calculateSlideFactors(): void
  {
    this.marginFactor = window.innerWidth >= 768 ? 2 : 1;
    this.elementWidth = window.innerWidth >= 768 ? 30 : window.innerWidth >= 640 ? 50 : 75;
  }

  previous(): void
  {
    if (this.hasPrevious())
    {
      this.currentIndex -= 1;
    }
  }

  next(): void
  {
    if (this.hasNext())
    {
      this.currentIndex += 1;
    }
  }

  hasPrevious(): boolean
  {
    return this.currentIndex > 0;
  }

  hasNext(): boolean
  {
    return this.currentIndex < (this.bakingClasses.length - this.marginFactor);
  }
}