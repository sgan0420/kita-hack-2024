import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLandingPageComponent } from './pages/client-landing-page/client-landing-page.component';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroModule } from '../shared/ng-zorro/ng-zorro.module';

@NgModule({
  declarations: [ClientLandingPageComponent],
  imports: [CommonModule, ClientRoutingModule, FormsModule, HttpClientModule, NgZorroModule],
})
export class ClientModule {}
