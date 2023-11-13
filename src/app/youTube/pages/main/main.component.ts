import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public subscription : Subscription;

  sort: string = '';
  direction: boolean = true;
  searchText: string = '';


  constructor(
    private sharedService: SharedService
  ) {
    this.subscription = this.sharedService.getValue().subscribe((value) => {
      this.searchText = value;
    })
  }

  ngOnInit() {
    this.sort = this.sharedService.sort;
    this.direction = this.sharedService.direction;
    this.searchText = this.sharedService.searchText;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
