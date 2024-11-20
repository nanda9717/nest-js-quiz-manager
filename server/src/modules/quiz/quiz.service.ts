import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
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
    // To get with questions
    //return await this.quizRepository.find({relations:{questions:true}});
  }

  async getQuizById(id: any): Promise<Quiz>{
    return await this.quizRepository.findOne({
      where: {
          id: id,
      },
      relations: {
        questions: true,
      }
  });
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }
}
