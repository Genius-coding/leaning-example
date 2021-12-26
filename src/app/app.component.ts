import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';

  isActive: boolean = true;

  changeAsterisk() {
    this.isActive = !this.isActive;
  }
}
