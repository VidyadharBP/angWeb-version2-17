import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { angularData, angular4} from '../angularVersionData';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  
  panelOpenState = false;

  angular2Data = angularData;
  angular4Data = angular4;
  constructor(){
    // console.log(this.angular2Data[0].ver2Component[1].module);
    console.log(this.angular4Data[0].version4[0].commands);
  }
}
