import { container } from 'tsyringe';
import { ILogger } from '@/interfaces/ILogger.js';
import { IConfig } from '@/interfaces/IConfig.js';
import { IDatabase } from '@/interfaces/IDatabase.js';

export enum InjectionTokens {
  Logger = 'Logger',
  ConfigService = 'ConfigService',
  DatabaseService = 'DatabaseService',
}

export interface DIContainer {
  [InjectionTokens.Logger]: ILogger;
  [InjectionTokens.ConfigService]: IConfig;
  [InjectionTokens.DatabaseService]: IDatabase;
}

export const register = {
  value<K extends keyof DIContainer>(
    token: K,
    value: DIContainer[K]
  ) {
    container.register(token, { useValue: value });
  },
  class<K extends keyof DIContainer>(
    token: K,
    useClass: new () => DIContainer[K]
  ) {
    container.register(token, { useClass });
  },
}

export const resolve = <K extends keyof DIContainer>(
  token: K
): DIContainer[K] => container.resolve(token);

export const resolveService = (token: any) => container.resolve(token);
