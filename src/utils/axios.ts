import axios, { AxiosError } from 'axios'

export const getStringFromAxiosError = (error: any) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<string>
        if (axiosError.response) {
            return axiosError.response.data
        } else {
            return axiosError.message
        }
    } else {
        return 'Неизвестная ошибка'
    }
}
