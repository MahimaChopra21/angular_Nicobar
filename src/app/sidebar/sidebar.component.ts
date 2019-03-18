import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebar: any;
  data:Array<any>= ['accessories', 'tops', 'dresses'];
  new_data: Array<object>
  empty:Array<object> = [];

  constructor(private productDetails: DataService) { }

  ngOnInit() {
    this.sidebar = this.productDetails.getData();
  }

  display(param) {
    console.log(param);
    this.new_data=[];
    this.sidebar.map((ele, index) => {
      if (param === ele.type) {
        this.new_data.push(ele);
      }

    });

    console.log(this.new_data)
  }

}
