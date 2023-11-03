import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import CoreModule from './core/modules/core.module';
import { AuthModule } from './auth/modules/auth.module';
import { YouTubeModule } from './youTube/modules/youTube.module';

@NgModule({
  declarations: [AppComponent, SearchPipe],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    YouTubeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
