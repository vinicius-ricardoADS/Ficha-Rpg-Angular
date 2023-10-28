import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chips } from '../utils/type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  chips: Chips[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Chips[]>('http://localhost:3000/chips').subscribe(chips => {
      this.chips = chips;
    });
  }
}
