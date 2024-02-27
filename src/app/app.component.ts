import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatIconModule, MatDividerModule, MatToolbarModule,MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angWeb-version2-17';

  constructor(private dialog: MatDialog){}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    const dialogRef = this.dialog.open(AboutMeComponent, {
      height: '500px',
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}
