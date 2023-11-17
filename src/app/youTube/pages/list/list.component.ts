import { Component } from '@angular/core';
import { YouTubeService } from '../../services/youTube.service';
import { WholeVideoData } from '../../../shared/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  items$: Observable<WholeVideoData[]> = this.youTubeService.items$;

  constructor(private youTubeService: YouTubeService) {}

}
