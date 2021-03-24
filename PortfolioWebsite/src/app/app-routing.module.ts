import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassesComponent } from "./pages/classes/classes.component"
import { HomeComponent} from "./pages/home/home.component"
import {SkillsComponent } from "./pages/skills/skills.component"
import { SiteInfoComponent} from "./pages/site-info/site-info.component"
import { ProjectsComponent } from "./pages/projects/projects.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "classes",
    component: ClassesComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "site-info",
    component: SiteInfoComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
