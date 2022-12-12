import {NgModule} from "@angular/core";
import {AcmeButtonModule} from "./acme-button";

@NgModule({
    imports: [AcmeButtonModule],
    exports: [AcmeButtonModule],
})
export class ComponentsModule {
}
