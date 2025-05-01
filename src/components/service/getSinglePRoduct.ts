import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/useAxios"

const getSinglePRoduct = (id: string | undefined) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['singleProduct', id],
        queryFn: async () => (await instance().get(`/products/${id}`)).data.data
    })
    return { data, isLoading, isError }
}

export default getSinglePRoduct