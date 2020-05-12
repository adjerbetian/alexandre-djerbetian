import { buildRouter } from "./router";
import { buildDomain } from "./domain";
import * as repositories from "./repositories";
import { buildControllers } from "./controllers";

const domain = buildDomain(repositories);
const controllers = buildControllers(domain);

export const app = buildRouter(controllers);
