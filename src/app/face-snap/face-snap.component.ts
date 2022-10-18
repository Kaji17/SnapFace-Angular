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
