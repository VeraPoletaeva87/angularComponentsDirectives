import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './searchInput/search.component';
import { SortComponent } from './sort/sort.component';
import { LogoComponent } from './logo/logo.component';
import { SettingsComponent } from './settingsButton/settingsButton.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SearchPipe } from './search.pipe';
import { ButtonComponent } from './button/button.component';
import { LoginBlockComponent } from './loginBlock/loginBlock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SortComponent,
    LogoComponent,
    SettingsComponent,
    ListComponent,
    ItemComponent,
    SearchPipe,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    LoginBlockComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
