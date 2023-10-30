import { Component, Input } from '@angular/core';
interface EmitterValue {
  value: string, 
  direction: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  @Input() value: string = '';

  hasSearch: boolean = false;
  sort: string = '';
  direction: boolean = true;
  searchText: string = '';

  handleEventFromSearch() {
    this.hasSearch = true;
  }

  handleEventFromSort(value: EmitterValue) {
    this.sort = value.value;
    this.direction = value.direction;
  }

  handleEventTextSearch(value: string) {
    this.searchText = value;
  }

}
