import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: String;
  description!: String;
  createdDate!: Date;
  snaps!: Number;

  ngOnInit(){
    this.title = "Berenger";
    this.description = "best friend";
    this.createdDate = new Date;
    this.snaps = 6;
  }

}
// fonction permettant d'écrire la date dans un format JJ MM YY
function dateCustom(date: Date): String {
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

  
