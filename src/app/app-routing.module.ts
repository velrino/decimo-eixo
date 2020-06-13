import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // { path: 'totem', loadChildren: './totem/totem.module#TotemModule' },
  { path: 'totem', loadChildren: () => import('./totem/totem.module').then(m => m.TotemModule) },
  { path: '', redirectTo: 'totem', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }