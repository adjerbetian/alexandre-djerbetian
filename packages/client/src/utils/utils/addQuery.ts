export type Query = Record<string, string | string[]>;

export function addQuery(stringUrl: string, query: Query) {
    const url = new URL(stringUrl);
    Object.entries(query).forEach(([key, value]) => {
        if (typeof value === "string") appendParam(value);
        if (Array.isArray(value)) value.forEach(appendParam);

        function appendParam(v: string) {
            url.searchParams.append(key, v);
        }
    });
    return url.toString();
}
