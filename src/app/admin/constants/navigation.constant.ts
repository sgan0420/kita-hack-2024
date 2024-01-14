import { NavigationModel } from '../models/navigation.model';

export class NavigationConstant {
  public static readonly NAVIGATIONS: Readonly<NavigationModel> = {
    dashboard: 'Dashboard',
    company: 'Company',
    tickets: 'Tickets',
    chat: 'Chat',
    user: 'User',
  };
}
