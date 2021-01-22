import { Component, OnInit } from '@angular/core';

import { ItemsServiceService} from '../../services/items-service.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FlashMessagesService } from 'angular2-flash-messages';

import { map, finalize } from "rxjs/operators";
import { item } from '../../models/item';

import { from, Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import { Router} from '@angular/router';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: item = 
  {
    id: '',
    name: '',
    image1: '',
    image2: '',
    description: '',
    price: 0,
    chef: ''
  };
  itemDoc: AngularFirestoreDocument<item>; 
  items: item[]; 
  
  selectedFile: File = null;
  f1 :string;
  f2 :string;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage, 
              private data :ItemsServiceService,
              private flash : FlashMessagesService,
              private router: Router) {}
  ngOnInit() {
    this.data.getItems().subscribe(items => {
      this.items = items;     
    });
    
  }
  onSubmit({value, valid}: {value: item, valid: boolean})
  {
    if(valid)
    {
      value.image1 = this.f1;
      value.image2 = this.f2;
      this.data.newItem(value);
      this.flash.show('Item Added ',{
        cssClass: 'alert-success', timeout:3000
      });
      this.router.navigate(['/']);
    }
    else
    {
      this.flash.show('Please fill out the form correctly',{
        cssClass: 'alert-danger', timeout:3000
      });
    }
    
    
  }
  onFile1Selected(event1)
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
            }  
          });
        })
      )
      .subscribe();
    
  }
  onFile2Selected(event2)
  {
    var n = Date.now();
    const file = event2.target.files[0];
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
              this.f2 = url;
            }  
          });
        })
      )
      .subscribe();
    
}
}
