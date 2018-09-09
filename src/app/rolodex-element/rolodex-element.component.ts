import {Component, Input, OnInit} from '@angular/core';
import { RolodexElement } from "../models/rolodexElement.interface";

@Component({
  selector: 'app-rolodex-element',
  templateUrl: './rolodex-element.component.html',
  styleUrls: ['./rolodex-element.component.css']
})
export class RolodexElementComponent implements OnInit {

  @Input() rolodexElement: RolodexElement;

  constructor() { }

  ngOnInit() {
  }

}
