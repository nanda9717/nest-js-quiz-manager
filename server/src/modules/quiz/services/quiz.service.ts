import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class QuizService {

  constructor(
    @Inject('QUIZ_REPOSITORY')
    private quizRepository: Repository<Quiz>,
  ){}

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>>{
    const qb = this.quizRepository.createQueryBuilder('q');
    qb.leftJoinAndSelect("q.questions", "qt")
    .leftJoinAndSelect("qt.options", "qo")
    .orderBy('q.id', 'DESC');

    return paginate<Quiz>(qb, options);
  }

  async getAllQuiz():Promise<Quiz[]>{
    // By using join
    const users = await this.quizRepository
    .createQueryBuilder("q")
    .leftJoinAndSelect("q.questions", "qt")
    .leftJoinAndSelect("qt.options", "qo")
    // .skip(1)
    // .take(1)
    .getMany();
    //.getManyAndCount();
    return users;

    //return await this.quizRepository.find();

    // To get with questions
    //return await this.quizRepository.find({relations:{questions:true}});
  }

  async getQuizById(id: any): Promise<Quiz>{
    return await this.quizRepository.findOne({
      where: {
          id: id,
      },
      relations: {
        questions: {
          options: true
        }
      }
      // relations: {
      //   questions: true,
      // }
    });
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }
}
