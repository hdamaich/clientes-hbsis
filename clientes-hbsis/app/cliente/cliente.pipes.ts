import { Pipe, PipeTransform } from '@angular/core';
import { ClienteComponent } from './cliente.component';
 
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform { 

    transform(clientes: ClienteComponent[], digitado: string): ClienteComponent[] {

        digitado = digitado.toLowerCase();
        return clientes.filter(cliente => cliente.Nome.toLowerCase().includes(digitado));
    }
}