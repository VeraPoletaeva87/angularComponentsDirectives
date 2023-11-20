import { Injectable } from '@angular/core';
import { WholeDataCustom } from '../../../../shared/types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, debounceTime, filter, from, mergeMap, of, map, switchMap, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../redux/reducers/videoList.reducer';
import { getFavorites } from 'src/app/redux/selectors/favorites.selector';

@Injectable({ providedIn: 'root' })
export class FavoriteService {

  constructor(private http: HttpClient, private store: Store<State>) {}

  getFavoriteItems(): WholeDataCustom[] {
    let favoriteItems: WholeDataCustom[] = [];
    this.store
    .pipe(
      select((state) => getFavorites(state))
    )
  .subscribe((items: WholeDataCustom[]) => favoriteItems = items);
     return favoriteItems;
  }
}