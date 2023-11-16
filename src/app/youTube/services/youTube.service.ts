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

  getStatistics(id: string): Promise<Statistics> {
    // get Statistics for the video
    const urlBase = `https://youtube.googleapis.com/youtube/v3/videos?key=${this.API_KEY}&part=statistics&id=${id}`;
    return fetch(urlBase)
      .then((response) => {
        return response.json() as Promise<StatisticsData>;
      })
      .then((data) => {
        return data.items[0] ? data.items[0].statistics : 
        {  
          likeCount: '',
          favoriteCount: '',
          commentCount: '',
          viewCount: ''};
      });
  }

  getItem(id: string): Promise<Item> {
    const urlBase = `https://youtube.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&q=${id}`;
   
    return fetch(urlBase)
      .then((response) => {
        return response.json() as Promise<ResultData>;
      }).
      then((data) => {
        return data.items[0];
      });
  }

  getWholeItemData(id:string): Promise<WholeVideoData> {
    return this.getItem(id).then((data: Item) => {
        return this.getStatistics(data.id.videoId).then((res) => {
           return {id:data.id.videoId, snippet: data.snippet, statistics: res}; 
        });
    });
}
}
