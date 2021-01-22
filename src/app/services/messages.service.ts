import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { message } from '../models/message';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Observable<message[]>;
  message: Observable<message>;
  messagesCollection: AngularFirestoreCollection<message>; 
  messagesDoc: AngularFirestoreDocument<message>;

  constructor(private firestore: AngularFirestore) 
  {
    this.messagesCollection = this.firestore.collection('messages');
    
  }
  getMessages(): Observable<message[]>
  {
    
    this.messages =  this.messagesCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as message;
          data.id = action.payload.doc.id;
          return data;
        })
      })
    );
    return this.messages;
    
  }
  getMessage(id: string) : Observable<message>
  {
    this.messagesDoc = this.firestore.doc<message>(`messages/${id}`);
    
    this.message =  this.messagesDoc.snapshotChanges().pipe(map(action => {
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
    return this.message; 
  }
newMessage(message: message)
{
  this.messagesCollection.add(message);
}
updateMessage(message: message)
{
  this.messagesDoc = this.firestore.doc(`messages/${message.id}`);
  this.messagesDoc.update(message);

}
deleteMessage(message: message)
{
  this.messagesDoc = this.firestore.doc(`messages/${message.id}`);
  this.messagesDoc.delete();
}
}
