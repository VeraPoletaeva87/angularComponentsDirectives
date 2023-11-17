import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // @Output() search = new EventEmitter<boolean>();
  @Output() searchText = new EventEmitter<string>();

  constructor() // private sharedService: SharedService
  {}

  searchChangeHandler(e: Event) {
    // this.sharedService.searchTextChangeHandler((e.target as HTMLInputElement).value);
    // this.sharedService.updateComponent();
    this.searchText.emit((e.target as HTMLInputElement).value);
  }
}
