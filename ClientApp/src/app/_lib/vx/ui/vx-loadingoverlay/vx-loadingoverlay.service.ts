import {
  Injectable,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  ApplicationRef,
  Injector,
  QueryList
} from '@angular/core';
import { VxLoadingoverlayComponent } from './vx-loadingoverlay/vx-loadingoverlay.component';



@Injectable({
  providedIn: 'root'
})
/**
 * Loading Overlay module.
 *
 * @author Vex Tatarevic 2018-02-01
 * @copyright VEXIT 2020 www.vexit.com
 */
export class VxLoadingoverlayService {


  // -----------------------------------------
  //    Fields

  overlayRef: ComponentRef<VxLoadingoverlayComponent>;

  // -----------------------------------------
  //    Constructor

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }



  // -----------------------------------------
  //    Methods


  /** Show loading overlay across the whole page */
  show(message: string = '') {

    // Create a component reference from the component
    this.overlayRef = this.componentFactoryResolver
      .resolveComponentFactory(VxLoadingoverlayComponent)
      .create(this.injector);

    // Set component instance data
    const overlayComponent = this.overlayRef.instance;
    overlayComponent.message = message;

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.overlayRef.hostView);

    // Get DOM element from component
    const domElem = (this.overlayRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);
  }

  /** Remove global loading overlay from the component tree and from the DOM */
  hide() {
    this.appRef.detachView(this.overlayRef.hostView);
    this.overlayRef.destroy();
  }


}
