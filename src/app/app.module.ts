import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MapComponent } from './map/map.component';
import { RideComponent } from './ride/ride.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MapComponent,
    RideComponent,
    RideDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBg2sUzi4_IMRUxAfKloz1ihJQKjdSeadI'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
