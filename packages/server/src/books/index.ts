import { buildDomain } from "./useCases";
import * as repositories from "./repositories";
import { buildControllers } from "./controllers";

const domain = buildDomain(repositories);
export const bookControllers = buildControllers(domain);
