import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGeneroComponent } from './usuario-genero.component';

describe('UsuarioGeneroComponent', () => {
  let component: UsuarioGeneroComponent;
  let fixture: ComponentFixture<UsuarioGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioGeneroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
