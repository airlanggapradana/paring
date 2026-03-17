import { Controller, Post, Param, Res, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Response } from 'express';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post(':appointmentId')
  async create(
    @Param('appointmentId') appointmentId: string,
    @Res() res: Response,
  ) {
    try {
      const token =
        await this.paymentService.createMidtransTransaction(appointmentId);
      return res.status(HttpStatus.OK).json({ token });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
