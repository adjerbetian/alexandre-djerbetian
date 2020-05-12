export class NotFound extends Error {
    constructor(id: any) {
        super();
        this.message = `The object ${id} was not found`;
    }
}
