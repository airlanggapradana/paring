import { Module } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { NursesController } from './nurses.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NursesController],
  providers: [NursesService],
})
export class NursesModule {}
