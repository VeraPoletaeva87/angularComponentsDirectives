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

  searchChangeHandler(e: Event) {
    this.sharedService.searchTextChangeHandler((e.target as HTMLInputElement).value);
    this.sharedService.updateComponent();
  }

}
