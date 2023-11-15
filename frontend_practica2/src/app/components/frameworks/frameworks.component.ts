import { Component, Input} from '@angular/core';
import Profile from '../../models/profile.model';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.css'
})
export class FrameworksComponent {
  @Input() frameworks!: Profile['user']['framework'];
}
