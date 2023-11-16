import { Component, Input } from '@angular/core';
import { YouTubeService } from '../../services/youTube.service';
import { Item, Statistics, WholeVideoData } from '../../../shared/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input() sort!: string;
  @Input() direction!: boolean;
  @Input() search!: string;

  searchText: string = '';

  items: WholeVideoData[] = [];
  wholeData: WholeVideoData[] = [];

  constructor(private youTubeService: YouTubeService) {}

  sortItems() {
    this.youTubeService.getItems(this.searchText)
    .subscribe((data: Item[]) => {
      this.wholeData = [];
      data.forEach((elem) => {
        //make request for statictics and put data in one common array
        this.youTubeService.getStatistics(elem.id.videoId).subscribe((res: Statistics) => {
          this.wholeData.push({id:elem.id.videoId, snippet: elem.snippet, statistics: res});
        });
    });
    this.items = this.wholeData.sort((a: WholeVideoData, b: WholeVideoData) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      if (this.sort === 'date' && this.direction) {
      return dateA - dateB; 
      } else {
        return dateB - dateA;
      }
    });
  });
  }

  ngOnInit() {
    this.searchText = this.search;
    this.sortItems();
  }

  ngOnChanges() {
    this.searchText = this.search;
    this.sortItems();
  }
}
