import { Component, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../shared/types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: Item;

  constructor(private router: Router) {}

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

  clickHandler() {
    this.router.navigate(['/details/:id', { id: this.item.id }]);
  }
}
