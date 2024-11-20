import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {

  constructor(
    @Inject('QUIZ_REPOSITORY')
    private quizRepository: Repository<Quiz>,
  ){}

  async getAllQuiz(){
    return await this.quizRepository.find();
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }
}
