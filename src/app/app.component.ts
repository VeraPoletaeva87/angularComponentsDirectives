import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  hasSearch: boolean = false;

  handleEventFromSearch() {
    this.hasSearch = true;
  }
}
