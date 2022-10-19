import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnaps } from '../Model/FaceSnaps.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  //Decorateur permettant d'importer les attribut de la class FaceSnaps
  @Input() FaceSnaps!: FaceSnaps;
  snaped!:boolean;
  btnTxt!: string;
  dbsnaped!: boolean;
  

  ngOnInit() {
    this.snaped= false;
    this.dbsnaped= false;
    this.btnTxt= "Ohh snaps";
    
  }

  //cette fonction permet d'ajouter ou retirer un snap un utilisateur à droit à un snap
  onClicksnaps(){
    if (this.snaped== false) {
      //this.FaceSnaps.snaps utilisation de l'attribut de la class FaceSnaps du Model
      this.FaceSnaps.snaps = 1+this.FaceSnaps.snaps;
      this.snaped = true;
      this.btnTxt= "Ooops, unsnaps"
    }else{
      this.FaceSnaps.snaps = this.FaceSnaps.snaps-1;
      this.snaped =false;
      this.btnTxt= "Ohh snaps";
      this.dbsnaped = true;
    }
  }

  //cette fonction permet lorsqu'on doublick sur l'image d'ajouter de snap 
  onAddsnaps(){
    if (this.snaped== false || this.dbsnaped== false) {
      this.FaceSnaps.snaps = 1+this.FaceSnaps.snaps;
      this.snaped = true;
      this.dbsnaped = true;
      this.btnTxt= "Ooops, unsnaps"
    }
  }



}
// fonction permettant d'écrire la date dans un format JJ MM YY
function dateCustom(date: Date): string {
  var result: string = "not defined";
  var day: number = new Date().getDate();
  var monthNumb: number = new Date().getMonth();
  var month!: String;
  var years: number = new Date().getFullYear();
  switch (monthNumb) {
    case 0:
      month = "January"
      break;
    case 1:
      month = "February"
      break;
    case 2:
      month = "March"
      break;
    case 3:
      month = "April"
      break;
    case 4:
      month = "May"
      break;
    case 5:
      month = "June"
      break;
    case 6:
      month = "July"
      break;
    case 7:
      month = "August"
      break;
    case 8:
      month = "September"
      break;
    case 9:
      month = "October"
      break;
    case 10:
      month = "November"
      break;
    case 11:
      month = "December"
      break;
    default:
      break;
  }

  result = day + " " + month + " "+ years;
  return result;
}

  
