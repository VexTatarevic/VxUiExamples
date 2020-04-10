import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'vx-loadingoverlay',
  templateUrl: './vx-loadingoverlay.component.html',
  styleUrls: ['./vx-loadingoverlay.component.scss']
})
/**
 * Loading Overlay component.
 *
 * NOTE: Must add it as entryComponents inside the module:
 *    entryComponents: [VxLoadingoverlayComponent] // https://angular.io/guide/dynamic-component-loader#dynamic-component-loading
 *
 * @author Vex Tatarevic 2018-02-01
 * @copyright VEXIT 2020 www.vexit.com
 */
export class VxLoadingoverlayComponent implements OnInit {


  // --------------------------------
  //    Fields

  @Input() message = '';

  get element() { return this.elementRef.nativeElement as HTMLElement; }


  // --------------------------------
  //    Constructor

  constructor(
    private elementRef: ElementRef) { }



  // --------------------------------
  //    Methods

  ngOnInit() {
  }



}
