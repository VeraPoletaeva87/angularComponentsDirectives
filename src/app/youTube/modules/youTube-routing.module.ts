import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRoutingModule {}
