import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzButtonModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzIconModule,
    NzDatePickerModule,
    NzTableModule,
    NzModalModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
  ],
})
export class NgZorroModule {}
