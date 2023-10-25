import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentTopicComponent } from './coment-topic.component';

describe('ComentTopicComponent', () => {
  let component: ComentTopicComponent;
  let fixture: ComponentFixture<ComentTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
