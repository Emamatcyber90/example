import { Input, Output, EventEmitter, Directive, 
         HostBinding, HostListener, SimpleChange }  from "@angular/core";

@Directive({
    selector:   "input[paModel]"
})
export class PaModel {
    @Input("paModel")
    modelProperty: string;

    @HostBinding("value")
    fieldValue: string = "";

    ngOnChanges(changes: {[propety: string]: SimpleChange}) {
        let change = changes['modelProperty'];
        console.log("ngOnChanges(), fieldValue=" + this.fieldValue + ", currentValue="+change.currentValue);
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = changes['modelProperty'].currentValue || "";
        }
    }

    @Output("paModelChange") 
    update = new EventEmitter<String>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        console.log("updateValue(), newValue=" + newValue);
        this.fieldValue = newValue;
        this.update.emit(newValue);
    }
}