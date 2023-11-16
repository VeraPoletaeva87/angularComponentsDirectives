import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WholeVideoData } from '../../../shared/types';
import { YouTubeService } from '../../services/youTube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private youTubeService: YouTubeService,
    private router: Router
  ) {}

  item: WholeVideoData = {
    id: '',
    snippet: {
      title: '',
      description: '',
      channelTitle: '',
      publishedAt: new Date,
      thumbnails: {
        default: {
          url: '',
        },
        high: {
          url: '',
        }
      }
    },
    statistics: {
      likeCount: '',
      favoriteCount: '',
      commentCount: '',
      viewCount: ''
    }
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.youTubeService.getWholeItemData(id).then((res) => {
      this.item = res;
    });
  }

  backClickHandler() {
    this.router.navigate(['/main']);
  }
}
