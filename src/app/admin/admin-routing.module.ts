import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterConstant } from './constants/router.constant';
import { TicketPageComponent } from './pages/ticket-page/ticket-page.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NavigationConstant } from './constants/navigation.constant';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPageComponent,
    children: [
      {
        path: RouterConstant.DASHBOARD,
        component: DashboardPageComponent,
        data: {
          breadcrumb: NavigationConstant.ADMIN_LANDING_PAGE_NAVIGATION.dashboard,
        },
      },
      {
        path: RouterConstant.TICKET,
        component: TicketPageComponent,
        data: {
          breadcrumb: NavigationConstant.ADMIN_LANDING_PAGE_NAVIGATION.tickets,
        },
      },
      {
        path: RouterConstant.COMPANY,
        component: CompanyPageComponent,
        data: {
          breadcrumb: NavigationConstant.ADMIN_LANDING_PAGE_NAVIGATION.company,
        },
      },
      {
        path: RouterConstant.CHAT,
        component: ChatPageComponent,
        data: {
          breadcrumb: NavigationConstant.ADMIN_LANDING_PAGE_NAVIGATION.chat,
        },
      },
      {
        path: RouterConstant.USER,
        component: UserPageComponent,
        data: {
          breadcrumb: NavigationConstant.ADMIN_LANDING_PAGE_NAVIGATION.user,
        },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
