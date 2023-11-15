import { Component, Input } from '@angular/core';
import Profile from '../../models/profile.model';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.css'
})
export class SocialNetworksComponent {
  @Input() socialNetworks!: Profile['user']['social_network'];
}
