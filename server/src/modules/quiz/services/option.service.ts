import { Inject,Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionService{
    constructor(
        @Inject('OPTION_REPOSITORY')
        private optionRepository: Repository<Option>,
    ){}

    async createOption(option: any, question: Question){
        const newOption = await this.optionRepository.save({
            text: option.text,
            isCorrect: option.isCorrect
        });

        question.options = [...question.options, newOption];
        await question.save();
        return newOption;
    }

}