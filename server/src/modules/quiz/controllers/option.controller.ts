import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/create-option.dto";

@Controller('/question/option')
export class OptionController{
    constructor(
        private optionService: OptionService,
        private questionService: QuestionService
    ){}

    @Post('')
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOption: CreateOptionDto){
        const question = await this.questionService.findQuestionById(createOption.questionId);
        const optionNew = await this.optionService.createOption(createOption, question);
        return optionNew;
    }
}