import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface Props {
  value: boolean
};

@Injectable({ providedIn: 'root' })

export class SharedService {
@Input() value: string = '';

public valueObs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

setValue(value: boolean): void {
  this.valueObs.next(value);
}

getValue(): Observable<boolean> {
  return this.valueObs.asObservable();
}

updateComponent(): void {
  this.setValue(this.hasSearch);
}


hasSearch: boolean = false;
sort: string = '';
direction: boolean = true;
searchText: string = '';

handleEventFromSearch() {
    this.hasSearch = true;
  }

  // handleEventFromSort(value: EmitterValue) {
  //   this.sort = value.value;
  //   this.direction = value.direction;
  // }

  handleEventTextSearch(value: boolean) {
    this.hasSearch = value;
  }

}