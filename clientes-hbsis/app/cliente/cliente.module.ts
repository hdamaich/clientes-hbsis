import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';

@NgModule({
    declarations: [ ClienteComponent ],
    exports: [ ClienteComponent ],
    providers: [ ClienteService ]
})
export class ClienteModule { }