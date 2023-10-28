import { Component } from '@angular/core';
import { PropertysForms } from './type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formData: PropertysForms = {
    strength: undefined,
    ability: undefined,
    armor: undefined,
    fire_power: undefined,
    class: undefined,
    race: undefined,
    name: undefined,
    experience_points: undefined,
  }

  constructor() {
  }

  async onSubmit() {
    await fetch(`http://localhost:3000/chips`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.formData),
    });
    this.clearFields();
  }

  clearFields() {
    this.formData.ability = undefined;
    this.formData.armor = undefined;
    this.formData.fire_power = undefined;
    this.formData.name = undefined;
    this.formData.class = undefined;
    this.formData.race = undefined;
    this.formData.experience_points = undefined;
    this.formData.strength = undefined;
  }

}
