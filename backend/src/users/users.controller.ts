import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Res,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { Response } from 'express';
import { Role } from 'generated/prisma/enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateUserSchema))
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return res.status(201).json({
      message: 'User created successfully',
      data: await this.usersService.create(createUserDto),
    });
  }

  @Get()
  findAll(@Query('role') role?: string, @Query('name') name?: string) {
    if (role && !Object.values(Role).includes(role as Role)) {
      throw new BadRequestException({
        statusCode: 400,
        message: `Invalid role. Valid values: ${Object.values(Role).join(', ')}`,
      });
    }
    return this.usersService.findAll(role as Role | undefined, name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    return res.status(200).json({
      message: 'User found successfully',
      data: await this.usersService.findOne(id),
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
