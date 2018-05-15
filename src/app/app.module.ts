import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

//prime
import { 
  InputTextModule,
  InputMaskModule, 
  CalendarModule,
  AutoCompleteModule,
  DropdownModule
} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    AutoCompleteModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
