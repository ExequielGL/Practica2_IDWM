import { Component, Input } from '@angular/core';
import Profile from '../../models/profile.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  @Input() interests!: Profile['user']['interest'];
}
