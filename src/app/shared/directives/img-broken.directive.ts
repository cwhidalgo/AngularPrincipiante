import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string=''
  @HostListener('error') handleError():void{
    console.log('esta imagen revento',this.elHost);
    const elNative = this.elHost.nativeElement
    // elNative.src ='../../../assets/images/PERFIL.PNG'
    elNative.src = this.customImg
  }
  constructor(private elHost:ElementRef) { 
    console.log(this.elHost);
  }

}
