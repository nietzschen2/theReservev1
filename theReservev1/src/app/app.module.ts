import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BasicBrandHeaderComponent } from './basic-brand-header/basic-brand-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicBrandHeaderComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
