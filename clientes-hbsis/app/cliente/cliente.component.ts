import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cliente', 
    templateUrl: './cliente.component.html',
})
export class ClienteComponent { 

    @Input() Codigo: string;
    @Input() Nome: string;
    @Input() CPF: string;
    @Input() Telefone: string;
    ID: string;

}