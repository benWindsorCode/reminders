import { Component, OnInit } from '@angular/core';
import {ElasticsearchService} from "../elasticsearch.service";

@Component({
  selector: 'app-reminder-add',
  templateUrl: './reminder-add.component.html',
  styleUrls: ['./reminder-add.component.css']
})
export class ReminderAddComponent implements OnInit {

  constructor(private es: ElasticsearchService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.es.addToIndex({
      index: 'reminder',
      type: '_doc',
      body: {

      }

    })
  }

}
