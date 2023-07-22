import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { Comp2DetailsComponent } from './pages/comp2-details/comp2-details.component';
import { HomeComponent } from './pages/home/home.component';





const routes: Routes = [
  { path: '', component: HomeComponent }, // comment-out in task-2 of this exercise
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'comp2/:id', component: Comp2DetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
