import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import {AlbumService} from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private albumService: AlbumService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });

    this.albumService.getAlbumById(this.albumId).subscribe(dataLastEmittedFromObserver => {
      this.albumToDisplay = dataLastEmittedFromObserver;
      console.log(this.albumToDisplay);
    })


    // this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    // console.log(this.albumToDisplay);

  }
}
