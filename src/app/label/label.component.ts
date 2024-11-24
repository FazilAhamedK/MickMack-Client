import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Label } from '../types/label.type';

@Component
({
  selector: 'mm-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent implements OnInit
{
  labels: Array<Label> = [];

  constructor(private httpClient: HttpClient)
  { }

  ngOnInit(): void
  {
    this.httpClient.get<Array<Label>>("/assets/data/Labels.json")
                   .subscribe(labels =>
                   {
                     this.labels = labels;
                   });  
  }
}