import { injectable } from "tsyringe";
import { IConfig } from "@/interfaces/IConfig.js";

@injectable()
export class ConfigService implements IConfig {
  getAppName(): string {
    return "MyESMApp";
  }

  getEnvironment(): string {
    return "development";
  }
}
