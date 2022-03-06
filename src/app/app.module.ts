import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CvComponent} from "./cv/cv.component";
import {HeaderComponent} from "./cv/ui/header/header.component";
import {CvInfoComponent} from "./cv/ui/cv-info/cv-info.component";
import {CvTimelineComponent} from "./cv/ui/cv-experience/cv-timeline.component";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HeaderComponent,
    CvInfoComponent,
    CvTimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
