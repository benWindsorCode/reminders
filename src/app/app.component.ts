import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElasticsearchService } from "./elasticsearch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reminders';

  constructor(private es: ElasticsearchService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }
}
