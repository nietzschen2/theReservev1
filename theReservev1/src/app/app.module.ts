import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
