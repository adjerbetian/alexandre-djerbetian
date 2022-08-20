interface ValidationService {
    assertIsId: (id: string | string[]) => asserts id is string;
}

export const validationService: ValidationService = {
    assertIsId(id) {
        if (Array.isArray(id)) {
            throw new Error(`Expected single id but got ${id}`);
        }
    },
};
