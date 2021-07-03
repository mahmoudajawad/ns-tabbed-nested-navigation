import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NestedRouteService } from '../nested-router/nested-route.service';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private nestedRouter: NestedRouteService
  ) {
    // Use the constructor to inject services.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  navigate(): void {
    this.nestedRouter.navigate(this.route.snapshot.data.outlet, ['browse']);
  }
}
