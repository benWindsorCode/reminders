import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReminderElementComponent } from './reminder-element/reminder-element.component';
import { ReminderAddComponent } from './reminder-add/reminder-add.component';
import { MatListModule,
  MatCardModule
} from "@angular/material";
import { ReminderContainerComponent } from './reminder-container/reminder-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderElementComponent,
    ReminderAddComponent,
    ReminderContainerComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
