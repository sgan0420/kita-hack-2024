import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientLandingPageComponent} from "./pages/client-landing-page/client-landing-page.component";
import {ClientRoutingModule} from "./client-routing.module";

@NgModule({
  declarations: [ClientLandingPageComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
