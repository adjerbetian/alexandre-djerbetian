import superTest from "supertest";
import { app } from "../app";
import { expect } from "./unit";

export * from "./unit";

export const api = {
    async get(route: string) {
        const res = await superTest(app).get(route);
        expect(res.status).to.equal(200);
        return { body: res.body };
    }
};
