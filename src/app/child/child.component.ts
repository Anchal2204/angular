import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { DesignserviceService } from '../designservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() item=0
@Output() updateDataEvent= new EventEmitter<string>();


}
