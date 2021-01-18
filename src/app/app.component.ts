import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gsap-first-time';
  showP = true;

  toggleP(){
    this.showP = !this.showP
  }
}
