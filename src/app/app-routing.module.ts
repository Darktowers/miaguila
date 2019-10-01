import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RideComponent } from './ride/ride.component';


const routes: Routes = [
  { path: 'ride', component: RideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
