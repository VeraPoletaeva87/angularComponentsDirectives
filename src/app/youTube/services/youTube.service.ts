import { Injectable } from '@angular/core';
import {
  Item,
  ResultData,
  Statistics,
  StatisticsData,
  WholeVideoData
} from '../../shared/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  API_KEY = 'AIzaSyB0fgxbiZ__2ZQKwB-Wa7kqEsq5cIVOi4Q';

  constructor(
    private http: HttpClient) { }

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

    return this.http.get<ResultData>(url)
    .pipe(
        map((results: ResultData) => results.items),
        catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  getStatistics(id: string): Observable<Statistics> {
    const empty = {
      likeCount: '',
      favoriteCount: '',
      commentCount: '',
      viewCount: ''
    };
    // get Statistics for the video
    const urlBase = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}`;
    return this.http.get<StatisticsData>(urlBase)
    .pipe(
        map((data: StatisticsData) => data.items[0].statistics),
        catchError(this.handleError<Statistics>('getStatistics', empty))
    );
  }

  getItem(id: string): Observable<Item> {
    const urlBase = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}`;
    return this.http.get<ResultData>(urlBase)
    .pipe(
        map((data: ResultData) => data.items[0])
    );
  }
}
