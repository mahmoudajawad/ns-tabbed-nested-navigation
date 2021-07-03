import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../shared/layout.service';

@Component({
  selector: 'app-layout-welcome',
  template: `
    <GridLayout
      verticalAlignment="center"
      horizontalAlignment="center"
      rows="auto, auto, auto, auto"
      columns="300"
      borderWidth="2"
      backgroundColor="white"
      borderColor="#c0defa"
      class="bg-accent-tertiary"
      padding="20 10"
      borderRadius="20 19 20 20"
      (onTap)="close()"
    >
      <Label text="Welcome modal is working!"></Label>
    </GridLayout>
  `
})
export class WelcomeComponent implements OnInit {
  constructor(private layout: LayoutService) {}

  ngOnInit() {}

  close(): void {
    this.layout.closeCustomModal();
  }
}
