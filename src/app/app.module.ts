import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReminderElementComponent } from './reminder-element/reminder-element.component';
import { ReminderAddComponent } from './reminder-add/reminder-add.component';
import {
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCheckboxModule
} from "@angular/material";
import { ReminderContainerComponent } from './reminder-container/reminder-container.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderElementComponent,
    ReminderAddComponent,
    ReminderContainerComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
