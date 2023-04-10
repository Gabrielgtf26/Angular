import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'sobre', component:SobreComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'inserir-usuario', component:InserirUsuarioComponent},
  {path:'listar-usuario', component:ListarUsuarioComponent},
  {path:'editar-usuario', component:EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
