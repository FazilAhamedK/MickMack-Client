import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { IndulgenceComponent } from './indulgence/indulgence.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

const routes: Routes =
[
  {path: "", component: BakeryComponent},
  {path: "indulgence", component: IndulgenceComponent},
  {path: "menu", component: MenuCardComponent},
  {
    path: 'studio',
    loadChildren: () => import('./modules/studio/studio.module').then(module => module.StudioModule)
  },
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }