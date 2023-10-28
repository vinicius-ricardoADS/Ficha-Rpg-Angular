import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './home-page/header/header.component';
import { FormComponent } from './register-page/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
