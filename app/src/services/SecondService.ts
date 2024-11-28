import { injectable, inject } from "tsyringe";
import { IConfig } from "@/interfaces/IConfig.js";
import { ILogger } from "@/interfaces/ILogger.js";

@injectable()
export class SecondService {
  constructor(
    @inject("Logger") private logger: ILogger,
    @inject("ConfigService") private config: IConfig
  ) { }

  getMessage() {
    this.logger.log("getMessage called");
    return `Hello from SecondService! appName: ${this.config.getAppName()}`;
  }
}
