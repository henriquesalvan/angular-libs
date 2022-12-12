import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcmeButtonComponent} from "./acme-button.component";

@NgModule({
    imports: [CommonModule],
    declarations: [AcmeButtonComponent],
    exports: [AcmeButtonComponent],
})
export class AcmeButtonModule {
}
