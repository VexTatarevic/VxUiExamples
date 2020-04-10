import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { VxLoadingoverlayModule } from './_lib/vx/ui/vx-loadingoverlay/vx-loadingoverlay.module';
import { VxDatapagerModule } from './_lib/vx/ui/vx-datapager/vx-datapager.module';

// Partials
import { TopNavComponent } from './partials/top-nav/top-nav.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// Vx Ui Examples
import { VxLoadingoverlayExample1Component } from './_lib/vx/ui/vx-loadingoverlay/examples/vx-loadingoverlay-example1/vx-loadingoverlay-example1.component';
import { ExampleDatapagerComponent } from './_lib/vx/ui/vx-datapager/example-datapager/example-datapager.component';

@NgModule({
  declarations: [
    AppComponent,

    // Partials
    TopNavComponent,

    // Pages
    HomeComponent,
    AboutComponent,
    ContactComponent,

    // VxUi Examples
    VxLoadingoverlayExample1Component,
    ExampleDatapagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Vx Ui
    VxLoadingoverlayModule,
    VxDatapagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
