import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afFuth: AngularFireAuth) { }

  login(email: string, password: string)
  {
    return new Promise((resolve, rejet) => {
      this.afFuth.signInWithEmailAndPassword(email, password)
      .then(userData => {resolve(userData)

        },
      err => rejet(err))
    });
    
  }
  logout()
  {
    this.afFuth.signOut();
  }
  getauth()
  {
    return this.afFuth.authState.pipe( map( auth => auth))
  }
}
