import {Component, Input, OnInit} from '@angular/core';
import { ReminderElement } from "../models/reminderElement.interface";

@Component({
  selector: 'app-reminder-element',
  templateUrl: './reminder-element.component.html',
  styleUrls: ['./reminder-element.component.css']
})
export class ReminderElementComponent implements OnInit {

  @Input() reminderElement: ReminderElement;

  constructor() { }

  ngOnInit() {
  }

  reminderText = "This is some reminder text"

}
