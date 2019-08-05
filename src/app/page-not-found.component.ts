import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h5>
  page not found
  </h5>`,
  styles: ['color:red']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
