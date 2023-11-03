import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEmitter = new EventEmitter<boolean>();
  @Output() searchTextEmitter = new EventEmitter<string>();

  constructor(
    private sharedService: SharedService
  ) {}

  public searchClickHandler() {
    this.sharedService.handleEventTextSearch(true);
    this.sharedService.updateComponent();
  }

  searchChangeHandler(e: Event) {
    this.searchTextEmitter.emit((e.target as HTMLInputElement).value);
  }

}
