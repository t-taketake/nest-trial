import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculationService } from './calculation.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly calculationService: CalculationService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('date')
  getDate(): string {
    return this.appService.getDate();
  }

  @Get('test-db')
  async testDatabase(): Promise<string> {
    return await this.appService.testDatabase();
  }

  @Get('hellow')
  getHellow(): string {
    return this.appService.getHellow();
  }

  @Get('calculate')
  calculate(
    @Query('operation') operation: string,
    @Query('num1') num1: string,
    @Query('num2') num2: string
  ): string {
    return this.calculationService.calculate(
      operation,
      parseFloat(num1),
      parseFloat(num2),
    );
  }
}
