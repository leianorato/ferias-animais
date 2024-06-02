import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacaoCadastroPetPage } from './confirmacao-cadastro-pet.page';

describe('ConfirmacaoCadastroPetPage', () => {
  let component: ConfirmacaoCadastroPetPage;
  let fixture: ComponentFixture<ConfirmacaoCadastroPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoCadastroPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
