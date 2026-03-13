import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateNurseDto } from './dto/create-nurse.dto';

@Injectable()
export class NursesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createNurseDto: CreateNurseDto) {
    const { userId, specialization, experienceYears } = createNurseDto;

    const user = await this.databaseService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User tidak ditemukan');
    }

    if (user.role !== 'NURSE') {
      throw new ForbiddenException(
        'Hanya user dengan role NURSE yang dapat membuat profil perawat',
      );
    }

    const existingProfile = await this.databaseService.nurseProfile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      throw new ConflictException('Profil perawat untuk user ini sudah ada');
    }

    return this.databaseService.nurseProfile.create({
      data: {
        userId,
        specialization,
        experienceYears,
        rating: 0.0,
        isVerified: false,
      },
    });
  }

  async findAll(
    filters: { name?: string; specialization?: string; experienceYears?: number } = {},
  ) {
    const { name, specialization, experienceYears } = filters;

    const whereClause: any = {};

    if (specialization) {
      whereClause.specialization = {
        contains: specialization,
        mode: 'insensitive',
      };
    }

    if (experienceYears !== undefined && !isNaN(experienceYears)) {
      whereClause.experienceYears = experienceYears;
    }

    if (name) {
      whereClause.user = {
        is: {
          fullName: {
            contains: name,
            mode: 'insensitive',
          },
        },
      };
    }

    const nurses = await this.databaseService.nurseProfile.findMany({
      where: whereClause,
      select: {
        id: true,
        specialization: true,
        experienceYears: true,
        rating: true,
        isVerified: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!nurses || nurses.length === 0) {
      throw new NotFoundException('Tidak ada perawat yang cocok dengan kriteria');
    }

    return nurses.map((nurse) => ({
      id: nurse.id,
      specialization: nurse.specialization,
      experienceYears: nurse.experienceYears,
      rating: nurse.rating,
      isVerified: nurse.isVerified,
      userId: nurse.user.id,
      fullName: nurse.user.fullName,
      email: nurse.user.email,
      phoneNumber: nurse.user.phoneNumber,
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} nurse`;
  }

  update(id: number, updateNurseDto) {
    return `This action updates a #${id} nurse`;
  }

  remove(id: number) {
    return `This action removes a #${id} nurse`;
  }
}
