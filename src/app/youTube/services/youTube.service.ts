import { Injectable } from '@angular/core';
import {
  Item,
  ResultData,
  Statistics,
  StatisticsData,
  WholeVideoData,
} from '../../shared/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  debounceTime,
  filter,
  from,
  map,
  merge,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  API_KEY = 'AIzaSyB0fgxbiZ__2ZQKwB-Wa7kqEsq5cIVOi4Q';

  item$: Observable<WholeVideoData[]>;

  private searchQuery$: BehaviorSubject<string> = new BehaviorSubject('');
  private sortDirection: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.item$ = this.getItems$();
  }

  getItems$(): Observable<WholeVideoData[]> {
    return this.searchQuery$.pipe(
      filter((query: string) => query.length >= 3),
      debounceTime(300),
      switchMap((query: string) => this.getItems(query)),
      // Time
      switchMap((data: Item[]) => {
        const wholeData: WholeVideoData[] = [];

        return from(data).pipe(
          mergeMap((item: Item) =>
            this.getStatistics(item.id.videoId).pipe(
              tap((res: Statistics) => {
                wholeData.push({
                  id: item.id.videoId,
                  snippet: item.snippet,
                  statistics: res,
                });
              }),
              map(() => wholeData)
            )
          )
        );
      }),
      // wholeData[]
      map((wholeData: WholeVideoData[]) => {
        return wholeData.sort();
      }),
      // wholeData[] sorted
      switchMap((wholeData: WholeVideoData[]) => {
        return this.sortDirection.pipe(
          map((direction: boolean) => {
            return wholeData.sort();
          })
        );
      })
    );
  }

  setSearchQuery(value: string): void {
    this.searchQuery$.next(value);
  }

  setSortDirection(value: boolean): void {
    this.sortDirection.next(value);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: string): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  getItems(searchString: string): Observable<Item[]> {
    // get list of videos
    const urlBase = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2`;
    const params = new URLSearchParams({ q: searchString });
    const paramsString = params.toString();
    let url = searchString ? `${urlBase}&${paramsString}` : urlBase;

    return this.http.get<ResultData>(url).pipe(
      map((results: ResultData) => results.items),
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  getStatistics(id: string): Observable<Statistics> {
    const empty = {
      likeCount: '',
      favoriteCount: '',
      commentCount: '',
      viewCount: '',
    };
    // get Statistics for the video
    const urlBase = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}`;
    return this.http.get<StatisticsData>(urlBase).pipe(
      map((data: StatisticsData) => data.items[0].statistics),
      catchError(this.handleError<Statistics>('getStatistics', empty))
    );
  }

  getItem(id: string): Observable<Item> {
    const urlBase = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}`;
    return this.http
      .get<ResultData>(urlBase)
      .pipe(map((data: ResultData) => data.items[0]));
  }
}
