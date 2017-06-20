import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BasicBrandHeaderComponent } from './basic-brand-header/basic-brand-header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BasicFooterComponent } from './basic-footer/basic-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicBrandHeaderComponent,
    LoginFormComponent,
    BasicFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
