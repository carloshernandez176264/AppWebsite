import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appImageFallback]'
})
export class ImageFallbackDirective {

  @Input('appImageFallback') fallBackimageUrl!: string;

  constructor(private el: ElementRef) {
    console.log('ImageFallbackDirective')
   }

  //  @HostListener('Error')

  //  loadImageFallback():void {
  //   this.el.nativeElement.src='assets/fallback.jpg';
  //  }

  @HostListener('error')
    loadImageFallback() {
    const imgElement: HTMLImageElement = this.el.nativeElement;
    if (imgElement.src !== this.fallBackimageUrl) {
      imgElement.src = this.fallBackimageUrl;
    }
  }


  @HostListener('load')
  resetImage() {
    const imgElement: HTMLImageElement = this.el.nativeElement;
    if (imgElement.src === this.fallBackimageUrl) {
      imgElement.src = '';
    }
  }

}
