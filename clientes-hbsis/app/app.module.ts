import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { routing } from './app.routes';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        ClienteModule,
    ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }