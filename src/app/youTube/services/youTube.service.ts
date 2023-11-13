import { Injectable } from '@angular/core';
import {
  Item,
  ResultData,
  Statistics,
  StatisticsData,
  WholeVideoData
} from '../../shared/types';

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  API_KEY = 'AIzaSyAnIEK8H9Vw7vb_F7oaxvkxwclmLTnHELU';

  getItems(searchString: string): Promise<Item[]> {
    // get list of videos
    const urlBase = `https://youtube.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&maxResults=2`;
    const params = new URLSearchParams({ q: searchString });
    const paramsString = params.toString();
    let url = searchString ? `${urlBase}&${paramsString}` : urlBase;

    return fetch(url)
      .then((response) => {
        return response.json() as Promise<ResultData>;
      })
      .then((data) => {
        return data.items;
      });
  }

  getStatistics(id: string): Promise<Statistics> {
    // get Statistics for the video
    const urlBase = `https://youtube.googleapis.com/youtube/v3/videos?key=${this.API_KEY}&part=statistics&id=${id}`;
    return fetch(urlBase)
      .then((response) => {
        return response.json() as Promise<StatisticsData>;
      })
      .then((data) => {
        return data.items[0].statistics;
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
