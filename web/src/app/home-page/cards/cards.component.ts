import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chips } from 'src/app/utils/type';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  chips: Chips[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Chips[]>('http://localhost:3333/chip').subscribe(chips => {
      this.chips = chips;
    });
  }

  deletarFicha(){
    this.http.delete<Chips>('http://localhost:3333/chip');
  }
}