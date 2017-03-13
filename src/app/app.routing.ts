/**
 * Created by SINGH on 3/1/2017.
 */

import {Routes, RouterModule, CanActivate} from '@angular/router';
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {NgrxComponent} from "./ngrx/ngrx.component";
import {Angular4Component} from "./angular4/angular4.component";
import {ViewChildContentEgComponent} from "./childrenEg/view-child-content-eg.component";
import {ParentHostComponent} from "./parent-host/parent-host.component";
import {GuardsComponent} from "./guards/guards.component";
import {CheckComponent} from "./guards/check.component";
import {AuthGuard} from "./guards/auth.guard";
import {DeactivateGuard} from "./guards/deactivate.guard";
import {DirectivesComponent} from "./directives/directives.component";
import {PipesComponent} from "./pipes/pipes.component";
import {ViewencapsulationComponent} from "./viewencapsulation/viewencapsulation.component";


const routes: Routes = [
  { path: '', redirectTo: 'a4', pathMatch: 'full' },
  { path: 'a4', component:  Angular4Component},
  { path: 'template', component:  TemplateDrivenComponent},
  { path: 'reactive', component:  ReactiveComponent},
  { path: 'ngrx', component:  NgrxComponent},
  { path: 'viewchild', component:  ViewChildContentEgComponent},
  { path: 'host', component:  ParentHostComponent},
  { path: 'directives', component:  DirectivesComponent},
  { path: 'pipes', component:  PipesComponent},
  { path: 'view', component:  ViewencapsulationComponent },
  { path: 'guard', component:  GuardsComponent , canDeactivate:[DeactivateGuard]},
  { path: 'guardcheck', component:  CheckComponent , canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(routes);
