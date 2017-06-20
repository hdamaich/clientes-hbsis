import { Component } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';
import { ClienteComponent } from '../cliente/cliente.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    clientes: ClienteComponent[] = [];
    service: ClienteService;
    mensagem: string = '';

    constructor(service: ClienteService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(r => {
                this.clientes = r; 
            });
    }


    remove(cliente: ClienteComponent) {
        this.service.remove(cliente)
            .subscribe(
            () => {
                let clientesRestantes = this.clientes.slice(0);
                let indice = clientesRestantes.indexOf(cliente);
                clientesRestantes.splice(indice);
                this.clientes = clientesRestantes;
                this.mensagem = "Cliente Removido com Sucesso";
            },
            erro => {
                console.log(erro);
                this.mensagem = "Não foi possivel remover o cliente";
            }
            );
    }
}