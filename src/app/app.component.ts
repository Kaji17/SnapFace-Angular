import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from './Model/FaceSnaps.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnaps;

  ngOnInit(): void {
    this.mySnap= new FaceSnaps("Leandre", "Mon Pétit frère tjr frais", "31 Mars 2022", 4, "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg")
  }
}
