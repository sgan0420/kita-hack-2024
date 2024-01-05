import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
