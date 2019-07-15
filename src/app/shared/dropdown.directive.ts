import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    // private status: boolean = false;
    constructor(private el: ElementRef, private renderer: Renderer2){}

    // @HostListener('click') onClinkEvent() {
    //     // this.el.nativeElement.classList.toggle('open');  // first solution 


    //     // this.status = !this.status;
    //     // if(this.status) {
    //     //     this.renderer.addClass(this.el.nativeElement, 'open');
    //     // } else {
    //     //     this.renderer.removeClass(this.el.nativeElement, 'open');
    //     // }  
         
    //     // second solution


    //     this.isOpen = !this.isOpen; // third solution
    // }


    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
    } // fourth solution // will close the dropdown on clicking anywhere outside the dropdown

}