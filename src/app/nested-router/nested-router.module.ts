import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from '@nativescript/angular';
import { NestedRouteService } from './nested-route.service';
import { NestedRouterComponent } from './nested-router.component';

const routes: Routes = [
  {
    path: '',
    component: NSEmptyOutletComponent
  },
  {
    path: '',
    loadChildren: () => import('~/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('~/app/browse/browse.module').then(m => m.BrowseModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('~/app/search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  declarations: [NestedRouterComponent],
  providers: [NestedRouteService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NestedRouterModule {}
