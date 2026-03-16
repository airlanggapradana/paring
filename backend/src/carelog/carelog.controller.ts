import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { CarelogService } from './carelog.service';
import {
  CreateCarelogDto,
  createCarelogSchema,
} from './dto/create-carelog.dto';
import { UpdateCarelogDto, updateCarelogSchema } from './dto/update-carelog.dto';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { Response } from 'express';

@Controller('carelog')
export class CarelogController {
  constructor(private readonly carelogService: CarelogService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createCarelogSchema))
    createCarelogDto: CreateCarelogDto,
    @Res() res: Response,
  ) {
    const result = await this.carelogService.create(createCarelogDto);
    return res.status(201).json({
      message: 'Carelog created successfully',
      data: result,
    });
  }

  @Get()
  async findAll(
    @Res() res: Response,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNumber = parseInt(page || '1', 10);
    const limitNumber = parseInt(limit || '10', 10);
    const result = await this.carelogService.findAll(pageNumber, limitNumber);

    return res.status(200).json({
      message: 'Carelogs retrieved successfully',
      ...result,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.carelogService.findOne(id);
    return res.status(200).json({
      message: 'Carelog retrieved successfully',
      data: result,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateCarelogSchema))
    updateCarelogDto: UpdateCarelogDto,
    @Res() res: Response,
  ) {
    const result = await this.carelogService.update(id, updateCarelogDto);
    return res.status(200).json({
      message: 'Carelog updated successfully',
      data: result,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.carelogService.remove(id);
    return res.status(200).json({
      message: 'Carelog deleted successfully',
      data: result,
    });
  }
}
