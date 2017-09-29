import { Directive }        from "@angular/core";
import { SimpleChange }     from "@angular/core";
import { ViewContainerRef } from "@angular/core";
import { TemplateRef }      from "@angular/core";
import { Input }            from "@angular/core";

@Directive({
    selector:   "[paIf]"
})
export class PaStructureDirective {
    
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) { }

    @Input("paIf")
    expressionResult: boolean;

    ngOnChanges(changes: {[property: string] : SimpleChange }) {
        let change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }
    }
    
}