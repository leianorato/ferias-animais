import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacaoCadastroHospPage } from './confirmacao-cadastro-hosp.page';

describe('ConfirmacaoCadastroHospPage', () => {
  let component: ConfirmacaoCadastroHospPage;
  let fixture: ComponentFixture<ConfirmacaoCadastroHospPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoCadastroHospPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
