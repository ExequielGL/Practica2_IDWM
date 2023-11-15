import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import Profile from './models/profile.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_practica2';
  http = inject(HttpClient)
  profile: Profile = {} as Profile;

  changeTitle(){
    this.title = 'changed';
  }

  ngOnInit() {
    this.http.get<Profile>('http://127.0.0.1:8000/api/profile/1').subscribe((data) => {
      this.profile = data;
    });
  }
}
