import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { UserComponent } from './user.component';
import { ChatsComponent } from './chats/chats.component';
import { MatIconModule } from '@angular/material/icon';

const userRoutes: Routes = [
  {
      path: '',
      component: UserComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'chats', component: ChatsComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full'}
      ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    ChatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UserModule { }
