import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightMarker]',
})
export class HighlightMarkerDirective /* implements AfterViewInit*/ {
  @Input() directiveColor: string = 'yellow';
  @Input() directiveFontStyle: string = 'normal';

  // @Input() directiveFontStyle = 'inherit';
  // Possible font-style values are:
  // - - - normal: The default font style.
  //- - - italic: The text is italicized.
  //- - - oblique: The text is slanted.
  //- - - inherit: The font style is inherited from the parent element.

  constructor(private elRef: ElementRef) {}

  // ngAfterViewInit(): void {
  // ngOnInit(): void {
  //   this.elRef.nativeElement.style.background = this.directiveColor; //this.directiveColor;
  // }

  ngOnChanges(): any {
    this.elRef.nativeElement.style.background = this.directiveColor; 
    this.elRef.nativeElement.style.fontStyle = this.directiveFontStyle;
  }
}
