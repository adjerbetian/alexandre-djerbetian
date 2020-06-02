export function asEntityFactory<DTO, Entity extends DeepReadonly<DTO>>(builder: (dto: DTO) => Entity) {
    return builder;
}

type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};
