import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;

  private queryAllDocs = {
    'query' : {
      'match_all' : {}
    }
  };

  constructor() {
    if(!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: "Hi there!"
    });
  }

  getAllDocuments(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryAllDocs,
      filterPath: ['hits.hits._source']
    })
  }

}
