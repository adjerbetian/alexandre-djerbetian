const serverUrl = process.env.VUE_APP_SERVER;

export const api = {
    async get(route: string): Promise<any> {
        console.log(serverUrl + route);
        const response = await fetch(serverUrl + route);
        if (response.status !== 200) {
            console.log(response);
            throw new Error(`Error while fetching the server: ${response.status}`);
        }
        return response.json();
    }
};
