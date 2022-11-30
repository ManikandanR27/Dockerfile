import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  moduleCopy:any ;
  moduleInformation : any = [ { moduleName: 'mani'},{ moduleName: 'Dinesh'},{ moduleName: 'Rama'},{ moduleName: 'Raghu'},{ moduleName: 'siva'},{ moduleName: 'loalchost'}]
  modil1: any;
  constructor() { }

  ngOnInit(): void {
    this.moduleCopy = this.moduleInformation;
    this.moduleInformation = this.moduleInformation.filter((data:any) => data.moduleName !== 'Dinesh' && data.moduleName !== 'Rama' );
  }
  onchange(man:any,event:any) {
    console.log(event);
    if(event.target.checked && man === 'mani') {
      this.moduleInformation = this.moduleCopy.filter((data:any) => data.moduleName !== 'Rama' );
      this.modil1 = this.moduleInformation;
    }
    else  if(event.target.checked && man !== 'mani') { 
      this.moduleInformation = this.modil1.filter((data:any) => data.moduleName !== 'Rama' );
    }
    else {
      this.moduleInformation = this.moduleCopy.filter((data:any) => data.moduleName !== 'Rama'&& data.moduleName !== 'Dinesh' );

    }
  }
}
