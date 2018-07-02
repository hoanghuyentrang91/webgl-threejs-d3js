import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { Ex1GlobeComponent } from './ex1-globe/ex1-globe.component';
import { Ex2AviatorGameComponent } from './ex2-aviator-game/ex2-aviator-game.component';
import { Ex0CubeComponent } from './ex0-cube/ex0-cube.component';


const appRoutes: Routes = [
  { path: 'ex0-cube', component: Ex0CubeComponent},
  { path: 'ex1-globe', component: Ex1GlobeComponent },
  { path: 'ex2-aviator-game', component: Ex2AviatorGameComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    Ex1GlobeComponent,
    Ex2AviatorGameComponent,
    Ex0CubeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
