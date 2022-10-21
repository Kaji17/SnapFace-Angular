import { Injectable } from "@angular/core";
import { FaceSnaps } from "../Model/FaceSnaps.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
    
    faceSnapTab: FaceSnaps[] = [
        {
          id: 1,
          title: "Leandre",
          description: "Mon Pétit frère tjr frais",
          createdDate: new Date(),
          snaps: 10,
          imageUrl: "assets/poolPicture.jpeg",
          location: "Abidjan"
        },
  
        {
          id: 2,
          title: "Tamegnon",
          description: "Benzema you're the GOAT",
          createdDate: new Date(),
          snaps: 9,
          imageUrl: "assets/benzemagoldenball.jpeg",
          location: "Paris"
        },
  
        {
          id: 3,
          title: "Miam",
          description: "poulet de chez odete",
          createdDate: new Date(),
          snaps: 0,
          imageUrl: "assets/food.jpeg",
          location: "Abidjan"
        },
  
        {
          id: 4,
          title: "Ninho Officiel",
          description: "Certifié Diamand",
          createdDate: new Date(),
          snaps: 300000,
          imageUrl: "assets/ninhoofficiel.jpeg"
        },
  
        {
          id: 5,
          title: "concert live",
          description: "love you bendo",
          createdDate: new Date(),
          snaps: 2034,
          imageUrl: "assets/bendo.jpg",
          location: "Abidjan"
        },
  
        {
          id: 6,
          title: "Tamegnon",
          description: "Benzema you're the GOAT",
          createdDate: new Date(),
          snaps: 3,
          imageUrl: "assets/ForexTrading.png",
          location: "Paris"
        },
  
        {
          id:7,
          title: "Leandre",
          description: "Mon Pétit frère tjr frais",
          createdDate: new Date(),
          snaps: 3,
          imageUrl: "assets/onepiece.jpeg",
          location: "Abidjan"
        },
        
        {
          id: 8,
          title: "Open classrom",
          description: "best formation",
          createdDate: new Date(),
          snaps: 300000,
          imageUrl: "assets/openclassroom.png"
        }
      ]
      getAllFaceSnap(): FaceSnaps[]{
        return this.faceSnapTab
      }

      getSnapId(facenapid: number): FaceSnaps{
        const facesnap = this.faceSnapTab.find(faceSnapTab =>  faceSnapTab.id === facenapid)
        if (!facesnap) {
          throw new Error('Facesnap undefinied');
        }else{
          return facesnap
        }
      }
      SnapById(facenapid: number, snapType: 'snaped' | 'unsnaped'): void{
        const facesnap = this.getSnapId(facenapid);
        snapType === 'snaped' ? facesnap.snaps++ : facesnap.snaps--

      }
}