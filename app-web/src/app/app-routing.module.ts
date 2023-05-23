import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importando os componentes
import { HomeComponent } from './page/home/home.component';
import { ContatoComponent } from './page/contato/contato.component';
import { MenuComponent } from './page/menu/menu.component';
import { SobreComponent } from './page/sobre/sobre.component';
HomeComponent
ContatoComponent
MenuComponent
SobreComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
