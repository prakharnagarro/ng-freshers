import { Component } from '@angular/core';
import {AssignmentComponent} from '';
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  list : Todo[];
  constructor(private assgComp : AssignmentComponent) { }

  ngOnInit()
  {
     //var table = document.getElementById("tab")! as HTMLTableElement;
     //this.addData(table);
     this.list = this.assgComp.todos;
    //  console.log(this.list);
  }

}