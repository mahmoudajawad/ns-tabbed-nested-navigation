import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { NestedRouteService } from '~/app/nested-router/nested-route.service';
import { DataItem, DataService } from '../../shared/data.service';

@Component({
  selector: 'ItemDetail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent implements OnInit {
  item: DataItem;

  constructor(
    private _data: DataService,
    private route: ActivatedRoute,
    private _routerExtensions: RouterExtensions,
    private nestedRouter: NestedRouteService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item = this._data.getItem(id);
  }

  navigateBrowse(): void {
    this.nestedRouter.navigate(this.route.snapshot.data.outlet, ['browse']);
  }

  onBackTap(): void {
    this._routerExtensions.back();
  }
}
