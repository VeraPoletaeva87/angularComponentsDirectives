import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface Props {
  value: boolean
};

@Injectable({ providedIn: 'root' })

export class SharedService {
@Input() value: string = '';

public valueObs: BehaviorSubject<string> = new BehaviorSubject<string>('');

sort: string = '';
direction: boolean = true;
searchText: string = '';


setValue(value: string): void {
  this.valueObs.next(value);
}

getValue(): Observable<string> {
  return this.valueObs.asObservable();
}

updateComponent(): void {
  this.setValue(this.searchText);
}

searchTextChangeHandler(value: string) {
  this.searchText = value;
}
}