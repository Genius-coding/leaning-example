import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkAsteriskDirective } from './directive/mark-asterisk.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarkAsteriskDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
