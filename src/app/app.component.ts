import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  
  loadedFeature ='recipe';
  onNavigate(feature :string){
    console.log(`${feature} in app `);
      this.loadedFeature = feature;
    }
}
