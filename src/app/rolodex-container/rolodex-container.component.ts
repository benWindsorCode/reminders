import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from "../elasticsearch.service";
import { RolodexElementSource } from "../models/rolodexElement.interface";

@Component({
  selector: 'app-rolodex-container',
  templateUrl: './rolodex-container.component.html',
  styleUrls: ['./rolodex-container.component.css']
})
export class RolodexContainerComponent implements OnInit {

  rolodexSources: RolodexElementSource[];

  constructor(private es: ElasticsearchService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.es.getAllRolodexByAuthor("rolodex", "_doc", {firstName: "Ben", lastName: "Windsor"})
      .then(response => {
        this.rolodexSources = response.hits.hits;
        console.log(response);
      }).then(() => {
      console.log("done");
    })
  }

}
