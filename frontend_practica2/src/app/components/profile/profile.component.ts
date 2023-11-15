import { Component, Input, OnInit} from '@angular/core';
import Profile from '../../models/profile.model'
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  profile: Profile = {} as Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile(1).subscribe((data) => {
      this.profile = data;
    });
  }
}

