import { Component } from '@angular/core';
import { NavigationModel } from '../../models/navigation.model';
import { NavigationConstant } from '../../constants/navigation.constant';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.css',
})
export class AdminLandingPageComponent {
  readonly NAVIGATIONS: Readonly<NavigationModel> = NavigationConstant.NAVIGATIONS;
}
