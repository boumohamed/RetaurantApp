import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ItemsServiceService} from '../../services/items-service.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

import { map, finalize } from "rxjs/operators";
import { item } from '../../models/item';

import { from, Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
  
  
  
 

  constructor() {}
  ngOnInit() {
    
  }
 
  
    /*
    
    var n = Date.now();
    
    
    
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    
/*
    
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
      */
  }








/************ */


/***************************/
/*onFile1Selected(event1)
  {
    var n = Date.now();
    const file = event1.target.files[0];
    const filePath = `itemsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`itemsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.f1 = url;
              console.log(this.f1);
            }  
          });
        })
      )
      .subscribe();
    
  }
  */



