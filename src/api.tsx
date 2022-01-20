import axios from "axios";

export const get = (pageNumber: number) => {
    return axios.get(`http://localhost:4000/photos?_limit=33&_page=${pageNumber}`)
}
export const update = (photo: any) => {
    return axios.put(`http://localhost:4000/photos/${photo?.id}`, photo)
}

export const remove = (id: string) => {
    return axios.delete(`http://localhost:4000/photos/${id}`)
}
export const add = (photo: any) => {
    return axios.post(`http://localhost:4000/photos`, photo)
}