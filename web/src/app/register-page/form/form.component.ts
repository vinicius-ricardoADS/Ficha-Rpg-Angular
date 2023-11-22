import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chips, PropertysForms } from '../../utils/type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  chip: PropertysForms = {
    strength: '',
    ability: '',
    armor: '',
    fire_power: '',
    classes: '',
    race: '',
    name: '',
    experience_points: '',
  }

  constructor(private http: HttpClient) {}

  async onSubmit() {
    this.http.post<Chips>('http://localhost:3333/chip', this.chip).subscribe(newChip => {
      console.log('Nova ficha adicionada', newChip);
    })
    window.location.href = '/';
  }

}
