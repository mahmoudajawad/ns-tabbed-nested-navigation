import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from '@nativescript/angular';

const routes: Routes = [
  {
    path: 'home',
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import('./nested-router').then(m => m.NestedRouterModule),
    data: { outlet: 'home' },
    outlet: 'homeTab'
  },
  {
    path: 'browse',
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import('./nested-router').then(m => m.NestedRouterModule),
    data: { outlet: 'browse' },
    outlet: 'browseTab'
  },
  {
    path: 'search',
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import('./nested-router').then(m => m.NestedRouterModule),
    data: { outlet: 'search' },
    outlet: 'searchTab'
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
