import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [CommonModule,RouterOutlet,RouterLink,RouterModule],
  imports: [MatExpansionModule, MatCardModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){}
  navToFeature(){
    this.router.navigate(['/features']);
  }
}
