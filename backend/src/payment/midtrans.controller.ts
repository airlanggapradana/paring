import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MidtransService } from './midtrans.service';

@Controller('midtrans')
export class MidtransController {
  constructor(private readonly midtransService: MidtransService) {}

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  async handleMidtransNotification(@Body() payload: any) {
    // Kita lempar payload ke Service untuk diolah
    await this.midtransService.processNotification(payload);

    // Midtrans hanya butuh tahu bahwa kita menerima datanya dengan baik
    return { status: 'success', message: 'Webhook processed' };
  }
}
