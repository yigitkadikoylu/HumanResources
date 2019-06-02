import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesComponent} from "./candidates/candidates.component"
import { HomeComponent } from './home/home.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: CandidateDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
