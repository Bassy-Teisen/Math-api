import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopScoresController } from './controllers/top-scores/top-scores.controller';
import { TopScoresService } from './services/top-scores/top-scores.service';
import { TopScoreEntity } from './entities/top-score.entity'; // Import your entity

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DATABASE_HOST'),
                port: configService.get<number>('DATABASE_PORT'),
                username: configService.get('DATABASE_USERNAME'),
                password: configService.get('DATABASE_PASSWORD'),
                database: configService.get('DATABASE_NAME'),
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: configService.get<boolean>('DATABASE_SYNCHRONIZE'),
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([TopScoreEntity]), // Include this line
        // ... other modules if necessary
    ],
    controllers: [AppController, TopScoresController],
    providers: [AppService, TopScoresService],
})
export class AppModule {}
