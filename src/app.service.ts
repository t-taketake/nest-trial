import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Samoedo } from './entity/samoedoentity';

@Injectable()
export class AppService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Samoedo)
    private samoedoRepository: Repository<Samoedo>,
  ) {}

  getHello(): string {
    var message = 'Hello World!!';
    return 'Hello World!!';
  }

  getHellow(): string {
    return 'Hellow!!';
  }

  getDate(): string {
    return new Date().toLocaleDateString('ja-JP');
  }

  async testDatabase(): Promise<string> {
    try {
      // 簡単なクエリを実行してみる
      const samoedos = await this.samoedoRepository.find();
      console.log(samoedos);
      return JSON.stringify(samoedos);
    } catch (error) {
      return `データベース接続エラー: ${error.message}`;
    }
  }

  // CodeQLテスト
  async insecureQuery(userInput: string): Promise<any> {
    // SQLインジェクションのリスクがあるコード
    const rawQuery = `SELECT * FROM samoedo WHERE name = '${userInput}'`;
    return await this.dataSource.query(rawQuery);
  }
}
