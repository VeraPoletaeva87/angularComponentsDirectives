import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WholeVideoData } from '../../../shared/types';
import { YouTubeService } from '../../services/youTube.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  public subscription : Subscription;
  item!: WholeVideoData;

  constructor(
    private youTubeService: YouTubeService,
    private router: Router
  ) {
    this.subscription = this.youTubeService.getDetail$().subscribe((res) => {
      this.item = res;
    })
  }

  backClickHandler() {
    this.router.navigate(['/main']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
