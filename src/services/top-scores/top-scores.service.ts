import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTopScoreDto, TopScore } from 'src/dto/create-top-score.dto';
import { TopScoreEntity } from 'src/entities/top-score.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopScoresService {
    constructor(
        @InjectRepository(TopScoreEntity)
        private topScoresRepository: Repository<TopScoreEntity>,
    ) {}

    async findAll(): Promise<TopScoreEntity[]> {
        return this.topScoresRepository.find({
            order: {
                score: 'DESC',
            },
            take: 10,
        });
    }

    create(createTopScoreDto: CreateTopScoreDto): Promise<TopScoreEntity> {
        const newScore = this.topScoresRepository.create(createTopScoreDto);
        return this.topScoresRepository.save(newScore);
    }

    async findTopScores(): Promise<TopScore[]> {
        // implement logic to query the database and return the top 5 scores
        return this.topScoresRepository.find({
            order: {
                score: 'DESC',
            },
            take: 5,
        });
    }
}
