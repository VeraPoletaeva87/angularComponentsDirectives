import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path: 'details/:id', component: DetailsComponent },
                        { path: 'login', component: LoginPageComponent },
                        { path: '', component: MainComponent },
                        { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
