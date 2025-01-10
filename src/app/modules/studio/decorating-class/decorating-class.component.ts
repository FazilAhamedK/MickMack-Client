import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { CourseType } from '../../../types/course-type.enum';
import { Course } from '../../../types/course.interface';

@Component
({
  selector: 'mm-decorating-class',
  templateUrl: './decorating-class.component.html',
  styleUrl: './decorating-class.component.scss'
})
export class DecoratingClassComponent implements OnInit
{
  decoratingClasses: Array<Course>;
  currentIndex: number = 0;
  marginFactor: number = 1;
  elementWidth: number = 100;

  constructor(private httpClient: HttpClient)
  {
    this.decoratingClasses = [];
    this.calculateSlideFactors();
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<Course>>("/assets/data/Courses.json")
                   .subscribe(courses => this.decoratingClasses = courses.filter(course => course.type === CourseType.CLASS_CAKE_DECORATING));
  }

  @HostListener("window:resize")
  calculateSlideFactors(): void
  {
    this.marginFactor = window.innerWidth >= 768 ? 2 : 1;
    this.elementWidth = window.innerWidth >= 768 ? 30 : window.innerWidth >= 640 ? 50 : 75;
  }

  placeEnquiry(course: Course): void
  {
    let message: string = `Hey Mick Mack,\nI would like to enquire about the course '${course.name}'.`;
    message = encodeURIComponent(message);
    let url: string = `https://wa.me/917619491379?text=${message}`;
    window.open(url, "newWindow");
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
    return this.currentIndex < (this.decoratingClasses.length - this.marginFactor);
  }
}