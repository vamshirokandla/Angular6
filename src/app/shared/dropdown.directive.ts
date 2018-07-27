import { Directive, TemplateRef, ViewRef, OnInit, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
       this.isOpen = !this.isOpen;
    }

    // constructor(private templateRef:TemplateRef,private viewRef:ViewRef){

    // }

    // ngOnInit(){

    // }

}