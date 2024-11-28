import { injectable, singleton } from 'tsyringe';
import { ILogger } from '@/interfaces/ILogger.js';

@injectable()
export class Logger implements ILogger {
  constructor(private contextId: string = "0") {
    console.log(`Logger created with contextId ${contextId}`);
  }

  log(message: string): void {
    console.log(`${this.context()} ${message}`);
  }

  error(message: string, error?: Error): void {
    console.error(`${this.context()} ERROR ${message}`, error);
  }

  setContextId(contextId: string): void {
    console.log(`Setting contextId to ${contextId}`);
    this.contextId = contextId;
  }

  private context(): string {
    return `[${new Date().toISOString()}] [context=${this.contextId}]`;
  }
}

@injectable()
export class JSONLogger implements ILogger {
  constructor(private contextId: string = "0") {
    console.log(`JSONLogger created with contextId ${contextId}`);
  }

  log(message: string): void {
    console.log(JSON.stringify({ ...this.context(), message }));
  }

  error(message: string, error?: Error): void {
    console.error(JSON.stringify({ ...this.context(), message, error }));
  }

  setContextId(contextId: string): void {
    console.log(`Setting contextId to ${contextId}`);
    this.contextId = contextId;
  }

  private context(): Object {
    return {
      timestamp: new Date().toISOString(),
      contextId: this.contextId,
    }
  }
}
