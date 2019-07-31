import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilasComponenteComponent } from './filas-componente/filas-componente.component';
import { CriarFilaComponent } from './criar-fila/criar-fila.component';
import { SobreComponent } from './sobre/sobre.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { DetalheChamadoComponent } from './detalhe-chamado/detalhe-chamado.component';

const routes: Routes = [
    {path: 'filas', component: FilasComponenteComponent},
    {path: '', redirectTo: 'filas', pathMatch: 'full'},
    {path: 'criar-fila', component: CriarFilaComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'chamados/:id', component: ChamadosComponent},
    {path: 'chamados/detalhes/:id', component: DetalheChamadoComponent},
    {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}