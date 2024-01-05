import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminLandingPageComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
