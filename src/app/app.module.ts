import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HeighlightDirective } from './heighlight.directive';
import { ImgularPipe } from './imgular.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {HttpClientModule}from '@angular/common/http';

  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    MainContainerComponent,
    HeighlightDirective,
    ImgularPipe,
    ContactUsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
