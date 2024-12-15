import { Component } from '@angular/core';
import { CookingBook } from '../../../types/cooking-book.type';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'mm-cooking-books',
  templateUrl: './cooking-books.component.html',
  styleUrl: './cooking-books.component.scss'
})
export class CookingBooksComponent
{
  cookingBooks: Array<CookingBook>;

  constructor(private httpClient: HttpClient)
  {
    this.cookingBooks = [];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<CookingBook>>("/assets/data/CookingBooks.json")
                   .subscribe(products => this.cookingBooks = products);
  }
}