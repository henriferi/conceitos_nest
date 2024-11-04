import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller('home')
export class AppController {
  // constructor(private readonly appService: AppService{}

  @Get('hello')
  getHello(): string {
    return 'qualquer coisa.';
  }

  @Get('exemplo')
  exemplo() {
    return 'Exemplo de rota.';
  }
}
