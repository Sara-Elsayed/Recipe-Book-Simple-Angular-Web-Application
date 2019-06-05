import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.css'
]
})
export class LowerHeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>() ;
  
  onSelect(feature:string){
    console.log(`${feature} in lower header`);
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
