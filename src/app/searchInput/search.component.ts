import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEmitter = new EventEmitter<boolean>();

  public searchClickHandler() {
    this.searchEmitter.emit(true); 
  }

}
