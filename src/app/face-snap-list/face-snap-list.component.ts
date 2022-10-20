import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from '../Model/FaceSnaps.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnapTab!: FaceSnaps[];
  constructor(private facesnaplist: FaceSnapService){}

  ngOnInit(): void {
    this.faceSnapTab = this.facesnaplist.getAllFaceSnap();
   
  }
}
