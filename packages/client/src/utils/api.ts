import { addQuery, Query } from "@/utils/utils/addQuery";

const serverUrl = process.env.VUE_APP_SERVER;

interface Options {
    query?: Query;
}

export async function get(route: string, options?: Options) {
    const response = await doFetch(route, options);
    return response.json();
}
export async function ping(route: string) {
    await doFetch(route);
}

async function doFetch(route: string, options?: Options) {
    const response = await fetch(formatUrl());
    handleError(response);
    return response;

    function formatUrl(): string {
        return addQuery(serverUrl + route, options?.query || {});
    }
    function handleError(response: Response) {
        if (response.status === 200) return;
        throw new Error(`Error while fetching ${route}: ${response.status}`);
    }
}
