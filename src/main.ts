import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { exec } from 'child_process';
import * as crypto from 'crypto';
import fetch from 'node-fetch';

class SecurityTest {
  getApiKey(): string {
    // ハードコーディングされた機密情報
    const apiKey = 'sk_test_51H...your_secret_key';
    return apiKey;
  }

  async runCommand(userInput: string): Promise<void> {
    // 任意コマンドが実行される可能性がある
    exec(`ls ${userInput}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  }

  generateHtml(userInput: string): string {
    // XSSの可能性のあるレスポンス
    return `<html><body>Hello ${userInput}</body></html>`;
  }

  hashWithMD5(data: string): string {
    const hash = crypto.createHash('md5').update(data).digest('hex');
    return hash;
  }

  async insecureHttpRequest(): Promise<void> {
    const res = await fetch('http://example.com/api/data');
    const json = await res.json();
    console.log(json);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  await app.listen(3000);

  // テスト用呼び出し（本番では削除してOK）
  const tester = new SecurityTest();
  console.log(tester.getApiKey());
  tester.runCommand('..'); // コマンドインジェクションテスト
  console.log(t
