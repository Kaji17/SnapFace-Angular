import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnaps } from '../Model/FaceSnaps.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  FaceSnaps!: FaceSnaps;
  snaped!:string;
  btnTxt!: string;
  dbsnaped!: boolean;
  
  constructor(private facesnapservice: FaceSnapService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.snaped= 'unsnaped';
    this.dbsnaped= false;
    this.btnTxt= "Ohh snaps";
    const facesnapid= +this.route.snapshot.params['id'];
    this.FaceSnaps= this.facesnapservice.getSnapId(facesnapid);
    
  }

  //cette fonction permet d'ajouter ou retirer un snap un utilisateur à droit à un snap
  onClicksnaps(){
    if (this.snaped == 'unsnaped') {
      //this.FaceSnaps.snaps utilisation de l'attribut de la class FaceSnaps du Model
      this.facesnapservice.SnapById(this.FaceSnaps.id, 'snaped')
      this.snaped = 'snaped';
      this.btnTxt= "Ooops, unsnaps"
    }else{
      this.facesnapservice.SnapById(this.FaceSnaps.id, 'unsnaped')
      this.snaped ='unsnaped';
      this.btnTxt= "Ohh snaps";
      this.dbsnaped = true;
    }
  }

  //cette fonction permet lorsqu'on doublick sur l'image d'ajouter de snap 
  onAddsnaps(){
    if (this.snaped== 'unsnaped' || this.dbsnaped== false) {
      this.facesnapservice.SnapById(this.FaceSnaps.id, 'snaped')
      this.snaped = 'snaped';
      this.dbsnaped = true;
      this.btnTxt= "Ooops, unsnaps"
    }
  }




}
