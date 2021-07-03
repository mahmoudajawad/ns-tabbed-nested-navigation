import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NestedRouteService } from '../nested-router/nested-route.service';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private nestedRouter: NestedRouteService
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
    console.log(this.route.snapshot.data);
  }

  navigateItems(item: string | number): void {
    this.nestedRouter.navigate(this.route.snapshot.data.outlet, ['items']);
  }

  navigateItem(item: string | number): void {
    this.nestedRouter.navigate(this.route.snapshot.data.outlet, ['item', item]);
  }
}
