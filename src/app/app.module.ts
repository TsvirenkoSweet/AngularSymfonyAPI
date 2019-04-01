import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {BgDirective} from './directives/bg.directive';
import {PowPipe} from './pow.pipe';
import {CarFilterPipe} from './car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BgDirective,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
