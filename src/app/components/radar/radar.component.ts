import { Component} from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent{
  public radarChartLabels:string[] = ['Comiendo', 'Bebiendo', 'Durmiendo', 'Diseñando', 'Codeando', 'Andando En Bicicleta', 'Corriendo'];

 public radarChartData:any = [
   {data: [65, 59, 90, 81, 56, 55, 40], label: 'Argentina'},
   {data: [28, 48, 40, 19, 96, 27, 100], label: 'Brazil'}
 ];
 public radarChartType:string = 'radar';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }



}
