import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/useAxios"

const getSinglePRoduct = (id: string | undefined) => {
    const { data, isLoading } = useQuery({
        queryKey: ['singleProduct', id],
        queryFn: () => instance().get(`/products/${id}`).then(res => res.data.data)
    })
    return { data, isLoading }
}

export default getSinglePRoduct