import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FeatureModuleExampleComponent } from './feature-module-example.component';

const routes: Routes = [
  // { path: '', component: FeatureModuleExampleComponent },

{ path: '', component: DemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleExampleRoutingModule { }
