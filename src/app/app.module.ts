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
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";
import { ReminderContainerComponent } from './reminder-container/reminder-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from "@angular/forms";
import { RolodexContainerComponent } from './rolodex-container/rolodex-container.component';
import {RouterModule, Routes} from "@angular/router";
import { RolodexElementComponent } from './rolodex-element/rolodex-element.component';

const appRoutes: Routes = [
  { path: 'rolodex', component: RolodexContainerComponent },
  { path: 'reminders', component: ReminderContainerComponent },
  { path: '', redirectTo: '/reminders', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    ReminderElementComponent,
    ReminderAddComponent,
    ReminderContainerComponent,
    TopBarComponent,
    RolodexContainerComponent,
    RolodexElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
