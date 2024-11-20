import { Controller, Post, Body, UsePipes, ValidationPipe} from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { QuestionService } from '../services/question.service';
import { QuizService } from "../services/quiz.service";

@Controller('question')
export class QuestionController{

    constructor(private questionService: QuestionService, private quizService: QuizService){}

    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createNewQuestion(question, quiz);
    }

}