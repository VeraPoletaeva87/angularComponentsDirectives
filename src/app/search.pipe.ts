import { Pipe, PipeTransform } from '@angular/core';

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

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], searchText: string): Item[] {
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item: Item) => {
        const itemString = JSON.stringify(item).toLowerCase();
        return itemString.includes(searchText);
    });
  }

}
