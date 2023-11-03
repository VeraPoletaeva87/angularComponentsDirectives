import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';

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

  constructor(private loginService: LoginService) {}

  showSettings: boolean = false;

  handleEventFromSearch() {
    this.searchEmitter.emit(true);
  }

  handleEventFromSettings() {
    this.showSettings = !this.showSettings;
  }

  handleEventFromSort(value: EmitterValue) {
    this.sortEmitter.emit(value);
  }

  handleEventTextSearch(value: string) {
    this.textEmitter.emit(value);
  }

  logoutClickHandler() {
    this.loginService.logOut();
  }
}
