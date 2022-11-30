import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleExampleRoutingModule } from './feature-module-example-routing.module';
import { FeatureModuleExampleComponent } from './feature-module-example.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    FeatureModuleExampleComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleExampleRoutingModule
  ]
})
export class FeatureModuleExampleModule { }
