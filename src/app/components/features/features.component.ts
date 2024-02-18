import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { angularData, angular4, angular5, angualr6, angular7, angular8, angular10, angular12, angular13, angular14, angular15, angular16, angular17} from '../angularVersionData';
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
  angular5Data = angular5;
  angular6Data = angualr6;
  angular7Data = angular7;
  angular8Data = angular8;
  angular10Data = angular10;
  angular12Data = angular12;
  angular13Data = angular13;
  angular14Data = angular14;
  angular15Data = angular15;
  angular16Data = angular16;
  angular17Data = angular17;
  constructor(){
    // console.log(this.angular2Data[0].ver2Component[1].module);
    console.log(this.angular17Data[0].version17[0].if);
  }
}
