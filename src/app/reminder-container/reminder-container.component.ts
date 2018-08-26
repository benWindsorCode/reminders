import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ReminderElementSource} from "../models/reminderElement.interface";
import {ElasticsearchService} from "../elasticsearch.service";

@Component({
  selector: 'app-reminder-container',
  templateUrl: './reminder-container.component.html',
  styleUrls: ['./reminder-container.component.css']
})
export class ReminderContainerComponent implements OnInit {

  reminderSources: ReminderElementSource[];

  constructor(private es: ElasticsearchService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.es.getAllDocuments("reminder", "_doc")
      .then(response => {
        this.reminderSources = response.hits.hits;
        console.log(response);
      }).then(() => {
      console.log("done");
    })
  }

}
