import { Component, OnInit } from '@angular/core';
import { LibraryBook } from '../../../types/library-book.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mm-kitchen-library',
  templateUrl: './kitchen-library.component.html',
  styleUrl: './kitchen-library.component.scss'
})
export class KitchenLibraryComponent implements OnInit
{
  libraryBooks: Array<LibraryBook>;

  constructor(private httpClient: HttpClient)
  {
    this.libraryBooks = [];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<LibraryBook>>("/assets/data/LibraryBooks.json")
                   .subscribe(books => this.libraryBooks = books);
  }
}