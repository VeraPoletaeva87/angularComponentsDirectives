import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  hasSearch: boolean = false;
  sort: string = '';
  direction: boolean = true;
  searchText: string = '';

  public subscription : Subscription;

  constructor(
    private sharedService: SharedService
  ) {
    this.subscription = this.sharedService.getValue().subscribe((value) => {
      this.hasSearch = value;
    })
  }

  ngOnInit() {
    this.hasSearch = this.sharedService.hasSearch;
    this.sort = this.sharedService.sort;
    this.direction = this.sharedService.direction;
    this.searchText = this.sharedService.searchText;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
