import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/useAxios"

const useGetCategory = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => instance().get('/categories').then(res => res.data.data),
    select: (data) => data.slice(0, 5)
  })
  return categories
}

export default useGetCategory