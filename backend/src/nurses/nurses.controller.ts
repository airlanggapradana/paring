import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NursesService } from './nurses.service';
import { CreateNurseDto, CreateNurseSchema } from './dto/create-nurse.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

@Controller('nurses')
export class NursesController {
  constructor(private readonly nursesService: NursesService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(CreateNurseSchema))
    createNurseDto: CreateNurseDto,
  ) {
    return await this.nursesService.create(createNurseDto);
  }

  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('specialization') specialization?: string,
    @Query('experienceYears') experienceYears?: string,
  ) {
    return this.nursesService.findAll({
      name,
      specialization,
      experienceYears: experienceYears ? parseInt(experienceYears, 10) : undefined,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNurseDto) {
    return this.nursesService.update(+id, updateNurseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nursesService.remove(+id);
  }
}
