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
          imageUrl: "https://th.bing.com/th/id/R.99d6f58224d1e0c200cca153bd8d9634?rik=EGA0FjfhXYY2fg&pid=ImgRaw&r=0",
          location: "Abidjan"
        },
  
        {
          id: 2,
          title: "Tamegnon",
          description: "Benzema you're the GOAT",
          createdDate: new Date(),
          snaps: 9,
          imageUrl: "https://th.bing.com/th?id=OIF.IueyCyItQiMVKuo1RO6%2fsQ&pid=ImgDet&rs=1",
          location: "Paris"
        },
  
        {
          id: 3,
          title: "Leandre",
          description: "Mon Pétit frère tjr frais",
          createdDate: new Date(),
          snaps: 0,
          imageUrl: "https://th.bing.com/th/id/R.b125b5c7b7e2c7e8a7841b4696e5412b?rik=R0Oq8lW0ncSZow&pid=ImgRaw&r=0",
          location: "Abidjan"
        },
  
        {
          id: 4,
          title: "Ninho Officiel",
          description: "Certifié Diamond",
          createdDate: new Date(),
          snaps: 300000,
          imageUrl: "https://th.bing.com/th/id/R.e0fb901172a93a947bdaa52eed55047c?rik=dlRQvmEGPoRsng&pid=ImgRaw&r=0"
        },
  
        {
          id: 5,
          title: "Leandre",
          description: "Mon Pétit frère tjr frais",
          createdDate: new Date(),
          snaps: 20,
          imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
          location: "Abidjan"
        },
  
        {
          id: 6,
          title: "Tamegnon",
          description: "Benzema you're the GOAT",
          createdDate: new Date(),
          snaps: 3,
          imageUrl: "https://www.coinnewsspan.com/wp-content/uploads/2021/01/Forex-Trading.png",
          location: "Paris"
        },
  
        {
          id:7,
          title: "Leandre",
          description: "Mon Pétit frère tjr frais",
          createdDate: new Date(),
          snaps: 3,
          imageUrl: "https://th.bing.com/th/id/R.5dff3c3e5c4a82e6d225d208e927cc46?rik=NbooVFORWCl%2bsw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-We5dok4q-_M%2fUWvJ_JP3ZsI%2fAAAAAAAAAFQ%2foxU6_TQb5G0%2fs1600%2fone-piece-16.jpg&ehk=3BBFJ03svO2E76d831kdF92uVSP1fr5PFlfRZug70po%3d&risl=&pid=ImgRaw&r=0",
          location: "Abidjan"
        },
        
        {
          id: 8,
          title: "Ninho Officiel",
          description: "Certifié Diamond",
          createdDate: new Date(),
          snaps: 300000,
          imageUrl: "https://th.bing.com/th/id/R.fdc7a41fa59622eb4b053ef8412b59b5?rik=bo3taLdvNqvLhg&pid=ImgRaw&r=0"
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