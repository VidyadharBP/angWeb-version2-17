import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponent } from './features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesComponent,BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
