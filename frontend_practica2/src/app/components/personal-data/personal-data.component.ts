import { Component, Input } from '@angular/core';
import Profile from '../../models/profile.model';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {
  @Input() personalData!: Profile['user']['personal_data'];
}
