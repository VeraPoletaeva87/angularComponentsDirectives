import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';
import { Router } from '@angular/router';
import { YouTubeService } from 'src/app/youTube/services/youTube.service';

interface EmitterValue {
  value: string;
  direction: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() searchEmitter = new EventEmitter<boolean>();
  @Output() sortEmitter = new EventEmitter<EmitterValue>();
  @Output() textEmitter = new EventEmitter<string>();

  constructor(private youTubeService: YouTubeService, private router: Router) {}

  showSettings: boolean = false;

  handleSearch(searchQuery: string) {
    this.youTubeService.setSearchQuery(searchQuery);
  }

  handleEventFromSettings() {
    this.showSettings = !this.showSettings;
  }

  handleEventFromSort(value: EmitterValue) {
    this.sortEmitter.emit(value);
  }

  cardCreateHandler() {
    this.router.navigate(['/create-card']);
  }
}
