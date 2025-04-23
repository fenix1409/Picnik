import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/useAxios"

const getProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: () => instance().get('/products').then(res => res.data.data)
  })
  return products
}

export default getProducts