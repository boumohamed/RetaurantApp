import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { commande } from '../models/commande';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commandes: Observable<commande[]>;
  commande: Observable<commande>;
  commandesCollection: AngularFirestoreCollection<commande>; 
  commandesDoc: AngularFirestoreDocument<commande>; 
  
  constructor( private firestore: AngularFirestore) 
  { 
    this.commandesCollection = this.firestore.collection('commandes',
    ref => ref.orderBy('name', 'asc'));
  }
  getCommandes(): Observable<commande[]>
  {
    this.commandes =  this.commandesCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as commande;
          data.id = action.payload.doc.id;
          return data;
          
        })
      })
    );
  
    return this.commandes;
    
  }
  getCommande(id: string) : Observable<commande>
  {
    this.commandesDoc = this.firestore.doc<commande>(`commandes/${id}`);
    
    this.commande =  this.commandesDoc.snapshotChanges().pipe(map(action => {
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
    return this.commande; 
  }
  newCommande(commande: commande)
{
  this.commandesCollection.add(commande);
}
updateCommande(commande: commande)
{
  this.commandesDoc = this.firestore.doc(`commandes/${commande.id}`);
  this.commandesDoc.update(commande);

}
deleteCommande(commande: commande)
{
  this.commandesDoc = this.firestore.doc(`commandes/${commande.id}`);
  this.commandesDoc.delete();
}
}
