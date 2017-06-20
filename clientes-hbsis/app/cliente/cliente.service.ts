import { Http, Headers, Response } from '@angular/http';
import { ClienteComponent } from './cliente.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

    http: Http;
    headers: Headers;
    url: string = 'api/cliente';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(cliente: ClienteComponent): Observable<MensagemCadastro> {

        if (cliente.ID) {

            return this.http
                .put(this.url + '/' + cliente.ID, JSON.stringify(cliente), { headers: this.headers })
                .map(() => new MensagemCadastro('Cliente alterado com sucesso', false));

        } else {

            return this.http
                .post(this.url, JSON.stringify(cliente), { headers: this.headers })
                .map(() => new MensagemCadastro('Cliente incluído com sucesso', true));

        }

    }

    lista(): Observable<ClienteComponent[]> {

        return this.http
            .get(this.url)
            .map(res => res.json());

    }

    remove(cliente: ClienteComponent): Observable<Response> {

        return this.http.delete(this.url + '/' + cliente.ID);
    }

     buscaPorId(id: string): Observable<ClienteComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }

}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {

        return this._inclusao;
    }

}
