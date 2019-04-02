import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {CarAddComponent} from './car-add/car-add.component';
import {CarComponent} from './car/car.component';
import {ConsoleService} from './console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarAddComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
