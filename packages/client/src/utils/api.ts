import { addQuery, Query } from "@/utils/utils/addQuery";
import { µ } from "@alex/micro";

const serverUrl = process.env.VUE_APP_SERVER;

interface Options {
    query?: Query;
}

export const api = {
    async get(route: string, options?: Options) {
        const response = await doFetch(route, options);
        return response.json();
    },
    async ping(route: string) {
        await doFetch(route);
    },
};

async function doFetch(route: string, options?: Options) {
    return µ.retry(
        async () => {
            const response = await fetch(formatUrl());
            handleError(response);
            return response;
        },
        { max: 10, delay: 300 }
    );

    function formatUrl(): string {
        return addQuery(serverUrl + route, options?.query || {});
    }
    function handleError(response: Response) {
        if (response.status === 200) return;
        throw new Error(`Error while fetching ${route}: ${response.status}`);
    }
}
