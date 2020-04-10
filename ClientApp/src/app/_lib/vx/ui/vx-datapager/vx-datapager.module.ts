import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { VxDatapagerComponent } from './vx-datapager/vx-datapager.component';


@NgModule({
  declarations: [
    VxDatapagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VxDatapagerComponent
  ]
})
/**
 * Data Pager module
 *
 * @author Vex Tatarevic 2018-02-08
 * @copyright VEXIT 2020 www.vexit.com
 */
export class VxDatapagerModule { }
