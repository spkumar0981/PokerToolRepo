import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageCompComponent } from './home-page-comp/home-page-comp.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { EstimateStoryComponent } from './estimate-story/estimate-story.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageCompComponent },
  { path: 'createStory/:username', component: CreateStoryComponent },
  { path: 'estimateStory/:username', component: EstimateStoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
