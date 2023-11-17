import { Component, Input, HostBinding, ElementRef } from '@angular/core';

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

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;

  borderColor: string = 'border-red';

  @HostBinding('class') get color() {
    const publishDate = new Date(this.item.snippet.publishedAt);
    let d = new Date();
    const halfYear = new Date(d.setMonth(d.getMonth() - 6));
    d = new Date();
    const monthAgo = new Date(d.setMonth(d.getMonth() - 1));
    d = new Date();
    const weekAgo = new Date(d.setDate(d.getDate() - 7));

    if (publishDate >= halfYear && publishDate <= monthAgo) {
      this.borderColor = 'border-yellow'; 
    }

    if (publishDate >= monthAgo && publishDate <= weekAgo) {
      this.borderColor = 'border-green'; 
    }

    if (publishDate >= weekAgo) {
      this.borderColor = 'border-blue'; 
    }

    return this.borderColor;
   }

}
