"use strict";
var router_1 = require('@angular/router');
var listagem_component_1 = require('./listagem/listagem.component');
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.js.map