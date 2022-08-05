import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SecondComponent } from './second/second.component';
import { YourGuard } from './your.guard';

const routes: Routes = [
  {
    path: 'first-component',
    canActivate: [YourGuard],
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
