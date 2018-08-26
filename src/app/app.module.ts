import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReminderElementComponent } from './reminder-element/reminder-element.component';
import { ReminderAddComponent } from './reminder-add/reminder-add.component';
import {
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from "@angular/material";
import { ReminderContainerComponent } from './reminder-container/reminder-container.component';
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
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
