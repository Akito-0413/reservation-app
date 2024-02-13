import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, routes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
