import { Module } from '@nestjs/common';
import { QuizController } from 'src/modules/quiz/quiz.controller';
import { QuizService } from './quiz.service';
import { quizProviders } from './quiz.providers';
import { DatabaseModule } from 'src/database/database.module';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { questionProviders } from './question.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [QuizController, QuestionController],
    providers: [...quizProviders, ...questionProviders, QuizService, QuestionService]
})
export class QuizModule {
}
