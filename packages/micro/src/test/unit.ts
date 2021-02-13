import { use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { createSandbox } from "sinon";

export const sandbox = createSandbox();
beforeEach(() => sandbox.restore());

use(chaiAsPromised);
export { expect } from "chai";
