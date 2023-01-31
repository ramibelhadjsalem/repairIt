import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repairIt';
  loadingRouteConfig = false
  constructor(private route:Router){
    this.route.events.subscribe(event=>{
      console.log("loading event",event);
      
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      }
      if (event instanceof RouteConfigLoadEnd) {
     
        this.loadingRouteConfig = false;
      }
        
    
    })
  }
  
}
