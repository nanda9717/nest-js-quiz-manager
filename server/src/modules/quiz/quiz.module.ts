import { Module } from '@nestjs/common';
import { QuizController } from 'src/modules/quiz/quiz.controller';
import { QuizService } from './quiz.service';

@Module({
    controllers: [QuizController],
    providers: [QuizService]
})
export class QuizModule {
}
