import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroModule } from '../shared/ng-zorro/ng-zorro.module';

@NgModule({
  declarations: [AdminLandingPageComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule, NgZorroModule],
})
export class AdminModule {}
