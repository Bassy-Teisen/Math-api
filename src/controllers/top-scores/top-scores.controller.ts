import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTopScoreDto, TopScore } from 'src/dto/create-top-score.dto';
import { TopScoresService } from 'src/services/top-scores/top-scores.service';

@Controller('top-scores')
export class TopScoresController {
    constructor(private readonly topScoresService: TopScoresService) {}

    @Get()
    async getTopScores(): Promise<TopScore[]> {
        return this.topScoresService.findTopScores();
    }

    @Post()
    create(@Body() createTopScoreDto: CreateTopScoreDto) {
        return this.topScoresService.create(createTopScoreDto);
    }
}
