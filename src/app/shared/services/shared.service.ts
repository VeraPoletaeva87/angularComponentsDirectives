import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, filter } from 'rxjs';


interface Props {
  value: boolean
};

@Injectable({ providedIn: 'root' })

export class SharedService {
@Input() value: string = '';

private valueObs: BehaviorSubject<string> = new BehaviorSubject<string>('');

sort: string = '';
direction: boolean = true;
searchText: string = '';


setValue(value: string): void {
  this.valueObs.next(value);
}

getValue(): Observable<string> {
  return this.valueObs.asObservable()
  .pipe(
    filter((value: string) => value.length >=3),
    debounceTime(300),
    distinctUntilChanged()
  );
}

updateComponent(): void {
  this.setValue(this.searchText);
}

searchTextChangeHandler(value: string) {
  this.searchText = value;
}
}