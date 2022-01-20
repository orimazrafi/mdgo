import * as Interface from "./interface" ;
import {  useMutation  } from "react-query";
import * as api from "./api"




export const useAddPhoto = (queryClient: any, pageNumber: any) => {
    const { mutate } = useMutation(api.add, {
        onSuccess: (_data, id) => {
            queryClient.setQueryData(['photos', pageNumber], (old: any) => {
                const temp = old?.data.filter((o: Interface.Photoprops) => o.id !== id)
                return {
                    data: [...temp]
                }
            })
        }

    })
    return { mutate }
}
export const useUpdatePhoto = (queryClient: any, pageNumber: any) => {
    const { mutate } = useMutation(api.update, {
        onSuccess: (data) => {
            queryClient.setQueryData(['photos', pageNumber], (old: any) => {
                const index = old?.data.findIndex((o: Interface.Photoprops) => o.id === data?.data?.id)
                const temp = [...old?.data]
                temp[index] = data?.data
                return {
                    ...old,
                    data: [...temp]
                }
            })
        },

    })
    return { mutate }
}
export const useRemovePhoto = (queryClient: any, pageNumber: any) => {
    const { mutate } = useMutation(api.remove, {
        onSuccess: (_data, id) => {
            queryClient.setQueryData(['photos', pageNumber], (old: any) => {
                const temp = old?.data.filter((o: Interface.Photoprops) => o.id !== id)
                return {
                    data: [...temp]
                }
            })
        },
        onMutate: id => ({ id })
    })
    return { mutate}
}
