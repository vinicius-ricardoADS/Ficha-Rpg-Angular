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
    strength: undefined,
    ability: undefined,
    armor: undefined,
    fire_power: undefined,
    class: undefined,
    race: undefined,
    name: undefined,
    experience_points: undefined,
  }

  constructor(private http: HttpClient) {}

  async onSubmit() {
    this.http.post<Chips>('http://localhost:3000/chips', this.chip).subscribe(newChip => {
      console.log('New chip added:', newChip);
    });
    this.clearFields();
    window.location.href = '/';
  }

  clearFields() {
    this.chip.ability = undefined;
    this.chip.armor = undefined;
    this.chip.fire_power = undefined;
    this.chip.name = undefined;
    this.chip.class = undefined;
    this.chip.race = undefined;
    this.chip.experience_points = undefined;
    this.chip.strength = undefined;
  }

}
