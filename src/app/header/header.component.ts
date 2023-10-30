import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() searchEmitter = new EventEmitter<boolean>();

  handleEventFromSearch() {
    this.searchEmitter.emit(true);
  }
}
