import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Intro } from './intro/intro';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

@NgModule({
  declarations: [
    App,
    Intro,
    About,
    Contact,
    Projects
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
