import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'', redirectTo:'start',pathMatch:'full'},
    {path:'start',component:StartComponent,title:"Home"},
    {path:'about',component:AboutComponent,title:"About"},
    {path:'portfolio', component:PortfolioComponent,title:"Portfolio"},
    {path:'contact', component:ContactComponent,title:"Contact"},
    {path:'**',component:NotfoundComponent,title:"NotFound404"}
];
