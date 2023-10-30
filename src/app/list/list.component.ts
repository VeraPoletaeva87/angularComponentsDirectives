import { Component } from '@angular/core';
import * as dataJson from '../../assets/response.json';

interface Item {
  snippet: {
    title: string,
    channelTitle: string,
    publishedAt: Date,
    thumbnails: {
      default: {
        url: string
      }
    }
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    commentCount: string
  }
}

interface DataElement {
  snippet: object;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: Item[] = [];

  ngOnInit() {
    this.items = (dataJson as any).default;
}
}
