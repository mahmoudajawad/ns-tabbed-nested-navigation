import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedRouterModule } from './nested-router';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NestedRouterModule],
  declarations: [AppComponent, WelcomeComponent],
  // providers: [LayoutService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
