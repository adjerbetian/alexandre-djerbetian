import { createSandbox } from "sinon";

export const sandbox = createSandbox();
beforeEach(() => sandbox.reset());
