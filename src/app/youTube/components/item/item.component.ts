import { Component, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { WholeDataCustom } from '../../../shared/types';
import { YouTubeService } from '../../services/youTube.service';
import { Store } from '@ngrx/store';
import { favoriteVideoReducer } from 'src/app/redux/reducers/favorites.reducer';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: WholeDataCustom;
  borderColor: string = 'border-red';

  isFavorite: boolean = false;
  favoriteIconSrc: string = 'assets/images/favorite.png';

  constructor(
    private youTubeService: YouTubeService, 
    private router: Router,
    private store: Store<{videoList: WholeDataCustom[]}>) {}

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

  favoriteHandler() {
    this.isFavorite = !this.isFavorite;
    this.favoriteIconSrc = this.isFavorite ? 'assets/images/likesIcon.png' : 'assets/images/favorite.png';
    //this.store.dispatch(favoriteVideoReducer.AddToFavorites({item}))
  }

  clickHandler() {
    this.youTubeService.setDetailId(this.item.id);
    this.router.navigate(['/details/:id', { id: this.item.id }]);
  }
}
