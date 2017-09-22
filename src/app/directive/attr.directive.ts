import { Directive, ElementRef, Attribute, Input }    from "@angular/core";

@Directive({
    selector:   "[pa-attr]"
})
export class PaAttrDirective {
    // constructor(element: ElementRef, @Attribute("pa-attr")bgClass: string) {
    //     element.nativeElement.classList.add(bgClass || "bg-success");
    // }
    constructor(private element: ElementRef) { }

    @Input("pa-attr")
    bgClass: string;

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success");
    }
}