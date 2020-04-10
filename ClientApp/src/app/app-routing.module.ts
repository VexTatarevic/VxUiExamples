import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VxLoadingoverlayExample1Component } from './_lib/vx/ui/vx-loadingoverlay/examples/vx-loadingoverlay-example1/vx-loadingoverlay-example1.component';
import { ExampleDatapagerComponent } from './_lib/vx/ui/vx-datapager/example-datapager/example-datapager.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  // Vx Ui Examples
  { path: 'loading-overlay', component: VxLoadingoverlayExample1Component },
  { path: 'paged-search', component: ExampleDatapagerComponent },



  // Feature Modules
  { path: 'admin', loadChildren: () => import('./_modules/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
