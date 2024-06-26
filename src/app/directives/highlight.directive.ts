import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[appHighlight]",
    standalone: true
})
export class HighlightDirective {

    @Input() appHighlight = ''

    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = this.appHighlight;
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.highlight(this.appHighlight)
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.highlight('')
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}