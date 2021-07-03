import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from './shared/layout.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private layout: LayoutService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.router.navigateByUrl(
      '/(homeTab:home/items//browseTab:browse/browse//searchTab:search/search)'
    );
    // In real-world app, this would be only showing for first run, such as a check against a value in ApplicationSettings
    setTimeout(() => {
      this.layout.showCustomModal();
    }, 500);
    // Init your component properties here.
  }
}
