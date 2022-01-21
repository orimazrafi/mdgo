import axios from "axios";
const baseUrl = 'http://localhost:4000/photos'

export const get = (pageNumber: number) => {
    return axios.get(`${baseUrl}?_limit=33&_page=${pageNumber}`)
}
export const update = (photo: any) => {
    return axios.put(`${baseUrl}/${photo?.id}`, photo)
}

export const remove = (id: string) => {
    return axios.delete(`${baseUrl}/${id}`)
}
export const add = (photo: any) => {
    return axios.post(`${baseUrl}`, photo)
}