import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { Comp2DetailsComponent } from './pages/comp2-details/comp2-details.component';
import { HomeComponent } from './pages/home/home.component';

// This exrecise has two tasks:
// task-1 : Have the routed components displayed on the same page (home):
//          (1) When click on link then the link text uses the ".activeFlag" css
//              class to highlight the current active route chosen.
//          (2) The component will be displayed on the same page, it replaces
//               the previous component that was displayed (1 or 2).
//
// task-2 : Have the routed components display their own page.
//          (1) When click on link then the home page disapers and the component (1 or 2)
//              are displayed on their own page.
//          (2) The page displayed needs to have a link back to the home page.

const routes: Routes = [
  // { path: '', component: HomeComponent }, // comment-out in task-2 of this exercise
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
