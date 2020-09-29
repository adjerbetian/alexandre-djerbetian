import { Request, Response } from "express";

export function asControllers<T extends { [name: string]: Controller }>(
    controllers: T
): T {
    return controllers;
}

interface Controller {
    (req: Request, res: Response): void;
}
