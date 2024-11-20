import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {

  constructor(
    @Inject('QUESTION_REPOSITORY')
    private questionRepository: Repository<Question>,
  ){}

  async createNewQuestion(question: CreateQuestionDto, quiz: Quiz){
    const newQuestion = await this.questionRepository.save(
        {question: question.question}
    );

    quiz.questions = [...quiz.questions, newQuestion];
    quiz.save();

    return newQuestion;

  }
}
