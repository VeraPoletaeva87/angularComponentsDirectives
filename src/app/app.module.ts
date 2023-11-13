import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import CoreModule from './core/modules/core.module';
import { AuthModule } from './auth/modules/auth.module';
import { YouTubeModule } from './youTube/modules/youTube.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShortUrlInterceptor } from './youTube/services/httpInterceptor';


@NgModule({
  declarations: [AppComponent, SearchPipe],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    YouTubeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {
    provide: HTTP_INTERCEPTORS,
    useClass: ShortUrlInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export default class AppModule {}
