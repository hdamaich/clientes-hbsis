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
var cliente_component_1 = require('../cliente/cliente.component');
var forms_1 = require('@angular/forms');
var cliente_service_1 = require('../cliente/cliente.service');
var router_1 = require('@angular/router');
var CadastroComponent = (function () {
    function CadastroComponent(service, fb, route, router) {
        var _this = this;
        this.cliente = new cliente_component_1.ClienteComponent();
        this.mensagem = '';
        this.service = service;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .buscaPorId(id)
                    .subscribe(function (cliente) { return _this.cliente = cliente; }, function (erro) { return console.log(erro); });
            }
        });
        this.meuForm = fb.group({
            cpf: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$')])],
            codigo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]+$')])],
            nome: ['', forms_1.Validators.required],
            telefone: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{5}\-[0-9]{4}$')])]
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        this.service
            .cadastra(this.cliente)
            .subscribe(function (res) {
            _this.mensagem = res.mensagem;
            _this.cliente = new cliente_component_1.ClienteComponent();
            if (!res.inclusao)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
        return false;
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html',
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map