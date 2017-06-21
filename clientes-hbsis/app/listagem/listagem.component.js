"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cliente_service_1 = require('../cliente/cliente.service');
var ListagemComponent = (function () {
    function ListagemComponent(service) {
        var _this = this;
        this.clientes = [];
        this.mensagem = '';
        this.service = service;
        this.service
            .lista()
            .subscribe(function (r) {
            _this.clientes = r;
        });
    }
    ListagemComponent.prototype.remove = function (cliente) {
        var _this = this;
        this.service.remove(cliente)
            .subscribe(function () {
            var clientesRestantes = _this.clientes.slice(0);
            var indice = clientesRestantes.indexOf(cliente);
            clientesRestantes.splice(indice);
            _this.clientes = clientesRestantes;
            _this.mensagem = "Cliente Removido com Sucesso";
        }, function (erro) {
            console.log(erro);
            _this.mensagem = "Não foi possivel remover o cliente";
        });
    };
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map