import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Intro } from './intro/intro';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

const routes: Routes = [
		{ path: 'about', component: About },
		{ path: 'contact', component: Contact },
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
