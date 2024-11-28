import "reflect-metadata";
import { container } from "tsyringe";
import { MyService } from "@/services/MyService.js";
import { InjectionTokens, register, resolve } from "@/container.js";
import { JSONLogger, Logger } from "@/infrastructure/Logger.js";
import { ConfigService } from "@/services/ConfigService.js";
import { SecondService } from "@/services/SecondService.js";

register.class(InjectionTokens.Logger, Logger);
register.class(InjectionTokens.ConfigService, ConfigService);

const myService = container.resolve(MyService);
console.log(myService.getMessage());

const logger = resolve(InjectionTokens.Logger);
logger.setContextId("1");

register.value(InjectionTokens.ConfigService, { getAppName: () => "My App", getEnvironment: () => "dev" });

const myService2 = container.resolve(MyService);
console.log(myService2.getMessage());

register.class(InjectionTokens.Logger, JSONLogger);

const secondService = container.resolve(SecondService);
console.log(secondService.getMessage());
