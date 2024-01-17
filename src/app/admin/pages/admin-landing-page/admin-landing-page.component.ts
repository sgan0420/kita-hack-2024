import { Component } from '@angular/core';
import { AdminLandingPageNavigation } from '../../models/adminLandingPageNavigation';
import { NavigationConstant } from '../../constants/navigation.constant';
import { RouterConstant } from '../../constants/router.constant';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.css',
})
export class AdminLandingPageComponent {
  readonly NAVIGATION: Readonly<AdminLandingPageNavigation> = NavigationConstant.ADMIN_LANDING_PAGE_NAVIGATION;
  readonly ROUTER_CONSTANT: typeof RouterConstant = RouterConstant;
}
