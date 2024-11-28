import { injectable, inject } from 'tsyringe';
import { IDatabase } from '@/interfaces/IDatabase.js';
import { ILogger } from '@/interfaces/ILogger.js';
import { InjectionTokens } from '@/container.js';

@injectable()
export class DatabaseService implements IDatabase {
  constructor(
    @inject(InjectionTokens.Logger) private logger: ILogger
  ) { }

  async connect(): Promise<void> {
    this.logger.log('Connecting to database...');
    // 実際の接続ロジック
  }

  async disconnect(): Promise<void> {
    this.logger.log('Disconnecting from database...');
    // 実際の切断ロジック
  }
}
