import { injectable, inject } from "tsyringe";
import { DIContainer, InjectionTokens } from "@/container";

@injectable()
export class MyService {
  constructor(
    @inject(InjectionTokens.Logger) private logger: DIContainer[InjectionTokens.Logger],
    @inject(InjectionTokens.ConfigService) private config: DIContainer[InjectionTokens.ConfigService]
  ) { }

  getMessage() {
    this.logger.log("getMessage called");
    return `Hello from ${this.config.getAppName()}!`;
  }
}
