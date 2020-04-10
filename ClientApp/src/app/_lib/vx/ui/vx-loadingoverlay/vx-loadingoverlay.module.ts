import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { VxLoadingoverlayDirective } from './vx-loadingoverlay.directive';

// Components
import { VxLoadingoverlayComponent } from './vx-loadingoverlay/vx-loadingoverlay.component';

@NgModule({

  declarations: [
    VxLoadingoverlayComponent,
    VxLoadingoverlayDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VxLoadingoverlayComponent,
    VxLoadingoverlayDirective
  ]
  //,
  // Required for dynamic component loading
  // Ref: https://angular.io/guide/dynamic-component-loader#dynamic-component-loading
  // entryComponents: [VxLoadingoverlayComponent]
})
/**
 * Loading Overlay module.
 *
 * @author Vex Tatarevic 2018-02-01
 * @copyright VEXIT 2020 www.vexit.com
 */
export class VxLoadingoverlayModule { }
