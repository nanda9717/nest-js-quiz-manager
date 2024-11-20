import { DataSource } from 'typeorm';
import { Quiz } from './quiz.entity';

export const quizProviders = [
  {
    provide: 'QUIZ_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Quiz),
    inject: ['DATA_SOURCE'],
  },
];