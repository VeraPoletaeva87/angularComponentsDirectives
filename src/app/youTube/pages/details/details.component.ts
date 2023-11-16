import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item, Statistics, WholeVideoData } from '../../../shared/types';
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
      publishedAt: new Date,
      channelId: '',
      channelTitle: '',
      title: '',
      description: '',
      thumbnails: {
        default: {
          url: '',
          width: 0,
          height: 0
        },
        medium: {
          url: '',
          width: 0,
          height: 0
        },
        high: {
          url: '',
          width: 0,
          height: 0
        }
      },
      liveBroadcastContent: '',
      publishTime: new Date
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

    this.youTubeService.getItem(id).subscribe((data: Item) => {
      this.youTubeService.getStatistics(data.id.videoId).subscribe((res: Statistics) => {
        this.item = {id:data.id.videoId, snippet: data.snippet, statistics: res};
       });
   });
  }

  backClickHandler() {
    this.router.navigate(['/main']);
  }
}
