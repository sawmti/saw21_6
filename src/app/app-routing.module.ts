import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { MagicListComponent } from './magic-list/magic-list.component';

const routes: Routes = [
  { path: 'carrousel', component: CarrouselComponent },
  { path: 'app-magic-list', component: MagicListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
