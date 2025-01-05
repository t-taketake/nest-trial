import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationService {
  calculate(operation: string, num1: number, num2: number): string {
    let result: number;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      default:
        return 'Invalid operation';
    }

    return `The result is ${result}`;
  }
}
