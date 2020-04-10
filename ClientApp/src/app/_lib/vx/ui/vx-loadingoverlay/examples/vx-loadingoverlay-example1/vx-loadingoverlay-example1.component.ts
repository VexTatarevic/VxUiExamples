import { Component, OnInit } from '@angular/core';

// Services
import { VxLoadingoverlayService } from '../../vx-loadingoverlay.service';

@Component({
  selector: 'app-vx-loadingoverlay-example1',
  templateUrl: './vx-loadingoverlay-example1.component.html',
  styleUrls: ['./vx-loadingoverlay-example1.component.scss']
})
export class VxLoadingoverlayExample1Component implements OnInit {

  // ---------------------------------
  //    Fields
  // ---------------------------------

  isLeftCardLoading = '';
  isCenterCardLoading = false;
  isRightCardLoading = '';

  messages = {
    signingUp: 'Signing you up ...',
    contacting: 'Contacting ...',
    loadingWholePage: 'Loading a whole page ...'
  };

  // ---------------------------------
  //    Constructor
  // ---------------------------------

  constructor(
    private loadingOverlaySvc: VxLoadingoverlayService
  ) { }

  // ---------------------------------
  //    Methods
  // ---------------------------------

  ngOnInit() {
  }



  // --------------------
  //  Left Card Loading

  onClick_leftCard() {
    this.isLeftCardLoading = this.messages.signingUp;

    // simulate 1 second delay before hiding the overlay
    setTimeout(() => {

      this.isLeftCardLoading = '';
    }, 1000);
  }



  // --------------------
  //  Center Card Loading

  onClick_centerCard() {
    this.isCenterCardLoading = true;

    // simulate 1 second delay before hiding the overlay
    setTimeout(() => {

      this.isCenterCardLoading = false;
    }, 1000);
  }



  // --------------------
  //  Right Card Loading

  onClick_rightCard() {
    this.isRightCardLoading = this.messages.contacting;

    // simulate 1 second delay before hiding the overlay
    setTimeout(() => {

      this.isRightCardLoading = '';
    }, 1000);
  }



  // --------------------
  //  Page Body Loading

  onClick_showGlobalLoader() {
    this.loadingOverlaySvc.show(this.messages.loadingWholePage);

    // simulate 1 second delay before hiding the overlay
    setTimeout(() => {
      this.loadingOverlaySvc.hide();
    }, 1000);
  }


}
