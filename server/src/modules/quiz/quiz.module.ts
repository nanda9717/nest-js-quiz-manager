import { Module } from '@nestjs/common';
import { QuizController } from 'src/modules/quiz/controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { quizProviders } from './providers/quiz.providers';
import { DatabaseModule } from 'src/database/database.module';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { questionProviders } from './providers/question.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [QuizController, QuestionController],
    providers: [...quizProviders, ...questionProviders, QuizService, QuestionService]
})
export class QuizModule {
}
