import{NgModule} from '@angular/core'
import { RouterModule,Routes} from '@angular/router'
import { AgregarComponent } from './utl/agregar/agregar.component';

const routes:Routes=[ //Agregar enlaces para ver vistas de las páginas
    {path:'', redirectTo:'/home',pathMatch:'full'},
    //{path:'home', component: HomeComponent},
    {path:'Agregar', component: AgregarComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}