import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MarsRoverPhotosComponent } from './mars-rover-photos.component';
import { MarsRoverPhotosService } from './mars-rover-photos.service';

describe('MarsRoverPhotosComponent', () => {
  let component: MarsRoverPhotosComponent;
  let fixture: ComponentFixture<MarsRoverPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsRoverPhotosComponent ],
      imports: [HttpClientModule],
      providers: [MarsRoverPhotosService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoverPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
