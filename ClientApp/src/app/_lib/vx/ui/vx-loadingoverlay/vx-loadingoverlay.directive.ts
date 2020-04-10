import { Directive, ViewContainerRef, QueryList, ComponentFactoryResolver, ComponentRef, Input } from '@angular/core';

import { VxLoadingoverlayComponent } from './vx-loadingoverlay/vx-loadingoverlay.component';


@Directive({
  selector: '[vxLoadingoverlay]'
})
/**
 * Loading Overlay directive.
 *
 * @author Vex Tatarevic 2018-02-01
 * @copyright VEXIT 2020 www.vexit.com
 */
export class VxLoadingoverlayDirective {



  // -----------------------------------------
  //    Fields

  overlayRef: ComponentRef<VxLoadingoverlayComponent>;

  get containerElement() { return this.viewContainerRef.element.nativeElement as HTMLElement; }

  @Input() set vxLoadingoverlay(show: boolean | string) {
    if (show) {
      this.show(typeof show === 'string' ? show : '');
    } else {
      this.hide();
    }
  }


  // -----------------------------------------
  //    Constructor

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef
  ) { }



  // -----------------------------------------
  //    Methods

  /**
   * Get directive from the queryList of directives , by attribute used as identifier
   * inside the container element to which directive is applied.
   *
   * @param directiveQueryList query list of directives inside the component , obtained through @ViewChildren() decorator
   * @param containerIdAttributeName
   *        identifier attribute used inside the parent container html element to which loading overlay is to be added.
   */
  public static get(directiveQueryList: QueryList<VxLoadingoverlayDirective>, containerIdAttributeName: string) {
    const directiveList = directiveQueryList.toArray();
    const directive = directiveList.find(d => d.containerElement.hasAttribute(containerIdAttributeName));
    return directive;
  }

  show(message: string = '') {
    /*
           https://angular.io/guide/dynamic-component-loader

           https://www.tutorialandexample.com/dynamic-components-in-angular-8/
    */

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(VxLoadingoverlayComponent);

    // add the component to the view
    this.viewContainerRef.clear();
    this.overlayRef = this.viewContainerRef.createComponent(componentFactory);

    const overlayComponent = this.overlayRef.instance;

    // pass some data to the component
    setTimeout(() => {
      const overlay = overlayComponent.element;
      const container = this.containerElement;
      overlay.style.top = `${container.offsetTop}px`;
      overlay.style.left = `${container.offsetLeft}px`;
      overlay.style.height = `${container.offsetHeight}px`;
      overlay.style.width = `${container.offsetWidth}px`;
      overlayComponent.message = message;
    });
    // this.loadingoverlaySvc.show(this, message);
  }

  hide() {
    if (this.overlayRef) {
      this.overlayRef.destroy();
    }
  }


}
