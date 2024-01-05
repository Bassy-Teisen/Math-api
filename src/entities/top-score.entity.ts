import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('top_scores')
export class TopScoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    user: string;

    @Column({ type: 'int' })
    score: number;
}
