import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroModule } from '../shared/ng-zorro/ng-zorro.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { TicketPageComponent } from './pages/ticket-page/ticket-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

@NgModule({
  declarations: [
    AdminLandingPageComponent,
    DashboardPageComponent,
    CompanyPageComponent,
    TicketPageComponent,
    ChatPageComponent,
    UserPageComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule, NgZorroModule],
})
export class AdminModule {}
