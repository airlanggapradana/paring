import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { NursesService } from './nurses.service';
import { CreateNurseDto, CreateNurseSchema } from './dto/create-nurse.dto';
import { UpdateNurseDto, UpdateNurseSchema } from './dto/update-nurse.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { Response } from 'express';

@Controller('nurses')
export class NursesController {
  constructor(private readonly nursesService: NursesService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(CreateNurseSchema))
    @Res()
    res: Response,
    createNurseDto: CreateNurseDto,
  ) {
    const result = await this.nursesService.create(createNurseDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'Perawat berhasil dibuat',
      data: result,
    });
  }

  @Get()
  async findAll(
    @Res() res: Response,
    @Query('name') name?: string,
    @Query('specialization') specialization?: string,
    @Query('experienceYears') experienceYears?: string,
  ) {
    const result = await this.nursesService.findAll({
      name,
      specialization,
      experienceYears: experienceYears
        ? parseInt(experienceYears, 10)
        : undefined,
    });
    return res.status(HttpStatus.OK).json({
      message: 'Perawat berhasil ditemukan',
      data: result,
    });
  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    const result = await this.nursesService.findOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Perawat berhasil ditemukan',
      data: result,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Res() res: Response,
    @Body(new ZodValidationPipe(UpdateNurseSchema))
    updateNurseDto: UpdateNurseDto,
  ) {
    const result = await this.nursesService.update(id, updateNurseDto);
    return res.status(HttpStatus.OK).json({
      message: 'Perawat berhasil diupdate',
      data: result,
    });
  }

  @Delete(':id')
  async remove(@Res() res: Response, @Param('id') id: string) {
    const result = await this.nursesService.remove(id);
    return res.status(HttpStatus.OK).json({
      message: 'Perawat berhasil dihapus',
      data: result,
    });
  }
}
