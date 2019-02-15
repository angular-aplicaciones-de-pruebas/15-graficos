import { Component} from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent{
  // Doughnut
 public doughnutChartLabels:string[] = ['Argentina', 'Brazil', 'Uruguay'];
 public doughnutChartData:number[] = [350, 450, 100];
 public doughnutChartType:string = 'doughnut';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
 numeros_random(){
   this.doughnutChartData=[
     Math.random()*100,
     Math.random()*100,
     Math.random()*100
   ];

 }

}
