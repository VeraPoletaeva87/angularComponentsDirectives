import { Component, Input } from '@angular/core';
import { YouTubeService } from '../../services/youTube.service';
import { Item, WholeVideoData } from '../../../shared/types';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private service: YouTubeService, private sharedService: SharedService) {}

  @Input() sort!: string;
  @Input() direction!: boolean;
  @Input() search!: string;

  searchText: string = '';

  items: Item[] = [];
  wholeData: WholeVideoData[] = [];

  sortItems() {
    
    this.service.getItems(this.searchText).then((data: Item[]) => {
      this.wholeData = [];
      data.forEach((elem) => {
        //make request for statictics and put data in one common array
        this.service.getStatistics(elem.id.videoId).then((res) => {
          this.wholeData.push({id:elem.id.videoId, snippet: elem.snippet, statistics: res});
        })
      });
      this.items = data.sort((a: Item, b: Item) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        if (this.sort === 'date' && this.direction) {
        return dateA - dateB; 
        } else {
          return dateB - dateA;
        }

        // todo: return sorting by both fields using wholeData
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
