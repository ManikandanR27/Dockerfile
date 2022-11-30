import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModuleExampleComponent } from './feature-module-example.component';

describe('FeatureModuleExampleComponent', () => {
  let component: FeatureModuleExampleComponent;
  let fixture: ComponentFixture<FeatureModuleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureModuleExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureModuleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
