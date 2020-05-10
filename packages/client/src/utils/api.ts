const serverUrl = process.env.VUE_APP_SERVER;

export async function get(route: string) {
    const response = await doFetch(route);
    return response.json();
}
export async function ping(route: string) {
    await doFetch(route);
}

async function doFetch(route: string) {
    const response = await fetch(serverUrl + route);
    if (response.status !== 200) {
        console.log(response);
        throw new Error(`Error while fetching the server: ${response.status}`);
    }
    return response;
}
