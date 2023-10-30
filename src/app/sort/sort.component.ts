import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Output() sortEmitter = new EventEmitter<{value: string, direction: boolean}>();

  dateDirection: boolean = true;
  viewDirection: boolean = true;

  sortDateHandler(value: string, direction: boolean) {
    this.dateDirection = !this.dateDirection;
    this.sortEmitter.emit({value, direction: this.dateDirection});
  }

  sortViewHandler(value: string, direction: boolean) {
    this.viewDirection = !this.viewDirection;
    this.sortEmitter.emit({value, direction: this.viewDirection});
  }

}
