import { Directive, HostBinding, ElementRef, Renderer }   from "@angular/core";

@Directive({
    selector:   "td"
})
export class PaCellColor {

    @HostBinding("class")
    bgClass: string = "";

    constructor(private el: ElementRef, renderer: Renderer) { }

    changeCase() {
        this.el.nativeElement.innerText = this.el.nativeElement.innerText.toUpperCase();
    }

    setColor(dark: Boolean) {
        this.bgClass = dark ? "bg-inverse" : "";
    }
}