import { Component, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { WholeVideoData } from '../../../shared/types';
import { YouTubeService } from '../../services/youTube.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: WholeVideoData;
  borderColor: string = 'border-red';

  constructor(private youTubeService: YouTubeService, private router: Router) {}

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

  clickHandler() {
    this.youTubeService.setDetailId(this.item.id);
    this.router.navigate(['/details/:id', { id: this.item.id }]);
  }
}
