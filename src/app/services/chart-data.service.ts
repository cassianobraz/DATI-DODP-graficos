import { Injectable } from '@angular/core';
import { Question } from '../interfaces/questionInterface';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  private readonly questions2021: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle e Análise Processual da sua Secretaria já está definida e publicada no DOM?',
      dataValues: [16, 1, 1],
    },
    {
      text: '2 - O quantitativo de servidores lotados na Divisão de Controle e Análise Processual de sua Secretaria atende à demanda existente?',
      dataValues: [11, 1, 6],
    },
    {
      text: '3 - O vínculo com o Município, dos servidores lotados na Divisão de Controle e Análise Processual, é preferencialmente efetivo?',
      dataValues: [9, 4, 5],
    },
    {
      text: '3 - O vínculo com o Município, dos servidores lotados na Divisão de Controle e Análise Processual, é preferencialmente efetivo?',
      dataValues: [9, 4, 5],
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  private readonly questions2022: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '2 - O quantitativo de servidores...',
      dataValues: [11, 1, 6],
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  private readonly questions2023: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '2 - O quantitativo de servidores...',
      dataValues: [11, 1, 6],
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  constructor() {}

  getQuestions(year: string): Question[] {
    switch (year) {
      case '2021':
        return this.questions2021;
      case '2022':
        return this.questions2022;
      case '2023':
        return this.questions2023;
      default:
        console.warn(`Data from year ${year} not found!`);
        return [];
    }
  }
}