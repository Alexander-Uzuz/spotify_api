export const BASE_URL = 'https://api.spotify.com/v1/'

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = '9309a5a8d84f49fb91991600cca1d8ed';
const redirectUri = "http://localhost:3000/home";
const scopes = ["user-library-read", "playlist-read-private",'user-follow-read'];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const request = async (url: string, data: any, token: string | undefined) => {
    const headersToken = token ? {Authorization: `Bearer ${token}`} : {}
    const headersMultiPart = typeof data.body === 'string' ? {"Content-type": "application/json;charset=utf-8"} : {}

    const response = await fetch(url, {
        ...data,
        headers: {
            ...headersToken,
            ...headersMultiPart,
        },
    });
    if (response.ok) {
        if (response.headers.get('Content-Length') === '0') {
            return true
        }
        const typeResponse = response.headers.get("Content-type");
        let result;
        if (typeResponse === 'aplication/text') {
            result = await response.text()
            return result
        }
        result = await response.json()
        return result;
    } else {
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("user");
            throw new Error("Unauthorized user");
        }
        if (response.status === 409) throw new Error('Already exists');
        else throw {status: response.status}
    }

}

export const get = (url: string, token?: string) => request(`${BASE_URL}${url}`, {method: "GET"}, token)

export const post = (url: string, body: string | FormData, token?: string) => {
    return request(`${BASE_URL}${url}`, {method: "POST", body}, token)
}
export const put = (url: string, body: string, token: string) => {
    return request(`${BASE_URL}${url}`, {method: "PUT", body}, token)
}
export const remove = (url: string, token: string) => request(`${BASE_URL}${url}`, {method: "DELETE"}, token)