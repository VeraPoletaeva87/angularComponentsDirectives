import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEmitter = new EventEmitter<boolean>();
  @Output() searchTextEmitter = new EventEmitter<string>();

  public searchClickHandler() {
    this.searchEmitter.emit(true); 
  }

  searchChangeHandler(e: Event) {
    this.searchTextEmitter.emit((e.target as HTMLInputElement).value);
  }

}
