import { Component, Input } from '@angular/core';
import { SearchPipe } from '../search.pipe';
import * as dataJson from '../../assets/response.json';
import { Item } from '../types';

interface DataElement {
  snippet: object;
}

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

  items: Item[] = [];

  sortItems() {
    const data = (dataJson as any).default;

    this.items = data.sort((a: Item, b: Item) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      const viewA = +a.statistics.viewCount;
      const viewB = +b.statistics.viewCount;

      if (this.sort === 'date' && this.direction) {
        return dateA !== dateB ? dateA - dateB : viewA - viewB;
      }

      if (this.sort === 'date' && !this.direction) {
        return dateA !== dateB ? dateB - dateA : viewA - viewB;
      }

      if (this.sort === 'view' && this.direction) {
        return viewA !== viewB ? viewA - viewB : dateA - dateB;
      }

      if (this.sort === 'view' && !this.direction) {
        return viewA !== viewB ? viewB - viewA : dateA - dateB;
      }

      return 0;
    });
  }

  ngOnInit() {
    this.searchText = this.search;
    this.sortItems();
  }

  ngOnChanges() {
    this.sortItems();
  }
}
