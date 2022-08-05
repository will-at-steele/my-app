import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { YourGuard } from './your.guard';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent,
    PokemonDetailsComponent,
    ChildAComponent,
    ChildBComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [YourGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
