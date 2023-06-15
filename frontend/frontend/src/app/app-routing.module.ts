import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path:'',redirectTo: 'producto',pathMatch:'full'}, //me redirecciona a page a si la url es vacia en el navegador
  {path:'producto',component:ProductoComponent},
  {path:'producto-form/:id',component:ProductoFormComponent},
  {path:'transaccion',component:TransaccionComponent},
  {path:'transaccion-form/0',component:TransaccionFormComponent},
  {path:'ticket',component:TicketComponent},
   {path:'ticket-form/:id',component:TicketFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
