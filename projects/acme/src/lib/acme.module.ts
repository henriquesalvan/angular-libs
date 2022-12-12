import {NgModule} from '@angular/core';
import {ComponentsModule} from "./components";

@NgModule({
    imports: [ComponentsModule],
    exports: [ComponentsModule],
    declarations: []
})
export class AcmeModule {
}
