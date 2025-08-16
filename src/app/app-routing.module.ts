import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { IndulgenceComponent } from './indulgence/indulgence.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { Title } from '@angular/platform-browser';

const routes: Routes =
[
  {path: "", component: BakeryComponent},
  {path: "indulgence", component: IndulgenceComponent, title: "Indulgences"},
  {
    path: "studio",
    title: "Studio",
    loadChildren: () => import("./modules/studio/studio.module").then(module => module.StudioModule)
  },
  {path: "menu", component: MenuCardComponent, title: "Menu"},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }

@Injectable()
export class MickMackTitleStrategy extends TitleStrategy
{
  constructor(private readonly title: Title)
  {
    super();
  }

  override updateTitle(routerStateSnapshot: RouterStateSnapshot)
  {
    let pageTitle = "Mick Mack - Homemade Indulgence";
    const title = this.buildTitle(routerStateSnapshot);

    if (title !== undefined)
    {
      pageTitle = `${title} | ${pageTitle}`;
    }

    this.title.setTitle(pageTitle);
  }
}