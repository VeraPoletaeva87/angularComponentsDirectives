import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './searchInput/search.component';
import { SortComponent } from './sort/sort.component';
import { LoginBlockComponent } from './loginBlock/loginBlock.component';
import { LogoComponent } from './logo/logo.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SortComponent,
    LoginBlockComponent,
    LogoComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
