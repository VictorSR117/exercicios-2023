import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseComentComponent } from './response-coment.component';

describe('ResponseComentComponent', () => {
  let component: ResponseComentComponent;
  let fixture: ComponentFixture<ResponseComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseComentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
