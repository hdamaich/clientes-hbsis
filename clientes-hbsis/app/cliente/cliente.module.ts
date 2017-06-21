import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';
import { FiltroPorTitulo } from './cliente.pipes';

@NgModule({
    declarations: [ClienteComponent, FiltroPorTitulo],
    exports: [ClienteComponent, FiltroPorTitulo ],
    providers: [ ClienteService ]
})
export class ClienteModule { }