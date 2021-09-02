import { ResultComponent } from './components/sites/results.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SearchPageComponent
  },
  {
    path: 'result/:username', component: ResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
