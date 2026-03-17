import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PaymentService } from 'src/payment/payment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, PaymentService],
})
export class AppointmentsModule {}
