import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/useAxios"

const getCategory = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () => instance().get('/categories').then(res => res.data.data)
  })
  return categories
}

export default getCategory