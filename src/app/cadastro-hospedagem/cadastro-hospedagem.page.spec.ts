import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroHospedagemPage } from './cadastro-hospedagem.page';

describe('CadastroHospedagemPage', () => {
  let component: CadastroHospedagemPage;
  let fixture: ComponentFixture<CadastroHospedagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHospedagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
