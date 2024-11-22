export const compareBackendUrl = (url: string) => {
    return new URL(url, process.env.BACKEND_URL).toString()
}
