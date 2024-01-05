// create-top-score.dto.ts

export class CreateTopScoreDto {
    user: string;
    score: number;
}

export interface TopScore {
    id: number;
    user: string;
    score: number;
}
