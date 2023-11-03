import { Injectable } from '@angular/core';
import * as dataJson from '../../../assets/response.json';
import { Item } from '../../shared/types';

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  items = (dataJson as any).default;

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: string): Item {
    const item = this.items.filter((el: Item) => el.id === id);
    return item[0];
  }
}