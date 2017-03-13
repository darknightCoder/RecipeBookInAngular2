import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[rbDropdownDirective]'
})
export class DropdownDirectiveDirective {


  @HostBinding('class.open') get Opened() {
    return this.isDown;
  }

 @HostListener('click') dropDown(){
 this.isDown = true;
 }
  @HostListener('mouseleave') closeDropDown(){
    this.isDown = false;
  }
  private isDown = false;
  constructor() { }

}
