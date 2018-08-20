import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `

  <h1>Hello Angular</h1>
  <div class="background-image" style="background-image : url('http://germini.info/wp-content/uploads/2016/04/What-Can-JavaScript-Do.jpg')">
  </div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
