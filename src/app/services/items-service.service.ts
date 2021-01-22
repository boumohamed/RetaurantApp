import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { item } from '../models/item';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  items: Observable<item[]>;
  item: Observable<item>;
  itemsCollection: AngularFirestoreCollection<item>; 
  itemsDoc: AngularFirestoreDocument<item>; 

  constructor(private firestore: AngularFirestore) {
                this.itemsCollection = this.firestore.collection('items',
                ref => ref.orderBy('name', 'asc'));
               }

  getItems(): Observable<item[]>
  {
    this.items =  this.itemsCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as item;
          data.id = action.payload.doc.id;
          return data;
          
        })
      })
    );
  
    return this.items;
    
  }
  getItem(id: string) : Observable<item>
  {
    this.itemsDoc = this.firestore.doc<item>(`items/${id}`);
    
    this.item =  this.itemsDoc.snapshotChanges().pipe(map(action => {
    if( action.payload.exists == false)
    {
      return null;
    }
    else
    {
      const data  = action.payload.data();
      data.id = action.payload.id;
      
      return data;
    }   
    }));  
    return this.item; 
  }
newItem(item: item)
{
  this.itemsCollection.add(item);
}
updateItem(item: item)
{
  this.itemsDoc = this.firestore.doc(`items/${item.id}`);
  this.itemsDoc.update(item);

}
deleteItem(item: item)
{
  this.itemsDoc = this.firestore.doc(`items/${item.id}`);
  this.itemsDoc.delete();
}
/*
  addItem(event) 
  {



    var n = Date.now();
    
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    

    
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




    this.data.list('users')
    .push(this.myItem);
    console.log('ok');
  }
  */
}
