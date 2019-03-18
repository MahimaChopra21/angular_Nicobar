import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  item: any;

  constructor(private productDetails: DataService) { }

  ngOnInit() {
    this.item = this.productDetails.getData();
  }

}
