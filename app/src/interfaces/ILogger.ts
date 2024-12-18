export interface ILogger {
  log(message: string): void;
  error(message: string, error?: Error): void;
  setContextId(contextId: string): void;
}
