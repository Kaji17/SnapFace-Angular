import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from './Model/FaceSnaps.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnapTab!: FaceSnaps[];

  ngOnInit(): void {
    this.faceSnapTab = [
      {
        title: "Leandre",
        description: "Mon Pétit frère tjr frais",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        location: "Abidjan"
      },

      {
        title: "Tamegnon",
        description: "Benzema you're the GOAT",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://th.bing.com/th?id=OIF.IueyCyItQiMVKuo1RO6%2fsQ&pid=ImgDet&rs=1",
        location: "Paris"
      },

      {
        title: "Leandre",
        description: "Mon Pétit frère tjr frais",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        location: "Abidjan"
      },

      {
        title: "Ninho Officiel",
        description: "Certifié Diamond",
        createdDate: new Date(),
        snaps: 300000,
        imageUrl: "https://th.bing.com/th/id/R.e0fb901172a93a947bdaa52eed55047c?rik=dlRQvmEGPoRsng&pid=ImgRaw&r=0"
      },

      {
        title: "Leandre",
        description: "Mon Pétit frère tjr frais",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        location: "Abidjan"
      },

      {
        title: "Tamegnon",
        description: "Benzema you're the GOAT",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://th.bing.com/th?id=OIF.IueyCyItQiMVKuo1RO6%2fsQ&pid=ImgDet&rs=1",
        location: "Paris"
      },

      {
        title: "Leandre",
        description: "Mon Pétit frère tjr frais",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        location: "Abidjan"
      },
      
      {
        title: "Ninho Officiel",
        description: "Certifié Diamond",
        createdDate: new Date(),
        snaps: 300000,
        imageUrl: "https://th.bing.com/th/id/R.e0fb901172a93a947bdaa52eed55047c?rik=dlRQvmEGPoRsng&pid=ImgRaw&r=0"
      }

    ]
  }
}


