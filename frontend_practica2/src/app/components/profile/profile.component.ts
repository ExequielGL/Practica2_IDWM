import { Component, Input } from '@angular/core';
import Profile from '../../models/profile.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @Input() profile!: Profile;

}
