import { Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() userData : Array<any> = [];
  @Input() showUserInfo;

  constructor() { }

  

}
