import { Module } from '@nestjs/common';
import { QuizController } from 'src/modules/quiz/quiz.controller';
import { QuizService } from './quiz.service';
import { quizProviders } from './quiz.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [QuizController],
    providers: [...quizProviders, QuizService]
})
export class QuizModule {
}
