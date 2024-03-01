import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{UserService}from './service/user.service';
import { AddUserComponent } from './add-user/add-user.component'
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import{LoggerService}from  './service/logger.service'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule
  ],
  providers: [UserService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
