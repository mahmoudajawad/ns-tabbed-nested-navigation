import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Injectable()
export class NestedRouteService {
  constructor(private router: Router, private routerExt: RouterExtensions) {}

  navigate(outlet: string, route: Array<string | number>): void {
    let outlets: any = {};
    outlets[`${outlet}Tab`] = [outlet, ...route];
    this.router.navigate(['/', { outlets: outlets }]);
  }
}
