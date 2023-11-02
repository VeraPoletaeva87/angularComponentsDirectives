import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  hasSearch: boolean = false;
  sort: string = '';
  direction: boolean = true;
  searchText: string = '';

}
