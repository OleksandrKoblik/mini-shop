import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) { }

  public ngAfterViewInit(): void {
    this.el.nativeElement.focus()
  }

  public ngOnInit(): void {
  }


}
