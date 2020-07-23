import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageCompComponent } from './home-page-comp/home-page-comp.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { EstimateStoryComponent } from './estimate-story/estimate-story.component';
import { InputEstimatesComponent } from './input-estimates/input-estimates.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageCompComponent,
    CreateStoryComponent,
    EstimateStoryComponent,
    InputEstimatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
