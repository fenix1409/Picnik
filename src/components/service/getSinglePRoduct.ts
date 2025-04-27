import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/useAxios"
import { data } from "react-router-dom"

const getSinglePRoduct = (id: string | undefined) => {
    const { data: { }, isLoading } = useQuery({
        queryKey: ['singleProduct', id],
        queryFn: () => instance().get(`/products/${id}`).then(res => res.data)
    })
    return { data, isLoading }
}

export default getSinglePRoduct