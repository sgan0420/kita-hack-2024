import { AdminLandingPageNavigation } from '../models/adminLandingPageNavigation';

export class NavigationConstant {
  public static readonly ADMIN_LANDING_PAGE_NAVIGATION: Readonly<AdminLandingPageNavigation> = {
    dashboard: 'Dashboard',
    company: 'Company',
    tickets: 'Tickets',
    chat: 'Chat',
    user: 'User',
  };
}
