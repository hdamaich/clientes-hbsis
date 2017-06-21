import { Component } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html',

})
export class CadastroComponent {
    cliente: ClienteComponent = new ClienteComponent();
    meuForm: FormGroup;
    service: ClienteService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: ClienteService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;

        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {

            let id = params['id'];

            if (id) {

                this.service
                    .buscaPorId(id)
                    .subscribe(
                    cliente => this.cliente = cliente,
                    erro => console.log(erro)
                    );
            }

        });
        this.meuForm = fb.group({
            cpf: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$')])],
            codigo: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
            nome: ['', Validators.required],
            telefone: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{5}\-[0-9]{4}$')])]
        });
    }
    cadastrar(event: any) {
        this.service
            .cadastra(this.cliente)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.cliente = new ClienteComponent();
                if (!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));
        return false;
    }

}