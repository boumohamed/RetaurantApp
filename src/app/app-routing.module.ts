import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServeComponent } from './components/serve/serve.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AddCommandeComponent } from './components/add-commande/add-commande.component';
import { CommandeDetailsComponent } from './components/commande-details/commande-details.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component'
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { MyReservationComponent } from './components/my-reservation/my-reservation.component';
import { UpdateMyReservationComponent } from './components/update-my-reservation/update-my-reservation.component';

const routes : Routes =
[
  {path : '', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'item/add', component: AddItemComponent},
  {path : 'item/:id', component: ItemDetailsComponent},
  {path : 'contactus', component: ContactUsComponent},
  {path : 'commandes', component: CommandesComponent},
  {path : 'myreservation', component: MyReservationComponent},
  {path : 'commandes/:id', component: CommandeDetailsComponent},
  {path : 'item/:id/edit/:id', component: ItemEditComponent},
  {path : 'messages', component: MessagesComponent},
  {path : 'messages/:id', component: MessageComponent},
  {path : 'myreservation/UpdateMyReservation/:id', component: UpdateMyReservationComponent},
  {path : 'item/:id/addcommande/:id', component: AddCommandeComponent},
  {path : '**', component: NotFoundComponent},
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports :
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
