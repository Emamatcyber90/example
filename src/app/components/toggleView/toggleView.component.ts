import { Component }    from "@angular/core";

@Component({
    selector:   "paToggleView", 
    templateUrl:    "./toggleView.template.html"
})
export class PaToggleView {
    isShowContent: boolean = true;
}