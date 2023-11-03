import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import SharedModule from '../../shared/modules/shared.module';
import { DetailsComponent } from '../pages/details/details.component';
import { ListComponent } from '../components/list/list.component';
import { ItemComponent } from '../components/item/item.component';
import { MainComponent } from '../pages/main/main.component';
import { CommonModule } from '@angular/common';
import { YouTubeRoutingModule } from './youTube-routing.module';

@NgModule({
  declarations: [DetailsComponent, ListComponent, ItemComponent, MainComponent],
  providers: [DatePipe],
  imports: [CommonModule, SharedModule, YouTubeRoutingModule],
})
export class YouTubeModule {}
