import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BtvnModule } from './btvn/btvn.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BtvnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
