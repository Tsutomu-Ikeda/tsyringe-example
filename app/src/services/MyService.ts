import { injectable, inject } from "tsyringe";
import { IConfig } from "@/interfaces/IConfig.js";
import { ILogger } from "@/interfaces/ILogger";

@injectable()
export class MyService {
  constructor(
    @inject("Logger") private logger: ILogger,
    @inject("ConfigService") private config: IConfig
  ) { }

  getMessage() {
    this.logger.log("getMessage called");
    return `Hello from ${this.config.getAppName()}!`;
  }
}
