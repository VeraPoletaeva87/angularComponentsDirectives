import { Component } from '@angular/core';
import { FavoriteService } from './services/favorite.service';
import { WholeDataCustom } from '../../../shared/types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoriteComponent {
// change to favorites service
  items: WholeDataCustom[] = this.favoriteService.getFavoriteItems();

  constructor(private favoriteService: FavoriteService,  private router: Router) {}

  backClickHandler() {
    this.router.navigate(['/main']);
  }

}
