import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chips, PropertysEditForm, PropertysForms } from '../../utils/type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<Chips>(`http://localhost:3333/chip/${id}`).subscribe(chipDb => {
        this.chip.strength = chipDb.strength.toString();
        this.chip.ability = chipDb.ability;
        this.chip.armor = chipDb.armor.toString();
        this.chip.fire_power = chipDb.fire_power.toString();
        this.chip.classes = chipDb.class;
        this.chip.race = chipDb.race;
        this.chip.name = chipDb.name;
        this.chip.experience_points = chipDb.experience_points.toString();
      })
    }
  }

  async onSubmit() {

    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');

      const body : PropertysEditForm = {
        strengthEntered: this.chip.strength,
        abilityEntered: this.chip.ability,
        armorEntered: this.chip.armor,
        fire_powerEntered: this.chip.fire_power,
        classEntered: this.chip.classes,
        raceEntered: this.chip.race,
        nameEntered: this.chip.name,
        experience_pointsEntered: this.chip.experience_points
      }

      this.http.put<Chips>(`http://localhost:3333/chip/${id}`, body).subscribe(newChip => {
        console.log('Ficha editada', newChip);
      })
    } else {
      this.http.post<Chips>('http://localhost:3333/chip', this.chip).subscribe(newChip => {
        console.log('Nova ficha adicionada', newChip);
      })
    }
    window.location.href = '/';
  }

}
